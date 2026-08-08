// React: hooks para manejar estado, efectos de lado y referencias
import { useState, useEffect, useRef } from "react";

// Componente hijo que muestra los servicios de una estación
import StationServices from "../components/StationServices";

// Hook personalizado para consultar las estaciones (desde API o caché)
import { useStations } from "../hooks/useStation";

const StationList = () => {
  // Obtiene datos del servidor, estado de carga y función para recargar
  const { data: stations = [], isLoading, refetch } = useStations();

  // ID de la estación seleccionada
  const [selectedStation, setSelectedStation] = useState(null);

  // Copia local de datos para permitir cambios (ej: activar/desactivar)
  const [stationList, setStationList] = useState([]);

  // Guarda el botón presionado para devolverle el foco al cerrar el modal
  const lastFocusedRef = useRef(null);

  // Escucha cambios en las estaciones recibidas del hook/API
  useEffect(() => {
    if (stations.length > 0) {
      setStationList((prevList) => {
        // Si ya existen datos guardados en el estado local
        if (prevList.length > 0) {
          return stations.map((newItem) => {
            // Busca si la estación ya existía localmente
            const localItem = prevList.find((p) => p.id === newItem.id);
            // Conserva el status modificado por el usuario si existe
            return localItem
              ? { ...newItem, status: localItem.status }
              : newItem;
          });
        }
        return stations;
      });
    }
  }, [stations]);

  // Cambia el estado de una estación entre "activa" e "inactiva"
  const toggleStationStatus = (id) => {
    const updated = stationList.map((station) =>
      station.id === id
        ? {
            ...station,
            status: station.status === "activa" ? "inactiva" : "activa",
          }
        : station,
    );
    setStationList(updated);
  };

  // Maneja el clic para seleccionar una estación
  const handleSelect = async (id, event) => {
    lastFocusedRef.current = event.currentTarget; // Guarda el botón presionado para devolver el foco
    setSelectedStation(id); // Guarda el ID de la estación seleccionada
    await refetch(); // Consulta si la información está en caché o requiere re-fetch
  };

  // Cierra el detalle, devuelve el foco y consulta el caché/servidor
  const handleClose = async () => {
    setSelectedStation(null);
    lastFocusedRef.current?.focus();
    await refetch();
  };

  // Muestra pantalla de carga inicial
  if (isLoading && !stationList.length) return <p>Cargando estaciones...</p>;

  // Muestra mensaje si no hay datos
  if (!stations.length && !stationList.length) return <p>No hay estaciones</p>;

  return (
    <div>
      <h2>Estaciones</h2>

      {/* Botón manual para probar el caché */}
      <button onClick={() => refetch()} style={{ marginBottom: "1rem" }}>
        🔄 Probar Caché (Refrescar)
      </button>

      {/* Lista principal de estaciones */}
      <ul>
        {stationList.map((station) => (
          <li key={station.id}>
            {/* Botón para abrir el detalle */}
            <button
              onClick={(e) => handleSelect(station.id, e)}
              aria-label={`Seleccionar estación ${station.name}`}
            >
              {station.name} - {station.id}
            </button>

            {/* Botón para activar/inactivar */}
            <button
              onClick={() => toggleStationStatus(station.id)}
              aria-label={`Cambiar estado de la estación ${station.name}`}
            >
              {station.status === "activa" ? "Activa" : "Inactiva"}
            </button>
          </li>
        ))}
      </ul>

      {/* Modal/Detalle de la estación seleccionada */}
      {selectedStation && (
        <StationServices stationId={selectedStation} onClose={handleClose} />
      )}
    </div>
  );
};

export default StationList;

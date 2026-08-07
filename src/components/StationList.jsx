// Importa hooks de React
import { useState, useEffect, useRef } from "react";

// Importa el componente que muestra los servicios de la estación
import StationServices from "../components/StationServices";

// Hook personalizado para obtener estaciones (API / mock)
import { useStations } from "../hooks/useStation";

const StationList = () => {
  // Obtiene datos y estado de carga
  const { data: stations = [], isLoading } = useStations();

  // Guarda la estación seleccionada
  const [selectedStation, setSelectedStation] = useState(null);

  // Estado local para poder modificar estaciones (ej: activar/inactivar)
  const [stationList, setStationList] = useState([]);

  // Referencia para restaurar el foco cuando se cierre el detalle
  const lastFocusedRef = useRef(null);

  // Sincroniza las estaciones del hook con el estado local
  useEffect(() => {
    if (stations.length > 0) {
      setStationList(stations);
    }
  }, [stations]);

  // Alterna el estado de una estación (activa ↔ inactiva)
  const toggleStationStatus = (id) => {
    const updated = stationList.map((station) =>
      station.id === id
        ? {
            ...station,
            status: station.status === "activa" ? "inactiva" : "activa",
          }
        : station,
    );

    // Actualiza el estado local
    setStationList(updated);
  };

  // Maneja la selección de estación
  const handleSelect = (id, event) => {
    // Guarda el botón que tenía el foco
    lastFocusedRef.current = event.currentTarget;

    // Establece la estación seleccionada
    setSelectedStation(id);
  };

  // Cierra el panel de servicios
  const handleClose = () => {
    // Limpia la selección
    setSelectedStation(null);

    // Restaura el foco al botón original
    lastFocusedRef.current?.focus();
  };

  // Carga de estaciones
  if (isLoading) return <p>Cargando estaciones...</p>;

  // Mensaje si no hay estaciones
  if (!stations.length) return <p>No hay estaciones</p>;

  return (
    <div>
      <h2>Estaciones</h2>

      {/* Lista de estaciones */}
      <ul>
        {stationList.map((station) => (
          <li key={station.id}>
            {/* Botón para seleccionar estación */}
            <button
              onClick={(e) => handleSelect(station.id, e)}
              aria-label={`Seleccionar estación ${station.name}`}
            >
              {station.name} - {station.id}
            </button>

            {/* Botón para cambiar estado */}
            <button
              onClick={() => toggleStationStatus(station.id)}
              aria-label={`Cambiar estado de la estación ${station.name}`}
            >
              {/* Muestra estado actual */}
              {station.status === "activa" ? "Activa" : "Inactiva"}
            </button>
          </li>
        ))}
      </ul>

      {/* Render condicional del detalle */}
      {selectedStation && (
        <StationServices stationId={selectedStation} onClose={handleClose} />
      )}
    </div>
  );
};

export default StationList;

// Importa hooks de React para manejo de foco
import { useEffect, useRef } from "react";

// Importa datos
import { relStationsServices, services } from "../data/stations";

// Importa íconos
import { FaToilet, FaMoneyBillWave, FaCar, FaStore } from "react-icons/fa";

// Mapa de íconos por nombre de servicio
const iconMap = {
  Baño: <FaToilet />,
  Cajeros: <FaMoneyBillWave />,
  Soat: <FaCar />,
  Tienda: <FaStore />,
};

const StationServices = ({ stationId, onClose }) => {
  // Referencia al botón "Cerrar"
  const closeButtonRef = useRef(null);

  // Cuando cambia la estación: movemos el foco al botón "Cerrar"
  useEffect(() => {
    if (stationId) {
      closeButtonRef.current?.focus();
    }
  }, [stationId]);

  // 👉 Estado vacío accesible
  if (!stationId) {
    return <p>Seleccione una estación</p>;
  }

  // Normaliza el ID (ej: 1 → 001)
  const normalizedId = String(stationId).padStart(3, "0");

  // Filtra relaciones
  const relations = relStationsServices.filter(
    (rel) => rel.stationId === normalizedId,
  );

  // Obtiene servicios
  const stationServices = relations
    .map((rel) => services.find((s) => s.serviceId === rel.serviceId))
    .filter(Boolean);

  return (
    <div
      tabIndex={-1} // Permite foco programático si se necesita
      aria-labelledby="services-title"
    >
      {/* Botón de cerrar */}
      <button
        ref={closeButtonRef}
        onClick={onClose}
        aria-label="Cerrar servicios de la estación"
      >
        Cerrar
      </button>

      <h3 id="services-title">Servicios</h3>

      {/* Lista de servicios */}
      <div
        style={{ display: "flex", gap: "20px" }}
        role="list"
        aria-label="Lista de servicios disponibles"
      >
        {stationServices.map((service) => (
          <div
            key={service.serviceId} // ✅ clave estable
            role="listitem"
            aria-label={service.name}
            title={service.name}
            style={{
              fontSize: "24px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* Ícono decorativo */}
            <span aria-hidden="true">{iconMap[service.name] || "❓"}</span>

            {/* Nombre visible */}
            <span style={{ marginLeft: "8px" }}>{service.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StationServices;

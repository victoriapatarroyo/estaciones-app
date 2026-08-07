// Lista de estaciones disponibles en la aplicación
export const stations = [
  // Cada objeto representa una estación con su estado actual
  { id: 1, name: "Estación Prueba 1", stationId: "001", status: "activa" },
  { id: 2, name: "Estación Prueba 2", stationId: "002", status: "inactiva" },
  { id: 3, name: "Estación Prueba 3", stationId: "003", status: "activa" },
  { id: 4, name: "Estación Prueba 4", stationId: "004", status: "inactiva" },
];

// Relación entre estaciones y servicios
// Esta estructura simula una tabla intermedia (muchos a muchos)
export const relStationsServices = [
  // stationId se relaciona con el identificador de la estación
  // serviceId se relaciona con el identificador del servicio
  { id: 1, stationId: "001", serviceId: "s1" },
  { id: 2, stationId: "001", serviceId: "s2" },
  { id: 3, stationId: "002", serviceId: "s1" },
  { id: 4, stationId: "003", serviceId: "s3" },
  { id: 5, stationId: "003", serviceId: "s1" },
  { id: 6, stationId: "004", serviceId: "s4" },
];

// Lista de servicios disponibles
export const services = [
  // Cada servicio tiene un identificador y un nombre
  { id: 1, serviceId: "s1", name: "Baño" },
  { id: 2, serviceId: "s2", name: "Cajeros" },
  { id: 3, serviceId: "s3", name: "Soat" },
  { id: 4, serviceId: "s4", name: "Tienda" },
];

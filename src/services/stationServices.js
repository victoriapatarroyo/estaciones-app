// Simulación de datos
import { stations } from "../data/stations";

// Simulación de llamada async (API fake)
export const getStations = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(stations);
    }, 500);
  });
};

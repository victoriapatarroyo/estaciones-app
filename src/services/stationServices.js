// Importa los datos simulados (mock)
import { stations } from "../data/stations";

// Variables fuera de la función, persisten entre llamadas (simulan cache)
let cache = null; // Guarda los datos en memoria
let lastFetchTime = 0; // Guarda el momento del último fetch

// Tiempo en milisegundos antes de considerar la data como "stale" (vieja)
const STALE_TIME = 5000; // 5 segundos

// Función que simula una llamada a API
export const getStations = async () => {
  return new Promise((resolve) => {
    const now = Date.now(); // Tiempo actual

    // Verifica si hay caché válido (menos de 5 segundos)
    if (cache && now - lastFetchTime < STALE_TIME) {
      console.log("Usando cache (data fresca)");
      resolve(cache); // Devuelve los datos en caché
      return; // Detiene la ejecución para no hacer un fetch nuevo
    }

    // Simula la espera de red (0.5 segundos)
    setTimeout(() => {
      console.log("Fetch nuevo (data actualizada)");

      cache = stations; // Guarda la respuesta en memoria
      lastFetchTime = Date.now(); // Actualiza la hora del último fetch

      resolve(stations); // Resuelve la promesa con los datos
    }, 500);
  });
};

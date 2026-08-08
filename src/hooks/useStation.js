// Hooks de React para gestionar estado, efectos y persistencia de funciones
import { useState, useEffect, useCallback } from "react";

// Servicio que obtiene las estaciones (evalúa si usa caché o API)
import { getStations } from "../services/stationServices";

// Hook personalizado para gestionar el estado de las estaciones
export const useStations = () => {
  // Lista de estaciones obtenidas
  const [data, setData] = useState([]);

  // Estado de carga
  const [isLoading, setIsLoading] = useState(true);

  // Función guardada en memoria para obtener los datos de las estaciones
  const fetchStations = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await getStations(); // Llama al servicio (API o caché)
      setData(result); // Guarda los datos obtenidos
    } catch (error) {
      console.error("Error cargando estaciones:", error); // Manejo de errores
    } finally {
      setIsLoading(false); // Desactiva el indicador de carga
    }
  }, []);

  // Carga las estaciones automáticamente al montar el componente
  useEffect(() => {
    fetchStations();
  }, [fetchStations]);

  // Retorna los datos, el estado de carga y la función para recargar manualmente
  return { data, isLoading, refetch: fetchStations };
};

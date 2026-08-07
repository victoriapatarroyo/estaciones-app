// Importa hooks básicos de React
import { useState, useEffect } from "react";

// Importa la función que simula la llamada a la API
import { getStations } from "../services/stationServices";

// Hook personalizado para obtener estaciones
export const useStations = () => {
  // Estado para guardar los datos de estaciones
  const [data, setData] = useState([]);

  // Estado para manejar el loading
  const [isLoading, setIsLoading] = useState(true);

  // useEffect se ejecuta una sola vez al montar el componente
  useEffect(() => {
    // Función async para obtener datos
    const fetchStations = async () => {
      try {
        // Llama al servicio (simula API)
        const result = await getStations();

        // Guarda las estaciones en el estado
        setData(result);
      } catch (error) {
        // Manejo básico de errores
        console.error("Error cargando estaciones:", error);
      } finally {
        // Siempre desactiva el loading
        setIsLoading(false);
      }
    };

    // Ejecuta la función
    fetchStations();
  }, []); // [] = solo se ejecuta una vez

  // Retorna los datos y el estado de carga
  return { data, isLoading };
};

// Importa el componente que muestra la lista de estaciones
import StationList from "./components/StationList";

// Importa ícono para representar visualmente la app
import { FaGasPump } from "react-icons/fa";

// Componente principal de la aplicación
function App() {
  return (
    <div>
      {/* Título principal de la aplicación */}
      <h1>
        <FaGasPump />
        Estaciones App
      </h1>

      {/* Componente que renderiza la lista de estaciones */}
      <StationList />
    </div>
  );
}

// Exporta el componente App para ser usado en main.jsx
export default App;

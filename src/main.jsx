import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Importa herramientas de React Query para manejo de datos remotos
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Crea una instancia de QueryClient (gestiona caché y queries)
const queryClient = new QueryClient();

// Renderiza la aplicación en el elemento con id "root"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Proveedor de React Query que envuelve toda la app */}
    <QueryClientProvider client={queryClient}>
      {/* Componente principal */}
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);

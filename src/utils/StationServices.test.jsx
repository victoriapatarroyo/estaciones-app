// Importaciones de testing
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import StationServices from "../components/StationServices";

// Mock de datos de estaciones y servicios
vi.mock("../data/stations", () => ({
  relStationsServices: [
    { stationId: "001", serviceId: "1" },
    { stationId: "001", serviceId: "2" },
  ],
  services: [
    { serviceId: "1", name: "Baño" },
    { serviceId: "2", name: "Cajeros" },
  ],
}));

describe("StationServices", () => {
  test("Renderiza servicios al seleccionar estación", () => {
    // Render del componente con estación válida
    render(<StationServices stationId="1" />);

    // Verifica título
    expect(screen.getByText("Servicios")).toBeInTheDocument();

    // Verifica servicios renderizados
    expect(screen.getByText("Baño")).toBeInTheDocument();
    expect(screen.getByText("Cajeros")).toBeInTheDocument();
  });

  test("Muestra mensaje si no hay estación seleccionada", () => {
    // Render sin estación
    render(<StationServices stationId={null} />);

    // Verifica mensaje de estado vacío
    expect(screen.getByText(/Seleccione una estación/i)).toBeInTheDocument();
  });
});

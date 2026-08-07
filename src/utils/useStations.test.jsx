import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { vi } from "vitest";
import { useStations } from "../hooks/useStation";

// Mock de fetch
global.fetch = vi.fn();

describe("useStations", () => {
  // Creamos un cliente de React Query para tests
  const createWrapper = () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false, // evita reintentos en tests
        },
      },
    });

    return ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };

  beforeEach(() => {
    fetch.mockClear();
  });

  test("obtiene estaciones desde API", async () => {
    const mockData = [
      { id: "1", name: "Estación 1" },
      { id: "2", name: "Estación 2" },
    ];

    fetch.mockResolvedValueOnce({
      json: async () => mockData,
    });

    const { result } = renderHook(() => useStations(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.data).toBeDefined();
    });

    expect(result.current.data.length).toBe(2);
    expect(fetch).toHaveBeenCalled();
  });
});

/**
 * setupTests.js
 *
 * Archivo de configuración global para los tests con Vitest.
 * Se ejecuta automáticamente antes de cada suite de pruebas.
 *
 * Aquí extendemos funcionalidades, configuramos mocks globales
 * y preparamos el entorno de testing.
 */

// Extiende expect con matchers de Testing Library
// Permite usar: toBeInTheDocument, toHaveTextContent, etc.
import "@testing-library/jest-dom";

/**
 * Opcional: limpiar mocks automáticamente después de cada test
 * (buena práctica para evitar efectos colaterales)
 */
import { afterEach } from "vitest";

afterEach(() => {
  // Limpia todos los mocks (fetch, funciones simuladas, etc.)
  vi.clearAllMocks();
});

/**
 * Mock global de fetch (opcional)
 * Útil si varios tests usan llamadas HTTP
 */
import { vi } from "vitest";

global.fetch = vi.fn();

/**
 * Opcional: configuración adicional
 *
 * Puedes agregar aquí:
 * - mocks de localStorage
 * - mocks de window.matchMedia (para responsive)
 * - mocks de IntersectionObserver (para lazy loading)
 */

// Mock de localStorage (ejemplo)
const localStorageMock = (() => {
  let store = {};

  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

/**
 * Mock de matchMedia (para tests con media queries)
 */
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

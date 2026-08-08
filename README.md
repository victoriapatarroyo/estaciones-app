---
# ⛽ Estaciones App

Aplicación frontend desarrollada en React para la gestión de estaciones de servicio (gasolineras) y la visualización de servicios asociados.

Permite seleccionar estaciones, visualizar sus servicios mediante iconos, cambiar su estado entre activa/inactiva y gestionar la consulta de datos mediante un sistema eficiente de caché.

---

# 📦 Tecnologías utilizadas

* React
* Hooks (`useState`, `useEffect`, `useCallback`, `useRef`)
* JavaScript (ES6+)
* React Icons

---

# ⚡ Estrategia de Caché y Stale Data

Para optimizar el rendimiento y reducir peticiones innecesarias al servidor, la aplicación implementa una estrategia de almacenamiento en memoria con tiempo de expiración:

* **Stale Time (Tiempo de obsolescencia):** Se define un periodo de tiempo ($5$ segundos) durante el cual los datos almacenados en memoria se consideran "frescos" (*fresh*).
* **Reutilización de Caché:** Si se solicitan las estaciones dentro de ese margen de tiempo, el servicio retorna la respuesta guardada en memoria instantáneamente sin realizar una nueva llamada de red.
* **Actualización Automática:** Una vez transcurrido el `STALE_TIME`, los datos se marcan como obsoletos (*stale*) y la siguiente consulta realiza un nuevo *fetch* para actualizar la información.
* **Control de Peticiones en Vuelo:** Se gestionan las promesas en curso para evitar solicitudes duplicadas cuando ocurren eventos o clics simultáneos.

---

# ⚙️ Instalación y ejecución

```bash
git clone https://github.com/victoriapatarroyo/estaciones-app.git

cd estaciones-app

npm install

npm run dev

```

---

# 👩‍💻 Uso de la aplicación

1. Al iniciar la aplicación, se consulta el servicio y se muestra el listado de estaciones disponibles.
2. Selecciona una estación haciendo clic sobre ella para ver los detalles.
3. Al seleccionar una estación, se visualizarán sus servicios asociados mediante iconos.
4. Puedes cambiar el estado de la estación (activa / inactiva) de forma local.
5. Cuenta con un botón para refrescar manualmente y verificar en consola cuándo los datos provienen del caché (`Usando cache`) o de una nueva consulta (`Fetch nuevo`).

---

# 🎨 Interfaz

La aplicación utiliza iconografía para mejorar la experiencia de usuario.

El encabezado incluye un ícono representativo de estaciones de servicio (⛽) usando **React Icons**, facilitando la identificación visual del propósito de la aplicación.

---

# 🧠 Enfoque

Se implementó la solución siguiendo los lineamientos de la prueba técnica, aplicando buenas prácticas de desarrollo en React, manejo de estado, optimización de renderizado, accesibilidad (gestión de foco con `useRef`) y estrategias de caché.

---

# 📂 Estructura del proyecto

```text
src/
 ├── components/
 │   ├── StationList.jsx
 │   └── StationServices.jsx
 │
 ├── hooks/
 │   └── useStation.js
 │
 ├── services/
 │   └── stationServices.js
 │
 ├── data/
 │   └── stations.js
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css

```

---

# 📌 Notas

Este proyecto fue desarrollado como parte de una prueba técnica, aplicando buenas prácticas de desarrollo frontend y optimización de rendimiento.

---

# 👩‍💻 Autora

**Victoria Eugenia Patarroyo**

GitHub: [https://github.com/victoriapatarroyo](https://github.com/victoriapatarroyo)

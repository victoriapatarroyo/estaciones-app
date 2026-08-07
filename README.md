# ⛽ Estaciones App

Aplicación frontend desarrollada en React para la gestión de estaciones de servicio (gasolineras) y la visualización de servicios asociados.

Permite seleccionar estaciones, visualizar sus servicios mediante iconos y cambiar su estado entre activa/inactiva.

# 📦 Tecnologías utilizadas

React

Hooks (useState, useEffect)

React Query (caché y manejo de datos)

JavaScript (ES6)

React Icons


# ⚙️ Instalación y ejecución

git clone https://github.com/victoriapatarroyo/estaciones-app.git

cd estaciones-app

npm install

npm run dev


# 👩‍💻 Uso de la aplicación

Al iniciar la aplicación, se muestra un listado de estaciones disponibles.

Selecciona una estación haciendo clic sobre ella.

Al seleccionar una estación, se visualizarán sus servicios asociados mediante iconos.

Puedes cambiar el estado de la estación (activa / inactiva) según la interacción disponible en la interfaz.


# 🎨 Interfaz

La aplicación utiliza iconografía para mejorar la experiencia de usuario.

El encabezado incluye un ícono representativo de estaciones de servicio (⛽) usando React Icons, facilitando la identificación visual del propósito de la aplicación.


# 🧠 Enfoque

Se implementó la solución siguiendo los lineamientos de la prueba técnica, aplicando buenas prácticas de desarrollo en React, manejo de estado y optimización de renderizado.


# 📂 Estructura del proyecto
```
src/
 ├── components/
 │   ├── StationList.jsx
 │   ├── StationServices.jsx
 │
 ├── hooks/
 │   └── useStation.js
 │
 ├── data/
 │   └── stations.js
 │
 ├── services/
 │   └── api.js
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

# 📌 Notas

Este proyecto fue desarrollado como parte de una prueba técnica, aplicando buenas prácticas de desarrollo frontend y optimización de rendimiento.

# 👩‍💻 Autora

Victoria Eugenia Patarroyo

GitHub: https://github.com/victoriapatarroyo

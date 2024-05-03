<h1 align="center">🎞 Filmoteca Diego</h1>

<h3>Proyecto de filmoteca desarrollado con Node.js, Express, MySQL y Handlebars, que permite crear, ver, actualizar y borrar 
películas.</h3>


## 🚀 Instalación

1. Clonar el repositorio.
2. Instalar las dependencias con `npm install`.

## ⚙️ Configuración

1. Crear una base de datos MySQL.
2. Configurar las credenciales en `config/db.config.js`.

## ℹ️ Uso

1. Ejecutar el servidor con `nodemon run dev`.
2. Acceder a `http://localhost:3000` en tu navegador.

## 🎬 Funcionalidades

- **Crear película:** `POST /peliculas`
- **Ver todas las películas:** `GET /peliculas`
- **Actualizar película:** `PUT /peliculas/:id`
- **Eliminar película:** `DELETE /peliculas/:id`

## 🤝 Contribución

1. Forkea el repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commits.
4. Sube tu rama (`git push origin feature/nueva-caracteristica`).
5. Crea un Pull Request.

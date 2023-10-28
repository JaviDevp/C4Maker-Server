# C4 Maker - Servidor

Este es el repositorio del servidor para el proyecto [C4MakerReact](https://github.com/JaviDevp/C4MakerReact), una aplicación web colaborativa para crear modelos C4. El servidor se encarga de la lógica de negocio y la gestión de conexiones en tiempo real a través de Socket.io. Utiliza tecnologías como Node.js, Express, Sequelize y otras dependencias.

Cualquier conexión adicional de sockets, se puede hacer en el archivo `models/sockets.js` y cualquier middleware adicional de express, se puede realizar en el archivo `models/server.js`

## Tecnologías Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [Socket.io](https://socket.io/)
- [uuid](https://www.npmjs.com/package/uuid)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [pg-hstore](https://www.npmjs.com/package/pg-hstore)

## Instalación

Para ejecutar este servidor en tu entorno local, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/JaviDevp/C4Maker-Server.git
   ```

2. Ingresa al directorio del servidor:

   ```bash
   cd c4-maker-server
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Configura las variables de entorno en un archivo .env con las credenciales necesarias.

5. Inicia el servidor:

   ```bash
   npm start
   ```

## Uso

Este servidor se encarga de la gestión de conexiones en tiempo real para la aplicación "C4 Maker." Se comunica con el cliente a través de Socket.io para permitir la colaboración en tiempo real en la creación de modelos C4.

El repositorio del cliente se encuentra [aquí](https://github.com/JaviDevp/C4Maker-Server)

## Contacto

- Correo Electrónico: javiervidal.dev@gmail.com
- LinkedIn: [/in/javier-vidal-dev/](https://www.linkedin.com/in/javier-vidal-dev/)
- GitHub: [JaviDevp](https://github.com/JaviDevp)

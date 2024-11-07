# Yacu Selva

Bienvenido al repositorio del sitio web de **Yacu Selva**, una distribuidora de agua de mesa embotellada en Nueva Cajamarca, Perú.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Estado del Proyecto](#estado-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación y Ejecución](#instalación-y-ejecución)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Descripción

**Yacu Selva** es una distribuidora de agua de mesa embotellada cuya misión es convertirse en la líder en su localidad, Nueva Cajamarca, Perú. Actualmente, ofrecemos la reposición o compra de garrafas de 20L de agua de mesa **Yacu Selva**.

## Estado del Proyecto

Este proyecto se encuentra en **desarrollo**.

## Tecnologías Utilizadas

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [CSS3](https://www.w3.org/Style/CSS/)
- [Auth0](https://auth0.com/)
- [Turso](https://turso.tech/)

## Instalación y Ejecución

### Requisitos Previos

- [Node.js](https://nodejs.org/) instalado en su máquina.
- Credenciales de **Auth0** y **Turso** configuradas.

### Pasos de Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/DannerDQ/yacuselva.git
   ```

2. **Ingresar al directorio del proyecto**

   ```bash
   cd yacuselva
   ```

3. **Instalar las dependencias**

   ```bash
   npm install
   ```

4. **Configurar las variables de entorno**

   Crear un archivo `.env.local` en la raíz del proyecto y agregar las credenciales necesarias:

   ```env
   AUTH0_DOMAIN=tu-dominio.auth0.com
   AUTH0_CLIENT_ID=tu-client-id
   AUTH0_CLIENT_SECRET=tu-client-secret
   TURSO_DB_URL=tu-url-de-turso
   TURSO_DB_TOKEN=tu-token-de-turso
   ```

5. **Ejecutar el proyecto en modo desarrollo**

   ```bash
   npm run dev
   ```

6. **Abrir en el navegador**

   Visita [http://localhost:3000](http://localhost:3000) para ver el sitio web en funcionamiento.

## Licencia

Este proyecto está bajo la licencia **Creative Commons - No Comercial (CC BY-NC)**. Para más información, visita [este enlace](https://creativecommons.org/licenses/by-nc/4.0/).

## Contacto

- **Desarrollador**: [Danner Díaz Quispe](mailto:diazquispedanner@gmail.com)
- **Empresa**: [Yacu Selva](mailto:jhodely1_5_93@hotmail.com)
- **Dirección**: JR LOS SAUCES S/N CUADRA 1 - LA ALAMEDA DEL EDÉN - Nueva Cajamarca - Perú

---

Visita nuestro sitio web en producción: [Yacu Selva](https://yacu-selva.vercel.app)
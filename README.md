# Proyecto XYZ - Guía de Inicio

¡Bienvenido a Proyecto XYZ! Esta guía te ayudará a poner en marcha el proyecto de manera rápida y sencilla. Asegúrate de seguir cada paso detallado a continuación.

## Pasos Iniciales

1. **Clona el Repositorio:**

2. **Instala las Dependencias:**
   - Ve al directorio del proyecto:
     ```bash
     cd prompapp
     ```
   - Ejecuta uno de los siguientes comandos según tu gestor de paquetes preferido:
     ```bash
     npm install
     # o
     yarn install
     # o
     pnpm install
     # o
     bun install
     ```

3. **Inicia el Servidor de Desarrollo:**
   - Utiliza uno de los siguientes comandos para iniciar el servidor de desarrollo:
     ```bash
     npm run dev
     # o
     yarn dev
     # o
     pnpm dev
     # o
     bun dev
     ```

## Archivo de Variables de Entorno

Antes de ejecutar el proyecto, asegúrate de configurar correctamente las variables de entorno. Crea un archivo llamado `.env` en el directorio raíz del proyecto y añade las siguientes variables con sus respectivos valores:

```env
# Configuración de Google
GOOGLE_ID=
GOOGLE_CLIENT_SECRET=

# Configuración de MongoDB
MONGODB_URI=

# Configuración de NextAuth
NEXTAUTH_URL=
NEXTAUTH_URL_INTERNAL=
NEXTAUTH_SECRET=
```

Asegúrate de reemplazar cada campo (`GOOGLE_ID`, `GOOGLE_CLIENT_SECRET`, `MONGODB_URI`, `NEXTAUTH_URL`, `NEXTAUTH_URL_INTERNAL`, y `NEXTAUTH_SECRET`) con tus propias credenciales y configuraciones.

## ¡Listo para Desarrollar!

Con estos pasos, deberías tener el proyecto prompapp en funcionamiento en tu entorno local. ¡Ahora estás listo para comenzar a desarrollar! Si encuentras algún problema, asegúrate de revisar la documentación oficial o busca ayuda en nuestra comunidad en línea.

¡Feliz codificación!
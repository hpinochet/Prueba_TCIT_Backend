# TCIT_Prueba_Backend

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos en tu sistema:

1. **PostgreSQL**: Se requiere que PostgreSQL esté instalado y en ejecución en tu sistema.
   
2. **Node.js**: Asegúrate de tener Node.js instalado en tu máquina.

## Pasos para Configurar el Backend

### 1. Configuración del Entorno

Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables:

* PORT=8000
* ENV=development
* PG_USER=tu_usuario_postgres
* PG_PASSWORD=tu_contraseña_postgres
* PG_DB=nombre_de_tu_base_de_datos

Reemplaza `tu_usuario_postgres`, `tu_contraseña_postgres` y `nombre_de_tu_base_de_datos` con la configuración adecuada para tu entorno.

### 2. Instalación de Dependencias

Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

npm install


### 3. Creación de la Base de Datos

Para crear la base de datos especificada en el archivo `.env`, utiliza el siguiente comando:

npm run db:create


### 4. Iniciar el Servidor

Finalmente, para iniciar el servidor backend, utiliza el siguiente comando:

npm start

El servidor se ejecutará en el puerto especificado en el archivo `.env` (por defecto, puerto 5000).

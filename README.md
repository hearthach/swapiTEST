## SWAPI API - JestTEST
## Descripción del Proyecto

Este proyecto es una API desarrollada con Node.js y el framework Serverless. Está diseñada para interactuar con la API SWAPI (Star Wars API), permitiendo realizar operaciones específicas y almacenar información en una base de datos MySQL. Incluye endpoints para obtener y agregar personajes de Star Wars, con una adaptación de los modelos de datos al español.

### Instalación
### Pre-requisitos

Node.js (versión 12.x o superior)
npm (incluido con Node.js)
Cuenta AWS y configuración de AWS CLI
Configuración del Ambiente
Clona el repositorio:
git clone [URL del repositorio]
Navega al directorio del proyecto:
cd swapi-rimac-v1
Instala las dependencias:
npm install
Configura el archivo .env con tus credenciales y configuraciones de la base de datos MySQL.

## Script de BD
-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS swapirimac;

-- Crear tabla
CREATE TABLE IF NOT EXISTS people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    birth_year VARCHAR(10),
    eye_color VARCHAR(30),
    gender VARCHAR(10),
    hair_color VARCHAR(30),
    height INT,
    mass INT,
    skin_color VARCHAR(30),
    homeworld VARCHAR(255),
    created DATETIME,
    edited DATETIME,
    url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX(name)
);

## Dependencias

- **AWS SDK**: Utilizado para interactuar con AWS Lambda y otros servicios de AWS.
- **Serverless Framework**: Facilita el despliegue y la gestión de aplicaciones serverless.
- **MySQL Driver (mysql2)**: Proporciona conexión y operaciones con MySQL.
- **Axios**: Cliente HTTP para realizar solicitudes a APIs externas.
- **Dotenv**: Carga variables de entorno desde un archivo `.env`.
- **Jest**: Framework de pruebas para JavaScript.
- **Supertest**: Utilidad para pruebas de APIs HTTP.
- **ESLint**: Herramienta de análisis de código estático.
- **Prettier**: Formateador de código.

## Instalación de Dependencias

Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm install aws-sdk mysql2 axios dotenv
npm install --save-dev jest supertest eslint prettier
npm install swagger-ui-express swagger-jsdoc --save
```

## Ejecución
Para ejecutar la aplicación en un entorno local, usa el siguiente comando:
npm start

## Uso de la API
Endpoints Disponibles
    POST /people: Agrega un nuevo personaje a la base de datos.
    GET /people: Obtiene todos los personajes de la base de datos.
    GET /swapi/people: Obtiene todos los personajes desde SWAPI.
    GET /swapi/people/{id}: Obtiene un personaje específico de SWAPI.

## Ejemplo de Uso
Agregar un Personaje
    curl -X POST http://localhost:3000/dev/people -H "Content-Type: application/json" -d '{"name": "Han Solo", ...}'
Obtener Personajes
    curl http://localhost:3000/dev/people

## Pruebas
Ejecuta las pruebas unitarias con:
    npm test

## Despliegue
Para desplegar la aplicación en AWS, asegúrate de tener configurado AWS CLI y luego ejecuta:
    serverless deploy

## Despliegue-OffLine
Para desplegar la aplicación en AWS, asegúrate de tener configurado AWS CLI y luego ejecuta:
    serverless offline or npm start

## Documentación de API
La documentación de Swagger está disponible en /docs cuando la API se ejecuta localmente.

## Pruebas POSTMAN
Se puede utilizar postman para realizar pruebas. se adjunta colección.



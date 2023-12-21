const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'API de SWAPI Rimac',
      version: '1.0.0',
      description: 'Esta es una API desarrollada para interactuar con SWAPI y realizar operaciones específicas.',
    },
    servers: [
      {
        url: 'http://localhost:3000/dev',
        description: 'Servidor de desarrollo local',
      },
    ],
  };
  
  const options = {
    swaggerDefinition,
    apis: ['./swagger/swaggerDocs.js'],
  };
  
  const swaggerSpec = require('swagger-jsdoc')(options);
  
  module.exports = swaggerSpec;
  
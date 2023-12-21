// services/swapiService.js

const axios = require('axios');

const SWAPI_BASE_URL = 'https://swapi.py4e.com/api';

const swapiService = {
    getPerson: async (id) => {
        try {
            const response = await axios.get(`${SWAPI_BASE_URL}/people/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error al obtener datos de SWAPI:', error);
            throw error;
        }
    },

    getAllPeople: async () => {
        try {
            const response = await axios.get(`${SWAPI_BASE_URL}/people`);
            return response.data.results; // Asumiendo que los resultados están en la propiedad "results"
        } catch (error) {
            console.error('Error al obtener todos los personajes de SWAPI:', error);
            throw error;
        }
    },

    // Puedes agregar más métodos aquí si necesitas interactuar con otros endpoints de SWAPI
};

module.exports = swapiService;

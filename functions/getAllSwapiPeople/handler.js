// functions/getAllSwapiPeople/handler.js

const swapiService = require('../../services/swapiService');

module.exports.getAllSwapiPeople = async () => {
    try {
        const people = await swapiService.getAllPeople();
        return {
            statusCode: 200,
            body: JSON.stringify(people)
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error al obtener personajes de SWAPI' })
        };
    }
};

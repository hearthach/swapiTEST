// functions/getPeople/handler.js

const PeopleModel = require('../../models/peopleModel');

module.exports.getPeople = async (event) => {
    try {
        // Comprueba si se proporcionó un ID
        const personId = event.queryStringParameters && event.queryStringParameters.id;

        let response;
        if (personId) {
            // Obtener un personaje específico
            const person = await PeopleModel.getPersonById(personId);
            response = person ? JSON.stringify(person) : JSON.stringify({ message: 'Persona no encontrada' });
        } else {
            // Obtener todos los personajes
            const people = await PeopleModel.getAllPeople();
            response = JSON.stringify(people);
        }

        return {
            statusCode: 200,
            body: response
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error al obtener la información' })
        };
    }
};

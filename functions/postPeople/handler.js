// functions/postPeople/handler.js

const PeopleModel = require('../../models/peopleModel');
const { traducirAtributosAIngles } = require('../../utils/traductor');

module.exports.postPerson = async (event) => {
    try {
        const data = JSON.parse(event.body);

        // Verifica si la entrada es un arreglo o un objeto individual
        const isMultiple = Array.isArray(data);
        const peopleData = isMultiple ? data : [data];

        // Traduce cada persona del español al inglés
        const translatedPeopleData = peopleData.map(traducirAtributosAIngles);

        // Agrega una persona o múltiples personas
        if (isMultiple) {
            await PeopleModel.addMultiplePeople(translatedPeopleData);
        } else {
            await PeopleModel.addPerson(translatedPeopleData[0]);
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: isMultiple ? 'Personas agregadas con éxito' : 'Persona agregada con éxito' }),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error al agregar la(s) persona(s)' })
        };
    }
};

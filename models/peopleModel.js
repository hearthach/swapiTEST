// models/peopleModel.js

const databaseService = require('../services/databaseService');
const translation = require('../utils/traductor')
// const traducirAtributos = require('../utils/traductor');

class PeopleModel {
    async getAllPeople() {
        const query = 'SELECT * FROM people';
        const people = await databaseService.executeQuery(query);
        // return people.map(traducirAtributos);
        return people.map(translation.traducirAtributos);
    }

    async getPersonById(id) {
        const query = 'SELECT * FROM people WHERE id = ?';
        const [person] = await databaseService.executeQuery(query, [id]);
        return person ? translation.traducirAtributos(person) : null;
    }

    async addPerson(personData) {
        const query = 'INSERT INTO people SET ?';
        return await databaseService.executeQuery(query, personData);
    }

    async addMultiplePeople(peopleData) {
        // Prepara los valores para la inserción múltiple
        const values = peopleData.map(person => [
            person.name,
            person.birth_year,
            person.eye_color,
            person.gender,
            person.hair_color,
            person.height,
            person.mass,
            person.skin_color,
            person.homeworld,
            person.url,
            person.created,
            person.edited
        ]);

        const query = 'INSERT INTO people (name, birth_year, eye_color, gender, hair_color, height, mass, skin_color, homeworld, url, created, edited) VALUES ?';
        return await databaseService.executeQuery(query, [values]);
    }

    async addPerson(personData) {
        // Convertir las fechas al formato de MySQL
        personData.created = this.convertToMySQLDateTime(personData.created);
        personData.edited = this.convertToMySQLDateTime(personData.edited);

        const query = 'INSERT INTO people SET ?';
        return await databaseService.executeQuery(query, personData);
    }

    convertToMySQLDateTime(dateTime) {
        return dateTime ? new Date(dateTime).toISOString().slice(0, 19).replace('T', ' ') : null;
    }

    // Puedes agregar más métodos según sea necesario
}

module.exports = new PeopleModel();

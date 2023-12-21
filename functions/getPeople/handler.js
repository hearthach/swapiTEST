const PeopleModel = require("../../models/peopleModel");

module.exports.getPeople = async (event) => {
  try {
    // Para comprobar el ID
    const personId =
      event.queryStringParameters && event.queryStringParameters.id;

    let response;
    if (personId) {
      // para otener un personaje specicoc
      const person = await PeopleModel.getPersonById(personId);
      response = person
        ? JSON.stringify(person)
        : JSON.stringify({ message: "Persona no encontrada" });
    } else {
      // para obtener todos.
      const people = await PeopleModel.getAllPeople();
      response = JSON.stringify(people);
    }

    return {
      statusCode: 200,
      body: response,
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error al obtener la información" }),
    };
  }
};

const swapiService = require("../../services/swapiService");
const { traducirAtributos } = require("../../utils/traductor");

module.exports.getSwapiPerson = async (event) => {
  try {
    const personId = event.pathParameters.id;
    const person = await swapiService.getPerson(personId);

    const translatedPerson = traducirAtributos(person);

    return {
      statusCode: 200,
      body: JSON.stringify(translatedPerson),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error al obtener la persona de SWAPI" }),
    };
  }
};

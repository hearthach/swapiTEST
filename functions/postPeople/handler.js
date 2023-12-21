const PeopleModel = require("../../models/peopleModel");
const { traducirAtributosAIngles } = require("../../utils/traductor");

module.exports.postPerson = async (event) => {
  try {
    const data = JSON.parse(event.body);

    const isMultiple = Array.isArray(data);
    const peopleData = isMultiple ? data : [data];

    // sirve pora traducir cada persona del español al inglés
    const translatedPeopleData = peopleData.map(traducirAtributosAIngles);

    // aqui agregamos una persona o múltiples personas
    if (isMultiple) {
      await PeopleModel.addMultiplePeople(translatedPeopleData);
    } else {
      await PeopleModel.addPerson(translatedPeopleData[0]);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: isMultiple
          ? "Personas agregadas con éxito"
          : "Persona agregada con éxito",
      }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error al agregar la(s) persona(s)" }),
    };
  }
};

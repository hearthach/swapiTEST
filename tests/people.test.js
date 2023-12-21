// tests/peopleTest.js
const PeopleModel = require("../models/peopleModel");
const databaseService = require("../services/databaseService");

// Simulando databaseService.executeQuery
jest.mock("../services/databaseService", () => ({
  executeQuery: jest.fn(),
}));

// Simular PeopleModel.convertToMySQLDateTime
PeopleModel.convertToMySQLDateTime = jest
  .fn()
  .mockImplementation((dateTime) => {
    return dateTime
      ? new Date(dateTime).toISOString().slice(0, 19).replace("T", " ")
      : null;
  });

describe("PeopleModel Tests", () => {
  test("Prueba unitaria para getPersonById", async () => {
    // Configura los datos simulados (mocked data)
    const mockPerson = {
      id: 1,
      nombre: "Luke Skywalker", // Cambiado de 'name' a 'nombre'
      // ...otros atributos en español...
    };
    databaseService.executeQuery.mockResolvedValueOnce([mockPerson]);

    // Llama a PeopleModel.getPersonById
    const result = await PeopleModel.getPersonById(1);

    // Realiza aserciones para verificar el resultado esperado
    expect(databaseService.executeQuery).toHaveBeenCalledWith(
      "SELECT * FROM people WHERE id = ?",
      [1]
    );
    expect(result).toEqual(mockPerson);
  });

  test("Prueba unitaria para getAllPeople", async () => {
    const mockPeople = [
      { id: 1, nombre: "Luke Skywalker" },
      { id: 2, nombre: "Darth Vader" },
    ];
    databaseService.executeQuery.mockResolvedValueOnce(mockPeople);

    const result = await PeopleModel.getAllPeople();

    expect(databaseService.executeQuery).toHaveBeenCalledWith(
      "SELECT * FROM people"
    );
    expect(result).toEqual(mockPeople);
  });

  test("Prueba unitaria para addPerson", async () => {
    const newPerson = {
      name: "Leia Organa",
      birth_year: "19BBY",
      eye_color: "brown",
      gender: "female",
      hair_color: "brown",
      height: "150",
      homeworld: "https://swapi.dev/api/planets/2/",
      mass: "49",
      skin_color: "light",
      url: "https://swapi.dev/api/people/5",
      created: new Date().toISOString(),
      edited: new Date().toISOString()
    };

    databaseService.executeQuery.mockResolvedValueOnce({ insertId: 1 });

    await PeopleModel.addPerson(newPerson);

    // Verifica que convertToMySQLDateTime se haya llamado dos veces (para 'created' y 'edited')
    expect(PeopleModel.convertToMySQLDateTime).toHaveBeenCalledTimes(2);

    // Verifica que executeQuery se llame
    expect(databaseService.executeQuery).toHaveBeenCalled();
  });

  // Aquí puedes agregar más pruebas según sea necesario
});

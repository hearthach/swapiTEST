function mapearDatosParaBD(datosSwapi) {
  return {
    nombre: datosSwapi.name,
    año_nacimiento: datosSwapi.birth_year,
    color_ojos: datosSwapi.eye_color,
    género: datosSwapi.gender,
    color_cabello: datosSwapi.hair_color,
    altura: parseInt(datosSwapi.height, 10),
    peso: parseInt(datosSwapi.mass, 10),
    color_piel: datosSwapi.skin_color,
    mundo_natal: datosSwapi.homeworld,
    url: datosSwapi.url,
    creado: new Date(datosSwapi.created),
    editado: new Date(datosSwapi.edited),
  };
}

module.exports = mapearDatosParaBD;

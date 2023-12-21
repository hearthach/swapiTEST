// utils/dataMapper.js

function mapearDatosParaBD(datosSwapi) {
    // Suponiendo que la estructura de tu tabla 'people' en MySQL coincide con estos campos
    return {
        nombre: datosSwapi.name,
        año_nacimiento: datosSwapi.birth_year,
        color_ojos: datosSwapi.eye_color,
        género: datosSwapi.gender,
        color_cabello: datosSwapi.hair_color,
        altura: parseInt(datosSwapi.height, 10),
        peso: parseInt(datosSwapi.mass, 10),
        color_piel: datosSwapi.skin_color,
        mundo_natal: datosSwapi.homeworld, // Puedes necesitar procesamiento adicional aquí
        url: datosSwapi.url,
        creado: new Date(datosSwapi.created),
        editado: new Date(datosSwapi.edited)
        // Agrega más campos si es necesario
    };
}

module.exports = mapearDatosParaBD;

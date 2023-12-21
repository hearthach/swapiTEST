// utils/traductor.js

function traducirAtributos(objeto) {
    const mapeoAtributos = {
        'name': 'nombre',
        'height': 'altura',
        'mass': 'peso',
        'hair_color': 'color_cabello',
        'skin_color': 'color_piel',
        'eye_color': 'color_ojos',
        'birth_year': 'año_nacimiento',
        'gender': 'género',
        'homeworld': 'planeta_origen',
        'created': 'fecha_creación',
        'edited': 'fecha_edición',
        // Agrega aquí más mapeos si es necesario
    };

    let objetoTraducido = {};
    for (const key in objeto) {
        const keyTraducida = mapeoAtributos[key] || key;
        objetoTraducido[keyTraducida] = objeto[key];
    }
    return objetoTraducido;
}

function traducirAtributosAIngles(objeto) {
    const mapeoAtributos = {
        'nombre': 'name',
        'año_nacimiento': 'birth_year',
        'color_ojos': 'eye_color',
        'género': 'gender',
        // ...otros mapeos...
    };

    let objetoEnIngles = {};
    for (const key in objeto) {
        const keyEnIngles = mapeoAtributos[key] || key;
        objetoEnIngles[keyEnIngles] = objeto[key];
    }
    return objetoEnIngles;
}

module.exports = {
    traducirAtributos,
    traducirAtributosAIngles
};

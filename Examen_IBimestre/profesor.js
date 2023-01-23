// Examen_IBimiestre/profesor.js

class Profesor{
    constructor(id, nombre, apellido, edad, materias) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.materias = materias;
    }

}

module.exports.Profesor = Profesor;
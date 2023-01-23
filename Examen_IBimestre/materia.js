// Examen_IBimiestre/materia.js

class Materia {
    constructor(id, nombre, semestre, numeroEstudiantes, facultad) {
        this.id = id;
        this.nombre = nombre;
        this.semestre = semestre;
        this.numeroEstudiantes = numeroEstudiantes;
        this.facultad = facultad;
    }
}

module.exports.Materia = Materia;
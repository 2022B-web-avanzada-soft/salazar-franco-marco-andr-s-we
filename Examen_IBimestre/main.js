
const {menuPrincipal, profesor, ingresarDatosProfesor, leerProfesor, editarProfesor, cambiarNombreProfesor,
    cambiarApellidoProfesor, cambiarEdadProfesor, agregarMateriaProfesor, eliminarProfesor, materia, ingresarDatosMateria,
    leerMateria,
    editarMateria,
    cambiarNombreMateria,
    cambiarSemestreMateria,
    cambiarEstudiantesMateria,
    cambiarFacultadMateria,
    eliminarMateria,
    buscarProfesor,
    buscarMateriaPersonalizada
} = require("./menu");
const {leerArchivo, escribirArchivo} = require("./archivos");
const {Profesor} = require("./profesor");
const {Materia} = require("./materia");
let profesores
let materias

async function main(){
    try{
        profesores = JSON.parse(await leerArchivo('profesor.txt'));
        materias = JSON.parse(await leerArchivo('materias.txt'));

        let opt = '';
        let opt2 = '';
        let res = '';
        let res2 = '';
        do{
            opt = await menuPrincipal();
            switch (opt){
                case '1':
                    opt2 = await profesor();
                    switch (opt2){
                        case '1':
                            res = await ingresarDatosProfesor();
                            const p = new Profesor(res.id, res.nombre, res.apellido, res.edad, [])
                            profesores.push(p);
                            console.log(profesores)
                            break
                        case '2':
                            res = await leerProfesor();
                            switch (res){
                                case '1':
                                    console.log(profesores)
                                    break
                                case '2':
                                    res2 = await buscarProfesor()
                                    console.log(buscarProfesorPorID(res2.id));
                                    break
                            }
                            break
                        case '3':
                            res = await editarProfesor();
                            switch (res){
                                case '1':
                                    res2 = await cambiarNombreProfesor();
                                    nuevoNombreProfesor(res2.id, res2.nombre);
                                    console.log(buscarProfesorPorID(res2.id));
                                    break
                                case '2':
                                    res2 = await cambiarApellidoProfesor();
                                    nuevoApellidoProfesor(res2.id, res2.apellido);
                                    console.log(buscarProfesorPorID(res2.id));
                                    break
                                case '3':
                                    res2 = await cambiarEdadProfesor();
                                    nuevaEdadProfesor(res2.id, res2.edad);
                                    console.log(buscarProfesorPorID(res2.id));
                                    break
                                case '4':
                                    res2 = await agregarMateriaProfesor();
                                    agregarMateriaAProfesor(res2.id, res2.idMateria)
                                    console.log(buscarProfesorPorID(res2.id));
                                    break
                                case '5':
                                    break
                            }
                            break
                        case '4':
                            res = await eliminarProfesor();
                            eliminarProfesordeArreglo(res.id);
                            console.log('Profesor eliminado')
                            break
                        case '5':
                            break
                    }
                    break
                case '2':
                    opt2 = await materia();
                    switch (opt2){
                        case '1':
                            res = await ingresarDatosMateria();
                            const m = new Materia(res.id, res.nombre, res.semestre, res.numeroEstudiantes, res.facultad)
                            materias.push(m);
                            console.log(materias)
                            break
                        case '2':
                            res = await leerMateria();
                            switch (res){
                                case '1':
                                    console.log(materias)
                                    break
                                case '2':
                                    res2 = await buscarMateriaPersonalizada();
                                    console.log(buscarMateria(res2.id));
                                    break
                            }
                            break
                        case '3':
                            res = await editarMateria();
                            switch (res){
                                case '1':
                                    res2 = await cambiarNombreMateria();
                                    nuevoNombreMateria(res2.id, res2.nombre);
                                    console.log(buscarMateria(res2.id));
                                    break
                                case '2':
                                    res2 = await cambiarSemestreMateria();
                                    nuevoSemestreMateria(res2.id, res2.semestre);
                                    console.log(buscarMateria(res2.id));
                                    break
                                case '3':
                                    res2 = await cambiarEstudiantesMateria();
                                    nuevoEstudiantesMateria(res2.id, res2.estudiantes);
                                    console.log(buscarMateria(res2.id));
                                    break
                                case '4':
                                    res2 = await cambiarFacultadMateria();
                                    nuevoFacultadMateria(res2.id, res2.facultad);
                                    console.log(buscarMateria(res2.id));
                                    break
                                case '5':
                                    break
                            }
                            break
                        case '4':
                            res = await eliminarMateria();
                            eliminarMateriadeArreglo(res.id);
                            console.log('Materia eliminada')
                            break
                        case '5':
                            break
                    }
                    break
                case '0':
                    const profesoresGuardado = JSON.stringify(profesores)
                    const materiasGuardado = JSON.stringify(materias)
                    await escribirArchivo('profesor.txt', profesoresGuardado)
                    await escribirArchivo('materias.txt', materiasGuardado)
                    console.log('Gracias por preferirnos')
                    break
            }
        }while (opt !== '0');
    }catch (e){
        console.error(e);
    }


}

function buscarProfesorPorID(id){
    const profesor = profesores.find(element => element.id === id)
    return profesor;
}

function eliminarProfesordeArreglo(id){
    const profesorId = profesores.findIndex(element => element.id === id)
    delete(profesores[profesorId]);
}

function nuevoNombreProfesor(id, nuevoNombre){
    const profesorId = profesores.findIndex(element => element.id === id)
    profesores[profesorId].nombre = nuevoNombre
}

function nuevoApellidoProfesor(id, nuevoApellido){
    const profesorId = profesores.findIndex(element => element.id === id)
    profesores[profesorId].apellido = nuevoApellido
}

function nuevaEdadProfesor(id, nuevaEdad){
    const profesorId = profesores.findIndex(element => element.id === id)
    profesores[profesorId].edad = nuevaEdad
}

function buscarMateria(id){
    const materia = materias.find(element => element.id === id)
    return materia;
}

function agregarMateriaAProfesor(idProfesor, idMateria){
    const profesor = profesores.find(element => element.id === idProfesor)
    console.log(profesor)
    agregarMateria(profesor, buscarMateria(idMateria));
    return profesor;
}

function nuevoNombreMateria(id, nuevoNombre){
    const materiaId = materias.findIndex(element => element.id === id)
    materias[materiaId].nombre = nuevoNombre
}

function nuevoSemestreMateria(id, nuevoSemestre){
    const materiaId = materias.findIndex(element => element.id === id)
    materias[materiaId].semestre = nuevoSemestre
}

function nuevoEstudiantesMateria(id, nuevoNumero){
    const materiaId = materias.findIndex(element => element.id === id)
    materias[materiaId].numeroEstudiantes = nuevoNumero
}

function nuevoFacultadMateria(id, nuevoFacultad){
    const materiaId = materias.findIndex(element => element.id === id)
    materias[materiaId].facultad = nuevoFacultad
}

function eliminarMateriadeProfesores(id){
    profesores
        .forEach(
            function (valorActual, indiceActual, arregloCompleto){
                eliminarMateriaDeUnProfesor(valorActual, id)
            }
        );
}

function eliminarMateriadeArreglo(id){
    eliminarMateriadeProfesores();
    const materiaId = materias.findIndex(element => element.id === id);
    delete(materias[materiaId]);
}

function agregarMateria(profesor, materia){
    profesor.materias.push(materia);
    console.log('Materia agregada');
}

function eliminarMateriaDeUnProfesor(profesor, idMateria){
    const indice = profesor.materias.findIndex(element => element.id === idMateria);
    delete(profesor.materias[indice]);
}

main();
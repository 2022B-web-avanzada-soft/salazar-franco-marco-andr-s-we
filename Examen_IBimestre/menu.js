// Examen_IBimiestre/menu.js

const inquirer = require('inquirer');
const menuPrincipal = async()=>{
    const {opcion} = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'opcion',
                message: 'Que elementos quieres escoger',
                choices: [
                    {
                        value: '1',
                        name: 'Profesor'
                    },
                    {
                        value: '2',
                        name: 'Materia'
                    },
                    {
                        value: '0',
                        name: 'Salir'
                    },
                ]
            }
        ])
    return opcion;
}

const profesor = async() => {
    const {opcion} = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'opcion',
                message: 'Que deseas hacer',
                choices: [
                    {
                        value: '1',
                        name: 'Crear'
                    },
                    {
                        value: '2',
                        name: 'Leer'
                    },
                    {
                        value: '3',
                        name: 'Editar'
                    },
                    {
                        value: '4',
                        name: 'Eliminar'
                    },
                    {
                        value: '5',
                        name: 'Regresar'
                    },
                ]
            }
        ])
    return opcion;
}
const materia = async() => {
    const {opcion} = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'opcion',
                message: 'Que deseas hacer',
                choices: [
                    {
                        value: '1',
                        name: 'Crear'
                    },
                    {
                        value: '2',
                        name: 'Leer'
                    },
                    {
                        value: '3',
                        name: 'Editar'
                    },
                    {
                        value: '4',
                        name: 'Eliminar'
                    },
                    {
                        value: '5',
                        name: 'Regresar'
                    },
                ]
            }
        ])
    return opcion;
}

const ingresarDatosProfesor = async() =>{
    const opcion = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Ingrese el ID del Profesor',
            },
            {
                type: 'input',
                name: 'nombre',
                message: 'Ingrese el nombre del Profesor',
            },
            {
                type: 'input',
                name: 'apellido',
                message: 'Ingrese el apellido del Profesor',
            },
            {
                type: 'input',
                name: 'edad',
                message: 'Ingrese la edad del Profesor',
            }
        ])
    return opcion;
}

const leerProfesor = async() =>{
    const {opcion} = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'opcion',
                message: 'Que elementos quieres escoger',
                choices: [
                    {
                        value: '1',
                        name: 'Listar Profesores'
                    },
                    {
                        value: '2',
                        name: 'Buscar profesor por ID'
                    }
                ]
            }
        ])
    return opcion;
}

const buscarProfesor = async() =>{
    const opcion = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Ingrese el ID del profesor a buscar',
            },
        ])
    return opcion;
}

const editarProfesor = async() => {
    const {opcion} = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'opcion',
                message: 'Que deseas hacer',
                choices: [
                    {
                        value: '1',
                        name: 'Cambiar Nombre'
                    },
                    {
                        value: '2',
                        name: 'Cambiar Apellido'
                    },
                    {
                        value: '3',
                        name: 'Cambiar Edad'
                    },
                    {
                        value: '4',
                        name: 'Agregar Materia'
                    },
                    {
                        value: '5',
                        name: 'Regresar'
                    },
                ]
            }
        ])
    return opcion;
}

const cambiarNombreProfesor = async() =>{
    const opcion = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Ingrese el ID del profesor',
            },
            {
                type: 'input',
                name: 'nombre',
                message: 'Ingrese el nuevo Nombre del profesor',
            }
        ])
    return opcion;
}

const cambiarApellidoProfesor = async() =>{
    const opcion = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Ingrese el ID del profesor',
            },
            {
                type: 'input',
                name: 'apellido',
                message: 'Ingrese el nuevo Apellido del profesor',
            }
        ])
    return opcion;
}
const cambiarEdadProfesor = async() =>{
    const opcion = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Ingrese el ID del profesor',
            },
            {
                type: 'input',
                name: 'edad',
                message: 'Ingrese la nueva Edad del profesor',
            }
        ])
    return opcion;
}

const agregarMateriaProfesor = async() =>{
    const opcion = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Ingrese el ID del profesor',
            },
            {
                type: 'input',
                name: 'idMateria',
                message: 'Ingrese el ID de la materia',
            }
        ])
    return opcion;
}

const eliminarProfesor = async() =>{
    const opcion = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Ingrese el ID del profesor a eliminar',
            }
        ])
    return opcion;
}

const ingresarDatosMateria = async() =>{
    const opcion = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Ingrese el ID de la Materia',
            },
            {
                type: 'input',
                name: 'nombre',
                message: 'Ingrese el nombre de la Materia',
            },
            {
                type: 'input',
                name: 'semestre',
                message: 'Ingrese el semestre de la Materia',
            },
            {
                type: 'input',
                name: 'numeroEstudiantes',
                message: 'Ingrese el numero de estudiantes de la Materia',
            },
            {
                type: 'input',
                name: 'facultad',
                message: 'Ingrese la facultad de la Materia',
            }
        ])
    return opcion;
}

const leerMateria = async() =>{
    const {opcion} = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'opcion',
                message: 'Que elementos quieres escoger',
                choices: [
                    {
                        value: '1',
                        name: 'Listar Materias'
                    },
                    {
                        value: '2',
                        name: 'Buscar materia por ID'
                    }
                ]
            }
        ])
    return opcion;
}

const editarMateria = async() => {
    const {opcion} = await inquirer
        .prompt([
            {
                type: 'list',
                name: 'opcion',
                message: 'Que deseas hacer',
                choices: [
                    {
                        value: '1',
                        name: 'Cambiar Nombre'
                    },
                    {
                        value: '2',
                        name: 'Cambiar Semestre'
                    },
                    {
                        value: '3',
                        name: 'Cambiar Numero de Estudiantes'
                    },
                    {
                        value: '4',
                        name: 'Cambiar Facultad'
                    },
                    {
                        value: '5',
                        name: 'Regresar'
                    },
                ]
            }
        ])
    return opcion;
}

const cambiarNombreMateria = async() =>{
    const opcion = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Ingrese el ID de la materia',
            },
            {
                type: 'input',
                name: 'nombre',
                message: 'Ingrese el nuevo Nombre de la materia',
            }
        ])
    return opcion;
}

const cambiarSemestreMateria = async() =>{
    const opcion = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Ingrese el ID de la materia',
            },
            {
                type: 'input',
                name: 'semestre',
                message: 'Ingrese el nuevo Semestre de la materia',
            }
        ])
    return opcion;
}

const cambiarEstudiantesMateria = async() =>{
    const opcion = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Ingrese el ID de la materia',
            },
            {
                type: 'input',
                name: 'estudiantes',
                message: 'Ingrese el nuevo Numero de Estudiantes de la materia',
            }
        ])
    return opcion;
}

const cambiarFacultadMateria = async() =>{
    const opcion = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Ingrese el ID de la materia',
            },
            {
                type: 'input',
                name: 'facultad',
                message: 'Ingrese la nueva Facultad de la materia',
            }
        ])
    return opcion;
}

const eliminarMateria = async() =>{
    const opcion = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Ingrese el ID de la materia a eliminar',
            }
        ])
    return opcion;
}

const buscarMateriaPersonalizada = async() =>{
    const opcion = await inquirer
        .prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Ingrese el ID de la materia a buscar',
            },
        ])
    return opcion;
}

module.exports = {
    menuPrincipal, profesor, materia, ingresarDatosProfesor,
    leerProfesor, editarProfesor, cambiarNombreProfesor,
    cambiarApellidoProfesor, cambiarEdadProfesor,
    agregarMateriaProfesor, eliminarProfesor,
    ingresarDatosMateria, leerMateria, editarMateria,
    cambiarNombreMateria, cambiarSemestreMateria,
    cambiarEstudiantesMateria, cambiarFacultadMateria,
    eliminarMateria, buscarProfesor, buscarMateriaPersonalizada
}
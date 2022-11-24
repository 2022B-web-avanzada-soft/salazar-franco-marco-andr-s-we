// 06-callbacks
const fs = require('fs'); // file system
                            // Importar modulo fs
// 06-ejemplo.txt -> Hola
console.log('PRIMERO');
fs.readFile(
    './06-ejemplo.txt', // Nombre o path del archivo
    'utf-8', // codificación
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => { //callback
        if(errorLecturaPrimerArchivo){
            console.error('ERROR LEYENDO ARCHIVO ', errorLecturaPrimerArchivo);
        }else{
            console.log('Contenido: ', contenidoPrimerArchivo);
        }
    }
);
console.log('TERCERO');

//fs.writeFile(
//    './06-ejemplo.txt',
//    nuevoContenido,
//    (errorEscritura) => {}
//);

// 1) Leer archivo: 06-ejemplo.txt,
// luego imprimir en consola
// 2) Despues del paso 1, Leer archivo: 01-variables.js
// luego imprimir en consola
// 3) Crear un nuevo archivo llamado 06-nuevo-archivo.txt
// con el contenido de los otros dos archivos.

fs.readFile(
    './06-ejemplo.txt', // Nombre o path del archivo
    'utf-8', // codificación
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => { //callback
        if(errorLecturaPrimerArchivo){
            console.error('ERROR LEYENDO ARCHIVO ', errorLecturaPrimerArchivo);
        }else{
            console.log('Contenido: ', contenidoPrimerArchivo);
            fs.readFile(
                './01-variables.js', // Nombre o path del archivo
                'utf-8', // codificación
                (errorLecturaSegundoArchivo, contenidoSegundoArchivo) => { //callback
                    if(errorLecturaSegundoArchivo){
                        console.error('ERROR LEYENDO ARCHIVO ', errorLecturaSegundoArchivo);
                    }else{
                        console.log('Contenido: ', contenidoSegundoArchivo);
                        fs.writeFile(
                            './06-nuevo-archivo.txt',
                            contenidoPrimerArchivo + contenidoSegundoArchivo,
                            (errorEscritura) => {}
                        );
                    }
                }
            );
        }
    }
);





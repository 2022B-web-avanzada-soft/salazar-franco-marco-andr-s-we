//08-promesas.js
const fs = require("fs");
/*
*Una funcion que acepte como parametro  una variable
* del path del archivo y otra variable con el "contenidoArchivo"
*  Utilizar el modulo fs para leer el archivo en ese "path" y anadir el
*  "contenidoArchivo" a ese archivo.
 */

function leerArchivo(path){
    return new Promise(
        (resolve,reject)=>{
            fs.readFile(
                path, //Nombre o path del archivo
                "utf-8", //codificacion
                (errorLecturaArchivo, contenidoArchivo) => {
                    if(errorLecturaArchivo){
                        reject(errorLecturaArchivo)
                    }else{
                        resolve(contenidoArchivo)
                    }
                }
            )
        }
    );
}

function escribirArchivo(path, contenidoArchivo){
    return new Promise(
        (resolve,reject)=>{
            fs.writeFile(
                path,
                contenidoArchivo,
                (errorEscritura) => {
                    if (errorEscritura) {
                        reject(errorEscritura);
                    } else {
                        resolve(contenidoArchivo);
                    }
                }
            );
        }
    );
}

function ejercicio08(path,contenidoNuevo){
    return leerArchivo(path)
        .then((contenidoArchivo)=>{
            return escribirArchivo(path,  contenidoArchivo + contenidoNuevo)
        })
}

ejercicio08("06-ejemplo.txt", " :) lo logramos")
    .then(
        (contenidoArchivo)=>{
            console.log('Contenido archivo: ', contenidoArchivo);
        }
    )
    .catch(
        (error)=>{
            console.error('Error: ', error);
        }
    )
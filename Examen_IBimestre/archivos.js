// Examen_IBimiestre/archivos.js

const fs = require("fs");

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

module.exports = {
    leerArchivo, escribirArchivo
}
//05-destructuracion.js
//Desctructuracion de OBJETOS -> ORDEN SI IMPORATA!
const marco = {
    nombre: "Marco",
};
const carla = {
    nombre: "Carla",
    apellido: "Salazar",
};
const marcoCarla = {// Crea una nueva REFERENCIA (VALOR)
    ...carla, // 1 el orden es imporante para propiedades que se repiten
    ...marco, // El ultimo reemplaza al resto de anteriores
};
console.log('marcoCarla', marcoCarla);

// Destructuracion de arreglos
const arregloUno = [1, 2, 3, 4, 5];
const arregloDos = [6, 7, 8, 9, 10];
const superArreglo = [
    ...arregloUno,// El orden importa
    ...arregloDos,
]; //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('superArreglo', superArreglo);
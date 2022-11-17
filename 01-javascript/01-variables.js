//mutables e inmutables
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 12;
numeroDos = 8;
numeroUno = true;
numeroDos = false;

//Inmutables
const configuracionArchivos = 'PDF';
//configuracionArchivos = 'XML';

//vamos a preferir CONST > LET > NUNCA VAR!

//Tipos de variables (primitivas)
const numero = 1; // number
const sueldo = 1.2; // number
const texto = 'Marco'; // "Marco" string
const apellido = 'Salazar'; // string
const booleano = true; //boolean
const hijos = null; // object
const zapatos = undefined; // undefined

console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellido);
console.log(typeof booleano);
console.log(typeof hijos);
console.log(typeof zapatos);

// Truty Falsy
if (null){
    console.log("Es verdadero")
} else {
    console.log("Es falso")
}
if(""){
    console.log("String vacio es verdadero");
} else {
    console.log("String vacio es Falsy");
}
if ("Marco"){
    console.log("String con datos es truty");
} else{
    console.log("String con datos Falso");
}


//Numeros
if (-1){
    console.log("Negativos es truty");
} else{
    console.log("Negativos es Falso");
}
if (0){
    console.log("Cero es truty");
} else{
    console.log("Cero es Falso");
}
if (1){
    console.log("Positivo es truty");
} else{
    console.log("Positvo es Falso");
}

//null undefined
if (null){
    console.log("Null Es verdadero");
} else {
    console.log("Null Es falso");
}
if (undefined){
    console.log("Undefined Es verdadero");
} else {
    console.log("Undefined Es falso");
}

const marco = {
    "nombre": "Marco",
    'apellido': 'Salazar',
    edad: 21,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: 'azul',
        talla: '38'
    },
    mascotas: ['Novita'],
};
console.log(marco);

//Acceder a las propiedades del objeto
marco.nombre; //Marco
marco.apellido; //Salazar
//Cambiar valores
marco.nombre = "Andres"
marco["nombre"] = "Marco";
//Crear nuevos atributos o metodos dentro del objeto
marco.sueldo;
console.log(marco.sueldo);
marco.sueldo = 1.2;
console.log(marco.sueldo); // 1.2
marco["gastos"] = 0.8;
console.log(marco.gastos); // 0.8
console.log(marco);


//Borrar el valor de una propiedad
marco.nombre = undefined;
console.log(marco);
console.log(Object.keys(marco));
console.log(Object.values(marco));
//DELETE la llave y el valor dentro del objeto
delete marco.nombre;
console.log(Object.keys(marco));
console.log(marco);

//Variables por valor de referencias
//Variables por valor en JS son las primitivas: number, string, boolean
let edadMarco = 21;
let edadAndres = edadMarco; // Guardamos una primitiva en otra variable
                            // Variables por valor
console.log(edadMarco);
console.log(edadAndres);
edadMarco = edadMarco + 1;
console.log(edadMarco);
console.log(edadAndres);

// Variables por referencia: object ({},[])
let notas = {
    total: 10
};
let notasSegundoBimestre = notas; // Igualando la referencia
notasSegundoBimestre.total = notasSegundoBimestre.total + 1;
console.log(notas);
console.log(notasSegundoBimestre);
//Como clonar objetos
let notasTercerSemestre = Object.assign({}, notas);
notasTercerSemestre.total =  notasTercerSemestre.total + 1;
console.log('notas', notas);
console.log('notasSegundoBimestre', notasSegundoBimestre);
console.log('notasTercerBimestre', notasTercerSemestre);


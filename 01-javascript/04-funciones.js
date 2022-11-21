// 04-funciones.js

function soloNumeros (a, b, c){
    return a - b + c; //Valor a devolver
}

//JS permite el uso de funciones sin validaciones
//soloNumeros('v', true, [1,2,3]);
//soloNumeros((a)=>a, (a)=>a, (a)=>a);
//soloNumeros(1,2,3,4,5,6,7,8,9);
//soloNumeros()
function soloLetras(a,b,c){ //Sin return devolvemos: undefined
    console.log(a, b, c);
}

//Funciones nombradas - named functions
function funcionNombrada(){

}
//Funciones anonimas - Anonymous Functions
const funionSinNombre1 = function (){};
var funionSinNombre2 = function (){};
let funionSinNombre3 = function (){};
[].forEach(function (){});
funionSinNombre1();
funionSinNombre2();
funionSinNombre3();

// Funciones anonimas - Fat Arrow functions
const funionFatArrow1 = () => {};// -> =>
let funionFatArrow2 = () => {};
var funionFatArrow3 = () => {};
[].forEach(()=>{});
funionFatArrow1();
funionFatArrow2();
funionFatArrow3();

const funcionFatArrow4 = () => {};
const funcionFatArrow5 = (parametro) => {
    return parametro +1;
}
const funcionFatArrow6 = (parametro) => parametro + 1;// una sola linea, Omitio return y las llaves
const funcionFatArrow7 = parametro => parametro + 1; //Solo tenemos 1 parametro omitimos parametros
const funcionFatArrow8 = (a, b, c) => a + b + c;

// ... => parametros infinitos => llegan a un arreglo de parametros
//        solo podemos ener un parametro infinito por funcion
function sumarNumeros(...todosNumeros){// Parametros Infinitos [1, 3,5,6,2,1,3]
    let total = 0;
    todosNumeros.forEach(
        (valorActual) => {
            total = total + valorActual;
        }
    );
    return total;
    // return todosNumeros.reduce((a, v) => a + v, 0);
}
sumarNumeros(1,2,3,4,5,7,5,4,3,2,1)
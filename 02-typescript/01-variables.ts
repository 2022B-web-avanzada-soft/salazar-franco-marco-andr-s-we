// 01-variables.ts
// npm install -g typescript
// tsc
// 01-variables.ts
let nombre: string = 'Marco'; // Primitivo
let nombre2: String = 'Marco2'; // Clase string
//nombre = 1;
let edad: number = 32;
let casado: boolean = false;
let fecha: Date = new Date();
let sueldo: number;
sueldo = 12.4;

// Duck Typing
let apellido = 'Eguez'; // string
apellido = 'Salazar';
apellido.toUpperCase();

let marihuana: any = 2;
marihuana = '2';
marihuana = true;
marihuana = () => '2';

let edadMultiple: number| string | Date = '2'; // 2 / new Date()
edadMultiple = '2';
edadMultiple = 'dos';
edadMultiple = new Date();
edadMultiple = 2222;

let numeroUnico: number = 1; // para igual a otros se castea
numeroUnico = numeroUnico + Math.pow((edadMultiple as number), 2);



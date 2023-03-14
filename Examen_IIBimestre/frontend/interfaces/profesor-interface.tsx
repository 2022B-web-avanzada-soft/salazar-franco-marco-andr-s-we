import {MateriaInterface} from "./materia-interface";

export interface ProfesorInterface {
    id: number;
    nombre: string;
    apellido: string;
    edad: number;
    materias?: MateriaInterface[];
}
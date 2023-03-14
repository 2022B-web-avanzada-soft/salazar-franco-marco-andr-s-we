import {ProfesorInterface} from "./profesor-interface";

export interface MateriaInterface {
    id: number;
    nombre: string;
    facultad: string;
    semestre: string;
    estudiantes: number;
    profesor?: ProfesorInterface | number;
}
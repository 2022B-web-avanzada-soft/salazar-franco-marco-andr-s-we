import {IsNotEmpty, IsString, IsInt} from "class-validator";

export class MateriaCreateDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    semestre: string;

    @IsNotEmpty()
    @IsString()
    facultad: string;

    @IsNotEmpty()
    @IsInt()
    estudiantes: number;

    @IsNotEmpty()
    @IsInt()
    profesor: number;
}
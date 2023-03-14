import {IsNotEmpty, IsString, IsInt} from "class-validator";

export class ProfesorCreateDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    apellido: string;

    @IsNotEmpty()
    @IsInt()
    edad: number;
}
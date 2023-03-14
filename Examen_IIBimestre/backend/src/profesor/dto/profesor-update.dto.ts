import {IsInt, IsOptional, IsString} from "class-validator";

export class ProfesorUpdateDto {
    @IsOptional()
    @IsString()
    nombre: string;

    @IsOptional()
    @IsString()
    apellido: string;

    @IsOptional()
    @IsInt()
    edad: number;
}
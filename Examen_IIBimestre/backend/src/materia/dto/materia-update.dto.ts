import {IsInt, IsOptional, IsString} from "class-validator";

export class MateriaUpdateDto {
    @IsOptional()
    @IsString()
    nombre: string;

    @IsOptional()
    @IsString()
    semestre: string;

    @IsOptional()
    @IsString()
    facultad: string;

    @IsOptional()
    @IsInt()
    estudiantes: number;
}
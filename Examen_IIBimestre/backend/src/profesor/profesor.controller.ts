import {BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query} from "@nestjs/common";
import {ProfesorService} from "./profesor.service";
import {ProfesorUpdateDto} from "./dto/profesor-update.dto";
import {validate} from "class-validator";
import {ProfesorCreateDto} from "./dto/profesor-create.dto";
import {FindManyOptions, FindOptionsWhere, Like} from "typeorm";
import {ProfesorEntity} from "./profesor.entity";

@Controller('profesor')
export class ProfesorController{
    constructor(
        private readonly profesorService: ProfesorService
    ) {
    }

    @Get("/:id")
    @HttpCode(200)
    findOneById(
        @Param() params
    ){
        return this.profesorService.findOneById(+params.id);
    }

    @Delete("/:id")
    @HttpCode(200)
    delete(
        @Param() params
    ){
        return this.profesorService.delete(+params.id);
    }

    @Put("/:id")
    @HttpCode(200)
    async update(
        @Param() params, // {id:1}
        @Body() bodyParams // {nombres:''....}
    ) {
        const nuevoRegistro = new ProfesorUpdateDto();
        nuevoRegistro.nombre = bodyParams.nombre;
        nuevoRegistro.apellido = bodyParams.apellido;
        nuevoRegistro.edad = bodyParams.edad;
        const arregloErrores = await validate(
            nuevoRegistro
        ); // validamos
        if (arregloErrores.length > 0) {
            console.error({arregloErrores});
            throw new BadRequestException({
                mensaje: 'Envio mal datos'
            });
        }
        return this.profesorService.update(
            bodyParams,
            +params.id
        );
    }

    @Post("/") // POST /usuario
    @HttpCode(201)
    async create(
        @Body() bodyParams // {nombres:''....}
    ) {
        const nuevoRegistro = new ProfesorCreateDto();
        nuevoRegistro.nombre = bodyParams.nombre;
        nuevoRegistro.apellido = bodyParams.apellido;
        nuevoRegistro.edad = +bodyParams.edad;
        const arregloErrores = await validate(
            nuevoRegistro
        ); // validamos
        if (arregloErrores.length > 0) {
            console.error({arregloErrores});
            throw new BadRequestException({
                mensaje: 'Envio mal datos'
            });
        }
        return this.profesorService.create(nuevoRegistro);
    }

    @Get("/")
    @HttpCode(200)
    async findAll() {
        return this.profesorService.find({relations:['materias']});
    }

}
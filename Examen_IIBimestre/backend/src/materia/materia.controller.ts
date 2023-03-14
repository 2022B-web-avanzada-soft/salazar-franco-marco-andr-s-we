import {BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put} from "@nestjs/common";
import {MateriaService} from "./materia.service";
import {MateriaUpdateDto} from "./dto/materia-update.dto";
import {validate} from "class-validator";
import {MateriaCreateDto} from "./dto/materia-create.dto";

@Controller('materia')
export class MateriaController {
    constructor(
        private readonly materiaService: MateriaService
    ) {
    }

    @Get("/:id")
    @HttpCode(200)
    findOneById(
        @Param() params
    ){
        return this.materiaService.findOneById(+params.id);
    }

    @Delete("/:id")
    @HttpCode(200)
    delete(
        @Param() params
    ){
        return this.materiaService.delete(+params.id);
    }

    @Put("/:id")
    @HttpCode(200)
    async update(
        @Param() params, // {id:1}
        @Body() bodyParams // {nombres:''....}
    ) {
        const nuevoRegistro = new MateriaUpdateDto();
        nuevoRegistro.nombre = bodyParams.nombre;
        nuevoRegistro.semestre = bodyParams.semestre;
        nuevoRegistro.facultad = bodyParams.facultad;
        nuevoRegistro.estudiantes = bodyParams.estudiantes;
        const arregloErrores = await validate(
            nuevoRegistro
        ); // validamos
        if (arregloErrores.length > 0) {
            console.error({arregloErrores});
            throw new BadRequestException({
                mensaje: 'Envio mal datos'
            });
        }
        return this.materiaService.update(
            +params.id,
            bodyParams
        );
    }

    @Post("/") // POST /usuario
    @HttpCode(201)
    async create(
        @Body() bodyParams // {nombres:''....}
    ) {
        return this.materiaService.create(bodyParams);
    }

    @Get("/")
    @HttpCode(200)
    async findAll() {
        return this.materiaService.find({relations:['profesor']});
    }


}
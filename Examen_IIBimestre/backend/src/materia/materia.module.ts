import {Module} from "@nestjs/common";
import {MateriaService} from "./materia.service";
import {MateriaController} from "./materia.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {MateriaEntity} from "./materia.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature(
            [MateriaEntity],
        )  ,
    ],
    providers:[MateriaService],
    exports:[MateriaService],
    controllers:[MateriaController]
})
export class MateriaModule {

}
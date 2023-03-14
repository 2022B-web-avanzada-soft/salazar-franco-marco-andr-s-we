import {Injectable} from "@nestjs/common";
import {InjectDataSource} from "@nestjs/typeorm";
import {DataSource, FindManyOptions} from "typeorm";
import {ProfesorEntity} from "./profesor.entity";
import {ProfesorCreateDto} from "./dto/profesor-create.dto";
import {ProfesorUpdateDto} from "./dto/profesor-update.dto";

@Injectable()
export class ProfesorService{
    constructor(
        @InjectDataSource()
        public datasource: DataSource
    ) {   }
    public profesorRepository = this.datasource.getRepository(ProfesorEntity);

    find(opciones: FindManyOptions<ProfesorEntity>) {
        return this.profesorRepository.find(opciones)
    }

    findOneById(id: number) {
        return this.profesorRepository.findOne({
            // select:{ },
            where: {
                id: id
            },
        })
    }
    create(datosCrear: ProfesorCreateDto) {
        return this.profesorRepository.save(datosCrear);
    }
    update(datosActualizar: ProfesorUpdateDto, id: number) {
        return this.profesorRepository.save(
            {...datosActualizar, id}
        );
    }
    delete(id: number) {
        return this.profesorRepository.delete(id);
    }
}
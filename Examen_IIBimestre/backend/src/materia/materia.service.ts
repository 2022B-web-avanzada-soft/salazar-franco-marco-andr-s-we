import {Injectable} from "@nestjs/common";
import {InjectDataSource} from "@nestjs/typeorm";
import {DataSource, FindManyOptions} from "typeorm";
import {MateriaEntity} from "./materia.entity";
import {MateriaCreateDto} from "./dto/materia-create.dto";
import {MateriaUpdateDto} from "./dto/materia-update.dto";

@Injectable()
export class MateriaService {
    constructor(
        @InjectDataSource()
        public datasource: DataSource
    ) {   }
    public materiaRepository = this.datasource.getRepository(MateriaEntity);

    find(opciones: FindManyOptions<MateriaEntity>) {
        return this.materiaRepository.find(opciones)
    }
    findOneById(id: number) {
        return this.materiaRepository.findOne({
            // select:{ },
            where: {
                id: id
            },
        })
    }
    create(materia: any): Promise<any> {
        return this.materiaRepository.save(materia);
    }

    update(id: number, character: MateriaUpdateDto): Promise<MateriaEntity> {
        return this.materiaRepository.save({
            ...character, id
        })
    }
    delete(id: number) {
        return this.materiaRepository.delete(id);
    }
}
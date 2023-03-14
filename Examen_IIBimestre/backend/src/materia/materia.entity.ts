import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ProfesorEntity} from "../profesor/profesor.entity";

@Entity('materia')
export class MateriaEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        name: 'materia_nombre',
        type: 'varchar',
        length: 60,
        nullable: false,
    })
    nombre: string;
    @Column({
        name: 'semestre',
        type: 'varchar',
        length: 60,
        nullable: false,
    })
    semestre: string;
    @Column({
        name: 'facultad',
        type: 'varchar',
        length: 60,
        nullable: false,
    })
    facultad: string;
    @Column({
        name: 'estudiantes',
        type: 'int',
    })
    estudiantes: number;

    @ManyToOne(
        () => ProfesorEntity, // Entidad Papa
        (instanciaProfesorEntity) => // Campo Relacionado
            instanciaProfesorEntity.materias,
        {
            nullable: false
        })
    profesor: ProfesorEntity
}
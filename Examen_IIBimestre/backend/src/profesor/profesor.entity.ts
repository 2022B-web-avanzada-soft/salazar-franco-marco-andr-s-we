import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {MateriaEntity} from "../materia/materia.entity";

@Entity('profesor')
export class ProfesorEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        name: 'profesor_nombre',
        type: 'varchar',
        length: 60,
        nullable: false,
    })
    nombre: string;
    @Column({
        name: 'profesor_apellido',
        type: 'varchar',
        length: 60,
        nullable: false,
    })
    apellido: string;
    @Column({
        name: 'profesor_edad',
        type: 'int',
    })
    edad: number;

    @OneToMany(
        () => MateriaEntity, // Entidad HIJA
        (instanciaMateriaEntity) =>
            instanciaMateriaEntity.profesor) // Campo Relacionado
    materias: MateriaEntity[]

}
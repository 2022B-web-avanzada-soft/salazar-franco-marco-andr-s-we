import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProfesorModule} from "./profesor/profesor.module";
import {ProfesorEntity} from "./profesor/profesor.entity";
import {MateriaEntity} from "./materia/materia.entity";
import {MateriaModule} from "./materia/materia.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './bdd/bdd.sqlite',
      entities: [
          ProfesorEntity,
          MateriaEntity,
      ],
      synchronize: true,
      dropSchema: false,
    }),
    ProfesorModule,
    MateriaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from "@nestjs/common";
import { AnnotationsController } from "./annotations.controller";
import { AnnotationsService } from "./annotations.service";
import { InfraDataModule } from "src/infra/data/infra.data.module";
import { AnnotationsMapper } from "src/application/mappers/annotationsMapper";

@Module({
    imports:[InfraDataModule],
    controllers: [AnnotationsController],
    providers: [AnnotationsService, AnnotationsMapper],
})
export class AnnotationsModule {}
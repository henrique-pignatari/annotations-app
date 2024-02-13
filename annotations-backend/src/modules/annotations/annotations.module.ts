import { Module } from "@nestjs/common";
import { AnnotationsController } from "./annotations.controller";
import { ApplicationLayerModule } from "src/application/application.module";

@Module({
    imports:[ApplicationLayerModule],
    controllers: [AnnotationsController],
    providers: [],
})
export class AnnotationsModule {}
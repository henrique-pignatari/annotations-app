import { Module } from "@nestjs/common";
import { CategoriesController } from "./categories.controller";
import { ApplicationLayerModule } from "src/application/application.module";

@Module({
    imports:[ApplicationLayerModule],
    controllers:[CategoriesController],
    providers: []
})
export class CategoriesModule {}
import { Module } from "@nestjs/common";
import { InfraDataModule } from "src/infra/data/infra.data.module";
import { CategoriesService } from "./categories.service";
import { CategoriesMapper } from "src/application/mappers/categoryMapper";
import { CategoriesController } from "./categories.controller";

@Module({
    imports:[InfraDataModule],
    controllers:[CategoriesController],
    providers: [CategoriesService, CategoriesMapper]
})
export class CategoriesModule {}
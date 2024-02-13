import { Module } from "@nestjs/common";
import { AnnotationsMapper } from "./mappers/annotationsMapper";
import { CategoriesMapper } from "./mappers/categoryMapper";
import { IAnnotationsService } from "./abstracts/services/annotations/IAnnotationsService";
import { AnnotationsService } from "./services/annotations/annotations.service";
import { ICategoriesService } from "./abstracts/services/categories/ICategoriesService";
import { CategoriesService } from "./services/categories/categories.service";
import { InfraDataModule } from "src/infra/data/infra.data.module";

@Module({
    imports: [InfraDataModule],
    controllers: [],
    providers: [
        AnnotationsMapper,
        CategoriesMapper,
        {
            provide: IAnnotationsService,
            useClass: AnnotationsService
        },
        {
            provide: ICategoriesService,
            useClass: CategoriesService
        },

    ],
    exports: [ IAnnotationsService, ICategoriesService]
})
export class ApplicationLayerModule{}
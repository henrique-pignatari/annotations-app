import { Module } from "@nestjs/common";
import { PrismaService } from "src/infra/data/frameworks/prisma/prisma.service";
import { IAnnotationsrepository } from "./abstracts/IAnnotationsRepository";
import { PrismaAnnotationsRepository } from "./repositories/prisma/prisma-annotations-repository";
import { ICategoriesRepository } from "./abstracts/ICategoriesRepository";
import { PrismaCategoriesRepository } from "./repositories/prisma/prisma-categories-repository";

@Module({
    imports:[],
    controllers: [],
    providers: [
        PrismaService,
        {
            provide: IAnnotationsrepository,
            useClass: PrismaAnnotationsRepository
        },
        {
            provide: ICategoriesRepository,
            useClass: PrismaCategoriesRepository
        }
    ],
    exports: [IAnnotationsrepository, ICategoriesRepository]
})

export class InfraDataModule {}
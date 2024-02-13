import { Injectable } from "@nestjs/common";
import { CategoriesReceiveDTO } from "src/application/dtos/categories/categoriesReceiveDTO";
import { CategoriesMapper } from "src/application/mappers/categoryMapper";
import { ICategoriesRepository } from "src/infra/data/abstracts/ICategoriesRepository";

@Injectable()
export class CategoriesService{
    constructor(
        private categoriesRepository: ICategoriesRepository,
        private categoriesMapper: CategoriesMapper,
    ){}

    async create(categoryDTO: CategoriesReceiveDTO): Promise<string>{
        const category = this.categoriesMapper.dtoToEntity(categoryDTO);

        return await this.categoriesRepository.create(category)
    }
}
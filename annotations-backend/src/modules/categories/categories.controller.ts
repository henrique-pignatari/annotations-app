import { Body, Controller, Post } from "@nestjs/common";
import { CategoriesReceiveDTO } from "src/application/dtos/categories/categoriesReceiveDTO";
import { ICategoriesService } from "src/application/abstracts/services/categories/ICategoriesService";

@Controller("/categories")
export class CategoriesController{
    constructor(
        private categoriesService: ICategoriesService
    ){}

    @Post()
    async createCategory(@Body() categoriesReceiveDTO : CategoriesReceiveDTO): Promise<string>{
        return await this.categoriesService.create(categoriesReceiveDTO)
    }
}
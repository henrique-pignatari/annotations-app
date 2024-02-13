import { Body, Controller, Post } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CategoriesReceiveDTO } from "src/application/dtos/categories/categoriesReceiveDTO";

@Controller("/categories")
export class CategoriesController{
    constructor(
        private categoriesService: CategoriesService
    ){}

    @Post()
    async createCategory(@Body() categoriesReceiveDTO : CategoriesReceiveDTO): Promise<string>{
        return await this.categoriesService.create(categoriesReceiveDTO)
    }
}
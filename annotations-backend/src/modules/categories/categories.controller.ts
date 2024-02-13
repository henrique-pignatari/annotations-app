import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { CategoriesReceiveDTO } from "src/application/dtos/categories/categoriesReceiveDTO";
import { ICategoriesService } from "src/application/abstracts/services/categories/ICategoriesService";
import Category from "src/domain/entities/category";

@Controller("/categories")
export class CategoriesController{
    constructor(
        private categoriesService: ICategoriesService
    ){}

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Category>{
        return await this.categoriesService.getById(id)
    }

    @Get()
    async find(@Query('take') take: string = "0", @Query('skip') skip: string = "0"): Promise<Category[]>{
        const numTake = Number(take)
        const numSkip = Number(skip)

        return await this.categoriesService.get(numTake, numSkip)
    }

    @Post()
    async createCategory(@Body() categoriesReceiveDTO : CategoriesReceiveDTO): Promise<string>{
        console.log(categoriesReceiveDTO)
        return await this.categoriesService.create(categoriesReceiveDTO)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() categoriesReceiveDTO : CategoriesReceiveDTO): Promise<string>{
        return await this.categoriesService.update(id, categoriesReceiveDTO)
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<string>{
        return await this.categoriesService.delete(id)
    }
}
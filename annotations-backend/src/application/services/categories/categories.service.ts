import { Inject, Injectable } from "@nestjs/common";
import { ICategoriesService } from "src/application/abstracts/services/categories/ICategoriesService";
import { CategoriesReceiveDTO } from "src/application/dtos/categories/categoriesReceiveDTO";
import { CategoriesMapper } from "src/application/mappers/categoryMapper";
import Category from "src/domain/entities/category";
import { ICategoriesRepository } from "src/infra/data/abstracts/ICategoriesRepository";

@Injectable()
export class CategoriesService implements ICategoriesService{
    @Inject()
    private categoriesRepository: ICategoriesRepository
    
    @Inject()
    private categoriesMapper: CategoriesMapper

    async create(dto: CategoriesReceiveDTO): Promise<string>{
        const category = this.categoriesMapper.dtoToEntity(dto);

        return await this.categoriesRepository.create(category)
    }

    async getById(id: string): Promise<Category>{
        return await this.categoriesRepository.getById(id)
    }

    async get(take: number, skip: number): Promise<Category[]>{
        return await this.categoriesRepository.getAll(take, skip)
    }

    async update(id: string, dto: CategoriesReceiveDTO): Promise<string>{
        const category = this.categoriesMapper.dtoToEntity(dto);
        return await this.categoriesRepository.update(id, category)
    }

    async delete(id: any): Promise<string>{
        return await this.categoriesRepository.delete(id)
    }
}
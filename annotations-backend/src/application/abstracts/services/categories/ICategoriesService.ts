import { CategoriesReceiveDTO } from "src/application/dtos/categories/categoriesReceiveDTO";
import { IService } from "src/application/services/IService";
import Category from "src/domain/entities/category";

export abstract class ICategoriesService implements IService<CategoriesReceiveDTO, Category>{
    abstract create(dto: CategoriesReceiveDTO): Promise<string>
    abstract getById(id: string): Promise<Category>
    abstract get(take?: number, skip?: number): Promise<Category[]>
    abstract update(id: string, dto: CategoriesReceiveDTO): Promise<string>
    abstract delete(id: any): Promise<string>
}
import Category from "src/domain/entities/category";
import { IRepository } from "./IRepository";

export abstract class ICategoriesRepository implements IRepository<Category>{
    abstract getAll(take: number, skip: number): Promise<Category[]>;
    abstract getById(id: string): Promise<Category>;
    abstract create(item: Category): Promise<string>;
    abstract update(id: string, item: Category): Promise<string>;
    abstract delete(id: string): Promise<string>;

}
export abstract class IRepository<T>{
    abstract getAll(take: number, skip: number): Promise<T[]>;
    abstract getById(id: string): Promise<T>;
    abstract create(item: T): Promise<string>;
    abstract update(id: string, item: T): Promise<string>
    abstract delete(id: string): Promise<string>
}
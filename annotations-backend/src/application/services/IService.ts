export abstract class IService<DTO, T>{
    abstract create(dto: DTO): Promise<string>
    abstract getById(id: string): Promise<T>
    abstract get(take: number, skip: number): Promise<T[]>
    abstract update(id: string, dto: DTO): Promise<string>
    abstract delete(id): Promise<string> 
}
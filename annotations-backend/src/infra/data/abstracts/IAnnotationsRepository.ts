import Annotation from "src/domain/entities/annotation";
import { IRepository } from "./IRepository";

export abstract class IAnnotationsrepository implements IRepository<Annotation>{
    abstract getAll(take: number, skip: number): Promise<Annotation[]>;
    abstract getById(id: string): Promise<Annotation>;
    abstract create(item: Annotation): Promise<string>;
    abstract update(id: string, item: Annotation): Promise<string>;
    abstract delete(id: string): Promise<string>;
}
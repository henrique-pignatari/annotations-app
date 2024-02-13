import { AnnotationsReceiveDTO } from "src/application/dtos/annotations/annotationsReceiveDTO";
import { IService } from "src/application/services/IService";
import Annotation from "src/domain/entities/annotation";

export abstract class IAnnotationsService implements IService<AnnotationsReceiveDTO, Annotation>{
    abstract create(dto: AnnotationsReceiveDTO): Promise<string>
    abstract getById(id: string): Promise<Annotation>
    abstract get(take: number, skip: number): Promise<Annotation[]>
    abstract update(id: string, dto: AnnotationsReceiveDTO): Promise<string>
    abstract delete(id: any): Promise<string>
}
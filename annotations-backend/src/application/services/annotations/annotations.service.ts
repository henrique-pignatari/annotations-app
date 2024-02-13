import { Inject, Injectable } from "@nestjs/common";
import { IAnnotationsService } from "src/application/abstracts/services/annotations/IAnnotationsService";
import { AnnotationsReceiveDTO } from "src/application/dtos/annotations/annotationsReceiveDTO";
import { AnnotationsMapper } from "src/application/mappers/annotationsMapper";
import Annotation from "src/domain/entities/annotation";
import { IAnnotationsrepository } from "src/infra/data/abstracts/IAnnotationsRepository";

@Injectable()
export class AnnotationsService implements IAnnotationsService {
    @Inject()
    private annotationsRepository: IAnnotationsrepository
    
    @Inject()
    private annotationsMapper: AnnotationsMapper

    async create(annotationDTO: AnnotationsReceiveDTO): Promise<string>{
        const annotation = this.annotationsMapper.dtoToEntity(annotationDTO)
        
        return await this.annotationsRepository.create(annotation)
    }

    async getById(id: string): Promise<Annotation>{
        return await this.annotationsRepository.getById(id)
    }

    async get(take: number, skip: number): Promise<Annotation[]>{
        return await this.annotationsRepository.getAll(take, skip)
    }

    async update(id: string, dto: AnnotationsReceiveDTO): Promise<string>{
        const annotation = this.annotationsMapper.dtoToEntity(dto);

        return await this.annotationsRepository.update(id, annotation)
    }

    async delete(id: any): Promise<string>{
        return await this.annotationsRepository.delete(id);
    }

}
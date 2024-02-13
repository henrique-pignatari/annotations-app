import { Injectable } from "@nestjs/common";
import { AnnotationsReceiveDTO } from "src/application/dtos/annotations/annotationsReceiveDTO";
import { AnnotationsMapper } from "src/application/mappers/annotationsMapper";
import { IAnnotationsrepository } from "src/infra/data/abstracts/IAnnotationsRepository";

@Injectable()
export class AnnotationsService {
    constructor(
        private annotationsRepository: IAnnotationsrepository,
        private annotationsMapper: AnnotationsMapper
    ){}

    async create(annotationDTO: AnnotationsReceiveDTO): Promise<string>{
        const annotation = this.annotationsMapper.dtoToEntity(annotationDTO)
        
        return await this.annotationsRepository.create(annotation)
    }
}
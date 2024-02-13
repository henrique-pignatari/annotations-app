import Annotation from "src/domain/entities/annotation";
import { AnnotationsReceiveDTO } from "../dtos/annotations/annotationsReceiveDTO";

export class AnnotationsMapper{
    dtoToEntity(dto: AnnotationsReceiveDTO): Annotation{
        return {
            title: dto.title,
            text: dto.text,
            image: dto.image,         
            categories: dto.categoriesIds.map(categoryId => ({ categoryId }))
        }
    }

    entityToDTO(entity: Annotation): AnnotationsReceiveDTO{
        return {
            title: entity.title,
            text: entity.text,
            categoriesIds: [],
            image: entity.image            
        }
    }
}
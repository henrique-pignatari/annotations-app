import Category from "src/domain/entities/category"
import { CategoriesReceiveDTO } from "../dtos/categories/categoriesReceiveDTO"

export class CategoriesMapper{
    dtoToEntity(dto: CategoriesReceiveDTO): Category{
        return {
            title: dto.title
        }
    }

    entityToDTO(entity: Category): CategoriesReceiveDTO{
        return {
            title: entity.title,         
        }
    }
}
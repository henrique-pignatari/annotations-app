import Annotation from "./annotation"
import Category from "./category"

export default class AnnotationCategory{
    id?: string
    annotationId?: string
    categoryId?: string
    category?: Category
    annotation?: Annotation
}
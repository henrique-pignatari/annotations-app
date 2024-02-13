import AnnotationCategory from "./annotaionCategory"
import Category from "./category"

export default class Annotation{
    id?: string
    title: string
    text: string
    image?: string
    categories: AnnotationCategory[]
}
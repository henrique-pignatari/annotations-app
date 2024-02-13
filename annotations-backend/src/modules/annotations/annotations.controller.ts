import { Body, Controller, Post } from "@nestjs/common";
import { AnnotationsReceiveDTO } from "src/application/dtos/annotations/annotationsReceiveDTO";
import { IAnnotationsService } from "src/application/abstracts/services/annotations/IAnnotationsService";

@Controller("/annotations")
export class AnnotationsController{
    constructor(
        private annotationsService: IAnnotationsService
    ){

    }

    @Post()
    async createAnnotation(@Body() annotationReceiveDTO: AnnotationsReceiveDTO): Promise<string> {
        return await this.annotationsService.create(annotationReceiveDTO)
    }
}
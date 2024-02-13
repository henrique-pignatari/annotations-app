import { Body, Controller, Post } from "@nestjs/common";
import { AnnotationsService } from "./annotations.service";
import { AnnotationsReceiveDTO } from "src/application/dtos/annotations/annotationsReceiveDTO";

@Controller("/annotations")
export class AnnotationsController{
    constructor(
        private annotationsService: AnnotationsService
    ){

    }

    @Post()
    async createAnnotation(@Body() annotationReceiveDTO: AnnotationsReceiveDTO): Promise<string> {
        return await this.annotationsService.create(annotationReceiveDTO)
    }
}
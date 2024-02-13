import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { AnnotationsReceiveDTO } from "src/application/dtos/annotations/annotationsReceiveDTO";
import { IAnnotationsService } from "src/application/abstracts/services/annotations/IAnnotationsService";
import Annotation from "src/domain/entities/annotation";

@Controller("/annotations")
export class AnnotationsController{
    constructor(
        private annotationsService: IAnnotationsService
    ){}

    @Get(':id')
    async findById(@Param('id') id: string): Promise<Annotation>{
        return await this.annotationsService.getById(id)
    }

    @Get()
    async find(@Query('take') take: string = "0", @Query('skip') skip: string = "0"): Promise<Annotation[]>{
        const numTake = Number(take)
        const numSkip = Number(skip)

        return await this.annotationsService.get(numTake, numSkip)
    }

    @Post()
    async createAnnotation(@Body() annotationReceiveDTO: AnnotationsReceiveDTO): Promise<string> {
        return await this.annotationsService.create(annotationReceiveDTO)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() annotationsReceiveDTO : AnnotationsReceiveDTO): Promise<string>{
        return await this.annotationsService.update(id, annotationsReceiveDTO)
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<string>{
        return await this.annotationsService.delete(id)
    }
}
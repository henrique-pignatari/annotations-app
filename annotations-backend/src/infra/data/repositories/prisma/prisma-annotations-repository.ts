import Annotation from "src/domain/entities/annotation";
import { IAnnotationsrepository } from "../../abstracts/IAnnotationsRepository";
import { PrismaService } from "../../frameworks/prisma/prisma.service";
import { Inject } from "@nestjs/common";

export class PrismaAnnotationsRepository implements IAnnotationsrepository{
    @Inject()
    private prisma: PrismaService

    async getAll(take: number = 0, skip: number = 0): Promise<Annotation[]> {
        const results = await this.prisma.annotation.findMany({
            skip,
            take,
            include: {
                categories: {
                    select: {
                        category: {
                            select: {
                                id: true,
                                title: true
                            }
                        }
                    }
                }
            }
        })

        return results.map(result => {
            return {
                id: result.id,
                title: result.title,
                text: result.text,
                image: result.image,
                categories: result.categories.map(({category}) => category)
            }
        })
    }
    async getById(id: string): Promise<Annotation> {
        const result = await this.prisma.annotation.findUnique({
            where:{
                id
            },
            include: {
                categories: {
                    select: {
                        category: {
                            select:{
                                id: true,
                                title: true
                            }
                        }
                    }
                }
            }
        })

        return {
            ...result,
            categories: result.categories.map(({category}) => category)
        }
    }

    async create(item: Annotation): Promise<string> {
        console.log(item)
        const annotation = await this.prisma.annotation.create({
            data:{
                title: item.title,
                text: item.text,
                image: item.image,
                categories: {
                    createMany:{
                        data: item.categories.map(({categoryId}) =>  ({categoryId}))
                    }
                }
            }
        })

        return annotation.id
    }

    async update(id: string, item: Annotation): Promise<string> {
        const categoriesIds = item.categories.map(({categoryId}) => categoryId)
        const categories = categoriesIds.map(
            (categoryId) => {
                return {
                    where: {
                        annotationId_categoryId: {
                            annotationId: id,
                            categoryId
                        }                  
                    },
                    create:{
                        categoryId
                    }
                }
            })

        const annotation = await this.prisma.annotation.update({
            where:{
                id
            },
            data:{
                title: item.title,
                text: item.text,
                image: item.image,
                updatedAt: new Date(),
                categories: {
                    connectOrCreate: categories,
                    deleteMany:{
                        categoryId: {
                            notIn: categoriesIds
                        }
                    }
                }
            }
        })

        return annotation.id
    }

    async delete(id: string): Promise<string> {
        const annotation = await this.prisma.annotation.delete({
            where:{
                id
            }
        })

        return annotation.id
    }

}
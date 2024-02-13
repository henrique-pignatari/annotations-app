import Category from "src/domain/entities/category";
import { PrismaService } from "../../frameworks/prisma/prisma.service";
import { ICategoriesRepository } from "../../abstracts/ICategoriesRepository";
import { Inject } from "@nestjs/common";

export class PrismaCategoriesRepository implements ICategoriesRepository{
    @Inject()
    private prisma: PrismaService

    async getAll(take: number, skip: number): Promise<Category[]> {
        const results = await this.prisma.category.findMany({
            skip,
            take,
        })

        return results
    }
    async getById(id: string): Promise<Category> {
        const result = await this.prisma.category.findUnique({
            where:{
                id
            },
        })

        return result
    }

    async create(item: Category): Promise<string> {
        const category = await this.prisma.category.create({
            data:{
                title: item.title,
            }
        })

        return category.id
    }

    async update(id: string, item: Category): Promise<string> {
        const annotation = await this.prisma.category.update({
            where:{
                id
            },
            data:{
                title: item.title,
            }
        })

        return annotation.id
    }

    async delete(id: string): Promise<string> {
        const annotation = await this.prisma.category.delete({
            where:{
                id
            }
        })

        return annotation.id
    }

}
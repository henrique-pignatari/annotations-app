import { Test, TestingModule } from "@nestjs/testing";
import { CategoriesMapper } from "src/application/mappers/categoryMapper";
import { ModuleMocker } from 'jest-mock';
import { CategoriesController } from "src/modules/categories/categories.controller"
import { CategoriesService } from "src/application/services/categories/categories.service";
import { ICategoriesService } from "src/application/abstracts/services/categories/ICategoriesService";

const moduleMocker = new ModuleMocker(global);

describe('CategoriesController', () => {
    let categoriesController: CategoriesController;
    const categoriesService = {
        create: () => "3133721b-c476-4924-b15a-32eb784c563c"
    }

    beforeEach(async () => {
        const categoriesModule: TestingModule = await Test.createTestingModule({
            controllers: [CategoriesController],
            providers: [{
                provide: ICategoriesService,
                useValue: categoriesService
            }]
        })  
        .compile();

        categoriesController = categoriesModule.get<CategoriesController>(CategoriesController)
    });

    describe('', () => {
        it('should receive creation DTO then return the created Category id', async () => {
            const result = await categoriesController.createCategory({
                title: "TESTE"
            })

            const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i

            expect(typeof(result)).toBe("string")
            expect(uuidRegex.test(result)).toBe(true)
        })
    })
})
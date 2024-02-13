import { IsNotEmpty } from "class-validator";

export class CategoriesReceiveDTO{
    @IsNotEmpty()
    title: string;
}
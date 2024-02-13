import { ArrayMinSize, IsArray, IsNotEmpty, IsOptional, IsString} from "class-validator";

export class AnnotationsReceiveDTO{
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    text: string;

    @IsOptional()
    image?: string

    @IsArray()
    @IsString({each: true})
    @ArrayMinSize(1)
    categoriesIds: string[]
}
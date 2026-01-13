import { IsString, MinLength } from 'class-validator';

export class GenerateScenesDto {
    @IsString()
    @MinLength(10)
    story: string;

    @IsString()
    @MinLength(3)
    style: string;
}

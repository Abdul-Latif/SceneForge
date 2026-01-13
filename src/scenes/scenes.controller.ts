import {
    Body,
    Controller,
    HttpException,
    HttpStatus,
    Post,
} from '@nestjs/common';
import { GeminiService } from '../gemini/gemini.service';
import { GenerateScenesDto } from './dto/generate-scenes.dto';

@Controller('scenes')
export class ScenesController {
    constructor(private readonly geminiService: GeminiService) { }

    @Post('generate')
    async generateScenes(@Body() dto: GenerateScenesDto) {
        try {
            return await this.geminiService.generateScenes(
                dto.story,
                dto.style,
            );
        } catch (err: any) {
            throw new HttpException(
                {
                    message: 'Failed to generate scenes',
                    error: err.message,
                },
                HttpStatus.BAD_REQUEST,
            );
        }
    }
}

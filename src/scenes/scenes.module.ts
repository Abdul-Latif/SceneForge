import { GeminiModule } from './../gemini/gemini.module';
import { Module } from '@nestjs/common';
import { ScenesController } from './scenes.controller';


@Module({
    imports: [GeminiModule],
    controllers: [ScenesController],
})
export class ScenesModule { }

import { GeminiModule } from './gemini/gemini.module';
import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/config.module';
import { ScenesModule } from './scenes/scenes.module';

@Module({
  imports: [
    AppConfigModule,
    GeminiModule,
    ScenesModule,
  ],
})
export class AppModule { }

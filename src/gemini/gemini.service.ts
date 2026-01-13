import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { buildGeminiPrompt } from './gemini.prompt';
import { validateGeminiOutput } from './gemini.validator';
import { EnvService } from '../config/env.service';
import { SceneVideo } from '../types/scene-video';


@Injectable()
export class GeminiService {
    private readonly genAI: GoogleGenerativeAI;
    private readonly MAX_RETRIES = 5;

    constructor(private readonly env: EnvService) {
        this.genAI = new GoogleGenerativeAI(
            this.env.get('GEMINI_API_KEY'),
        );
    }

    async generateScenes(story: string, style: string): Promise<SceneVideo> {
        let lastError = 'Unknown error';

        for (let attempt = 1; attempt <= this.MAX_RETRIES; attempt++) {
            const result = await this.tryGenerate(
                story,
                style,
                attempt,
                lastError,
            );

            if (result.success) {
                return result.data;
            }

            lastError = result.error;
        }

        throw new Error(
            `Gemini failed after ${this.MAX_RETRIES} retries. Last error: ${lastError}`,
        );
    }

    private async tryGenerate(
        story: string,
        style: string,
        attempt: number,
        lastError: string,
    ): Promise<| { success: true; data: SceneVideo }
        | { success: false; error: string }> {
        try {
            const text = await this.callGemini(
                story,
                style,
                attempt,
                lastError,
            );

            const parsed = JSON.parse(text);
            const validationError = validateGeminiOutput(parsed);

            if (validationError) {
                return { success: false, error: validationError };
            }

            return { success: true, data: parsed };
        } catch (err: any) {
            return {
                success: false,
                error: err?.message ?? 'JSON parse failed',
            };
        }
    }

    private async callGemini(
        story: string,
        style: string,
        attempt: number,
        lastError: string,
    ): Promise<string> {
        const model = this.genAI.getGenerativeModel({
            model: 'gemini-3-flash-preview',
            generationConfig: {
                temperature: attempt >= 4 ? 0.2 : 0.7,
            },
        });

        const prompt = buildGeminiPrompt(
            story,
            style,
            attempt,
            lastError,
        );

        const result = await model.generateContent(prompt);
        return result.response.text();
    }
}

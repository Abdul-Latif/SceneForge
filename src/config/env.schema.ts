import { z } from 'zod';

export const envSchema = z.object({
    NODE_ENV: z
        .enum(['development', 'production', 'test'])
        .default('development'),

    GEMINI_API_KEY: z.string().min(1, 'GEMINI_API_KEY is required'),
});

export type EnvVars = z.infer<typeof envSchema>;

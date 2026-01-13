import { Injectable } from '@nestjs/common';
import { envSchema, EnvVars } from './env.schema';

@Injectable()
export class EnvService {
    private readonly env: EnvVars;

    constructor() {
        const parsed = envSchema.safeParse(process.env);

        if (!parsed.success) {
            console.error(
                '❌ Invalid environment variables:',
                parsed.error.flatten().fieldErrors,
            );
            throw new Error('Invalid environment configuration');
        }

        this.env = parsed.data;
    }

    get<K extends keyof EnvVars>(key: K): EnvVars[K] {
        return this.env[key];
    }
}

export function validateGeminiOutput(data: any): string | null {
    if (!data?.meta || !Array.isArray(data.scenes)) {
        return 'Missing meta or scenes array';
    }

    const { meta, scenes } = data;

    if (scenes.length !== meta.total_scenes) {
        return 'Scene count mismatch';
    }

    for (let i = 0; i < scenes.length; i++) {
        const s = scenes[i];

        if (s.id !== i + 1) {
            return `Scene id mismatch at index ${i}`;
        }

        if (typeof s.prompt !== 'string' || !s.prompt.trim()) {
            return `Invalid prompt in scene ${s.id}`;
        }

        if (s.duration < 2 || s.duration > 6) {
            return `Invalid duration in scene ${s.id}`;
        }
    }

    return null;
}

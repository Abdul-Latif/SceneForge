export interface SceneVideo {
    meta: {
        title: string;
        style: string;
        total_scenes: number;
        fps: number;
        resolution: string;
        seed: number | null;
    };
    scenes: {
        id: number;
        duration: number;
        prompt: string;
        mood: string;
        notes: {
            camera: string;
            audio: string;
            transition: string;
        };
    }[];
}

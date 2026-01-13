export function buildGeminiPrompt(
  story: string,
  style: string,
  attempt: number,
  lastError: string,
): string {
  return `
You are an AI system that generates structured JSON for AI video generation.

CRITICAL RULES:
- Output ONLY valid JSON
- Do NOT include markdown
- Do NOT include explanations
- Do NOT add extra keys
- Follow the schema EXACTLY

If this is a retry, fix this error:
"${lastError}"

STORY:
"${story}"

STYLE:
"${style}"

SCHEMA (STRICT):

{
  "meta": {
    "title": "string",
    "style": "string",
    "total_scenes": number,
    "fps": 24,
    "resolution": "512x512",
    "seed": null
  },
  "scenes": [
    {
      "id": number,
      "duration": number (between 2 and 6),
      "prompt": "string",
      "mood": "string",
      "notes": {
        "camera": "string",
        "audio": "string",
        "transition": "string"
      }
    }
  ]
}

TASK:
- Create EXACTLY 15 scenes
- Scene IDs must be sequential starting from 1
- Scenes must visually flow like a movie
- Prompts must be visually descriptive
- Duration must be realistic for AI video generation

REMEMBER:
Return JSON ONLY.
`;
}

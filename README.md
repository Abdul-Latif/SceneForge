#  SceneForge

SceneForge is a backend service that converts raw story ideas into structured, validated cinematic scene JSON — designed for AI image and video generation pipelines.

---

##  What Problem Does This Solve?

AI video generation requires **clean, structured, deterministic input**.

Raw stories are:
- Ambiguous
- Inconsistent
- Hard to validate
- Unreliable for downstream AI models

SceneForge solves this by transforming stories into:
- Scene-by-scene breakdowns
- Consistent duration
- Visual prompts
- Camera direction
- Mood and audio hints

All in **strict JSON**.

---

##  Features

- 🧠 Gemini-powered scene generation
- 🔁 Automatic retry with adaptive prompting
- ✅ Strict JSON schema validation
- 🧱 Centralized environment config validation
- 🎥 Designed for AI image → video pipelines
- 🛡️ Safe for automation (no malformed output)

---

##  Example Output

```json
{
  "title": "The Last Signal of Kepler-186f",
  "total_scenes": 15,
  "scenes": [
    {
      "scene_number": 1,
      "duration_seconds": 4,
      "visual_prompt": "A damaged spacecraft streaks across a violent purple sky...",
      "camera": "Wide tracking shot",
      "mood": "Intense",
      "audio_hint": "Roaring engines",
      "transition": "Cut"
    }
  ]
}
```

---

## Project Scope

SceneForge focuses only on scene planning.
It does not:
Generate images
Generate videos
Handle audio or narration
Those are intentional future extensions.

```json 
also i want this to be 100% free and can be used by anyone anywhere,
but API integeration is not supported yet on any platoform
but what i want to see in the future is this API be fully automated AI video creator
```

## Suggestions
any suggestion is welcomed
- i tried google colab to run hugging face models but again with the free tier it is not enough i guess
- it alawys gives me a memory alocation problem

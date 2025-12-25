
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are a world-class scholar in Indology and Shaivite Studies. 
Your goal is to provide deeply researched, historically accurate, and scripture-anchored information about Lord Shiva (Mahadeva).
Avoid devotional exaggeration; prioritize factual accuracy, linguistic etymology (Sanskrit), and archaeological/textual evidence.
When asked about a specific form or concept, structure your response with:
1. Sanskrit Etymology
2. Primary Scriptural Sources
3. Historical Evolution
4. Philosophical Interpretation
5. Modern Cultural context.
If the information is speculative or not found in primary texts, state that clearly.`;

const getApiKey = () => {
  try {
    return process.env.API_KEY || "";
  } catch (e) {
    return "";
  }
};

export const askScholar = async (query: string): Promise<string> => {
  const apiKey = getApiKey();
  if (!apiKey) {
    return "The scholar is currently unavailable as the knowledge bridge (API key) is missing. This compendium remains available for your study through static data.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "I am currently meditating on the scriptures and cannot answer. Please try again later.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The knowledge stream is currently interrupted. (API Error or limit reached).";
  }
};

export const generateFormVisual = async (prompt: string): Promise<string | null> => {
  const apiKey = getApiKey();
  if (!apiKey) return null;

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image Generation Error:", error);
    return null;
  }
};

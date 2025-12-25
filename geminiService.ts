
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

export const askScholar = async (query: string): Promise<string> => {
  try {
    // Initializing GoogleGenAI instance with the API key from environment variables.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    // Extracting text output directly from the .text property of GenerateContentResponse.
    return response.text || "I am currently meditating on the scriptures and cannot answer. Please try again later.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The knowledge stream is currently interrupted. (API Key missing or error).";
  }
};

export const generateFormVisual = async (prompt: string): Promise<string | null> => {
  try {
    // Initializing a new GoogleGenAI instance right before making an API call.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
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

    // Iterating through parts to find the image part in the response.
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

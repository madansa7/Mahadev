
export enum FormClassification {
  VEDIC = 'Vedic',
  PURANIC = 'Puranic',
  TANTRIC = 'Tantric',
  ICONOGRAPHIC = 'Iconographic',
  REGIONAL = 'Regional',
  EPIC = 'Epic'
}

export enum TimelineEra {
  VEDIC = 'Vedic (c. 1500 – 500 BCE)',
  UPANISHADIC = 'Upanishadic (c. 800 – 200 BCE)',
  EPIC = 'Epic (c. 400 BCE – 400 CE)',
  PURANIC = 'Puranic (c. 300 – 1500 CE)',
  MEDIEVAL = 'Medieval & Tantric (c. 600 – 1800 CE)',
  MODERN = 'Modern'
}

export interface ImagePromptSet {
  museumStyle: string;
  cinematicStyle: string;
  educationalDiagram: string;
}

export interface ShivaForm {
  id: string;
  nameDevanagari: string;
  nameIAST: string;
  meaning: string;
  classification: FormClassification;
  summary: string;
  scriptureRef: string;
  symbolism: string;
  iconography: {
    weapons: string[];
    posture: string;
    attributes: string[];
    vahanas: string[];
  };
  temples: string[];
  festivals: string[];
  era: TimelineEra;
  relatedFigures: string[];
  imagePrompts: ImagePromptSet;
  imageUrl: string;
}

export interface GlossaryItem {
  term: string;
  definition: string;
  significance: string;
}

export interface Name108 {
  name: string;
  meaning: string;
}

export interface Jyotirlinga {
  name: string;
  location: string;
  description: string;
}

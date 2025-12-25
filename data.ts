
import { ShivaForm, FormClassification, TimelineEra, GlossaryItem, Name108 } from './types';

export const SHIVA_FORMS: ShivaForm[] = [
  {
    id: 'nataraja',
    nameDevanagari: 'नटराज',
    nameIAST: 'Naṭarāja',
    meaning: 'Lord of the Dance (Nata = Dance, Raja = King)',
    classification: FormClassification.ICONOGRAPHIC,
    summary: 'Nataraja is the cosmic dancer who performs the Ananda Tandava (Dance of Bliss) within a flaming aureole (Prabhamandala). This manifestation represents the cosmic cycles of creation and destruction, as well as the daily rhythm of birth and death. The dance takes place in the Chidambaram (Sky of Consciousness), signifying that the cosmos is a divine performance of energy.',
    scriptureRef: 'Abhinaya Darpana; Chidambara Mahatmya; Tirumantiram',
    symbolism: 'The circle of fire represents the universe. The drum (Damaru) symbolizes creation. The fire (Agni) symbolizes destruction. The dwarf Apasmara symbolizes ignorance being trampled.',
    iconography: {
      weapons: ['Agni (Fire)'],
      posture: 'Bhujangatrasita (Scared by a snake) pose',
      attributes: ['Damaru', 'Ganga in locks', 'Crescent Moon', 'Tiger skin'],
      vahanas: ['Apasmara (dwarf underfoot)']
    },
    temples: ['Thillai Natarajar Temple, Chidambaram', 'Brihadisvara Temple, Tanjore'],
    festivals: ['Arudra Darisanam', 'Maha Shivaratri'],
    era: TimelineEra.MEDIEVAL,
    relatedFigures: ['Kali', 'Patanjali'],
    imageUrl: 'https://images.unsplash.com/photo-1632766035049-53b924976c66?q=80&w=1200&auto=format&fit=crop',
    imagePrompts: {
      museumStyle: 'Bronze Chola statue of Nataraja, museum lighting.',
      cinematicStyle: 'Nataraja dancing in a cosmic nebula.',
      educationalDiagram: 'Diagram of Nataraja mudras.'
    }
  },
  {
    id: 'ardhanarishvara',
    nameDevanagari: 'अर्धनारीश्वर',
    nameIAST: 'Ardhanārīśvara',
    meaning: 'The Lord who is Half-Female',
    classification: FormClassification.ICONOGRAPHIC,
    summary: 'A composite androgynous form of Shiva and Parvati, representing the synthesis of masculine and feminine energies (Purusha and Prakriti). This form illustrates that the divine is beyond gender and that the world exists through the inseparable unity of these two forces.',
    scriptureRef: 'Shiva Purana; Linga Purana; Matsya Purana',
    symbolism: 'Non-duality (Advaita), the union of power (Shakti) and consciousness (Shiva).',
    iconography: {
      weapons: ['Trishula (on right side)', 'Mirror (on left side)'],
      posture: 'Standing (Sthanaka)',
      attributes: ['Half-matted hair', 'Half-crown', 'Tiger skin and silk garment'],
      vahanas: ['Nandi and Lion']
    },
    temples: ['Elephanta Caves', 'Ardhanareeswarar Temple, Tiruchengode'],
    festivals: ['Maha Shivaratri'],
    era: TimelineEra.PURANIC,
    relatedFigures: ['Parvati', 'Adi Parashakti'],
    imageUrl: 'https://images.unsplash.com/photo-1598974357801-903126868661?q=80&w=1200&auto=format&fit=crop',
    imagePrompts: {
      museumStyle: 'Ancient stone carving of Ardhanarishvara, high detail.',
      cinematicStyle: 'Cinematic glowing manifestation of the half-male half-female form.',
      educationalDiagram: 'Visual split showing the attributes of both halves.'
    }
  },
  {
    id: 'dakshinamurti',
    nameDevanagari: 'दक्षिणामूर्ति',
    nameIAST: 'Dakṣiṇāmūrti',
    meaning: 'The South-Facing Form / The Teacher of the Universe',
    classification: FormClassification.ICONOGRAPHIC,
    summary: 'Shiva as the supreme guru, who teaches through silence. He is the personification of ultimate awareness, understanding, and knowledge. He sits facing south, imparting the highest knowledge to the four Kumaras (Manas-putras of Brahma).',
    scriptureRef: 'Dakshinamurti Stotram; Skanda Purana',
    symbolism: 'Silence as the highest form of communication. The realization of the Self.',
    iconography: {
      weapons: ['None'],
      posture: 'Virashana (seated under a Banyan tree)',
      attributes: ['Chin Mudra', 'Scripture (Pustaka)', 'Rosary (Akshamala)', 'Vina'],
      vahanas: ['Nandi']
    },
    temples: ['Alangudi Temple', 'Malleshwaram Temple'],
    festivals: ['Guru Purnima'],
    era: TimelineEra.PURANIC,
    relatedFigures: ['Four Kumaras'],
    imageUrl: 'https://images.unsplash.com/photo-1572044162444-ad60f128bde7?q=80&w=1200&auto=format&fit=crop',
    imagePrompts: {
      museumStyle: 'South Indian stone sculpture of Dakshinamurti.',
      cinematicStyle: 'Shiva sitting in deep silence under a giant glowing Banyan tree.',
      educationalDiagram: 'Detailed view of the Chin Mudra and the items held.'
    }
  },
  {
    id: 'bhairava',
    nameDevanagari: 'भैरव',
    nameIAST: 'Bhairava',
    meaning: 'The Terrible or Frightful',
    classification: FormClassification.TANTRIC,
    summary: 'Bhairava is the fierce manifestation associated with annihilation. He is the guardian of the sacred city of Kashi. He represents the transcendence of fear and the destruction of the ego.',
    scriptureRef: 'Bhairava Tantra; Shiva Purana',
    symbolism: 'Annihilation of ignorance and the passage of time (Kala).',
    iconography: {
      weapons: ['Trident', 'Cleaver', 'Skull-cup'],
      posture: 'Standing',
      attributes: ['Garland of skulls', 'Fierce expression'],
      vahanas: ['Dog (Shvana)']
    },
    temples: ['Kaal Bhairav Temple, Varanasi'],
    festivals: ['Bhairava Ashtami'],
    era: TimelineEra.PURANIC,
    relatedFigures: ['Bhairavi'],
    imageUrl: 'https://images.unsplash.com/photo-1636113847250-983b6329c0fc?q=80&w=1200&auto=format&fit=crop',
    imagePrompts: {
      museumStyle: 'Dark stone Bhairava sculpture.',
      cinematicStyle: 'Bhairava in a moonlit cremation ground.',
      educationalDiagram: 'Ashta Bhairava diagram.'
    }
  },
  {
    id: 'veerabhadra',
    nameDevanagari: 'वीरभद्र',
    nameIAST: 'Vīrabhadra',
    meaning: 'The Auspicious Hero',
    classification: FormClassification.PURANIC,
    summary: 'The warrior form created from Shiva\'s hair to destroy Daksha\'s Yagna. He represents divine wrath against arrogance.',
    scriptureRef: 'Mahabharata; Shiva Purana',
    symbolism: 'Sacrifice and righteous destruction.',
    iconography: {
      weapons: ['Bow', 'Sword', 'Shield'],
      posture: 'Warrior pose',
      attributes: ['Dark complexion', 'Many arms'],
      vahanas: ['None']
    },
    temples: ['Veerabhadra Temple, Lepakshi'],
    festivals: ['Veerabhadra Jayanti'],
    era: TimelineEra.EPIC,
    relatedFigures: ['Bhadrakali', 'Daksha'],
    imageUrl: 'https://images.unsplash.com/photo-1590050752117-23a9d7fc20c3?q=80&w=1200&auto=format&fit=crop',
    imagePrompts: {
      museumStyle: 'Lepakshi pillar carving of Veerabhadra.',
      cinematicStyle: 'Veerabhadra rising from the sacred fire.',
      educationalDiagram: 'Infographic of weapons used.'
    }
  },
  {
    id: 'durvasa',
    nameDevanagari: 'दुर्वासा',
    nameIAST: 'Durvāsā',
    meaning: 'One with whom residence is difficult',
    classification: FormClassification.EPIC,
    summary: 'A legendary sage and an avatar of Shiva, known for his short temper and powerful curses. Born to Anasuya and Atri, he is a manifestation of Shiva\'s anger.',
    scriptureRef: 'Shiva Purana; Mahabharata',
    symbolism: 'The power of asceticism and the unpredictability of divine fury.',
    iconography: {
      weapons: ['Kamandalu', 'Staff'],
      posture: 'Standing in a forest',
      attributes: ['Matted hair', 'Fierce red eyes', 'Ascetic robes'],
      vahanas: ['None']
    },
    temples: ['Durvasa Rishi Temple, Haryana'],
    festivals: ['N/A'],
    era: TimelineEra.EPIC,
    relatedFigures: ['Anasuya', 'Atri'],
    imageUrl: 'https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?q=80&w=1200&auto=format&fit=crop',
    imagePrompts: {
      museumStyle: 'Old parchment illustration of Durvasa.',
      cinematicStyle: 'A sage with burning eyes cursing the Devas.',
      educationalDiagram: 'List of famous curses by Durvasa.'
    }
  },
  {
    id: 'ashwatthama',
    nameDevanagari: 'अश्वत्थामा',
    nameIAST: 'Aśvatthāmā',
    meaning: 'One who has the strength of a horse',
    classification: FormClassification.EPIC,
    summary: 'The son of Drona and an avatar of Shiva\'s Rudra energy. He is one of the Chiranjivis (immortals). His story is a tragic arc of warrior prowess and ultimate condemnation in the Mahabharata.',
    scriptureRef: 'Mahabharata (Adi Parva); Shiva Purana',
    symbolism: 'The consequence of unchecked power and the burden of immortality.',
    iconography: {
      weapons: ['Bow', 'Brahmashirastra'],
      posture: 'Standing warrior',
      attributes: ['Gem (Mani) on forehead', 'Immortal status'],
      vahanas: ['Horse (sometimes)']
    },
    temples: ['Asirgarh Fort Temple'],
    festivals: ['N/A'],
    era: TimelineEra.EPIC,
    relatedFigures: ['Drona', 'Krishna'],
    imageUrl: 'https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=1200&auto=format&fit=crop',
    imagePrompts: {
      museumStyle: 'Mahabharata scene stone carving.',
      cinematicStyle: 'Ashwatthama wandering the ruins of Kurukshetra.',
      educationalDiagram: 'Chart of the 8 Immortals (Chiranjivis).'
    }
  },
  {
    id: 'piplaad',
    nameDevanagari: 'पिप्पलाद',
    nameIAST: 'Pippalāda',
    meaning: 'One who eats Peepal fruit',
    classification: FormClassification.VEDIC,
    summary: 'A sage and avatar of Shiva born to Dadhichi and Suvarsha. He is the founder of the Pippalada school of the Atharvaveda and the author of the Prashna Upanishad.',
    scriptureRef: 'Prashna Upanishad; Shiva Purana',
    symbolism: 'Knowledge and the pacification of negative planetary influences (Shani).',
    iconography: {
      weapons: ['None'],
      posture: 'Sitting under a Peepal tree',
      attributes: ['Ascetic appearance', 'Peepal leaves'],
      vahanas: ['None']
    },
    temples: ['Shani Shingnapur'],
    festivals: ['N/A'],
    era: TimelineEra.VEDIC,
    relatedFigures: ['Dadhichi', 'Shani'],
    imageUrl: 'https://images.unsplash.com/photo-1598974357801-903126868661?q=80&w=1200&auto=format&fit=crop',
    imagePrompts: {
      museumStyle: 'Classical Vedic sage painting.',
      cinematicStyle: 'Piplaad meditating under a cosmic Peepal tree.',
      educationalDiagram: 'Flow of questions in Prashna Upanishad.'
    }
  }
];

export const GLOSSARY: GlossaryItem[] = [
  {
    term: 'Tandava',
    definition: 'The divine dance performed by Shiva.',
    significance: 'Represents the five cosmic functions: creation, preservation, destruction, illusion, and grace.'
  },
  {
    term: 'Linga',
    definition: 'An abstract or aniconic representation of Shiva.',
    significance: 'Symbolizes the beginningless and endless nature of the Supreme Reality.'
  },
  {
    term: 'Aghora',
    definition: 'One of the five faces of Shiva; also a school of Shaivism.',
    significance: 'Represents the southern direction and the aspect of destruction that leads to rejuvenation.'
  },
  {
    term: 'Pashupata',
    definition: 'One of the oldest schools of Shaivism.',
    significance: 'Focuses on the path of the soul (Pashu) to attain union with the Lord (Pati).'
  },
  {
    term: 'Maya',
    definition: 'The cosmic illusion that veils the true nature of reality.',
    significance: 'Shiva is the lord of Maya, helping devotees to pierce through it.'
  }
];

export const NAMES_108: Name108[] = [
  { name: 'Shiva', meaning: 'The Auspicious One' },
  { name: 'Mahadeva', meaning: 'The Great God' },
  { name: 'Maheshvara', meaning: 'The Supreme Lord' },
  { name: 'Shankara', meaning: 'The Giver of Happiness' },
  { name: 'Pashupati', meaning: 'Lord of all Living Beings' },
  { name: 'Neelkantha', meaning: 'The Blue-Throated One' },
  { name: 'Trinetra', meaning: 'The Three-Eyed Lord' },
  { name: 'Chandrashekhara', meaning: 'The One with the Moon on His Head' },
  { name: 'Vishweshvara', meaning: 'Lord of the Universe' },
  { name: 'Bholenath', meaning: 'The Simple/Kind-hearted Lord' },
  { name: 'Vamadeva', meaning: 'The Preserver God' },
  { name: 'Aghora', meaning: 'The Non-terrifying' },
  { name: 'Tatpurusha', meaning: 'The Supreme Being' },
  { name: 'Ishana', meaning: 'The Ruler' },
  { name: 'Sadyojata', meaning: 'Quickly Born' },
  { name: 'Mrityunjaya', meaning: 'Conqueror of Death' },
  { name: 'Shambhu', meaning: 'Abode of Joy' },
  { name: 'Pinaki', meaning: 'Wielder of the Pinaka Bow' }
];

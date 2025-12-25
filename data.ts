
import { ShivaForm, FormClassification, TimelineEra, GlossaryItem, Name108 } from './types';

export const SHIVA_FORMS: ShivaForm[] = [
  {
    id: 'nataraja',
    nameDevanagari: 'नटराज',
    nameIAST: 'Naṭarāja',
    meaning: 'Lord of the Dance (Nata = Dance, Raja = King)',
    classification: FormClassification.ICONOGRAPHIC,
    summary: 'Nataraja is the cosmic dancer who performs the Ananda Tandava (Dance of Bliss) within a flaming aureole (Prabhamandala). This manifestation represents the cosmic cycles of creation and destruction, as well as the daily rhythm of birth and death. The dance takes place in the Chidambaram (Sky of Consciousness), signifying that the cosmos is a divine performance of energy. It is one of the most celebrated forms of Hindu art, capturing the simultaneous acts of creation, preservation, destruction, illusion, and liberation.',
    scriptureRef: 'Abhinaya Darpana; Chidambara Mahatmya; Tirumantiram',
    symbolism: 'The circle of fire represents the universe. The drum (Damaru) symbolizes creation. The fire (Agni) symbolizes destruction. The "fear-not" mudra (Abhaya) offers protection. The dwarf Apasmara symbolizes ignorance being trampled.',
    iconography: {
      weapons: ['Agni (Fire)'],
      posture: 'Bhujangatrasita (Scared by a snake) pose',
      attributes: ['Damaru', 'Ganga in locks', 'Crescent Moon', 'Tiger skin'],
      vahanas: ['Apasmara (dwarf underfoot)']
    },
    temples: ['Thillai Natarajar Temple, Chidambaram', 'Brihadisvara Temple, Tanjore'],
    festivals: ['Arudra Darisanam', 'Maha Shivaratri'],
    era: TimelineEra.MEDIEVAL,
    relatedFigures: ['Kali (competitor in dance)', 'Patanjali'],
    imageUrl: 'https://images.unsplash.com/photo-1632766035049-53b924976c66?q=80&w=1200&auto=format&fit=crop',
    imagePrompts: {
      museumStyle: 'A high-resolution photograph of a Chola dynasty bronze Nataraja statue from the 11th century, intricate lost-wax casting details, patina, museum lighting, black background.',
      cinematicStyle: 'A divine cinematic visualization of Lord Shiva as Nataraja performing the Tandava amidst a swirling galaxy of stars and cosmic fire, hyper-realistic, 8k, golden lighting.',
      educationalDiagram: 'A clean educational infographic diagram showing the Nataraja form with labels for each hand position (mudra), the damaru, the fire, and the dwarf Apasmara, parchment style.'
    }
  },
  {
    id: 'bhairava',
    nameDevanagari: 'भैरव',
    nameIAST: 'Bhairava',
    meaning: 'The Terrible or Frightful',
    classification: FormClassification.TANTRIC,
    summary: 'Bhairava is the fierce manifestation of Shiva associated with annihilation. He is often depicted as the guardian of the sacred city of Kashi (Kala Bhairava). In the Puranas, Bhairava originated from Shiva\'s anger to punish Brahma for his arrogance. He is the lord of time (Kala) and the protector of the direction (Kshetrapala). Tantric traditions identify eight forms of Bhairava (Ashta Bhairava) representing different elements and directions.',
    scriptureRef: 'Bhairava Tantra; Shiva Purana (Sati Khanda); Skanda Purana',
    symbolism: 'Represents the transcendence of fear and the destruction of the ego. Associated with the cremation ground, symbolizing the ultimate reality of mortality.',
    iconography: {
      weapons: ['Trident', 'Cleaver', 'Skull-cup (Kapala)'],
      posture: 'Standing, often naked or wearing snakes',
      attributes: ['Severed head of Brahma', 'Garland of skulls', 'Fierce expression'],
      vahanas: ['Dog (Shvana)']
    },
    temples: ['Kaal Bhairav Temple, Varanasi', 'Kal Bhairav Temple, Ujjain'],
    festivals: ['Bhairava Ashtami'],
    era: TimelineEra.PURANIC,
    relatedFigures: ['Bhairavi', 'Saptamatrikas'],
    imageUrl: 'https://images.unsplash.com/photo-1636113847250-983b6329c0fc?q=80&w=1200&auto=format&fit=crop',
    imagePrompts: {
      museumStyle: 'A dark stone sculpture of Kala Bhairava with a dog, detailed carvings of ornaments and skulls, 12th century Hoysala style, museum spotlighting.',
      cinematicStyle: 'A dark, intense cinematic scene of Bhairava standing guard at the gates of Kashi under a blood-red moon, surrounded by shadows and a black dog, ethereal smoke.',
      educationalDiagram: 'Diagram of the Ashta Bhairava (Eight Bhairavas) positions around a central mandala, with labels for their respective directions and meanings.'
    }
  },
  {
    id: 'veerabhadra',
    nameDevanagari: 'वीरभद्र',
    nameIAST: 'Vīrabhadra',
    meaning: 'The Auspicious Hero (Vira = Hero, Bhadra = Auspicious)',
    classification: FormClassification.PURANIC,
    summary: 'Veerabhadra is the warrior form of Shiva, created from a lock of his hair (Jata) during the tragedy of Daksha\'s Yagna. After Sati immolated herself, Shiva\'s grief transformed into fury, birthing Veerabhadra to destroy the sacrificial ceremony and punish Daksha. He represents the protective and righteous anger of the divine against arrogance and injustice.',
    scriptureRef: 'Mahabharata (Shanti Parva); Shiva Purana; Vayu Purana',
    symbolism: 'Sacrifice, vengeance for truth, and the indomitable power of the spirit when pushed to extremes.',
    iconography: {
      weapons: ['Bow', 'Sword', 'Shield', 'Trident'],
      posture: 'Alidhasana (Warrior pose)',
      attributes: ['Dark complexion', 'Many arms', 'Garland of skulls', 'Fire'],
      vahanas: ['None (solitary)']
    },
    temples: ['Veerabhadra Temple, Lepakshi', 'Yaganti Temple'],
    festivals: ['Veerabhadra Jayanti'],
    era: TimelineEra.EPIC,
    relatedFigures: ['Bhadrakali', 'Daksha Prajapati'],
    imageUrl: 'https://images.unsplash.com/photo-1590050752117-23a9d7fc20c3?q=80&w=1200&auto=format&fit=crop',
    imagePrompts: {
      museumStyle: 'A monumental Vijayanagara style stone pillar carving of Veerabhadra at Lepakshi, intricate armor details, warrior stance, warm sepia lighting.',
      cinematicStyle: 'A high-fantasy cinematic depiction of Veerabhadra rising from Shiva\'s hair, a giant of shadows and fire, dual wielding swords against an army of gods.',
      educationalDiagram: 'Infographic detailing the anatomy of the Veerabhadra form: the Jata origin, the weapons held in multiple hands, and the symbolic significance of his jewelry.'
    }
  },
  {
    id: 'neelkantha',
    nameDevanagari: 'नीलकण्ठ',
    nameIAST: 'Nīlakaṇṭha',
    meaning: 'The Blue-Throated One (Nila = Blue, Kantha = Throat)',
    classification: FormClassification.PURANIC,
    summary: 'During the Churning of the Ocean (Samudra Manthan), a deadly poison called Halahala emerged, threatening to destroy all life. Shiva consumed the poison to save the universe. Parvati, fearing for his life, gripped his throat, stopping the poison there. The poison turned his throat blue, giving him the name Neelkantha. This form is the ultimate symbol of sacrifice and the savior of the world.',
    scriptureRef: 'Bhagavata Purana; Vishnu Purana; Mahabharata (Adi Parva)',
    symbolism: 'Compassion (Karuna), the ability to internalize negativity to protect others, and the balance between creation and destruction.',
    iconography: {
      weapons: ['Trishula'],
      posture: 'Seated in meditation (Dhyana)',
      attributes: ['Blue neck', 'Calm countenance', 'Serpents around neck'],
      vahanas: ['Nandi']
    },
    temples: ['Neelkanth Mahadev Temple, Rishikesh', 'Pashupatinath Temple'],
    festivals: ['Maha Shivaratri'],
    era: TimelineEra.PURANIC,
    relatedFigures: ['Halahala poison', 'Kurma Avatar'],
    imageUrl: 'https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=1200&auto=format&fit=crop',
    imagePrompts: {
      museumStyle: 'A delicate Pahari miniature painting of Shiva drinking the Halahala poison, vibrant blue throat, surrounded by gods and demons in the background.',
      cinematicStyle: 'Close-up of Neelkantha\'s face as a glowing indigo luminescence spreads through his throat, eyes filled with infinite compassion, cinematic blue lighting.',
      educationalDiagram: 'A flowchart showing the Samudra Manthan process and the critical intervention of Neelkantha to neutralize the Halahala poison.'
    }
  },
  {
    id: 'tripurantaka',
    nameDevanagari: 'त्रिपुरान्तक',
    nameIAST: 'Tripurāntaka',
    meaning: 'The Destroyer of the Three Cities (Tripura = Three Cities, Antaka = Ender)',
    classification: FormClassification.PURANIC,
    summary: 'Three demon brothers (Tarakaksha, Kamalaksha, and Vidyunmali) built three flying cities of iron, silver, and gold that could only be destroyed by a single arrow when they aligned once every thousand years. Shiva, acting as the supreme warrior of the Devas, used the Earth as his chariot, Brahma as his charioteer, and Vishnu as his arrow to destroy the Tripuras in a single stroke.',
    scriptureRef: 'Karna Parva (Mahabharata); Shiva Purana; Matsya Purana',
    symbolism: 'The alignment of the ego, mind, and intellect which must be destroyed by divine intervention. The unity of the gods to defeat a singular overwhelming evil.',
    iconography: {
      weapons: ['Pinaka (Bow)', 'Pashupatastra (Arrow)'],
      posture: 'Standing on a chariot (Rathotsava)',
      attributes: ['Four arms', 'War gear', 'Fiery arrow'],
      vahanas: ['Prithvi (The Earth as a Chariot)']
    },
    temples: ['Tripurantakam Temple, Andhra Pradesh', 'Tiruvarur Thyagaraja Temple'],
    festivals: ['Karthigai Deepam'],
    era: TimelineEra.EPIC,
    relatedFigures: ['Maya Danava', 'Brahma (Charioteer)'],
    imageUrl: 'https://images.unsplash.com/photo-1626014303757-64035822364c?q=80&w=1200&auto=format&fit=crop',
    imagePrompts: {
      museumStyle: 'A bronze sculpture of Tripurantaka in a dynamic archer pose, Chola style, capturing the tension of the bow, museum grade patina.',
      cinematicStyle: 'An epic wide-angle shot of Shiva as Tripurantaka standing on a golden celestial chariot, launching a flaming arrow into three overlapping cities in the sky.',
      educationalDiagram: 'Diagram of the "Great Chariot" (Maha Ratha) of Shiva, labeling how various cosmic entities formed the chariot\'s wheels, axle, and reins.'
    }
  },
  {
    id: 'mahakala',
    nameDevanagari: 'महाकाल',
    nameIAST: 'Mahākāla',
    meaning: 'The Great Time (Maha = Great, Kala = Time/Death)',
    classification: FormClassification.TANTRIC,
    summary: 'Mahakala represents Shiva as the ultimate destroyer of all things, including Time itself. In this form, he is beyond the cycle of birth and death, standing as the eternal witness to the dissolution of the universe. He is the consort of Mahakali. This form is particularly significant in Ujjain and in Tibetan Buddhist Tantra, where he is a protective deity.',
    scriptureRef: 'Mahakala Sanhita; Shiva Purana; Guhyasamaja Tantra',
    symbolism: 'Impermanence, the inevitability of death, and the eternity of the soul beyond physical manifestation.',
    iconography: {
      weapons: ['Trident', 'Drum', 'Dagger'],
      posture: 'Dancing or Seated on a corpse',
      attributes: ['Darker than night', 'Third eye burning', 'Flaming hair'],
      vahanas: ['None']
    },
    temples: ['Mahakaleshwar Jyotirlinga, Ujjain'],
    festivals: ['Bhasma Aarti'],
    era: TimelineEra.PURANIC,
    relatedFigures: ['Mahakali', 'Yama'],
    imageUrl: 'https://images.unsplash.com/photo-1621251711202-0e98031e4e73?q=80&w=1200&auto=format&fit=crop',
    imagePrompts: {
      museumStyle: 'A black obsidian sculpture of Mahakala, fierce features, ancient Tantric style, high contrast lighting emphasizing the depth of the stone.',
      cinematicStyle: 'A majestic and terrifying vision of Mahakala standing in a void where galaxies are dissolving into dust around him, the embodiment of entropy and time.',
      educationalDiagram: 'A circular graphic explaining the concept of "Kala" as both time and death, with Mahakala at the center as the transcender of both.'
    }
  },
  {
    id: 'sharabha',
    nameDevanagari: 'शरभ',
    nameIAST: 'Śarabha',
    meaning: 'A mythical eight-legged beast',
    classification: FormClassification.PURANIC,
    summary: 'Sharabha is an anthropomorphic form—half-lion and half-bird—assumed by Shiva to pacify Narasimha, the man-lion avatar of Vishnu, after Narasimha became uncontrollable following the killing of Hiranyakashipu. While controversial in some traditions, the Sharabha form emphasizes Shiva\'s role in maintaining cosmic balance and subduing even the fiercest of divine energies.',
    scriptureRef: 'Sharabha Upanishad; Skanda Purana; Shiva Purana',
    symbolism: 'The hierarchy of power and the necessity of subduing fury with even greater divine authority for the sake of universal peace.',
    iconography: {
      weapons: ['Claws', 'Wings', 'Trident'],
      posture: 'Hovering or Overpowering Narasimha',
      attributes: ['Eight legs', 'Body of a lion', 'Wings of a bird', 'Lion head'],
      vahanas: ['None']
    },
    temples: ['Sharabeshwara Temple, Tribhuvanam'],
    festivals: ['Special Pradosha Pujas'],
    era: TimelineEra.PURANIC,
    relatedFigures: ['Narasimha', 'Pratyangira (his Shakti)'],
    imageUrl: 'https://images.unsplash.com/photo-1604804364230-8ec34b679b3a?q=80&w=1200&auto=format&fit=crop',
    imagePrompts: {
      museumStyle: 'An unusual 13th-century stone sculpture of Sharabha pinning down Narasimha, intricate details of feathers and fur, museum lighting.',
      cinematicStyle: 'A grand cinematic combat scene between the golden Narasimha and the dark, winged Sharabha in a storm-filled sky, divine epic fantasy style.',
      educationalDiagram: 'An anatomical breakdown of the Sharabha form, identifying its various animal components (lion, bird, human) and their symbolic meanings.'
    }
  },
  {
    id: 'pashupati',
    nameDevanagari: 'पशुपति',
    nameIAST: 'Paśupati',
    meaning: 'Lord of the Animals/Beings (Pashu = Being/Cattle, Pati = Lord)',
    classification: FormClassification.VEDIC,
    summary: 'Pashupati is one of the most ancient names of Shiva, dating back to the Indus Valley Civilization (Pashupati Seal). He is the lord of all creatures, both domestic and wild. In Shaiva Siddhanta, the term "Pashu" refers to the individual soul, "Pasha" to the bond of ignorance, and "Pati" to the Lord who liberates the soul from bondage.',
    scriptureRef: 'Atharvaveda; Pashupata Sutras; Rigveda',
    symbolism: 'The relationship between the creator and the created. The liberation of the soul (Pashu) from the fetters (Pasha) of the material world.',
    iconography: {
      weapons: ['None'],
      posture: 'Yogic posture (Mulabandhasana)',
      attributes: ['Surrounded by animals (bull, elephant, tiger, rhino)', 'Horned headdress', 'Three faces'],
      vahanas: ['Nandi (Bull)']
    },
    temples: ['Pashupatinath Temple, Kathmandu', 'Mandsaur Pashupatinath'],
    festivals: ['Shivaratri'],
    era: TimelineEra.VEDIC,
    relatedFigures: ['Nandi', 'Pashupata sect'],
    imageUrl: 'https://images.unsplash.com/photo-1598974357801-903126868661?q=80&w=1200&auto=format&fit=crop',
    imagePrompts: {
      museumStyle: 'A detailed macro photo of the Mohenjo-daro Pashupati seal, terracotta texture, weathered edges, museum exhibition style.',
      cinematicStyle: 'A serene forest scene with a yogic Shiva sitting under a Banyan tree, surrounded by diverse animals in a state of perfect peace and harmony.',
      educationalDiagram: 'A conceptual diagram of the Pati-Pashu-Pasha philosophy, using the Pashupati form to illustrate the path to liberation.'
    }
  },
  {
    id: 'hanuman',
    nameDevanagari: 'हनुमान',
    nameIAST: 'Hanumān',
    meaning: 'The One with the Disfigured Jaw',
    classification: FormClassification.EPIC,
    summary: 'While primarily known as a devotee of Rama, Hanuman is traditionally considered the 11th Rudra avatar (Rudra-Ansh) of Shiva. Born to Anjana and Kesari through the grace of Vayu, Hanuman embodies the immense power, celibacy, and wisdom of Shiva channeled into selfless service. His presence in the Ramayana bridges the Shaivite and Vaishnavite traditions.',
    scriptureRef: 'Shiva Purana (Sata-Rudra Samhita); Hanuman Chalisa; Valmiki Ramayana',
    symbolism: 'The union of Shakti (energy) and Bhakti (devotion). The transformation of raw power into humble service.',
    iconography: {
      weapons: ['Gada (Mace)'],
      posture: 'Kneeling in devotion or Flying',
      attributes: ['Monkey face', 'Vanara body', 'Golden skin', 'Sacred thread'],
      vahanas: ['None']
    },
    temples: ['Sankat Mochan, Varanasi', 'Jakhu Temple'],
    festivals: ['Hanuman Jayanti'],
    era: TimelineEra.EPIC,
    relatedFigures: ['Rama', 'Vayu'],
    imageUrl: 'https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?q=80&w=1200&auto=format&fit=crop',
    imagePrompts: {
      museumStyle: 'An ancient stone bas-relief of Hanuman from a medieval temple, carrying the Sanjivani mountain, weathered features, dramatic lighting.',
      cinematicStyle: 'A powerful cinematic shot of Hanuman revealing Shiva in his heart, a blend of monkey features and the third eye of Mahadeva, cosmic background.',
      educationalDiagram: 'A lineage chart showing the connection between Shiva (as the source) and Hanuman (as the 11th Rudra), including the role of Vayu.'
    }
  }
];

export const GLOSSARY: GlossaryItem[] = [
  {
    term: 'Tandava',
    definition: 'The divine dance performed by Shiva.',
    significance: 'Represents the five cosmic functions: Srishti (creation), Sthiti (preservation), Samhara (destruction), Tirobhava (illusion), and Anugraha (grace).'
  },
  {
    term: 'Linga',
    definition: 'An abstract or aniconic representation of Shiva.',
    significance: 'Symbolizes the beginningless and endless nature of the Supreme Reality. Mentioned extensively in the Linga Purana.'
  },
  {
    term: 'Aghora',
    definition: 'One of the five faces of Shiva; also a school of Shaivism.',
    significance: 'Literally means "non-terrifying." Represents the southern direction and the aspect of destruction that leads to rejuvenation.'
  },
  {
    term: 'Pashupata',
    definition: 'One of the oldest schools of Shaivism.',
    significance: 'Focuses on the path of the "Pashu" (soul) to attain union with the "Pati" (Lord) through asceticism and meditation.'
  },
  {
    term: 'Maya',
    definition: 'The cosmic illusion that veils the true nature of reality.',
    significance: 'Shiva is the lord of Maya, who uses it to create the world and also helps the devotee to pierce through it.'
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

export const toeflTheoryQuestions = [
  {
    id: "toefl-th-1",
    module: "TOEFL",
    category: "TOEFL History & Origins",
    question: "How did the TOEFL exam originate in the early 1960s?",
    options: [
      "The National Council on the Testing of English as a Foreign Language was formed in 1962, and the first test was administered in 1964 before coming under ETS direction.",
      "It was launched in 1979 in Tokyo by the Ministry of International Trade and Industry for corporate employees.",
      "It was created in 1989 by the University of Cambridge and IDP Australia.",
      "It began in 2005 as an open-source mobile app for European secondary schools."
    ],
    correctIndex: 0,
    rationale: "Correct! Thirty government and private organizations formed the National Council in 1962 to address how U.S. universities evaluated international applicants' English; the first TOEFL exam launched in 1964 and joined ETS."
  },
  {
    id: "toefl-th-2",
    module: "TOEFL",
    category: "Historical Evolution (1964–2026)",
    question: "Which sequence accurately traces the four major generations of the TOEFL assessment?",
    options: [
      "PBT (1964: Listening, Structure & Written Expression, Reading) → CBT (1998: computer-adaptive & essay) → iBT (2005: integrated 4 skills) → 2026 Redesign (multistage adaptive R/L & 1–6 CEFR scale)",
      "iBT (1964) → CBT (1979) → PBT (2005) → Paper-Only (2026)",
      "CBT (1964) → TOEIC Bridge (1985) → IELTS Academic (2005) → TKT (2026)",
      "PBT (1990) → Speaking-Only (2000) → Grammar-Only (2015) → 2026 Redesign"
    ],
    correctIndex: 0,
    rationale: "Correct! Paper-Based Test (1964, discrete grammar via Structure & Written Expression) evolved into Computer-Based Test (1998), then Internet-Based Test (2005, replacing Structure with Speaking & integrated tasks), and the 2026 Redesign."
  },
  {
    id: "toefl-th-3",
    module: "TOEFL",
    category: "2026 TOEFL iBT Redesign (Scoring & Adaptivity)",
    question: "What are the two headline structural changes introduced in the 2026 TOEFL iBT Redesign?",
    options: [
      "Multistage adaptive testing in Reading and Listening, plus a new 1–6 score scale (in 0.5 increments aligned with CEFR) reported alongside the traditional 0–120 scale.",
      "Elimination of the Speaking and Writing sections and a return to optical mark paper answer sheets.",
      "Replacing all academic content with kindergarten phonics drills scored from 10 to 990.",
      "A mandatory 4-hour live debate with three human examiners."
    ],
    correctIndex: 0,
    rationale: "Correct! Starting in 2026, TOEFL iBT uses a multistage adaptive design for Reading and Listening (adjusting difficulty in Stage 2 based on Stage 1 performance) and introduces an intuitive 1–6 scale aligned directly with CEFR levels alongside the 0–120 score."
  },
  {
    id: "toefl-th-4",
    module: "TOEFL",
    category: "2026 TOEFL iBT New Task Types",
    question: "Which set of innovative task types is featured in the 2026 TOEFL iBT Redesign?",
    options: [
      "Complete the Words, Read in Daily Life, Build a Sentence, Write an Email, and Take an Interview",
      "Part 1 Photographs, Part 2 Question-Response, and Part 5 Incomplete Sentences",
      "True/False/Not Given, Map Labeling, and Cue Card Monologue",
      "Structure & Written Expression Error Identification"
    ],
    correctIndex: 0,
    rationale: "Correct! The 2026 format integrates 'Complete the Words' and 'Read in Daily Life' in Reading, 'Build a Sentence' and 'Write an Email' (plus Academic Discussion) in Writing (23 mins base time), and 'Take an Interview' in Speaking."
  },
  {
    id: "toefl-th-5",
    module: "TOEFL",
    category: "CEFR B2 Benchmark on TOEFL iBT",
    question: "What traditional 0–120 TOEFL iBT score range corresponds to CEFR Level B2 (Independent User) required in EEI3316?",
    options: [
      "72 – 94",
      "42 – 71",
      "95 – 113",
      "0 – 41"
    ],
    correctIndex: 0,
    rationale: "Correct! ETS maps CEFR B2 to a TOEFL iBT total score of 72–94 (whereas 42–71 is B1, and 95+ is C1/C2)."
  }
];

export const toeflReadingPassages = [
  {
    id: "passage-1",
    title: "Passage 1: Why Honey Never Spoils",
    timeMinutes: 6,
    paragraphs: [
      "Archaeologists exploring ancient Egyptian tombs have occasionally uncovered sealed clay pots of honey that are more than three thousand years old. Remarkably, despite the passage of millennia, this ancient honey remains completely edible. While almost all unprocessed foods deteriorate rapidly unless refrigerated or chemically preserved, natural honey possesses a unique combination of chemical and physical properties that make it an inhospitable environment for food-spoiling organisms.",
      "The primary reason honey resists spoilage is its extremely low moisture content. Freshly collected flower nectar consists mostly of water, often up to seventy or eighty percent. However, inside the hive, honeybees fan their wings vigorously over the honeycomb to evaporate most of this liquid. The resulting honey contains very little water—typically less than eighteen percent—and a high concentration of natural sugars. Because of osmosis, any bacteria, yeast, or other microorganisms that land in the honey have the water drawn out of their cells, preventing them from surviving or multiplying.",
      "In addition to its scarcity of free water, honey is naturally acidic, with an average pH between 3.2 and 4.5. As bees process nectar, an enzyme from their stomachs called glucose oxidase converts a portion of the glucose into gluconic acid and tiny amounts of hydrogen peroxide. This high acidity and mild antiseptic action further inhibit microbial growth, making honey remarkably stable over long periods—provided that it is kept in an airtight container away from atmospheric humidity. If left unsealed in a damp environment, honey can absorb moisture from the air, allowing yeast to ferment its sugars."
    ],
    questions: [
      {
        id: "toefl-r1-1",
        module: "TOEFL",
        category: "Reading P1 (Vocabulary)",
        question: "The word 'microorganisms' in paragraph 2 is closest in meaning to:",
        options: [
          "A) tiny living organisms",
          "B) artificial chemical preservatives",
          "C) crystalline sugar molecules",
          "D) ancient storage vessels"
        ],
        correctIndex: 0,
        rationale: "Correct (A)! 'Microorganisms' refers to microscopic living things such as bacteria, yeast, and molds mentioned in the same sentence."
      },
      {
        id: "toefl-r1-2",
        module: "TOEFL",
        category: "Reading P1 (Vocabulary)",
        question: "The word 'stable' in paragraph 3 is closest in meaning to:",
        options: [
          "A) expensive",
          "B) long-lasting",
          "C) sweet-tasting",
          "D) transparent"
        ],
        correctIndex: 1,
        rationale: "Correct (B)! In the context of food preservation ('remarkably stable over long periods'), 'stable' means resistant to decay or change—i.e., long-lasting."
      },
      {
        id: "toefl-r1-3",
        module: "TOEFL",
        category: "Reading P1 (Factual Information)",
        question: "According to paragraph 2, why are bacteria and yeast unable to multiply in honey?",
        options: [
          "A) Flower nectar contains seventy percent natural acid before bees collect it.",
          "B) Clay pots block oxygen from reaching the honeycomb.",
          "C) Honey contains very little water, which draws moisture out of microbial cells.",
          "D) Honeybees heat the hive to temperatures that boil away bacteria."
        ],
        correctIndex: 2,
        rationale: "Correct (C)! Paragraph 2 explicitly states that 'The resulting honey contains very little water—typically less than eighteen percent... any bacteria, yeast, or other microorganisms... have the water drawn out of their cells.'"
      },
      {
        id: "toefl-r1-4",
        module: "TOEFL",
        category: "Reading P1 (Inference)",
        question: "What can be inferred from the passage about a jar of honey that has been kept in a kitchen cupboard for ten years?",
        options: [
          "A) It will have turned completely into pure water.",
          "B) Its pH level will have risen above 8.0.",
          "C) It may still be safe to eat if it has been stored properly in a sealed container.",
          "D) It must be boiled for thirty minutes before consumption."
        ],
        correctIndex: 2,
        rationale: "Correct (C)! Since honey remains edible for thousands of years provided it is kept in an airtight container away from atmospheric humidity, a properly sealed ten-year-old jar of honey may still be safe to consume."
      },
      {
        id: "toefl-r1-5",
        module: "TOEFL",
        category: "Reading P1 (Main Idea)",
        question: "Which of the following best expresses the main idea of the passage?",
        options: [
          "A) Honey rarely spoils because its natural properties prevent the growth of harmful microorganisms.",
          "B) Ancient Egyptian archaeologists discovered modern methods of food refrigeration.",
          "C) Honeybees use their wings primarily to regulate winter temperatures inside the hive.",
          "D) Fermented honey is the primary ingredient in modern pharmaceutical antibiotics."
        ],
        correctIndex: 0,
        rationale: "Correct (A)! The entire passage explains how honey's low moisture content, high sugar concentration, acidity, and enzymatic hydrogen peroxide prevent microbial growth so it rarely spoils."
      }
    ]
  },
  {
    id: "passage-2",
    title: "Passage 2: The Return of the Gray Wolf",
    timeMinutes: 8,
    paragraphs: [
      "By the late 1920s, gray wolves had been completely eliminated from Yellowstone National Park in the western United States as a result of government-sponsored predator control programs. Although park managers at the time believed removing top predators would protect prized wildlife, the absence of wolves triggered unexpected ecological problems over the following seven decades.",
      "Without their primary natural predator, populations of large herbivores—particularly elk and deer—expanded rapidly. Even more importantly, their foraging behavior changed. Unafraid of being ambushed, deer and elk congregated in open river valleys and ate large amounts of young willow, aspen, and cottonwood trees before the saplings could mature. As streamside vegetation disappeared, riverbanks eroded, water temperatures rose, and songbirds lost vital nesting habitats.",
      "In 1995 and 1996, wildlife biologists reintroduced thirty-one gray wolves from Canada into Yellowstone. The ecological response over the next twenty years was remarkable. Wolves not only reduced the overall elk population to more sustainable levels, but also prompted herbivores to avoid lingering in exposed valley bottoms. Freed from constant overgrazing, native trees and shrubs along stream corridors grew tall and dense within just a few years.",
      "This recovery of riverside forests set off a chain reaction—known to ecologists as a trophic cascade—that benefited numerous other species. For example, before the wolves returned, only a single beaver colony remained in northern Yellowstone because beavers depend on willow and aspen trees for food and dam-building materials. Following the regrowth of streamside trees, the number of beaver colonies increased to nine. The dams built by these beavers created calm, deep ponds that cooled the water and provided ideal habitats for native trout, amphibians, and waterfowl."
    ],
    questions: [
      {
        id: "toefl-r2-1",
        module: "TOEFL",
        category: "Reading P2 (Vocabulary)",
        question: "The word 'remarkable' in paragraph 3 is closest in meaning to:",
        options: [
          "A) temporary",
          "B) surprising",
          "C) controversial",
          "D) invisible"
        ],
        correctIndex: 1,
        rationale: "Correct (B)! In this academic context, 'remarkable' means striking, extraordinary, or surprising in its scope and speed."
      },
      {
        id: "toefl-r2-2",
        module: "TOEFL",
        category: "Reading P2 (Factual Information)",
        question: "According to paragraph 2, what happened in Yellowstone after gray wolves were eliminated in the 1920s?",
        options: [
          "A) Riverbanks became narrower and deeper due to dense tree roots.",
          "B) Songbird populations tripled in open river valleys.",
          "C) Deer and elk ate large amounts of vegetation along streams.",
          "D) Beaver colonies took over all the highland forests."
        ],
        correctIndex: 2,
        rationale: "Correct (C)! Paragraph 2 states that without wolves, 'deer and elk congregated in open river valleys and ate large amounts of young willow, aspen, and cottonwood trees.'"
      },
      {
        id: "toefl-r2-3",
        module: "TOEFL",
        category: "Reading P2 (Inference)",
        question: "What can be inferred from the passage about the role of top predators like gray wolves?",
        options: [
          "A) They feed primarily on beavers and native trout during winter.",
          "B) Their ecological impact is limited strictly to the animals they directly hunt.",
          "C) Wolves can indirectly affect many parts of an ecosystem, including plants and waterways.",
          "D) Ecosystems always recover faster when all predators are removed."
        ],
        correctIndex: 2,
        rationale: "Correct (C)! Through a trophic cascade, wolves indirectly influenced elk behavior, tree growth, riverbank stability, beaver colonies, water temperature, and fish habitats."
      },
      {
        id: "toefl-r2-4",
        module: "TOEFL",
        category: "Reading P2 (Rhetorical Purpose)",
        question: "Why does the author mention 'beavers' in paragraph 4?",
        options: [
          "A) To argue that beavers caused the initial erosion of Yellowstone riverbanks",
          "B) To provide evidence that ecological changes affected many different species",
          "C) To explain why wolves were originally relocated from Canada",
          "D) To contrast aquatic mammals with migratory songbirds"
        ],
        correctIndex: 1,
        rationale: "Correct (B)! Paragraph 4 introduces beavers ('For example...') to illustrate the trophic cascade showing how tree recovery benefited numerous other interconnected species."
      },
      {
        id: "toefl-r2-5",
        module: "TOEFL",
        category: "Reading P2 (Main Idea)",
        question: "Which statement best summarizes the main idea of the passage?",
        options: [
          "A) Elk and deer are the most destructive invasive species in North America.",
          "B) Government predator control programs in the 1920s saved Yellowstone's forests.",
          "C) Reintroducing wolves helped restore balance to the Yellowstone ecosystem.",
          "D) Beavers are more important than wolves for regulating mountain climates."
        ],
        correctIndex: 2,
        rationale: "Correct (C)! The passage traces how the removal of wolves disrupted Yellowstone and how reintroducing them restored ecological balance across flora and fauna."
      }
    ]
  },
  {
    id: "passage-3",
    title: "Passage 3: Why Do Some Species Become Invasive?",
    timeMinutes: 18,
    paragraphs: [
      "[Para 1] Throughout Earth's history, plants and animals have occasionally crossed geographic barriers such as oceans, mountain ranges, and deserts to colonize new habitats. In the past, these natural migrations occurred gradually over thousands of years. In the modern era, however, global trade, international travel, and shipping have dramatically accelerated the movement of organisms across continents, introducing thousands of non-native species to regions where they never evolved.",
      "[Para 2] Importantly, not every non-native organism becomes an ecological threat. Many introduced plants and animals fail to survive in unfamiliar climates, while others integrate quietly into local food webs without causing disruption. Ecologists reserve the term 'invasive species' for those non-native organisms that establish self-sustaining populations, spread rapidly across wide areas, and cause significant harm to native biodiversity, human health, or economic systems.",
      "[Para 3] A major reason certain introduced species thrive so explosively is described by the 'enemy release hypothesis.' In its native habitat, an organism is typically kept in check by co-evolved predators, parasites, and pathogens. When that organism is transported to a distant continent, it frequently leaves those specialized natural enemies behind. Free from predation and disease, the newcomers can devote more biological energy to growth and reproduction, giving them a decisive advantage over native competitors.",
      "[Para 4] Invasive species also succeed because they often possess adaptable life-history traits, such as rapid maturation, high seed or offspring production, and generalist diets. Once established, they alter habitats in ways that disadvantage native wildlife. Invasive plants may form thick monocultures that block sunlight and deplete soil nutrients, while invasive predators can decimate native prey species that lack evolutionary experience defending against them. However, invasive species do not improve native species' defenses in the short term; instead, naive native populations often suffer steep declines before adaptation can occur.",
      "[Para 5] These ecological changes frequently carry substantial economic consequences for human communities. For example, zebra mussels—small freshwater mollusks accidentally transported from Eastern Europe to North America in ship ballast water—attach themselves in massive numbers to underwater surfaces. By clogging intake pipes at municipal water treatment plants and hydroelectric dams, zebra mussels cost utilities and industries hundreds of millions of dollars annually in maintenance and repairs.",
      "[Para 6] [■ A] Because eradicating an invasive species becomes nearly impossible once it is widespread, conservation biologists emphasize prevention and rapid response. [■ B] Strict border inspections of agricultural cargo and regulations requiring ships to treat ballast water before entering ports have proven effective at stopping new introductions. [■ C] Even though early detection programs require consistent funding and public cooperation, controlling a small, localized outbreak is far less costly and ecologically damaging than attempting to manage a full-scale biological invasion after it has taken hold. [■ D]"
    ],
    questions: [
      {
        id: "toefl-r3-1",
        module: "TOEFL",
        category: "Reading P3 (Vocabulary)",
        question: "The word 'accelerated' in paragraph 1 is closest in meaning to:",
        options: [
          "A) restricted",
          "B) documented",
          "C) sped up",
          "D) predicted"
        ],
        correctIndex: 2,
        rationale: "Correct (C)! 'Accelerated' means increased the speed or rate of something—contrasting rapid modern transport with gradual ancient migrations."
      },
      {
        id: "toefl-r3-2",
        module: "TOEFL",
        category: "Reading P3 (Vocabulary)",
        question: "The word 'substantial' in paragraph 5 is closest in meaning to:",
        options: [
          "A) minor",
          "B) considerable",
          "C) unpredictable",
          "D) temporary"
        ],
        correctIndex: 1,
        rationale: "Correct (B)! 'Substantial economic consequences' means large, significant, or considerable impacts (illustrated by hundreds of millions of dollars in costs)."
      },
      {
        id: "toefl-r3-3",
        module: "TOEFL",
        category: "Reading P3 (Factual Information)",
        question: "According to paragraph 2, how do ecologists distinguish an 'invasive species' from other non-native species?",
        options: [
          "A) Invasive species are unable to survive outside botanical gardens.",
          "B) Invasive species only migrate through natural wind currents.",
          "C) Invasive species spread rapidly and cause significant harm to ecosystems or economies.",
          "D) Invasive species always go extinct within two generations."
        ],
        correctIndex: 2,
        rationale: "Correct (C)! Paragraph 2 explicitly defines invasive species as non-native organisms that 'spread rapidly across wide areas, and cause significant harm to native biodiversity, human health, or economic systems.'"
      },
      {
        id: "toefl-r3-4",
        module: "TOEFL",
        category: "Reading P3 (Negative Factual Information)",
        question: "According to paragraph 4, all of the following are effects or characteristics of invasive species EXCEPT that they:",
        options: [
          "A) block sunlight by forming dense plant monocultures",
          "B) deplete nutrients in the soil",
          "C) improve native species' defenses",
          "D) reproduce rapidly and eat a wide variety of foods"
        ],
        correctIndex: 2,
        rationale: "Correct (C)! Paragraph 4 explicitly states that 'invasive species do not improve native species' defenses in the short term; instead, naive native populations often suffer steep declines.'"
      },
      {
        id: "toefl-r3-5",
        module: "TOEFL",
        category: "Reading P3 (Reference)",
        question: "The phrase 'These ecological changes' at the beginning of paragraph 5 refers to:",
        options: [
          "A) ancient continental drift and ice ages in paragraph 1",
          "B) dense plant growth, predation, and competition caused by invasive species in paragraph 4",
          "C) border cargo inspections and ballast water laws in paragraph 6",
          "D) the harmless integration of non-native flowers in paragraph 2"
        ],
        correctIndex: 1,
        rationale: "Correct (B)! 'These ecological changes' links directly back to the habitat alterations described in paragraph 4: dense plant growth blocking sunlight, soil nutrient depletion, and predation/competition."
      },
      {
        id: "toefl-r3-6",
        module: "TOEFL",
        category: "Reading P3 (Inference)",
        question: "Based on the 'enemy release hypothesis' in paragraph 3, what can be inferred about non-native species introduced into an environment lacking their natural predators and diseases?",
        options: [
          "A) Their populations are more likely to increase rapidly.",
          "B) They will immediately lose their ability to reproduce.",
          "C) They will voluntarily return to their native continent.",
          "D) They require human feeding to survive the first winter."
        ],
        correctIndex: 0,
        rationale: "Correct (A)! Because they leave co-evolved predators and pathogens behind and can devote more energy to growth and reproduction, their populations are much more likely to increase rapidly."
      },
      {
        id: "toefl-r3-7",
        module: "TOEFL",
        category: "Reading P3 (Rhetorical Purpose)",
        question: "Why does the author discuss 'zebra mussels' in paragraph 5?",
        options: [
          "A) To show how native mollusks purify drinking water in Eastern Europe",
          "B) To provide a specific example of the economic impacts of invasive species",
          "C) To prove that aquatic species are less harmful than terrestrial plants",
          "D) To explain how hydroelectric dams generate electricity"
        ],
        correctIndex: 1,
        rationale: "Correct (B)! Zebra mussels are introduced with 'For example...' immediately following the topic sentence about 'substantial economic consequences,' illustrating maintenance and repair costs."
      },
      {
        id: "toefl-r3-8",
        module: "TOEFL",
        category: "Reading P3 (Sentence Insertion)",
        question: "Look at the four squares [■ A], [■ B], [■ C], and [■ D] in paragraph 6. Where would the following sentence best fit?\n\n'Dealing with the problem before it begins is therefore the highest priority for environmental agencies.'",
        options: [
          "A) First square [■ A] (or immediately connecting the opening prevention argument)",
          "B) Third square [■ C]",
          "C) Fourth square [■ D]",
          "D) At the beginning of Paragraph 1"
        ],
        correctIndex: 0,
        rationale: "Correct (A)! Placing the sentence at the first square [■ A] sets up the transition from the damages in paragraph 5 to paragraph 6's focus on prevention and rapid response before an invasion becomes widespread."
      },
      {
        id: "toefl-r3-9",
        module: "TOEFL",
        category: "Reading P3 (Sentence Simplification)",
        question: "Which of the following best expresses the essential information in the final sentence of paragraph 6 ('Even though early detection programs require consistent funding...')?",
        options: [
          "A) Public cooperation is impossible to achieve when managing biological invasions.",
          "B) Early detection and management help reduce the environmental and financial impacts of invasive species compared to late intervention.",
          "C) Controlling a small outbreak costs significantly more money than ignoring a widespread invasion.",
          "D) Conservation biologists prefer to study widespread invasions rather than localized outbreaks."
        ],
        correctIndex: 1,
        rationale: "Correct (B)! The core contrast is that despite funding needs, early detection and control of a small outbreak is far less costly and ecologically damaging than managing a full-scale invasion."
      },
      {
        id: "toefl-r3-10",
        module: "TOEFL",
        category: "Reading P3 (Prose Summary)",
        question: "Prose Summary: An introductory sentence for a brief summary of the passage is provided below:\n'Human activity has dramatically increased the spread of invasive species across the globe.'\nWhich metric represents the THREE correct summary statements (A, B, and C)?\n• (A) Invasive species thrive in new regions largely because they escape natural predators and possess adaptable reproductive traits.\n• (B) Once established, invasive organisms can severely disrupt native ecosystems and inflict heavy financial costs on human infrastructure.\n• (C) Prevention, border inspections, and early detection are the most effective strategies for minimizing the damage caused by biological invasions.\n• (D) All non-native species introduced to a new continent immediately cause the extinction of local wildlife.\n• (E) Zebra mussels were intentionally introduced to North America to clean hydroelectric intake pipes.",
        options: [
          "Select A, B, and C",
          "Select A, D, and E",
          "Select B, D, and E",
          "Select C, D, and E"
        ],
        correctIndex: 0,
        rationale: "Correct! Statements A (enemy release + traits, Paras 3–4), B (ecological & economic harm, Paras 4–5), and C (prevention & early management, Para 6) capture the three main pillars of the passage. D contradicts Para 2, and E contradicts Para 5."
      }
    ]
  }
];

export const toeflListeningSets = [
  {
    id: "listen-1",
    title: "Lecture 1: Biology — Camouflage and Mimicry",
    type: "Academic Lecture",
    durationEstimate: "2:15",
    transcript: `Professor: Good morning, everyone. Today we're continuing our unit on evolutionary adaptations by looking at two fascinating defensive strategies used by animals in the wild: camouflage and mimicry. Now, on the surface, both strategies involve visual deception to avoid predators or catch prey, so students often confuse them. Let's break down how they differ.

First, camouflage—also called cryptic coloration—is when an animal blends in with its surrounding physical environment so that it becomes difficult to spot. Think of the Arctic hare. During the summer tundra months, its fur is brownish-gray, matching the rocks and soil. But as winter arrives and snow blankets the landscape, the hare's coat turns pure white. By changing color seasonally, the hare remains concealed against the background. Another mechanism of camouflage is disruptive coloration. Take a tiger's stripes. A bright orange coat with black stripes might seem conspicuous in a zoo, but in tall grass and dappled forest shadows, those vertical stripes break up the outline of the tiger's body, making it nearly invisible to grazing deer.

Mimicry, on the other hand, is NOT about blending into the background environment. Instead, a mimic evolves to look—or sound, or smell—like another specific living organism. Usually, a harmless, edible species evolves to resemble a toxic or dangerous species that predators have already learned to avoid. A classic example is the harmless hoverfly, which has yellow and black bands that closely imitate a stinging wasp. Predators see those warning colors and stay away. However, notice an important ecological condition here: for Batesian mimicry to work effectively, the harmless mimics must remain less common than the genuinely dangerous models. If predators constantly eat yellow-and-black insects and rarely get stung, they won't associate the pattern with danger anymore.`,
    questions: [
      {
        id: "toefl-l1-1",
        module: "TOEFL",
        category: "Listening L1 (Gist-Content)",
        question: "What is the main topic of the lecture?",
        options: [
          "A) How predators use their sense of smell to hunt in the Arctic",
          "B) How animals use camouflage and mimicry as evolutionary survival strategies",
          "C) Why tigers are becoming endangered in tropical rainforests",
          "D) The chemical composition of wasp venom"
        ],
        correctIndex: 1,
        rationale: "Correct (B)! The professor introduces and compares two evolutionary visual deception strategies—camouflage and mimicry—and explains how animals use them to survive."
      },
      {
        id: "toefl-l1-2",
        module: "TOEFL",
        category: "Listening L1 (Detail)",
        question: "Why does the professor mention the Arctic hare's fur?",
        options: [
          "A) To show how animals regulate body heat in tropical deserts",
          "B) To give an example of Batesian mimicry",
          "C) To illustrate how an animal changes color seasonally to blend into its environment",
          "D) To explain why predators prefer hunting in the summer"
        ],
        correctIndex: 2,
        rationale: "Correct (C)! The Arctic hare's coat shifts from brownish-gray in summer to white in winter to remain concealed against the seasonal background."
      },
      {
        id: "toefl-l1-3",
        module: "TOEFL",
        category: "Listening L1 (Function/Detail)",
        question: "According to the professor, how do a tiger's stripes help it hunt?",
        options: [
          "A) They warn other tigers to stay out of its territory.",
          "B) They imitate the appearance of poisonous snakes.",
          "C) They reflect sunlight to keep the tiger cool.",
          "D) They break up the outline of the tiger's body in tall grass and shadows."
        ],
        correctIndex: 3,
        rationale: "Correct (D)! The tiger's stripes are an example of disruptive coloration: they break up the animal's body outline amidst tall grass and forest shadows."
      },
      {
        id: "toefl-l1-4",
        module: "TOEFL",
        category: "Listening L1 (Connecting Content)",
        question: "According to the lecture, what is the primary difference between camouflage and mimicry?",
        options: [
          "A) Camouflage is used only by insects, whereas mimicry is used only by mammals.",
          "B) Camouflage makes an animal highly visible, whereas mimicry makes it transparent.",
          "C) Camouflage conceals an animal against its background, whereas mimicry makes an animal resemble another organism.",
          "D) Camouflage requires chemical toxins, whereas mimicry requires seasonal fur shedding."
        ],
        correctIndex: 2,
        rationale: "Correct (C)! Camouflage blends the organism into the physical environment/background, while mimicry involves resembling another specific living organism (such as a harmless hoverfly resembling a wasp)."
      },
      {
        id: "toefl-l1-5",
        module: "TOEFL",
        category: "Listening L1 (Inference)",
        question: "What can be inferred from the lecture about Batesian mimicry if harmless mimics become much more numerous than the dangerous species they copy?",
        options: [
          "A) The harmless mimics will develop real stingers of their own.",
          "B) The mimicry strategy will become less effective at deterring predators.",
          "C) Predators will stop eating insects altogether.",
          "D) The dangerous species will change its colors to match the background."
        ],
        correctIndex: 1,
        rationale: "Correct (B)! The professor explains that if predators frequently encounter harmless mimics without getting stung, they will fail to associate the color pattern with danger, making the mimicry less effective."
      }
    ]
  },
  {
    id: "listen-2",
    title: "Lecture 2: Microeconomics — Supply, Demand, and Price Controls",
    type: "Academic Lecture",
    durationEstimate: "3:30",
    transcript: `Professor: Let's pick up our discussion of microeconomic market forces. At the heart of any competitive market is the interaction between supply and demand, which determines both the equilibrium price and the quantity of goods exchanged.

Let's start with the fundamental Law of Demand. Simply put, holding all other factors constant, when the price of a good rises, the quantity demanded by consumers falls; conversely, when the price drops, the quantity demanded increases. Now, let's trace how this plays out in a real-world agricultural market—say, the market for fresh strawberries and blueberries.

Suppose an unexpected late-spring frost destroys half of the strawberry crop. Because there are far fewer strawberries available to harvest, the supply of strawberries decreases sharply, driving strawberry prices up. How do shoppers at the grocery store respond? Well, according to the law of demand, they buy fewer strawberries.

But shoppers still want fresh berries for their breakfast! So, they turn to a substitute good: blueberries. Even though the harvest of blueberries wasn't affected by the frost, consumer demand for blueberries surges because strawberries have become so expensive. And what happens when demand for blueberries shifts outward while blueberry supply stays the same? You guessed it—the market price of blueberries rises too.

Now, sometimes governments step into a market because voters feel the equilibrium price is either too high for consumers or too low for producers. That brings us to government price controls: price ceilings and price floors.

A price ceiling is a legal maximum on the price at which a good can be sold. The textbook example is municipal rent control, where a city caps monthly apartment rents below the market equilibrium to keep housing affordable. While the intention is to help low-income tenants, setting a binding price ceiling below equilibrium causes quantity demanded to exceed quantity supplied—resulting in a persistent housing shortage and landlords reducing building maintenance.

On the flip side, a price floor is a legal minimum price—such as agricultural price supports for wheat or dairy. When a government sets a binding price floor above the market equilibrium, farmers produce more, while consumers buy less, creating a market surplus of unsold goods. Honestly, while I understand the political pressure to enact these controls, as an economist it's frustrating to see policymakers repeatedly ignore how predictable these shortages and surpluses are.`,
    questions: [
      {
        id: "toefl-l2-1",
        module: "TOEFL",
        category: "Listening L2 (Gist-Content)",
        question: "What is the main topic of the lecture?",
        options: [
          "A) How farmers protect fruit crops from late-spring frosts",
          "B) How supply, demand, and government price controls affect market prices and quantities",
          "C) The history of urban architecture in major cities",
          "D) Nutritional differences between strawberries and blueberries"
        ],
        correctIndex: 1,
        rationale: "Correct (B)! The lecture covers the Law of Demand, shifts in supply/substitute goods, and the effects of government price ceilings and price floors."
      },
      {
        id: "toefl-l2-2",
        module: "TOEFL",
        category: "Listening L2 (Detail)",
        question: "According to the Law of Demand stated by the professor, what happens when the price of a product increases (assuming all else remains constant)?",
        options: [
          "A) The quantity demanded by consumers decreases.",
          "B) Consumers buy twice as much of the product.",
          "C) The supply curve disappears.",
          "D) Government taxes automatically drop to zero."
        ],
        correctIndex: 0,
        rationale: "Correct (A)! The Law of Demand states an inverse relationship: when price rises, quantity demanded falls."
      },
      {
        id: "toefl-l2-3",
        module: "TOEFL",
        category: "Listening L2 (Detail)",
        question: "In the professor's example, what directly causes the price of strawberries to increase?",
        options: [
          "A) A new government price ceiling on fruit",
          "B) A frost that reduces the supply of strawberries",
          "C) A decrease in the cost of agricultural fertilizer",
          "D) A sudden drop in the population of consumers"
        ],
        correctIndex: 1,
        rationale: "Correct (B)! A late-spring frost destroys half the strawberry crop, reducing supply and driving strawberry prices up."
      },
      {
        id: "toefl-l2-4",
        module: "TOEFL",
        category: "Listening L2 (Connecting Content)",
        question: "Why does the demand for blueberries increase in the professor's scenario?",
        options: [
          "A) Blueberries are required by law in school cafeterias.",
          "B) Consumers switch to blueberries as a substitute for expensive strawberries.",
          "C) Blueberry farms suffered the same frost damage as strawberry farms.",
          "D) Supermarkets give away blueberries for free."
        ],
        correctIndex: 1,
        rationale: "Correct (B)! Blueberries act as a substitute good: when strawberry prices climb, shoppers substitute blueberries, shifting blueberry demand upward."
      },
      {
        id: "toefl-l2-5",
        module: "TOEFL",
        category: "Listening L2 (Inference)",
        question: "What can be inferred about the price of blueberries after the strawberry frost?",
        options: [
          "A) It drops to zero because nobody wants berries.",
          "B) It increases due to the higher demand from consumers switching from strawberries.",
          "C) It remains frozen by a municipal rent control law.",
          "D) It becomes identical to the price of wheat."
        ],
        correctIndex: 1,
        rationale: "Correct (B)! As demand for the substitute good (blueberries) shifts outward while supply stays constant, the equilibrium price of blueberries rises."
      },
      {
        id: "toefl-l2-6",
        module: "TOEFL",
        category: "Listening L2 (Detail)",
        question: "According to the professor, what is a typical consequence of rent control (a binding price ceiling set below equilibrium)?",
        options: [
          "A) A shortage of available rental housing because quantity demanded exceeds quantity supplied",
          "B) A massive surplus of empty luxury apartments",
          "C) An immediate increase in landlords renovating old buildings",
          "D) A complete elimination of tenant demand"
        ],
        correctIndex: 0,
        rationale: "Correct (A)! A binding price ceiling below equilibrium causes quantity demanded to exceed quantity supplied, creating a housing shortage."
      },
      {
        id: "toefl-l2-7",
        module: "TOEFL",
        category: "Listening L2 (Detail)",
        question: "What happens when the government establishes a binding price floor above the market equilibrium price?",
        options: [
          "A) Producers stop making the product altogether.",
          "B) Consumers purchase all available inventory within hours.",
          "C) A market surplus occurs because quantity supplied exceeds quantity demanded.",
          "D) The market immediately returns to equilibrium without intervention."
        ],
        correctIndex: 2,
        rationale: "Correct (C)! When a price floor is set above equilibrium (like agricultural supports), producers supply more than consumers are willing to buy at that high price, creating a surplus."
      },
      {
        id: "toefl-l2-8",
        module: "TOEFL",
        category: "Listening L2 (Attitude)",
        question: "What is the professor's attitude toward government price controls?",
        options: [
          "A) Enthusiastic about implementing price ceilings in every industry",
          "B) Critical and skeptical, noting that they predictably create shortages or surpluses",
          "C) Indifferent because price controls have never been tried in real life",
          "D) Confused about the difference between a floor and a ceiling"
        ],
        correctIndex: 1,
        rationale: "Correct (B)! The professor remarks, 'as an economist it's frustrating to see policymakers repeatedly ignore how predictable these shortages and surpluses are.'"
      },
      {
        id: "toefl-l2-9",
        module: "TOEFL",
        category: "Listening L2 (Organization)",
        question: "How does the professor organize the lecture?",
        options: [
          "A) By tracing a chronological biography of Adam Smith from birth to death",
          "B) By explaining core market principles with concrete examples and then contrasting two types of government intervention",
          "C) By debating a student who disagrees with the Law of Demand",
          "D) By reading a list of statistical formulas without providing any real-world examples"
        ],
        correctIndex: 1,
        rationale: "Correct (B)! The professor first explains supply/demand using the strawberry/blueberry market example and then contrasts price ceilings (rent control) with price floors (agricultural supports)."
      },
      {
        id: "toefl-l2-10",
        module: "TOEFL",
        category: "Listening L2 (Summary)",
        question: "Which statement best summarizes the central economic lesson of the lecture?",
        options: [
          "A) Market prices naturally adjust to balance supply and demand, while artificial price ceilings and floors disrupt equilibrium to create shortages or surpluses.",
          "B) Agricultural frosts permanently destroy consumer interest in eating fruit.",
          "C) Price ceilings always cause surpluses, whereas price floors always cause shortages.",
          "D) Microeconomics only applies to housing markets and never to food products."
        ],
        correctIndex: 0,
        rationale: "Correct (A)! This captures both halves of the lecture: how competitive prices respond to supply/demand shifts and how binding price controls distort equilibrium."
      }
    ]
  },
  {
    id: "listen-3",
    title: "Conversation 3: Office Hours — Research Project Sources with Prof. Lewis",
    type: "Campus Office Hours Conversation",
    durationEstimate: "2:00",
    transcript: `Student: Excuse me, Professor Lewis? Do you have a few minutes to talk about the final research paper for Environmental Policy?
Professor Lewis: Of course, come on in, Jordan. How is your research coming along?
Student: Well, I've chosen my topic—how municipal recycling incentives affect household waste—and I've already written a rough outline. The reason I stopped by is that I'm having some trouble meeting the source requirements listed on the syllabus.
Professor Lewis: Let's see. For the final paper, you need a minimum of ten scholarly sources published within the last eight years. How many have you found so far?
Student: I have six peer-reviewed journal articles, plus four detailed posts written by environmental activists on their personal blogs. Can I count those four blog posts toward the ten required sources?
Professor Lewis: Ah, I'm glad you asked now rather than the night before the deadline! While personal blogs can be interesting for seeing public opinion, they aren't peer-reviewed, so they aren't reliable enough to count as scholarly academic sources for a university research paper. You'll still need four more peer-reviewed journal articles or government policy reports.
Student: Okay, that makes sense. The problem is, whenever I type "recycling incentives" into the main library search bar, I either get ten thousand unrelated newspaper clips or articles from the 1990s.
Professor Lewis: That's a very common issue when using broad keywords. Have you scheduled a consultation with a reference librarian at the university library yet? They specialize in helping students set up advanced database filters and subject-specific search strings in Environmental Abstracts.
Student: Oh, I didn't realize we could book one-on-one help with a reference librarian!
Professor Lewis: Yes, their desk is right on the second floor of the library, or you can book a twenty-minute slot on the library website.
Student: Awesome. I'll head over to the library website right after class and schedule an appointment with a reference librarian for tomorrow.`,
    questions: [
      {
        id: "toefl-l3-1",
        module: "TOEFL",
        category: "Listening C3 (Gist-Purpose)",
        question: "Why does the student visit Professor Lewis during office hours?",
        options: [
          "A) To request a two-week extension on the midterm exam",
          "B) To ask for guidance on finding acceptable sources for his research paper",
          "C) To drop the Environmental Policy course",
          "D) To apply for a part-time job in the university library"
        ],
        correctIndex: 1,
        rationale: "Correct (B)! The student explicitly says he stopped by because he is having trouble meeting the source requirements for his final research paper."
      },
      {
        id: "toefl-l3-2",
        module: "TOEFL",
        category: "Listening C3 (Detail)",
        question: "How many scholarly sources are students required to include in the final research paper?",
        options: [
          "A) Four",
          "B) Six",
          "C) Ten",
          "D) Twenty"
        ],
        correctIndex: 2,
        rationale: "Correct (C)! Professor Lewis states: 'For the final paper, you need a minimum of ten scholarly sources published within the last eight years.'"
      },
      {
        id: "toefl-l3-3",
        module: "TOEFL",
        category: "Listening C3 (Detail)",
        question: "What does the professor say about using personal blogs for the assignment?",
        options: [
          "A) They are the best source of statistical data.",
          "B) They are not peer-reviewed and therefore not reliable enough to count as scholarly sources.",
          "C) Students must cite at least five personal blogs in the introduction.",
          "D) Personal blogs are only allowed if written before 1995."
        ],
        correctIndex: 1,
        rationale: "Correct (B)! The professor explains that personal blogs lack peer review and are not reliable enough to count toward the ten scholarly academic sources."
      },
      {
        id: "toefl-l3-4",
        module: "TOEFL",
        category: "Listening C3 (Detail)",
        question: "Who does the professor recommend the student consult for help with database searches?",
        options: [
          "A) A reference librarian",
          "B) The dean of the biology department",
          "C) The campus IT hardware repair technician",
          "D) A classmate who wrote about solar panels"
        ],
        correctIndex: 0,
        rationale: "Correct (A)! Professor Lewis recommends scheduling a consultation with a reference librarian to use advanced database filters."
      },
      {
        id: "toefl-l3-5",
        module: "TOEFL",
        category: "Listening C3 (Inference)",
        question: "What can be inferred about the student's progress on his assignment?",
        options: [
          "A) He has started working on his paper well ahead of the final deadline.",
          "B) He has not yet chosen a research topic.",
          "C) He has already finished writing the entire twenty-page paper.",
          "D) He is unwilling to use the university library."
        ],
        correctIndex: 0,
        rationale: "Correct (A)! He already has a topic, a rough outline, and six peer-reviewed articles, and the professor praises him for asking early ('glad you asked now rather than the night before the deadline')."
      },
      {
        id: "toefl-l3-6",
        module: "TOEFL",
        category: "Listening C3 (Detail/Next Action)",
        question: "What will the student probably do next?",
        options: [
          "A) Change his research topic to marine biology",
          "B) Submit his rough outline as the final paper",
          "C) Book an appointment with a reference librarian on the library website",
          "D) Delete his six peer-reviewed journal articles"
        ],
        correctIndex: 2,
        rationale: "Correct (C)! At the end of the conversation, the student says he will go to the library website right after class to schedule an appointment with a reference librarian."
      }
    ]
  }
];

export const toeflSpeakingTasks = [
  {
    id: "speak-1",
    title: "Task 1: Independent Speaking — Class Schedule Preference",
    type: "Independent",
    prepSeconds: 15,
    speakSeconds: 45,
    prompt: "Some university students prefer to take early morning classes so they have the afternoon free, while others prefer to take classes later in the day. Which schedule do you prefer, and why? Include specific details and examples in your explanation.",
    readingText: null,
    listeningScript: null,
    templateGuide: `• State Preference Clearly (0–7s): "Personally, I strongly prefer taking [early morning / later] classes because..."
• Reason 1 + Concrete Detail (7–25s): "First of all, [state reason 1]. For instance, when I have an 8:00 AM lecture..."
• Reason 2 + Personal Example (25–45s): "Moreover, [state reason 2]. Having my afternoons free allows me to work part-time or review notes in the library..."`
  },
  {
    id: "speak-2",
    title: "Task 2: Integrated Campus Announcement — University Fitness Center Expansion",
    type: "Integrated (Read + Listen + Speak)",
    readSeconds: 45,
    prepSeconds: 30,
    speakSeconds: 60,
    readingText: `Campus Announcement: University to Expand Student Fitness Center
Next semester, the university will expand the West Campus Fitness Center by converting the adjacent outdoor courtyard into a new indoor weight room and doubling the number of cardio machines. First, administration officials note that the current gym becomes severely overcrowded between 4:00 PM and 8:00 PM, forcing students to wait up to thirty minutes to use equipment. Second, the university plans to fund the construction without raising general tuition by introducing a mandatory $45-per-semester athletics facility fee for all enrolled students.`,
    listeningScript: `Male Student: Did you read the announcement about the West Campus Fitness Center expansion? I think it's a fantastic idea!
Female Student: Really? Even with the new $45 fee?
Male Student: Definitely. First off, the overcrowding in the late afternoon is a real problem. Right now, after my afternoon lab finishes at five, the gym is so packed that I spend more time standing in line for a treadmill than actually exercising. Doubling the cardio machines and adding a weight room will finally make it possible to get a workout in between classes.
Female Student: True, it does get super crowded.
Male Student: And second, regarding the $45 fee—that works out to about ten dollars a month! If you tried to join a private gym downtown, you'd easily pay fifty or sixty dollars every single month. Plus, since every student can use the expanded facility whenever they want, a small semester fee is way better than raising tuition or charging per visit.`,
    prompt: "The man expresses his opinion about the university's plan to expand the student fitness center. State his opinion and explain the reasons he gives for holding that position.",
    templateGuide: `• Reading Summary (0–12s): "According to the announcement, the university plans to expand the fitness center to reduce evening overcrowding and fund it via a $45 semester fee."
• Speaker's Stance (12–18s): "The man strongly supports this plan for two main reasons."
• Point 1 (18–38s): "First, he points out that after his 5 PM lab, the current gym is so packed he waits in line longer than he exercises, so doubling machines will solve this."
• Point 2 (38–60s): "Second, he argues that $45 per semester is only about $10 a month, which is far cheaper than a $50–$60/month private downtown gym."`
  },
  {
    id: "speak-3",
    title: "Task 3: Integrated Academic Concept — Plant Seed Dispersal",
    type: "Integrated (Read + Listen + Speak)",
    readSeconds: 45,
    prepSeconds: 20,
    speakSeconds: 60,
    readingText: `Seed Dispersal Adaptations
Because plants are rooted in one place, they have evolved specialized physical structures that allow their seeds to travel far away from the parent plant. If seeds simply fell directly beneath the parent plant, they would have to compete intensely with the parent and with one another for sunlight, water, and soil nutrients. By dispersing seeds across wide distances through environmental agents such as wind or animals, plant species increase the likelihood that their offspring will germinate in favorable, uncrowded habitats.`,
    listeningScript: `Professor: Let's look at two distinct evolutionary strategies plants use to disperse their seeds: wind dispersal and animal dispersal.

First, many meadow plants rely on the wind. Take the common dandelion. Each tiny dandelion seed is attached to a feathery, parachute-like structure called a pappus. Because the seed is extremely lightweight and the feathery bristles catch the slightest breeze, the wind can lift the seed high into the air and carry it for miles before it gently lands in a new field with plenty of sunlight.

Other plants rely on animals to transport their seeds, and they do this in two clever ways. Some plants, like cherry trees or blackberries, encase their seeds inside sweet, brightly colored fruit. Birds and mammals eat the fruit, walk or fly to a distant location, and later excrete the undigested seeds in nutrient-rich droppings. Other plants, such as burdock, produce seed pods covered in tiny, curved hooks or barbs. When a deer or a dog brushes past the burdock plant, those hooks snag onto the animal's fur and hitch a free ride until they eventually fall off far from the parent plant.`,
    prompt: "Using the examples from the lecture, explain the different ways plants disperse their seeds to avoid competition.",
    templateGuide: `• Concept Definition (0–12s): "Seed dispersal refers to physical adaptations that allow plants to send seeds far from the parent plant to avoid competing for sunlight and nutrients."
• Example 1: Wind Dispersal (12–32s): "First, the professor explains wind dispersal using the dandelion, whose lightweight seeds have feathery parachute-like structures that catch the breeze and travel for miles."
• Example 2: Animal Dispersal (32–60s): "Second, plants use animals—either by growing sweet fruit like cherries that birds eat and excrete elsewhere, or by producing hooked pods like burdock that attach to mammal fur."`
  },
  {
    id: "speak-4",
    title: "Task 4: Academic Lecture Summary — Fossil Dating Methods",
    type: "Integrated (Listen + Speak)",
    readSeconds: 0,
    prepSeconds: 20,
    speakSeconds: 60,
    readingText: null,
    listeningScript: `Professor: When paleontologists uncover a fossilized bone or shell, one of the very first questions they need to answer is: how old is it? Broadly speaking, scientists rely on two complementary methods to determine the age of fossils: relative dating and radiometric—or absolute—dating.

First, let's look at relative dating. Relative dating doesn't give us an exact number of years; instead, it tells us whether one fossil is older or younger than another based on its position in sedimentary rock layers, called strata. Over millions of years, sediment builds up layer by layer, so deeper rock layers are older than the layers near the surface. If paleontologists find a trilobite fossil in a deep limestone layer and a dinosaur bone in a higher sandstone layer above it, they know the trilobite lived long before the dinosaur, especially when guided by 'index fossils' of species known to have lived during specific geological eras.

Second, to get an exact numerical age in years, scientists use radiometric dating. Igneous volcanic rocks contain unstable radioactive isotopes—like potassium-40 or carbon-14—that decay into stable elements at a constant, predictable rate known as a half-life. By measuring the ratio of the remaining radioactive parent isotope to the stable daughter product in volcanic ash layers above and below a fossil, geologists can calculate with remarkable precision that a fossil is, say, 66 million years old.`,
    prompt: "Using points and examples from the lecture, explain the two methods scientists use to determine the age of fossils.",
    templateGuide: `• Main Topic (0–10s): "The professor explains two primary methods paleontologists use to determine the age of fossils: relative dating and radiometric dating."
• Method 1: Relative Dating (10–35s): "First, relative dating determines whether a fossil is older or younger than another by examining sedimentary rock layers (strata), where deeper layers and index fossils indicate older geological periods."
• Method 2: Radiometric Dating (35–60s): "Second, radiometric (absolute) dating provides an exact numerical age by measuring the constant decay rate (half-life) of radioactive isotopes like carbon-14 or potassium-40 in surrounding volcanic rock layers."`
  }
];

export const toeflWritingData = {
  buildSentences: [
    {
      id: "bs-1",
      number: 1,
      target: "The university opened a new science laboratory last semester.",
      chunks: ["last semester.", "a new", "The university", "science laboratory", "opened"],
      grammarFocus: "SVO + Place/Object + Time Adverbial"
    },
    {
      id: "bs-2",
      number: 2,
      target: "The professor extended the assignment deadline because many students requested it.",
      chunks: ["because", "the assignment deadline", "many students", "The professor", "requested it.", "extended"],
      grammarFocus: "Main Clause + Causal Adverbial Clause (because)"
    },
    {
      id: "bs-3",
      number: 3,
      target: "After completing the experiment, the researchers carefully examined the results.",
      chunks: ["carefully examined", "After completing", "the results.", "the experiment,", "the researchers"],
      grammarFocus: "Fronted Participial Prepositional Phrase + Subject + Adverb + Verb"
    },
    {
      id: "bs-4",
      number: 4,
      target: "Why did the university increase tuition fees?",
      chunks: ["tuition fees?", "the university", "Why", "increase", "did"],
      grammarFocus: "Wh-Question Subject-Auxiliary Inversion (Past Simple)"
    },
    {
      id: "bs-5",
      number: 5,
      target: "Although the weather was extremely cold, the researchers continued their fieldwork.",
      chunks: ["continued", "Although", "extremely cold,", "their fieldwork.", "the weather was", "the researchers"],
      grammarFocus: "Concessive Subordinating Clause (Although) + Main Clause"
    },
    {
      id: "bs-6",
      number: 6,
      target: "Students who participate in internships can develop valuable professional skills.",
      chunks: ["can develop", "in internships", "valuable professional skills.", "Students", "who participate"],
      grammarFocus: "Restrictive Subject Relative Clause (who...)"
    },
    {
      id: "bs-7",
      number: 7,
      target: "If the program receives enough funding, the university will expand it next year.",
      chunks: ["will expand it", "enough funding,", "If the program", "next year.", "the university", "receives"],
      grammarFocus: "First Conditional (Real Future Condition: If + Present, will + Base Verb)"
    },
    {
      id: "bs-8",
      number: 8,
      target: "When will the professor announce the examination results?",
      chunks: ["the examination results?", "the professor", "When", "announce", "will"],
      grammarFocus: "Future Wh-Question Inversion (When + will + Subject + Base Verb)"
    },
    {
      id: "bs-9",
      number: 9,
      target: "The new library, which opened in September, provides several quiet study areas.",
      chunks: ["provides", "which opened", "The new library,", "several quiet study areas.", "in September,"],
      grammarFocus: "Non-Restrictive Appositive Relative Clause (, which...,)"
    },
    {
      id: "bs-10",
      number: 10,
      target: "Because public transportation was unavailable, many students arrived late for class.",
      chunks: ["many students", "was unavailable,", "arrived late", "Because", "public transportation", "for class."],
      grammarFocus: "Fronted Adverbial Clause of Reason + Main Clause"
    }
  ],
  emailTask: {
    title: "Part 2: Write an Email (2026 TOEFL Format)",
    recommendedMinutes: 7,
    scenario: "You are enrolled in an introductory Biology course taught by Professor Martinez. Next Tuesday, your group is scheduled to give a 15-minute in-class presentation on cellular respiration. However, you just learned that you must attend an important, unavoidable family event out of town on that day.",
    instructions: [
      "Explain the reason you cannot attend class next Tuesday.",
      "Describe what part of the group presentation you have already prepared.",
      "Propose a practical solution so that your group's grade and presentation are not negatively affected (e.g., pre-recording your segment or rescheduling with the group)."
    ],
    modelResponse: `Subject: Biology 101 Group Presentation Next Tuesday – Schedule Conflict & Solution

Dear Professor Martinez,

I am writing regarding our Group 4 presentation on cellular respiration, which is currently scheduled for next Tuesday's Biology 101 class. Unfortunately, I just learned that I must travel out of town that day to attend an unavoidable family event, so I will be unable to attend the session in person.

I want to assure you that I have already completed my full share of the research and finished designing the slides covering the Krebs cycle and electron transport chain. I have also discussed the situation with my group partners so they are not left with extra work.

To ensure our presentation goes smoothly, I would like to ask if I may pre-record a five-minute video of my section to be played seamlessly during the group's presentation on Tuesday. Alternatively, if another group is willing to swap dates, our entire team is ready to present this Thursday instead.

Thank you very much for your time and understanding. Please let me know which option works best for the class schedule.

Sincerely,
Jordan Lee`
  },
  academicDiscussionTask: {
    title: "Part 3: Write for an Academic Discussion (10 Minutes)",
    recommendedMinutes: 10,
    minWords: 100,
    professorPrompt: "Professor Chen (Education & Technology): Many universities now record all classroom lectures and make the videos available online for students to watch at any time. Some educators believe recorded lectures greatly improve student learning, while others worry that providing recordings reduces live attendance and classroom engagement. Do you think universities should provide video recordings of all lectures? Why or why not?",
    studentPosts: [
      {
        author: "Student A (Liam)",
        stance: "Pro-Recording",
        text: "I definitely think universities should record every lecture. Complex subjects like organic chemistry or macroeconomics move really fast, and it's impossible to catch every detail while taking notes. Being able to pause and rewatch a difficult ten-minute explanation before an exam has improved my grades tremendously, especially for students who work part-time or have health issues."
      },
      {
        author: "Student B (Sophia)",
        stance: "Skeptical of Recording",
        text: "While recordings sound convenient, they actually hurt the classroom atmosphere. When students know the video will be posted online, half the class skips morning lectures. Then they procrastinate and try to binge-watch ten hours of video the night before the final exam. Live interaction, asking questions in the moment, and debating peers cannot be replaced by passive video watching."
      }
    ],
    modelResponse: `In my view, universities should definitely provide video recordings of all lectures because the academic accessibility benefits far outweigh the risk of lower attendance. While Sophia raises a valid concern that some students might procrastinate or skip morning classes, punishing diligent learners by withholding review materials is not the right solution.

Building on Liam's point about complex courses, recorded lectures are especially vital for non-native English speakers and students with different learning paces. During a fast-paced fifty-minute lecture filled with technical terminology, students often miss subtle connections while writing down definitions. Reviewing the recording allows learners to verify their notes and come to the next seminar better prepared. Furthermore, if professors want to keep live attendance high, they can dedicate part of the in-person session to interactive case studies and small-group discussions rather than banning lecture recordings.`
  }
};

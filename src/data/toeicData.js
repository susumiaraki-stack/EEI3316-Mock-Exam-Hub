export const toeicArchitecture = {
  overview: {
    origin: "1979 in Japan (championed by Yasuo Kitaoka; developed by ETS)",
    totalQuestions: 200,
    totalDuration: "120 Minutes (2 Hours)",
    scoreScale: "10 – 990 Total (5 – 495 Listening / 5 – 495 Reading)",
    scoringMethod: "Statistical equating (no Pass/Fail; valid for 2 years)",
    b2Benchmark: "785 – 940 Total (Listening ≥ 400, Reading ≥ 385; S: 160, W: 150)"
  },
  sections: [
    {
      section: "Listening (45 mins | 100 Qs | 5–495 pts)",
      parts: [
        { part: "Part 1: Photographs", questions: 6, details: "Select the statement that best describes a workplace/everyday photo" },
        { part: "Part 2: Question-Response", questions: 25, details: "3 audio options (A, B, C); pure listening with nothing printed in test book" },
        { part: "Part 3: Conversations", questions: 39, details: "13 conversations × 3 questions each (includes 2–3 speaker turns & graphic integration)" },
        { part: "Part 4: Talks", questions: 30, details: "10 single-speaker monologues (announcements, voicemails, reports) × 3 questions each" }
      ]
    },
    {
      section: "Reading (75 mins | 100 Qs | 5–495 pts)",
      parts: [
        { part: "Part 5: Incomplete Sentences", questions: 30, details: "Single-sentence grammar, word family (POS), and corporate collocation fill-ins" },
        { part: "Part 6: Text Completion", questions: 16, details: "4 short texts × 4 questions each (includes 1 full-sentence insertion per text)" },
        { part: "Part 7: Single Passages", questions: 29, details: "10 single workplace documents (emails, memos, notices, articles, text chains) with 2–4 Qs each" },
        { part: "Part 7: Multiple Passages", questions: 25, details: "2 Double Passages (10 Qs) + 3 Triple Passages (15 Qs) requiring cross-referencing" }
      ]
    }
  ],
  pacingStrategy: [
    { segment: "Part 5 & Part 6 (46 Questions)", budget: "< 20 Minutes", tip: "Average < 25–30 seconds per item. Identify POS (noun/verb/adj/adv) before reading the full sentence." },
    { segment: "Part 7: Single Passages (29 Questions)", budget: "25 Minutes", tip: "Read the question stem first, then scan the email/notice for keywords." },
    { segment: "Part 7: Double Passages (10 Questions)", budget: "15 Minutes", tip: "Approximately 7.5 minutes per set; watch for cross-document synthesis items." },
    { segment: "Part 7: Triple Passages (15 Questions)", budget: "15 Minutes", tip: "Approximately 5 minutes per set; locate shared reference numbers, dates, or names across all 3 texts." }
  ],
  companionTests: [
    {
      name: "TOEIC Speaking & Writing",
      details: "Speaking: 11 questions / 20 mins (0–200 scale, B2 = 160+). Writing: 8 questions / 60 mins (0–200 scale, B2 = 150+)."
    },
    {
      name: "TOEIC Bridge® (4 Skills)",
      details: "Targets CEFR A1–B1 (15–50 scale per skill). Listening: 50 Qs / 25 mins; Reading: 50 Qs / 35 mins; Speaking: 8 Qs / 15 mins; Writing: 9 Qs / 37 mins."
    }
  ]
};

export const corporateCollocations = [
  { phrase: "complete the safety training", category: "HR & Compliance", example: "All newly hired warehouse technicians must complete the safety training before operating heavy machinery." },
  { phrase: "launch a new product", category: "Marketing & R&D", example: "After months of consumer testing, the electronics division will launch a new product at the Tokyo trade fair." },
  { phrase: "reach a consensus", category: "Meetings & Negotiation", example: "Following a three-hour deliberation, the board of directors finally managed to reach a consensus on the merger." },
  { phrase: "draw up a contract", category: "Legal & Procurement", example: "Our legal department will draw up a contract outlining the vendor's quarterly delivery milestones." },
  { phrase: "terminate an agreement", category: "Legal & Contracts", example: "Either party may terminate an agreement by providing thirty days' written notice." },
  { phrase: "implement a policy", category: "Management & Operations", example: "Starting next quarter, the company will implement a policy allowing hybrid remote work two days a week." },
  { phrase: "run behind schedule", category: "Project Management", example: "Due to unexpected supply chain bottlenecks, the renovation project has begun to run behind schedule." },
  { phrase: "exceed expectations", category: "Performance & Finance", example: "Third-quarter international sales managed to exceed expectations by nearly fifteen percent." }
];

export const toeicQuestions = [
  {
    id: "toeic-1",
    module: "TOEIC",
    category: "History & Origins",
    question: "In what year was the TOEIC Listening & Reading test first introduced, and who played the pivotal role in proposing its creation to ETS?",
    options: [
      "1979 in Japan, spearheaded by Japanese businessman Yasuo Kitaoka in collaboration with ETS",
      "1964 in the United States, created by the National Council on the Testing of English as a Foreign Language",
      "1989 in the United Kingdom, co-developed by the British Council and Cambridge Assessment",
      "2005 in South Korea, launched as an adaptive computer-only graduate admissions exam"
    ],
    correctIndex: 0,
    rationale: "Correct! TOEIC was launched in 1979 by ETS after Japanese pioneer Yasuo Kitaoka advocated for an assessment measuring practical workplace English communication rather than literary/academic English."
  },
  {
    id: "toeic-2",
    module: "TOEIC",
    category: "Format & Structure (Listening)",
    question: "What is the exact structure and time limit of the TOEIC Listening section?",
    options: [
      "45 minutes for 100 questions: Part 1 Photos (6), Part 2 Question-Response (25), Part 3 Conversations (39), Part 4 Talks (30)",
      "60 minutes for 100 questions: Part 1 Photos (10), Part 2 Question-Response (30), Part 3 Conversations (30), Part 4 Talks (30)",
      "30 minutes for 40 questions divided into 4 equal sections of 10 questions each",
      "75 minutes for 100 questions with self-paced audio replay"
    ],
    correctIndex: 0,
    rationale: "Correct! The current TOEIC Listening section lasts approximately 45 minutes and contains 100 questions: Part 1 (6 photos), Part 2 (25 Q-Response), Part 3 (39 conversation items = 13 sets of 3), and Part 4 (30 talk items = 10 sets of 3)."
  },
  {
    id: "toeic-3",
    module: "TOEIC",
    category: "Format & Structure (Reading)",
    question: "How are the 100 questions distributed across the 75-minute TOEIC Reading section?",
    options: [
      "Part 5 Incomplete Sentences (30), Part 6 Text Completion (16), Part 7 Reading Comprehension (54: 29 Single + 25 Multiple)",
      "Part 5 Incomplete Sentences (40), Part 6 Text Completion (12), Part 7 Reading Comprehension (48)",
      "Part 5 Vocabulary (25), Part 6 Grammar Error Identification (25), Part 7 Academic Passages (50)",
      "Three academic passages with 13–14 questions each"
    ],
    correctIndex: 0,
    rationale: "Correct! Since the 2016/2018 TOEIC update, Reading (75 minutes) comprises Part 5 (30 Qs), Part 6 (16 Qs across 4 texts), and Part 7 (54 Qs: 29 Single-passage Qs and 25 Multiple-passage Qs [10 Double + 15 Triple])."
  },
  {
    id: "toeic-4",
    module: "TOEIC",
    category: "Scoring & Psychometrics",
    question: "How is the TOEIC Listening & Reading test scored, and what is the official certificate validity period?",
    options: [
      "Scored 5 to 495 per section (10 to 990 total) via statistical equating; no universal passing score; valid for 2 years",
      "Scored 0 to 120 in 1-point increments; passing score is 80; valid for 5 years",
      "Scored Bands 1 to 9; passing score is Band 6.5; valid indefinitely",
      "Scored 15 to 50 per section; valid for 60 days"
    ],
    correctIndex: 0,
    rationale: "Correct! Raw scores are converted to scaled scores (5–495 per section; 10–990 total) through statistical equating so different test forms remain comparable. ETS sets no 'pass/fail' line, and scores remain valid for 2 years."
  },
  {
    id: "toeic-5",
    module: "TOEIC",
    category: "TOEIC Speaking & Writing",
    question: "What are the timing, question counts, and score scales for the TOEIC Speaking and Writing tests?",
    options: [
      "Speaking: 11 questions in 20 minutes (0–200 scale); Writing: 8 questions in 60 minutes (0–200 scale)",
      "Speaking: 4 tasks in 16 minutes (0–30 scale); Writing: 2 tasks in 23 minutes (0–30 scale)",
      "Speaking: 3 parts in 11–14 minutes (0–9 scale); Writing: 2 tasks in 60 minutes (0–9 scale)",
      "Speaking: 50 questions in 25 minutes; Writing: 50 questions in 35 minutes"
    ],
    correctIndex: 0,
    rationale: "Correct! TOEIC Speaking has 11 questions in ~20 minutes (0–200 scale; CEFR B2 = 160), while TOEIC Writing has 8 questions (5 photo sentences, 2 email responses, 1 opinion essay) in 60 minutes (0–200 scale; CEFR B2 = 150)."
  },
  {
    id: "toeic-6",
    module: "TOEIC",
    category: "TOEIC Bridge®",
    question: "What are the exact section parameters and score scale for the four-skill TOEIC Bridge® suite?",
    options: [
      "Scored 15–50 per skill (CEFR A1–B1): Listening (50 Qs / 25m), Reading (50 Qs / 35m), Speaking (8 Qs / 15m), Writing (9 Qs / 37m)",
      "Scored 5–495 per skill (CEFR B2–C2): Listening (100 Qs / 45m), Reading (100 Qs / 75m)",
      "Scored 1–6 per skill: Adaptive 15-minute modules only",
      "Pass/Fail only for Listening and Speaking"
    ],
    correctIndex: 0,
    rationale: "Correct! The redesigned TOEIC Bridge® assesses all 4 skills on a 15–50 scale per skill: Listening (50 Qs, 25 mins), Reading (50 Qs, 35 mins), Speaking (8 Qs, 15 mins), and Writing (9 Qs, 37 mins)."
  },
  {
    id: "toeic-7",
    module: "TOEIC",
    category: "Reading Pacing Strategy",
    question: "To avoid running out of time on the 75-minute TOEIC Reading section, what is the recommended pacing allocation across Parts 5, 6, and 7?",
    options: [
      "Parts 5 & 6 (46 Qs): <20 mins (<30s/Q) | Single Passages: 25 mins | Double Passages: 15 mins | Triple Passages: 15 mins",
      "Part 5: 35 mins | Part 6: 25 mins | Part 7: 15 mins total",
      "Spend exactly 45 seconds on every question in Part 5 and skip the Triple Passages",
      "Read all Triple Passages first in 45 minutes and spend 5 minutes on Parts 5 and 6"
    ],
    correctIndex: 0,
    rationale: "Correct! Finishing the 46 items in Parts 5 & 6 in under 20 minutes (<30 seconds per question) preserves a full 55 minutes for Part 7: 25 mins for Single Passages, 15 mins for Double Passages, and 15 mins for Triple Passages."
  },
  {
    id: "toeic-8",
    module: "TOEIC",
    category: "CEFR B2 Score Threshold",
    question: "A graduating English education student needs to demonstrate CEFR B2 proficiency on the TOEIC Listening & Reading exam. What is the minimum total score and section breakdown required?",
    options: [
      "785 total (minimum 400 in Listening and 385 in Reading)",
      "550 total (minimum 275 in Listening and 275 in Reading)",
      "945 total (minimum 490 in Listening and 455 in Reading)",
      "600 total with any section combination"
    ],
    correctIndex: 0,
    rationale: "Correct! According to ETS CEFR mapping, B2 starts at 785 total, specifically corresponding to at least 400 in Listening (B2) and 385 in Reading (B2). (945+ is C1; 550 is B1)."
  },
  {
    id: "toeic-9",
    module: "TOEIC",
    category: "Part 5 Drill (Corporate Collocation)",
    question: "Part 5 Incomplete Sentence: All newly hired laboratory technicians are required to _______ the safety training before entering the cleanroom facility.",
    options: [
      "complete",
      "manufacture",
      "hesitate",
      "persuade"
    ],
    correctIndex: 0,
    rationale: "Correct! 'Complete the safety training' is a high-frequency TOEIC workplace collocation. The transitive verb 'complete' naturally pairs with training programs, forms, and inspections."
  },
  {
    id: "toeic-10",
    module: "TOEIC",
    category: "Part 5 Drill (Corporate Collocation)",
    question: "Part 5 Incomplete Sentence: Following eighteen months of intensive market research, Aura Cosmetics plans to _______ a new product aimed at eco-conscious consumers.",
    options: [
      "launch",
      "evacuate",
      "resign",
      "subscribe"
    ],
    correctIndex: 0,
    rationale: "Correct! 'Launch a new product' means to officially introduce a product to the market for the first time."
  },
  {
    id: "toeic-11",
    module: "TOEIC",
    category: "Part 5 Drill (Corporate Collocation)",
    question: "Part 5 Incomplete Sentence: Despite debating the budget proposal for four hours, the committee members were unable to _______ a consensus before the meeting adjourned.",
    options: [
      "reach",
      "arrive",
      "touch",
      "approach"
    ],
    correctIndex: 0,
    rationale: "Correct! In business English, 'reach a consensus' (or 'come to a consensus') is the fixed collocation meaning to achieve general agreement among a group."
  },
  {
    id: "toeic-12",
    module: "TOEIC",
    category: "Part 5 Drill (Corporate Collocation)",
    question: "Part 5 Incomplete Sentence: Once the terms of the lease are finalized, our corporate counsel will _______ up a contract for both executives to sign.",
    options: [
      "draw",
      "write",
      "paint",
      "pull"
    ],
    correctIndex: 0,
    rationale: "Correct! The phrasal verb 'draw up a contract' means to formally prepare and draft an official legal document."
  },
  {
    id: "toeic-13",
    module: "TOEIC",
    category: "Part 5 Drill (Corporate Collocation)",
    question: "Part 5 Incomplete Sentence: Under Clause 14, the client reserves the right to _______ an agreement immediately if the supplier breaches confidentiality rules.",
    options: [
      "terminate",
      "extinguish",
      "retire",
      "dismiss"
    ],
    correctIndex: 0,
    rationale: "Correct! 'Terminate an agreement' (or terminate a contract/lease) is standard legal and commercial register for officially ending a contractual relationship."
  },
  {
    id: "toeic-14",
    module: "TOEIC",
    category: "Part 5 Drill (Corporate Collocation)",
    question: "Part 5 Incomplete Sentence: Effective May 1, the human resources division will _______ a policy requiring two-factor authentication on all company laptops.",
    options: [
      "implement",
      "equip",
      "fulfill",
      "obey"
    ],
    correctIndex: 0,
    rationale: "Correct! 'Implement a policy' means to put an official decision, plan, or regulation into active effect."
  },
  {
    id: "toeic-15",
    module: "TOEIC",
    category: "Part 5 Drill (Corporate Collocation)",
    question: "Part 5 Incomplete Sentence: Because severe weather delayed the shipment of structural steel, construction of the new terminal has started to _______ behind schedule.",
    options: [
      "run",
      "walk",
      "stand",
      "keep"
    ],
    correctIndex: 0,
    rationale: "Correct! 'Run behind schedule' (or 'fall behind schedule') is the idiomatic workplace expression meaning to progress more slowly than planned."
  },
  {
    id: "toeic-16",
    module: "TOEIC",
    category: "Part 5 Drill (Corporate Collocation)",
    question: "Part 5 Incomplete Sentence: Thanks to the dedicated customer support team, fourth-quarter client retention rates managed to _______ expectations across all regions.",
    options: [
      "exceed",
      "surrender",
      "overtake",
      "outlive"
    ],
    correctIndex: 0,
    rationale: "Correct! 'Exceed expectations' is a classic TOEIC collocation meaning to perform better than anticipated."
  },
  {
    id: "toeic-17",
    module: "TOEIC",
    category: "Part 5 Drill (Word Family / POS)",
    question: "Part 5 Incomplete Sentence: Ms. Patel reviewed the quarterly financial statement _______ to ensure that no accounting discrepancies remained.",
    options: [
      "thoroughly",
      "thorough",
      "thoroughness",
      "more thorough"
    ],
    correctIndex: 0,
    rationale: "Correct! An adverb ('thoroughly') is required to modify the transitive verb phrase 'reviewed the quarterly financial statement'. Fast POS recognition allows test-takers to solve this in under 10 seconds."
  },
  {
    id: "toeic-18",
    module: "TOEIC",
    category: "Part 5 Drill (Conjunctions vs Prepositions)",
    question: "Part 5 Incomplete Sentence: _______ the sharp rise in raw material costs, Vertex Manufacturing maintained its competitive retail pricing throughout the fiscal year.",
    options: [
      "Despite",
      "Although",
      "Even though",
      "However"
    ],
    correctIndex: 0,
    rationale: "Correct! 'the sharp rise in raw material costs' is a noun phrase (no conjugated verb), so it requires the preposition 'Despite'. 'Although' and 'Even though' are subordinating conjunctions that must be followed by a full subject + verb clause."
  },
  {
    id: "toeic-19",
    module: "TOEIC",
    category: "Part 2 Strategy (Indirect Responses)",
    question: "In TOEIC Listening Part 2 (Question-Response), a speaker asks: 'When will the revised budget be submitted to the director?' Which response is a typical correct TOEIC answer?",
    options: [
      "I still need to verify the shipping figures from the Osaka branch.",
      "Yes, the director submitted it yesterday.",
      "In the main conference room on the third floor.",
      "It was a very reasonable budget."
    ],
    correctIndex: 0,
    rationale: "Correct! High-difficulty TOEIC Part 2 items frequently test pragmatic, indirect responses explaining why the exact time isn't known yet. Option B is a 'Yes/No' trap for a 'When' question, Option C answers 'Where', and Option D repeats the word 'budget' as a phonetic trap."
  },
  {
    id: "toeic-20",
    module: "TOEIC",
    category: "Part 6 & Part 7 Innovations",
    question: "Which two question types were added to the TOEIC Listening & Reading exam to measure deeper pragmatic and cross-textual comprehension?",
    options: [
      "Speaker/writer intention questions ('What does the speaker/writer mean when he says...?') and text-message chain / triple-passage synthesis items",
      "Handwritten 250-word academic essays and live Zoom interviews",
      "Phonetic transcription matching and Latin root etymology items",
      "True / False / Not Given academic biology items"
    ],
    correctIndex: 0,
    rationale: "Correct! Modern TOEIC L&R assesses pragmatic implied meaning in spoken conversations and multi-writer text-message/instant-messaging chains, plus sentence insertion in Part 6 & 7 and 3-text synthesis in Triple Passages."
  }
];

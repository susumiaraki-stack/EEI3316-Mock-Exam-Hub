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
      "1979 in Japan, spearheaded by Japanese pioneer Yasuo Kitaoka in collaboration with ETS",
      "1964 in the United States, commissioned by the National Council on the Testing of English",
      "1989 in the United Kingdom, co-developed by the British Council and Cambridge Assessment",
      "1998 in South Korea, launched by the Ministry of Trade for international civil servants"
    ],
    correctIndex: 0,
    rationale: "Correct! TOEIC was launched in 1979 by ETS after Japanese businessman Yasuo Kitaoka advocated for an assessment measuring practical workplace English communication."
  },
  {
    id: "toeic-2",
    module: "TOEIC",
    category: "Format & Structure (Listening)",
    question: "What is the exact structure and time limit of the updated TOEIC Listening section?",
    options: [
      "45 minutes for 100 questions: Part 1 Photos (6), Part 2 Question-Response (25), Part 3 Conversations (39), Part 4 Talks (30)",
      "45 minutes for 100 questions: Part 1 Photos (10), Part 2 Question-Response (30), Part 3 Conversations (30), Part 4 Talks (30)",
      "60 minutes for 100 questions: Part 1 Photos (15), Part 2 Question-Response (25), Part 3 Conversations (30), Part 4 Talks (30)",
      "30 minutes for 80 questions: Part 1 Photos (8), Part 2 Question-Response (24), Part 3 Conversations (24), Part 4 Talks (24)"
    ],
    correctIndex: 0,
    rationale: "Correct! The current TOEIC Listening section (updated in 2016/2018) lasts 45 minutes and contains 100 questions: Part 1 (6), Part 2 (25), Part 3 (39 = 13 sets of 3), and Part 4 (30 = 10 sets of 3). Note that Option B represents the legacy pre-2016 distribution!"
  },
  {
    id: "toeic-3",
    module: "TOEIC",
    category: "Format & Structure (Reading)",
    question: "How are the 100 questions distributed across the 75-minute TOEIC Reading section?",
    options: [
      "Part 5 Incomplete Sentences (30), Part 6 Text Completion (16), Part 7 Reading Comprehension (54: 29 Single + 25 Multiple)",
      "Part 5 Incomplete Sentences (40), Part 6 Text Completion (12), Part 7 Reading Comprehension (48: 28 Single + 20 Multiple)",
      "Part 5 Incomplete Sentences (25), Part 6 Text Completion (25), Part 7 Reading Comprehension (50: 25 Single + 25 Multiple)",
      "Part 5 Incomplete Sentences (35), Part 6 Text Completion (15), Part 7 Reading Comprehension (50: 30 Single + 20 Multiple)"
    ],
    correctIndex: 0,
    rationale: "Correct! Reading (75 minutes) comprises Part 5 (30 Qs), Part 6 (16 Qs across 4 texts), and Part 7 (54 Qs: 29 Single-passage Qs and 25 Multiple-passage Qs [10 Double + 15 Triple]). Option B was the old pre-2016 format."
  },
  {
    id: "toeic-4",
    module: "TOEIC",
    category: "Scoring & Psychometrics",
    question: "How is the TOEIC Listening & Reading test scored, and what is the official certificate validity period?",
    options: [
      "Scored 5 to 495 per section (10 to 990 total) in 5-point increments via statistical equating; valid for 2 years",
      "Scored 0 to 500 per section (0 to 1000 total) using raw percentage conversion; valid for 3 years",
      "Scored 10 to 490 per section (20 to 980 total) with a mandatory 650 passing threshold; valid for 5 years",
      "Scored 15 to 50 per section (30 to 100 total) via adaptive multistage calibration; valid for 2 years"
    ],
    correctIndex: 0,
    rationale: "Correct! Raw scores are converted to scaled scores (5–495 per section; 10–990 total) through statistical equating. ETS sets no universal 'pass/fail' line, and scores remain valid for 2 years."
  },
  {
    id: "toeic-5",
    module: "TOEIC",
    category: "TOEIC Speaking & Writing",
    question: "What are the timing, question counts, and score scales for the TOEIC Speaking and Writing tests?",
    options: [
      "Speaking: 11 questions in 20 minutes (0–200 scale); Writing: 8 questions in 60 minutes (0–200 scale)",
      "Speaking: 8 questions in 15 minutes (0–200 scale); Writing: 9 questions in 37 minutes (0–200 scale)",
      "Speaking: 11 questions in 30 minutes (5–495 scale); Writing: 8 questions in 45 minutes (5–495 scale)",
      "Speaking: 6 questions in 20 minutes (0–100 scale); Writing: 4 questions in 60 minutes (0–100 scale)"
    ],
    correctIndex: 0,
    rationale: "Correct! TOEIC Speaking has 11 questions in ~20 minutes (0–200 scale; CEFR B2 = 160), while TOEIC Writing has 8 questions in 60 minutes (0–200 scale; CEFR B2 = 150). Option B mixes up TOEIC Bridge question counts."
  },
  {
    id: "toeic-6",
    module: "TOEIC",
    category: "TOEIC Bridge®",
    question: "What are the exact section parameters and score scale for the four-skill TOEIC Bridge® suite?",
    options: [
      "Scored 15–50 per skill (CEFR A1–B1): Listening (50 Qs / 25m), Reading (50 Qs / 35m), Speaking (8 Qs / 15m), Writing (9 Qs / 37m)",
      "Scored 10–100 per skill (CEFR A2–B2): Listening (60 Qs / 30m), Reading (60 Qs / 45m), Speaking (11 Qs / 20m), Writing (8 Qs / 60m)",
      "Scored 15–50 per skill (CEFR A1–B1): Listening (40 Qs / 20m), Reading (40 Qs / 30m), Speaking (6 Qs / 12m), Writing (6 Qs / 30m)",
      "Scored 5–95 per skill (CEFR A1–B1): Listening (50 Qs / 30m), Reading (50 Qs / 40m), Speaking (10 Qs / 15m), Writing (10 Qs / 40m)"
    ],
    correctIndex: 0,
    rationale: "Correct! The redesigned TOEIC Bridge® assesses all 4 skills on a 15–50 scale per skill (total 30–100 for L&R): Listening (50 Qs, 25m), Reading (50 Qs, 35m), Speaking (8 Qs, 15m), and Writing (9 Qs, 37m)."
  },
  {
    id: "toeic-7",
    module: "TOEIC",
    category: "Reading Pacing Strategy",
    question: "To avoid running out of time on the 75-minute TOEIC Reading section, what is the recommended pacing allocation across Parts 5, 6, and 7?",
    options: [
      "Parts 5 & 6 (46 Qs): <20 mins (<30s/Q) | Single Passages: 25 mins | Double Passages: 15 mins | Triple Passages: 15 mins",
      "Parts 5 & 6 (46 Qs): 30 mins (~40s/Q) | Single Passages: 20 mins | Double Passages: 15 mins | Triple Passages: 10 mins",
      "Parts 5 & 6 (46 Qs): 25 mins (~33s/Q) | Single Passages: 30 mins | Double Passages: 10 mins | Triple Passages: 10 mins",
      "Parts 5 & 6 (46 Qs): 15 mins (~20s/Q) | Single Passages: 20 mins | Double Passages: 20 mins | Triple Passages: 20 mins"
    ],
    correctIndex: 0,
    rationale: "Correct! Finishing the 46 items in Parts 5 & 6 in under 20 minutes (<30 seconds per question) preserves 55 minutes for Part 7: 25 mins for Single Passages (29 Qs), 15 mins for Double Passages (10 Qs), and 15 mins for Triple Passages (15 Qs)."
  },
  {
    id: "toeic-8",
    module: "TOEIC",
    category: "CEFR B2 Score Threshold",
    question: "A graduating English education student needs to demonstrate CEFR B2 proficiency on the TOEIC Listening & Reading exam. What is the minimum total score and section breakdown required?",
    options: [
      "785 total (minimum 400 in Listening and 385 in Reading)",
      "750 total (minimum 375 in Listening and 375 in Reading)",
      "850 total (minimum 450 in Listening and 400 in Reading)",
      "685 total (minimum 350 in Listening and 335 in Reading)"
    ],
    correctIndex: 0,
    rationale: "Correct! According to official ETS CEFR mapping, B2 starts at 785 total, specifically requiring at least 400 in Listening (B2) and 385 in Reading (B2)."
  },
  {
    id: "toeic-9",
    module: "TOEIC",
    category: "Part 5 Drill (Corporate Collocation)",
    question: "Part 5 Incomplete Sentence: All newly hired laboratory technicians are required to _______ the safety training before entering the cleanroom facility.",
    options: [
      "complete",
      "accomplish",
      "conclude",
      "finalize"
    ],
    correctIndex: 0,
    rationale: "Correct! 'Complete the safety training' is the standard workplace collocation. While 'accomplish', 'conclude', and 'finalize' are near-synonyms, 'complete' collocates with training courses, forms, and modules."
  },
  {
    id: "toeic-10",
    module: "TOEIC",
    category: "Part 5 Drill (Corporate Collocation)",
    question: "Part 5 Incomplete Sentence: Following eighteen months of intensive market research, Aura Cosmetics plans to _______ a new product aimed at eco-conscious consumers.",
    options: [
      "launch",
      "commence",
      "originate",
      "instigate"
    ],
    correctIndex: 0,
    rationale: "Correct! 'Launch a new product' (or launch a campaign/service) is the fixed commercial collocation for introducing a product to the market."
  },
  {
    id: "toeic-11",
    module: "TOEIC",
    category: "Part 5 Drill (Corporate Collocation)",
    question: "Part 5 Incomplete Sentence: Despite debating the budget proposal for four hours, the committee members were unable to _______ a consensus before the meeting adjourned.",
    options: [
      "reach",
      "attain",
      "acquire",
      "fulfill"
    ],
    correctIndex: 0,
    rationale: "Correct! In business and diplomatic English, 'reach a consensus' (or 'come to a consensus') is the fixed collocation meaning to achieve general agreement."
  },
  {
    id: "toeic-12",
    module: "TOEIC",
    category: "Part 5 Drill (Corporate Collocation)",
    question: "Part 5 Incomplete Sentence: Once the terms of the commercial lease are finalized, our legal counsel will _______ up a contract for both executives to sign.",
    options: [
      "draw",
      "make",
      "set",
      "write"
    ],
    correctIndex: 0,
    rationale: "Correct! The phrasal verb 'draw up a contract' means to formally prepare and draft an official legal document or agreement."
  },
  {
    id: "toeic-13",
    module: "TOEIC",
    category: "Part 5 Drill (Corporate Collocation)",
    question: "Part 5 Incomplete Sentence: Under Clause 14, the client reserves the right to _______ an agreement immediately if the supplier breaches confidentiality rules.",
    options: [
      "terminate",
      "abolish",
      "repeal",
      "suspend"
    ],
    correctIndex: 0,
    rationale: "Correct! 'Terminate an agreement' (or terminate a contract/lease) is standard legal register for officially ending a contract. ('Repeal' applies to laws/statutes; 'abolish' applies to systems/institutions)."
  },
  {
    id: "toeic-14",
    module: "TOEIC",
    category: "Part 5 Drill (Corporate Collocation)",
    question: "Part 5 Incomplete Sentence: Effective May 1, the human resources division will _______ a policy requiring two-factor authentication on all company laptops.",
    options: [
      "implement",
      "execute",
      "administer",
      "conduct"
    ],
    correctIndex: 0,
    rationale: "Correct! 'Implement a policy' means to put an official decision, regulation, or procedure into active operation."
  },
  {
    id: "toeic-15",
    module: "TOEIC",
    category: "Part 5 Drill (Corporate Collocation)",
    question: "Part 5 Incomplete Sentence: Because severe weather delayed the shipment of structural steel, construction of the new terminal has started to _______ behind schedule.",
    options: [
      "run",
      "drop",
      "slide",
      "stay"
    ],
    correctIndex: 0,
    rationale: "Correct! 'Run behind schedule' (or 'fall behind schedule') is the idiomatic project-management collocation meaning to progress more slowly than planned."
  },
  {
    id: "toeic-16",
    module: "TOEIC",
    category: "Part 5 Drill (Corporate Collocation)",
    question: "Part 5 Incomplete Sentence: Thanks to the dedicated customer support team, fourth-quarter client retention rates managed to _______ expectations across all regions.",
    options: [
      "exceed",
      "outperform",
      "overcome",
      "escalate"
    ],
    correctIndex: 0,
    rationale: "Correct! 'Exceed expectations' is a classic TOEIC collocation. ('Outperform' takes a competitor/benchmark as its object, e.g., 'outperform the market', not 'expectations')."
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
    rationale: "Correct! An adverb ('thoroughly') is required to modify the transitive verb phrase 'reviewed the quarterly financial statement'."
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
      "Whereas"
    ],
    correctIndex: 0,
    rationale: "Correct! 'the sharp rise in raw material costs' is a noun phrase (no finite verb), so it requires the preposition 'Despite'. 'Although', 'Even though', and 'Whereas' are subordinating conjunctions requiring a subject + verb clause."
  },
  {
    id: "toeic-19",
    module: "TOEIC",
    category: "Part 2 Strategy (Indirect Responses)",
    question: "In TOEIC Listening Part 2 (Question-Response), a speaker asks: 'When will the revised budget be submitted to the director?' Which response is a typical correct TOEIC answer?",
    options: [
      "I still need to verify the shipping figures from the Osaka branch.",
      "Yes, the director approved the budget proposal yesterday afternoon.",
      "We can review the financial spreadsheets in Conference Room B.",
      "The accounting department submitted a similar request last month."
    ],
    correctIndex: 0,
    rationale: "Correct! TOEIC Part 2 heavily tests pragmatic, indirect responses that explain a condition delaying the action. Option B is a 'Yes/No' trap, Option C answers 'Where', and Option D repeats 'submitted' as a lexical trap."
  },
  {
    id: "toeic-20",
    module: "TOEIC",
    category: "Part 6 & Part 7 Innovations",
    question: "Which set of features characterizes the modern TOEIC Listening & Reading test format introduced in the latest ETS update?",
    options: [
      "Pragmatic speaker-intent questions, 3-speaker conversations, audio-graphic integration, sentence insertion in Parts 6–7, and Triple Passages",
      "Part 5 error-identification underlined words, 2-speaker-only dialogues, and 40 incomplete sentence items",
      "Integrated spoken responses recorded via headset during Part 3 and Part 4 listening sets",
      "Computer-adaptive routing between Part 5 and Part 7 based on candidate response speed"
    ],
    correctIndex: 0,
    rationale: "Correct! The current TOEIC L&R format features pragmatic implied-meaning questions, 3-speaker conversations, visual charts/schedules in Part 3/4, sentence insertion in Part 6 & 7, text-message chains, and Triple Passages."
  },
  {
    id: "toeic-21",
    module: "TOEIC",
    category: "Part 5 Drill (Subjunctive Mood)",
    question: "Part 5 Incomplete Sentence: The external safety auditor strongly recommended that the factory manager _______ the ventilation filters before the summer inspection.",
    options: [
      "replace",
      "replaces",
      "replaced",
      "replacing"
    ],
    correctIndex: 0,
    rationale: "Correct! After verbs of suggestion/demand/recommendation (recommend, suggest, insist, request, require) + 'that', formal American business English tested on TOEIC uses the mandative subjunctive—the bare infinitive ('replace') regardless of a third-person singular subject."
  },
  {
    id: "toeic-22",
    module: "TOEIC",
    category: "Part 5 Drill (Inverted Conditionals)",
    question: "Part 5 Incomplete Sentence: _______ you require any technical assistance configuring the new cloud server, please contact the IT help desk at extension 402.",
    options: [
      "Should",
      "Unless",
      "Provided",
      "Whether"
    ],
    correctIndex: 0,
    rationale: "Correct! 'Should you require...' is an inverted First Conditional ('If you should require...'). Notice the bare infinitive 'require' (not 'requires'), which signals modal inversion with 'Should'."
  },
  {
    id: "toeic-23",
    module: "TOEIC",
    category: "Part 5 Drill (Third Conditional Inversion)",
    question: "Part 5 Incomplete Sentence: _______ the logistics coordinator been notified of the customs delay earlier, the perishable goods would have been rerouted through Rotterdam.",
    options: [
      "Had",
      "Have",
      "Were",
      "Should"
    ],
    correctIndex: 0,
    rationale: "Correct! 'Had the logistics coordinator been notified...' is an inverted Third Conditional ('If the logistics coordinator had been notified...'), pairing with 'would have been rerouted' in the main clause."
  },
  {
    id: "toeic-24",
    module: "TOEIC",
    category: "Part 5 Drill (Relative Pronouns)",
    question: "Part 5 Incomplete Sentence: Solis Pharmaceuticals is seeking a bilingual patent attorney _______ primary responsibility will be overseeing regulatory filings in European markets.",
    options: [
      "whose",
      "who",
      "whom",
      "which"
    ],
    correctIndex: 0,
    rationale: "Correct! The possessive relative pronoun 'whose' modifies the noun phrase 'primary responsibility' ('an attorney whose primary responsibility...')."
  },
  {
    id: "toeic-25",
    module: "TOEIC",
    category: "Part 5 Drill (Future Perfect Tense)",
    question: "Part 5 Incomplete Sentence: By the time Dr. Hasegawa retires at the end of November, she _______ the research and development division fornearly two decades.",
    options: [
      "will have led",
      "has been leading",
      "had led",
      "is leading"
    ],
    correctIndex: 0,
    rationale: "Correct! The time marker 'By the time + [present simple referring to future]' combined with a duration ('for nearly two decades') requires the Future Perfect ('will have led')."
  },
  {
    id: "toeic-26",
    module: "TOEIC",
    category: "Part 5 Drill (Correlative Conjunctions)",
    question: "Part 5 Incomplete Sentence: Neither the regional sales director nor the branch managers _______ aware that the software license would expire at midnight.",
    options: [
      "were",
      "was",
      "is",
      "has been"
    ],
    correctIndex: 0,
    rationale: "Correct! With 'Neither... nor...' and 'Either... or...', the verb agrees in number with the closer subject ('the branch managers' = plural) and matches the past tense context ('would expire') → 'were'."
  },
  {
    id: "toeic-27",
    module: "TOEIC",
    category: "Part 5 Drill (Causative Verbs)",
    question: "Part 5 Incomplete Sentence: Prior to the annual shareholders' meeting, the communications director had the graphic design agency _______ threehundred copies of the prospectus.",
    options: [
      "print",
      "printed",
      "to print",
      "printing"
    ],
    correctIndex: 0,
    rationale: "Correct! The active causative structure 'have + [person/agent] + bare infinitive' ('had the agency print...') requires the base verb 'print'. (If the object were passive, it would be 'had 300 copies printed')."
  },
  {
    id: "toeic-28",
    module: "TOEIC",
    category: "Part 5 Drill (Preposition 'to' vs Infinitive 'to')",
    question: "Part 5 Incomplete Sentence: Dedicated to _______ carbon emissions across its global supply chain, Nordic Freight invested in forty electric delivery trucks.",
    options: [
      "reducing",
      "reduce",
      "reduction",
      "be reduced"
    ],
    correctIndex: 0,
    rationale: "Correct! In expressions such as 'dedicated to', 'committed to', 'look forward to', and 'object to', 'to' is a preposition, so a verb taking a direct object ('carbon emissions') must be a gerund ('reducing')."
  },
  {
    id: "toeic-29",
    module: "TOEIC",
    category: "Part 5 Drill (Participial Clauses)",
    question: "Part 5 Incomplete Sentence: _______ in the heart of the financial district, the Grand Meridian Hotel offers convenient access to the city's convention center.",
    options: [
      "Located",
      "Locating",
      "To locate",
      "Location"
    ],
    correctIndex: 0,
    rationale: "Correct! Reduced passive participial clause: '(Being) Located in the heart of the financial district, the Grand Meridian Hotel...'"
  },
  {
    id: "toeic-30",
    module: "TOEIC",
    category: "Part 5 Drill (Adjective vs Noun Traps)",
    question: "Part 5 Incomplete Sentence: Please submit the signed travel reimbursement form to Mr. Alvarez's _______ if he is out of the office on Friday.",
    options: [
      "representative",
      "represent",
      "representing",
      "representation"
    ],
    correctIndex: 0,
    rationale: "Correct! 'Representative' is a countable person noun ('his representative'), whereas 'representation' is an abstract uncountable noun."
  },
  {
    id: "toeic-31",
    module: "TOEIC",
    category: "Part 5 Drill (Confusable Adverbs: Hard vs Hardly)",
    question: "Part 5 Incomplete Sentence: Because the keynote speaker's microphone was malfunctioning, attendees seated in the back row could _______ hear the presentation.",
    options: [
      "hardly",
      "hard",
      "harder",
      "hardness"
    ],
    correctIndex: 0,
    rationale: "Correct! 'Hardly' means 'scarcely / almost not at all' ('could hardly hear'), whereas 'hard' as an adverb means 'with great effort'."
  },
  {
    id: "toeic-32",
    module: "TOEIC",
    category: "Part 5 Drill (Precision Adverbs)",
    question: "Part 5 Incomplete Sentence: Commuter trains departing from Central Station run _______ every twelve minutes during weekday peak hours.",
    options: [
      "approximately",
      "precisely",
      "newly",
      "shortly"
    ],
    correctIndex: 0,
    rationale: "Correct! 'Approximately' (or 'roughly') modifies numerical intervals ('approximately every twelve minutes'). While 'precisely' can modify exact times, 'approximately' is the standard collocation with recurring intervals unless 'at precisely 8:00' is used."
  },
  {
    id: "toeic-33",
    module: "TOEIC",
    category: "Part 5 Drill (Prepositional Phrases)",
    question: "Part 5 Incomplete Sentence: _______ municipal fire safety regulations, all emergency exit corridors must remain completely unobstructed at all times.",
    options: [
      "In accordance with",
      "By means of",
      "On behalf of",
      "In contrast to"
    ],
    correctIndex: 0,
    rationale: "Correct! 'In accordance with' (or 'In compliance with') means following or obeying rules, laws, or regulations."
  },
  {
    id: "toeic-34",
    module: "TOEIC",
    category: "Part 5 Drill (Conditional Conjunctions)",
    question: "Part 5 Incomplete Sentence: The catering company will provide a full refund on the deposit _______ cancellations are made at least seventy-two hours prior to the banquet.",
    options: [
      "provided that",
      "even if",
      "as though",
      "regardless of"
    ],
    correctIndex: 0,
    rationale: "Correct! 'Provided that' (or 'providing that' / 'as long as') is a conditional conjunction meaning 'on the condition that'."
  },
  {
    id: "toeic-35",
    module: "TOEIC",
    category: "Part 5 Drill (Reflexive Pronouns for Emphasis)",
    question: "Part 5 Incomplete Sentence: Although the architecture firm employs twelve junior drafters, Ms. Lindqvist prefers to inspect the structural blueprints _______.",
    options: [
      "herself",
      "she",
      "her",
      "hers"
    ],
    correctIndex: 0,
    rationale: "Correct! Since the clause 'to inspect the structural blueprints' is already grammatically complete, the reflexive pronoun 'herself' is used at the end for emphasis ('in person / by herself')."
  },
  {
    id: "toeic-36",
    module: "TOEIC",
    category: "Part 5 Drill (Quantifiers with Countable vs Uncountable Nouns)",
    question: "Part 5 Incomplete Sentence: While _______ of the ergonomic office chairs have already been assembled, a large amount of packaging material still needs to be recycled.",
    options: [
      "many",
      "much",
      "little",
      "each"
    ],
    correctIndex: 0,
    rationale: "Correct! 'chairs' is plural countable and the verb 'have been assembled' is plural, requiring 'many'. ('Much' and 'little' modify uncountable nouns; 'each of the chairs' takes a singular verb 'has')."
  },
  {
    id: "toeic-37",
    module: "TOEIC",
    category: "Part 5 Drill (Passive Voice + Infinitive)",
    question: "Part 5 Incomplete Sentence: All visitors to the pharmaceutical manufacturing plant are required _______ a temporary security badge at the reception desk.",
    options: [
      "to obtain",
      "obtaining",
      "obtain",
      "obtained"
    ],
    correctIndex: 0,
    rationale: "Correct! The passive structure 'be required + to-infinitive' ('are required to obtain') is a high-frequency TOEIC grammar pattern."
  },
  {
    id: "toeic-38",
    module: "TOEIC",
    category: "Part 5 Drill (Workplace Collocations: Waive a Fee)",
    question: "Part 5 Incomplete Sentence: To attract new small-business clients, Metro Commercial Bank has agreed to _______ the annual account maintenance fee for the first year.",
    options: [
      "waive",
      "forbid",
      "resign",
      "evade"
    ],
    correctIndex: 0,
    rationale: "Correct! 'Waive a fee' (or 'waive a requirement/penalty') means to officially refrain from charging or enforcing it."
  },
  {
    id: "toeic-39",
    module: "TOEIC",
    category: "Part 5 Drill (Workplace Collocations: Reimburse Expenses)",
    question: "Part 5 Incomplete Sentence: The accounting department will _______ sales representatives for all approved hotel and meal expenses incurred during the trade conference.",
    options: [
      "reimburse",
      "compensate",
      "refund",
      "indemnify"
    ],
    correctIndex: 0,
    rationale: "Correct! 'Reimburse [someone] for [expenses]' is the exact collocation for paying back an employee who spent their own money on business travel. ('Refund' is used when a customer returns a product or cancels a ticket)."
  },
  {
    id: "toeic-40",
    module: "TOEIC",
    category: "Part 5 Drill (Workplace Collocations: Comply with Standards)",
    question: "Part 5 Incomplete Sentence: All imported electrical components must _______ strictly with national voltage and insulation standards before being sold.",
    options: [
      "comply",
      "abide",
      "adhere",
      "conform"
    ],
    correctIndex: 0,
    rationale: "Correct! Look at the preposition 'with': 'comply with standards' is the fixed pairing. ('Abide' takes 'by'; 'adhere' and 'conform' typically take 'to')."
  },
  {
    id: "toeic-41",
    module: "TOEIC",
    category: "Part 5 Drill (Workplace Collocations: Allocate Funds)",
    question: "Part 5 Incomplete Sentence: The municipal council voted unanimously to _______ an additional two million dollars toward upgrading the city's public library network.",
    options: [
      "allocate",
      "distribute",
      "ration",
      "scatter"
    ],
    correctIndex: 0,
    rationale: "Correct! 'Allocate funds / budget / resources (to/toward)' means to officially set aside a specific amount of money for a designated purpose."
  },
  {
    id: "toeic-42",
    module: "TOEIC",
    category: "Part 5 Drill (Workplace Collocations: Adjourn a Meeting)",
    question: "Part 5 Incomplete Sentence: Because several key board members had to catch an evening flight, the chairperson decided to _______ the meeting until Thursday morning.",
    options: [
      "adjourn",
      "detain",
      "vacate",
      "hesitate"
    ],
    correctIndex: 0,
    rationale: "Correct! 'Adjourn a meeting' means to bring a formal meeting to a close or suspend it until a later time."
  },
  {
    id: "toeic-43",
    module: "TOEIC",
    category: "Part 6 Strategy (Sentence Insertion in Text Completion)",
    question: "In a TOEIC Part 6 memo, the sentence before a blank reads: 'Starting next Monday, the main employee parking lot will be closed for repaving.' The sentence after the blank reads: 'Shuttle buses will run from there to the main lobby every ten minutes.' Which sentence best fits the blank?",
    options: [
      "During this two-week period, staff members should park in the overflow lot on Elm Street.",
      "The paving contractor was founded in 1998 and employs over two hundred civil engineers.",
      "All employees must submit their annual performance self-evaluations by Friday afternoon.",
      "Parking permits for the executive garage were distributed in January."
    ],
    correctIndex: 0,
    rationale: "Correct! In Part 6 sentence insertion, cohesive reference is key: 'the overflow lot on Elm Street' provides the exact antecedent for the pronoun adverb 'there' ('Shuttle buses will run from there...') in the following sentence."
  },
  {
    id: "toeic-44",
    module: "TOEIC",
    category: "Part 6 Strategy (Conjunctive Adverbs Across Sentences)",
    question: "In a Part 6 customer notice: 'Our online ordering portal will undergo scheduled maintenance from 2:00 AM to 5:00 AM on Sunday. _______, customers will still be able to check the status of existing shipments via our automated telephone hotline.' Which transition fits the blank?",
    options: [
      "Nevertheless",
      "Consequently",
      "Furthermore",
      "Similarly"
    ],
    correctIndex: 0,
    rationale: "Correct! The first sentence states a limitation (portal offline), while the second sentence offers a contrasting reassuring alternative (phone hotline still works), requiring the concession/contrast transition 'Nevertheless' (or 'However')."
  },
  {
    id: "toeic-45",
    module: "TOEIC",
    category: "Part 7 Strategy (Cross-Document Synthesis in Triple Passages)",
    question: "In a TOEIC Part 7 Triple Passage consisting of (1) a service price list, (2) a client invoice, and (3) a customer service email, a question asks: 'Which service package did Mr. Kim upgrade to in April?' How are such questions designed to be solved?",
    options: [
      "By linking a detail in one text (e.g., the fee or discount code mentioned in the email/invoice) with the corresponding tier in the service price list",
      "By reading only the first sentence of the first passage",
      "By guessing based on personal workplace experience without checking the invoice numbers",
      "By counting the total number of words in all three passages"
    ],
    correctIndex: 0,
    rationale: "Correct! Every Double and Triple Passage set on the TOEIC exam includes cross-referential synthesis questions where you must connect a number, date, code, or condition in one document to a table or list in another."
  },
  {
    id: "toeic-46",
    module: "TOEIC",
    category: "Part 7 Strategy (Pragmatic Text-Message Chains)",
    question: "In a Part 7 workplace instant-messaging chain, Kaito writes: 'The projector in Conference Room C just stopped working, and the client arrives in ten minutes.' Mina replies: 'Room A is empty right now.' At 9:52 AM, Kaito writes: 'You're a lifesaver!' What does Kaito mean when he writes 'You're a lifesaver!'?",
    options: [
      "He is grateful that Mina suggested an immediately available room so he can move the presentation.",
      "He wants Mina to call an emergency medical team to Conference Room C.",
      "He is asking Mina to repair the broken projector lens before 10:00 AM.",
      "He has decided to cancel the client presentation permanently."
    ],
    correctIndex: 0,
    rationale: "Correct! In TOEIC Part 7 text-message chains, speaker-intention questions require interpreting idiomatic workplace expressions ('You're a lifesaver!') in light of the preceding turn ('Room A is empty right now')."
  },
  {
    id: "toeic-47",
    module: "TOEIC",
    category: "Part 1 Strategy (Photographs of Objects vs People)",
    question: "In TOEIC Listening Part 1, a photograph shows an empty conference room with chairs arranged around a table and a projector screen pulled down, with NO people in the frame. Which statement is guaranteed to be an INCORRECT distractor?",
    options: [
      "The chairs are being arranged in a circle by the maintenance crew.",
      "Some chairs have been placed around a conference table.",
      "A projection screen is hanging on the wall at the end of the room.",
      "Several folders have been left on top of the wooden table."
    ],
    correctIndex: 0,
    rationale: "Correct! A classic TOEIC Part 1 trap is using the Present Continuous Passive ('are being arranged') when no person is visible performing the action in the photo. Present Perfect Passive ('have been placed') describes the resulting state."
  },
  {
    id: "toeic-48",
    module: "TOEIC",
    category: "Part 3 & Part 4 Strategy (Graphic Integration)",
    question: "When answering a TOEIC Part 3 or Part 4 question that includes a printed schedule, floor plan, or bar chart ('Look at the graphic. Which flight will the speaker take?'), what do the speakers in the audio typically do?",
    options: [
      "They mention the selection criteria or a change in plans (e.g., 'The 2:00 PM flight to Chicago is full, so book me on the next available afternoon flight') rather than reading out the exact flight number.",
      "They always spell out the exact flight number three times slowly.",
      "They never mention anything related to the graphic.",
      "They instruct the test-taker to ignore the printed chart."
    ],
    correctIndex: 0,
    rationale: "Correct! In TOEIC graphic-integration items, the audio gives one column of information (e.g., time/condition) while the test-taker must read the corresponding column on the graphic (e.g., Flight Number or Gate) to select the answer."
  },
  {
    id: "toeic-49",
    module: "TOEIC",
    category: "TOEIC Writing Tasks Breakdown",
    question: "Which three task types make up the 8 questions of the 60-minute TOEIC Writing test?",
    options: [
      "Questions 1–5: Write a sentence based on a picture (using 2 given words/phrases); Questions 6–7: Respond to a written request (email); Question 8: Write an opinion essay (300+ words, 30 mins)",
      "Questions 1–4: Summarize a business lecture; Questions 5–8: Translate a legal contract",
      "Questions 1–7: Complete a sentence word chip puzzle; Question 8: Describe a bar chart in 150 words",
      "Questions 1–8: Write eight 50-word text messages to coworkers"
    ],
    correctIndex: 0,
    rationale: "Correct! The TOEIC Writing test consists of 5 picture-sentence items (8 mins total), 2 email response tasks (10 mins each), and 1 opinion essay (30 mins, ~300 words)."
  },
  {
    id: "toeic-50",
    module: "TOEIC",
    category: "TOEIC Speaking Tasks Breakdown",
    question: "Which tasks are included among the 11 questions of the 20-minute TOEIC Speaking test?",
    options: [
      "Read a text aloud (Q1–2), Describe a picture (Q3–4), Respond to questions (Q5–7), Respond to questions using provided information/schedule (Q8–10), and Express an opinion (Q11)",
      "Deliver a 15-minute live academic lecture on microeconomics followed by a 5-minute Q&A with a human examiner",
      "Read a 45-second campus announcement and summarize a student conversation",
      "Complete a 2-minute cue card monologue followed by abstract Part 3 philosophical questions"
    ],
    correctIndex: 0,
    rationale: "Correct! The 11 questions of TOEIC Speaking cover Reading Aloud (Q1–2), Picture Description (Q3–4), Short Q&A (Q5–7), Schedule/Information Q&A (Q8–10), and Expressing an Opinion (Q11)."
  }
];

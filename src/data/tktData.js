export const tktReferenceCards = [
  {
    title: "CEFR B2 Benchmark Equivalencies",
    badge: "Course Target",
    items: [
      { label: "IELTS Academic", value: "Band 5.5 – 6.5" },
      { label: "TOEFL iBT (0–120 / 1–6)", value: "72 – 94 (Band 4.0–4.5)" },
      { label: "TOEIC Listening & Reading", value: "785 – 940 (L: 400+ / R: 385+)" },
      { label: "TOEIC Speaking & Writing", value: "Speaking 160+ / Writing 150+" },
      { label: "Cambridge TKT Target", value: "Band 3 – Band 4" }
    ]
  },
  {
    title: "TKT Structure & Boundaries",
    badge: "80 Qs / 80 Mins",
    items: [
      { label: "Assessment Format", value: "Paper/Computer MCQ & Matching (No observed teaching)" },
      { label: "Module 1", value: "Language & Background to Language Learning and Teaching" },
      { label: "Module 2", value: "Lesson Planning and Use of Resources for Language Teaching" },
      { label: "Module 3", value: "Managing the Teaching and Learning Process" },
      { label: "Specialist Modules", value: "TKT: CLIL & TKT: Young Learners (YL)" },
      { label: "vs. CELTA / DELTA", value: "CELTA = Initial observed practice; DELTA = Master's-level diploma" }
    ]
  },
  {
    title: "High-Yield Pedagogy Distinctions",
    badge: "TKT M1–M3",
    items: [
      { label: "CCQs vs. ICQs", value: "CCQs check language concept meaning; ICQs check task instructions" },
      { label: "Error vs. Slip", value: "Error = gap in knowledge; Slip = temporary lapse (self-correctable)" },
      { label: "Warmer vs. Lead-in", value: "Warmer raises energy/focus; Lead-in activates schema/topic context" },
      { label: "Eliciting vs. Prompting", value: "Eliciting draws out known knowledge; Prompting nudges when stuck" },
      { label: "Receptive Sequence", value: "Lead-in → Gist Task (Skimming) → Detailed Task (Scanning/Comprehension)" }
    ]
  }
];

export const tktQuestions = [
  {
    id: "tkt-1",
    module: "TKT",
    category: "Core Diagnostic (Test Purpose)",
    question: "What is the primary distinction in target purpose between the Cambridge Teaching Knowledge Test (TKT) and standardized tests like TOEFL, IELTS, and TOEIC?",
    options: [
      "TKT assesses teaching knowledge and pedagogical concepts, whereas TOEFL, IELTS, and TOEIC measure candidate English language proficiency.",
      "TKT evaluates live classroom teaching performance with learners, whereas TOEFL, IELTS, and TOEIC evaluate theoretical linguistics.",
      "TKT measures C1-level academic writing and speaking skills, whereas TOEFL, IELTS, and TOEIC focus on workplace survival English.",
      "TKT certifies school administrators in curriculum finance, whereas TOEFL, IELTS, and TOEIC license secondary school teachers."
    ],
    correctIndex: 0,
    rationale: "Correct! TKT tests declarative pedagogical knowledge (terminology, methodology, lesson planning, classroom management) using objective tasks, while TOEFL, IELTS, and TOEIC measure a candidate's own English proficiency."
  },
  {
    id: "tkt-2",
    module: "TKT",
    category: "Core Diagnostic (Target Audience)",
    question: "Who is the primary target audience for the Cambridge TKT (Teaching Knowledge Test)?",
    options: [
      "Undergraduate science and engineering students applying for international university exchange programs.",
      "Pre-service and in-service teachers of English to speakers of other languages seeking a pedagogical credential.",
      "Multinational human resources managers screening job applicants for regional corporate offices.",
      "Postgraduate translators and simultaneous interpreters working in diplomatic institutions."
    ],
    correctIndex: 1,
    rationale: "Correct! TKT is designed for both pre-service (trainee) and practicing (in-service) teachers of English to speakers of other languages."
  },
  {
    id: "tkt-3",
    module: "TKT",
    category: "Core Diagnostic (Exam Formats)",
    question: "Which standardized exam task specifically requires candidates to summarize and compare visual information presented in charts, graphs, tables, or diagrams in at least 150 words?",
    options: [
      "TOEFL iBT Writing Part 3 (Write for an Academic Discussion)",
      "TOEIC Writing Questions 6–7 (Respond to a Written Request)",
      "IELTS Academic Writing Task 1 (Report on Visual Data)",
      "IELTS General Training Writing Task 1 (Formal/Semi-Formal Letter)"
    ],
    correctIndex: 2,
    rationale: "Correct! IELTS Academic Writing Task 1 requires test-takers to summarize, describe, and compare key features from a graph, table, chart, map, or process diagram in 150+ words."
  },
  {
    id: "tkt-4",
    module: "TKT",
    category: "Core Diagnostic (TKT Module 1/3)",
    question: "Instead of asking the ineffective question 'Do you understand?' after presenting a new grammar structure or lexical item, what should a teacher use to verify comprehension of meaning?",
    options: [
      "Instruction Checking Questions (ICQs) focused on procedural timing and grouping",
      "Concept Checking Questions (CCQs) targeting the core semantic boundaries of the form",
      "Rhetorical Purpose Questions examining why the author selected a given register",
      "Diagnostic Elicitation Prompts designed to introduce an entirely new topic"
    ],
    correctIndex: 1,
    rationale: "Correct! Concept Checking Questions (CCQs) isolate the core meaning/timelines of target grammar or vocabulary (e.g., for 'used to': 'Did it happen in the past? Yes. Does it happen now? No.')."
  },
  {
    id: "tkt-5",
    module: "TKT",
    category: "Core Diagnostic (TKT Module 3)",
    question: "After explaining a pair-work roleplay activity, the teacher asks the class: 'Are you working individually or in pairs?' and 'How many minutes do you have?' What type of questions are these?",
    options: [
      "Concept Checking Questions (CCQs)",
      "Instruction Checking Questions (ICQs)",
      "Referential Open-Ended Questions",
      "Metalinguistic Reformulation Prompts"
    ],
    correctIndex: 1,
    rationale: "Correct! Instruction Checking Questions (ICQs) confirm that learners understand the procedural rules, grouping, and time limits of an activity before starting."
  },
  {
    id: "tkt-6",
    module: "TKT",
    category: "Core Diagnostic (TKT Module 1 Phonology)",
    question: "In phonology, two words that differ in meaning by only a single phoneme in the exact same position—such as 'ship' (/ʃɪp/) and 'sheep' (/ʃiːp/)—are known as a:",
    options: [
      "Homophonous lexical pair",
      "Minimal pair",
      "Consonant cluster",
      "Allophonic variant"
    ],
    correctIndex: 1,
    rationale: "Correct! A minimal pair consists of two words that vary by only one phoneme in the exact same position (/ɪ/ vs /iː/) and carry distinct meanings."
  },
  {
    id: "tkt-7",
    module: "TKT",
    category: "Core Diagnostic (TKT Module 2/3)",
    question: "What pedagogical term describes the temporary supportive frameworks—such as sentence starters, visual graphic organizers, or guided models—provided by a teacher or peer to help learners complete a task?",
    options: [
      "Interlanguage fossilization",
      "Instructional scaffolding",
      "Curricular washback",
      "Deductive substitution"
    ],
    correctIndex: 1,
    rationale: "Correct! Scaffolding refers to temporary instructional support within the learner's Zone of Proximal Development (ZPD) that is gradually withdrawn as autonomy increases."
  },
  {
    id: "tkt-8",
    module: "TKT",
    category: "Core Diagnostic (Assessment Principles)",
    question: "A course aims to teach students how to write cohesive business reports, but the final exam consists exclusively of 50 isolated multiple-choice vocabulary questions. Which fundamental assessment quality does this test lack?",
    options: [
      "Scorer and inter-rater reliability",
      "Administrative practicality and economy",
      "Content and construct validity",
      "Statistical score equating"
    ],
    correctIndex: 2,
    rationale: "Correct! Content validity refers to the extent to which a test accurately samples and measures the specific skills and syllabus content it claims to assess."
  },
  {
    id: "tkt-9",
    module: "TKT",
    category: "Core Diagnostic (TOEIC Suite)",
    question: "What is the primary purpose of the TOEIC Bridge® tests compared to the standard TOEIC Listening & Reading test?",
    options: [
      "It measures advanced C1–C2 executive negotiation and legal drafting skills for corporate directors.",
      "It measures beginner-to-low-intermediate (CEFR A1–B1) English proficiency for foundational workplace and everyday contexts.",
      "It evaluates university laboratory research and thesis defenses for graduate STEM applicants.",
      "It assesses classroom management and lesson staging skills for primary school English teachers."
    ],
    correctIndex: 1,
    rationale: "Correct! While classic TOEIC L&R spans A1 to C1, TOEIC Bridge® is specifically designed for CEFR A1–B1 learners using accessible everyday and entry-level workplace tasks."
  },
  {
    id: "tkt-10",
    module: "TKT",
    category: "Core Diagnostic (TKT Module 1 Error Analysis)",
    question: "A learner says, 'She teached me yesterday' instead of 'She taught me yesterday.' In TKT Module 1 SLA terminology, this developmental error is an example of:",
    options: [
      "Negative L1 lexical transfer (false cognate)",
      "Developmental overgeneralization of a target rule",
      "Pragmatic register inappropriacy",
      "Elision and connected speech reduction"
    ],
    correctIndex: 1,
    rationale: "Correct! Overgeneralization occurs when a learner applies a productive grammatical rule (adding '-ed' for regular past simple) to irregular verbs ('teach' → 'teached')."
  },
  {
    id: "tkt-11",
    module: "TKT",
    category: "CEFR B2 Equivalencies",
    question: "According to official score concordance tables studied in EEI3316, which set of minimum scores accurately represents the threshold for CEFR B2 (Vantage / Independent User) across major tests?",
    options: [
      "IELTS 5.5–6.5 | TOEFL iBT 72–94 | TOEIC L&R 785–940 (L: 400, R: 385)",
      "IELTS 4.0–5.0 | TOEFL iBT 42–71 | TOEIC L&R 550–780 (L: 275, R: 275)",
      "IELTS 7.0–8.0 | TOEFL iBT 95–113 | TOEIC L&R 945–990 (L: 490, R: 455)",
      "IELTS 5.0–5.5 | TOEFL iBT 60–78 | TOEIC L&R 650–750 (L: 320, R: 330)"
    ],
    correctIndex: 0,
    rationale: "Correct! CEFR B2 corresponds to IELTS Band 5.5–6.5, TOEFL iBT 72–94, and TOEIC L&R 785–940 (minimum 400 Listening + 385 Reading)."
  },
  {
    id: "tkt-12",
    module: "TKT",
    category: "CEFR B2 & TKT Bands",
    question: "How are Cambridge TKT results reported for each module, and what band range demonstrates strong to extensive teaching knowledge?",
    options: [
      "A binary Pass or Merit certificate requiring a minimum raw score of 65 out of 80",
      "Bands 1 to 4, where Band 3 and Band 4 represent breadth/depth to extensive teaching knowledge",
      "A scaled score from 100 to 200 aligned with the Cambridge English Scale for C1 Advanced",
      "Bands 1.0 to 9.0 reported in half-band increments with an overall average across modules"
    ],
    correctIndex: 1,
    rationale: "Correct! TKT awards Band 1 (limited), Band 2 (basic), Band 3 (breadth and depth of knowledge), or Band 4 (extensive knowledge). Bands 3–4 are the target benchmark."
  },
  {
    id: "tkt-13",
    module: "TKT",
    category: "TKT Structure & Credentials",
    question: "How does the Cambridge TKT differ from CELTA and DELTA in terms of assessment format and career stage?",
    options: [
      "TKT assesses 6 hours of live classroom teaching, whereas CELTA and DELTA are computer-based multiple-choice exams.",
      "TKT consists of 80-question written modules with no observed teaching; CELTA includes initial observed teaching practice, and DELTA is an advanced diploma for experienced teachers.",
      "TKT is restricted to university professors with doctoral degrees, whereas CELTA is designed for secondary school students.",
      "TKT and CELTA are identical practical certificates, whereas DELTA only evaluates phoneme transcription."
    ],
    correctIndex: 1,
    rationale: "Correct! Each TKT module has 80 objective questions in 80 minutes with no observed teaching component, whereas CELTA provides initial practical training with observed lessons and DELTA is a Master's-level diploma."
  },
  {
    id: "tkt-14",
    module: "TKT",
    category: "TKT Modules Overview",
    question: "A teacher is studying how to select supplementary materials, sequence a 60-minute receptive skills lesson, and formulate Main, Subsidiary, and Personal aims. Which TKT Core Module directly tests these competencies?",
    options: [
      "TKT Module 1: Language and background to language learning and teaching",
      "TKT Module 2: Lesson planning and use of resources for language teaching",
      "TKT Module 3: Managing the teaching and learning process",
      "TKT: Young Learners (YL) Specialist Module"
    ],
    correctIndex: 1,
    rationale: "Correct! TKT Module 2 covers lesson planning (aims, staging, timetable fit, assessment) and selecting/adapting teaching resources and reference materials."
  },
  {
    id: "tkt-15",
    module: "TKT",
    category: "TKT Module 1 (Form, Meaning, Use)",
    question: "When analyzing 'I'd rather you didn't smoke in here', the teacher notes that it uses 'would rather + subject + past simple' (1), expresses polite refusal/preference about someone else's action in the present (2), and is used in semi-formal spoken interaction (3). What do (1), (2), and (3) represent?",
    options: [
      "(1) Phonology, (2) Morphology, (3) Orthography",
      "(1) Form, (2) Meaning/Concept, (3) Use/Register",
      "(1) Register, (2) Collocation, (3) Syntax",
      "(1) Cohesion, (2) Coherence, (3) Connotation"
    ],
    correctIndex: 1,
    rationale: "Correct! In TKT Module 1 language analysis, Form describes grammatical construction, Meaning describes semantic concept (present preference despite past tense form), and Use/Register describes social appropriateness."
  },
  {
    id: "tkt-16",
    module: "TKT",
    category: "TKT Module 1 (Lexis)",
    question: "In TKT Module 1 Lexis, how does a 'lexical set' differ from a 'collocation'?",
    options: [
      "A lexical set is a group of words sharing a topic and part of speech (e.g., blizzard, drizzle, gale), whereas a collocation consists of words that naturally co-occur (e.g., 'torrential rain', 'reach a consensus').",
      "A lexical set refers to words with opposite meanings (antonyms), whereas a collocation refers to words sharing the same derivational prefix.",
      "A lexical set is a multi-word phrasal verb, whereas a collocation is a list of irregular past participles.",
      "A lexical set describes false friends across two languages, whereas a collocation describes homonyms within one language."
    ],
    correctIndex: 0,
    rationale: "Correct! A lexical set groups words by topic/hyponymy, whereas collocations are habitual word partnerships that co-occur with high frequency."
  },
  {
    id: "tkt-17",
    module: "TKT",
    category: "TKT Module 1 (Reading Subskills)",
    question: "A student looks rapidly over a railway timetable solely to find the departure platform of the 14:30 express to Edinburgh without reading the rest of the page. Which reading subskill is the student using?",
    options: [
      "Skimming for global gist",
      "Scanning for specific information",
      "Intensive syntactic parsing",
      "Inferring implicit writer attitude"
    ],
    correctIndex: 1,
    rationale: "Correct! Scanning is searching a text rapidly for a specific piece of data (a number, name, or time), whereas skimming is reading quickly for the overall general idea (gist)."
  },
  {
    id: "tkt-18",
    module: "TKT",
    category: "TKT Module 1 (SLA: Acquisition vs Learning)",
    question: "In Stephen Krashen's Second Language Acquisition distinction (tested in TKT Module 1), how does 'acquisition' differ from 'learning'?",
    options: [
      "Acquisition is a subconscious process driven by natural exposure and meaningful interaction, whereas learning is a conscious process of studying explicit rules and forms.",
      "Acquisition occurs exclusively through written translation drills, whereas learning occurs only in infant immersion.",
      "Acquisition refers to memorizing phonetic symbols, whereas learning refers to forgetting L1 grammar rules.",
      "Acquisition requires formal summative testing, whereas learning requires zero corrective feedback."
    ],
    correctIndex: 0,
    rationale: "Correct! Acquisition is subconscious and results from comprehensible input and communicative exposure, while learning involves conscious attention to explicit grammatical rules."
  },
  {
    id: "tkt-19",
    module: "TKT",
    category: "TKT Module 1 (Error vs Slip)",
    question: "During a lively fluency debate, an upper-intermediate student who mastered third-person '-s' years ago says 'She work in Madrid' and immediately corrects herself: 'Sorry, she works in Madrid.' How does TKT classify this mistake?",
    options: [
      "A competence error caused by an incomplete grasp of the present simple rule",
      "A performance slip caused by processing load or rapid speech that the learner can self-correct",
      "A fossilized L1 interference error requiring remedial grammar drilling",
      "A developmental overgeneralization of modal auxiliary verbs"
    ],
    correctIndex: 1,
    rationale: "Correct! A 'slip' occurs when a learner knows the rule but makes a momentary lapse due to tiredness, anxiety, or speed, and can self-correct. An 'error' reflects a gap in underlying competence."
  },
  {
    id: "tkt-20",
    module: "TKT",
    category: "TKT Module 1 (Methodologies)",
    question: "Instead of explaining the rule for conditional sentences on the board first, a teacher gives students a short text containing five conditional sentences and a worksheet of guiding questions so students can work out the grammar rules in pairs. Which approach is this?",
    options: [
      "Deductive Presentation–Practice–Production (PPP)",
      "Guided Discovery (Inductive Approach)",
      "Total Physical Response (TPR)",
      "Grammar-Translation Method"
    ],
    correctIndex: 1,
    rationale: "Correct! Guided Discovery is an inductive methodology where learners analyze contextualized examples and answer structured prompts to formulate the rules themselves."
  },
  {
    id: "tkt-21",
    module: "TKT",
    category: "TKT Module 1 (TBL vs PPP)",
    question: "How does Task-Based Learning (TBL) fundamentally differ from the traditional Presentation–Practice–Production (PPP) framework?",
    options: [
      "In TBL, learners first complete a communicative, outcome-driven task using their existing language resources, followed by a post-task language focus stage based on needs that emerged.",
      "In TBL, the teacher pre-selects a single grammar structure, drills it chorally for 30 minutes, and forbids free speaking.",
      "In PPP, learners never receive explicit grammar instruction and only listen to imperatives.",
      "In TBL, assessment is based entirely on translating classical literature into the students' first language."
    ],
    correctIndex: 0,
    rationale: "Correct! TBL (Pre-task → Task cycle → Language focus) prioritizes communicative meaning and task completion first, addressing specific language forms afterward."
  },
  {
    id: "tkt-22",
    module: "TKT",
    category: "TKT Module 1 (Assessment Types)",
    question: "At the very start of a semester, a language institute administers a test to 200 newly enrolled students to assign them to A2, B1, B2, or C1 classes. What type of assessment is this?",
    options: [
      "Summative Achievement Test",
      "Entry Placement Test",
      "Continuous Formative Portfolio",
      "Diagnostic Syllabus Audit"
    ],
    correctIndex: 1,
    rationale: "Correct! A Placement Test is administered at entry to group learners into homogeneous classes at the appropriate proficiency level."
  },
  {
    id: "tkt-23",
    module: "TKT",
    category: "TKT Module 2 (Lesson Aims)",
    question: "According to TKT Module 2 standards, which of the following is the best-formulated Main Aim for a 60-minute speaking and grammar lesson?",
    options: [
      "To complete exercises 3, 4, and 5 on page 42 of the student coursebook.",
      "To teach the past simple tense and show a video clip about summer vacations.",
      "Learners will be better able to describe their past holidays using affirmative and negative past simple forms.",
      "To reduce my teacher talking time (TTT) and distribute handouts more efficiently."
    ],
    correctIndex: 2,
    rationale: "Correct! A strong Main Aim is learner-centered and specifies both the communicative outcome and target language. Option A is a procedure, Option B is teacher-centered, and Option D is a Personal Aim."
  },
  {
    id: "tkt-24",
    module: "TKT",
    category: "TKT Module 2 (Aim Types)",
    question: "On a lesson plan, a teacher writes: 'To give clearer, shorter task instructions and use ICQs before pair work.' What category of aim is this?",
    options: [
      "Main Communicative Aim",
      "Subsidiary Language Aim",
      "Personal Professional Aim",
      "Stage Procedure Aim"
    ],
    correctIndex: 2,
    rationale: "Correct! A Personal Aim focuses on an aspect of the teacher's own classroom practice or technique that they intend to improve during the lesson."
  },
  {
    id: "tkt-25",
    module: "TKT",
    category: "TKT Module 2 (Timetable Fit)",
    question: "In a formal TKT Module 2 lesson plan, what does the section 'Timetable Fit' describe?",
    options: [
      "The exact minute-by-minute duration allocated to each interaction pattern in the lesson.",
      "How the current lesson connects to what learners studied in prior lessons and prepares them for upcoming lessons.",
      "The physical classroom layout and availability of overhead projectors during the week.",
      "The institutional calendar of mid-term and final summative examinations."
    ],
    correctIndex: 1,
    rationale: "Correct! Timetable fit explains how a single lesson links to prior learning and leads into subsequent lessons in the broader scheme of work."
  },
  {
    id: "tkt-26",
    module: "TKT",
    category: "TKT Module 2 (Receptive Skills Staging)",
    question: "What is the standard pedagogical sequence for staging a receptive skills (Reading or Listening) lesson in TKT Module 2?",
    options: [
      "Detailed comprehension task → Gist task → Lead-in → Isolated grammar test",
      "Lead-in (activating schema) → Gist task (skimming/listening for overall idea) → Detailed comprehension task → Productive follow-up task",
      "Aloud reading by learners around the room → Unseen dictation → Word-for-word translation",
      "Productive roleplay → Intensive line-by-line analysis → Skimming for gist → Lead-in"
    ],
    correctIndex: 1,
    rationale: "Correct! Receptive lessons move from top-down context activation (Lead-in) to general understanding (Gist task) before demanding intensive processing (Detailed task), concluding with a productive follow-up."
  },
  {
    id: "tkt-27",
    module: "TKT",
    category: "TKT Module 3 (Warmer vs Lead-in)",
    question: "How does a 'Warmer' differ from a 'Lead-in' at the beginning of a lesson?",
    options: [
      "A Warmer is a short activity to raise energy, focus, and mood (not necessarily tied to the lesson topic), whereas a Lead-in specifically introduces the lesson theme and activates background knowledge (schemata).",
      "A Warmer is a 25-minute silent reading task, whereas a Lead-in is a summative vocabulary test.",
      "A Warmer is used only at the end of a lesson to review homework, whereas a Lead-in is used for delayed error correction.",
      "A Warmer introduces target grammar rules deductively, whereas a Lead-in drills minimal pairs chorally."
    ],
    correctIndex: 0,
    rationale: "Correct! Warmers energize the class and get students operating in English, while Lead-ins specifically link to the target topic or text to activate schemata."
  },
  {
    id: "tkt-28",
    module: "TKT",
    category: "TKT Module 3 (Eliciting vs Prompting)",
    question: "In classroom interaction (TKT Module 3), what is the distinction between 'eliciting' and 'prompting'?",
    options: [
      "Eliciting is drawing out language or ideas that learners already know rather than telling them directly; prompting is giving a partial cue or hint when a learner is stuck during production.",
      "Eliciting is reading a model essay aloud; prompting is assigning penalizing grades for spelling errors.",
      "Eliciting is used only during summative tests; prompting is used only when writing lesson plans.",
      "Eliciting means translating unknown words into L1; prompting means asking students to repeat a sentence chorally."
    ],
    correctIndex: 0,
    rationale: "Correct! Eliciting activates existing student knowledge across the class, while prompting provides a supportive nudge when a learner hesitates mid-utterance."
  },
  {
    id: "tkt-29",
    module: "TKT",
    category: "TKT Module 3 (Error Correction Timing)",
    question: "When should a teacher typically use 'immediate (on-the-spot) correction' versus 'delayed correction'?",
    options: [
      "Immediate correction during controlled accuracy practice so errors are not reinforced; delayed correction after communicative fluency activities so flow and confidence are maintained.",
      "Immediate correction during free roleplays and debates; delayed correction two weeks after controlled substitution drills.",
      "Immediate correction only for advanced C2 learners; delayed correction only for beginner A1 learners.",
      "Immediate correction for content ideas; delayed correction for phonetic minimal pairs."
    ],
    correctIndex: 0,
    rationale: "Correct! Accuracy stages require immediate feedback (recast, finger correction, elicitation), whereas fluency stages call for unobtrusive monitoring and delayed board feedback."
  },
  {
    id: "tkt-30",
    module: "TKT",
    category: "TKT Specialist Modules (CLIL)",
    question: "In TKT: CLIL (Content and Language Integrated Learning), what are Coyle's '4Cs' that form the conceptual framework of a CLIL lesson?",
    options: [
      "Correction, Comprehension, Collocation, and Clauses",
      "Content, Communication, Cognition, and Culture",
      "Context, Cohesion, Coherence, and Competence",
      "Curriculum, Classroom, Criteria, and Certification"
    ],
    correctIndex: 1,
    rationale: "Correct! Coyle's 4Cs of CLIL integrate Content (subject matter), Communication (language of/for/through learning), Cognition (LOTS & HOTS thinking skills), and Culture (intercultural citizenship)."
  },
  {
    id: "tkt-31",
    module: "TKT",
    category: "TKT Module 1 (Phonology: Connected Speech)",
    question: "In rapid natural speech, the phrase 'next door' (/nekst dɔː/) is pronounced as /neks dɔː/, dropping the /t/ sound between consonant clusters. Which phonological feature of connected speech is this?",
    options: [
      "Elision (omission of a sound in connected speech)",
      "Intrusion (insertion of an extra /r/, /w/, or /j/ sound between vowels)",
      "Contrastive tonic stress shift",
      "Homorganic diphthongization"
    ],
    correctIndex: 0,
    rationale: "Correct! Elision is the omission of one or more sounds (frequently alveolar plosives /t/ or /d/ between consonants) in rapid connected speech to make articulation easier."
  },
  {
    id: "tkt-32",
    module: "TKT",
    category: "TKT Module 1 (Phonology: Assimilation)",
    question: "When a speaker pronounces 'ten boys' as /tem bɔɪz/—where the alveolar nasal /n/ changes to the bilabial nasal /m/ in anticipation of the following bilabial /b/—this process is called:",
    options: [
      "Regressive assimilation",
      "Cataphoric reference",
      "Syllable-timed intonation",
      "Lexical back-formation"
    ],
    correctIndex: 0,
    rationale: "Correct! Assimilation occurs when a phoneme changes its quality (place, manner, or voicing) to become more like a neighboring sound (/n/ → /m/ before bilabial /b/, /p/, or /m/)."
  },
  {
    id: "tkt-33",
    module: "TKT",
    category: "TKT Module 1 (Discourse: Cohesion vs Coherence)",
    question: "A student writes a paragraph that contains plenty of linking words ('Moreover', 'Consequently', 'Nevertheless'), yet the underlying ideas jump randomly from football to photosynthesis to medieval castles. How would a TKT assessor describe this text?",
    options: [
      "It displays overt lexical and grammatical cohesion devices, but lacks logical coherence.",
      "It achieves strong rhetorical coherence, but lacks morphological affixation.",
      "It demonstrates high pragmatic register, but lacks phonemic discrimination.",
      "It uses anaphoric ellipsis effectively, but lacks deictic intonation."
    ],
    correctIndex: 0,
    rationale: "Correct! Cohesion refers to the surface linguistic links (conjunctions, pronouns, lexical chains), whereas coherence refers to whether the text makes unified, logical sense as a whole to the reader."
  },
  {
    id: "tkt-34",
    module: "TKT",
    category: "TKT Module 1 (Grammar: Reference Devices)",
    question: "In the sentence 'Although she had never visited Rome before, Clara fell in love with the city immediately,' the pronoun 'she' points forward to 'Clara'. What type of grammatical reference is this?",
    options: [
      "Anaphoric reference (pointing backward to an earlier noun phrase)",
      "Cataphoric reference (pointing forward to a noun phrase introduced later)",
      "Exophoric reference (pointing outside the text to the physical room)",
      "Derivational compounding"
    ],
    correctIndex: 1,
    rationale: "Correct! Cataphoric reference occurs when a pronoun ('she') appears first and refers forward to a referent ('Clara') named later in the sentence or text. Anaphoric reference points backward."
  },
  {
    id: "tkt-35",
    module: "TKT",
    category: "TKT Module 1 (Morphology: Affixation)",
    question: "In the word 'uncomfortably', how are the morphemes 'un-', 'comfort', '-able', and '-ly' classified in TKT Module 1?",
    options: [
      "'comfort' is the root/base word; 'un-' is a negative prefix; '-able' and '-ly' are derivational suffixes changing part of speech.",
      "'un-' and 'comfort' are inflectional suffixes; '-able' and '-ly' are compound prepositions.",
      "All four segments are bound inflectional morphemes marking plural and tense.",
      "'uncomfort' is a phrasal verb; '-ably' is a determiner."
    ],
    correctIndex: 0,
    rationale: "Correct! Derivational affixes create new words or change the part of speech (comfort [N/V] → comfortable [Adj] → uncomfortably [Adv]), whereas inflectional suffixes (-s, -ed, -ing, -er, -est) only change grammatical form."
  },
  {
    id: "tkt-36",
    module: "TKT",
    category: "TKT Module 1 (Lexical Relations)",
    question: "A student in a Spanish-speaking class writes: 'I was very embarrassed when I found out I was pregnant'—using the English word 'embarrassed' because it looks like the Spanish word 'embarazada' (which actually means pregnant). What lexical phenomenon is this?",
    options: [
      "False friend (false cognate)",
      "True cognate transfer",
      "Hyponymic inclusion",
      "Polysemous extension"
    ],
    correctIndex: 0,
    rationale: "Correct! False friends (false cognates) are words in two languages that look or sound similar due to shared or coincidental form, but have significantly different meanings."
  },
  {
    id: "tkt-37",
    module: "TKT",
    category: "TKT Module 1 (Homonyms, Homophones, Polysemy)",
    question: "How does 'polysemy' (e.g., the 'foot' of a person vs. the 'foot' of a mountain) differ from 'homophones' (e.g., 'flour' and 'flower')?",
    options: [
      "Polysemy involves a single word with multiple related meanings extended by metaphor, whereas homophones are distinct words with identical pronunciation but different spellings and meanings.",
      "Polysemy refers to words with opposite meanings, whereas homophones refer to words with identical spelling but different pronunciations.",
      "Polysemy occurs only in spoken dialects, whereas homophones occur only in academic essays.",
      "Polysemy is a grammatical tense error, whereas homophones are discourse markers."
    ],
    correctIndex: 0,
    rationale: "Correct! Polysemy is one lexical item having multiple related senses ('head of a person', 'head of a department'), whereas homophones ('sea/see', 'knew/new') share pronunciation but have unrelated meanings and different spellings."
  },
  {
    id: "tkt-38",
    module: "TKT",
    category: "TKT Module 1 (Language Functions &Exponent Register)",
    question: "A teacher wants learners to practice the communicative function of 'making a tentative suggestion in a formal business meeting.' Which exponent is most appropriate in register and function?",
    options: [
      "'Perhaps we might consider postponing the product launch until the third quarter.'",
      "'You guys had better stop the product launch right now or else.'",
      "'Why didn't anyone tell me the product launch was last Tuesday?'",
      "'Let's grab a coffee and forget about the product launch!'"
    ],
    correctIndex: 0,
    rationale: "Correct! An exponent is the actual language phrase used to express a communicative function. Using hedging ('Perhaps we might consider + -ing') matches both the function (tentative suggestion) and formal business register."
  },
  {
    id: "tkt-39",
    module: "TKT",
    category: "TKT Module 1 (Listening Processing: Top-Down vs Bottom-Up)",
    question: "Before playing an audio recording of an airport announcement, the teacher asks students to brainstorm what happens at an airport gate and predict what information a delayed passenger needs. Which processing mode is the teacher activating?",
    options: [
      "Top-down processing (using background world knowledge, context, and schemata to predict and interpret meaning)",
      "Bottom-up processing (decoding individual phonemes, word boundaries, and inflectional endings)",
      "Productive articulatory phonetics",
      "Summative norm-referenced grading"
    ],
    correctIndex: 0,
    rationale: "Correct! Top-down processing relies on prior knowledge (schemata), context, and expectations to make sense of a text, whereas bottom-up processing builds meaning from individual sounds, words, and clauses."
  },
  {
    id: "tkt-40",
    module: "TKT",
    category: "TKT Module 1 (Process Writing Approach)",
    question: "In a Process Writing lesson (as opposed to a Product Writing lesson), which sequence of classroom stages do learners typically follow?",
    options: [
      "Brainstorming ideas → Planning/Outlining → Drafting → Peer/Teacher Feedback → Editing and Revising → Final Version",
      "Analyzing a model text → Controlled sentence substitution → Writing a single draft under exam timing with no revision",
      "Memorizing a sample essay → Dictating it from memory → Grading spelling errors only",
      "Silent reading → Multiple-choice grammar quiz → Oral pronunciation drill"
    ],
    correctIndex: 0,
    rationale: "Correct! The Process Approach focuses on the recursive stages writers go through (generating ideas, structuring, drafting, reviewing, and editing), whereas the Product Approach focuses on imitating a model text's organization and features."
  },
  {
    id: "tkt-41",
    module: "TKT",
    category: "TKT Module 1 (Speaking: Fluency vs Accuracy)",
    question: "Which classroom activity is primarily designed to develop oral 'fluency' rather than controlled 'accuracy'?",
    options: [
      "An information-gap problem-solving task where pairs must negotiate which five survival items to take to a desert island",
      "A choral repetition drill focusing on the contrast between /θ/ and /ð/ in isolated words",
      "A transformation drill where learners convert active sentences into the passive voice on cue",
      "A gap-fill worksheet requiring the correct past participle of twenty irregular verbs"
    ],
    correctIndex: 0,
    rationale: "Correct! An information-gap / ranking negotiation task has a communicative outcome, real information exchange, and spontaneous language choice—hallmarks of a fluency activity."
  },
  {
    id: "tkt-42",
    module: "TKT",
    category: "TKT Module 1 (Learner Motivation: Instrumental vs Integrative)",
    question: "A university graduate studies English intensively for six months solely because achieving a TOEIC score of 800 is required for a promotion and salary bonus at her engineering firm. In SLA terminology, what type of motivation is this?",
    options: [
      "Instrumental (extrinsic) motivation driven by a practical external goal or career reward",
      "Integrative motivation driven by a desire to assimilate into the target culture and community",
      "kinesthetic sensory preference",
      "Intralingual developmental readiness"
    ],
    correctIndex: 0,
    rationale: "Correct! Instrumental motivation involves learning a language for a utilitarian, practical purpose (passing an exam, getting a job/promotion), whereas integrative motivation stems from personal affinity for the target culture and speakers."
  },
  {
    id: "tkt-43",
    module: "TKT",
    category: "TKT Module 1 (Teaching Approaches: Lexical Approach)",
    question: "Which classroom practice is most characteristic of Michael Lewis's 'Lexical Approach'?",
    options: [
      "Highlighting, noticing, and recording multi-word chunks, collocations, and fixed institutional expressions in authentic texts",
      "Responding physically to spoken imperative commands ('Stand up', 'Touch your left ear') without speaking",
      "Translating nineteenth-century literary passages sentence by sentence into the mother tongue",
      "Using colored Cuisenaire rods and silence so the teacher speaks as little as possible"
    ],
    correctIndex: 0,
    rationale: "Correct! The Lexical Approach views language as 'grammaticalized lexis' rather than 'lexicalized grammar', emphasizing prefabricated lexical chunks, collocations, and fixed frames. (Option B is TPR; Option C is Grammar-Translation; Option D is the Silent Way)."
  },
  {
    id: "tkt-44",
    module: "TKT",
    category: "TKT Module 1 (Teaching Approaches: Test-Teach-Test)",
    question: "How does a 'Test–Teach–Test' (TTT) lesson structure operate?",
    options: [
      "Learners first attempt a diagnostic communicative task to reveal what they already know and where gaps exist; the teacher then teaches/clarifies the needed language; finally, learners perform a second task to consolidate it.",
      "Learners take three separate summative multiple-choice exams in a single 60-minute class with no instruction in between.",
      "The teacher lectures on grammar for 40 minutes and then gives two spelling tests at the end.",
      "Students write test questions for the teacher to answer and grade the teacher's pronunciation."
    ],
    correctIndex: 0,
    rationale: "Correct! In Test-Teach-Test, the first 'Test' is a diagnostic task that lets the teacher observe learners' current interlanguage gaps, the 'Teach' stage targets those exact gaps, and the second 'Test' provides practice of the newly clarified items."
  },
  {
    id: "tkt-45",
    module: "TKT",
    category: "TKT Module 1 (Assessment: Subjective vs Objective)",
    question: "What is the key psychometric difference between 'objective marking' and 'subjective marking'?",
    options: [
      "Objective marking has a single predetermined answer key (e.g., MCQs) requiring no rater judgment, whereas subjective marking requires an assessor to apply analytic or holistic band descriptors (e.g., essay/speaking grading).",
      "Objective marking is always invalid, whereas subjective marking requires zero training for examiners.",
      "Objective marking can only be used for speaking interviews, whereas subjective marking is used for optical scanner sheets.",
      "Objective marking measures fluency only, whereas subjective marking measures phoneme recognition only."
    ],
    correctIndex: 0,
    rationale: "Correct! Objective items (MCQs, True/False, matching) have fixed keys with 100% scorer reliability, while subjective tasks (essays, speaking) require trained raters using standardized assessment rubrics."
  },
  {
    id: "tkt-46",
    module: "TKT",
    category: "TKT Module 1 (Assessment: Washback / Backwash)",
    question: "In a secondary school where the national university entrance exam tests only reading comprehension and discrete grammar MCQs, teachers stop practicing speaking and listening in class altogether. In assessment theory, this phenomenon is an example of:",
    options: [
      "Negative washback (backwash) of a high-stakes exam on classroom teaching and learning",
      "High construct validity of an integrative speaking assessment",
      "Criterion-referenced formative scaffolding",
      "Positive inter-rater reliability calibration"
    ],
    correctIndex: 0,
    rationale: "Correct! Washback (or backwash) is the influence a test has on classroom teaching and learning. When a narrow test causes teachers to neglect vital communicative skills, it exerts negative washback."
  },
  {
    id: "tkt-47",
    module: "TKT",
    category: "TKT Module 2 (Lesson Planning: Anticipated Problems & Solutions)",
    question: "When planning a lesson on the Present Perfect ('I have lived here for five years'), which entry represents a well-written linguistic 'Anticipated Problem and Solution'?",
    options: [
      "Problem: Learners may use the present simple ('I live here since five years') due to L1 transfer and confuse 'for' (period) with 'since' (point in time). Solution: Use a visual timeline on the board and ask targeted CCQs.",
      "Problem: Students do not know English. Solution: Cancel the grammar stage and watch a movie.",
      "Problem: The grammar is difficult. Solution: Tell students to pay closer attention.",
      "Problem: Some students might arrive five minutes late. Solution: Lock the classroom door at 9:00 AM."
    ],
    correctIndex: 0,
    rationale: "Correct! In TKT Module 2, strong anticipated problems specify the exact form/meaning/phonology issue learners are likely to face, paired with a concrete pedagogical solution (timeline + CCQs)."
  },
  {
    id: "tkt-48",
    module: "TKT",
    category: "TKT Module 2 (Stage Aims vs Procedures)",
    question: "In a lesson plan table, a trainee writes: 'Students work in pairs to compare their answers to the listening gap-fill before whole-class feedback.' Is this a 'Procedure' or a 'Stage Aim', and what is the underlying pedagogical purpose?",
    options: [
      "It is a Procedure; the Stage Aim is 'to build learner confidence and allow peer scaffolding/verification before public feedback.'",
      "It is a Main Aim; the Procedure is 'to assess summative C1 proficiency.'",
      "It is a Personal Aim; the Stage Aim is 'to increase teacher talking time.'",
      "It is a Timetable Fit; the Procedure is 'to introduce new lexical sets deductively.'"
    ],
    correctIndex: 0,
    rationale: "Correct! 'Procedure' describes what the teacher and students actually do in the stage, while 'Stage Aim' explains WHY they do it (e.g., peer checking builds confidence and reduces anxiety before whole-class reporting)."
  },
  {
    id: "tkt-49",
    module: "TKT",
    category: "TKT Module 2 (Reference Resources for Teachers)",
    question: "A teacher wants to find out which nouns most frequently follow the verb 'mitigate' in authentic academic English journals. Which reference resource is specifically designed for this purpose?",
    options: [
      "A corpus / concordancer (such as COCA or the British National Corpus)",
      "A bilingual pocket dictionary for tourists",
      "A phonemic chart of English monophthongs and diphthongs",
      "A picture dictionary for young learners"
    ],
    correctIndex: 0,
    rationale: "Correct! A language corpus / concordancer searches millions of authentic texts to display real-world frequency, collocation patterns, and grammatical contexts."
  },
  {
    id: "tkt-50",
    module: "TKT",
    category: "TKT Module 2 (Adapting Coursebook Materials)",
    question: "A coursebook reading text is culturally relevant and well-written, but the accompanying comprehension task asks 15 complex open-ended questions that are too demanding for a weak B1 class. How should the teacher adapt the material?",
    options: [
      "Keep the authentic reading text, but grade the task by replacing the 15 complex questions with 6 clear True/False statements and a graphic organizer.",
      "Rewrite the entire reading text in the students' native language and skip reading in English.",
      "Assign all 15 questions as a timed exam without any pre-reading lead-in.",
      "Abandon the coursebook for the rest of the semester."
    ],
    correctIndex: 0,
    rationale: "Correct! A core TKT Module 2 principle when using challenging texts is 'Grade the task, not the text'—simplifying or scaffolding the comprehension task makes the text accessible."
  },
  {
    id: "tkt-51",
    module: "TKT",
    category: "TKT Module 3 (Correction Techniques: Recasting vs Finger Correction)",
    question: "A student says, 'I am agree with Maria.' The teacher holds up four fingers of her left hand—representing 'I - am - agree - with'—and gently folds down the second finger ('am') while looking quizzically at the student so the student says, 'I agree with Maria.' What technique is this?",
    options: [
      "Finger correction to prompt self-correction of an unnecessary auxiliary verb",
      "Unobtrusive conversational recasting without drawing attention to form",
      "Delayed board feedback at the end of a fluency roleplay",
      "Diagnostic peer assessment using an analytic writing rubric"
    ],
    correctIndex: 0,
    rationale: "Correct! Finger correction is a visual, non-verbal TKT Module 3 technique used to pinpoint word order, missing words, contractions, or redundant words so the learner can self-correct."
  },
  {
    id: "tkt-52",
    module: "TKT",
    category: "TKT Module 3 (Teacher Roles Across Lesson Stages)",
    question: "During a 15-minute group roleplay where students act as city council members debating a new park, the teacher walks quietly around the room listening, taking notes of good language and errors, and only steps in if a group completely breaks down. What is the teacher's primary role here?",
    options: [
      "Monitor and resource (facilitator)",
      "Controller and drill conductor",
      "Diagnostician and placement assessor",
      "Lecturer and primary informant"
    ],
    correctIndex: 0,
    rationale: "Correct! During communicative fluency work, the teacher adopts the role of Monitor (observing and noting language for delayed feedback) and Resource (available if needed), rather than Controller."
  },
  {
    id: "tkt-53",
    module: "TKT",
    category: "TKT Module 3 (Interaction Patterns)",
    question: "On a lesson plan, the interaction column shows the progression: 'T→C (10m) → S,S,S (5m) → S↔S (10m) → Ss↔Ss (15m)'. What does this progression indicate?",
    options: [
      "The lesson moves from teacher-fronted whole-class input, to individual thinking time, to pair work, and finally to group interaction—gradually increasing student talking time (STT) and autonomy.",
      "The teacher speaks for the entire 40 minutes while students take individual dictation.",
      "Students work in large groups first and end the lesson with a 15-minute teacher lecture.",
      "The class is taking a formal standardized listening examination."
    ],
    correctIndex: 0,
    rationale: "Correct! T→C = Teacher to whole class; S,S,S = Individual work; S↔S = Pair work (open or closed); Ss↔Ss = Group/mingle interaction. This staging maximizes STT and collaborative learning."
  },
  {
    id: "tkt-54",
    module: "TKT",
    category: "TKT Module 3 (Question Types: Display vs Referential)",
    question: "How does a 'display question' differ from a 'referential (genuine) question' in classroom discourse?",
    options: [
      "A display question is one to which the teacher already knows the answer (used to check knowledge/concept), whereas a referential question seeks genuine information or personal opinions unknown to the teacher.",
      "A display question is projected on a screen, whereas a referential question is printed in a dictionary.",
      "A display question requires a 250-word essay, whereas a referential question requires a single nod.",
      "Display questions are used only in fluency debates, whereas referential questions are used only in phonemic drills."
    ],
    correctIndex: 0,
    rationale: "Correct! Display questions ('What is the past tense of go?') test linguistic knowledge the teacher already possesses, while referential questions ('What did you do over the weekend?') generate authentic communicative exchange."
  },
  {
    id: "tkt-55",
    module: "TKT",
    category: "TKT Module 3 (Giving Feedback: Content vs Form)",
    question: "After pairs finish telling each other stories about their most memorable childhood trip, the teacher first asks: 'Whose partner had the funniest or most surprising travel story?' before writing four anonymous grammar sentences on the board. Why does the teacher start with that question?",
    options: [
      "To provide content feedback first—validating the communicative purpose of the task—before shifting to language/form feedback.",
      "To test whether students memorized the irregular verb list from the previous semester.",
      "To penalize students who spoke in their first language during the pair work.",
      "To introduce a new reading passage through bottom-up phoneme decoding."
    ],
    correctIndex: 0,
    rationale: "Correct! In communicative language teaching (TKT Module 3), teachers give content feedback first (responding to the message/outcome of the task) before conducting delayed form/error feedback."
  },
  {
    id: "tkt-56",
    module: "TKT",
    category: "TKT Specialist (CLIL: BICS vs CALP)",
    question: "In CLIL and bilingual education (Cummins' distinction), how does BICS (Basic Interpersonal Communicative Skills) differ from CALP (Cognitive Academic Language Proficiency)?",
    options: [
      "BICS refers to everyday conversational fluency in social contexts, whereas CALP refers to the formal, abstract academic language required to analyze, hypothesize, and evaluate subject content.",
      "BICS is a computer programming language, whereas CALP is a phonemic transcription system.",
      "BICS takes 10 years to develop in university, whereas CALP is fully acquired in 2 weeks on the playground.",
      "BICS applies only to academic writing tasks, whereas CALP applies only to casual playground greetings."
    ],
    correctIndex: 0,
    rationale: "Correct! Cummins distinguished BICS (context-embedded social conversation, typically acquired in 1–2 years) from CALP (context-reduced, cognitively demanding academic register, taking 5–7+ years)."
  },
  {
    id: "tkt-57",
    module: "TKT",
    category: "TKT Specialist (CLIL: LOTS vs HOTS)",
    question: "According to Bloom's revised taxonomy as applied in TKT: CLIL, which set of classroom tasks requires Higher-Order Thinking Skills (HOTS) rather than Lower-Order Thinking Skills (LOTS)?",
    options: [
      "Evaluating the environmental trade-offs of two energy policies and designing a sustainable city transport proposal",
      "Labeling the parts of a plant cell from a word bank and matching five dates to historical events",
      "Copying definitions from the glossary and repeating key vocabulary items chorally",
      "Listing the capital cities of Europe in alphabetical order from a map"
    ],
    correctIndex: 0,
    rationale: "Correct! Remembering, identifying, and Understanding are LOTS, whereas Analyzing, Evaluating, and Creating/Designing represent HOTS."
  },
  {
    id: "tkt-58",
    module: "TKT",
    category: "TKT Specialist (Young Learners: Stirrers vs Settlers)",
    question: "In TKT: Young Learners (YL), how do 'stirrer' activities and 'settler' activities help a teacher manage a class of 8-year-olds?",
    options: [
      "Stirrers (e.g., action songs, mingling games) channel energy and wake learners up, while settlers (e.g., coloring, sorting cards, story listening) calm and focus the class when excitement becomes too high.",
      "Stirrers are silent written tests, while settlers are competitive relay races around the playground.",
      "Stirrers are used exclusively for adult business English, while settlers are used for university lectures.",
      "Stirrers punish misbehavior, while settlers replace lesson planning."
    ],
    correctIndex: 0,
    rationale: "Correct! Pacing a Young Learner lesson requires alternating between 'stirrers' (high-energy physical/oral tasks) and 'settlers' (calming, focused individual/table tasks) to maintain optimal arousal and classroom control."
  },
  {
    id: "tkt-59",
    module: "TKT",
    category: "TKT Module 1 (Assessment: Norm-Referenced vs Criterion-Referenced)",
    question: "How does a 'criterion-referenced test' (such as Cambridge B2 First or TKT) differ from a 'norm-referenced test'?",
    options: [
      "A criterion-referenced test measures each candidate against fixed, predetermined competency descriptors regardless of how others perform, whereas a norm-referenced test ranks candidates relative to one another on a bell curve.",
      "A criterion-referenced test passes only the top 5% of candidates each month, whereas a norm-referenced test passes everyone automatically.",
      "A criterion-referenced test has no scoring rubric, whereas a norm-referenced test only assesses speaking.",
      "There is no difference; both terms describe informal classroom warmers."
    ],
    correctIndex: 0,
    rationale: "Correct! Criterion-referenced assessment evaluates whether a test-taker meets specific 'can-do' or band criteria, whereas norm-referenced assessment ranks test-takers in percentiles relative to the cohort."
  },
  {
    id: "tkt-60",
    module: "TKT",
    category: "TKT Module 3 (Wait Time & Learner Processing)",
    question: "Research in classroom interaction (TKT Module 3) shows that when a teacher increases 'wait time' from 1 second to 3–5 seconds after asking an open question, what typically happens?",
    options: [
      "Learners produce longer, more syntactically complex responses, more students volunteer, and confidence increases because they have time to formulate both concept and form.",
      "The classroom immediately falls into chaos and students forget the target language.",
      "Teacher talking time (TTT) increases to 95% of the lesson.",
      "Students become unable to use top-down processing."
    ],
    correctIndex: 0,
    rationale: "Correct! Extending wait time to 3–5 seconds allows L2 learners sufficient cognitive processing time to retrieve lexis and assemble syntax, significantly improving response quality and participation."
  }
];

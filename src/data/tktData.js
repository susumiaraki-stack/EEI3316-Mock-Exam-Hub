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
      "TKT evaluates live classroom teaching performance with students, whereas TOEFL, IELTS, and TOEIC only assess receptive grammar skills.",
      "TKT is an immigration language screening test, whereas TOEFL, IELTS, and TOEIC are exclusively for certifying secondary school teachers.",
      "TKT measures C2-level academic writing ability, whereas TOEFL, IELTS, and TOEIC measure beginner survival vocabulary."
    ],
    correctIndex: 0,
    rationale: "Correct! TKT tests declarative pedagogical knowledge (terminology, methodology, lesson planning, classroom management) using objective tasks. TOEFL, IELTS, and TOEIC are language proficiency tests measuring a candidate's own command of English (B distinguishes CELTA/DELTA, not TKT)."
  },
  {
    id: "tkt-2",
    module: "TKT",
    category: "Core Diagnostic (Target Audience)",
    question: "Who is the primary target audience for the Cambridge TKT (Teaching Knowledge Test)?",
    options: [
      "Undergraduate engineering students applying for international exchange visas.",
      "Pre-service and in-service teachers of English to speakers of other languages.",
      "Multinational human resources directors screening entry-level clerical staff.",
      "Native-speaking secondary students seeking university credit exemptions."
    ],
    correctIndex: 1,
    rationale: "Correct! TKT is specifically designed for pre-service (trainee) and practicing (in-service) teachers of English to speakers of other languages who want to prove their methodological knowledge globally."
  },
  {
    id: "tkt-3",
    module: "TKT",
    category: "Core Diagnostic (Exam Formats)",
    question: "Which standardized exam task specifically requires candidates to summarize and compare visual information presented in charts, graphs, tables, or diagrams in at least 150 words?",
    options: [
      "TOEFL iBT Writing Part 3 (Academic Discussion)",
      "TOEIC Writing Part 1 (Write a Sentence Based on a Picture)",
      "IELTS Academic Writing Task 1",
      "IELTS General Training Writing Task 1"
    ],
    correctIndex: 2,
    rationale: "Correct! IELTS Academic Writing Task 1 requires test-takers to summarize, describe, and compare data from a graph, table, chart, map, or process diagram in 150+ words (20 minutes). General Training Task 1 is a letter; TOEFL Writing includes Build a Sentence, Email, and Academic Discussion."
  },
  {
    id: "tkt-4",
    module: "TKT",
    category: "Core Diagnostic (TKT Module 1/3)",
    question: "Instead of asking the ineffective question 'Do you understand?' after presenting a new grammar structure or lexical item, what should a teacher use to verify comprehension of meaning?",
    options: [
      "Instruction Checking Questions (ICQs)",
      "Concept Checking Questions (CCQs)",
      "Rhetorical Purpose Questions",
      "Summative Placement Prompts"
    ],
    correctIndex: 1,
    rationale: "Correct! Concept Checking Questions (CCQs) isolate the core meaning/timelines of target grammar or vocabulary (e.g., for 'used to': 'Did it happen in the past? Yes. Does it happen now? No.'). ICQs check procedural task instructions."
  },
  {
    id: "tkt-5",
    module: "TKT",
    category: "Core Diagnostic (TKT Module 3)",
    question: "After explaining a pair-work roleplay activity, the teacher asks the class: 'Are you working individually or in pairs?' and 'How many minutes do you have?' What type of questions are these?",
    options: [
      "Concept Checking Questions (CCQs)",
      "Instruction Checking Questions (ICQs)",
      "Diagnostic Elicitation Prompts",
      "Guided Discovery Questions"
    ],
    correctIndex: 1,
    rationale: "Correct! In TKT Module 3 (Managing the Teaching and Learning Process), Instruction Checking Questions (ICQs) confirm that learners understand the logistics, grouping, and time limits of an activity before starting."
  },
  {
    id: "tkt-6",
    module: "TKT",
    category: "Core Diagnostic (TKT Module 1 Phonology)",
    question: "In phonology, two words that differ in meaning by only a single phoneme in the exact same position—such as 'ship' (/ʃɪp/) and 'sheep' (/ʃiːp/)—are known as a:",
    options: [
      "Lexical set",
      "Minimal pair",
      "Diphthong cluster",
      "False friend (cognate)"
    ],
    correctIndex: 1,
    rationale: "Correct! A minimal pair consists of two words that vary by only a single sound (phoneme) in the same position (/ɪ/ vs /iː/) and have distinct meanings. Teachers use minimal pairs for auditory discrimination and pronunciation drills."
  },
  {
    id: "tkt-7",
    module: "TKT",
    category: "Core Diagnostic (TKT Module 2/3)",
    question: "What pedagogical term describes the temporary supportive frameworks—such as sentence starters, visual graphic organizers, or guided models—provided by a teacher or peer to help learners complete a task just beyond their independent capability?",
    options: [
      "Fossilization",
      "Scaffolding",
      "Backwash (Washback)",
      "Statistical Equating"
    ],
    correctIndex: 1,
    rationale: "Correct! Scaffolding (rooted in Vygotskian sociocultural theory / Zone of Proximal Development) refers to temporary instructional support that is gradually removed as the learner gains independence."
  },
  {
    id: "tkt-8",
    module: "TKT",
    category: "Core Diagnostic (Assessment Principles)",
    question: "A course aims to teach students how to write cohesive business reports, but the final exam consists exclusively of 50 isolated multiple-choice vocabulary questions. Which fundamental assessment quality does this test lack?",
    options: [
      "Scorer Reliability",
      "Administrative Practicality",
      "Content Validity",
      "Inter-rater Consistency"
    ],
    correctIndex: 2,
    rationale: "Correct! Content validity refers to the extent to which a test accurately measures the specific skills and syllabus content it claims to assess. Testing report writing via isolated vocabulary MCQs has high reliability/practicality but poor content validity."
  },
  {
    id: "tkt-9",
    module: "TKT",
    category: "Core Diagnostic (TOEIC Suite)",
    question: "What is the primary purpose of the TOEIC Bridge® tests compared to the standard TOEIC Listening & Reading test?",
    options: [
      "It measures C1–C2 executive negotiation skills for senior diplomats.",
      "It measures beginner-to-intermediate (CEFR A1–B1) English proficiency for basic workplace and everyday life contexts.",
      "It evaluates academic laboratory research writing for doctoral candidates.",
      "It assesses classroom pedagogy for primary school teachers."
    ],
    correctIndex: 1,
    rationale: "Correct! While the classic TOEIC L&R spans A1 to C1, TOEIC Bridge® is specifically targeted at beginner to low-intermediate learners (CEFR A1–B1), using accessible everyday and entry-level workplace contexts."
  },
  {
    id: "tkt-10",
    module: "TKT",
    category: "Core Diagnostic (TKT Module 1 Error Analysis)",
    question: "A learner says, 'She teached me yesterday' instead of 'She taught me yesterday.' In TKT Module 1 SLA terminology, this developmental error is an example of:",
    options: [
      "L1 Lexical Interference",
      "Overgeneralization",
      "Register Inappropriacy",
      "Phonemic Assimilation"
    ],
    correctIndex: 1,
    rationale: "Correct! Overgeneralization occurs when a learner applies a newly learned grammatical rule (adding '-ed' to form the regular past simple) too broadly to irregular items ('teach' → 'teached')."
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
      "IELTS 3.5 | TOEFL iBT 30 | TOEIC L&R 400"
    ],
    correctIndex: 0,
    rationale: "Correct! CEFR B2 corresponds to IELTS Band 5.5–6.5, TOEFL iBT 72–94, and TOEIC L&R 785–940 (specifically minimum 400 in Listening + 385 in Reading, and 160 Speaking / 150 Writing)."
  },
  {
    id: "tkt-12",
    module: "TKT",
    category: "CEFR B2 & TKT Bands",
    question: "How are Cambridge TKT results reported for each module, and what band range typically demonstrates strong/comprehensive mastery expected of qualified teachers?",
    options: [
      "Pass / Fail only, with 50% required to pass",
      "Bands 1 to 4, where Band 3 and Band 4 represent comprehensive to extensive teaching knowledge",
      "A numerical scale from 10 to 990 combined across three modules",
      "Bands 1.0 to 9.0 in half-band increments"
    ],
    correctIndex: 1,
    rationale: "Correct! TKT awards Band 1 (limited), Band 2 (basic), Band 3 (breadth and depth of knowledge), or Band 4 (extensive knowledge). There is no 'Fail' grade, and Bands 3–4 are the target benchmark."
  },
  {
    id: "tkt-13",
    module: "TKT",
    category: "TKT Structure & Credentials",
    question: "How does the Cambridge TKT differ from CELTA and DELTA in terms of assessment format and career stage?",
    options: [
      "TKT requires 6 hours of assessed live teaching practice, whereas CELTA is a multiple-choice exam.",
      "TKT consists of 80-question, 80-minute written modules with no observed teaching component; CELTA includes initial observed teaching practice, and DELTA is a Master's-level diploma for experienced teachers.",
      "TKT is only open to native English speakers with 5 years of experience, whereas DELTA is for beginners.",
      "TKT, CELTA, and DELTA are identical exams administered in different countries."
    ],
    correctIndex: 1,
    rationale: "Correct! Each TKT module has 80 objective questions in 80 minutes and does NOT involve observed classroom teaching. CELTA is an initial practical qualification with observed teaching, while DELTA is an advanced (Master's level/RQF Level 7) diploma for experienced practitioners."
  },
  {
    id: "tkt-14",
    module: "TKT",
    category: "TKT Modules Overview",
    question: "A teacher is studying how to select supplementary materials, sequence a 60-minute receptive skills lesson, and write clear Main, Subsidiary, and Personal aims. Which TKT Core Module directly tests these competencies?",
    options: [
      "TKT Module 1: Language and background to language learning and teaching",
      "TKT Module 2: Lesson planning and use of resources for language teaching",
      "TKT Module 3: Managing the teaching and learning process",
      "TKT: CLIL (Content and Language Integrated Learning)"
    ],
    correctIndex: 1,
    rationale: "Correct! TKT Module 2 focuses on planning and preparing a lesson or sequence of lessons (aims, staging, timetable fit, assessment) and selecting/adapting teaching resources."
  },
  {
    id: "tkt-15",
    module: "TKT",
    category: "TKT Module 1 (Form, Meaning, Use)",
    question: "When analyzing the target structure 'Could you possibly open the window?', the teacher notes that it uses 'Modal + Subject + Adverb + Base Verb' (1), expresses a request (2), and is chosen when speaking politely to a stranger or superior (3). What do (1), (2), and (3) represent?",
    options: [
      "(1) Meaning, (2) Phonology, (3) Etymology",
      "(1) Form, (2) Meaning/Function, (3) Use/Register",
      "(1) Use, (2) Collocation, (3) Morphology",
      "(1) Lexis, (2) Syntax, (3) Orthography"
    ],
    correctIndex: 1,
    rationale: "Correct! In TKT Module 1 language analysis, Form refers to the grammatical structure/parts of speech, Meaning/Function refers to the concept or communicative purpose, and Use/Register refers to the social context and level of formality."
  },
  {
    id: "tkt-16",
    module: "TKT",
    category: "TKT Module 1 (Lexis)",
    question: "In TKT Module 1 Lexis, how does a 'lexical set' differ from a 'collocation'?",
    options: [
      "A lexical set is a group of words belonging to the same topic area and part of speech (e.g., apple, banana, mango), whereas a collocation consists of words that habitually co-occur together (e.g., 'heavy rain', 'reach a consensus').",
      "A lexical set refers to words with opposite meanings, whereas a collocation refers to words with identical pronunciation.",
      "A lexical set is a grammatical tense, whereas a collocation is a phonetic symbol.",
      "There is no difference; the terms are interchangeable in Cambridge TKT."
    ],
    correctIndex: 0,
    rationale: "Correct! A lexical set groups words by topic/hyponymy (e.g., modes of transport, fruits), whereas collocations are natural word partnerships that native speakers frequently combine ('heavy rain', not 'strong rain')."
  },
  {
    id: "tkt-17",
    module: "TKT",
    category: "TKT Module 1 (Reading Subskills)",
    question: "A student looks rapidly over a train timetable solely to find the departure time of the 14:30 express to London without reading the rest of the page. Which reading subskill is the student using?",
    options: [
      "Skimming (reading for gist)",
      "Scanning (reading for specific information)",
      "Extensive reading",
      "Inferring writer attitude"
    ],
    correctIndex: 1,
    rationale: "Correct! Scanning is searching a text rapidly for a specific piece of data (a number, name, or time). Skimming is reading quickly to get the overall general idea (gist)."
  },
  {
    id: "tkt-18",
    module: "TKT",
    category: "TKT Module 1 (SLA: Acquisition vs Learning)",
    question: "In Stephen Krashen's Second Language Acquisition theory (tested in TKT Module 1), what is the difference between 'acquisition' and 'learning'?",
    options: [
      "Acquisition is a subconscious process resulting from natural exposure and communicative interaction ('picking up' a language), whereas learning is a conscious process of studying explicit grammar rules.",
      "Acquisition only happens in adults over age 25, whereas learning only happens in infants.",
      "Acquisition refers to memorizing bilingual word lists, whereas learning refers to living abroad.",
      "Acquisition applies only to writing skills, whereas learning applies only to speaking skills."
    ],
    correctIndex: 0,
    rationale: "Correct! Acquisition is subconscious and driven by comprehensible input/exposure (similar to how children acquire L1), while learning involves conscious attention to form and explicit rule instruction."
  },
  {
    id: "tkt-19",
    module: "TKT",
    category: "TKT Module 1 (Error vs Slip)",
    question: "During a lively fluency debate, an upper-intermediate student who mastered third-person '-s' years ago says 'He go to work early' and immediately corrects himself: 'Sorry, he goes to work early.' How does TKT classify this mistake?",
    options: [
      "A developmental error caused by lack of rule knowledge",
      "A slip (caused by tiredness, rapid speech, or distraction that the learner can self-correct)",
      "A fossilized L1 interference error",
      "A pragmatic register failure"
    ],
    correctIndex: 1,
    rationale: "Correct! A 'slip' occurs when a learner already knows the rule but makes a momentary performance lapse due to processing load, anxiety, or speed, and can self-correct once noticed. An 'error' reflects a gap in underlying competence."
  },
  {
    id: "tkt-20",
    module: "TKT",
    category: "TKT Module 1 (Methodologies)",
    question: "Instead of explaining the rule for conditional sentences on the board first, a teacher gives students a short text containing five conditional sentences and a worksheet of guiding questions so students can work out the grammar rules in pairs. Which approach is this?",
    options: [
      "Deductive Presentation (PPP)",
      "Guided Discovery (Inductive Approach)",
      "Total Physical Response (TPR)",
      "Audiolingual Drill Method"
    ],
    correctIndex: 1,
    rationale: "Correct! Guided Discovery is an inductive approach where learners analyze contextualized examples and answer structured prompts to formulate the grammatical rules for themselves."
  },
  {
    id: "tkt-21",
    module: "TKT",
    category: "TKT Module 1 (TBL vs PPP)",
    question: "How does Task-Based Learning (TBL) fundamentally differ from the traditional Presentation–Practice–Production (PPP) framework?",
    options: [
      "In TBL, learners first complete a communicative, outcome-driven task using their existing language resources, followed by a post-task language focus stage based on needs that emerged.",
      "In TBL, students memorize grammar tables silently for 50 minutes without speaking.",
      "In PPP, the teacher never presents target language and forbids controlled practice.",
      "TBL is used exclusively for phonetic transcription drills."
    ],
    correctIndex: 0,
    rationale: "Correct! TBL (Pre-task → Task cycle → Language focus) prioritizes communicative meaning and task completion first, addressing specific language forms afterward. PPP starts by isolating and presenting a pre-selected form."
  },
  {
    id: "tkt-22",
    module: "TKT",
    category: "TKT Module 1 (Assessment Types)",
    question: "At the very start of a semester, a language institute administers a test to 200 newly enrolled students to assign them to A2, B1, B2, or C1 classes. What type of assessment is this?",
    options: [
      "Summative Achievement Test",
      "Placement Test",
      "Formative Portfolio Assessment",
      "Norm-Referenced Exit Exam"
    ],
    correctIndex: 1,
    rationale: "Correct! A Placement Test is given at entry to group learners into homogeneous classes at the appropriate proficiency level. A Diagnostic test identifies specific strengths/weaknesses to inform syllabus teaching, while an Achievement test measures end-of-course mastery."
  },
  {
    id: "tkt-23",
    module: "TKT",
    category: "TKT Module 2 (Lesson Aims)",
    question: "According to TKT Module 2 standards, which of the following is the best-formulated Main Aim for a 60-minute speaking and grammar lesson?",
    options: [
      "To do exercises 3 and 4 on page 42 of the coursebook.",
      "To teach the past simple tense to the class.",
      "Learners will be better able to describe their past holidays using affirmative and negative past simple forms.",
      "To reduce my teacher talking time (TTT) and write more clearly on the whiteboard."
    ],
    correctIndex: 2,
    rationale: "Correct! A strong Main Aim is learner-centered and specifies both the communicative outcome and the target language ('Learners will be better able to...'). Option A is a procedure, Option B is teacher-centered, and Option D is a Personal Aim."
  },
  {
    id: "tkt-24",
    module: "TKT",
    category: "TKT Module 2 (Aim Types)",
    question: "On a lesson plan, a teacher writes: 'To give clearer, shorter task instructions and use ICQs before pair work.' What category of aim is this?",
    options: [
      "Main Aim",
      "Subsidiary Aim",
      "Personal Aim",
      "Timetable Fit"
    ],
    correctIndex: 2,
    rationale: "Correct! A Personal Aim focuses on an aspect of the teacher's own professional development or classroom technique that they want to improve during the lesson."
  },
  {
    id: "tkt-25",
    module: "TKT",
    category: "TKT Module 2 (Timetable Fit)",
    question: "In a formal TKT Module 2 lesson plan, what does the section 'Timetable Fit' describe?",
    options: [
      "The exact minute-by-minute clock times for each classroom activity.",
      "How the current lesson connects to what learners have studied in previous lessons and what they will study in upcoming lessons.",
      "The physical seating arrangement of desks and chairs in the classroom.",
      "The school's academic holiday calendar."
    ],
    correctIndex: 1,
    rationale: "Correct! Timetable fit explains how a single lesson links to prior learning and prepares learners for subsequent lessons in the broader scheme of work."
  },
  {
    id: "tkt-26",
    module: "TKT",
    category: "TKT Module 2 (Receptive Skills Staging)",
    question: "What is the standard pedagogical sequence for staging a receptive skills (Reading or Listening) lesson in TKT Module 2?",
    options: [
      "Detailed comprehension task → Gist task → Lead-in → Post-reading discussion",
      "Lead-in (activating schema) → Gist task (skimming/listening for overall idea) → Detailed comprehension task → Follow-up productive task",
      "Grammar test → Aloud reading by students → Dictionary translation",
      "Silent reading with no task → Immediate essay writing → Lead-in"
    ],
    correctIndex: 1,
    rationale: "Correct! Receptive lessons move from top-down context activation (Lead-in) to general understanding (Gist task) before demanding intensive bottom-up processing (Detailed task), finishing with a personalized productive follow-up."
  },
  {
    id: "tkt-27",
    module: "TKT",
    category: "TKT Module 3 (Warmer vs Lead-in)",
    question: "How does a 'Warmer' differ from a 'Lead-in' at the beginning of a lesson?",
    options: [
      "A Warmer is a quick activity designed to raise students' energy, focus, and mood (not necessarily linked to the lesson topic), whereas a Lead-in specifically introduces the theme/context of the lesson and activates relevant background knowledge (schemata).",
      "A Warmer is always a 30-minute grammar test, whereas a Lead-in is homework correction.",
      "A Warmer is done at the end of a lesson, whereas a Lead-in is done during the break.",
      "A Warmer is only for adults, whereas a Lead-in is only for young learners."
    ],
    correctIndex: 0,
    rationale: "Correct! Warmers break the ice and get students thinking/speaking in English, while Lead-ins specifically link to the target topic or text of the lesson to activate schemata."
  },
  {
    id: "tkt-28",
    module: "TKT",
    category: "TKT Module 3 (Eliciting vs Prompting)",
    question: "In classroom interaction (TKT Module 3), what is the distinction between 'eliciting' and 'prompting'?",
    options: [
      "Eliciting is drawing out language or ideas that learners already know (e.g., via visuals or questions) rather than telling them directly; prompting is giving a hint or partial cue when a learner is stuck during production.",
      "Eliciting is punishing off-task behavior; prompting is grading final exams.",
      "Eliciting means lecturing for 20 minutes; prompting means translating into L1.",
      "Eliciting is used only in writing; prompting is used only in listening."
    ],
    correctIndex: 0,
    rationale: "Correct! Eliciting checks and activates existing student knowledge across the class before teaching, while prompting provides a supportive nudge (e.g., first syllable or gesture) when a student hesitates mid-utterance."
  },
  {
    id: "tkt-29",
    module: "TKT",
    category: "TKT Module 3 (Error Correction Timing)",
    question: "When should a teacher typically use 'immediate (on-the-spot) correction' versus 'delayed correction'?",
    options: [
      "Immediate correction during controlled accuracy practice (e.g., drills) so errors aren't reinforced; delayed correction after communicative fluency activities (e.g., roleplays/debates) so flow and confidence aren't interrupted.",
      "Immediate correction during fluency debates; delayed correction two weeks after controlled drills.",
      "Teachers should interrupt every sentence during fluency speaking to correct pronunciation.",
      "Error correction should never take place in communicative classrooms."
    ],
    correctIndex: 0,
    rationale: "Correct! Correction strategy depends on the stage aim: accuracy stages require immediate feedback (finger correction, recast, elicitation), whereas fluency stages call for monitoring and delayed board feedback at the end."
  },
  {
    id: "tkt-30",
    module: "TKT",
    category: "TKT Specialist Modules (CLIL)",
    question: "In TKT: CLIL (Content and Language Integrated Learning), what are Coyle's '4Cs' that form the conceptual framework of a CLIL lesson?",
    options: [
      "Correction, Comprehension, Collocation, and Clauses",
      "Content, Communication, Cognition, and Culture",
      "Computers, Calculators, Coursebooks, and Chalkboards",
      "Certifying, Classifying, Comparing, and Concluding"
    ],
    correctIndex: 1,
    rationale: "Correct! Coyle's 4Cs of CLIL integrate Content (subject matter like science/history), Communication (language of/for/through learning), Cognition (LOTS & HOTS thinking skills), and Culture (intercultural awareness/citizenship)."
  }
];

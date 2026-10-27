# EEI3316: Standardized Test & Pedagogy Mock Exam Hub

A 100% client-side, interactive Mock Test & Practice Web Application built for the university course **"EEI3316: English for Language Proficiency Tests for Teachers of English"** (targeting **CEFR B2** proficiency & **Cambridge TKT Band 3–4** mastery).

## Key Features
- **5 Comprehensive Course Modules**:
  - **Module A (Core EEI3316 & Cambridge TKT)**: 10 exact course diagnostic items + 20 extended TKT Modules 1, 2 & 3 questions, plus CEFR B2 equivalency tables.
  - **Module B (TOEIC® Workplace Communication)**: 1979 origin (Yasuo Kitaoka / ETS), L&R / S&W / Bridge architecture, 75-minute Reading pacing breakdown, 8 interactive Corporate Collocations cards, and 20-question drill.
  - **Module C (TOEFL iBT® Mastery — 2026 Redesign)**: 1964–2026 evolution quiz, 3 Split-Screen Reading passages (*Why Honey Never Spoils*, *The Return of the Gray Wolf*, *Why Do Some Species Become Invasive?*), 3 Web Speech TTS Listening sets (*Camouflage & Mimicry*, *Supply & Demand*, *Prof. Lewis Office Hours*), 4 Timed R-L-S Speaking tasks with `MediaRecorder` playback, and the 2026 Writing section (10 *Build a Sentence* interactive chip drills, *Write an Email*, and *Write for an Academic Discussion*).
  - **Module D (IELTS Academic — 2026 Computer Update)**: 5 March 2026 computer transition & One Skill Retake quiz, Interactive Band Score Rounding Calculator, Auto-graded Q1–25 Listening Mock (Sections 1–3 with TTS audio), *Urban Trees and the Heat Problem* Reading Mock (Q1–6 TFNG & Q7–13 Sentence Completion), Writing Task 1 (*Westford Commuters Table*) & Task 2 Essay workspace, and Speaking Parts 1–3 Cue Card simulator.
  - **Module E (Full Final Exam Simulator)**: 60-Question Core Syllabus Final or 101-Question Complete Master Bank with strict countdown timer, flag-for-review palette, and diagnostic breakdown.
- **Study Mode vs. Exam Simulation Mode**: Toggle between instant answer validation + pedagogical rationales + audio transcripts (**Study Mode**) and strict timers + play-once audio restriction + post-submission diagnostic (**Exam Mode**).
- **Zero Backend & `localStorage` Persistence**: Saves accuracy by module, CEFR B2 readiness status, bookmarks, and dark/light theme automatically in the browser.

## Local Development

```bash
npm install
npm run dev
```

## Production Build & Vercel Deployment

```bash
npm run build
```

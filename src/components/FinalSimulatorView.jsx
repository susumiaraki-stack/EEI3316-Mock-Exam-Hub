import React, { useState, useMemo } from 'react';
import { tktQuestions } from '../data/tktData';
import { toeicQuestions } from '../data/toeicData';
import {
  toeflTheoryQuestions,
  toeflReadingPassages,
  toeflListeningSets
} from '../data/toeflData';
import { ieltsTheoryQuestions } from '../data/ieltsData';
import MCQQuizEngine from './MCQQuizEngine';
import { Award, Shuffle, CheckSquare, Square } from 'lucide-react';

// Fisher-Yates shuffle
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Shuffle options inside a question while updating `correctIndex`
function shuffleQuestionOptions(question) {
  // Do not shuffle options if the question refers to fixed positions like "First square [A]" or "Select A, B, and C"
  if (question.id === 'toefl-r3-8' || question.id === 'toefl-r3-10') {
    return question;
  }

  const indexedOptions = question.options.map((optText, idx) => ({
    text: optText.replace(/^[A-D]\)\s*/, ''),
    isCorrect: idx === question.correctIndex
  }));

  const shuffled = shuffleArray(indexedOptions);
  const newCorrectIndex = shuffled.findIndex((item) => item.isCorrect);

  return {
    ...question,
    options: shuffled.map((item) => item.text),
    correctIndex: newCorrectIndex
  };
}

export default function FinalSimulatorView({
  mode,
  savedAnswers,
  onAnswerRecord,
  bookmarks,
  onToggleBookmark
}) {
  const [preset, setPreset] = useState('random60'); // 'random30' | 'random60' | 'random100' | 'full201'
  const [shuffleQuestions, setShuffleQuestions] = useState(true);
  const [shuffleChoices, setShuffleChoices] = useState(true);
  const [shuffleSeed, setShuffleSeed] = useState(1);

  const generatedExamQuestions = useMemo(() => {
    const toeflReadingQs = toeflReadingPassages.flatMap((p) => p.questions);
    const toeflListeningQs = toeflListeningSets.flatMap((l) => l.questions);
    const allToeflPool = [...toeflTheoryQuestions, ...toeflReadingQs, ...toeflListeningQs];

    const fullPool = [
      ...tktQuestions,
      ...toeicQuestions,
      ...allToeflPool,
      ...ieltsTheoryQuestions
    ];

    let baseList = [];
    if (preset === 'random30') {
      // Stratified random 30 Qs: 10 TKT + 8 TOEIC + 7 TOEFL + 5 IELTS
      const pick = [
        ...shuffleArray(tktQuestions).slice(0, 10),
        ...shuffleArray(toeicQuestions).slice(0, 8),
        ...shuffleArray(allToeflPool).slice(0, 7),
        ...shuffleArray(ieltsTheoryQuestions).slice(0, 5)
      ];
      baseList = shuffleQuestions ? shuffleArray(pick) : pick;
    } else if (preset === 'random60') {
      // Stratified random 60 Qs drawn from 201 items: 20 TKT + 15 TOEIC + 15 TOEFL + 10 IELTS
      const pick = [
        ...shuffleArray(tktQuestions).slice(0, 20),
        ...shuffleArray(toeicQuestions).slice(0, 15),
        ...shuffleArray(allToeflPool).slice(0, 15),
        ...shuffleArray(ieltsTheoryQuestions).slice(0, 10)
      ];
      baseList = shuffleQuestions ? shuffleArray(pick) : pick;
    } else if (preset === 'random100') {
      // Stratified random 100 Qs drawn from 201 items: 30 TKT + 25 TOEIC + 30 TOEFL + 15 IELTS
      const pick = [
        ...shuffleArray(tktQuestions).slice(0, 30),
        ...shuffleArray(toeicQuestions).slice(0, 25),
        ...shuffleArray(allToeflPool).slice(0, 30),
        ...shuffleArray(ieltsTheoryQuestions).slice(0, 15)
      ];
      baseList = shuffleQuestions ? shuffleArray(pick) : pick;
    } else {
      // All 201 Master Bank questions
      baseList = shuffleQuestions ? shuffleArray(fullPool) : [...fullPool];
    }

    if (shuffleChoices) {
      baseList = baseList.map((q) => shuffleQuestionOptions(q));
    }

    return baseList;
  }, [preset, shuffleQuestions, shuffleChoices, shuffleSeed]);

  const durationMap = {
    random30: 30,
    random60: 60,
    random100: 90,
    full201: 150
  };

  const titleMap = {
    random30: 'EEI3316 Final Simulator — Stratified Random 30 Qs (from 201 Pool)',
    random60: 'EEI3316 Final Simulator — Stratified Random 60 Qs (from 201 Pool)',
    random100: 'EEI3316 Final Simulator — Stratified Random 100 Qs (from 201 Pool)',
    full201: 'EEI3316 Final Simulator — All 201 Master Bank Questions'
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-indigo-950 via-indigo-900 to-slate-900 text-white rounded-2xl p-6 shadow-md space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
              <Award className="w-3.5 h-3.5" />
              Module E • Expanded 201-Question Master Bank & Randomizer
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Full Course Mock Exam (201-Item Pool with Stratified Sampling)
            </h2>
            <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed">
              Draws balanced random subsets from <strong>201 high-difficulty questions</strong> (60 TKT + 50 TOEIC + 66 TOEFL + 25 IELTS) and shuffles both question order and A–D choices so sets do not repeat easily and distractors require genuine analysis.
            </p>
          </div>

          <button
            onClick={() => setShuffleSeed((s) => s + 1)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md transition"
          >
            <Shuffle className="w-4 h-4" />
            สุ่มชุดข้อสอบใหม่ (Generate New Random Exam)
          </button>
        </div>

        {/* Presets & Randomization Controls */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'random30', label: 'Random 30 Qs Sprint (30m)' },
              { id: 'random60', label: 'Random 60 Qs Standard Final (60m)' },
              { id: 'random100', label: 'Random 100 Qs Comprehensive (90m)' },
              { id: 'full201', label: 'All 201 Master Bank Qs (150m)' }
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setPreset(p.id);
                  setShuffleSeed((s) => s + 1);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                  preset === p.id
                    ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-amber-400/80'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Toggle Switches for Question Shuffle & Option Shuffle */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <button
              onClick={() => setShuffleQuestions((prev) => !prev)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold border transition ${
                shuffleQuestions
                  ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-200'
                  : 'bg-white/5 border-white/15 text-slate-300'
              }`}
            >
              {shuffleQuestions ? <CheckSquare className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5" />}
              สลับลำดับข้อสอบ (Shuffle Questions)
            </button>

            <button
              onClick={() => setShuffleChoices((prev) => !prev)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold border transition ${
                shuffleChoices
                  ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-200'
                  : 'bg-white/5 border-white/15 text-slate-300'
              }`}
            >
              {shuffleChoices ? <CheckSquare className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5" />}
              สลับตำแหน่งตัวเลือก A–D (Shuffle Choices)
            </button>
          </div>
        </div>
      </div>

      {/* Quiz Engine */}
      <MCQQuizEngine
        questions={generatedExamQuestions}
        title={`${titleMap[preset]} (Set #${shuffleSeed})`}
        subtitle={`Pool: 201 Questions • Questions: ${shuffleQuestions ? 'Randomized' : 'Standard'} • Choices A–D: ${
          shuffleChoices ? 'Randomized' : 'Standard'
        } • Shortcuts: 1–4 / A–D, Enter`}
        mode={mode}
        examDurationMinutes={durationMap[preset]}
        savedAnswers={savedAnswers}
        onAnswerRecord={onAnswerRecord}
        bookmarks={bookmarks}
        onToggleBookmark={onToggleBookmark}
      />
    </div>
  );
}

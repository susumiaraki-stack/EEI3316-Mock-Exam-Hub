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
  const [preset, setPreset] = useState('core60'); // 'random40' | 'core60' | 'full101'
  const [shuffleQuestions, setShuffleQuestions] = useState(true);
  const [shuffleChoices, setShuffleChoices] = useState(true);
  const [shuffleSeed, setShuffleSeed] = useState(1);

  const generatedExamQuestions = useMemo(() => {
    const toeflReadingQs = toeflReadingPassages.flatMap((p) => p.questions);
    const toeflListeningQs = toeflListeningSets.flatMap((l) => l.questions);

    const fullPool = [
      ...tktQuestions,
      ...toeicQuestions,
      ...toeflTheoryQuestions,
      ...toeflReadingQs,
      ...toeflListeningQs,
      ...ieltsTheoryQuestions
    ];

    const corePool = [
      ...tktQuestions,
      ...toeicQuestions,
      ...toeflTheoryQuestions,
      ...ieltsTheoryQuestions
    ];

    let baseList = [];
    if (preset === 'random40') {
      baseList = shuffleArray(fullPool).slice(0, 40);
    } else if (preset === 'core60') {
      baseList = shuffleQuestions ? shuffleArray(corePool) : [...corePool];
    } else {
      baseList = shuffleQuestions ? shuffleArray(fullPool) : [...fullPool];
    }

    if (shuffleChoices) {
      baseList = baseList.map((q) => shuffleQuestionOptions(q));
    }

    return baseList;
  }, [preset, shuffleQuestions, shuffleChoices, shuffleSeed]);

  const durationMap = {
    random40: 40,
    core60: 60,
    full101: 90
  };

  const titleMap = {
    random40: 'EEI3316 Final Simulator — Random 40-Question Set',
    core60: 'EEI3316 Final Simulator — 60 Core Syllabus Questions',
    full101: 'EEI3316 Final Simulator — 101 Complete Master Bank'
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-indigo-950 via-indigo-900 to-slate-900 text-white rounded-2xl p-6 shadow-md space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
              <Award className="w-3.5 h-3.5" />
              Module E • Comprehensive EEI3316 Final Exam Simulator
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Full Course Mock Exam (Auto-Randomizing Question & Choice Order)
            </h2>
            <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed">
              Automatically shuffles both question order and A–D answer choices so every attempt is a fresh, authentic exam experience across TKT, TOEIC, TOEFL iBT (2026), and IELTS Academic (2026).
            </p>
          </div>

          <button
            onClick={() => setShuffleSeed((s) => s + 1)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md transition"
          >
            <Shuffle className="w-4 h-4" />
            สุ่มชุดข้อสอบใหม่ (Re-Shuffle Exam Now)
          </button>
        </div>

        {/* Presets & Randomization Controls */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'random40', label: 'Random 40 Qs Mock (40m)' },
              { id: 'core60', label: '60-Question Core Syllabus Final (60m)' },
              { id: 'full101', label: '101-Question Complete Master Bank (90m)' }
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
        subtitle={`Questions: ${shuffleQuestions ? 'Randomized' : 'Standard Order'} • Choices A–D: ${
          shuffleChoices ? 'Randomized' : 'Standard Order'
        } • Keyboard Shortcuts: 1–4 / A–D, Enter`}
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

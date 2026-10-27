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
import { Award, ShieldCheck, Layers, Sliders } from 'lucide-react';

export default function FinalSimulatorView({
  mode,
  savedAnswers,
  onAnswerRecord,
  bookmarks,
  onToggleBookmark
}) {
  const [preset, setPreset] = useState('core60'); // 'core60' | 'full101'

  const allObjectiveQuestions = useMemo(() => {
    const toeflReadingQs = toeflReadingPassages.flatMap((p) => p.questions);
    const toeflListeningQs = toeflListeningSets.flatMap((l) => l.questions);

    if (preset === 'core60') {
      // Balanced 60-question EEI3316 Final Exam: 30 TKT + 20 TOEIC + 5 TOEFL Theory + 5 IELTS Theory
      return [
        ...tktQuestions,
        ...toeicQuestions,
        ...toeflTheoryQuestions,
        ...ieltsTheoryQuestions
      ];
    }

    // Complete 101-question Master Bank
    return [
      ...tktQuestions,
      ...toeicQuestions,
      ...toeflTheoryQuestions,
      ...toeflReadingQs,
      ...toeflListeningQs,
      ...ieltsTheoryQuestions
    ];
  }, [preset]);

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-indigo-950 via-indigo-900 to-slate-900 text-white rounded-2xl p-6 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
              <Award className="w-3.5 h-3.5" />
              Module E • Comprehensive EEI3316 Final Exam Simulator
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Full Course Mock Exam & Diagnostic Assessment
            </h2>
            <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed">
              Integrates Cambridge TKT Modules 1–3, TOEIC Workplace Proficiency, TOEFL iBT (2026 Format), and IELTS Academic (2026 Computer Format) under timed conditions.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setPreset('core60')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition ${
                preset === 'core60'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              60-Question Core Syllabus Final (60m)
            </button>
            <button
              onClick={() => setPreset('full101')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition ${
                preset === 'full101'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              101-Question Complete Master Bank (90m)
            </button>
          </div>
        </div>
      </div>

      {/* Run in Exam Simulation Mode by default or respect top toggle */}
      <MCQQuizEngine
        questions={allObjectiveQuestions}
        title={
          preset === 'core60'
            ? 'EEI3316 Final Exam Simulator (60 Core Questions)'
            : 'EEI3316 Complete Master Question Bank (101 Questions)'
        }
        subtitle="Use Flag for Review to mark uncertain items and press 1–4 / A–D on your keyboard for rapid answering."
        mode={mode}
        examDurationMinutes={preset === 'core60' ? 60 : 90}
        savedAnswers={savedAnswers}
        onAnswerRecord={onAnswerRecord}
        bookmarks={bookmarks}
        onToggleBookmark={onToggleBookmark}
      />
    </div>
  );
}

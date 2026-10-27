import React, { useState } from 'react';
import { toeicArchitecture, corporateCollocations, toeicQuestions } from '../data/toeicData';
import MCQQuizEngine from './MCQQuizEngine';
import { Briefcase, Clock, CheckCircle2, Sparkles, Layers } from 'lucide-react';

export default function TOEICModuleView({
  mode,
  savedAnswers,
  onAnswerRecord,
  bookmarks,
  onToggleBookmark
}) {
  const [activeTab, setActiveTab] = useState('quiz'); // 'quiz' | 'blueprint' | 'collocations'
  const [revealedCollocations, setRevealedCollocations] = useState({});

  const toggleCollocation = (idx) => {
    setRevealedCollocations((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
              <Briefcase className="w-3.5 h-3.5" />
              Module B • Workplace English & ETS TOEIC Suite
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight">
              TOEIC® Listening & Reading, S&W, Bridge & Corporate Collocations
            </h2>
            <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed">
              Started in 1979 in Japan (Yasuo Kitaoka / ETS). Master the 200-question L&R blueprint (10–990 scale, B2 = 785–940), Part 7 time-management strategy, and high-frequency Part 5 corporate collocations.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: 'quiz', label: '50-Question Quiz & Part 5/6/7 Drills' },
              { id: 'blueprint', label: 'Exam Structure & Pacing Strategy' },
              { id: 'collocations', label: '8 Core Corporate Collocations Deck' }
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                  activeTab === t.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white/10 hover:bg-white/20 text-indigo-100'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeTab === 'blueprint' && (
        <div className="space-y-6">
          {/* Listening & Reading Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {toeicArchitecture.sections.map((sec, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3"
              >
                <h3 className="font-bold text-base text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  {sec.section}
                </h3>
                <div className="space-y-2.5">
                  {sec.parts.map((p, j) => (
                    <div
                      key={j}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/70"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">{p.part}</span>
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
                          {p.questions} Qs
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{p.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Reading 75-Minute Pacing Strategy */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              75-Minute TOEIC Reading Pacing Strategy (100 Questions Total)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {toeicArchitecture.pacingStrategy.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/70 dark:border-indigo-800/60 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">{item.segment}</div>
                    <div className="text-xl font-extrabold text-indigo-700 dark:text-indigo-300 my-1">
                      {item.budget}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{item.tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Companion Tests: S&W and TOEIC Bridge */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {toeicArchitecture.companionTests.map((ct, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm"
              >
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">{ct.name}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{ct.details}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'collocations' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                High-Yield Corporate Collocations Interactive Deck
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Click any card to test recall of its contextualized Part 5 workplace sentence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {corporateCollocations.map((item, idx) => {
              const isOpen = !!revealedCollocations[idx];
              return (
                <div
                  key={idx}
                  onClick={() => toggleCollocation(idx)}
                  className="cursor-pointer p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 bg-slate-50/70 dark:bg-slate-800/40 transition space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-extrabold text-indigo-700 dark:text-indigo-300">
                      "{item.phrase}"
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {isOpen ? (
                      <span className="font-medium text-emerald-700 dark:text-emerald-300">{item.example}</span>
                    ) : (
                      <span className="italic text-slate-400">Click to reveal contextual Part 5 sentence example →</span>
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {activeTab === 'quiz' && (
        <MCQQuizEngine
          questions={toeicQuestions}
          title="Module B: TOEIC History, Pacing & Part 5/6/7 Drills (50 Qs)"
          subtitle="Covers 1979 origin, L&R/S&W/Bridge specifications, Part 7 time budgeting, grammar inversions, subjunctives, and corporate collocations."
          mode={mode}
          examDurationMinutes={40}
          savedAnswers={savedAnswers}
          onAnswerRecord={onAnswerRecord}
          bookmarks={bookmarks}
          onToggleBookmark={onToggleBookmark}
        />
      )}
    </div>
  );
}

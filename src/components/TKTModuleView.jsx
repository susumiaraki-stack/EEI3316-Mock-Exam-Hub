import React, { useState } from 'react';
import { tktReferenceCards, tktQuestions } from '../data/tktData';
import MCQQuizEngine from './MCQQuizEngine';
import { BookOpen, CheckCircle, Layers, Filter } from 'lucide-react';

export default function TKTModuleView({
  mode,
  savedAnswers,
  onAnswerRecord,
  bookmarks,
  onToggleBookmark
}) {
  const [subFilter, setSubFilter] = useState('ALL'); // 'ALL' | 'CORE10' | 'M1_3'

  const filteredQuestions =
    subFilter === 'CORE10'
      ? tktQuestions.slice(0, 10)
      : subFilter === 'M1_3'
      ? tktQuestions.slice(10)
      : tktQuestions;

  return (
    <div className="space-y-6">
      {/* Module Banner */}
      <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white rounded-2xl p-6 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
              <BookOpen className="w-3.5 h-3.5" />
              Module A • EEI3316 Core & Cambridge TKT
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Teaching Knowledge Test (TKT) & Assessment Foundations
            </h2>
            <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed">
              Master CEFR B2 score equivalencies, TKT Modules 1–3 (80 Qs / 80 mins per module), SLA concepts (CCQs vs. ICQs, Error vs. Slip, Overgeneralization, Scaffolding), and Lesson Planning frameworks.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-3.5 text-xs space-y-1">
            <div className="font-bold text-indigo-200 uppercase tracking-wider">Question Bank</div>
            <div className="text-2xl font-black text-white">60 Items</div>
            <div className="text-indigo-200">10 Core Diagnostic + 50 TKT M1–M3/CLIL/YL</div>
          </div>
        </div>
      </div>

      {/* Syllabus Reference Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {tktReferenceCards.map((card, i) => (
          <div
            key={i}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  {card.title}
                </h3>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                  {card.badge}
                </span>
              </div>
              <div className="space-y-2">
                {card.items.map((item, j) => (
                  <div
                    key={j}
                    className="text-xs border-b border-slate-100 dark:border-slate-800/80 pb-1.5 last:border-none last:pb-0"
                  >
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{item.label}: </span>
                    <span className="text-slate-600 dark:text-slate-400">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3.5 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
          <Filter className="w-4 h-4 text-indigo-500" />
          <span>Filter Question Set:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'ALL', label: 'All 60 TKT & Core Questions' },
            { id: 'CORE10', label: 'Exact 10 Course Mock Diagnostic Qs (Q1–10)' },
            { id: 'M1_3', label: '50 Extended TKT Modules 1–3, CLIL & YL Qs (Q11–60)' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSubFilter(tab.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                subFilter === tab.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Quiz Engine */}
      <MCQQuizEngine
        questions={filteredQuestions}
        title="Module A: EEI3316 Core & Cambridge TKT Practice"
        subtitle="Covers test purpose, CEFR B2 equivalencies, CCQs/ICQs, phonology, SLA error analysis, and lesson planning."
        mode={mode}
        examDurationMinutes={30}
        savedAnswers={savedAnswers}
        onAnswerRecord={onAnswerRecord}
        bookmarks={bookmarks}
        onToggleBookmark={onToggleBookmark}
      />
    </div>
  );
}

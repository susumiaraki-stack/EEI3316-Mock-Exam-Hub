import React from 'react';
import { tktQuestions } from '../data/tktData';
import { toeicQuestions } from '../data/toeicData';
import {
  toeflTheoryQuestions,
  toeflReadingPassages,
  toeflListeningSets
} from '../data/toeflData';
import { ieltsTheoryQuestions } from '../data/ieltsData';
import {
  BookOpen,
  Briefcase,
  GraduationCap,
  Globe,
  Award,
  CheckCircle2,
  Bookmark,
  TrendingUp,
  RotateCcw,
  ArrowRight,
  ShieldCheck,
  Volume2,
  Mic
} from 'lucide-react';

export default function DashboardView({
  savedAnswers,
  bookmarks,
  onNavigateModule,
  onResetAllProgress,
  onRemoveBookmark
}) {
  // Calculate stats per module from savedAnswers
  const entries = Object.entries(savedAnswers || {});

  const calcModuleStats = (modName, totalAvailable) => {
    const modEntries = entries.filter(([, val]) => val.module === modName);
    const attempted = modEntries.length;
    const correct = modEntries.filter(([, val]) => val.correct).length;
    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
    const completion = Math.min(100, Math.round((attempted / totalAvailable) * 100));
    return { attempted, correct, accuracy, completion, totalAvailable };
  };

  // Totals: TKT = 60, TOEIC = 50, TOEFL = 76 (25 theory + 20 reading + 21 listening + 10 build sentences), IELTS = 63 (25 theory + 25 listening + 13 reading)
  const tktStats = calcModuleStats('TKT', 60);
  const toeicStats = calcModuleStats('TOEIC', 50);
  const toeflStats = calcModuleStats('TOEFL', 76);
  const ieltsStats = calcModuleStats('IELTS', 63);

  const totalAttempted = entries.length;
  const totalCorrect = entries.filter(([, v]) => v.correct).length;
  const overallAccuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

  // Determine CEFR B2 & TKT Band 3–4 readiness
  const getReadinessBadge = () => {
    if (totalAttempted < 10) {
      return {
        status: 'Diagnostic Needed (Complete 10+ Qs)',
        color: 'text-amber-400',
        desc: 'Answer at least 10 practice questions across the modules to calibrate your CEFR B2 & TKT Band 3–4 readiness.'
      };
    }
    if (overallAccuracy >= 80) {
      return {
        status: 'CEFR B2+ Exceeded & TKT Band 4 Ready',
        color: 'text-emerald-400',
        desc: 'Outstanding mastery! Your accuracy corresponds to IELTS 6.5–7.5, TOEFL iBT 90+, TOEIC 850+, and Cambridge TKT Band 4.'
      };
    }
    if (overallAccuracy >= 65) {
      return {
        status: 'CEFR B2 On-Track & TKT Band 3 Ready',
        color: 'text-indigo-300',
        desc: 'Solid proficiency! You meet the target CEFR B2 benchmark (IELTS 5.5–6.5 | TOEFL 72–94 | TOEIC 785–940 | TKT Band 3).'
      };
    }
    return {
      status: 'Developing (CEFR B1 / TKT Band 2)',
      color: 'text-rose-400',
      desc: 'Review the Study Mode pedagogical rationales and collocation drills to raise accuracy above 65% for CEFR B2.'
    };
  };

  const readiness = getReadinessBadge();

  // Map bookmarked question IDs to actual question objects
  const allQuestionsMap = [
    ...tktQuestions,
    ...toeicQuestions,
    ...toeflTheoryQuestions,
    ...toeflReadingPassages.flatMap((p) => p.questions),
    ...toeflListeningSets.flatMap((l) => l.questions),
    ...ieltsTheoryQuestions
  ];

  const bookmarkedItems = allQuestionsMap.filter((q) => bookmarks.includes(q.id));

  const moduleCards = [
    {
      id: 'tkt',
      code: 'Module A',
      title: 'Course Overview & Cambridge TKT',
      icon: BookOpen,
      stats: tktStats,
      accent: 'from-indigo-600 to-indigo-800',
      highlights: [
        '60 High-Yield Questions (10 Core + 50 TKT M1–M3, CLIL, YL)',
        'CEFR B2 Equivalencies & TKT vs. CELTA/DELTA',
        'CCQs vs. ICQs, Phonology, SLA, Lesson Planning & Correction'
      ]
    },
    {
      id: 'toeic',
      code: 'Module B',
      title: 'TOEIC® Workplace Communication',
      icon: Briefcase,
      stats: toeicStats,
      accent: 'from-sky-600 to-indigo-700',
      highlights: [
        '1979 Origin (Yasuo Kitaoka / ETS) & 10–990 Equating',
        '75-Minute Reading Pacing (<20m P5/6, 25m/15m/15m P7)',
        '50-Question Quiz: Collocations, Subjunctives, Inversions & Part 6/7'
      ]
    },
    {
      id: 'toefl',
      code: 'Module C',
      title: 'TOEFL iBT® (2026 Redesign)',
      icon: GraduationCap,
      stats: toeflStats,
      accent: 'from-violet-600 to-indigo-800',
      highlights: [
        '25 Redesign Theory Qs + 3 Timed Reading Passages (20 Qs)',
        '3 Web Speech TTS Listening Sets (21 Qs: Camouflage, Supply/Demand, Lewis)',
        '4 Timed Speaking Tasks + 2026 Writing (10 Sentences, Email, Discussion)'
      ]
    },
    {
      id: 'ielts',
      code: 'Module D',
      title: 'IELTS Academic (2026 Computer Format)',
      icon: Globe,
      stats: ieltsStats,
      accent: 'from-emerald-600 to-teal-800',
      highlights: [
        '25 Theory & Band Descriptor Qs + Band Rounding Calculator',
        'Auto-Graded Q1–25 Listening Mock (Form, Notes, Speaker Matching)',
        'Urban Trees Reading (Q1–13), Westford Table T1, Essay T2 & Cue Card'
      ]
    },
    {
      id: 'final',
      code: 'Module E',
      title: 'Full Final Exam Simulator (201-Q Pool)',
      icon: Award,
      stats: {
        attempted: totalAttempted,
        correct: totalCorrect,
        accuracy: overallAccuracy,
        completion: Math.min(100, Math.round((totalAttempted / 201) * 100)),
        totalAvailable: 201
      },
      accent: 'from-amber-600 to-orange-700',
      highlights: [
        'Draws Stratified Random 30, 60, or 100 Qs from 201 Master Items',
        'Auto-Shuffles Question Order & A–D Choices on Every Attempt',
        'Strict Countdown Timer, Flag-for-Review Palette & Diagnostic'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Hero Analytics Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              EEI3316: English for Language Proficiency Tests for Teachers of English
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
              Standardized Test & Pedagogy Mock Exam Hub
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              Interactive practice & assessment platform targeting <strong>CEFR B2</strong> proficiency and <strong>Cambridge TKT Band 3–4</strong> mastery. Features built-in Web Speech TTS listening, microphone speaking recorders, split-screen academic reading, and 2026 TOEFL/IELTS task simulators.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-1">
              <button
                onClick={() => onNavigateModule('tkt')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-sm transition"
              >
                Start TKT & Core Diagnostic
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigateModule('final')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition"
              >
                <Award className="w-4 h-4 text-amber-400" />
                Launch Full Final Exam Simulator
              </button>
            </div>
          </div>

          {/* CEFR B2 Readiness Card */}
          <div className="lg:col-span-5 bg-slate-950/70 border border-slate-800 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-indigo-400" />
                CEFR B2 & TKT Readiness Indicator
              </span>
              {totalAttempted > 0 && (
                <button
                  onClick={onResetAllProgress}
                  className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-rose-400 transition"
                  title="Clear all saved scores from localStorage"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset Data
                </button>
              )}
            </div>

            <div className="flex items-baseline justify-between gap-4">
              <div>
                <div className={`text-sm sm:text-base font-extrabold ${readiness.color}`}>
                  {readiness.status}
                </div>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{readiness.desc}</p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-3xl font-black font-mono text-white">{overallAccuracy}%</div>
                <div className="text-[11px] text-slate-400">
                  {totalCorrect}/{totalAttempted} Correct
                </div>
              </div>
            </div>

            {/* Module Accuracy Bars */}
            <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-slate-800/80">
              {[
                { label: 'TKT & Pedagogy', stat: tktStats },
                { label: 'TOEIC Workplace', stat: toeicStats },
                { label: 'TOEFL iBT (2026)', stat: toeflStats },
                { label: 'IELTS Academic', stat: ieltsStats }
              ].map((m, idx) => (
                <div key={idx} className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-slate-300">{m.label}</span>
                    <span className="font-mono font-bold text-indigo-400">{m.stat.accuracy}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-indigo-500 h-full transition-all duration-300"
                      style={{ width: `${m.stat.accuracy}%` }}
                    />
                  </div>
                  <div className="text-[10px] text-slate-500 mt-1">
                    {m.stat.attempted} / {m.stat.totalAvailable} items practiced
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5 Core Modules Grid */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
            5 Core Course Modules & Interactive Simulators
          </h2>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            All scores & bookmarks automatically saved to browser localStorage
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {moduleCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400">
                      {card.code}
                    </span>
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${card.accent} text-white flex items-center justify-center shadow-sm`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {card.title}
                  </h3>

                  <ul className="space-y-1.5">
                    {card.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 dark:text-slate-400">
                      Progress: <strong className="text-slate-800 dark:text-slate-200">{card.stats.attempted}/{card.stats.totalAvailable}</strong>
                    </span>
                    <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">
                      {card.stats.accuracy}% Accuracy
                    </span>
                  </div>

                  <button
                    onClick={() => onNavigateModule(card.id)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white text-xs font-bold transition flex items-center justify-center gap-1.5"
                  >
                    <span>Open {card.code}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Built-in Audio & Speech Capabilities Info Card */}
          <div className="bg-gradient-to-br from-indigo-50 to-slate-100 dark:from-slate-900 dark:to-indigo-950/40 border border-indigo-200/70 dark:border-indigo-900/60 rounded-2xl p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                <Volume2 className="w-4 h-4" />
                Zero-Backend Audio & Speech Engine
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Built-in Web Speech TTS & Mic Recorder
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Practice TOEFL and IELTS Listening with browser-native <code>window.speechSynthesis</code> audio tracks (play-once restriction in Exam Mode, toggleable transcripts in Study Mode). Record and replay your TOEFL & IELTS Speaking responses using <code>MediaRecorder</code>.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
              <Mic className="w-4 h-4" />
              <span>100% Client-Side • Ready for Vercel</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bookmarked Questions Section */}
      {bookmarkedItems.length > 0 && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              Bookmarked Review Deck ({bookmarkedItems.length} Saved Questions)
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {bookmarkedItems.map((q) => (
              <div
                key={q.id}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">
                    [{q.module}] {q.category}
                  </span>
                  <button
                    onClick={() => onRemoveBookmark(q.id)}
                    className="text-slate-400 hover:text-rose-500 text-xs"
                  >
                    Remove
                  </button>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                  {q.question}
                </p>
                <p className="text-xs text-emerald-700 dark:text-emerald-300 font-medium">
                  ✓ Answer: {q.options[q.correctIndex]}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

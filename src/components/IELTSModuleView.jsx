import React, { useState } from 'react';
import {
  ieltsTheoryQuestions,
  ieltsListeningMock,
  ieltsReadingMock,
  ieltsWritingSpeakingData
} from '../data/ieltsData';
import MCQQuizEngine from './MCQQuizEngine';
import TTSAudioPlayer from './TTSAudioPlayer';
import SpeakingRecorder from './SpeakingRecorder';
import {
  Globe,
  Headphones,
  BookOpen,
  PenTool,
  Mic,
  CheckCircle2,
  XCircle,
  Calculator,
  Eye,
  EyeOff,
  RotateCcw,
  Sparkles
} from 'lucide-react';

export default function IELTSModuleView({
  mode,
  savedAnswers,
  onAnswerRecord,
  bookmarks,
  onToggleBookmark
}) {
  const [activeTab, setActiveTab] = useState('reading'); // 'theory' | 'listening' | 'reading' | 'writing_speaking'

  // Band Calculator state
  const [bandInputs, setBandInputs] = useState({ L: 6.5, R: 6.5, W: 6.0, S: 6.0 });

  // Listening Mock state (Q1-25)
  const [listeningInputs, setListeningInputs] = useState({});
  const [listeningMcqs, setListeningMcqs] = useState({});
  const [listeningChecked, setListeningChecked] = useState(false);

  // Reading Mock state (Q1-13)
  const [readingTfng, setReadingTfng] = useState({});
  const [readingFill, setReadingFill] = useState({});
  const [readingChecked, setReadingChecked] = useState(false);

  // Writing & Speaking Workspace state
  const [wsSubTab, setWsSubTab] = useState('task1'); // 'task1' | 'task2' | 'speaking'
  const [task1Draft, setTask1Draft] = useState('');
  const [task1Rubric, setTask1Rubric] = useState({});
  const [showTask1Model, setShowTask1Model] = useState(false);

  const [task2Draft, setTask2Draft] = useState('');
  const [task2Rubric, setTask2Rubric] = useState({});
  const [showTask2Model, setShowTask2Model] = useState(false);

  // Calculate IELTS Overall Band with official rounding rules (.25 -> .5, .75 -> 1.0, .125 -> down)
  const rawAvg = (bandInputs.L + bandInputs.R + bandInputs.W + bandInputs.S) / 4;
  const roundedBand = Math.round(rawAvg * 2) / 2;

  const isTextAnswerCorrect = (userVal, acceptedList) => {
    const clean = (userVal || '').trim().toLowerCase().replace(/\s+/g, ' ');
    return acceptedList.some((acc) => acc.toLowerCase() === clean);
  };

  const handleGradeListening = () => {
    setListeningChecked(true);
    if (!onAnswerRecord) return;

    // Record Section 1 (Q1-10)
    ieltsListeningMock.section1.items.forEach((item) => {
      const ok = isTextAnswerCorrect(listeningInputs[item.id], item.acceptedAnswers);
      onAnswerRecord(item.id, 'IELTS', listeningInputs[item.id] || '', ok);
    });
    // Record Section 2 MCQs (Q11-15)
    ieltsListeningMock.section2.mcqs.forEach((m) => {
      const sel = listeningMcqs[m.id];
      if (sel !== undefined) {
        onAnswerRecord(m.id, 'IELTS', sel, sel === m.correctIndex);
      }
    });
    // Record Section 2 Notes (Q16-20)
    ieltsListeningMock.section2.notes.forEach((n) => {
      const ok = isTextAnswerCorrect(listeningInputs[n.id], n.acceptedAnswers);
      onAnswerRecord(n.id, 'IELTS', listeningInputs[n.id] || '', ok);
    });
    // Record Section 3 Matching (Q21-25)
    ieltsListeningMock.section3.questions.forEach((q) => {
      const sel = listeningMcqs[q.id];
      if (sel !== undefined) {
        onAnswerRecord(q.id, 'IELTS', sel, sel === q.correctIndex);
      }
    });
  };

  const handleGradeReading = () => {
    setReadingChecked(true);
    if (!onAnswerRecord) return;

    ieltsReadingMock.tfngQuestions.forEach((q) => {
      const sel = readingTfng[q.id];
      if (sel !== undefined) {
        onAnswerRecord(q.id, 'IELTS', sel, sel === q.correctIndex);
      }
    });

    ieltsReadingMock.sentenceCompletion.forEach((item) => {
      const ok = isTextAnswerCorrect(readingFill[item.id], item.acceptedAnswers);
      onAnswerRecord(item.id, 'IELTS', readingFill[item.id] || '', ok);
    });
  };

  // Compute Listening score out of 25
  const listeningCorrectCount =
    ieltsListeningMock.section1.items.filter((i) =>
      isTextAnswerCorrect(listeningInputs[i.id], i.acceptedAnswers)
    ).length +
    ieltsListeningMock.section2.mcqs.filter((m) => listeningMcqs[m.id] === m.correctIndex).length +
    ieltsListeningMock.section2.notes.filter((n) =>
      isTextAnswerCorrect(listeningInputs[n.id], n.acceptedAnswers)
    ).length +
    ieltsListeningMock.section3.questions.filter((q) => listeningMcqs[q.id] === q.correctIndex).length;

  // Compute Reading score out of 13
  const readingCorrectCount =
    ieltsReadingMock.tfngQuestions.filter((q) => readingTfng[q.id] === q.correctIndex).length +
    ieltsReadingMock.sentenceCompletion.filter((s) =>
      isTextAnswerCorrect(readingFill[s.id], s.acceptedAnswers)
    ).length;

  const countWords = (str) => {
    const c = str.trim();
    return c ? c.split(/\s+/).length : 0;
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-950 text-white rounded-2xl p-6 shadow-md">
        <div className="space-y-1.5 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
            <Globe className="w-3.5 h-3.5" />
            Module D • IELTS Academic Mastery (2026 Computer Format Update)
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight">
            IELTS Academic: 2026 Delivery Changes, Listening, Reading, Writing & Speaking
          </h2>
          <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed">
            Co-owned by British Council, IDP & Cambridge. Covers the 5 March 2026 paper phase-out announcement, One Skill Retake (60 days), Q1–25 Listening Mock, "Urban Trees" Reading Mock (Q1–13), Westford Transport Task 1, Task 2 Essay, and Cue Card Speaking.
          </p>
        </div>

        {/* 4 Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-white/10">
          {[
            { id: 'theory', label: '1. 2026 Updates, Band Rounding & Quiz', icon: Sparkles },
            { id: 'listening', label: '2. Listening Mock (Sections 1–3, Q1–25)', icon: Headphones },
            { id: 'reading', label: '3. Academic Reading: Urban Trees (Q1–13)', icon: BookOpen },
            { id: 'writing_speaking', label: '4. Writing (T1 & T2) + Speaking Simulator', icon: PenTool }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white/10 hover:bg-white/20 text-indigo-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 1: IELTS 2026 THEORY & BAND ROUNDING CALCULATOR */}
      {activeTab === 'theory' && (
        <div className="space-y-5">
          {/* Interactive Band Score Rounding Calculator */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  Interactive IELTS Band Rounding Calculator (.25 → .5 | .75 → Next Whole | .125 → Down)
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Adjust the 4 skill bands to see how official IELTS rounding rules and CEFR B2 (Band 5.5–6.5; ~27–29/40 raw in R/L) apply.
                </p>
              </div>

              <div className="flex items-center gap-4 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 px-4 py-2.5 rounded-xl">
                <div className="text-xs text-slate-600 dark:text-slate-300">
                  <div>Exact Average: <span className="font-mono font-bold">{rawAvg.toFixed(3)}</span></div>
                  <div className="text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold">
                    {roundedBand >= 5.5 && roundedBand <= 6.5
                      ? 'CEFR B2 Target Range'
                      : roundedBand >= 7.0
                      ? 'CEFR C1–C2 Advanced'
                      : 'Below CEFR B2'}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-indigo-600 dark:text-indigo-400">
                    Overall Band
                  </div>
                  <div className="text-2xl font-black text-indigo-700 dark:text-indigo-300 font-mono">
                    {roundedBand.toFixed(1)}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              {['L', 'R', 'W', 'S'].map((skill) => {
                const labels = { L: 'Listening', R: 'Reading', W: 'Writing', S: 'Speaking' };
                return (
                  <div key={skill} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      {labels[skill]} Band
                    </label>
                    <select
                      value={bandInputs[skill]}
                      onChange={(e) =>
                        setBandInputs((prev) => ({ ...prev, [skill]: parseFloat(e.target.value) }))
                      }
                      className="w-full rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 px-2.5 py-1.5 text-sm font-mono font-bold"
                    >
                      {[4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0].map((b) => (
                        <option key={b} value={b}>
                          Band {b.toFixed(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              })}
            </div>
          </div>

          <MCQQuizEngine
            questions={ieltsTheoryQuestions}
            title="IELTS Academic Structure & March 2026 Updates Quiz"
            subtitle="Covers ownership, 5 March 2026 Computer delivery shift, One Skill Retake (60 days), IELTS Online vs. Life Skills, and Band Rounding."
            mode={mode}
            examDurationMinutes={8}
            savedAnswers={savedAnswers}
            onAnswerRecord={onAnswerRecord}
            bookmarks={bookmarks}
            onToggleBookmark={onToggleBookmark}
          />
        </div>
      )}

      {/* TAB 2: IELTS LISTENING MOCK SECTION (Q1–25) */}
      {activeTab === 'listening' && (
        <div className="space-y-6">
          {/* Score Bar */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                IELTS Listening Auto-Graded Mock Test (Questions 1–25)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Play each section's Web Speech TTS audio track and complete Q1–10 (Form), Q11–20 (MCQs & Notes), and Q21–25 (Speaker Matching).
              </p>
            </div>
            <div className="flex items-center gap-2">
              {listeningChecked && (
                <span className="px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-bold">
                  Score: {listeningCorrectCount} / 25 ({Math.round((listeningCorrectCount / 25) * 100)}%)
                </span>
              )}
              <button
                onClick={handleGradeListening}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition"
              >
                Check All 25 Answers
              </button>
              <button
                onClick={() => {
                  setListeningInputs({});
                  setListeningMcqs({});
                  setListeningChecked(false);
                }}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                title="Reset Listening Answers"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Section 1: Green Valley Community Centre (Q1-10) */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
            <div>
              <h4 className="font-bold text-base text-slate-900 dark:text-white">
                {ieltsListeningMock.section1.title}
              </h4>
              <p className="text-xs font-semibold text-rose-600 dark:text-rose-400 mt-0.5">
                {ieltsListeningMock.section1.instructions}
              </p>
            </div>

            <TTSAudioPlayer
              script={ieltsListeningMock.section1.transcript}
              title="IELTS Listening Section 1 — Green Valley Community Centre"
              mode={mode}
              durationEstimate="2:10"
              trackId="ielts-sec-1"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {ieltsListeningMock.section1.items.map((item) => {
                const userVal = listeningInputs[item.id] || '';
                const isOk = isTextAnswerCorrect(userVal, item.acceptedAnswers);
                const showResult = listeningChecked || (mode === 'study' && userVal.trim().length > 0 && listeningChecked);

                return (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 space-y-1.5"
                  >
                    <div className="text-xs font-bold text-slate-500 dark:text-slate-400">
                      Q{item.qNum}. {item.label}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      {item.promptBefore && <span>{item.promptBefore}</span>}
                      <input
                        type="text"
                        value={userVal}
                        onChange={(e) =>
                          setListeningInputs((prev) => ({ ...prev, [item.id]: e.target.value }))
                        }
                        placeholder={`Answer ${item.qNum}`}
                        className={`px-2.5 py-1 rounded-lg border text-sm font-medium w-44 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                          showResult
                            ? isOk
                              ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200'
                              : 'border-rose-500 bg-rose-50 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200'
                            : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900'
                        }`}
                      />
                      {item.promptAfter && <span>{item.promptAfter}</span>}
                    </div>
                    {showResult && (
                      <div className="text-xs flex items-center gap-1.5">
                        {isOk ? (
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                          </span>
                        ) : (
                          <span className="text-rose-600 dark:text-rose-400 font-semibold flex items-center gap-1">
                            <XCircle className="w-3.5 h-3.5" /> Key: {item.acceptedAnswers[0]}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 2: Riverside Nature Park (Q11-20) */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-5">
            <div>
              <h4 className="font-bold text-base text-slate-900 dark:text-white">
                {ieltsListeningMock.section2.title}
              </h4>
              <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                {ieltsListeningMock.section2.instructions}
              </p>
            </div>

            <TTSAudioPlayer
              script={ieltsListeningMock.section2.transcript}
              title="IELTS Listening Section 2 — Riverside Nature Park"
              mode={mode}
              durationEstimate="2:30"
              trackId="ielts-sec-2"
            />

            {/* Q11-15 MCQs */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Questions 11–15: Multiple Choice
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {ieltsListeningMock.section2.mcqs.map((m) => {
                  const sel = listeningMcqs[m.id];
                  const showRes = listeningChecked || (mode === 'study' && sel !== undefined);
                  return (
                    <div
                      key={m.id}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2"
                    >
                      <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                        {m.question}
                      </div>
                      <div className="space-y-1.5">
                        {m.options.map((opt, idx) => {
                          const isSelected = sel === idx;
                          const isCorrect = idx === m.correctIndex;
                          return (
                            <button
                              key={idx}
                              onClick={() => setListeningMcqs((prev) => ({ ...prev, [m.id]: idx }))}
                              className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium border transition flex items-center justify-between ${
                                showRes && isCorrect
                                  ? 'bg-emerald-100 border-emerald-500 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-200'
                                  : showRes && isSelected && !isCorrect
                                  ? 'bg-rose-100 border-rose-500 text-rose-900 dark:bg-rose-950/60 dark:text-rose-200'
                                  : isSelected
                                  ? 'bg-indigo-100 border-indigo-500 text-indigo-900 dark:bg-indigo-950 dark:text-indigo-200'
                                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700'
                              }`}
                            >
                              <span>{opt}</span>
                              {showRes && isCorrect && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Q16-20 One-Word Trail Notes */}
            <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                Questions 16–20: Trail Notes (Write ONE WORD ONLY for each answer)
              </div>
              <div className="space-y-2.5">
                {ieltsListeningMock.section2.notes.map((n) => {
                  const userVal = listeningInputs[n.id] || '';
                  const isOk = isTextAnswerCorrect(userVal, n.acceptedAnswers);
                  return (
                    <div
                      key={n.id}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex flex-wrap items-center gap-2 text-xs sm:text-sm"
                    >
                      <span className="font-bold text-indigo-600 dark:text-indigo-400">Q{n.qNum}.</span>
                      <span>{n.promptBefore}</span>
                      <input
                        type="text"
                        value={userVal}
                        onChange={(e) =>
                          setListeningInputs((prev) => ({ ...prev, [n.id]: e.target.value }))
                        }
                        placeholder={`Q${n.qNum} (1 word)`}
                        className={`px-2.5 py-1 rounded-lg border text-sm font-medium w-36 ${
                          listeningChecked
                            ? isOk
                              ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50'
                              : 'border-rose-500 bg-rose-50 dark:bg-rose-950/50'
                            : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900'
                        }`}
                      />
                      <span>{n.promptAfter}</span>
                      {listeningChecked && (
                        <span className={`ml-auto text-xs font-bold ${isOk ? 'text-emerald-600' : 'text-rose-600'}`}>
                          {isOk ? '✓ Correct' : `Key: ${n.acceptedAnswers[0]}`}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section 3: Speaker Matching A/B/C (Q21-25) */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
            <div>
              <h4 className="font-bold text-base text-slate-900 dark:text-white">
                {ieltsListeningMock.section3.title}
              </h4>
              <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                {ieltsListeningMock.section3.instructions}
              </p>
            </div>

            <TTSAudioPlayer
              script={ieltsListeningMock.section3.transcript}
              title="IELTS Listening Section 3 — Maya, Daniel & Professor Lewis"
              mode={mode}
              durationEstimate="2:05"
              trackId="ielts-sec-3"
            />

            <div className="space-y-2.5">
              {ieltsListeningMock.section3.questions.map((q) => {
                const sel = listeningMcqs[q.id];
                const showRes = listeningChecked || (mode === 'study' && sel !== undefined);
                return (
                  <div
                    key={q.id}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-3"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      {q.question}
                    </span>
                    <div className="flex items-center gap-2">
                      {q.options.map((opt, idx) => {
                        const isSelected = sel === idx;
                        const isCorrect = idx === q.correctIndex;
                        return (
                          <button
                            key={idx}
                            onClick={() => setListeningMcqs((prev) => ({ ...prev, [q.id]: idx }))}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition ${
                              showRes && isCorrect
                                ? 'bg-emerald-600 text-white border-emerald-600'
                                : showRes && isSelected && !isCorrect
                                ? 'bg-rose-600 text-white border-rose-600'
                                : isSelected
                                ? 'bg-indigo-600 text-white border-indigo-600'
                                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: IELTS ACADEMIC READING MOCK ("Urban Trees and the Heat Problem", Q1–13) */}
      {activeTab === 'reading' && (
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                {ieltsReadingMock.title} (Questions 1–13)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Questions 1–6: TRUE / FALSE / NOT GIVEN • Questions 7–13: Sentence Completion (NO MORE THAN TWO WORDS)
              </p>
            </div>
            <div className="flex items-center gap-2">
              {readingChecked && (
                <span className="px-3 py-1.5 rounded-xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-bold">
                  Reading Score: {readingCorrectCount} / 13
                </span>
              )}
              <button
                onClick={handleGradeReading}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition"
              >
                Check Reading Q1–13
              </button>
              <button
                onClick={() => {
                  setReadingTfng({});
                  setReadingFill({});
                  setReadingChecked(false);
                }}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                title="Reset Reading"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            {/* Left Pane: Passage */}
            <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm lg:sticky lg:top-20 max-h-[78vh] overflow-y-auto space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  IELTS Academic Reading Passage 1
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-serif mt-0.5">
                  Urban Trees and the Heat Problem
                </h4>
              </div>
              <div className="space-y-4 font-serif text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
                {ieltsReadingMock.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Right Pane: Q1–6 TFNG & Q7–13 Sentence Completion */}
            <div className="lg:col-span-6 space-y-5">
              {/* Q1-6 TFNG */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3.5">
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    Questions 1–6: True / False / Not Given
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Do the following statements agree with the information given in Reading Passage 1?
                  </p>
                </div>

                {ieltsReadingMock.tfngQuestions.map((q) => {
                  const sel = readingTfng[q.id];
                  const showRes = readingChecked || (mode === 'study' && sel !== undefined);
                  return (
                    <div
                      key={q.id}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2"
                    >
                      <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                        {q.statement}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {q.options.map((opt, idx) => {
                          const isSelected = sel === idx;
                          const isCorrect = idx === q.correctIndex;
                          return (
                            <button
                              key={opt}
                              onClick={() => setReadingTfng((prev) => ({ ...prev, [q.id]: idx }))}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition ${
                                showRes && isCorrect
                                  ? 'bg-emerald-600 text-white border-emerald-600'
                                  : showRes && isSelected && !isCorrect
                                  ? 'bg-rose-600 text-white border-rose-600'
                                  : isSelected
                                  ? 'bg-indigo-600 text-white border-indigo-600'
                                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                      {showRes && (
                        <p className="text-xs text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200/80 dark:border-slate-800">
                          {q.rationale}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Q7-13 Sentence Completion */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3.5">
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                    Questions 7–13: Sentence Completion
                  </h4>
                  <p className="text-xs font-semibold text-rose-600 dark:text-rose-400">
                    Choose NO MORE THAN TWO WORDS from the passage for each answer.
                  </p>
                </div>

                {ieltsReadingMock.sentenceCompletion.map((item) => {
                  const userVal = readingFill[item.id] || '';
                  const isOk = isTextAnswerCorrect(userVal, item.acceptedAnswers);
                  return (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-1.5 text-xs sm:text-sm"
                    >
                      <div className="leading-relaxed">
                        <span>{item.promptBefore} </span>
                        <input
                          type="text"
                          value={userVal}
                          onChange={(e) =>
                            setReadingFill((prev) => ({ ...prev, [item.id]: e.target.value }))
                          }
                          placeholder={`Q${item.qNum}`}
                          className={`px-2.5 py-1 mx-1 rounded-lg border text-sm font-semibold w-48 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                            readingChecked
                              ? isOk
                                ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200'
                                : 'border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200'
                              : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900'
                          }`}
                        />
                        <span> {item.promptAfter}</span>
                      </div>

                      {readingChecked && (
                        <div className="text-xs pt-1 flex flex-col gap-0.5">
                          <span className={`font-bold ${isOk ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                            {isOk ? '✓ Correct!' : `✗ Official Answer Key: "${item.acceptedAnswers[0]}"`}
                          </span>
                          <span className="text-slate-500 dark:text-slate-400">{item.explanation}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: IELTS WRITING & SPEAKING PRACTICE WORKSPACE */}
      {activeTab === 'writing_speaking' && (
        <div className="space-y-5">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-wrap gap-2">
            {[
              { id: 'task1', label: 'Writing Task 1: Westford Commuters Table (20m, >150w)' },
              { id: 'task2', label: 'Writing Task 2: University Purpose Essay (40m, >250w)' },
              { id: 'speaking', label: 'Speaking Parts 1, 2 (Cue Card Timer) & 3 Simulator' }
            ].map((st) => (
              <button
                key={st.id}
                onClick={() => setWsSubTab(st.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                  wsSubTab === st.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>

          {/* WRITING TASK 1 */}
          {wsSubTab === 'task1' && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm space-y-5">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {ieltsWritingSpeakingData.writingTask1.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 whitespace-pre-line mt-1">
                  {ieltsWritingSpeakingData.writingTask1.prompt}
                </p>
              </div>

              {/* Westford Commuters Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-indigo-50 dark:bg-indigo-950/60 text-indigo-900 dark:text-indigo-200 font-bold">
                    <tr>
                      {ieltsWritingSpeakingData.writingTask1.headers.map((h, i) => (
                        <th key={i} className="px-4 py-2.5 border-b border-slate-200 dark:border-slate-800">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {ieltsWritingSpeakingData.writingTask1.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="bg-white dark:bg-slate-900">
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className={`px-4 py-2.5 ${cIdx === 0 ? 'font-bold text-slate-900 dark:text-white' : 'font-mono text-slate-700 dark:text-slate-300'}`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Interactive Rubric Checklist */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Interactive IELTS Band Descriptors Self-Audit Checklist:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {ieltsWritingSpeakingData.writingTask1.rubricChecklist.map((r, i) => (
                    <label
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={!!task1Rubric[i]}
                        onChange={() => setTask1Rubric((prev) => ({ ...prev, [i]: !prev[i] }))}
                        className="mt-1 rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <div className="text-xs">
                        <div className="font-bold text-slate-900 dark:text-white">{r.criterion}</div>
                        <div className="text-slate-600 dark:text-slate-400">{r.detail}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Editor + Live Word Counter */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    Your Task 1 Summary Report (Minimum 150 words):
                  </span>
                  <span
                    className={`font-mono font-bold px-2.5 py-1 rounded ${
                      countWords(task1Draft) >= 150
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                    }`}
                  >
                    {countWords(task1Draft)} / 150+ words
                  </span>
                </div>
                <textarea
                  rows={9}
                  value={task1Draft}
                  onChange={(e) => setTask1Draft(e.target.value)}
                  placeholder="Write your introduction, overview paragraph, and specific analytical comparisons of Westford commuters (2000, 2010, 2025)..."
                  className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 p-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                onClick={() => setShowTask1Model(!showTask1Model)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition"
              >
                {showTask1Model ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                {showTask1Model ? 'Hide Model Band 8.0 Report' : 'Compare with Model Band 8.0 Report'}
              </button>

              {showTask1Model && (
                <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-1.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                    Model Band 8.0 Task 1 Response (188 Words)
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 whitespace-pre-line leading-relaxed font-serif">
                    {ieltsWritingSpeakingData.writingTask1.modelResponse}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* WRITING TASK 2 */}
          {wsSubTab === 'task2' && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm space-y-5">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {ieltsWritingSpeakingData.writingTask2.title}
                </h3>
                <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 mt-2">
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white whitespace-pre-line leading-relaxed">
                    {ieltsWritingSpeakingData.writingTask2.prompt}
                  </p>
                </div>
              </div>

              {/* Rubric Checklist */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {ieltsWritingSpeakingData.writingTask2.rubricChecklist.map((r, i) => (
                  <label
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={!!task2Rubric[i]}
                      onChange={() => setTask2Rubric((prev) => ({ ...prev, [i]: !prev[i] }))}
                      className="mt-1 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <div className="text-xs">
                      <div className="font-bold text-slate-900 dark:text-white">{r.criterion}</div>
                      <div className="text-slate-600 dark:text-slate-400">{r.detail}</div>
                    </div>
                  </label>
                ))}
              </div>

              {/* Editor + Live Word Counter */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    Your Task 2 Essay Response (Minimum 250 words):
                  </span>
                  <span
                    className={`font-mono font-bold px-2.5 py-1 rounded ${
                      countWords(task2Draft) >= 250
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                    }`}
                  >
                    {countWords(task2Draft)} / 250+ words
                  </span>
                </div>
                <textarea
                  rows={11}
                  value={task2Draft}
                  onChange={(e) => setTask2Draft(e.target.value)}
                  placeholder="Write your 4-paragraph essay discussing both views (employment preparation vs. broad academic knowledge) and giving your own opinion..."
                  className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 p-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                onClick={() => setShowTask2Model(!showTask2Model)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition"
              >
                {showTask2Model ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                {showTask2Model ? 'Hide Model Essay' : 'Compare with Model Band 8.0 Essay'}
              </button>

              {showTask2Model && (
                <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-1.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                    Model Band 8.0 Task 2 Essay (275 Words)
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 whitespace-pre-line leading-relaxed font-serif">
                    {ieltsWritingSpeakingData.writingTask2.modelResponse}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* SPEAKING PARTS 1, 2 & 3 SIMULATOR */}
          {wsSubTab === 'speaking' && (
            <div className="space-y-5">
              {/* Part 1 Prompt Deck */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3">
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  Part 1: Introduction & Interview (4–5 Minutes)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  {ieltsWritingSpeakingData.speakingSimulator.part1Topics.map((t, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2"
                    >
                      <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                        {t.topic}
                      </div>
                      <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
                        {t.questions.map((q, j) => (
                          <li key={j}>{q}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Part 2 Interactive Cue Card + 1m Prep / 2m Speak Timer & Recorder */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
                <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border-2 border-amber-300 dark:border-amber-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                      IELTS Speaking Part 2 Official Candidate Task Card (Cue Card)
                    </span>
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-amber-200/80 dark:bg-amber-900 text-amber-900 dark:text-amber-200">
                      1 Min Prep • 2 Mins Speak
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {ieltsWritingSpeakingData.speakingSimulator.part2CueCard.topic}
                  </h4>
                  <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <div className="font-semibold mb-1">You should say:</div>
                    <ul className="list-disc list-inside space-y-1">
                      {ieltsWritingSpeakingData.speakingSimulator.part2CueCard.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                  {mode === 'study' && (
                    <div className="text-xs text-amber-900 dark:text-amber-200 pt-2 border-t border-amber-200 dark:border-amber-800/60">
                      <span className="font-bold">1-Minute Note-Taking Strategy: </span>
                      {ieltsWritingSpeakingData.speakingSimulator.part2CueCard.modelNotes}
                    </div>
                  )}
                </div>

                <SpeakingRecorder
                  prepSeconds={60}
                  speakSeconds={120}
                  readSeconds={0}
                  taskTitle="IELTS Speaking Part 2 Cue Card"
                />
              </div>

              {/* Part 3 Discussion Deck */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-3">
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  Part 3: Two-Way Abstract Discussion — Learning Skills (4–5 Minutes)
                </h3>
                <div className="space-y-2.5">
                  {ieltsWritingSpeakingData.speakingSimulator.part3Questions.map((item, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-1"
                    >
                      <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{item.category}</div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">{item.q}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 italic">{item.tip}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import {
  toeflTheoryQuestions,
  toeflReadingPassages,
  toeflListeningSets,
  toeflSpeakingTasks,
  toeflWritingData
} from '../data/toeflData';
import MCQQuizEngine from './MCQQuizEngine';
import TTSAudioPlayer from './TTSAudioPlayer';
import SpeakingRecorder from './SpeakingRecorder';
import {
  GraduationCap,
  BookOpen,
  Headphones,
  Mic,
  PenTool,
  Clock,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Eye,
  EyeOff,
  Sparkles
} from 'lucide-react';

export default function TOEFLModuleView({
  mode,
  savedAnswers,
  onAnswerRecord,
  bookmarks,
  onToggleBookmark
}) {
  const [activeTab, setActiveTab] = useState('reading'); // 'theory' | 'reading' | 'listening' | 'speaking' | 'writing'

  // Reading state
  const [selectedPassageIdx, setSelectedPassageIdx] = useState(0);
  const currentPassage = toeflReadingPassages[selectedPassageIdx];
  const [readingTimer, setReadingTimer] = useState(currentPassage.timeMinutes * 60);
  const [readingTimerRunning, setReadingTimerRunning] = useState(false);

  useEffect(() => {
    setReadingTimer(toeflReadingPassages[selectedPassageIdx].timeMinutes * 60);
    setReadingTimerRunning(mode === 'exam');
  }, [selectedPassageIdx, mode]);

  useEffect(() => {
    if (!readingTimerRunning) return;
    const interval = setInterval(() => {
      setReadingTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [readingTimerRunning]);

  // Listening state
  const [selectedListeningIdx, setSelectedListeningIdx] = useState(0);
  const currentListening = toeflListeningSets[selectedListeningIdx];

  // Speaking state
  const [selectedSpeakingIdx, setSelectedSpeakingIdx] = useState(0);
  const currentSpeaking = toeflSpeakingTasks[selectedSpeakingIdx];

  // Writing state (Part 1 Build a Sentence, Part 2 Email, Part 3 Academic Discussion)
  const [writingSubTab, setWritingSubTab] = useState('part1'); // 'part1' | 'part2' | 'part3'
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const currentSentenceObj = toeflWritingData.buildSentences[sentenceIndex];
  const [availableChunks, setAvailableChunks] = useState([]);
  const [builtChunks, setBuiltChunks] = useState([]);
  const [sentenceChecked, setSentenceChecked] = useState(null); // null | true | false

  // Email & Academic Discussion state
  const [emailDraft, setEmailDraft] = useState('');
  const [showEmailModel, setShowEmailModel] = useState(false);
  const [discussionDraft, setDiscussionDraft] = useState('');
  const [showDiscussionModel, setShowDiscussionModel] = useState(false);
  const [discussionTimer, setDiscussionTimer] = useState(600); // 10 mins
  const [discussionRunning, setDiscussionRunning] = useState(false);

  useEffect(() => {
    const item = toeflWritingData.buildSentences[sentenceIndex];
    setAvailableChunks(item.chunks.map((text, idx) => ({ id: `${item.id}-${idx}`, text })));
    setBuiltChunks([]);
    setSentenceChecked(null);
  }, [sentenceIndex]);

  useEffect(() => {
    if (!discussionRunning) return;
    const t = setInterval(() => {
      setDiscussionTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, [discussionRunning]);

  const handleAddChunk = (chunk) => {
    setAvailableChunks((prev) => prev.filter((c) => c.id !== chunk.id));
    setBuiltChunks((prev) => [...prev, chunk]);
    setSentenceChecked(null);
  };

  const handleRemoveChunk = (chunk) => {
    setBuiltChunks((prev) => prev.filter((c) => c.id !== chunk.id));
    setAvailableChunks((prev) => [...prev, chunk]);
    setSentenceChecked(null);
  };

  const handleCheckSentence = () => {
    const userStr = builtChunks.map((c) => c.text).join(' ').trim();
    const isCorrect = userStr === currentSentenceObj.target;
    setSentenceChecked(isCorrect);
    if (onAnswerRecord) {
      onAnswerRecord(`toefl-bs-${currentSentenceObj.number}`, 'TOEFL', userStr, isCorrect);
    }
  };

  const handleResetSentence = () => {
    setAvailableChunks(
      currentSentenceObj.chunks.map((text, idx) => ({ id: `${currentSentenceObj.id}-${idx}`, text }))
    );
    setBuiltChunks([]);
    setSentenceChecked(null);
  };

  const countWords = (str) => {
    const cleaned = str.trim();
    if (!cleaned) return 0;
    return cleaned.split(/\s+/).length;
  };

  const formatSec = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec < 10 ? '0' : ''}${sec}`;
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white rounded-2xl p-6 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
              <GraduationCap className="w-3.5 h-3.5" />
              Module C • TOEFL iBT® Mastery (Including 2026 Redesign)
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight">
              TOEFL iBT® Four-Skills Simulator & 2026 Redesign Lab
            </h2>
            <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed">
              Includes 1964–2026 Evolution, Split-Screen Academic Reading Passages, Web Speech TTS Listening Lectures, Timed R-L-S Speaking Simulator, and the 2026 Writing Format (Build a Sentence, Write an Email, Academic Discussion).
            </p>
          </div>
        </div>

        {/* 5 Skill Tabs */}
        <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-white/10">
          {[
            { id: 'theory', label: '1. History & 2026 Theory', icon: Sparkles },
            { id: 'reading', label: '2. Reading (3 Passages, 20 Qs)', icon: BookOpen },
            { id: 'listening', label: '3. Listening TTS (3 Sets, 21 Qs)', icon: Headphones },
            { id: 'speaking', label: '4. Speaking Simulator (4 Tasks)', icon: Mic },
            { id: 'writing', label: '5. Writing 2026 (Sentences, Email, Discussion)', icon: PenTool }
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

      {/* TAB 1: THEORY QUIZ */}
      {activeTab === 'theory' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5">
            {[
              { era: "1962 / 1964: PBT", desc: "National Council formed 1962; first test 1964. Listening, Structure & Written Expression, Reading." },
              { era: "1998: CBT", desc: "Computer-Based Test introduced adaptive Listening/Structure and compulsory computer essay writing." },
              { era: "2005: TOEFL iBT", desc: "Internet-Based Test replaced discrete grammar with Speaking and integrated Read-Listen-Speak/Write tasks (0–120 scale)." },
              { era: "2026 Redesign", desc: "Multistage adaptive R & L, new 1–6 CEFR-aligned scale alongside 0–120, plus Build a Sentence, Write an Email & Interview." }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm"
              >
                <div className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400 uppercase mb-1">{item.era}</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <MCQQuizEngine
            questions={toeflTheoryQuestions}
            title="TOEFL History & 2026 Redesign Theory Quiz"
            subtitle="Test your knowledge of TOEFL generations (1964–2026), CEFR B2 (72–94) benchmarks, and new adaptive tasks."
            mode={mode}
            examDurationMinutes={8}
            savedAnswers={savedAnswers}
            onAnswerRecord={onAnswerRecord}
            bookmarks={bookmarks}
            onToggleBookmark={onToggleBookmark}
          />
        </div>
      )}

      {/* TAB 2: READING SPLIT-SCREEN PASSAGES */}
      {activeTab === 'reading' && (
        <div className="space-y-4">
          {/* Passage Selector + Timer */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {toeflReadingPassages.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPassageIdx(idx)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                    selectedPassageIdx === idx
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300'
                  }`}
                >
                  {p.title} ({p.timeMinutes}m • {p.questions.length} Qs)
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 font-mono text-sm font-bold text-slate-800 dark:text-slate-200">
                <Clock className="w-4 h-4 text-indigo-500" />
                <span>{formatSec(readingTimer)}</span>
              </div>
              <button
                onClick={() => setReadingTimerRunning(!readingTimerRunning)}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition"
              >
                {readingTimerRunning ? 'Pause Timer' : 'Start Timer'}
              </button>
            </div>
          </div>

          {/* Split-Screen Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            {/* Left Pane: Academic Reading Passage */}
            <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm lg:sticky lg:top-20 max-h-[78vh] overflow-y-auto space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  TOEFL iBT Academic Reading Passage
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5 font-serif">
                  {currentPassage.title}
                </h3>
              </div>
              <div className="space-y-4 font-serif text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
                {currentPassage.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Right Pane: Interactive Questions */}
            <div className="lg:col-span-6">
              <MCQQuizEngine
                questions={currentPassage.questions}
                title={currentPassage.title}
                subtitle={`Recommended Time: ${currentPassage.timeMinutes} Minutes • ${currentPassage.questions.length} Comprehension Questions`}
                mode={mode}
                examDurationMinutes={currentPassage.timeMinutes}
                savedAnswers={savedAnswers}
                onAnswerRecord={onAnswerRecord}
                bookmarks={bookmarks}
                onToggleBookmark={onToggleBookmark}
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: LISTENING SIMULATOR */}
      {activeTab === 'listening' && (
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-wrap gap-2">
            {toeflListeningSets.map((set, idx) => (
              <button
                key={set.id}
                onClick={() => setSelectedListeningIdx(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                  selectedListeningIdx === idx
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300'
                }`}
              >
                {set.title} ({set.questions.length} Qs)
              </button>
            ))}
          </div>

          <TTSAudioPlayer
            script={currentListening.transcript}
            title={currentListening.title}
            mode={mode}
            durationEstimate={currentListening.durationEstimate}
            trackId={currentListening.id}
          />

          <MCQQuizEngine
            questions={currentListening.questions}
            title={currentListening.title}
            subtitle={`${currentListening.type} • Listen to the TTS audio above and answer all ${currentListening.questions.length} questions.`}
            mode={mode}
            examDurationMinutes={10}
            savedAnswers={savedAnswers}
            onAnswerRecord={onAnswerRecord}
            bookmarks={bookmarks}
            onToggleBookmark={onToggleBookmark}
          />
        </div>
      )}

      {/* TAB 4: SPEAKING SIMULATOR */}
      {activeTab === 'speaking' && (
        <div className="space-y-5">
          {/* Task Selector */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-wrap gap-2">
            {toeflSpeakingTasks.map((task, idx) => (
              <button
                key={task.id}
                onClick={() => setSelectedSpeakingIdx(idx)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                  selectedSpeakingIdx === idx
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300'
                }`}
              >
                {task.title} ({task.prepSeconds}s / {task.speakSeconds}s)
              </button>
            ))}
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {currentSpeaking.type}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{currentSpeaking.title}</h3>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {currentSpeaking.readSeconds ? `Read: ${currentSpeaking.readSeconds}s | ` : ''}
                Prep: {currentSpeaking.prepSeconds}s | Speak: {currentSpeaking.speakSeconds}s
              </span>
            </div>

            {currentSpeaking.readingText && (
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Reading Passage ({currentSpeaking.readSeconds} Seconds)
                </div>
                <p className="text-xs sm:text-sm font-serif text-slate-800 dark:text-slate-200 whitespace-pre-line leading-relaxed">
                  {currentSpeaking.readingText}
                </p>
              </div>
            )}

            {currentSpeaking.listeningScript && (
              <TTSAudioPlayer
                script={currentSpeaking.listeningScript}
                title={`Integrated Listening Audio — ${currentSpeaking.title}`}
                mode={mode}
                durationEstimate="1:30"
                trackId={currentSpeaking.id}
              />
            )}

            <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 mb-1">
                Speaking Prompt
              </div>
              <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                {currentSpeaking.prompt}
              </p>
            </div>

            <SpeakingRecorder
              prepSeconds={currentSpeaking.prepSeconds}
              speakSeconds={currentSpeaking.speakSeconds}
              readSeconds={currentSpeaking.readSeconds || 0}
              taskTitle={currentSpeaking.title}
            />

            {mode === 'study' && (
              <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/70 space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                  High-Scoring R-L-S Structural Template Guide
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                  {currentSpeaking.templateGuide}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 5: WRITING SIMULATOR (2026 FORMAT) */}
      {activeTab === 'writing' && (
        <div className="space-y-5">
          {/* Sub-navigation for the 3 parts of 2026 TOEFL Writing (23 mins base time) */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'part1', label: 'Part 1: Build a Sentence (10 Interactive Drills)' },
                { id: 'part2', label: 'Part 2: Write an Email (Prof. Martinez Conflict)' },
                { id: 'part3', label: 'Part 3: Academic Discussion (Recorded Lectures Debate)' }
              ].map((st) => (
                <button
                  key={st.id}
                  onClick={() => setWritingSubTab(st.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition ${
                    writingSubTab === st.id
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300'
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              2026 Writing Section Base Time: 23 Minutes
            </span>
          </div>

          {/* Part 1: Build a Sentence */}
          {writingSubTab === 'part1' && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    2026 TOEFL iBT Task • Syntax & Clause Construction
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Part 1: Build a Sentence (Item {sentenceIndex + 1} of {toeflWritingData.buildSentences.length})
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Click the scrambled word/phrase chips in the correct grammatical order to build the target sentence.
                  </p>
                </div>

                {/* 1-10 Selector */}
                <div className="flex flex-wrap gap-1.5">
                  {toeflWritingData.buildSentences.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setSentenceIndex(idx)}
                      className={`w-8 h-8 rounded-lg text-xs font-bold transition ${
                        sentenceIndex === idx
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      {s.number}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                Syntactic Focus: {currentSentenceObj.grammarFocus}
              </div>

              {/* Construction Dropzone */}
              <div className="min-h-[84px] p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-wrap items-center gap-2">
                {builtChunks.length === 0 ? (
                  <span className="text-xs text-slate-400 italic">
                    Click word chips below to assemble the sentence here...
                  </span>
                ) : (
                  builtChunks.map((chunk) => (
                    <button
                      key={chunk.id}
                      onClick={() => handleRemoveChunk(chunk)}
                      className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-rose-600 text-white text-sm font-medium shadow-sm transition"
                      title="Click to remove"
                    >
                      {chunk.text}
                    </button>
                  ))
                )}
              </div>

              {/* Available Word Chips */}
              <div className="space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Available Word / Phrase Chips:
                </div>
                <div className="flex flex-wrap gap-2">
                  {availableChunks.map((chunk) => (
                    <button
                      key={chunk.id}
                      onClick={() => handleAddChunk(chunk)}
                      className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-indigo-50 dark:bg-slate-800 dark:hover:bg-indigo-950/60 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-sm font-medium transition"
                    >
                      {chunk.text}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleCheckSentence}
                  disabled={availableChunks.length > 0}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-40 transition"
                >
                  Check Sentence Order
                </button>
                <button
                  onClick={handleResetSentence}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset Chips
                </button>
                {sentenceIndex < toeflWritingData.buildSentences.length - 1 && (
                  <button
                    onClick={() => setSentenceIndex((prev) => prev + 1)}
                    className="ml-auto px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-slate-700 text-white"
                  >
                    Next Sentence →
                  </button>
                )}
              </div>

              {/* Validation Result */}
              {sentenceChecked !== null && (
                <div
                  className={`p-4 rounded-xl border flex items-start gap-3 ${
                    sentenceChecked
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-900 dark:bg-emerald-950/40 dark:border-emerald-700 dark:text-emerald-200'
                      : 'bg-rose-50 border-rose-300 text-rose-900 dark:bg-rose-950/40 dark:border-rose-700 dark:text-rose-200'
                  }`}
                >
                  {sentenceChecked ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <div className="text-xs sm:text-sm space-y-1">
                    <div className="font-bold">
                      {sentenceChecked ? 'Perfect Grammatical Order!' : 'Not quite right — check clause order & punctuation.'}
                    </div>
                    <div>
                      <span className="font-semibold">Target Sentence: </span>
                      <span>{currentSentenceObj.target}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Part 2: Write an Email */}
          {writingSubTab === 'part2' && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {toeflWritingData.emailTask.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {toeflWritingData.emailTask.scenario}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  In your email to Professor Martinez, do the following:
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-1">
                  {toeflWritingData.emailTask.instructions.map((inst, i) => (
                    <li key={i}>{inst}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-600 dark:text-slate-300">
                    Your Email Draft (Dear Professor Martinez...):
                  </span>
                  <span className="font-mono font-bold px-2.5 py-1 rounded bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                    Word Count: {countWords(emailDraft)} words
                  </span>
                </div>
                <textarea
                  rows={8}
                  value={emailDraft}
                  onChange={(e) => setEmailDraft(e.target.value)}
                  placeholder="Dear Professor Martinez,&#10;&#10;I am writing to inform you about a scheduling conflict regarding next Tuesday's Biology group presentation..."
                  className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 p-3.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setShowEmailModel(!showEmailModel)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition"
                >
                  {showEmailModel ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  {showEmailModel ? 'Hide Model Email Response' : 'Compare with High-Scoring Model Email'}
                </button>
              </div>

              {showEmailModel && (
                <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                    Model Response (Polite Academic Register & Proactive Solution)
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 whitespace-pre-line leading-relaxed font-serif">
                    {toeflWritingData.emailTask.modelResponse}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Part 3: Write for an Academic Discussion */}
          {writingSubTab === 'part3' && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {toeflWritingData.academicDiscussionTask.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Read the professor's question and the two student posts, then write a 100+ word contribution in 10 minutes.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 font-mono text-sm font-bold">
                    <Clock className="w-4 h-4 text-indigo-500" />
                    <span>{formatSec(discussionTimer)}</span>
                  </div>
                  <button
                    onClick={() => setDiscussionRunning(!discussionRunning)}
                    className="px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition"
                  >
                    {discussionRunning ? 'Pause' : 'Start 10m Timer'}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                <div className="lg:col-span-6 space-y-3">
                  <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    {toeflWritingData.academicDiscussionTask.professorPrompt}
                  </div>
                  {toeflWritingData.academicDiscussionTask.studentPosts.map((sp, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">{sp.author}</span>
                        <span className="text-[11px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                          {sp.stance}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{sp.text}</p>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      Your Discussion Board Contribution (Target: 100+ words):
                    </span>
                    <span
                      className={`font-mono font-bold px-2.5 py-1 rounded ${
                        countWords(discussionDraft) >= 100
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                      }`}
                    >
                      {countWords(discussionDraft)} / 100+ words
                    </span>
                  </div>
                  <textarea
                    rows={10}
                    value={discussionDraft}
                    onChange={(e) => setDiscussionDraft(e.target.value)}
                    placeholder="State your opinion clearly, engage with Liam's or Sophia's points, and add your own original reasoning..."
                    className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 p-3.5 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />

                  <button
                    onClick={() => setShowDiscussionModel(!showDiscussionModel)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition"
                  >
                    {showDiscussionModel ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    {showDiscussionModel ? 'Hide Sample Response' : 'Compare with High-Scoring Sample Response'}
                  </button>

                  {showDiscussionModel && (
                    <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-1.5">
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                        Band 5.5–6.0 / Score 29–30 Sample Response
                      </div>
                      <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 whitespace-pre-line leading-relaxed font-serif">
                        {toeflWritingData.academicDiscussionTask.modelResponse}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

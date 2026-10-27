import React, { useState, useEffect, useCallback } from 'react';
import {
  CheckCircle2,
  XCircle,
  Bookmark,
  Flag,
  ChevronLeft,
  ChevronRight,
  Clock,
  RotateCcw,
  Award,
  Sparkles,
  Keyboard,
  Shuffle
} from 'lucide-react';

// Fisher-Yates shuffle helper
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function MCQQuizEngine({
  questions,
  title = "Practice Quiz",
  subtitle = "",
  mode = "study", // 'study' | 'exam'
  examDurationMinutes = 25,
  savedAnswers = {},
  onAnswerRecord,
  bookmarks = [],
  onToggleBookmark
}) {
  const [displayQuestions, setDisplayQuestions] = useState(questions);
  const [isShuffled, setIsShuffled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [localAnswers, setLocalAnswers] = useState({});
  const [flaggedIds, setFlaggedIds] = useState([]);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(examDurationMinutes * 60);

  // Sync displayQuestions when parent `questions` prop changes
  useEffect(() => {
    setDisplayQuestions(questions);
    setIsShuffled(false);
    setCurrentIndex(0);
    setExamSubmitted(false);
    setTimeLeft(examDurationMinutes * 60);
    if (mode === 'exam') {
      setLocalAnswers({});
    }
  }, [mode, examDurationMinutes, questions]);

  // Countdown timer in Exam Mode
  useEffect(() => {
    if (mode !== 'exam' || examSubmitted) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleExamSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [mode, examSubmitted, localAnswers]);

  const currentQuestion = displayQuestions[currentIndex] || displayQuestions[0];

  const getSelectedOption = (qId) => {
    if (mode === 'exam' || isShuffled) {
      return localAnswers[qId];
    }
    return localAnswers[qId] !== undefined ? localAnswers[qId] : savedAnswers[qId]?.selected;
  };

  const handleSelectOption = useCallback(
    (optionIndex) => {
      if (!currentQuestion) return;
      if (mode === 'exam' && examSubmitted) return;

      const qId = currentQuestion.id;
      setLocalAnswers((prev) => ({ ...prev, [qId]: optionIndex }));

      if (mode === 'study' && onAnswerRecord) {
        onAnswerRecord(
          qId,
          currentQuestion.module,
          optionIndex,
          optionIndex === currentQuestion.correctIndex
        );
      }
    },
    [currentQuestion, mode, examSubmitted, onAnswerRecord]
  );

  const handleExamSubmit = () => {
    setExamSubmitted(true);
    if (onAnswerRecord) {
      displayQuestions.forEach((q) => {
        const chosen = localAnswers[q.id];
        if (chosen !== undefined) {
          onAnswerRecord(q.id, q.module, chosen, chosen === q.correctIndex);
        }
      });
    }
  };

  const handleShuffleQuestions = () => {
    setDisplayQuestions((prev) => shuffleArray(prev));
    setIsShuffled(true);
    setLocalAnswers({});
    setFlaggedIds([]);
    setExamSubmitted(false);
    setCurrentIndex(0);
    setTimeLeft(examDurationMinutes * 60);
  };

  const handleRetake = () => {
    setDisplayQuestions(questions);
    setIsShuffled(false);
    setLocalAnswers({});
    setFlaggedIds([]);
    setExamSubmitted(false);
    setCurrentIndex(0);
    setTimeLeft(examDurationMinutes * 60);
  };

  const toggleFlag = (qId) => {
    setFlaggedIds((prev) =>
      prev.includes(qId) ? prev.filter((id) => id !== qId) : [...prev, qId]
    );
  };

  // Keyboard shortcuts: 1-4 or A-D to select option, Enter for next question
  useEffect(() => {
    const handleKeyDown = (e) => {
      const tag = document.activeElement?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

      const key = e.key.toUpperCase();
      if (['1', '2', '3', '4'].includes(key)) {
        const idx = parseInt(key, 10) - 1;
        if (currentQuestion && idx < currentQuestion.options.length) {
          e.preventDefault();
          handleSelectOption(idx);
        }
      } else if (['A', 'B', 'C', 'D'].includes(key)) {
        const idx = key.charCodeAt(0) - 65;
        if (currentQuestion && idx < currentQuestion.options.length) {
          e.preventDefault();
          handleSelectOption(idx);
        }
      } else if (e.key === 'Enter') {
        if (currentIndex < displayQuestions.length - 1) {
          e.preventDefault();
          setCurrentIndex((prev) => prev + 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestion, currentIndex, displayQuestions.length, handleSelectOption]);

  if (!currentQuestion) return null;

  const selectedIdx = getSelectedOption(currentQuestion.id);
  const showFeedback = (mode === 'study' && selectedIdx !== undefined) || (mode === 'exam' && examSubmitted);
  const isBookmarked = bookmarks.includes(currentQuestion.id);
  const isFlagged = flaggedIds.includes(currentQuestion.id);

  const answeredCount = displayQuestions.filter((q) => getSelectedOption(q.id) !== undefined).length;
  const correctCount = displayQuestions.filter((q) => getSelectedOption(q.id) === q.correctIndex).length;

  const formatTimer = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="space-y-5">
      {/* Header Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
            <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
              mode === 'exam'
                ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                : 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300'
            }`}>
              {mode === 'exam' ? 'Exam Simulation Mode' : 'Study Mode'}
            </span>
            {isShuffled && (
              <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                Shuffled Order
              </span>
            )}
          </div>
          {subtitle && <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">{subtitle}</p>}
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <div className="hidden xl:flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1.5 rounded-lg">
            <Keyboard className="w-3.5 h-3.5 text-indigo-500" />
            <span>Shortcuts: <kbd className="font-mono font-bold">1-4</kbd> or <kbd className="font-mono font-bold">A-D</kbd>, <kbd className="font-mono font-bold">Enter</kbd> Next</span>
          </div>

          {mode === 'exam' && (
            <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-mono font-bold text-sm border ${
              timeLeft < 120
                ? 'bg-rose-50 text-rose-700 border-rose-300 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800 animate-pulse'
                : 'bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700'
            }`}>
              <Clock className="w-4 h-4 text-indigo-500" />
              <span>{formatTimer(timeLeft)}</span>
            </div>
          )}

          {mode === 'exam' && !examSubmitted && (
            <button
              onClick={handleExamSubmit}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition"
            >
              Submit Exam ({answeredCount}/{displayQuestions.length})
            </button>
          )}

          <button
            onClick={handleShuffleQuestions}
            title="Randomize / Shuffle Question Order"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 dark:bg-amber-950/50 dark:hover:bg-amber-900/60 dark:text-amber-300 dark:border-amber-800 transition"
          >
            <Shuffle className="w-3.5 h-3.5" />
            Shuffle Qs
          </button>

          <button
            onClick={handleRetake}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
        </div>
      </div>

      {/* Exam Diagnostic Summary Banner when Submitted */}
      {mode === 'exam' && examSubmitted && (
        <div className="bg-gradient-to-r from-indigo-600 to-slate-900 text-white rounded-2xl p-5 shadow-md flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
              <Award className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h4 className="font-bold text-lg">Exam Simulation Diagnostic Complete!</h4>
              <p className="text-xs sm:text-sm text-indigo-100">
                You scored <span className="font-bold text-white">{correctCount} / {displayQuestions.length}</span> ({Math.round((correctCount / displayQuestions.length) * 100)}%).
                {correctCount / displayQuestions.length >= 0.7
                  ? ' Meets CEFR B2 / TKT Band 3–4 Target Readiness!'
                  : ' Review the pedagogical rationales below to strengthen weak areas.'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShuffleQuestions}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition"
            >
              <Shuffle className="w-3.5 h-3.5" />
              Retake (Shuffled)
            </button>
            <button
              onClick={handleRetake}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-white text-indigo-900 hover:bg-indigo-50 transition"
            >
              Retake (Default Order)
            </button>
          </div>
        </div>
      )}

      {/* Navigation Palette */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2.5 text-xs text-slate-500 dark:text-slate-400">
          <span className="font-semibold uppercase tracking-wider">Question Navigation Palette ({answeredCount}/{displayQuestions.length} Answered)</span>
          {flaggedIds.length > 0 && (
            <span className="text-amber-600 dark:text-amber-400 font-medium">
              {flaggedIds.length} Flagged for Review
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {displayQuestions.map((q, idx) => {
            const ans = getSelectedOption(q.id);
            const isCurr = idx === currentIndex;
            const flagged = flaggedIds.includes(q.id);
            let btnStyle = 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300';

            if (showFeedback && ans !== undefined) {
              btnStyle =
                ans === q.correctIndex
                  ? 'bg-emerald-100 text-emerald-800 border-emerald-400 dark:bg-emerald-950/70 dark:text-emerald-300'
                  : 'bg-rose-100 text-rose-800 border-rose-400 dark:bg-rose-950/70 dark:text-rose-300';
            } else if (ans !== undefined) {
              btnStyle = 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200';
            }

            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-8 h-8 rounded-lg text-xs font-bold transition flex items-center justify-center border ${btnStyle} ${
                  isCurr ? 'ring-2 ring-indigo-600 dark:ring-indigo-400 border-transparent' : 'border-transparent'
                }`}
              >
                {idx + 1}
                {flagged && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-500 ring-2 ring-white dark:ring-slate-900" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3.5">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300">
              Question {currentIndex + 1} of {displayQuestions.length}
            </span>
            {currentQuestion.module && (
              <span className="text-xs font-bold px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400">
                {currentQuestion.module}
              </span>
            )}
            {currentQuestion.category && (
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                {currentQuestion.category}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleFlag(currentQuestion.id)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium border transition ${
                isFlagged
                  ? 'bg-amber-50 text-amber-700 border-amber-300 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-700'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
              }`}
            >
              <Flag className="w-3.5 h-3.5" />
              {isFlagged ? 'Flagged' : 'Flag for Review'}
            </button>

            {onToggleBookmark && (
              <button
                onClick={() => onToggleBookmark(currentQuestion.id)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium border transition ${
                  isBookmarked
                    ? 'bg-indigo-50 text-indigo-700 border-indigo-300 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-700'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                {isBookmarked ? 'Saved' : 'Bookmark'}
              </button>
            )}
          </div>
        </div>

        {/* Question Prompt */}
        <div className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 whitespace-pre-line leading-relaxed">
          {currentQuestion.question}
        </div>

        {/* Options List */}
        <div className="space-y-2.5">
          {currentQuestion.options.map((opt, idx) => {
            const letter = String.fromCharCode(65 + idx);
            const isSelected = selectedIdx === idx;
            const isCorrect = idx === currentQuestion.correctIndex;

            let cardClass =
              'border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500 bg-slate-50/60 dark:bg-slate-800/40';

            if (showFeedback) {
              if (isCorrect) {
                cardClass =
                  'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 dark:border-emerald-600 text-emerald-950 dark:text-emerald-100';
              } else if (isSelected && !isCorrect) {
                cardClass =
                  'border-rose-500 bg-rose-50/80 dark:bg-rose-950/40 dark:border-rose-600 text-rose-950 dark:text-rose-100';
              }
            } else if (isSelected) {
              cardClass =
                'border-indigo-600 bg-indigo-50/90 dark:bg-indigo-950/50 dark:border-indigo-500 text-indigo-950 dark:text-indigo-100';
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl border-2 transition flex items-start gap-3.5 ${cardClass}`}
              >
                <span
                  className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                    showFeedback && isCorrect
                      ? 'bg-emerald-600 text-white'
                      : showFeedback && isSelected && !isCorrect
                      ? 'bg-rose-600 text-white'
                      : isSelected
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700'
                  }`}
                >
                  {letter}
                </span>
                <span className="flex-1 text-sm sm:text-base leading-relaxed">
                  {opt.replace(/^[A-D]\)\s*/, '')}
                </span>
                {showFeedback && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                )}
                {showFeedback && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Pedagogical Rationale Box (Study Mode or Post-Exam Submission) */}
        {showFeedback && currentQuestion.rationale && (
          <div className="p-4 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/80 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
              <Sparkles className="w-4 h-4" />
              Pedagogical Rationale & Distractor Analysis
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentQuestion.rationale}
            </p>
          </div>
        )}

        {/* Footer Prev / Next Buttons */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 disabled:opacity-40 transition"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          <span className="text-xs text-slate-400">
            Press <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono">Enter</kbd> for next
          </span>

          <button
            onClick={() => setCurrentIndex((prev) => Math.min(displayQuestions.length - 1, prev + 1))}
            disabled={currentIndex === displayQuestions.length - 1}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-40 transition"
          >
            Next Question
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

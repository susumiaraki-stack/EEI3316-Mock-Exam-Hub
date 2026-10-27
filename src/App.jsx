import React, { useState, useEffect } from 'react';
import DashboardView from './components/DashboardView';
import TKTModuleView from './components/TKTModuleView';
import TOEICModuleView from './components/TOEICModuleView';
import TOEFLModuleView from './components/TOEFLModuleView';
import IELTSModuleView from './components/IELTSModuleView';
import FinalSimulatorView from './components/FinalSimulatorView';
import {
  LayoutDashboard,
  BookOpen,
  Briefcase,
  GraduationCap,
  Globe,
  Award,
  Sun,
  Moon,
  ShieldAlert,
  Sparkles
} from 'lucide-react';

const STORAGE_ANSWERS_KEY = 'eei3316_saved_answers_v1';
const STORAGE_BOOKMARKS_KEY = 'eei3316_bookmarks_v1';
const STORAGE_THEME_KEY = 'eei3316_theme_v1';

export default function App() {
  const [activeNav, setActiveNav] = useState('dashboard'); // 'dashboard' | 'tkt' | 'toeic' | 'toefl' | 'ielts' | 'final'
  const [mode, setMode] = useState('study'); // 'study' | 'exam'

  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_THEME_KEY);
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  const [savedAnswers, setSavedAnswers] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_ANSWERS_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_BOOKMARKS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem(STORAGE_THEME_KEY, JSON.stringify(darkMode));
    } catch {}
  }, [darkMode]);

  const handleRecordAnswer = (questionId, moduleName, selectedValue, isCorrect) => {
    setSavedAnswers((prev) => {
      const next = {
        ...prev,
        [questionId]: {
          module: moduleName,
          selected: selectedValue,
          correct: isCorrect,
          timestamp: Date.now()
        }
      };
      try {
        localStorage.setItem(STORAGE_ANSWERS_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const handleToggleBookmark = (questionId) => {
    setBookmarks((prev) => {
      const next = prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId];
      try {
        localStorage.setItem(STORAGE_BOOKMARKS_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const handleResetAllProgress = () => {
    setSavedAnswers({});
    setBookmarks([]);
    try {
      localStorage.removeItem(STORAGE_ANSWERS_KEY);
      localStorage.removeItem(STORAGE_BOOKMARKS_KEY);
    } catch {}
  };

  const handleNavigateModule = (modId) => {
    setActiveNav(modId);
    if (modId === 'final') {
      setMode('exam');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'tkt', label: 'A. TKT & Core', icon: BookOpen },
    { id: 'toeic', label: 'B. TOEIC', icon: Briefcase },
    { id: 'toefl', label: 'C. TOEFL iBT (2026)', icon: GraduationCap },
    { id: 'ielts', label: 'D. IELTS (2026)', icon: Globe },
    { id: 'final', label: 'Final Simulator', icon: Award }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Sticky Top Header */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Brand */}
          <div
            onClick={() => setActiveNav('dashboard')}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-sm shadow-sm">
              EEI
            </div>
            <div>
              <div className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white leading-none">
                EEI3316 Exam & Pedagogy Hub
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                CEFR B2 • TKT • TOEIC • TOEFL 2026 • IELTS 2026
              </div>
            </div>
          </div>

          {/* Study vs Exam Mode Switcher + Theme Toggle */}
          <div className="flex items-center gap-2.5">
            <div className="inline-flex rounded-xl p-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setMode('study')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  mode === 'study'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                Study Mode
              </button>
              <button
                onClick={() => setMode('exam')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  mode === 'exam'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                }`}
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                Exam Mode
              </button>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition"
              title="Toggle Dark/Light Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Module Navigation Bar */}
        <div className="border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center gap-1.5 overflow-x-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigateModule(item.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
        {activeNav === 'dashboard' && (
          <DashboardView
            savedAnswers={savedAnswers}
            bookmarks={bookmarks}
            onNavigateModule={handleNavigateModule}
            onResetAllProgress={handleResetAllProgress}
            onRemoveBookmark={handleToggleBookmark}
          />
        )}

        {activeNav === 'tkt' && (
          <TKTModuleView
            mode={mode}
            savedAnswers={savedAnswers}
            onAnswerRecord={handleRecordAnswer}
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {activeNav === 'toeic' && (
          <TOEICModuleView
            mode={mode}
            savedAnswers={savedAnswers}
            onAnswerRecord={handleRecordAnswer}
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {activeNav === 'toefl' && (
          <TOEFLModuleView
            mode={mode}
            savedAnswers={savedAnswers}
            onAnswerRecord={handleRecordAnswer}
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {activeNav === 'ielts' && (
          <IELTSModuleView
            mode={mode}
            savedAnswers={savedAnswers}
            onAnswerRecord={handleRecordAnswer}
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {activeNav === 'final' && (
          <FinalSimulatorView
            mode={mode}
            savedAnswers={savedAnswers}
            onAnswerRecord={handleRecordAnswer}
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-4 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span>
            <strong>EEI3316: English for Language Proficiency Tests for Teachers of English</strong> • CEFR B2 & Cambridge TKT Hub
          </span>
          <span>
            Keyboard Shortcuts: <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono">1-4</kbd> / <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono">A-D</kbd> • <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono">Enter</kbd> Next
          </span>
        </div>
      </footer>
    </div>
  );
}

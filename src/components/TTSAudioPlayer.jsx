import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Play, Pause, Square, FileText, Eye, EyeOff, Lock, RotateCcw } from 'lucide-react';

export default function TTSAudioPlayer({
  script,
  title = "Audio Track",
  mode = "study",
  durationEstimate = "2:00",
  trackId = "default-track"
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hasPlayedInExam, setHasPlayedInExam] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [rate, setRate] = useState(1.0);
  const [progress, setProgress] = useState(0);
  const utteranceRef = useRef(null);

  useEffect(() => {
    // Reset when track changes
    window.speechSynthesis?.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setHasPlayedInExam(false);
    setShowTranscript(false);
    setProgress(0);
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, [trackId, script]);

  const handlePlay = () => {
    if (!('speechSynthesis' in window)) {
      alert("Your browser does not support the Web Speech API (speechSynthesis).");
      return;
    }

    if (mode === 'exam' && hasPlayedInExam && !isPaused) {
      return;
    }

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    window.speechSynthesis.cancel();
    const cleanScript = script.replace(/^(Professor|Student|Male Student|Female Student|Receptionist|Caller|Park Ranger|Maya|Daniel|Professor Lewis):\s*/gm, '');
    const utterance = new SpeechSynthesisUtterance(cleanScript);
    utterance.lang = 'en-US';
    utterance.rate = mode === 'exam' ? 1.0 : rate;

    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Microsoft')));
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onboundary = (event) => {
      if (cleanScript.length > 0 && typeof event.charIndex === 'number') {
        setProgress(Math.min(100, Math.round((event.charIndex / cleanScript.length) * 100)));
      }
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setProgress(100);
      if (mode === 'exam') {
        setHasPlayedInExam(true);
      }
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    setIsPlaying(true);
    if (mode === 'exam') {
      setHasPlayedInExam(true);
    }
    window.speechSynthesis.speak(utterance);
  };

  const handlePause = () => {
    if (window.speechSynthesis?.speaking && !window.speechSynthesis?.paused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    window.speechSynthesis?.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setProgress(0);
  };

  const examLocked = mode === 'exam' && hasPlayedInExam && !isPlaying && !isPaused;

  return (
    <div className="bg-slate-900 text-white rounded-xl p-4 shadow-md border border-slate-800">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isPlaying ? 'bg-indigo-600 animate-pulse' : 'bg-slate-800'}`}>
            <Volume2 className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-sm sm:text-base">{title}</h4>
              <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                ~{durationEstimate}
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {mode === 'exam'
                ? 'Exam Mode: Play-Once Restriction Active (Transcript Hidden)'
                : 'Study Mode: Built-in Web Speech TTS Player & Transcript Available'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {!isPlaying ? (
            <button
              onClick={handlePlay}
              disabled={examLocked}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition ${
                examLocked
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm'
              }`}
            >
              {examLocked ? <Lock className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              {examLocked ? 'Played Once (Exam Locked)' : isPaused ? 'Resume Audio' : 'Play TTS Audio'}
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white transition"
            >
              <Pause className="w-3.5 h-3.5 fill-current" />
              Pause
            </button>
          )}

          {mode === 'study' && (isPlaying || isPaused || progress > 0) && (
            <button
              onClick={handleStop}
              title="Reset Audio"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          {mode === 'study' && (
            <select
              value={rate}
              onChange={(e) => setRate( parseFloat(e.target.value) )}
              className="bg-slate-800 text-slate-200 text-xs rounded-lg px-2.5 py-2 border border-slate-700 focus:outline-none focus:border-indigo-500"
              title="Playback Speed"
            >
              <option value={0.85}>0.85x Slow</option>
              <option value={1.0}>1.0x Normal</option>
              <option value={1.15}>1.15x Fast</option>
            </select>
          )}

          {mode === 'study' && (
            <button
              onClick={() => setShowTranscript(!showTranscript)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
            >
              {showTranscript ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              {showTranscript ? 'Hide Transcript' : 'Show Transcript'}
            </button>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-3 w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
        <div
          className="bg-indigo-500 h-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Transcript Drawer (Study Mode Only) */}
      {mode === 'study' && showTranscript && (
        <div className="mt-4 pt-3 border-t border-slate-800 max-h-64 overflow-y-auto text-xs sm:text-sm text-slate-300 space-y-2 leading-relaxed font-serif bg-slate-950/60 p-3.5 rounded-lg">
          <div className="flex items-center gap-1.5 text-indigo-400 font-sans font-semibold text-xs uppercase tracking-wider mb-1">
            <FileText className="w-3.5 h-3.5" />
            Audio Script / Transcript
          </div>
          {script.split('\n\n').map((para, i) => (
            <p key={i} className="whitespace-pre-line">{para}</p>
          ))}
        </div>
      )}
    </div>
  );
}

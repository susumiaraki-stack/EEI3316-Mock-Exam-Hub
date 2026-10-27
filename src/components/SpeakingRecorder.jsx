import React, { useState, useEffect, useRef } from 'react';
import { Mic, Square, Play, RotateCcw, Clock, CheckCircle2, Volume2, AlertCircle } from 'lucide-react';

export default function SpeakingRecorder({
  prepSeconds = 15,
  speakSeconds = 45,
  readSeconds = 0,
  taskTitle = "Speaking Task"
}) {
  const [phase, setPhase] = useState('idle'); // 'idle' | 'reading' | 'prep' | 'speaking' | 'done'
  const [timeLeft, setTimeLeft] = useState(prepSeconds);
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [micError, setMicError] = useState(null);

  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const timerRef = useRef(null);

  useEffect(() => {
    stopAll();
    setPhase('idle');
    setTimeLeft(readSeconds > 0 ? readSeconds : prepSeconds);
    setAudioUrl(null);
    setMicError(null);
    return () => stopAll();
  }, [prepSeconds, speakSeconds, readSeconds, taskTitle]);

  const stopAll = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
  };

  useEffect(() => {
    if (phase === 'idle' || phase === 'done') return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handlePhaseTransition(phase);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [phase]);

  const handlePhaseTransition = (currentPhase) => {
    if (currentPhase === 'reading') {
      setPhase('prep');
      setTimeLeft(prepSeconds);
    } else if (currentPhase === 'prep') {
      setPhase('speaking');
      setTimeLeft(speakSeconds);
      startMicRecording();
    } else if (currentPhase === 'speaking') {
      stopMicRecording();
      setPhase('done');
      setTimeLeft(0);
    }
  };

  const startSequence = () => {
    setAudioUrl(null);
    setMicError(null);
    if (readSeconds > 0) {
      setPhase('reading');
      setTimeLeft(readSeconds);
    } else {
      setPhase('prep');
      setTimeLeft(prepSeconds);
    }
  };

  const skipToSpeaking = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setPhase('speaking');
    setTimeLeft(speakSeconds);
    startMicRecording();
  };

  const startMicRecording = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setMicError("Microphone recording not supported in this browser. Timer continues normally.");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      chunksRef.current = [];
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        stream.getTracks().forEach((track) => track.stop());
      };
      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      setMicError("Microphone permission denied or unavailable. Practicing with countdown timer only.");
      setIsRecording(false);
    }
  };

  const stopMicRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
  };

  const handleFinishEarly = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    stopMicRecording();
    setPhase('done');
  };

  const handleReset = () => {
    stopAll();
    setPhase('idle');
    setTimeLeft(readSeconds > 0 ? readSeconds : prepSeconds);
    setAudioUrl(null);
  };

  const formatSec = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm ${
            phase === 'speaking'
              ? 'bg-rose-600 text-white animate-pulse'
              : phase === 'prep'
              ? 'bg-amber-500 text-white'
              : phase === 'reading'
              ? 'bg-sky-600 text-white'
              : phase === 'done'
              ? 'bg-emerald-600 text-white'
              : 'bg-indigo-600 text-white'
          }`}>
            {phase === 'speaking' ? <Mic className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                {phase === 'idle' && 'Ready to Practice'}
                {phase === 'reading' && 'Reading Time Countdown'}
                {phase === 'prep' && 'Preparation Time Countdown'}
                {phase === 'speaking' && 'Speaking & Recording Now'}
                {phase === 'done' && 'Response Completed'}
              </span>
              {isRecording && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300">
                  <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping" /> REC
                </span>
              )}
            </div>
            <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-white">
              {formatSec(timeLeft)}
              <span className="text-xs font-normal font-sans text-slate-500 dark:text-slate-400 ml-2">
                ({readSeconds > 0 ? `${readSeconds}s Read • ` : ''}{prepSeconds}s Prep • {speakSeconds}s Speak)
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {phase === 'idle' && (
            <>
              <button
                onClick={startSequence}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                Start Full Sequence ({readSeconds > 0 ? `${readSeconds}s/` : ''}{prepSeconds}s/{speakSeconds}s)
              </button>
              <button
                onClick={skipToSpeaking}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white transition"
              >
                <Mic className="w-3.5 h-3.5" />
                Speak & Record Immediately ({speakSeconds}s)
              </button>
            </>
          )}

          {(phase === 'reading' || phase === 'prep') && (
            <button
              onClick={skipToSpeaking}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white transition"
            >
              <Mic className="w-3.5 h-3.5" />
              Skip to Speaking ({speakSeconds}s)
            </button>
          )}

          {phase === 'speaking' && (
            <button
              onClick={handleFinishEarly}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition"
            >
              <Square className="w-3.5 h-3.5 fill-current" />
              Stop & Save Recording
            </button>
          )}

          {phase !== 'idle' && (
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
          )}
        </div>
      </div>

      {micError && (
        <div className="mt-3 flex items-center gap-2 text-xs text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 px-3 py-2 rounded-lg border border-amber-200 dark:border-amber-800">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{micError}</span>
        </div>
      )}

      {audioUrl && (
        <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>Your Recorded Speaking Response (Self-Evaluation Playback):</span>
          </div>
          <audio controls src={audioUrl} className="h-9 w-full sm:w-80" />
        </div>
      )}
    </div>
  );
}

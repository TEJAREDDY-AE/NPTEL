import React, { useState, useEffect, useRef } from 'react';
import { 
  getAllQuestions, 
  getQuestionsByWeek, 
  getWeeks1To7Questions,
  getWeeks6To12Questions,
  getExamScopeQuestions,
  shuffleArray, 
  getQuestionById 
} from '../utils/questionStore';
import { StorageService } from '../utils/storage';
import { Question, TestResult, TestSession } from '../types';
import { VerificationBadge } from '../components/VerificationBadge';
import { 
  Timer, 
  Clock, 
  BookmarkCheck, 
  Flag, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  RotateCcw, 
  Award, 
  ArrowRight, 
  ArrowLeft, 
  FileText,
  Calculator,
  Shuffle
} from 'lucide-react';

interface Props {
  onReviewIncorrect: () => void;
}

export const MockExamView: React.FC<Props> = ({ onReviewIncorrect }) => {
  const [activeSession, setActiveSession] = useState<TestSession | null>(() => {
    const saved = StorageService.getActiveTestSession();
    if (saved && saved.mode === 'mock') return saved;
    return null;
  });

  const [lastCompletedResult, setLastCompletedResult] = useState<TestResult | null>(null);

  // Configuration modal state (before test starts)
  const [configDurationMinutes, setConfigDurationMinutes] = useState<number>(30);
  const [configQuestionCount, setConfigQuestionCount] = useState<number>(20);
  const [configWeekScope, setConfigWeekScope] = useState<number | 'all' | 'exam_scope' | 'weeks_1_7' | 'weeks_6_12'>('weeks_1_7');

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Start new mock examination
  const startExam = () => {
    let pool: Question[] = [];
    if (configWeekScope === 'weeks_1_7' || configWeekScope === 'exam_scope') {
      pool = getWeeks1To7Questions();
    } else if (configWeekScope === 'weeks_6_12') {
      pool = getWeeks6To12Questions();
    } else if (configWeekScope === 'all') {
      pool = getAllQuestions();
    } else {
      pool = getQuestionsByWeek(configWeekScope);
    }
    if (pool.length === 0) pool = getWeeks1To7Questions();

    pool = shuffleArray(pool).slice(0, configQuestionCount);
    const durationSeconds = configDurationMinutes * 60;

    const title = (configWeekScope === 'weeks_1_7' || configWeekScope === 'exam_scope')
      ? `Weeks 1–7 Target Exam Mock (${configQuestionCount} Qs)`
      : configWeekScope === 'weeks_6_12'
      ? `Weeks 6–12 Target Exam Mock (${configQuestionCount} Qs)`
      : configWeekScope === 'all'
      ? `Full Course Mock Exam (${configQuestionCount} Qs)`
      : `Week ${configWeekScope} Timed Exam (${configQuestionCount} Qs)`;

    const newSession: TestSession = {
      id: `mock_${Date.now()}`,
      mode: 'mock',
      title,
      weekFilter: configWeekScope,
      questionIds: pool.map(q => q.id),
      currentQuestionIndex: 0,
      answers: {},
      markedForReview: {},
      startTime: Date.now(),
      durationSeconds,
      timeRemainingSeconds: durationSeconds,
      isSubmitted: false
    };

    StorageService.saveActiveTestSession(newSession);
    setActiveSession(newSession);
    setLastCompletedResult(null);
  };

  // Timer Countdown Effect
  useEffect(() => {
    if (!activeSession || activeSession.isSubmitted) return;

    timerRef.current = setInterval(() => {
      setActiveSession((prev) => {
        if (!prev) return null;
        if (prev.timeRemainingSeconds <= 1) {
          // Timer expired -> auto submit
          clearInterval(timerRef.current!);
          handleSubmitExam(prev);
          return null;
        }
        const updated = {
          ...prev,
          timeRemainingSeconds: prev.timeRemainingSeconds - 1
        };
        StorageService.saveActiveTestSession(updated);
        return updated;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeSession?.id]);

  // Submit and grade the exam
  const handleSubmitExam = (sessionToSubmit?: TestSession) => {
    const session = sessionToSubmit || activeSession;
    if (!session) return;

    if (timerRef.current) clearInterval(timerRef.current);

    const questions = session.questionIds.map(id => getQuestionById(id)).filter(Boolean) as Question[];
    let correctCount = 0;
    let incorrectCount = 0;
    let unansweredCount = 0;

    const details = questions.map((q) => {
      const selected = session.answers[q.id] || [];
      if (selected.length === 0) {
        unansweredCount++;
        return {
          questionId: q.id,
          questionText: q.questionText,
          selectedOptionIds: [],
          isCorrect: false,
          correctAnswerText: q.verifiedAnswer,
          week: q.week
        };
      }
      const chosenOpt = q.options.find(o => o.id === selected[0]);
      const isCorrect = !!chosenOpt?.isCorrect;
      if (isCorrect) {
        correctCount++;
      } else {
        incorrectCount++;
      }

      // Record in permanent user attempt history
      StorageService.recordAttempt({
        questionId: q.id,
        selectedOptionIds: selected,
        isCorrect,
        timestamp: Date.now(),
        timeSpentSeconds: 30
      });

      return {
        questionId: q.id,
        questionText: q.questionText,
        selectedOptionIds: selected,
        isCorrect,
        correctAnswerText: q.verifiedAnswer,
        week: q.week
      };
    });

    const total = questions.length;
    const scorePct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const timeTaken = session.durationSeconds - session.timeRemainingSeconds;

    const result: TestResult = {
      id: session.id,
      title: session.title,
      timestamp: Date.now(),
      mode: 'mock',
      totalQuestions: total,
      correctCount,
      incorrectCount,
      unansweredCount,
      scorePercentage: scorePct,
      durationSeconds: session.durationSeconds,
      timeTakenSeconds: timeTaken,
      questionDetails: details
    };

    StorageService.saveTestResult(result);
    StorageService.clearActiveTestSession();
    setActiveSession(null);
    setLastCompletedResult(result);
  };

  const handleSelectOption = (optId: string) => {
    if (!activeSession) return;
    const currentQId = activeSession.questionIds[activeSession.currentQuestionIndex];
    const updatedAnswers = {
      ...activeSession.answers,
      [currentQId]: [optId]
    };
    const updated = {
      ...activeSession,
      answers: updatedAnswers
    };
    StorageService.saveActiveTestSession(updated);
    setActiveSession(updated);
  };

  const handleClearAnswer = () => {
    if (!activeSession) return;
    const currentQId = activeSession.questionIds[activeSession.currentQuestionIndex];
    const updatedAnswers = { ...activeSession.answers };
    delete updatedAnswers[currentQId];
    const updated = {
      ...activeSession,
      answers: updatedAnswers
    };
    StorageService.saveActiveTestSession(updated);
    setActiveSession(updated);
  };

  const handleToggleMarkReview = () => {
    if (!activeSession) return;
    const currentQId = activeSession.questionIds[activeSession.currentQuestionIndex];
    const currentMarked = !!activeSession.markedForReview[currentQId];
    const updatedMarks = {
      ...activeSession.markedForReview,
      [currentQId]: !currentMarked
    };
    const updated = {
      ...activeSession,
      markedForReview: updatedMarks
    };
    StorageService.saveActiveTestSession(updated);
    setActiveSession(updated);
  };

  const handleNavigateQuestion = (idx: number) => {
    if (!activeSession) return;
    const updated = {
      ...activeSession,
      currentQuestionIndex: idx
    };
    StorageService.saveActiveTestSession(updated);
    setActiveSession(updated);
  };

  // Format seconds to mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // ==========================================
  // VIEW 1: EXAM SETUP CONFIGURATION
  // ==========================================
  if (!activeSession && !lastCompletedResult) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <Timer className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                NPTEL Examination Simulator
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Simulate official testing conditions with countdown timers, mark-for-review, and auto-scoring.
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            {/* Scope Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                Examination Scope
              </label>
              <select
                value={configWeekScope}
                onChange={(e) => {
                  const raw = e.target.value;
                  setConfigWeekScope(
                    (raw === 'weeks_1_7' || raw === 'exam_scope') ? 'weeks_1_7' :
                    raw === 'weeks_6_12' ? 'weeks_6_12' :
                    raw === 'all' ? 'all' : parseInt(raw, 10)
                  );
                }}
                className="w-full p-2.5 rounded-xl text-sm font-semibold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="weeks_1_7">🎯 Weeks 1–7 (Uploaded Scope - 70 Questions)</option>
                <option value="weeks_6_12">🎯 Weeks 6–12 (Target Scope - 70 Questions)</option>
                <option value="1">Week 1: Network Intro & Delays (10 Qs - Uploaded)</option>
                <option value="2">Week 2: OSI Model & Framing (10 Qs - Uploaded)</option>
                <option value="3">Week 3: HTTP, DNS, Protocols (10 Qs - Uploaded)</option>
                <option value="4">Week 4: P2P, HTTP/2, HTTP/3 QUIC (10 Qs - Uploaded)</option>
                <option value="5">Week 5: Transport & Socket API (10 Qs - Uploaded)</option>
                <option value="6">Week 6: IP Protocol Architecture (10 Qs)</option>
                <option value="7">Week 7: TCP Flow & Congestion Control (10 Qs - Uploaded)</option>
                <option value="8">Week 8: UDP & Timers (10 Qs)</option>
                <option value="9">Week 9: Routing Algorithms LS & DV (10 Qs - Uploaded)</option>
                <option value="10">Week 10: BGP & Control Protocols (10 Qs - Uploaded)</option>
                <option value="11">Week 11: Network Services & DNS (10 Qs)</option>
                <option value="12">Week 12: Network Security & Crypto (10 Qs)</option>
                <option value="all">Full Syllabus: All Weeks 1–12 (120 Qs)</option>
              </select>
            </div>

            {/* Question Count */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                Number of Questions
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[10, 20, 30].map(cnt => (
                  <button
                    key={cnt}
                    onClick={() => setConfigQuestionCount(cnt)}
                    className={`py-2 rounded-xl text-xs font-bold transition-all ${
                      configQuestionCount === cnt
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    {cnt} Questions
                  </button>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                Time Limit
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[15, 30, 60].map(mins => (
                  <button
                    key={mins}
                    onClick={() => setConfigDurationMinutes(mins)}
                    className={`py-2 rounded-xl text-xs font-bold transition-all ${
                      configDurationMinutes === mins
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    {mins} Minutes
                  </button>
                ))}
              </div>
            </div>

            {/* Guarantee Note */}
            <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-xs text-purple-900 dark:text-purple-200 leading-relaxed">
              <strong>Refresh Persistence Active: </strong>
              If you accidentally refresh the page or lose connection during the mock exam, your answers and timer are continuously restored from local storage.
            </div>

            <button
              onClick={startExam}
              className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md shadow-purple-500/20 transition-all flex items-center justify-center gap-2 mt-4"
            >
              <Timer className="w-4 h-4" /> Start Mock Examination
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: FINAL SCORECARD & DETAILED REVIEW
  // ==========================================
  if (lastCompletedResult) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Scorecard Hero */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/20">
            <Award className="w-8 h-8" />
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Mock Exam Submission Report
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mt-1">
            Score: {lastCompletedResult.scorePercentage}%
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Completed in {formatTime(lastCompletedResult.timeTakenSeconds)} • Total: {lastCompletedResult.totalQuestions} Questions
          </p>

          {/* Metric Breakdown */}
          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto mt-6">
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800">
              <span className="block text-xl font-bold text-emerald-700 dark:text-emerald-300">
                {lastCompletedResult.correctCount}
              </span>
              <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase">Correct</span>
            </div>
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800">
              <span className="block text-xl font-bold text-rose-700 dark:text-rose-300">
                {lastCompletedResult.incorrectCount}
              </span>
              <span className="text-[11px] font-semibold text-rose-600 dark:text-rose-400 uppercase">Incorrect</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <span className="block text-xl font-bold text-slate-700 dark:text-slate-300">
                {lastCompletedResult.unansweredCount}
              </span>
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase">Skipped</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <button
              onClick={() => setLastCompletedResult(null)}
              className="px-4 py-2 rounded-xl bg-purple-600 text-white font-bold text-xs hover:bg-purple-700 transition-colors"
            >
              Take Another Mock Test
            </button>
            {lastCompletedResult.incorrectCount > 0 && (
              <button
                onClick={onReviewIncorrect}
                className="px-4 py-2 rounded-xl bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200 font-bold text-xs hover:bg-rose-200 transition-colors"
              >
                Review Missed Questions
              </button>
            )}
          </div>
        </div>

        {/* Detailed Question Review List */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Full Question Breakdown & Answers
          </h3>
          {lastCompletedResult.questionDetails.map((det, idx) => {
            const fullQ = getQuestionById(det.questionId);
            return (
              <div 
                key={det.questionId}
                className={`p-5 rounded-2xl border transition-all ${
                  det.isCorrect 
                    ? 'bg-emerald-50/30 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/80' 
                    : det.selectedOptionIds.length === 0
                    ? 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700'
                    : 'bg-rose-50/30 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800/80'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-bold text-xs text-slate-500">
                    Q{idx + 1} • Week {det.week}
                  </span>
                  {det.isCorrect ? (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 dark:text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Correct (+1)
                    </span>
                  ) : det.selectedOptionIds.length === 0 ? (
                    <span className="text-xs font-medium text-slate-400">Skipped (0)</span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 dark:text-rose-400">
                      <XCircle className="w-3.5 h-3.5" /> Incorrect (0)
                    </span>
                  )}
                </div>

                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  {det.questionText}
                </h4>

                <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                  <div>
                    <strong className="text-slate-500">Correct Answer: </strong>
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400">{det.correctAnswerText}</span>
                  </div>
                  {fullQ && (
                    <p className="text-slate-600 dark:text-slate-300 mt-1 italic">
                      {fullQ.detailedReasoning || fullQ.originalExplanation}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 3: ACTIVE TEST TAKING RUNNER
  // ==========================================
  if (!activeSession) return null;

  const currentIdx = activeSession.currentQuestionIndex;
  const currentQId = activeSession.questionIds[currentIdx];
  const currentQ = getQuestionById(currentQId);
  const selectedOptions = activeSession.answers[currentQId] || [];
  const isMarked = !!activeSession.markedForReview[currentQId];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Active Exam Sticky Top Bar */}
      <div className="sticky top-16 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-slate-900 dark:text-white block">
            {activeSession.title}
          </span>
          <span className="text-[11px] text-slate-500 dark:text-slate-400">
            Question {currentIdx + 1} of {activeSession.questionIds.length}
          </span>
        </div>

        {/* Live Countdown Clock */}
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border font-mono font-bold text-sm ${
          activeSession.timeRemainingSeconds < 300
            ? 'bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300 border-rose-300 animate-pulse'
            : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700'
        }`}>
          <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>{formatTime(activeSession.timeRemainingSeconds)}</span>
        </div>

        {/* Final Submit Button */}
        <button
          onClick={() => handleSubmitExam()}
          className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-sm transition-colors"
        >
          Submit Test
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Question Area (3 Cols) */}
        <div className="lg:col-span-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between min-h-[480px]">
          <div>
            {/* Header / Badges */}
            <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-black bg-blue-600 text-white">
                  Q{currentIdx + 1}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  Week {currentQ?.week}
                </span>
                {currentQ?.isCalculationBased && (
                  <span className="text-xs px-2 py-0.5 rounded bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-200 dark:border-amber-800 flex items-center gap-1">
                    <Calculator className="w-3 h-3" /> Numerical
                  </span>
                )}
              </div>

              {/* Mark for Review Button */}
              <button
                onClick={handleToggleMarkReview}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold transition-colors ${
                  isMarked
                    ? 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border border-purple-300 dark:border-purple-800'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                <Flag className="w-3.5 h-3.5 fill-current" />
                {isMarked ? 'Marked for Review' : 'Mark for Review'}
              </button>
            </div>

            {/* Question Prompt */}
            <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100 mb-6 leading-relaxed">
              {currentQ?.questionText}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {currentQ?.options.map((opt, oIdx) => {
                const letter = String.fromCharCode(65 + oIdx);
                const isSelected = selectedOptions.includes(opt.id);

                return (
                  <div
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border text-sm cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-purple-50 dark:bg-purple-950/50 border-purple-500 text-purple-950 dark:text-purple-100 ring-2 ring-purple-500/30 font-semibold'
                        : 'bg-slate-50/60 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-purple-300'
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                      isSelected
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}>
                      {letter}
                    </span>
                    <span className="pt-0.5">{opt.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Nav Controls */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleNavigateQuestion(Math.max(0, currentIdx - 1))}
                disabled={currentIdx === 0}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 disabled:opacity-40"
              >
                Previous
              </button>
              {selectedOptions.length > 0 && (
                <button
                  onClick={handleClearAnswer}
                  className="px-3 py-2 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                >
                  Clear Selection
                </button>
              )}
            </div>

            <button
              onClick={() => handleNavigateQuestion(Math.min(activeSession.questionIds.length - 1, currentIdx + 1))}
              disabled={currentIdx === activeSession.questionIds.length - 1}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm disabled:opacity-40"
            >
              Next Question <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Sidebar Question Palette (1 Col) */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            Question Palette
          </span>

          {/* Palette Grid */}
          <div className="grid grid-cols-5 gap-2">
            {activeSession.questionIds.map((qId, idx) => {
              const isAnswered = !!activeSession.answers[qId];
              const isMarkedReview = !!activeSession.markedForReview[qId];
              const isCurrent = idx === currentIdx;

              let btnClass = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700';

              if (isMarkedReview) {
                btnClass = 'bg-purple-600 text-white font-bold border-purple-700 shadow-sm';
              } else if (isAnswered) {
                btnClass = 'bg-emerald-600 text-white font-bold border-emerald-700 shadow-sm';
              }

              if (isCurrent) {
                btnClass += ' ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-900';
              }

              return (
                <button
                  key={qId}
                  onClick={() => handleNavigateQuestion(idx)}
                  className={`w-9 h-9 rounded-xl text-xs flex items-center justify-center font-bold transition-all ${btnClass}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {/* Palette Legend */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <span className="w-3.5 h-3.5 rounded-md bg-emerald-600" />
              <span>Answered ({Object.keys(activeSession.answers).length})</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <span className="w-3.5 h-3.5 rounded-md bg-purple-600" />
              <span>Marked for Review ({Object.values(activeSession.markedForReview).filter(Boolean).length})</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <span className="w-3.5 h-3.5 rounded-md bg-slate-200 dark:bg-slate-700" />
              <span>Unattempted ({activeSession.questionIds.length - Object.keys(activeSession.answers).length})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

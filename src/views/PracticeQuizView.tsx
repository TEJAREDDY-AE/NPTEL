import React, { useState, useEffect } from 'react';
import { 
  getAllQuestions, 
  getQuestionsByWeek, 
  getWeeks1To7Questions,
  getWeeks6To12Questions,
  getExamScopeQuestions,
  shuffleArray, 
  shuffleQuestionOptions,
  buildJumbledOptionsMap,
  orderQuestionOptionsByIds,
  getQuestionById
} from '../utils/questionStore';
import { StorageService } from '../utils/storage';
import { Question, TestSession } from '../types';
import { VerificationBadge } from '../components/VerificationBadge';
import { 
  Check, 
  X, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  Shuffle, 
  Bookmark, 
  BookmarkCheck, 
  BookOpen, 
  Calculator, 
  Lightbulb, 
  ExternalLink,
  Award,
  ChevronRight,
  ListOrdered,
  Keyboard
} from 'lucide-react';
import { FormulaCalculatorModal } from '../components/FormulaCalculatorModal';

interface Props {
  initialWeek?: number | 'all' | 'exam_scope' | 'weeks_1_7' | 'weeks_6_12';
  onNavigateBank: (week: number) => void;
}

export const PracticeQuizView: React.FC<Props> = ({
  initialWeek = 'weeks_1_7',
  onNavigateBank
}) => {
  const [selectedWeek, setSelectedWeek] = useState<number | 'all' | 'exam_scope' | 'weeks_1_7' | 'weeks_6_12'>(initialWeek);
  const [isOrderedMode, setIsOrderedMode] = useState<boolean>(true);
  const [isOptionsJumbled, setIsOptionsJumbled] = useState<boolean>(() => StorageService.getOptionsJumbled());
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
  const [activeSession, setActiveSession] = useState<TestSession | null>(() => {
    const saved = StorageService.getActiveTestSession();
    if (saved && saved.mode === 'practice') return saved;
    return null;
  });

  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number>(Date.now());

  // Initialize or restore session
  const startNewPractice = (week: number | 'all' | 'exam_scope' | 'weeks_1_7' | 'weeks_6_12' = selectedWeek, shuffle: boolean = !isOrderedMode) => {
    let pool: Question[] = [];
    if (week === 'weeks_1_7' || week === 'exam_scope') {
      pool = getWeeks1To7Questions();
    } else if (week === 'weeks_6_12') {
      pool = getWeeks6To12Questions();
    } else if (week === 'all') {
      pool = getAllQuestions();
    } else {
      pool = getQuestionsByWeek(week);
    }
    
    if (pool.length === 0) pool = getWeeks1To7Questions();

    if (shuffle) {
      pool = shuffleArray(pool);
    }

    const questionIds = pool.map(q => q.id);
    const jumbledMap = buildJumbledOptionsMap(pool);
    const title = (week === 'weeks_1_7' || week === 'exam_scope')
      ? `Weeks 1–7 Practice Session (${shuffle ? 'Shuffled' : 'Sequential Order 1→7'})`
      : week === 'weeks_6_12'
      ? `Weeks 6–12 Practice Session (${shuffle ? 'Shuffled' : 'Sequential Order 6→12'})`
      : week === 'all'
      ? `All-Weeks Comprehensive Practice (${shuffle ? 'Shuffled' : 'Sequential Order'})`
      : `Week ${week} Practice Session`;

    const newSession: TestSession = {
      id: `practice_${Date.now()}`,
      mode: 'practice',
      title,
      weekFilter: week,
      questionIds,
      currentQuestionIndex: 0,
      answers: {},
      markedForReview: {},
      startTime: Date.now(),
      durationSeconds: 0,
      timeRemainingSeconds: 0,
      isSubmitted: false,
      isOptionsJumbled,
      jumbledOptionsMap: jumbledMap
    };

    StorageService.saveActiveTestSession(newSession);
    setActiveSession(newSession);
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
    setStartTime(Date.now());
  };

  useEffect(() => {
    if (!activeSession) {
      startNewPractice(selectedWeek, !isOrderedMode);
    }
  }, [selectedWeek]);

  // Current Question
  const currentQId = activeSession ? activeSession.questionIds[activeSession.currentQuestionIndex] : null;
  const currentQuestion = currentQId ? getQuestionById(currentQId) : null;

  // Determine displayed options (either jumbled from session map or original)
  const displayOptions = React.useMemo(() => {
    if (!currentQuestion) return [];
    if (!isOptionsJumbled) return currentQuestion.options;
    const orderedIds = activeSession?.jumbledOptionsMap?.[currentQuestion.id];
    if (orderedIds && orderedIds.length > 0) {
      return orderQuestionOptionsByIds(currentQuestion.options, orderedIds);
    }
    return currentQuestion.options;
  }, [currentQuestion, isOptionsJumbled, activeSession?.jumbledOptionsMap]);

  const handleToggleOptionJumble = () => {
    const nextVal = !isOptionsJumbled;
    setIsOptionsJumbled(nextVal);
    StorageService.setOptionsJumbled(nextVal);
    if (!isAnswerSubmitted) {
      setSelectedOptionId(null);
    }
  };

  const handleReJumbleCurrentOptions = () => {
    if (!currentQuestion || !activeSession) return;
    const newOrder = shuffleArray(currentQuestion.options).map(o => o.id);
    const updatedSession: TestSession = {
      ...activeSession,
      jumbledOptionsMap: {
        ...(activeSession.jumbledOptionsMap || {}),
        [currentQuestion.id]: newOrder
      }
    };
    StorageService.saveActiveTestSession(updatedSession);
    setActiveSession(updatedSession);
    if (!isAnswerSubmitted) {
      setSelectedOptionId(null);
    }
  };

  useEffect(() => {
    if (currentQId) {
      setIsBookmarked(StorageService.isBookmarked(currentQId));
      // check if already answered
      if (activeSession && activeSession.answers[currentQId]) {
        setSelectedOptionId(activeSession.answers[currentQId][0]);
        setIsAnswerSubmitted(true);
      } else {
        setSelectedOptionId(null);
        setIsAnswerSubmitted(false);
      }
      setStartTime(Date.now());
    }
  }, [currentQId, activeSession]);

  const handleSelectOption = (optId: string) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionId(optId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOptionId || !currentQuestion || !activeSession) return;
    
    setIsAnswerSubmitted(true);
    const chosenOpt = currentQuestion.options.find(o => o.id === selectedOptionId);
    const isCorrect = !!chosenOpt?.isCorrect;
    const timeSpent = Math.max(1, Math.round((Date.now() - startTime) / 1000));

    // Save attempt in user history
    StorageService.recordAttempt({
      questionId: currentQuestion.id,
      selectedOptionIds: [selectedOptionId],
      isCorrect,
      timestamp: Date.now(),
      timeSpentSeconds: timeSpent
    });

    // Update active session answers
    const updatedAnswers = {
      ...activeSession.answers,
      [currentQuestion.id]: [selectedOptionId]
    };
    const updatedSession: TestSession = {
      ...activeSession,
      answers: updatedAnswers
    };
    StorageService.saveActiveTestSession(updatedSession);
    setActiveSession(updatedSession);
  };

  const handleNext = () => {
    if (!activeSession) return;
    if (activeSession.currentQuestionIndex < activeSession.questionIds.length - 1) {
      const nextIdx = activeSession.currentQuestionIndex + 1;
      const updated: TestSession = {
        ...activeSession,
        currentQuestionIndex: nextIdx
      };
      StorageService.saveActiveTestSession(updated);
      setActiveSession(updated);
    }
  };

  const handlePrev = () => {
    if (!activeSession) return;
    if (activeSession.currentQuestionIndex > 0) {
      const prevIdx = activeSession.currentQuestionIndex - 1;
      const updated: TestSession = {
        ...activeSession,
        currentQuestionIndex: prevIdx
      };
      StorageService.saveActiveTestSession(updated);
      setActiveSession(updated);
    }
  };

  const handleToggleBookmark = () => {
    if (!currentQuestion) return;
    StorageService.toggleBookmark(currentQuestion.id);
    setIsBookmarked(!isBookmarked);
  };

  // Keyboard Navigation: [1-4] or [A-D] to pick option, [Enter] to submit/next, [B] for bookmark
  useEffect(() => {
    if (!currentQuestion) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      const key = e.key.toLowerCase();

      if (!isAnswerSubmitted) {
        if (key === '1' || key === 'a') {
          if (displayOptions[0]) setSelectedOptionId(displayOptions[0].id);
        } else if (key === '2' || key === 'b') {
          if (displayOptions[1]) setSelectedOptionId(displayOptions[1].id);
        } else if (key === '3' || key === 'c') {
          if (displayOptions[2]) setSelectedOptionId(displayOptions[2].id);
        } else if (key === '4' || key === 'd') {
          if (displayOptions[3]) setSelectedOptionId(displayOptions[3].id);
        }
      }

      if (key === 'enter') {
        if (!isAnswerSubmitted && selectedOptionId) {
          handleSubmitAnswer();
        } else if (isAnswerSubmitted) {
          handleNext();
        }
      }

      if ((key === 'arrowright' || key === 'n') && isAnswerSubmitted) {
        handleNext();
      }

      if (key === 'arrowleft' || key === 'p') {
        handlePrev();
      }

      if (key === 'b') {
        handleToggleBookmark();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestion, isAnswerSubmitted, selectedOptionId, activeSession]);

  if (!activeSession || !currentQuestion) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-10 text-center">
        <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-2">No Active Practice Session</h3>
        <button
          onClick={() => startNewPractice(selectedWeek, true)}
          className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs"
        >
          Start Practice
        </button>
      </div>
    );
  }

  const currentIndex = activeSession.currentQuestionIndex;
  const totalQuestions = activeSession.questionIds.length;
  const answeredCount = Object.keys(activeSession.answers).length;

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {/* Formula Calculator Modal */}
      <FormulaCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      {/* Session Controls Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Scope:
          </span>
          <select
            value={selectedWeek}
            onChange={(e) => {
              const raw = e.target.value;
              const val = (raw === 'weeks_1_7' || raw === 'exam_scope') ? 'weeks_1_7' : raw === 'weeks_6_12' ? 'weeks_6_12' : raw === 'all' ? 'all' : parseInt(raw, 10);
              setSelectedWeek(val);
              startNewPractice(val, !isOrderedMode);
            }}
            className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 focus:outline-none"
          >
            <option value="weeks_1_7">🎯 Weeks 1–7 (Uploaded Scope - 70 Qs)</option>
            <option value="weeks_6_12">🎯 Weeks 6–12 (Target Scope - 70 Qs)</option>
            <option value="1">Week 1 (Network Intro & Delays - 10 Qs Uploaded)</option>
            <option value="2">Week 2 (OSI Model & Framing - 10 Qs Uploaded)</option>
            <option value="3">Week 3 (HTTP, DNS, Protocols - 10 Qs Uploaded)</option>
            <option value="4">Week 4 (P2P, HTTP/2, HTTP/3 QUIC - 10 Qs Uploaded)</option>
            <option value="5">Week 5 (Transport & Socket API - 10 Qs Uploaded)</option>
            <option value="6">Week 6 (IP Protocol Architecture - 10 Qs)</option>
            <option value="7">Week 7 (TCP Flow & Congestion - 10 Qs Uploaded)</option>
            <option value="8">Week 8 (UDP & Timers - 10 Qs)</option>
            <option value="9">Week 9 (Routing Algorithms - 10 Qs Uploaded)</option>
            <option value="10">Week 10 (BGP & ICMP - 10 Qs Uploaded)</option>
            <option value="11">Week 11 (Network Services - 10 Qs)</option>
            <option value="12">Week 12 (Security & Cryptography - 10 Qs)</option>
            <option value="all">All Weeks 1–12 (Full Course - 120 Qs)</option>
          </select>

          <span className="text-xs text-slate-400 ml-1">
            Progress: <strong className="text-blue-600 dark:text-blue-400">{answeredCount}/{totalQuestions}</strong>
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Order Toggle */}
          <button
            onClick={() => {
              const newOrdered = !isOrderedMode;
              setIsOrderedMode(newOrdered);
              startNewPractice(selectedWeek, !newOrdered);
            }}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              isOrderedMode
                ? 'bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-200 border border-blue-300 dark:border-blue-800'
                : 'bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-800'
            }`}
            title="Toggle between Sequential and Shuffled question order"
          >
            {isOrderedMode ? (
              <>
                <ListOrdered className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Order: Sequential (1→7)</span>
              </>
            ) : (
              <>
                <Shuffle className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span>Order: Shuffled</span>
              </>
            )}
          </button>

          {/* Options Jumbling System Toggle */}
          <button
            onClick={handleToggleOptionJumble}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              isOptionsJumbled
                ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-800 shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
            }`}
            title="Randomize option order (A, B, C, D) to prevent position memorization and practice choosing the correct answer"
          >
            <Shuffle className={`w-3.5 h-3.5 ${isOptionsJumbled ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`} />
            <span>Options: {isOptionsJumbled ? 'Jumbled' : 'Original'}</span>
          </button>

          {/* Formulas Button */}
          <button
            onClick={() => setIsCalculatorOpen(true)}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 transition-colors"
            title="Open Formula Sheet & Live Delay Calculator"
          >
            <Calculator className="w-3.5 h-3.5 text-amber-500" /> Formulas
          </button>

          <button
            onClick={() => startNewPractice(selectedWeek, !isOrderedMode)}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 transition-colors"
            title="Restart Quiz"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Restart
          </button>
        </div>
      </div>

      {/* Keyboard Shortcuts Hint Banner */}
      <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 text-[11px] text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800">
        <span className="flex items-center gap-1.5 flex-wrap">
          <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1">
            <Keyboard className="w-3.5 h-3.5 text-blue-500" /> Quick Keys:
          </span>
          <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-700 shadow-2xs font-mono font-bold text-slate-800 dark:text-slate-200">1-4</kbd> Pick Option •
          <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-700 shadow-2xs font-mono font-bold text-slate-800 dark:text-slate-200">Enter</kbd> Submit/Next •
          <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-700 shadow-2xs font-mono font-bold text-slate-800 dark:text-slate-200">B</kbd> Bookmark •
          <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-700 shadow-2xs font-mono font-bold text-slate-800 dark:text-slate-200">←/→</kbd> Nav
        </span>
        <button
          onClick={() => setIsCalculatorOpen(true)}
          className="hover:text-blue-500 font-medium underline underline-offset-2 flex items-center gap-1 flex-shrink-0"
        >
          <Calculator className="w-3 h-3 text-amber-500" />
          Formula Desk
        </button>
      </div>

      {/* Question Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        {/* Question Header & Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-xs font-black bg-blue-600 text-white">
              Question {currentIndex + 1} of {totalQuestions}
            </span>
            <span className="px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              Week {currentQuestion.week}
            </span>
            <VerificationBadge status={currentQuestion.verificationStatus} />
            {currentQuestion.isCalculationBased && (
              <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                <Calculator className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                Calculation
              </span>
            )}
          </div>

          <button
            onClick={handleToggleBookmark}
            className="p-1.5 rounded-lg text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isBookmarked ? (
              <BookmarkCheck className="w-5 h-5 text-amber-500 fill-amber-500" />
            ) : (
              <Bookmark className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Question Prompt */}
        <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100 mb-5 leading-relaxed">
          {currentQuestion.questionText}
        </h3>

        {/* Options Header with Jumbling Controls */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {isAnswerSubmitted ? 'Verification Result:' : 'Choose the correct option:'}
            </span>
            {isOptionsJumbled && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                <Shuffle className="w-2.5 h-2.5" /> Jumbled A–D
              </span>
            )}
          </div>

          {isOptionsJumbled && (
            <button
              onClick={handleReJumbleCurrentOptions}
              disabled={isAnswerSubmitted}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 disabled:opacity-40 transition-colors"
              title="Re-jumble choices for this question"
            >
              <Shuffle className="w-3 h-3" /> Re-jumble Choices
            </button>
          )}
        </div>

        {/* Interactive Options */}
        <div className="space-y-3 mb-6">
          {displayOptions.map((option, idx) => {
            const letter = String.fromCharCode(65 + idx);
            const isSelected = selectedOptionId === option.id;
            const isCorrect = option.isCorrect;

            let optionStyle = 'bg-slate-50/70 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-blue-400 hover:bg-blue-50/30';
            
            if (isAnswerSubmitted) {
              if (isCorrect) {
                optionStyle = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 dark:border-emerald-700 text-emerald-950 dark:text-emerald-100 font-semibold shadow-sm';
              } else if (isSelected && !isCorrect) {
                optionStyle = 'bg-rose-50 dark:bg-rose-950/40 border-rose-400 dark:border-rose-700 text-rose-950 dark:text-rose-100 font-semibold';
              } else {
                optionStyle = 'opacity-60 bg-slate-50 dark:bg-slate-800/20 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400';
              }
            } else if (isSelected) {
              optionStyle = 'bg-blue-50 dark:bg-blue-950/50 border-blue-500 text-blue-900 dark:text-blue-100 ring-2 ring-blue-500/30 font-semibold';
            }

            return (
              <div
                key={option.id}
                onClick={() => handleSelectOption(option.id)}
                className={`flex items-start gap-3.5 p-4 rounded-xl border text-sm cursor-pointer transition-all ${optionStyle}`}
              >
                <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 transition-colors ${
                  isAnswerSubmitted && isCorrect
                    ? 'bg-emerald-600 text-white'
                    : isAnswerSubmitted && isSelected && !isCorrect
                    ? 'bg-rose-600 text-white'
                    : isSelected
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}>
                  {isAnswerSubmitted && isCorrect ? (
                    <Check className="w-4 h-4" />
                  ) : isAnswerSubmitted && isSelected && !isCorrect ? (
                    <X className="w-4 h-4" />
                  ) : (
                    letter
                  )}
                </span>

                <div className="flex-1 pt-0.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-medium">{option.text}</span>
                    <div className="flex items-center gap-1.5">
                      {isAnswerSubmitted && isSelected && (
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isCorrect ? 'bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200' : 'bg-rose-200 dark:bg-rose-900 text-rose-900 dark:text-rose-200'
                        }`}>
                          {isCorrect ? '✓ Your Choice (Correct)' : '✗ Your Choice (Wrong)'}
                        </span>
                      )}
                      {isAnswerSubmitted && isCorrect && !isSelected && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-200/80 dark:bg-emerald-900/80 text-emerald-900 dark:text-emerald-200">
                          ✓ Correct Answer
                        </span>
                      )}
                      {isAnswerSubmitted && option.originalPosition && (
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                          Official: {option.originalPosition}
                        </span>
                      )}
                    </div>
                  </div>

                  {isAnswerSubmitted && option.explanation && (
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 italic">
                      {option.explanation}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button: Submit or Next */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Previous
          </button>

          {!isAnswerSubmitted ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={!selectedOptionId}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={currentIndex === totalQuestions - 1}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              Next Question <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Detailed Explanation Reveal (Appears immediately after submission) */}
        {isAnswerSubmitted && (
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4 animate-fadeIn">
            {/* Feedback Banner */}
            {selectedOptionId && currentQuestion.options.find(o => o.id === selectedOptionId)?.isCorrect ? (
              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100 text-xs md:text-sm font-semibold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                Correct! Outstanding work. Review the detailed technical rationale below.
              </div>
            ) : (
              <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-100 text-xs md:text-sm font-semibold flex items-center gap-2">
                <X className="w-4 h-4 text-rose-600 dark:text-rose-400 flex-shrink-0" />
                Incorrect. The correct answer is: <strong className="underline">{currentQuestion.verifiedAnswer}</strong>.
              </div>
            )}

            {/* Conceptual Reasoning */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                Why This Answer Is Correct
              </h4>
              <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {currentQuestion.detailedReasoning || currentQuestion.originalExplanation}
              </p>
            </div>

            {/* Calculations Breakdown */}
            {currentQuestion.stepByStepCalculation && currentQuestion.stepByStepCalculation.length > 0 && (
              <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60">
                <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-2">
                  <Calculator className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  Independent Calculation Steps
                </h4>
                <div className="space-y-1 font-mono text-xs md:text-sm text-slate-800 dark:text-slate-200 bg-white/70 dark:bg-slate-900/70 p-3 rounded-lg border border-amber-200/60 dark:border-amber-900/40">
                  {currentQuestion.stepByStepCalculation.map((step, idx) => (
                    <div key={idx}>{step}</div>
                  ))}
                </div>
              </div>
            )}

            {/* Exam Takeaway */}
            {currentQuestion.examTakeaway && (
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900/50 text-xs text-purple-900 dark:text-purple-200">
                <Lightbulb className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold">Exam Takeaway: </strong>
                  <span>{currentQuestion.examTakeaway}</span>
                </div>
              </div>
            )}

            {/* RFC Citations */}
            {currentQuestion.citations && currentQuestion.citations.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold">References:</span>
                {currentQuestion.citations.map((cite, idx) => (
                  <span key={idx} className="font-medium text-blue-600 dark:text-blue-400">
                    {cite.title}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Question Navigation Palette */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
        <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
          Question Palette
        </span>
        <div className="flex flex-wrap gap-2">
          {activeSession.questionIds.map((qId, idx) => {
            const isAnswered = !!activeSession.answers[qId];
            const isCurrent = idx === currentIndex;
            return (
              <button
                key={qId}
                onClick={() => {
                  const updated: TestSession = {
                    ...activeSession,
                    currentQuestionIndex: idx
                  };
                  StorageService.saveActiveTestSession(updated);
                  setActiveSession(updated);
                }}
                className={`w-8 h-8 rounded-lg font-bold text-xs flex items-center justify-center transition-all ${
                  isCurrent
                    ? 'ring-2 ring-blue-500 bg-blue-600 text-white shadow-sm'
                    : isAnswered
                    ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { VerificationBadge } from './VerificationBadge';
import { StorageService } from '../utils/storage';
import { shuffleArray } from '../utils/questionStore';
import { 
  Bookmark, 
  BookmarkCheck, 
  Calculator, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Check, 
  X, 
  Lightbulb, 
  BookOpen, 
  Cpu, 
  FileCheck2,
  Shuffle,
  RotateCcw
} from 'lucide-react';

interface Props {
  question: Question;
  showAnswerByDefault?: boolean;
  onBookmarkToggle?: () => void;
  className?: string;
  isJumbled?: boolean;
}

export const QuestionCard: React.FC<Props> = ({
  question,
  showAnswerByDefault = false,
  onBookmarkToggle,
  className = '',
  isJumbled = false
}) => {
  const [isExpanded, setIsExpanded] = useState(showAnswerByDefault);
  const [isBookmarked, setIsBookmarked] = useState(() => StorageService.isBookmarked(question.id));
  
  // Option Jumbling & Interactive "Choose the Correct" State
  const [isLocallyJumbled, setIsLocallyJumbled] = useState<boolean>(false);
  const isJumbledMode = isJumbled || isLocallyJumbled;
  const [jumbledOptions, setJumbledOptions] = useState<Question['options']>(() => {
    return isJumbled ? shuffleArray(question.options) : question.options;
  });
  const [userSelectedOptId, setUserSelectedOptId] = useState<string | null>(null);

  useEffect(() => {
    if (isJumbled) {
      setJumbledOptions(shuffleArray(question.options));
    } else if (!isLocallyJumbled) {
      setJumbledOptions(question.options);
    }
    setUserSelectedOptId(null);
  }, [isJumbled, question]);

  const handleJumbleChoices = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLocallyJumbled(true);
    setJumbledOptions(shuffleArray(question.options));
    setUserSelectedOptId(null);
  };

  const handleResetOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLocallyJumbled(false);
    setJumbledOptions(question.options);
    setUserSelectedOptId(null);
  };

  const handleSelectOption = (optId: string) => {
    if (userSelectedOptId === optId) {
      setUserSelectedOptId(null);
    } else {
      setUserSelectedOptId(optId);
    }
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    StorageService.toggleBookmark(question.id);
    setIsBookmarked(!isBookmarked);
    if (onBookmarkToggle) onBookmarkToggle();
  };

  return (
    <div className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all ${className}`}>
      {/* Header Badges */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800/80">
        <div className="flex flex-wrap items-center gap-2">
          {/* Week & Question Ordinal */}
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            Week {question.week} • Q{question.questionNumber}
          </span>

          {/* Collection A vs Collection B */}
          {question.collection === 'original' ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
              <FileCheck2 className="w-3 h-3 text-purple-600 dark:text-purple-400" />
              Collection A: Original Assignment
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              <Cpu className="w-3 h-3 text-indigo-500" />
              Collection B: AI-Generated Practice
            </span>
          )}

          {/* Verification Status */}
          <VerificationBadge status={question.verificationStatus} />

          {/* Calculation Badge */}
          {question.isCalculationBased && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium bg-amber-50 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60">
              <Calculator className="w-3 h-3 text-amber-600 dark:text-amber-400" />
              Numerical Calculation
            </span>
          )}
        </div>

        {/* Bookmark Action */}
        <button
          onClick={handleBookmark}
          title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Question'}
          className="p-1.5 rounded-lg text-slate-400 hover:text-amber-500 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          {isBookmarked ? (
            <BookmarkCheck className="w-5 h-5 text-amber-500 fill-amber-500" />
          ) : (
            <Bookmark className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Question Text */}
      <div className="mb-4">
        <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
          {question.questionText}
        </h3>
      </div>

      {/* Options Header with Jumbling Controls */}
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {userSelectedOptId ? 'Self-Check Result:' : 'Choose the correct option:'}
          </span>
          {isJumbledMode && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-950/80 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
              <Shuffle className="w-2.5 h-2.5" /> Jumbled
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleJumbleChoices}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 hover:bg-purple-100 transition-colors"
            title="Randomize option order (A, B, C, D) for choose-the-correct testing"
          >
            <Shuffle className="w-3 h-3" />
            <span>{isJumbledMode ? 'Re-jumble' : 'Jumble Choices'}</span>
          </button>

          {isLocallyJumbled && (
            <button
              type="button"
              onClick={handleResetOrder}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 transition-colors"
              title="Reset to original assignment option order"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Original</span>
            </button>
          )}

          {userSelectedOptId && (
            <button
              type="button"
              onClick={() => setUserSelectedOptId(null)}
              className="text-[11px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 underline px-1"
            >
              Clear Choice
            </button>
          )}
        </div>
      </div>

      {/* Options List */}
      <div className="space-y-2 mb-4">
        {(isJumbledMode ? jumbledOptions : question.options).map((option, idx) => {
          const letter = String.fromCharCode(65 + idx); // A, B, C, D
          const isCorrect = option.isCorrect;
          const isSelected = userSelectedOptId === option.id;
          const showAnswerFeedback = isExpanded || userSelectedOptId !== null;
          
          let containerStyle = 'bg-slate-50/50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-blue-400 hover:bg-blue-50/30 cursor-pointer';
          let badgeStyle = 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300';

          if (showAnswerFeedback) {
            if (isCorrect) {
              containerStyle = 'bg-emerald-50/90 dark:bg-emerald-950/40 border-emerald-400 dark:border-emerald-700 text-emerald-950 dark:text-emerald-100 font-medium shadow-sm';
              badgeStyle = 'bg-emerald-600 text-white';
            } else if (isSelected && !isCorrect) {
              containerStyle = 'bg-rose-50 dark:bg-rose-950/40 border-rose-400 dark:border-rose-700 text-rose-950 dark:text-rose-100 font-medium';
              badgeStyle = 'bg-rose-600 text-white';
            } else {
              containerStyle = 'opacity-70 bg-slate-50/40 dark:bg-slate-800/20 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400';
            }
          }

          return (
            <div
              key={option.id || idx}
              onClick={() => handleSelectOption(option.id)}
              className={`flex items-start gap-3 p-3 rounded-xl border text-sm transition-all ${containerStyle}`}
            >
              <div className="flex-shrink-0 mt-0.5">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${badgeStyle}`}>
                  {showAnswerFeedback && isCorrect ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : showAnswerFeedback && isSelected && !isCorrect ? (
                    <X className="w-3.5 h-3.5" />
                  ) : (
                    letter
                  )}
                </span>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-medium">{option.text}</span>
                  <div className="flex items-center gap-1.5">
                    {isSelected && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isCorrect ? 'bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200' : 'bg-rose-200 dark:bg-rose-900 text-rose-900 dark:text-rose-200'
                      }`}>
                        {isCorrect ? '✓ Your Choice (Correct)' : '✗ Your Choice'}
                      </span>
                    )}
                    {showAnswerFeedback && isCorrect && !isSelected && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-200/80 dark:bg-emerald-900/80 text-emerald-900 dark:text-emerald-200">
                        ✓ Correct Answer
                      </span>
                    )}
                    {showAnswerFeedback && option.originalPosition && (
                      <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                        Official: {option.originalPosition}
                      </span>
                    )}
                  </div>
                </div>

                {showAnswerFeedback && option.explanation && (
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 italic">
                    {option.explanation}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Toggle Solution / Detailed Reasoning */}
      <div className="pt-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Hide Detailed Solution & Verification
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              View Verified Solution, Calculations & Citations
            </>
          )}
        </button>

        {/* Expanded Details Pane */}
        {isExpanded && (
          <div className="mt-4 space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-sm animate-fadeIn">
            {/* Answer Agreement Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="block text-xs uppercase font-bold text-slate-500 dark:text-slate-400 mb-1">
                  1. Document Supplied Answer
                </span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {question.originalAnswer}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                <span className="block text-xs uppercase font-bold text-emerald-700 dark:text-emerald-400 mb-1 flex items-center justify-between">
                  <span>2. Independently Verified Answer</span>
                  {question.answersAgree ? (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-200 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">
                      ✓ Answers Agree
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-200 text-rose-800">
                      ⚠ Conflict
                    </span>
                  )}
                </span>
                <span className="font-semibold text-emerald-950 dark:text-emerald-100">
                  {question.verifiedAnswer}
                </span>
              </div>
            </div>

            {/* Conceptual Reasoning */}
            <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/50">
              <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                Conceptual Explanation & Technical Reasoning
              </h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs md:text-sm">
                {question.detailedReasoning || question.originalExplanation}
              </p>
            </div>

            {/* Step-by-Step Calculation (if present) */}
            {question.stepByStepCalculation && question.stepByStepCalculation.length > 0 && (
              <div className="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40">
                <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-2">
                  <Calculator className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  Step-by-Step Calculation & Formula Derivation
                </h4>
                <div className="space-y-1.5 text-xs md:text-sm font-mono text-slate-800 dark:text-slate-200 bg-white/60 dark:bg-slate-900/60 p-3 rounded-lg border border-amber-100 dark:border-amber-900/30">
                  {question.stepByStepCalculation.map((step, sIdx) => (
                    <div key={sIdx} className="leading-relaxed">
                      {step}
                    </div>
                  ))}
                </div>
                {question.formulasUsed && question.formulasUsed.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {question.formulasUsed.map((form, fIdx) => (
                      <span key={fIdx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-200 border border-amber-200 dark:border-amber-800">
                        {form}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Exam Takeaway */}
            {question.examTakeaway && (
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40 text-xs text-purple-900 dark:text-purple-200">
                <Lightbulb className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold">Exam Takeaway: </strong>
                  <span>{question.examTakeaway}</span>
                </div>
              </div>
            )}

            {/* Citations & Traceability */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-slate-600 dark:text-slate-300">Source:</span>
                <span className="font-mono">{question.sourceFileName}</span>
                {question.pageNumber && (
                  <span>({question.pageNumber})</span>
                )}
              </div>

              {question.citations && question.citations.length > 0 && (
                <div className="flex items-center gap-3">
                  {question.citations.map((cite, cIdx) => (
                    <span key={cIdx} className="inline-flex items-center gap-1">
                      {cite.url ? (
                        <a
                          href={cite.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-0.5"
                        >
                          {cite.title}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-slate-600 dark:text-slate-300 font-medium">{cite.title}</span>
                      )}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

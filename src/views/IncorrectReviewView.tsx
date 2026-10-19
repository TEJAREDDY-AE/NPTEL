import React, { useState } from 'react';
import { StorageService } from '../utils/storage';
import { getQuestionById } from '../utils/questionStore';
import { QuestionCard } from '../components/QuestionCard';
import { AlertTriangle, CheckCircle2, RotateCcw, Play, BookOpen } from 'lucide-react';
import { Question } from '../types';

interface Props {
  onStartRetest: (questionIds: string[]) => void;
}

export const IncorrectReviewView: React.FC<Props> = ({ onStartRetest }) => {
  const attempts = StorageService.getAttempts();
  
  // Find all incorrectly answered questions
  const incorrectQIds = Object.keys(attempts).filter(qId => !attempts[qId].isCorrect);
  const incorrectQuestions = incorrectQIds
    .map(id => getQuestionById(id))
    .filter(Boolean) as Question[];

  const [selectedWeek, setSelectedWeek] = useState<number | 'all'>('all');

  const filtered = incorrectQuestions.filter(q => {
    if (selectedWeek !== 'all' && q.week !== selectedWeek) return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Incorrect-Answer Revision Clinic
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Target and master concepts you previously answered incorrectly across practice and mock tests.
              </p>
            </div>
          </div>

          {filtered.length > 0 && (
            <button
              onClick={() => onStartRetest(filtered.map(q => q.id))}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-sm transition-colors"
            >
              <RotateCcw className="w-4 h-4" /> Re-attempt {filtered.length} Missed Questions
            </button>
          )}
        </div>

        {/* Filter by Week */}
        {incorrectQuestions.length > 0 && (
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Filter by Week:
            </span>
            <select
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10))}
              className="text-xs px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 focus:outline-none"
            >
              <option value="all">All Missed Weeks ({incorrectQuestions.length})</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map(w => {
                const count = incorrectQuestions.filter(q => q.week === w).length;
                if (count === 0) return null;
                return (
                  <option key={w} value={w}>Week {w} ({count} missed)</option>
                );
              })}
            </select>
          </div>
        )}
      </div>

      {/* Empty State */}
      {incorrectQuestions.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-10 text-center">
          <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
            No Missed Questions Recorded!
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto mt-1">
            You haven’t answered any questions incorrectly yet, or all your recent attempts were 100% accurate.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              showAnswerByDefault={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

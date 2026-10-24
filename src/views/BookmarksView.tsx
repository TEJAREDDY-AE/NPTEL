import React, { useState } from 'react';
import { StorageService } from '../utils/storage';
import { getQuestionById } from '../utils/questionStore';
import { QuestionCard } from '../components/QuestionCard';
import { Bookmark, BookmarkCheck, Play, Sparkles, BookOpen, Shuffle } from 'lucide-react';
import { Question } from '../types';

interface Props {
  onStartBookmarkQuiz: (questionIds: string[]) => void;
}

export const BookmarksView: React.FC<Props> = ({ onStartBookmarkQuiz }) => {
  const [bookmarkIds, setBookmarkIds] = useState<string[]>(() => StorageService.getBookmarks());
  const [selectedWeek, setSelectedWeek] = useState<number | 'all'>('all');
  const [isOptionsJumbled, setIsOptionsJumbled] = useState<boolean>(() => StorageService.getOptionsJumbled());

  const bookmarkedQuestions = bookmarkIds
    .map(id => getQuestionById(id))
    .filter(Boolean) as Question[];

  const filtered = bookmarkedQuestions.filter(q => {
    if (selectedWeek !== 'all' && q.week !== selectedWeek) return false;
    return true;
  });

  const handleRefresh = () => {
    setBookmarkIds(StorageService.getBookmarks());
  };

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Bookmark className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Bookmarked Questions for Revision
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Curated questions you flagged for last-minute review prior to Sunday, 25 October 2026.
              </p>
            </div>
          </div>

          {filtered.length > 0 && (
            <button
              onClick={() => onStartBookmarkQuiz(filtered.map(q => q.id))}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white shadow-sm transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-current" /> Quiz Bookmarked Questions ({filtered.length})
            </button>
          )}
        </div>

        {/* Filter Bar */}
        {bookmarkedQuestions.length > 0 && (
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Filter by Week:
            </span>
            <select
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10))}
              className="text-xs px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 focus:outline-none"
            >
              <option value="all">All Saved Weeks ({bookmarkedQuestions.length})</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map(w => {
                const count = bookmarkedQuestions.filter(q => q.week === w).length;
                if (count === 0) return null;
                return (
                  <option key={w} value={w}>Week {w} ({count} saved)</option>
                );
              })}
            </select>

            <button
              onClick={() => {
                const next = !isOptionsJumbled;
                setIsOptionsJumbled(next);
                StorageService.setOptionsJumbled(next);
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ml-auto ${
                isOptionsJumbled
                  ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 border border-amber-300 dark:border-amber-700 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
              title="Jumble option order (A, B, C, D) for choose-the-correct testing"
            >
              <Shuffle className={`w-3.5 h-3.5 ${isOptionsJumbled ? 'text-amber-600 dark:text-amber-400' : 'text-slate-400'}`} />
              <span>Options: {isOptionsJumbled ? 'Jumbled' : 'Original'}</span>
            </button>
          </div>
        )}
      </div>

      {/* Questions List */}
      {bookmarkedQuestions.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-10 text-center">
          <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto mb-3">
            <Bookmark className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
            No Bookmarks Saved Yet
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto mt-1">
            Click the star/bookmark icon on any question in the Question Bank, Practice Quiz, or Solution Review to save it here.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              onBookmarkToggle={handleRefresh}
              isJumbled={isOptionsJumbled}
            />
          ))}
        </div>
      )}
    </div>
  );
};

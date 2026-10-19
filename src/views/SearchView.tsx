import React, { useState } from 'react';
import { getAllQuestions, filterQuestions } from '../utils/questionStore';
import { QuestionCard } from '../components/QuestionCard';
import { CollectionType, VerificationStatus } from '../types';
import { 
  Search, 
  Filter, 
  X, 
  Calculator, 
  FileCheck2, 
  Cpu, 
  Bookmark, 
  AlertTriangle,
  RotateCcw
} from 'lucide-react';

export const SearchView: React.FC = () => {
  const [query, setQuery] = useState('');
  const [week, setWeek] = useState<number | 'all'>('all');
  const [collection, setCollection] = useState<CollectionType | 'all'>('all');
  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus | 'all'>('all');
  const [onlyCalculations, setOnlyCalculations] = useState(false);
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);
  const [onlyIncorrect, setOnlyIncorrect] = useState(false);

  const allQuestions = getAllQuestions();

  const filtered = filterQuestions(allQuestions, {
    query,
    week,
    collection,
    verificationStatus,
    onlyCalculations,
    onlyBookmarked,
    onlyIncorrect
  });

  const handleResetFilters = () => {
    setQuery('');
    setWeek('all');
    setCollection('all');
    setVerificationStatus('all');
    setOnlyCalculations(false);
    setOnlyBookmarked(false);
    setOnlyIncorrect(false);
  };

  const hasActiveFilters = query || week !== 'all' || collection !== 'all' || verificationStatus !== 'all' || onlyCalculations || onlyBookmarked || onlyIncorrect;

  return (
    <div className="space-y-6">
      {/* Search Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Universal Question & Concept Search
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Query across question wording, technical formulas, explanations, RFC standards, and answers.
              </p>
            </div>
          </div>

          {hasActiveFilters && (
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 hover:text-rose-700 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Filters
            </button>
          )}
        </div>

        {/* Search Query Bar */}
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search keywords (e.g. 'Reno', 'rwnd', 'BGP 179', 'Split horizon', 'Dijkstra', 'TTL', 'CRC')..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-11 pr-10 py-3 rounded-xl text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          {/* Week Selector */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Week
            </label>
            <select
              value={week}
              onChange={(e) => setWeek(e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10))}
              className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none"
            >
              <option value="all">All Weeks (1–12)</option>
              {Array.from({ length: 12 }, (_, i) => i + 1).map(w => (
                <option key={w} value={w}>Week {w}</option>
              ))}
            </select>
          </div>

          {/* Collection Filter */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Collection
            </label>
            <select
              value={collection}
              onChange={(e) => setCollection(e.target.value as CollectionType | 'all')}
              className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none"
            >
              <option value="all">All Collections</option>
              <option value="original">Collection A (Original Uploads)</option>
              <option value="generated">Collection B (AI Practice)</option>
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              Verification Status
            </label>
            <select
              value={verificationStatus}
              onChange={(e) => setVerificationStatus(e.target.value as VerificationStatus | 'all')}
              className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:outline-none"
            >
              <option value="all">All Statuses</option>
              <option value="verified">Verified</option>
              <option value="missing_options">Missing Options</option>
              <option value="conflict_detected">Conflict Detected</option>
              <option value="needs_review">Needs Review</option>
            </select>
          </div>

          {/* Quick Boolean Filter Chips */}
          <div className="flex flex-col justify-end">
            <div className="flex flex-wrap gap-1.5 pt-1">
              <button
                onClick={() => setOnlyCalculations(!onlyCalculations)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 ${
                  onlyCalculations
                    ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200 border border-amber-300'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                <Calculator className="w-3 h-3 text-amber-600" /> Math Only
              </button>
              <button
                onClick={() => setOnlyBookmarked(!onlyBookmarked)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1 ${
                  onlyBookmarked
                    ? 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-200 border border-purple-300'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                <Bookmark className="w-3 h-3 text-purple-600" /> Bookmarks
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
        <span>Found <strong className="text-slate-800 dark:text-white">{filtered.length}</strong> matching questions</span>
        <span>Repository Total: {allQuestions.length}</span>
      </div>

      {/* Results List */}
      <div className="space-y-4">
        {filtered.map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
          />
        ))}

        {filtered.length === 0 && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-10 text-center text-slate-500 dark:text-slate-400 text-sm">
            No questions matched your search query. Try broadening your keywords.
          </div>
        )}
      </div>
    </div>
  );
};

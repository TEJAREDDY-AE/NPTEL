import React, { useState } from 'react';
import { NPTEL_SYLLABUS } from '../data/nptelSyllabus';
import { getAllQuestions, filterQuestions } from '../utils/questionStore';
import { QuestionCard } from '../components/QuestionCard';
import { CollectionType, Question, VerificationStatus } from '../types';
import { 
  FileCheck2, 
  Cpu, 
  Layers, 
  Search, 
  Play, 
  Timer, 
  Filter, 
  AlertCircle, 
  FileUp, 
  Calculator,
  BookOpen,
  Shuffle
} from 'lucide-react';
import { StorageService } from '../utils/storage';
import { NavView } from '../components/Sidebar';

interface Props {
  initialWeek?: number | 'exam_scope' | 'weeks_1_7' | 'weeks_6_12' | 'all';
  onNavigate: (view: NavView, params?: { week?: number }) => void;
  onLaunchQuiz: (mode: 'practice' | 'mock', week?: number | 'exam_scope' | 'weeks_1_7' | 'weeks_6_12' | 'all') => void;
}

export const QuestionBankView: React.FC<Props> = ({
  initialWeek = 'weeks_1_7',
  onNavigate,
  onLaunchQuiz
}) => {
  const [selectedWeek, setSelectedWeek] = useState<number | 'exam_scope' | 'weeks_1_7' | 'weeks_6_12' | 'all'>(initialWeek);
  const [collectionFilter, setCollectionFilter] = useState<CollectionType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyCalculations, setOnlyCalculations] = useState(false);
  const [statusFilter, setStatusFilter] = useState<VerificationStatus | 'all'>('all');
  const [isOptionsJumbled, setIsOptionsJumbled] = useState<boolean>(() => StorageService.getOptionsJumbled());

  const allQuestions = getAllQuestions();
  const isWeeks1To7Scope = selectedWeek === 'weeks_1_7' || selectedWeek === 'exam_scope';
  const isWeeks6To12Scope = selectedWeek === 'weeks_6_12';
  const isAllScope = selectedWeek === 'all';
  const isSpecificWeek = typeof selectedWeek === 'number';

  const currentWeekMeta = isSpecificWeek 
    ? NPTEL_SYLLABUS.find(w => w.week === selectedWeek) || NPTEL_SYLLABUS[0]
    : null;

  // Filter questions for the selected week or scope
  const weekQuestions = isWeeks1To7Scope
    ? allQuestions.filter(q => q.week >= 1 && q.week <= 7)
    : isWeeks6To12Scope
    ? allQuestions.filter(q => q.week >= 6 && q.week <= 12)
    : isAllScope
    ? allQuestions
    : allQuestions.filter(q => q.week === selectedWeek);

  const filtered = filterQuestions(weekQuestions, {
    query: searchQuery,
    collection: collectionFilter,
    onlyCalculations,
    verificationStatus: statusFilter
  });

  const originalCount = weekQuestions.filter(q => q.collection === 'original').length;
  const verifiedCount = weekQuestions.filter(q => q.verificationStatus === 'verified').length;
  const missingOptsCount = weekQuestions.filter(q => q.verificationStatus === 'missing_options').length;

  return (
    <div className="space-y-6">
      {/* Week Selector Ribbon */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Exam Modules & Question Bank
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300">
              {isWeeks1To7Scope ? 'Weeks 1–7 Scope' : isWeeks6To12Scope ? 'Weeks 6–12 Scope' : isAllScope ? 'All 12 Weeks' : `Week ${selectedWeek}`}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {/* Weeks 1-7 in order */}
          <button
            onClick={() => setSelectedWeek('weeks_1_7')}
            className={`flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              isWeeks1To7Scope
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-100'
            }`}
          >
            <span>🎯 All Weeks 1–7 in Order</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isWeeks1To7Scope ? 'bg-white/20 text-white' : 'bg-blue-200/60 dark:bg-blue-900 text-blue-800 dark:text-blue-200'}`}>
              70 Qs
            </span>
          </button>

          {/* Weeks 6-12 in order */}
          <button
            onClick={() => setSelectedWeek('weeks_6_12')}
            className={`flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              isWeeks6To12Scope
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100'
            }`}
          >
            <span>🎯 Weeks 6–12</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isWeeks6To12Scope ? 'bg-white/20 text-white' : 'bg-indigo-200/60 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200'}`}>
              70 Qs
            </span>
          </button>

          {/* All 12 Weeks */}
          <button
            onClick={() => setSelectedWeek('all')}
            className={`flex-shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              isAllScope
                ? 'bg-slate-800 text-white shadow-md'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            <span>🌐 All (1–12)</span>
          </button>

          {/* All individual weeks 1-12 */}
          {NPTEL_SYLLABUS.map((w) => {
            const isSelected = selectedWeek === w.week;
            return (
              <button
                key={w.week}
                onClick={() => setSelectedWeek(w.week)}
                className={`flex-shrink-0 px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                <span>Week {w.week}</span>
                {w.hasUploadedDocument && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="Uploaded Official Assignment" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Week Summary Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-5 md:p-6 shadow-md">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-black bg-blue-500 text-white">
                {isWeeks1To7Scope 
                  ? 'Weeks 1–7 Scope' 
                  : isWeeks6To12Scope 
                  ? 'Weeks 6–12 Scope' 
                  : isAllScope 
                  ? 'All 12 Weeks' 
                  : `Week ${selectedWeek} Module`}
              </span>
              {isWeeks1To7Scope ? (
                <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Weeks 1 to 7 Sequentially Ordered (70 Qs)
                </span>
              ) : isWeeks6To12Scope ? (
                <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Weeks 6 to 12 Sequentially Ordered (70 Qs)
                </span>
              ) : currentWeekMeta?.hasUploadedDocument ? (
                <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {currentWeekMeta.uploadedFormat} Assignment Verified
                </span>
              ) : (
                <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  10 Curriculum Questions
                </span>
              )}
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white">
              {isWeeks1To7Scope 
                ? 'Weeks 1 through 7: Uploaded Assignment Examination Question Bank' 
                : isWeeks6To12Scope 
                ? 'Weeks 6 through 12: Advanced Examination Question Bank'
                : isAllScope
                ? 'All Weeks 1 through 12: Complete Course Question Bank'
                : currentWeekMeta?.title}
            </h2>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-300">
              <span>RFC Verified: <strong className="text-emerald-400">{verifiedCount} Qs</strong></span>
              <span>Complete Options: <strong className="text-blue-400">{weekQuestions.length} Qs</strong></span>
            </div>
          </div>

          {/* Quick Week Actions */}
          <div className="flex flex-wrap items-center gap-2 self-stretch lg:self-auto">
            <button
              onClick={() => onLaunchQuiz('practice', selectedWeek)}
              className="flex-1 lg:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              {isWeeks1To7Scope 
                ? 'Practice All 1–7' 
                : isWeeks6To12Scope 
                ? 'Practice All 6–12' 
                : isAllScope 
                ? 'Practice All' 
                : `Practice Week ${selectedWeek}`}
            </button>
            <button
              onClick={() => onLaunchQuiz('mock', selectedWeek)}
              className="flex-1 lg:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-sm transition-colors"
            >
              <Timer className="w-3.5 h-3.5" />
              Timed Exam
            </button>
          </div>
        </div>

        {/* Core Concepts Chips */}
        {isSpecificWeek && currentWeekMeta && (
          <div className="mt-4 pt-4 border-t border-slate-700/60">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Important Examination Concepts
            </span>
            <div className="flex flex-wrap gap-1.5">
              {currentWeekMeta.coreConcepts.map((concept, idx) => (
                <span key={idx} className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">
                  {concept}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm space-y-3">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={`Search Week ${selectedWeek} questions, answers, formulas...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs md:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Collection Toggles */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <button
              onClick={() => setCollectionFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                collectionFilter === 'all'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              All ({weekQuestions.length})
            </button>
            <button
              onClick={() => setCollectionFilter('original')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                collectionFilter === 'original'
                  ? 'bg-white dark:bg-slate-700 text-purple-700 dark:text-purple-300 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              Original ({originalCount})
            </button>
            <button
              onClick={() => setCollectionFilter('generated')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                collectionFilter === 'generated'
                  ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              Practice ({weekQuestions.length - originalCount})
            </button>
          </div>
        </div>

        {/* Secondary Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => setOnlyCalculations(!onlyCalculations)}
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
              onlyCalculations
                ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 border border-amber-300 dark:border-amber-700'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            <Calculator className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            Calculations Only
          </button>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as VerificationStatus | 'all')}
            className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 focus:outline-none"
          >
            <option value="all">All Verification Statuses</option>
            <option value="verified">Verified Only</option>
            <option value="missing_options">Missing Options Flagged</option>
            <option value="needs_review">Needs Review</option>
          </select>

          <button
            onClick={() => {
              const next = !isOptionsJumbled;
              setIsOptionsJumbled(next);
              StorageService.setOptionsJumbled(next);
            }}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
              isOptionsJumbled
                ? 'bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700 shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
            title="Randomize choice order (A, B, C, D) across all questions for choose-the-correct testing"
          >
            <Shuffle className={`w-3.5 h-3.5 ${isOptionsJumbled ? 'text-purple-600 dark:text-purple-400' : 'text-slate-400'}`} />
            <span>Options: {isOptionsJumbled ? 'Jumbled (Choose Correct)' : 'Original Order'}</span>
          </button>
        </div>
      </div>

      {/* Explicit Empty State for Collection A if no uploaded assignment exists */}
      {collectionFilter === 'original' && originalCount === 0 && (
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 rounded-2xl p-8 text-center">
          <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-3">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-amber-900 dark:text-amber-200">
            No Uploaded Assignment Document for Week {selectedWeek} Yet
          </h3>
          <p className="text-xs md:text-sm text-amber-800 dark:text-amber-300/80 max-w-md mx-auto mt-1 mb-4 leading-relaxed">
            Per strict integrity requirements, we never silently invent missing assignment records. Upload the DOCX or PDF file for Week {selectedWeek} in the Document Extractor to populate this section.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('upload_extractor')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm transition-colors"
            >
              <FileUp className="w-4 h-4" />
              Upload Week {selectedWeek} Assignment
            </button>
            <button
              onClick={() => setCollectionFilter('generated')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-700 font-bold text-xs hover:bg-amber-100 transition-colors"
            >
              View Practice Questions
            </button>
          </div>
        </div>
      )}

      {/* Question Cards List */}
      <div className="space-y-4">
        {filtered.map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
            isJumbled={isOptionsJumbled}
          />
        ))}

        {filtered.length === 0 && (collectionFilter !== 'original' || originalCount > 0) && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center text-slate-500 dark:text-slate-400 text-sm">
            No questions matched your search query or filter criteria.
          </div>
        )}
      </div>
    </div>
  );
};

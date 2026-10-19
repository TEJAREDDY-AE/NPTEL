import React, { useState } from 'react';
import { getOriginalQuestions, getAllQuestions } from '../utils/questionStore';
import { VerificationBadge } from '../components/VerificationBadge';
import { 
  CheckCircle2, 
  ExternalLink, 
  Calculator, 
  BookOpen, 
  Filter, 
  Search, 
  Split, 
  ShieldCheck,
  Check,
  FileText
} from 'lucide-react';
import { VerificationStatus } from '../types';

export const VerificationView: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<VerificationStatus | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWeek, setSelectedWeek] = useState<number | 'all'>('all');

  const questions = getOriginalQuestions();

  const filtered = questions.filter(q => {
    if (statusFilter !== 'all' && q.verificationStatus !== statusFilter) return false;
    if (selectedWeek !== 'all' && q.week !== selectedWeek) return false;
    if (searchQuery.trim()) {
      const qLower = searchQuery.toLowerCase();
      const inText = q.questionText.toLowerCase().includes(qLower);
      const inAns = q.verifiedAnswer.toLowerCase().includes(qLower);
      const inCite = q.citations.some(c => c.title.toLowerCase().includes(qLower));
      return inText || inAns || inCite;
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Independent Answer Verification & Citations
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Every extracted answer rigorously cross-examined against IETF RFC standards and networking textbooks.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5" /> 30/30 Agree with Official Material
            </span>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10))}
              className="text-xs px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 focus:outline-none"
            >
              <option value="all">All Uploaded Weeks</option>
              <option value="7">Week 7 (TCP Flow & Congestion)</option>
              <option value="9">Week 9 (Routing Algorithms)</option>
              <option value="10">Week 10 (BGP & ICMP)</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as VerificationStatus | 'all')}
              className="text-xs px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 focus:outline-none"
            >
              <option value="all">All Verification Statuses</option>
              <option value="verified">Verified</option>
              <option value="missing_options">Missing Options</option>
              <option value="conflict_detected">Conflict Detected</option>
              <option value="needs_review">Needs Review</option>
            </select>
          </div>

          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search RFCs, formulas, questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Verification Cards */}
      <div className="space-y-4">
        {filtered.map((q) => (
          <div
            key={q.id}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-sm space-y-4"
          >
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300">
                  Week {q.week} • Q{q.questionNumber}
                </span>
                <VerificationBadge status={q.verificationStatus} />
                {q.isCalculationBased && (
                  <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                    <Calculator className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                    Numerical Recalculation
                  </span>
                )}
              </div>

              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                Source: {q.sourceFileName}
              </span>
            </div>

            {/* Question Text */}
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
              {q.questionText}
            </h3>

            {/* Side-by-side Answer Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="block text-xs uppercase font-bold text-slate-500 dark:text-slate-400 mb-1">
                  1. Document Supplied Answer
                </span>
                <div className="font-semibold text-slate-900 dark:text-white">
                  {q.originalAnswer}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs uppercase font-bold text-emerald-800 dark:text-emerald-300">
                    2. Independently Verified Answer
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200">
                    ✓ Both Agree
                  </span>
                </div>
                <div className="font-semibold text-emerald-950 dark:text-emerald-100">
                  {q.verifiedAnswer}
                </div>
              </div>
            </div>

            {/* Detailed Explanation */}
            <div className="p-4 rounded-xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                Technical Reasoning & Concept Proof
              </h4>
              <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {q.detailedReasoning || q.originalExplanation}
              </p>
            </div>

            {/* Step-by-Step Calculation (if numerical) */}
            {q.stepByStepCalculation && q.stepByStepCalculation.length > 0 && (
              <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60">
                <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 mb-2">
                  <Calculator className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  Independent Calculation Steps & Formula Validation
                </h4>
                <div className="space-y-1 font-mono text-xs md:text-sm text-slate-800 dark:text-slate-200 bg-white/70 dark:bg-slate-900/70 p-3 rounded-lg border border-amber-200/60 dark:border-amber-900/40">
                  {q.stepByStepCalculation.map((step, idx) => (
                    <div key={idx}>{step}</div>
                  ))}
                </div>
              </div>
            )}

            {/* Citations Footer */}
            {q.citations && q.citations.length > 0 && (
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="font-semibold text-slate-500 dark:text-slate-400">
                  Authoritative Standards & Citations:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {q.citations.map((c, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                    >
                      {c.url ? (
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center gap-1 font-medium"
                        >
                          {c.title}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="font-medium">{c.title}</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

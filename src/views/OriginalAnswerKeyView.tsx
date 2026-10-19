import React, { useState } from 'react';
import { getOriginalQuestions } from '../utils/questionStore';
import { VerificationBadge } from '../components/VerificationBadge';
import { KeyRound, Printer, Download, CheckCircle2, FileText, Search } from 'lucide-react';

export const OriginalAnswerKeyView: React.FC = () => {
  const [selectedWeekFilter, setSelectedWeekFilter] = useState<number | 'all' | 'weeks_1_7'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const originalQuestions = getOriginalQuestions();

  const filtered = originalQuestions.filter(q => {
    if (selectedWeekFilter === 'weeks_1_7') {
      if (q.week < 1 || q.week > 7) return false;
    } else if (selectedWeekFilter !== 'all' && q.week !== selectedWeekFilter) {
      return false;
    }
    if (searchQuery.trim()) {
      const qLower = searchQuery.toLowerCase();
      const inText = q.questionText.toLowerCase().includes(qLower);
      const inAns = q.originalAnswer.toLowerCase().includes(qLower);
      return inText || inAns;
    }
    return true;
  });

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadCsv = () => {
    const headers = ['Week', 'Assignment', 'Q_No', 'Question_Text', 'Official_Option_Ordinal', 'Official_Supplied_Answer', 'Source_File', 'Status'];
    const rows = filtered.map(q => {
      const optionOrdinal = q.options.find(o => o.isCorrect)?.originalPosition || 'N/A';
      return [
        q.week,
        q.assignment,
        q.questionNumber,
        `"${q.questionText.replace(/"/g, '""')}"`,
        `"${optionOrdinal}"`,
        `"${q.originalAnswer.replace(/"/g, '""')}"`,
        `"${q.sourceFileName}"`,
        `"${q.verificationStatus}"`
      ].join(',');
    });
    const csvContent = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `NPTEL_Computer_Networks_Answer_Key_Weeks_${selectedWeekFilter}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Official Assignment Answer Key
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Exact verbatim answers & option ordinals recovered from primary uploaded files.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 transition-colors"
            >
              <Printer className="w-4 h-4" /> Print Key
            </button>
            <button
              onClick={handleDownloadCsv}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-700 text-white shadow-sm transition-colors"
            >
              <Download className="w-4 h-4" /> Export CSV
            </button>
          </div>
        </div>

        {/* Ordering Notice */}
        <div className="mt-4 p-3 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/60 text-xs text-purple-900 dark:text-purple-200 flex items-center justify-between">
          <span>
            📋 <strong>8 Uploaded Assignments in Order:</strong> Week 1 → Week 2 → Week 3 → Week 4 → Week 5 → Week 7 → Week 9 → Week 10 ({originalQuestions.length} official questions total).
          </span>
        </div>

        {/* Filter Bar */}
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <button
              onClick={() => setSelectedWeekFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedWeekFilter === 'all'
                  ? 'bg-white dark:bg-slate-700 text-purple-700 dark:text-purple-300 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              All Uploads ({originalQuestions.length})
            </button>
            <button
              onClick={() => setSelectedWeekFilter('weeks_1_7')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedWeekFilter === 'weeks_1_7'
                  ? 'bg-white dark:bg-slate-700 text-purple-700 dark:text-purple-300 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Weeks 1–7 Scope (60)
            </button>
            {[1, 2, 3, 4, 5, 7, 9, 10].map(w => (
              <button
                key={w}
                onClick={() => setSelectedWeekFilter(w)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedWeekFilter === w
                    ? 'bg-white dark:bg-slate-700 text-purple-700 dark:text-purple-300 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                W{w}
              </button>
            ))}
          </div>

          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search answer key..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>
        </div>
      </div>

      {/* Answer Key Table */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider text-[11px]">
                <th className="py-3 px-4">Q#</th>
                <th className="py-3 px-4">Week</th>
                <th className="py-3 px-4">Question Text</th>
                <th className="py-3 px-4">Option Position</th>
                <th className="py-3 px-4">Official Answer</th>
                <th className="py-3 px-4">Verification</th>
                <th className="py-3 px-4">Source Document</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filtered.map((q) => {
                const optPosition = q.options.find(o => o.isCorrect)?.originalPosition || 'Verified Text';
                return (
                  <tr key={q.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-slate-700 dark:text-slate-300">
                      Q{q.questionNumber}
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300">
                        W{q.week}
                      </span>
                    </td>
                    <td className="py-3 px-4 max-w-md text-slate-800 dark:text-slate-200 font-medium">
                      {q.questionText}
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-mono px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs whitespace-nowrap">
                        {optPosition}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-semibold text-emerald-700 dark:text-emerald-400">
                      {q.originalAnswer}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <VerificationBadge status={q.verificationStatus} />
                    </td>
                    <td className="py-3 px-4 text-slate-500 dark:text-slate-400 text-xs font-mono whitespace-nowrap">
                      {q.sourceFileName}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { getAllQuestions } from '../utils/questionStore';
import { StorageService } from '../utils/storage';
import { NPTEL_SYLLABUS } from '../data/nptelSyllabus';
import { 
  Settings, 
  Download, 
  FileJson, 
  FileSpreadsheet, 
  Trash2, 
  Printer, 
  ShieldCheck, 
  Moon, 
  Sun, 
  Check, 
  BookOpen,
  Calendar,
  Layers,
  Shuffle
} from 'lucide-react';

interface Props {
  darkMode: boolean;
  onToggleTheme: () => void;
  onDataReset: () => void;
}

export const SettingsExportView: React.FC<Props> = ({
  darkMode,
  onToggleTheme,
  onDataReset
}) => {
  const [resetConfirmation, setResetConfirmation] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [optionsJumbled, setOptionsJumbled] = useState<boolean>(() => StorageService.getOptionsJumbled());

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleExportJson = () => {
    const questions = getAllQuestions();
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(questions, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `NPTEL_Computer_Networks_Question_Bank_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Exported complete Question Bank as JSON!');
  };

  const handleExportCsv = () => {
    const questions = getAllQuestions();
    const headers = ['ID', 'Week', 'Assignment', 'Collection', 'Question_Number', 'Question_Text', 'Correct_Answer', 'Explanation', 'Confidence', 'Verification_Status', 'Source'];
    const rows = questions.map(q => [
      q.id,
      q.week,
      q.assignment,
      q.collection,
      q.questionNumber,
      `"${q.questionText.replace(/"/g, '""')}"`,
      `"${q.verifiedAnswer.replace(/"/g, '""')}"`,
      `"${(q.detailedReasoning || q.originalExplanation).replace(/"/g, '""')}"`,
      q.extractionConfidence,
      q.verificationStatus,
      `"${q.sourceFileName}"`
    ].join(','));

    const csvContent = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `NPTEL_Computer_Networks_Question_Bank_${Date.now()}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    showToast('Exported complete Question Bank as CSV!');
  };

  const handlePrintCheatSheet = () => {
    window.print();
  };

  const handleClearProgress = () => {
    StorageService.clearAllData();
    setResetConfirmation(false);
    onDataReset();
    showToast('All practice history, bookmarks, and attempts reset.');
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header Info */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center">
            <Settings className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Settings & Data Export
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Manage your offline storage, export datasets to JSON/CSV, and generate printable cheat sheets.
            </p>
          </div>
        </div>
      </div>

      {/* Toast Alert */}
      {toastMessage && (
        <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100 text-xs md:text-sm font-semibold flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          {toastMessage}
        </div>
      )}

      {/* Export Options */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">
          Data Export & Backup
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Download the entire repository containing all original assignment questions, RFC citations, verified answers, and calculations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <button
            onClick={handleExportJson}
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 bg-slate-50/50 dark:bg-slate-800/40 text-left transition-all group flex items-start gap-3"
          >
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
              <FileJson className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-sm text-slate-900 dark:text-white block">
                Export Question Bank as JSON
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 block">
                Structured schema including all options, formulas, and citations.
              </span>
            </div>
          </button>

          <button
            onClick={handleExportCsv}
            className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-emerald-500 bg-slate-50/50 dark:bg-slate-800/40 text-left transition-all group flex items-start gap-3"
          >
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-sm text-slate-900 dark:text-white block">
                Export Question Bank as CSV
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 block">
                Compatible with Excel, Google Sheets, and flashcard tools.
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Printable Cheat Sheet Generator */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Formula Cheat Sheet & Exam Revision Summary
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Clean printable sheet with essential networking formulas for Weeks 1 to 12.
            </p>
          </div>
          <button
            onClick={handlePrintCheatSheet}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors"
          >
            <Printer className="w-4 h-4" /> Print / Save PDF
          </button>
        </div>

        {/* Cheat Sheet Preview Card */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="text-center pb-3 border-b border-slate-200 dark:border-slate-700">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              NPTEL Computer Networks — Quick Formula Reference
            </h4>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Exam Date: Sunday afternoon, 25 October 2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {NPTEL_SYLLABUS.filter(w => w.keyFormulas && w.keyFormulas.length > 0).map(w => (
              <div key={w.week} className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 space-y-1">
                <span className="font-bold text-blue-700 dark:text-blue-300 block">
                  Week {w.week}: {w.title}
                </span>
                <ul className="font-mono text-[11px] text-slate-700 dark:text-slate-300 space-y-0.5">
                  {w.keyFormulas?.map((form, idx) => (
                    <li key={idx} className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                      {form}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Preferences & Reset */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-5">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">
          Interface & Storage Management
        </h3>

        <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800">
          <div>
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 block">
              Theme Mode
            </span>
            <span className="text-xs text-slate-400">
              Switch between light and dark editorial interfaces.
            </span>
          </div>
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 transition-colors"
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Option Jumbling Preference */}
        <div className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-800">
          <div>
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 block">
              Default Option Jumbling System
            </span>
            <span className="text-xs text-slate-400">
              Randomize choices (A, B, C, D) for choose-the-correct questions across quizzes and mock exams.
            </span>
          </div>
          <button
            onClick={() => {
              const nextVal = !optionsJumbled;
              setOptionsJumbled(nextVal);
              StorageService.setOptionsJumbled(nextVal);
              showToast(nextVal ? 'Option jumbling enabled by default.' : 'Option jumbling disabled.');
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              optionsJumbled
                ? 'bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-200 border border-purple-300 dark:border-purple-700 shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>{optionsJumbled ? 'Enabled' : 'Disabled'}</span>
          </button>
        </div>

        {/* Clear Data Reset */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          <div>
            <span className="text-sm font-semibold text-rose-600 block">
              Reset Progress & Attempts
            </span>
            <span className="text-xs text-slate-400">
              Clears your bookmarks, test results, and attempt history from local storage.
            </span>
          </div>

          {!resetConfirmation ? (
            <button
              onClick={() => setResetConfirmation(true)}
              className="px-4 py-2 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-rose-200 dark:border-rose-800 transition-colors"
            >
              Reset Local Data
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={handleClearProgress}
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-rose-600 text-white hover:bg-rose-700 shadow-sm"
              >
                Confirm Reset
              </button>
              <button
                onClick={() => setResetConfirmation(false)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

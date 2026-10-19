import React, { useState } from 'react';
import { ExamCountdownBanner } from '../components/ExamCountdownBanner';
import { FormulaCalculatorModal } from '../components/FormulaCalculatorModal';
import { NPTEL_SYLLABUS, WEEKS_1_TO_7_SYLLABUS, WEEKS_6_TO_12_SYLLABUS } from '../data/nptelSyllabus';
import { getAllQuestions, getOriginalQuestions, getWeeks1To7Questions, getWeeks6To12Questions } from '../utils/questionStore';
import { StorageService } from '../utils/storage';
import { MemberProfile } from '../types';
import { 
  Play, 
  Timer, 
  CheckCircle2, 
  HelpCircle, 
  BookOpen, 
  Layers, 
  ArrowRight, 
  Sparkles, 
  FileText,
  AlertCircle,
  FileCheck2,
  TrendingUp,
  Award,
  ListOrdered,
  Calculator,
  Lightbulb
} from 'lucide-react';
import { NavView } from '../components/Sidebar';

interface Props {
  onNavigate: (view: NavView, params?: { week?: number }) => void;
  onLaunchQuiz: (mode: 'practice' | 'mock', week?: number | 'exam_scope' | 'weeks_1_7' | 'weeks_6_12') => void;
  activeMember?: MemberProfile;
}

export const DashboardView: React.FC<Props> = ({ onNavigate, onLaunchQuiz, activeMember }) => {
  const [activeScopeTab, setActiveScopeTab] = useState<'weeks_1_7' | 'weeks_6_12' | 'all'>('weeks_1_7');
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const allQuestions = getAllQuestions();
  const weeks1To7Questions = getWeeks1To7Questions();
  const weeks6To12Questions = getWeeks6To12Questions();
  const originalQuestions = getOriginalQuestions();
  const attempts = StorageService.getAttempts();
  const testHistory = StorageService.getTestHistory();

  const totalAttempted = Object.keys(attempts).length;
  const correctCount = Object.values(attempts).filter(a => a.isCorrect).length;
  const accuracyPercentage = totalAttempted > 0 ? Math.round((correctCount / totalAttempted) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Formula Calculator Modal */}
      <FormulaCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />

      {/* Human Candidate Greeting & Streak Hero */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-bold mb-2">
            <span>🔥 4-Day Study Streak</span>
            <span>•</span>
            <span className="text-amber-300">Targeting {activeMember?.targetScore || 90}% Elite Gold</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight">
            Welcome back, {activeMember?.name || 'Candidate'}! 👋
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 mt-1 max-w-xl">
            Sunday 25 October 2026 examination is approaching. 70 core problems across Weeks 1–7 are active.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 relative z-10">
          <button
            onClick={() => setIsCalculatorOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs flex items-center gap-2 backdrop-blur-md transition-all shadow-sm"
          >
            <Calculator className="w-4 h-4 text-amber-300" />
            Formula Desk & Calculator
          </button>
          <button
            onClick={() => onLaunchQuiz('practice', 'weeks_1_7')}
            className="px-4 py-2.5 rounded-xl bg-white hover:bg-blue-50 text-blue-800 font-bold text-xs flex items-center gap-2 transition-all shadow-md"
          >
            <Play className="w-4 h-4 fill-current" />
            Resume Practice
          </button>
        </div>
      </div>

      {/* Target Exam Countdown */}
      <ExamCountdownBanner />

      {/* Top Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Weeks 1–7 Scope</span>
            <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <p className="mt-2 text-2xl font-black text-blue-600 dark:text-blue-400">
            {weeks1To7Questions.length} Qs
          </p>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            10 questions × 7 modules in order (1 → 7)
          </span>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Uploaded Assignments</span>
            <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <p className="mt-2 text-2xl font-black text-emerald-600 dark:text-emerald-400">
            {originalQuestions.length} Qs
          </p>
          <span className="text-[11px] text-emerald-600/80 dark:text-emerald-400/80 font-medium">
            Weeks 1, 2, 3, 4, 5, 7, 9, 10 from uploads
          </span>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Questions Attempted</span>
            <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <p className="mt-2 text-2xl font-black text-slate-900 dark:text-white">
            {totalAttempted}
          </p>
          <span className="text-[11px] text-slate-500 dark:text-slate-400">
            {accuracyPercentage}% accuracy rate
          </span>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Mock Exams Completed</span>
            <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <p className="mt-2 text-2xl font-black text-slate-900 dark:text-white">
            {testHistory.length}
          </p>
          <span className="text-[11px] text-slate-500 dark:text-slate-400">
            {testHistory.length > 0 ? `Latest: ${testHistory[0].scorePercentage}%` : 'Ready to start'}
          </span>
        </div>
      </div>

      {/* Professor's Tip of the Day & Candidate Checklist */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Professor's High-Yield Exam Tip */}
        <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
              <Lightbulb className="w-4 h-4" /> Professor's Exam Tip of the Day
            </div>
            <p className="text-xs leading-relaxed">
              <strong>Week 7 TCP Fast Recovery:</strong> Remember that upon 3 duplicate ACKs in TCP Reno, <em>ssthresh</em> becomes <code>cwnd / 2</code>, and the new <em>cwnd</em> becomes <code>ssthresh + 3 MSS</code>. Do not reset to 1 (that is Tahoe upon timeout)!
            </p>
          </div>
          <div className="mt-3 pt-3 border-t border-amber-500/20 text-[11px] text-amber-700 dark:text-amber-300">
            📌 Source: Kurose & Ross Chapter 3 • RFC 5681
          </div>
        </div>

        {/* NPTEL Candidate Exam Checklist */}
        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Exam Day Readiness Checklist
            </span>
            <span className="text-[10px] font-bold text-slate-400 font-mono">25 Oct 2026</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-md bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 flex items-center justify-center text-[10px]">✓</span>
              <span>All 70 Questions in Weeks 1–7 Scope Revised</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-md bg-blue-100 dark:bg-blue-950/80 text-blue-600 flex items-center justify-center text-[10px]">✓</span>
              <span>Delay & Bandwidth Formulas Practiced</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-500 flex items-center justify-center text-[10px]">□</span>
              <span>NPTEL Admit Card & College ID Kept Ready</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Quick Launch Test Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-5 text-white shadow-lg flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/20 text-xs font-bold uppercase tracking-wider mb-3">
              <Play className="w-3.5 h-3.5 fill-current" /> Fast Practice
            </div>
            <h3 className="text-lg font-bold">Weeks 1–7 Practice Quiz</h3>
            <p className="text-blue-100 text-xs mt-1.5 leading-relaxed">
              Targeted practice across Weeks 1–7 (70 questions total). Sequential or shuffled with full step-by-step solutions.
            </p>
          </div>
          <button
            onClick={() => onLaunchQuiz('practice', 'weeks_1_7')}
            className="mt-4 w-full py-2.5 px-4 rounded-xl bg-white text-blue-700 font-bold text-xs md:text-sm hover:bg-blue-50 transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            Launch Weeks 1–7 Quiz <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-gradient-to-br from-purple-700 to-pink-700 rounded-2xl p-5 text-white shadow-lg flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/20 text-xs font-bold uppercase tracking-wider mb-3">
              <Timer className="w-3.5 h-3.5" /> Exam Simulation
            </div>
            <h3 className="text-lg font-bold">Weeks 1–7 Mock Exam</h3>
            <p className="text-purple-100 text-xs mt-1.5 leading-relaxed">
              30-minute timed simulation focused on Weeks 1–7 with palette, flagging, and detailed scorecard.
            </p>
          </div>
          <button
            onClick={() => onLaunchQuiz('mock', 'weeks_1_7')}
            className="mt-4 w-full py-2.5 px-4 rounded-xl bg-white text-purple-800 font-bold text-xs md:text-sm hover:bg-purple-50 transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            Start Exam Simulation <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-5 text-white shadow-lg flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/20 text-xs font-bold uppercase tracking-wider mb-3">
              <FileCheck2 className="w-3.5 h-3.5" /> Uploaded Assignments
            </div>
            <h3 className="text-lg font-bold">8 Uploaded Assignments</h3>
            <p className="text-emerald-100 text-xs mt-1.5 leading-relaxed">
              Review all 80 official extracted questions (Weeks 1, 2, 3, 4, 5, 7, 9, 10) with verified answer keys.
            </p>
          </div>
          <button
            onClick={() => onNavigate('answer_key')}
            className="mt-4 w-full py-2.5 px-4 rounded-xl bg-white text-emerald-800 font-bold text-xs md:text-sm hover:bg-emerald-50 transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            View Official Answer Keys <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Week-by-Week Syllabus & Assignment Inventory with Scope Switcher */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Course Curriculum & Modules
              </h3>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300">
                <ListOrdered className="w-3 h-3" /> Ordered
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {activeScopeTab === 'weeks_1_7' 
                ? 'Uploaded Target Scope: Weeks 1 through 7 in strict sequential order (70 questions total).'
                : activeScopeTab === 'weeks_6_12'
                ? 'Advanced Scope: Weeks 6 through 12 in strict numerical order (70 questions total).'
                : 'Full Course Syllabus: Weeks 1 through 12 (120 questions total).'}
            </p>
          </div>

          {/* Scope Selector Toggle */}
          <div className="flex items-center gap-2">
            <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl flex items-center gap-1 flex-wrap">
              <button
                onClick={() => setActiveScopeTab('weeks_1_7')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeScopeTab === 'weeks_1_7'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>Weeks 1–7</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${activeScopeTab === 'weeks_1_7' ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'}`}>
                  70 Qs
                </span>
              </button>
              <button
                onClick={() => setActiveScopeTab('weeks_6_12')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeScopeTab === 'weeks_6_12'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>Weeks 6–12</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${activeScopeTab === 'weeks_6_12' ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'}`}>
                  70 Qs
                </span>
              </button>
              <button
                onClick={() => setActiveScopeTab('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeScopeTab === 'all'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>All (1–12)</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${activeScopeTab === 'all' ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'}`}>
                  120 Qs
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Scope Context Banner */}
        {activeScopeTab === 'weeks_1_7' && (
          <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                1-7
              </div>
              <div>
                <h4 className="text-xs font-bold text-blue-950 dark:text-blue-200">
                  Target Exam Modules Ordered: Week 1 → Week 2 → Week 3 → Week 4 → Week 5 → Week 6 → Week 7
                </h4>
                <p className="text-[11px] text-blue-700 dark:text-blue-300 mt-0.5">
                  10 questions per week (70 questions total). Weeks 1, 2, 3, 4, 5, 7 are verified directly from your uploaded assignments.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onLaunchQuiz('practice', 'weeks_1_7')}
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-sm flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-current" /> Practice All 1–7
              </button>
            </div>
          </div>
        )}

        {activeScopeTab === 'weeks_6_12' && (
          <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 border border-indigo-200 dark:border-indigo-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                6-12
              </div>
              <div>
                <h4 className="text-xs font-bold text-indigo-950 dark:text-indigo-200">
                  Target Exam Modules Ordered: Week 6 → Week 7 → Week 8 → Week 9 → Week 10 → Week 11 → Week 12
                </h4>
                <p className="text-[11px] text-indigo-700 dark:text-indigo-300 mt-0.5">
                  10 questions per week (70 questions total). Weeks 7, 9 & 10 from official uploads; Weeks 6, 8, 11 & 12 from curriculum practice.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onLaunchQuiz('practice', 'weeks_6_12')}
                className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors shadow-sm flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-current" /> Practice All 6–12
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {(activeScopeTab === 'weeks_1_7' ? WEEKS_1_TO_7_SYLLABUS : activeScopeTab === 'weeks_6_12' ? WEEKS_6_TO_12_SYLLABUS : NPTEL_SYLLABUS).map((week) => {
            const weekQuestions = allQuestions.filter(q => q.week === week.week);
            const originalForWeek = originalQuestions.filter(q => q.week === week.week);

            return (
              <div 
                key={week.week}
                className={`rounded-2xl border p-4 flex flex-col justify-between transition-all ${
                  week.hasUploadedDocument
                    ? 'bg-gradient-to-b from-blue-50/50 to-indigo-50/20 dark:from-blue-950/20 dark:to-indigo-950/10 border-blue-200 dark:border-blue-800/80 hover:border-blue-400'
                    : 'bg-slate-50/40 dark:bg-slate-800/30 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-slate-200/80 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                        Week {week.week}
                      </span>
                      {week.week >= 6 && week.week <= 12 && (
                        <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                          Exam Scope
                        </span>
                      )}
                    </div>

                    {week.hasUploadedDocument ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-800">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                        Assignment {week.week} Uploaded
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        {weekQuestions.length} Practice Qs
                      </span>
                    )}
                  </div>

                  <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 line-clamp-1 mb-2">
                    {week.title}
                  </h4>

                  {/* Core Concepts summary */}
                  <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 mb-3">
                    {week.coreConcepts.slice(0, 2).map((concept, cIdx) => (
                      <li key={cIdx} className="line-clamp-1 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                        {concept}
                      </li>
                    ))}
                  </ul>

                  {/* Document Attribution */}
                  {week.uploadedFileName && (
                    <div className="mb-3 p-2 rounded-lg bg-blue-100/50 dark:bg-blue-900/30 text-[11px] font-mono text-blue-900 dark:text-blue-200 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                      <span className="truncate">{week.uploadedFileName}</span>
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {originalForWeek.length > 0 
                      ? `${originalForWeek.length} Extracted Qs` 
                      : `${weekQuestions.length} Practice Qs`}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onNavigate('question_bank', { week: week.week })}
                      className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Browse
                    </button>
                    <button
                      onClick={() => onLaunchQuiz('practice', week.week)}
                      className="p-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      title={`Quiz Week ${week.week}`}
                    >
                      <Play className="w-3 h-3 fill-current" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

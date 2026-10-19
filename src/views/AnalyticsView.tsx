import React, { useState } from 'react';
import { StorageService } from '../utils/storage';
import { getAllQuestions, getQuestionById } from '../utils/questionStore';
import { NPTEL_SYLLABUS } from '../data/nptelSyllabus';
import { 
  BarChart3, 
  TrendingUp, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Award, 
  AlertTriangle, 
  BookOpen, 
  ArrowRight,
  Flame
} from 'lucide-react';
import { NavView } from '../components/Sidebar';

interface Props {
  onNavigate: (view: NavView, params?: { week?: number }) => void;
}

export const AnalyticsView: React.FC<Props> = ({ onNavigate }) => {
  const attempts = StorageService.getAttempts();
  const testHistory = StorageService.getTestHistory();
  const allQuestions = getAllQuestions();

  const totalQuestions = allQuestions.length;
  const attemptedCount = Object.keys(attempts).length;
  const correctCount = Object.values(attempts).filter(a => a.isCorrect).length;
  const incorrectCount = attemptedCount - correctCount;
  const overallAccuracy = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;

  // Calculate average response time
  const totalSeconds = Object.values(attempts).reduce((acc, a) => acc + (a.timeSpentSeconds || 30), 0);
  const avgSeconds = attemptedCount > 0 ? Math.round(totalSeconds / attemptedCount) : 0;

  // Scope state
  const [analyticsScope, setAnalyticsScope] = useState<'exam_scope' | 'all'>('exam_scope');

  // Compute stats per week
  const weekStats = NPTEL_SYLLABUS.map((w) => {
    const qList = allQuestions.filter(q => q.week === w.week);
    const qIds = qList.map(q => q.id);
    const weekAttempts = qIds.map(id => attempts[id]).filter(Boolean);
    const weekAttempted = weekAttempts.length;
    const weekCorrect = weekAttempts.filter(a => a.isCorrect).length;
    const accuracy = weekAttempted > 0 ? Math.round((weekCorrect / weekAttempted) * 100) : 0;
    
    return {
      week: w.week,
      title: w.title,
      totalQuestions: qList.length,
      attempted: weekAttempted,
      correct: weekCorrect,
      accuracy,
      hasUploaded: w.hasUploadedDocument
    };
  });

  const displayedWeekStats = analyticsScope === 'exam_scope'
    ? weekStats.filter(w => w.week >= 6 && w.week <= 12)
    : weekStats;

  // Weakest concepts needing revision
  const weakWeeks = weekStats
    .filter(w => w.attempted > 0 && w.accuracy < 70)
    .sort((a, b) => a.accuracy - b.accuracy);

  return (
    <div className="space-y-6">
      {/* Analytics Overview Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Performance & Mastery Analytics
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Live tracking based on your actual quiz attempts, accuracy trends, and mock examinations.
            </p>
          </div>
        </div>

        {/* 4 Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-6">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Total Progress</span>
            <p className="mt-1.5 text-2xl font-black text-slate-900 dark:text-white">
              {attemptedCount} / {totalQuestions}
            </p>
            <span className="text-[11px] text-slate-400">
              {Math.round((attemptedCount / totalQuestions) * 100)}% repository coverage
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Overall Accuracy</span>
            <p className="mt-1.5 text-2xl font-black text-emerald-600 dark:text-emerald-400">
              {overallAccuracy}%
            </p>
            <span className="text-[11px] text-emerald-600/80 dark:text-emerald-400/80 font-medium">
              {correctCount} correct • {incorrectCount} missed
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Avg Pace / Question</span>
            <p className="mt-1.5 text-2xl font-black text-slate-900 dark:text-white">
              {avgSeconds}s
            </p>
            <span className="text-[11px] text-slate-400">
              Recommended: &lt; 90s for NPTEL exam
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Mock Tests Taken</span>
            <p className="mt-1.5 text-2xl font-black text-purple-600 dark:text-purple-400">
              {testHistory.length}
            </p>
            <span className="text-[11px] text-slate-400">
              {testHistory.length > 0 ? `Avg: ${Math.round(testHistory.reduce((a, t) => a + t.scorePercentage, 0) / testHistory.length)}%` : 'No mock tests yet'}
            </span>
          </div>
        </div>
      </div>

      {/* Week-Wise Accuracy Breakdown */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Accuracy Breakdown: {analyticsScope === 'exam_scope' ? 'Weeks 6 to 12 in Order' : 'Weeks 1 to 12'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {analyticsScope === 'exam_scope'
                ? 'Target exam scope covering 7 modules (10 questions each, ordered sequentially).'
                : 'Full 12-week course curriculum.'}
            </p>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl flex items-center">
            <button
              onClick={() => setAnalyticsScope('exam_scope')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                analyticsScope === 'exam_scope'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Weeks 6–12 (Exam Scope)
            </button>
            <button
              onClick={() => setAnalyticsScope('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                analyticsScope === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              All Weeks (1–12)
            </button>
          </div>
        </div>

        <div className="space-y-3.5">
          {displayedWeekStats.map((st) => (
            <div key={st.week} className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    Week {st.week}: {st.title}
                  </span>
                  {st.hasUploaded && (
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                      Uploaded Key
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 font-mono">
                  {st.attempted > 0 ? (
                    <>
                      <span className="text-slate-400">{st.correct}/{st.attempted}</span>
                      <span className={`font-bold ${
                        st.accuracy >= 80 ? 'text-emerald-600 dark:text-emerald-400' :
                        st.accuracy >= 50 ? 'text-amber-600 dark:text-amber-400' :
                        'text-rose-600 dark:text-rose-400'
                      }`}>
                        {st.accuracy}%
                      </span>
                    </>
                  ) : (
                    <span className="text-slate-400 italic">Not yet attempted</span>
                  )}
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden flex">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    st.accuracy >= 80 ? 'bg-emerald-500' :
                    st.accuracy >= 50 ? 'bg-amber-500' :
                    st.accuracy > 0 ? 'bg-rose-500' : 'bg-transparent'
                  }`}
                  style={{ width: `${st.attempted > 0 ? st.accuracy : 0}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prioritized Revision List */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Flame className="w-5 h-5 text-amber-500" />
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Prioritized Revision Recommendations (Exam Target: 25 Oct 2026)
          </h3>
        </div>

        {weakWeeks.length > 0 ? (
          <div className="space-y-3">
            {weakWeeks.map((ww) => (
              <div 
                key={ww.week}
                className="p-4 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <span className="text-xs font-bold text-rose-700 dark:text-rose-400">
                    Week {ww.week} Priority Target (Accuracy: {ww.accuracy}%)
                  </span>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mt-0.5">
                    {ww.title}
                  </h4>
                </div>
                <button
                  onClick={() => onNavigate('question_bank', { week: ww.week })}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white transition-colors"
                >
                  Review Week {ww.week} Formulas
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs md:text-sm leading-relaxed">
            <strong className="font-bold">Excellent Foundation: </strong>
            You currently have no critical weak areas flagged under 70% accuracy. Continue practicing randomized mock tests to preserve speed and formula retention!
          </div>
        )}
      </div>

      {/* Mock Test Score History */}
      {testHistory.length > 0 && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">
            Recent Mock Test History
          </h3>
          <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs md:text-sm">
            {testHistory.map((test) => (
              <div key={test.id} className="py-3 flex items-center justify-between gap-3">
                <div>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 block">
                    {test.title}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {new Date(test.timestamp).toLocaleDateString()} at {new Date(test.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500">
                    {test.correctCount}/{test.totalQuestions}
                  </span>
                  <span className={`font-bold font-mono px-2 py-0.5 rounded text-xs ${
                    test.scorePercentage >= 80 ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' :
                    test.scorePercentage >= 50 ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' :
                    'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                  }`}>
                    {test.scorePercentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

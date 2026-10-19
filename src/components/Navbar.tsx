import { NavView } from './Sidebar';
import { Menu, Sun, Moon, Play, Search, ShieldCheck, User, LogOut } from 'lucide-react';
import { getExamCountdown } from '../utils/questionStore';
import { MemberProfile } from '../types';

interface Props {
  currentView: NavView;
  onOpenMobile: () => void;
  onStartQuiz: () => void;
  onQuickSearch: () => void;
  darkMode: boolean;
  onToggleTheme: () => void;
  activeMember?: MemberProfile;
  onOpenMemberModal?: () => void;
  onLogout?: () => void;
}

const VIEW_TITLES: Record<NavView, string> = {
  dashboard: 'Exam Preparation Dashboard',
  question_bank: 'Week-Wise Question Bank (Weeks 1–12)',
  answer_key: 'Official Assignment Answer Key',
  verification: 'Answer Verification & RFC Citations',
  practice_quiz: 'Interactive Practice Quiz Mode',
  mock_exam: 'Full-Length NPTEL Mock Examination',
  incorrect_review: 'Incorrect-Answer Revision Clinic',
  bookmarks: 'Bookmarked Revision Questions',
  analytics: 'Performance & Accuracy Analytics',
  upload_extractor: 'Document Extraction & Verification Studio',
  search: 'Universal Search & Multicriteria Filters',
  settings: 'Data Management, Cheat Sheet & Export'
};

export const Navbar: React.FC<Props> = ({
  currentView,
  onOpenMobile,
  onStartQuiz,
  onQuickSearch,
  darkMode,
  onToggleTheme,
  activeMember,
  onOpenMemberModal,
  onLogout
}) => {
  const countdown = getExamCountdown();

  return (
    <header className="sticky top-0 z-30 h-16 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="h-full px-4 md:px-6 flex items-center justify-between gap-4">
        {/* Left: Mobile Toggle & View Title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMobile}
            className="p-2 -ml-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div>
            <h2 className="text-sm md:text-base font-bold text-slate-900 dark:text-white truncate max-w-[220px] sm:max-w-md">
              {VIEW_TITLES[currentView]}
            </h2>
            <div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" /> Source-Verified
              </span>
              <span>•</span>
              <span>Computer Networks</span>
            </div>
          </div>
        </div>

        {/* Right: Quick Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Quick Countdown Chip */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            <span>Exam in</span>
            <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">
              {countdown.days}d {countdown.hours}h
            </span>
          </div>

          {/* Quick Search Button */}
          <button
            onClick={onQuickSearch}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Search Questions (Ctrl/Cmd + K)"
          >
            <Search className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          >
            {darkMode ? <Sun className="w-4 h-4 md:w-5 md:h-5 text-amber-400" /> : <Moon className="w-4 h-4 md:w-5 md:h-5 text-slate-600" />}
          </button>

          {/* Member Profile Button */}
          {onOpenMemberModal && (
            <button
              onClick={onOpenMemberModal}
              className="flex items-center gap-2 px-2 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors border border-slate-200 dark:border-slate-700 shadow-sm"
              title="Google Account Profile & Switch"
            >
              <div className={`w-6 h-6 rounded-lg ${activeMember?.avatarColor || 'bg-blue-600'} text-white flex items-center justify-center font-bold text-xs shadow-xs relative`}>
                {activeMember ? activeMember.name.charAt(0).toUpperCase() : <User className="w-3.5 h-3.5" />}
                {activeMember?.authProvider === 'google' && (
                  <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-white flex items-center justify-center shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </span>
                )}
              </div>
              <div className="hidden md:flex flex-col text-left leading-none pr-1">
                <span className="text-[11px] font-bold max-w-[90px] truncate text-slate-900 dark:text-white flex items-center gap-1">
                  {activeMember ? activeMember.name : 'Account'}
                </span>
                <span className="text-[9px] text-slate-500 dark:text-slate-400 truncate max-w-[95px]">
                  {activeMember?.email ? activeMember.email.split('@')[0] : (activeMember?.rollNumber || 'Google User')}
                </span>
              </div>
            </button>
          )}

          {/* Compulsory Sign Out Button */}
          {onLogout && (
            <button
              onClick={onLogout}
              className="p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
              title="Sign Out of Google Account"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}

          {/* Quick Quiz Launch CTA */}
          <button
            onClick={onStartQuiz}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs md:text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md shadow-blue-500/20 transition-all"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span className="hidden sm:inline">Launch Test</span>
            <span className="sm:hidden">Test</span>
          </button>
        </div>
      </div>
    </header>
  );
};

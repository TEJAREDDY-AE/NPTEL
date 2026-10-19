import React from 'react';
import { 
  LayoutDashboard, 
  Layers, 
  KeyRound, 
  CheckCircle2, 
  PlayCircle, 
  Timer, 
  AlertTriangle, 
  Bookmark, 
  BarChart3, 
  FileUp, 
  Search, 
  Settings,
  X,
  GraduationCap,
  LogOut
} from 'lucide-react';
import { MemberProfile } from '../types';

export type NavView = 
  | 'dashboard'
  | 'question_bank'
  | 'answer_key'
  | 'verification'
  | 'practice_quiz'
  | 'mock_exam'
  | 'incorrect_review'
  | 'bookmarks'
  | 'analytics'
  | 'upload_extractor'
  | 'search'
  | 'settings';

interface Props {
  currentView: NavView;
  onSelectView: (view: NavView) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  bookmarkCount: number;
  incorrectCount: number;
  totalQuestionCount: number;
  activeMember?: MemberProfile;
  onLogout?: () => void;
}

interface NavItem {
  id: NavView;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: number | string;
  badgeColor?: string;
  category?: string;
}

export const Sidebar: React.FC<Props> = ({
  currentView,
  onSelectView,
  isOpenMobile,
  onCloseMobile,
  bookmarkCount,
  incorrectCount,
  totalQuestionCount,
  activeMember,
  onLogout
}) => {
  const navItems: NavItem[] = [
    // Core Exploration
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, category: 'Overview' },
    { id: 'question_bank', label: 'Week-Wise Bank', icon: Layers, badge: 'Weeks 6-12', badgeColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20', category: 'Study Materials' },
    { id: 'answer_key', label: 'Official Answer Key', icon: KeyRound, category: 'Study Materials' },
    { id: 'verification', label: 'Verification & RFCs', icon: CheckCircle2, badge: 'Verified', badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20', category: 'Study Materials' },
    
    // Assessment & Simulation
    { id: 'practice_quiz', label: 'Practice Quiz', icon: PlayCircle, category: 'Examination Suite' },
    { id: 'mock_exam', label: 'Mock Examination', icon: Timer, badge: 'Sim', badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20', category: 'Examination Suite' },
    { id: 'incorrect_review', label: 'Incorrect Review', icon: AlertTriangle, badge: incorrectCount > 0 ? incorrectCount : undefined, badgeColor: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20', category: 'Examination Suite' },
    { id: 'bookmarks', label: 'Bookmarks', icon: Bookmark, badge: bookmarkCount > 0 ? bookmarkCount : undefined, badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20', category: 'Examination Suite' },
    
    // Intelligence & Tools
    { id: 'analytics', label: 'Progress & Analytics', icon: BarChart3, category: 'Tools & Intelligence' },
    { id: 'upload_extractor', label: 'Document Extractor', icon: FileUp, badge: 'DOCX/PDF', badgeColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20', category: 'Tools & Intelligence' },
    { id: 'search', label: 'Search & Filters', icon: Search, category: 'Tools & Intelligence' },
    { id: 'settings', label: 'Settings & Export', icon: Settings, category: 'Tools & Intelligence' },
  ];

  const handleSelect = (view: NavView) => {
    onSelectView(view);
    onCloseMobile();
  };

  // Group nav items by category
  const categories = ['Overview', 'Study Materials', 'Examination Suite', 'Tools & Intelligence'];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div 
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpenMobile ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-sm font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                NPTEL Exam Hub
              </h1>
              <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                Computer Networks (2026)
              </p>
            </div>
          </div>

          <button 
            onClick={onCloseMobile}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation List */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
          {categories.map(cat => {
            const items = navItems.filter(item => item.category === cat);
            return (
              <div key={cat}>
                <span className="block px-3 mb-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  {cat}
                </span>
                <nav className="space-y-1">
                  {items.map(item => {
                    const Icon = item.icon;
                    const isActive = currentView === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(item.id)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/20'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`} />
                          <span>{item.label}</span>
                        </div>

                        {item.badge !== undefined && (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            isActive 
                              ? 'bg-white/20 text-white' 
                              : item.badgeColor || 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>
            );
          })}
        </div>

        {/* Logged in Google User Card */}
        {activeMember && (
          <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5 truncate">
                <div className={`w-8 h-8 rounded-xl ${activeMember.avatarColor} text-white flex items-center justify-center font-bold text-xs shadow-sm flex-shrink-0 relative`}>
                  {activeMember.name.charAt(0).toUpperCase()}
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" />
                </div>
                <div className="truncate">
                  <span className="block text-xs font-bold text-slate-900 dark:text-white truncate">
                    {activeMember.name}
                  </span>
                  <span className="block text-[10px] text-slate-500 dark:text-slate-400 truncate font-mono">
                    {activeMember.email || activeMember.rollNumber || 'Candidate'}
                  </span>
                </div>
              </div>

              {onLogout && (
                <button
                  onClick={onLogout}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors flex-shrink-0"
                  title="Sign Out of Google Account"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Sidebar Footer Stats */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
            <span>Repository Questions</span>
            <span className="font-bold font-mono text-slate-800 dark:text-slate-200">{totalQuestionCount} Qs</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full" style={{ width: '100%' }} />
          </div>
          <p className="mt-2 text-[10px] text-slate-400 dark:text-slate-500 text-center">
            Target: 25 Oct 2026 Examination
          </p>
        </div>
      </aside>
    </>
  );
};

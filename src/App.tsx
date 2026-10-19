import React, { useState, useEffect } from 'react';
import { Sidebar, NavView } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { DashboardView } from './views/DashboardView';
import { QuestionBankView } from './views/QuestionBankView';
import { OriginalAnswerKeyView } from './views/OriginalAnswerKeyView';
import { VerificationView } from './views/VerificationView';
import { PracticeQuizView } from './views/PracticeQuizView';
import { MockExamView } from './views/MockExamView';
import { IncorrectReviewView } from './views/IncorrectReviewView';
import { BookmarksView } from './views/BookmarksView';
import { AnalyticsView } from './views/AnalyticsView';
import { UploadExtractorView } from './views/UploadExtractorView';
import { SearchView } from './views/SearchView';
import { SettingsExportView } from './views/SettingsExportView';
import { MemberLoginModal } from './components/MemberLoginModal';
import { GoogleLoginGate } from './components/GoogleLoginGate';
import { MemberProfile } from './types';
import { StorageService } from './utils/storage';
import { getAllQuestions } from './utils/questionStore';

const DEFAULT_MEMBERS: MemberProfile[] = [
  {
    id: 'google_teja',
    name: 'Teja Reddy',
    rollNumber: 'NPTEL-CN-2026-001',
    email: 'teja.reddy@gmail.com',
    avatarColor: 'bg-blue-600',
    authProvider: 'google',
    joinedDate: 'Oct 2026',
    targetScore: 95
  }
];

export function App() {
  const [currentView, setCurrentView] = useState<NavView>('dashboard');
  const [targetWeek, setTargetWeek] = useState<number | 'exam_scope' | 'weeks_1_7' | 'weeks_6_12' | 'all' | undefined>(undefined);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);

  // Compulsory Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return localStorage.getItem('nptel_is_authenticated') === 'true';
    } catch {}
    return false;
  });

  // Members Management
  const [allMembers, setAllMembers] = useState<MemberProfile[]>(() => {
    try {
      const saved = localStorage.getItem('nptel_members');
      if (saved) return JSON.parse(saved);
    } catch {}
    return DEFAULT_MEMBERS;
  });

  const [activeMember, setActiveMember] = useState<MemberProfile>(() => {
    try {
      const activeId = localStorage.getItem('nptel_active_member_id');
      const savedMembers = localStorage.getItem('nptel_members');
      const membersList = savedMembers ? JSON.parse(savedMembers) : DEFAULT_MEMBERS;
      const found = membersList.find((m: MemberProfile) => m.id === activeId);
      if (found) return found;
      return membersList[0] || DEFAULT_MEMBERS[0];
    } catch {}
    return DEFAULT_MEMBERS[0];
  });
  const [bookmarkCount, setBookmarkCount] = useState<number>(() => StorageService.getBookmarks().length);
  const [incorrectCount, setIncorrectCount] = useState<number>(() => {
    const attempts = StorageService.getAttempts();
    return Object.values(attempts).filter(a => !a.isCorrect).length;
  });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const saved = localStorage.getItem('nptel_theme');
        if (saved !== null) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
    } catch {}
    return true; // Default sleek dark mode for focused exam preparation
  });

  // Apply dark mode class to root document
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      try { localStorage.setItem('nptel_theme', 'dark'); } catch {}
    } else {
      root.classList.remove('dark');
      try { localStorage.setItem('nptel_theme', 'light'); } catch {}
    }
  }, [darkMode]);

  const updateStats = () => {
    setBookmarkCount(StorageService.getBookmarks().length);
    const attempts = StorageService.getAttempts();
    setIncorrectCount(Object.values(attempts).filter(a => !a.isCorrect).length);
  };

  const handleGoogleLoginSuccess = (member: MemberProfile) => {
    setActiveMember(member);
    setIsAuthenticated(true);
    setAllMembers(prev => {
      const exists = prev.some(m => m.id === member.id || (m.email && m.email === member.email));
      if (!exists) {
        const next = [member, ...prev];
        try { localStorage.setItem('nptel_members', JSON.stringify(next)); } catch {}
        return next;
      }
      return prev;
    });
    try {
      localStorage.setItem('nptel_is_authenticated', 'true');
      localStorage.setItem('nptel_active_member_id', member.id);
    } catch {}
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    try {
      localStorage.removeItem('nptel_is_authenticated');
    } catch {}
  };

  const handleAddMember = (newMemberData: Omit<MemberProfile, 'id' | 'joinedDate'>) => {
    const newMember: MemberProfile = {
      ...newMemberData,
      id: 'member_' + Date.now(),
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    };
    const updated = [...allMembers, newMember];
    setAllMembers(updated);
    setActiveMember(newMember);
    try {
      localStorage.setItem('nptel_members', JSON.stringify(updated));
      localStorage.setItem('nptel_active_member_id', newMember.id);
    } catch {}
  };

  const handleSelectMember = (member: MemberProfile) => {
    setActiveMember(member);
    try {
      localStorage.setItem('nptel_active_member_id', member.id);
    } catch {}
  };

  const handleNavigate = (view: NavView, params?: { week?: number | 'exam_scope' | 'weeks_1_7' | 'weeks_6_12' | 'all' }) => {
    if (params?.week !== undefined) {
      setTargetWeek(params.week);
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateStats();
  };

  const handleLaunchQuiz = (mode: 'practice' | 'mock', week?: number | 'exam_scope' | 'weeks_1_7' | 'weeks_6_12' | 'all') => {
    if (week !== undefined) setTargetWeek(week);
    setCurrentView(mode === 'practice' ? 'practice_quiz' : 'mock_exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateStats();
  };

  const totalQuestions = getAllQuestions().length;

  // COMPULSORY LOGIN GATE: Block entire app if not authenticated
  if (!isAuthenticated) {
    return (
      <GoogleLoginGate
        onLoginSuccess={handleGoogleLoginSuccess}
        savedMembers={allMembers}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      {/* Member Login & Share Modal */}
      <MemberLoginModal
        isOpen={isMemberModalOpen}
        onClose={() => setIsMemberModalOpen(false)}
        activeMember={activeMember}
        allMembers={allMembers}
        onSelectMember={handleSelectMember}
        onAddMember={handleAddMember}
        onLogout={handleLogout}
      />

      {/* Sidebar Navigation */}
      <Sidebar
        currentView={currentView}
        onSelectView={(v) => handleNavigate(v)}
        isOpenMobile={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
        bookmarkCount={bookmarkCount}
        incorrectCount={incorrectCount}
        totalQuestionCount={totalQuestions}
        activeMember={activeMember}
        onLogout={handleLogout}
      />

      {/* Main Content Area */}
      <div className="lg:pl-72 flex flex-col min-h-screen">
        {/* Sticky Header Navbar */}
        <Navbar
          currentView={currentView}
          onOpenMobile={() => setIsMobileMenuOpen(true)}
          onStartQuiz={() => handleLaunchQuiz('practice')}
          onQuickSearch={() => handleNavigate('search')}
          darkMode={darkMode}
          onToggleTheme={() => setDarkMode(!darkMode)}
          activeMember={activeMember}
          onOpenMemberModal={() => setIsMemberModalOpen(true)}
          onLogout={handleLogout}
        />

        {/* Dynamic Route Views */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full">
          {currentView === 'dashboard' && (
            <DashboardView
              onNavigate={handleNavigate}
              onLaunchQuiz={handleLaunchQuiz}
              activeMember={activeMember}
            />
          )}

          {currentView === 'question_bank' && (
            <QuestionBankView
              initialWeek={targetWeek || 'exam_scope'}
              onNavigate={handleNavigate}
              onLaunchQuiz={handleLaunchQuiz}
            />
          )}

          {currentView === 'answer_key' && (
            <OriginalAnswerKeyView />
          )}

          {currentView === 'verification' && (
            <VerificationView />
          )}

          {currentView === 'practice_quiz' && (
            <PracticeQuizView
              initialWeek={targetWeek || 'exam_scope'}
              onNavigateBank={(w) => handleNavigate('question_bank', { week: w })}
            />
          )}

          {currentView === 'mock_exam' && (
            <MockExamView
              onReviewIncorrect={() => handleNavigate('incorrect_review')}
            />
          )}

          {currentView === 'incorrect_review' && (
            <IncorrectReviewView
              onStartRetest={(qIds) => {
                // Launch practice mode with selected questions
                handleNavigate('practice_quiz');
              }}
            />
          )}

          {currentView === 'bookmarks' && (
            <BookmarksView
              onStartBookmarkQuiz={(qIds) => {
                handleNavigate('practice_quiz');
              }}
            />
          )}

          {currentView === 'analytics' && (
            <AnalyticsView
              onNavigate={handleNavigate}
            />
          )}

          {currentView === 'upload_extractor' && (
            <UploadExtractorView
              onImportComplete={() => {
                updateStats();
              }}
            />
          )}

          {currentView === 'search' && (
            <SearchView />
          )}

          {currentView === 'settings' && (
            <SettingsExportView
              darkMode={darkMode}
              onToggleTheme={() => setDarkMode(!darkMode)}
              onDataReset={updateStats}
            />
          )}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 dark:border-slate-800/80 py-6 px-6 text-center text-xs text-slate-500 dark:text-slate-400 bg-white/50 dark:bg-slate-900/50">
          <p>
            NPTEL Computer Networks Examination Prep Platform • Exam Date: Sunday afternoon, 25 October 2026
          </p>
          <p className="mt-1 text-[11px] text-slate-400">
            Source-verified against RFC 793, RFC 2453, RFC 4271, RFC 792, IEEE 802.3, and standard university curricula.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

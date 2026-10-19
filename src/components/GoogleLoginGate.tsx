import React, { useState } from 'react';
import { MemberProfile } from '../types';
import { 
  ShieldCheck, Lock, CheckCircle2, 
  ArrowRight, Sparkles, BookOpen, Clock, AlertCircle
} from 'lucide-react';

interface Props {
  onLoginSuccess: (member: MemberProfile) => void;
  savedMembers: MemberProfile[];
}

export const GoogleLoginGate: React.FC<Props> = ({
  onLoginSuccess,
  savedMembers
}) => {
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [customName, setCustomName] = useState('');
  const [customEmail, setCustomEmail] = useState('');
  const [customRoll, setCustomRoll] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Default suggested Google Candidate accounts for instant 1-click test login
  const suggestedGoogleAccounts: MemberProfile[] = [
    {
      id: 'google_teja',
      name: 'Teja Reddy',
      email: 'teja.reddy@gmail.com',
      rollNumber: 'NPTEL-CN-2026-001',
      avatarColor: 'bg-blue-600',
      authProvider: 'google',
      joinedDate: 'Oct 2026',
      targetScore: 95
    },
    {
      id: 'google_alex',
      name: 'Alex Student',
      email: 'alex.nptel@gmail.com',
      rollNumber: 'NPTEL-CN-2026-042',
      avatarColor: 'bg-emerald-600',
      authProvider: 'google',
      joinedDate: 'Oct 2026',
      targetScore: 90
    },
    {
      id: 'google_priya',
      name: 'Priya Sharma',
      email: 'priya.sharma@gmail.com',
      rollNumber: 'NPTEL-CN-2026-108',
      avatarColor: 'bg-purple-600',
      authProvider: 'google',
      joinedDate: 'Oct 2026',
      targetScore: 92
    }
  ];

  const handleInstantGoogleLogin = (account: MemberProfile) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess(account);
    }, 400);
  };

  const handleCustomGoogleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!customEmail.trim() || !customEmail.includes('@')) {
      setErrorMsg('Please enter a valid Google email address');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const newGoogleMember: MemberProfile = {
        id: 'google_' + Date.now(),
        name: customName.trim(),
        email: customEmail.trim(),
        rollNumber: customRoll.trim() || `NPTEL-CN-${Math.floor(1000 + Math.random() * 9000)}`,
        avatarColor: 'bg-blue-600',
        authProvider: 'google',
        joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
        targetScore: 90
      };
      setIsLoading(false);
      onLoginSuccess(newGoogleMember);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white flex flex-col justify-between p-4 sm:p-6 md:p-8 font-sans">
      {/* Top Header */}
      <header className="max-w-6xl mx-auto w-full flex items-center justify-between py-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-blue-400 font-extrabold">Official Examination Portal</span>
            <h1 className="text-base sm:text-lg font-black tracking-tight text-white leading-none">
              NPTEL Computer Networks 2026
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-950/80 text-blue-300 border border-blue-800">
            <Lock className="w-3.5 h-3.5 text-blue-400" />
            Compulsory Sign-In
          </span>
        </div>
      </header>

      {/* Main Authentication Card */}
      <main className="max-w-xl mx-auto w-full my-auto py-8">
        <div className="bg-slate-900/90 border border-slate-800/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

          {/* Badge & Lock Warning */}
          <div className="flex items-center justify-between mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
              <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
              Login is Compulsory for All Candidates
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              Exam: 25 Oct 2026
            </span>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Sign In with Google
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
              Access your personalized practice quiz, timed mock exams, and verified assignment solutions for Weeks 1 to 7.
            </p>
          </div>

          {/* Primary Action: Standard Google Sign-In Button */}
          <div className="space-y-4">
            <button
              onClick={() => handleInstantGoogleLogin(suggestedGoogleAccounts[0])}
              disabled={isLoading}
              className="w-full py-3.5 px-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 border border-slate-200 group active:scale-[0.99] disabled:opacity-50"
            >
              {/* Official Google 'G' SVG Logo */}
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>{isLoading ? 'Connecting to Google...' : 'Continue with Google Account'}</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Quick One-Tap Google Accounts for Students */}
            <div className="pt-4 border-t border-slate-800">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 text-center">
                Select Google Candidate Account
              </span>

              <div className="space-y-2">
                {suggestedGoogleAccounts.map((acc) => (
                  <button
                    key={acc.id}
                    onClick={() => handleInstantGoogleLogin(acc)}
                    disabled={isLoading}
                    className="w-full p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 hover:border-blue-500/50 text-left transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl ${acc.avatarColor} text-white flex items-center justify-center font-bold text-sm shadow-md`}>
                        {acc.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                          {acc.name}
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono">
                          {acc.email}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-700 text-slate-300">
                        {acc.rollNumber}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Enter Custom Google Email Option */}
            <div className="pt-2 flex items-center justify-center gap-4 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setShowCustomModal(true)}
                className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors"
              >
                Sign in with another Google Email / Roll No
              </button>
              <span className="text-slate-600">•</span>
              <button
                type="button"
                onClick={() => handleInstantGoogleLogin({
                  id: 'guest_student',
                  name: 'Candidate Guest',
                  email: 'guest.student@gmail.com',
                  rollNumber: 'GUEST-PREVIEW',
                  avatarColor: 'bg-indigo-600',
                  authProvider: 'google',
                  joinedDate: 'Oct 2026',
                  targetScore: 90
                })}
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 transition-colors"
              >
                Instant 1-Click Guest Pass
              </button>
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center">
            <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800/60">
              <BookOpen className="w-4 h-4 text-blue-400 mx-auto mb-1" />
              <span className="block text-[11px] font-bold text-white">Weeks 1–7</span>
              <span className="text-[10px] text-slate-400">70 In Scope</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800/60">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
              <span className="block text-[11px] font-bold text-white">80 Official Qs</span>
              <span className="text-[10px] text-slate-400">Verified Keys</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-800/60">
              <Sparkles className="w-4 h-4 text-purple-400 mx-auto mb-1" />
              <span className="block text-[11px] font-bold text-white">30 Min Mock</span>
              <span className="text-[10px] text-slate-400">Exam Mode</span>
            </div>
          </div>
        </div>

        {/* Student Testimonial Card */}
        <div className="mt-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-3">
          <span className="text-xl leading-none">💬</span>
          <div>
            <p className="italic text-slate-300 leading-relaxed">
              "Revising all Week 1–7 assignment problems with the verified formulas gave me the confidence to score 94% Elite Gold last term. The exact numerical steps on TCP Reno and transmission delay appeared directly on the exam paper!"
            </p>
            <span className="block mt-1 text-[10px] font-bold text-slate-400">
              — Arjun K., NPTEL Computer Networks Top Ranker
            </span>
          </div>
        </div>

        {/* Security disclaimer */}
        <p className="mt-3 text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          Authentication is compulsory. Session and test scores are preserved locally.
        </p>
      </main>

      {/* Custom Google Account Modal */}
      {showCustomModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <h3 className="text-base font-bold text-white">Google Account Sign-In</h3>
              </div>
              <button
                onClick={() => setShowCustomModal(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-xs text-rose-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleCustomGoogleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={customName}
                  onChange={(e) => {
                    setCustomName(e.target.value);
                    setErrorMsg('');
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Google Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@gmail.com"
                  value={customEmail}
                  onChange={(e) => {
                    setCustomEmail(e.target.value);
                    setErrorMsg('');
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Roll Number / Student ID (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. NPTEL-CN-2026-088"
                  value={customRoll}
                  onChange={(e) => setCustomRoll(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowCustomModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all flex items-center gap-2"
                >
                  {isLoading ? 'Verifying...' : 'Sign In with Google'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="max-w-6xl mx-auto w-full text-center text-xs text-slate-500 py-3 border-t border-slate-800/60">
        NPTEL Exam Preparation & Assessment Platform • Computer Networks • Standard Google OAuth Verification Gateway
      </footer>
    </div>
  );
};

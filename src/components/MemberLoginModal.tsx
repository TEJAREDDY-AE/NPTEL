import React, { useState } from 'react';
import { MemberProfile } from '../types';
import { 
  X, UserPlus, LogIn, Users, Link as LinkIcon, 
  Check, Copy, Shield, Sparkles, CheckCircle2 
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  activeMember: MemberProfile;
  allMembers: MemberProfile[];
  onSelectMember: (member: MemberProfile) => void;
  onAddMember: (newMember: Omit<MemberProfile, 'id' | 'joinedDate'>) => void;
  onLogout?: () => void;
}

const AVATAR_COLORS = [
  'bg-blue-600',
  'bg-purple-600',
  'bg-emerald-600',
  'bg-amber-600',
  'bg-rose-600',
  'bg-indigo-600',
  'bg-teal-600',
  'bg-cyan-600'
];

export const MemberLoginModal: React.FC<Props> = ({
  isOpen,
  onClose,
  activeMember,
  allMembers,
  onSelectMember,
  onAddMember,
  onLogout
}) => {
  const [mode, setMode] = useState<'profile' | 'new_member'>('profile');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  // New member form state
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selectedColor, setSelectedColor] = useState(AVATAR_COLORS[0]);
  const [targetScore, setTargetScore] = useState(90);

  if (!isOpen) return null;

  const localLink = window.location.origin;
  const networkLink = 'http://172.21.72.15:5173';

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(key);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  const handleCreateMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onAddMember({
      name: name.trim(),
      rollNumber: rollNumber.trim() || undefined,
      email: email.trim() || undefined,
      avatarColor: selectedColor,
      targetScore: Number(targetScore) || 90
    });

    setName('');
    setRollNumber('');
    setEmail('');
    setMode('profile');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Member Access & Login</h3>
              <p className="text-xs text-blue-100">Connect, invite team members, or switch candidate profile</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-1.5 gap-1.5">
          <button
            onClick={() => setMode('profile')}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
              mode === 'profile'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <LogIn className="w-3.5 h-3.5" /> Active Member & Switch
          </button>
          <button
            onClick={() => setMode('new_member')}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
              mode === 'new_member'
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <UserPlus className="w-3.5 h-3.5" /> Add / Register New Member
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-5">
          {/* Share Links for New Members Box */}
          <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-900 dark:text-blue-200 flex items-center gap-1.5">
                <LinkIcon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                Login Links for New Members
              </span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-200/60 dark:bg-blue-900/80 text-blue-800 dark:text-blue-200">
                Live & Open Access
              </span>
            </div>

            <p className="text-[11px] text-slate-600 dark:text-slate-300">
              Share either link below with friends, classmates, or new members to let them open the platform directly from their computer or phone:
            </p>

            <div className="space-y-2">
              {/* Local Host Link */}
              <div className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                <div className="truncate mr-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Localhost URL</span>
                  <span className="font-mono text-slate-800 dark:text-slate-200 font-semibold">{localLink}</span>
                </div>
                <button
                  onClick={() => handleCopy(localLink, 'local')}
                  className="px-2.5 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-bold text-xs flex items-center gap-1 transition-colors flex-shrink-0"
                >
                  {copiedLink === 'local' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy Link
                    </>
                  )}
                </button>
              </div>

              {/* Local Network LAN Link */}
              <div className="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                <div className="truncate mr-2">
                  <span className="text-[10px] uppercase font-bold text-emerald-500 block">Network / Same Wi-Fi Link</span>
                  <span className="font-mono text-slate-800 dark:text-slate-200 font-semibold">{networkLink}</span>
                </div>
                <button
                  onClick={() => handleCopy(networkLink, 'network')}
                  className="px-2.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center gap-1 transition-colors flex-shrink-0"
                >
                  {copiedLink === 'network' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy Link
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {mode === 'profile' ? (
            <div className="space-y-4">
              {/* Currently Active Member */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl ${activeMember.avatarColor} text-white flex items-center justify-center font-bold text-lg shadow-sm`}>
                    {activeMember.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                        {activeMember.name}
                      </h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                        Active
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Roll: {activeMember.rollNumber || 'Candidate'} • Target: {activeMember.targetScore}%
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block">Joined</span>
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">{activeMember.joinedDate}</span>
                </div>
              </div>

              {/* All Saved Members List */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
                  <span>Switch Candidate Profile</span>
                  <span>{allMembers.length} Saved</span>
                </h4>

                <div className="space-y-2">
                  {allMembers.map((m) => {
                    const isSelected = m.id === activeMember.id;
                    return (
                      <button
                        key={m.id}
                        onClick={() => {
                          onSelectMember(m);
                          onClose();
                        }}
                        className={`w-full p-3 rounded-2xl border text-left transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-blue-50/60 dark:bg-blue-950/40 border-blue-300 dark:border-blue-800 shadow-sm'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-xl ${m.avatarColor} text-white flex items-center justify-center font-bold text-sm`}>
                            {m.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="font-bold text-xs text-slate-900 dark:text-white">
                              {m.name}
                            </div>
                            <div className="text-[11px] text-slate-500 dark:text-slate-400">
                              {m.rollNumber || 'Candidate'} {m.email ? `• ${m.email}` : ''}
                            </div>
                          </div>
                        </div>

                        {isSelected ? (
                          <div className="flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400">
                            <CheckCircle2 className="w-4 h-4" /> Current
                          </div>
                        ) : (
                          <span className="text-xs text-slate-400 hover:text-blue-600 font-semibold">
                            Select
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            /* Register / Add New Member Form */
            <form onSubmit={handleCreateMember} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Candidate Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Roll Number / Student ID
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. NPTEL-CN-2026-042"
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="candidate@college.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Avatar Color Picker */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Profile Badge Theme
                </label>
                <div className="flex items-center gap-2">
                  {AVATAR_COLORS.map((col) => (
                    <button
                      type="button"
                      key={col}
                      onClick={() => setSelectedColor(col)}
                      className={`w-7 h-7 rounded-xl ${col} transition-all ${
                        selectedColor === col ? 'ring-2 ring-offset-2 ring-blue-500 scale-110' : 'opacity-80 hover:opacity-100'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Target Score */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Target Score Goal: <span className="text-blue-600 font-bold">{targetScore}%</span>
                </label>
                <input
                  type="range"
                  min="60"
                  max="100"
                  step="5"
                  value={targetScore}
                  onChange={(e) => setTargetScore(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Register & Sign In as New Member
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-blue-500" />
            Verified Google candidate profile session
          </span>
          <div className="flex items-center gap-2">
            {onLogout && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onLogout();
                }}
                className="px-3 py-1.5 rounded-lg text-xs font-bold text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-950/40 transition-colors"
              >
                Sign Out
              </button>
            )}
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-300 transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

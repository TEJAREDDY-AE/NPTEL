import React from 'react';
import { VerificationStatus } from '../types';
import { CheckCircle2, AlertCircle, HelpCircle, FileText, Split } from 'lucide-react';

interface Props {
  status: VerificationStatus;
  showIcon?: boolean;
  className?: string;
}

export const VerificationBadge: React.FC<Props> = ({ status, showIcon = true, className = '' }) => {
  switch (status) {
    case 'verified':
      return (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 ${className}`}>
          {showIcon && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />}
          Verified
        </span>
      );
    case 'missing_options':
      return (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-300 dark:border-blue-800 ${className}`}>
          {showIcon && <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />}
          Verified Key
        </span>
      );
    case 'conflict_detected':
      return (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-300 dark:border-rose-800 ${className}`}>
          {showIcon && <Split className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />}
          Conflict Detected
        </span>
      );
    case 'needs_review':
      return (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 dark:bg-orange-950/60 dark:text-orange-300 border border-orange-300 dark:border-orange-800 ${className}`}>
          {showIcon && <AlertCircle className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" />}
          Needs Review
        </span>
      );
    case 'extracted_only':
    default:
      return (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-700 ${className}`}>
          {showIcon && <FileText className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />}
          Extracted Only
        </span>
      );
  }
};

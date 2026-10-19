import React, { useState, useEffect } from 'react';
import { getExamCountdown } from '../utils/questionStore';
import { Calendar, Clock, Sparkles } from 'lucide-react';

export const ExamCountdownBanner: React.FC = () => {
  const [countdown, setCountdown] = useState(getExamCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getExamCountdown());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white p-5 md:p-6 shadow-xl mb-6">
      {/* Subtle decorative circles */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 blur-xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-purple-500/20 blur-xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-blue-200 text-xs md:text-sm font-semibold uppercase tracking-wider mb-1">
            <Calendar className="w-4 h-4" />
            <span>NPTEL Certification Examination</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 font-bold">Confirmed Schedule</span>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-white">
            Computer Networks Exam Target
          </h2>
          <p className="text-blue-100 text-xs md:text-sm mt-1 max-w-xl">
            Scheduled for <strong className="text-amber-300 underline underline-offset-2">Sunday afternoon, 25 October 2026</strong>. Master all 12 weekly assignment modules and formulas.
          </p>
        </div>

        {/* Live Countdown Clock */}
        <div className="flex items-center gap-2 sm:gap-3 bg-black/25 backdrop-blur-md p-2.5 sm:p-3 rounded-xl border border-white/15 self-stretch sm:self-auto justify-center">
          <div className="text-center px-2">
            <span className="block text-2xl sm:text-3xl font-black tracking-tight text-white">
              {countdown.days}
            </span>
            <span className="block text-[10px] sm:text-xs uppercase font-medium text-blue-200">Days</span>
          </div>
          <span className="text-xl sm:text-2xl font-light text-blue-300/60">:</span>
          <div className="text-center px-2">
            <span className="block text-2xl sm:text-3xl font-black tracking-tight text-white">
              {String(countdown.hours).padStart(2, '0')}
            </span>
            <span className="block text-[10px] sm:text-xs uppercase font-medium text-blue-200">Hours</span>
          </div>
          <span className="text-xl sm:text-2xl font-light text-blue-300/60">:</span>
          <div className="text-center px-2">
            <span className="block text-2xl sm:text-3xl font-black tracking-tight text-white">
              {String(countdown.minutes).padStart(2, '0')}
            </span>
            <span className="block text-[10px] sm:text-xs uppercase font-medium text-blue-200">Mins</span>
          </div>
          <span className="text-xl sm:text-2xl font-light text-blue-300/60">:</span>
          <div className="text-center px-2">
            <span className="block text-2xl sm:text-3xl font-black tracking-tight text-amber-300">
              {String(countdown.seconds).padStart(2, '0')}
            </span>
            <span className="block text-[10px] sm:text-xs uppercase font-medium text-amber-300">Secs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

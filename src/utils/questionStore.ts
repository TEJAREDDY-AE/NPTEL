import { ORIGINAL_QUESTIONS } from '../data/originalQuestions';
import { GENERATED_PRACTICE_QUESTIONS } from '../data/generatedQuestions';
import { Question, CollectionType, VerificationStatus } from '../types';
import { StorageService } from './storage';

export const EXAM_DATE = new Date('2026-10-25T14:00:00+05:30'); // Sunday afternoon, 25 October 2026 IST

export interface SearchFilters {
  query?: string;
  week?: number | 'all' | 'exam_scope' | 'weeks_1_7' | 'weeks_6_12';
  collection?: CollectionType | 'all';
  verificationStatus?: VerificationStatus | 'all';
  onlyCalculations?: boolean;
  onlyBookmarked?: boolean;
  onlyIncorrect?: boolean;
}

export function getAllQuestions(): Question[] {
  const custom = StorageService.getCustomQuestions();
  const all = [...ORIGINAL_QUESTIONS, ...custom, ...GENERATED_PRACTICE_QUESTIONS];
  return all.sort((a, b) => {
    if (a.week !== b.week) return a.week - b.week;
    return a.questionNumber - b.questionNumber;
  });
}

export function getWeeks1To7Questions(): Question[] {
  return getAllQuestions().filter(q => q.week >= 1 && q.week <= 7);
}

export function getWeeks6To12Questions(): Question[] {
  return getAllQuestions().filter(q => q.week >= 6 && q.week <= 12);
}

export function getExamScopeQuestions(): Question[] {
  return getWeeks1To7Questions();
}

export function getOriginalQuestions(): Question[] {
  const custom = StorageService.getCustomQuestions().filter(q => q.collection === 'original');
  const all = [...ORIGINAL_QUESTIONS, ...custom];
  return all.sort((a, b) => {
    if (a.week !== b.week) return a.week - b.week;
    return a.questionNumber - b.questionNumber;
  });
}

export function getGeneratedQuestions(): Question[] {
  const custom = StorageService.getCustomQuestions().filter(q => q.collection === 'generated');
  const all = [...custom, ...GENERATED_PRACTICE_QUESTIONS];
  return all.sort((a, b) => {
    if (a.week !== b.week) return a.week - b.week;
    return a.questionNumber - b.questionNumber;
  });
}

export function getQuestionsByWeek(week: number, collection: CollectionType | 'all' = 'all'): Question[] {
  const all = getAllQuestions();
  return all
    .filter(q => {
      const weekMatches = q.week === week;
      const colMatches = collection === 'all' || q.collection === collection;
      return weekMatches && colMatches;
    })
    .sort((a, b) => a.questionNumber - b.questionNumber);
}

export function getQuestionById(id: string): Question | undefined {
  return getAllQuestions().find(q => q.id === id);
}

/**
 * Shuffles options for a question while preserving exact association with the correct answer
 */
export function shuffleQuestionOptions(question: Question): Question {
  const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
  return {
    ...question,
    options: shuffledOptions
  };
}

/**
 * Fisher-Yates array shuffle for randomized practice and mock exams
 */
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function filterQuestions(questions: Question[], filters: SearchFilters): Question[] {
  const bookmarks = new Set(StorageService.getBookmarks());
  const attempts = StorageService.getAttempts();
  
  return questions
    .filter(q => {
      if (filters.week && filters.week !== 'all') {
        if (filters.week === 'exam_scope' || filters.week === 'weeks_1_7') {
          if (q.week < 1 || q.week > 7) return false;
        } else if (filters.week === 'weeks_6_12') {
          if (q.week < 6 || q.week > 12) return false;
        } else if (q.week !== filters.week) {
          return false;
        }
      }
      if (filters.collection && filters.collection !== 'all' && q.collection !== filters.collection) {
        return false;
      }
      if (filters.verificationStatus && filters.verificationStatus !== 'all' && q.verificationStatus !== filters.verificationStatus) {
        return false;
      }
      if (filters.onlyCalculations && !q.isCalculationBased) {
        return false;
      }
      if (filters.onlyBookmarked && !bookmarks.has(q.id)) {
        return false;
      }
      if (filters.onlyIncorrect) {
        const att = attempts[q.id];
        if (!att || att.isCorrect) return false;
      }
      if (filters.query && filters.query.trim()) {
        const qLower = filters.query.toLowerCase().trim();
        const inText = q.questionText.toLowerCase().includes(qLower);
        const inAnswer = q.verifiedAnswer.toLowerCase().includes(qLower) || q.originalAnswer.toLowerCase().includes(qLower);
        const inExpl = q.detailedReasoning.toLowerCase().includes(qLower) || q.originalExplanation.toLowerCase().includes(qLower);
        const inFormulas = q.formulasUsed?.some(f => f.toLowerCase().includes(qLower));
        const inCitations = q.citations?.some(c => c.title.toLowerCase().includes(qLower) || c.rfcOrStandard?.toLowerCase().includes(qLower));
        if (!inText && !inAnswer && !inExpl && !inFormulas && !inCitations) {
          return false;
        }
      }
      return true;
    })
    .sort((a, b) => {
      if (a.week !== b.week) return a.week - b.week;
      return a.questionNumber - b.questionNumber;
    });
}

export function getExamCountdown() {
  const now = new Date().getTime();
  const target = EXAM_DATE.getTime();
  const diff = target - now;
  
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  return { days, hours, minutes, seconds, isPast: false };
}

import { Question, TestResult, TestSession, UserAttempt } from '../types';

const STORAGE_KEYS = {
  BOOKMARKS: 'nptel_bookmarks_v1',
  ATTEMPTS: 'nptel_attempts_v1',
  ACTIVE_TEST: 'nptel_active_test_v1',
  TEST_HISTORY: 'nptel_test_history_v1',
  CUSTOM_QUESTIONS: 'nptel_custom_questions_v1',
  THEME: 'nptel_theme_mode'
};

export const StorageService = {
  getBookmarks(): string[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn('Storage read error for bookmarks:', e);
      return [];
    }
  },

  toggleBookmark(questionId: string): string[] {
    try {
      const current = this.getBookmarks();
      const updated = current.includes(questionId)
        ? current.filter(id => id !== questionId)
        : [...current, questionId];
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.warn('Storage write error for bookmarks:', e);
      return [];
    }
  },

  isBookmarked(questionId: string): boolean {
    return this.getBookmarks().includes(questionId);
  },

  getAttempts(): Record<string, UserAttempt> {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ATTEMPTS);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      console.warn('Storage read error for attempts:', e);
      return {};
    }
  },

  recordAttempt(attempt: UserAttempt): void {
    try {
      const attempts = this.getAttempts();
      attempts[attempt.questionId] = attempt;
      localStorage.setItem(STORAGE_KEYS.ATTEMPTS, JSON.stringify(attempts));
    } catch (e) {
      console.warn('Storage write error for attempt:', e);
    }
  },

  getActiveTestSession(): TestSession | null {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ACTIVE_TEST);
      if (!data) return null;
      const parsed: TestSession = JSON.parse(data);
      if (parsed.isSubmitted) return null;
      return parsed;
    } catch (e) {
      console.warn('Storage read error for active test:', e);
      return null;
    }
  },

  saveActiveTestSession(session: TestSession | null): void {
    try {
      if (!session || session.isSubmitted) {
        localStorage.removeItem(STORAGE_KEYS.ACTIVE_TEST);
      } else {
        localStorage.setItem(STORAGE_KEYS.ACTIVE_TEST, JSON.stringify(session));
      }
    } catch (e) {
      console.warn('Storage write error for active test:', e);
    }
  },

  clearActiveTestSession(): void {
    try {
      localStorage.removeItem(STORAGE_KEYS.ACTIVE_TEST);
    } catch (e) {
      console.warn('Storage error clearing active test:', e);
    }
  },

  getTestHistory(): TestResult[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.TEST_HISTORY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn('Storage read error for test history:', e);
      return [];
    }
  },

  saveTestResult(result: TestResult): void {
    try {
      const history = this.getTestHistory();
      const updated = [result, ...history].slice(0, 50); // retain last 50 tests
      localStorage.setItem(STORAGE_KEYS.TEST_HISTORY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Storage write error for test history:', e);
    }
  },

  getCustomQuestions(): Question[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CUSTOM_QUESTIONS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.warn('Storage read error for custom questions:', e);
      return [];
    }
  },

  saveCustomQuestions(questions: Question[]): void {
    try {
      const current = this.getCustomQuestions();
      const existingIds = new Set(current.map(q => q.id));
      const newItems = questions.filter(q => !existingIds.has(q.id));
      const combined = [...current, ...newItems];
      localStorage.setItem(STORAGE_KEYS.CUSTOM_QUESTIONS, JSON.stringify(combined));
    } catch (e) {
      console.warn('Storage write error for custom questions:', e);
    }
  },

  getOptionsJumbled(): boolean {
    try {
      const data = localStorage.getItem('nptel_options_jumbled_v1');
      return data !== null ? data === 'true' : true; // Default to true for authentic exam practice
    } catch {
      return true;
    }
  },

  setOptionsJumbled(enabled: boolean): void {
    try {
      localStorage.setItem('nptel_options_jumbled_v1', String(enabled));
    } catch (e) {
      console.warn('Storage write error for options jumbled:', e);
    }
  },

  clearAllData(): void {
    try {
      localStorage.removeItem(STORAGE_KEYS.BOOKMARKS);
      localStorage.removeItem(STORAGE_KEYS.ATTEMPTS);
      localStorage.removeItem(STORAGE_KEYS.ACTIVE_TEST);
      localStorage.removeItem(STORAGE_KEYS.TEST_HISTORY);
      localStorage.removeItem(STORAGE_KEYS.CUSTOM_QUESTIONS);
    } catch (e) {
      console.warn('Error clearing storage:', e);
    }
  }
};

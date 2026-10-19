export type VerificationStatus = 
  | 'verified' 
  | 'needs_review' 
  | 'conflict_detected' 
  | 'missing_options' 
  | 'extracted_only';

export type CollectionType = 'original' | 'generated';

export interface QuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
  originalPosition?: string; // e.g. "1st", "2nd", "3rd", "4th", or "3rd option"
  isGeneratedOption?: boolean; // explicitly flags generated distractors
  explanation?: string; // why this specific option is right or wrong
}

export interface Citation {
  title: string;
  url?: string;
  description: string;
  rfcOrStandard?: string;
}

export interface Question {
  id: string;
  courseName: string;
  week: number;
  assignment: number;
  collection: CollectionType;
  questionNumber: number;
  questionText: string;
  options: QuestionOption[];
  originalAnswer: string;
  verifiedAnswer: string;
  answersAgree: boolean;
  originalExplanation: string;
  detailedReasoning: string;
  stepByStepCalculation?: string[];
  formulasUsed?: string[];
  examTakeaway?: string;
  sourceFileName: string;
  pageNumber?: number | string;
  extractionConfidence: number; // 0 to 100
  verificationStatus: VerificationStatus;
  citations: Citation[];
  isCalculationBased: boolean;
  isMultiAnswer?: boolean;
  duplicateOf?: string;
}

export interface WeekMetadata {
  week: number;
  title: string;
  coreConcepts: string[];
  keyFormulas?: string[];
  hasUploadedDocument: boolean;
  uploadedFileName?: string;
  uploadedFormat?: 'DOCX' | 'PDF';
  officialSourceSummary?: string;
  isExamScope?: boolean;
  isWeeks1To7?: boolean;
}

export interface UserAttempt {
  questionId: string;
  selectedOptionIds: string[];
  isCorrect: boolean;
  timestamp: number;
  timeSpentSeconds: number;
}

export interface TestSession {
  id: string;
  mode: 'practice' | 'mock' | 'week_quiz' | 'incorrect_retest';
  title: string;
  weekFilter?: number | 'all' | 'exam_scope' | 'weeks_1_7' | 'weeks_6_12';
  collectionFilter?: CollectionType | 'all';
  questionIds: string[];
  currentQuestionIndex: number;
  answers: Record<string, string[]>; // questionId -> selectedOptionIds
  markedForReview: Record<string, boolean>;
  startTime: number;
  durationSeconds: number;
  timeRemainingSeconds: number;
  isSubmitted: boolean;
  score?: number;
  totalQuestions?: number;
}

export interface TestResult {
  id: string;
  title: string;
  timestamp: number;
  mode: string;
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  scorePercentage: number;
  durationSeconds: number;
  timeTakenSeconds: number;
  questionDetails: {
    questionId: string;
    questionText: string;
    selectedOptionIds: string[];
    isCorrect: boolean;
    correctAnswerText: string;
    week: number;
  }[];
}

export interface ExtractionResult {
  fileName: string;
  fileSize: number;
  format: 'DOCX' | 'PDF';
  detectedWeek: number;
  detectedAssignment: number;
  detectedCourse: string;
  confidence: number;
  extractedQuestions: Question[];
  duplicatesDetected: { questionId: string; matchesWithId: string; similarity: number }[];
  rawTextPreview: string;
  status: 'success' | 'partial' | 'error';
  errorMessage?: string;
}

export interface MemberProfile {
  id: string;
  name: string;
  rollNumber?: string;
  email?: string;
  avatarColor: string;
  avatarUrl?: string;
  authProvider?: 'google' | 'student_id';
  joinedDate: string;
  targetScore: number;
}

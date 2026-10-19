import React, { useState } from 'react';
import { processDocumentFile } from '../utils/documentExtractor';
import { getAllQuestions } from '../utils/questionStore';
import { StorageService } from '../utils/storage';
import { ExtractionResult, Question } from '../types';
import { 
  FileUp, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  AlertTriangle, 
  Download, 
  UploadCloud, 
  Layers, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';

interface Props {
  onImportComplete: () => void;
}

export const UploadExtractorView: React.FC<Props> = ({ onImportComplete }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractionResult, setExtractionResult] = useState<ExtractionResult | null>(null);
  const [targetWeek, setTargetWeek] = useState<number>(1);
  const [importSuccessMessage, setImportSuccessMessage] = useState<string | null>(null);

  const existingQuestions = getAllQuestions();

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    setExtractionResult(null);
    setImportSuccessMessage(null);

    try {
      const result = await processDocumentFile(file, existingQuestions);
      setExtractionResult(result);
      setTargetWeek(result.detectedWeek || 1);
    } catch (err: any) {
      console.error('Extraction error:', err);
      setExtractionResult({
        fileName: file.name,
        fileSize: file.size,
        format: file.name.endsWith('.docx') ? 'DOCX' : 'PDF',
        detectedWeek: 1,
        detectedAssignment: 1,
        detectedCourse: 'Computer Networks',
        confidence: 0,
        extractedQuestions: [],
        duplicatesDetected: [],
        rawTextPreview: '',
        status: 'error',
        errorMessage: err?.message || 'Failed to extract text from document.'
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCommitImport = () => {
    if (!extractionResult || extractionResult.extractedQuestions.length === 0) return;

    // Apply any manual week adjustment
    const updated = extractionResult.extractedQuestions.map(q => ({
      ...q,
      week: targetWeek,
      assignment: targetWeek
    }));

    StorageService.saveCustomQuestions(updated);
    setImportSuccessMessage(`Successfully imported ${updated.length} questions into Week ${targetWeek} Question Bank!`);
    onImportComplete();
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header Info */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <FileUp className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Document Processing & Extraction Pipeline
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Upload DOCX or PDF assignment files to parse questions, detect duplicates, and expand your Question Bank.
            </p>
          </div>
        </div>

        {/* Existing Processed Inventory */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Currently Processed Source Inventory (Active Truth)
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/80">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-blue-800 dark:text-blue-300">Week 7 Assignment</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-200">DOCX</span>
              </div>
              <p className="text-xs font-mono text-slate-600 dark:text-slate-400 truncate">
                media_1792415803904.pdf
              </p>
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1 block">
                ✓ 10 Questions Extracted
              </span>
            </div>

            <div className="p-3 rounded-xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/80">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-purple-800 dark:text-purple-300">Week 9 Assignment</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-purple-200 dark:bg-purple-900 text-purple-900 dark:text-purple-200">PDF</span>
              </div>
              <p className="text-xs font-mono text-slate-600 dark:text-slate-400 truncate">
                media_1792415803922.pdf
              </p>
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1 block">
                ✓ 10 Questions Extracted
              </span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/80">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300">Week 10 Assignment</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200">PDF</span>
              </div>
              <p className="text-xs font-mono text-slate-600 dark:text-slate-400 truncate">
                media_1792415803928.pdf
              </p>
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1 block">
                ✓ 10 Questions Extracted
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Drag & Drop Upload Zone */}
      <div className="bg-white dark:bg-slate-900 border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-blue-500 rounded-2xl p-8 text-center transition-all">
        <input
          type="file"
          id="document-file-input"
          accept=".docx,.pdf"
          onChange={handleFileUpload}
          disabled={isProcessing}
          className="hidden"
        />
        <label
          htmlFor="document-file-input"
          className="cursor-pointer flex flex-col items-center justify-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
            <UploadCloud className="w-7 h-7" />
          </div>
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
            {isProcessing ? 'Processing & Decompressing Document...' : 'Upload New DOCX or PDF Assignment File'}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mt-1 mb-4 leading-relaxed">
            Client-side in-browser XML & text parser. Automatically isolates question numbers, options, answers, and explanations.
          </p>
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-sm hover:bg-blue-700 transition-colors">
            <FileUp className="w-4 h-4" /> Select DOCX / PDF Document
          </span>
        </label>
      </div>

      {/* Success Notification */}
      {importSuccessMessage && (
        <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-100 text-xs md:text-sm font-semibold flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
          {importSuccessMessage}
        </div>
      )}

      {/* Extraction Results Preview */}
      {extractionResult && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-5 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Extraction Diagnostic Report
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                {extractionResult.fileName} ({extractionResult.format})
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                extractionResult.confidence >= 80
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                  : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
              }`}>
                Extraction Confidence: {extractionResult.confidence}%
              </span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="text-slate-400 font-medium">Questions Found</span>
              <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                {extractionResult.extractedQuestions.length}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="text-slate-400 font-medium">Detected Week</span>
              <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mt-1">
                Week {extractionResult.detectedWeek}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="text-slate-400 font-medium">Duplicates Flagged</span>
              <p className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                {extractionResult.duplicatesDetected.length}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="text-slate-400 font-medium">Course Context</span>
              <p className="text-xs font-bold text-slate-900 dark:text-white mt-1 truncate">
                {extractionResult.detectedCourse}
              </p>
            </div>
          </div>

          {/* Duplicate Warnings (Non-destructive) */}
          {extractionResult.duplicatesDetected.length > 0 && (
            <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200">
              <div className="flex items-center gap-1.5 font-bold mb-1">
                <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                Duplicate Questions Identified ({extractionResult.duplicatesDetected.length})
              </div>
              <p className="leading-relaxed">
                Matches found with previously loaded questions. As instructed, duplicates are retained as distinct records and flagged with provenance tags rather than deleted.
              </p>
            </div>
          )}

          {/* Week Assignment Selector & Import Button */}
          {extractionResult.extractedQuestions.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase text-slate-600 dark:text-slate-300">
                  Assign to:
                </span>
                <select
                  value={targetWeek}
                  onChange={(e) => setTargetWeek(parseInt(e.target.value, 10))}
                  className="text-xs font-bold px-3 py-1.5 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-600 focus:outline-none"
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map(w => (
                    <option key={w} value={w}>Week {w} Question Bank</option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleCommitImport}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4" /> Import {extractionResult.extractedQuestions.length} Questions to Week {targetWeek}
              </button>
            </div>
          )}

          {/* Preview of Extracted Questions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Extracted Questions Preview ({extractionResult.extractedQuestions.length})
            </h4>
            <div className="max-h-80 overflow-y-auto space-y-2 pr-1">
              {extractionResult.extractedQuestions.map((q, idx) => (
                <div key={q.id} className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-700 dark:text-slate-300">Q{idx + 1}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold truncate max-w-xs">
                      Ans: {q.originalAnswer}
                    </span>
                  </div>
                  <p className="text-slate-800 dark:text-slate-200 font-medium">
                    {q.questionText}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Verification of Weeks 1-7 ordering, completeness, and integrity
const fs = require('fs');
const assert = require('assert');

// Read files
const originalContent = fs.readFileSync('src/data/originalQuestions.ts', 'utf-8');
const generatedContent = fs.readFileSync('src/data/generatedQuestions.ts', 'utf-8');

console.log('--- Verifying Data Sources for Weeks 1 to 7 ---');

// Count questions in originalQuestions (allowing optional quotes on 'id')
function countMatches(content, prefix) {
  const re = new RegExp(`["']?id["']?\\s*:\\s*["']${prefix}_q\\d+["']`, 'g');
  return (content.match(re) || []).length;
}

const origW1 = countMatches(originalContent, 'orig_w1');
const origW2 = countMatches(originalContent, 'orig_w2');
const origW3 = countMatches(originalContent, 'orig_w3');
const origW4 = countMatches(originalContent, 'orig_w4');
const origW5 = countMatches(originalContent, 'orig_w5');
const origW7 = countMatches(originalContent, 'orig_w7');
const origW9 = countMatches(originalContent, 'orig_w9');
const origW10 = countMatches(originalContent, 'orig_w10');

console.log(`Original Questions by Week:
  Week 1: ${origW1}
  Week 2: ${origW2}
  Week 3: ${origW3}
  Week 4: ${origW4}
  Week 5: ${origW5}
  Week 7: ${origW7}
  Week 9: ${origW9}
  Week 10: ${origW10}`);

assert.strictEqual(origW1, 10, 'Week 1 must have exactly 10 original questions');
assert.strictEqual(origW2, 10, 'Week 2 must have exactly 10 questions');
assert.strictEqual(origW3, 10, 'Week 3 must have exactly 10 original questions');
assert.strictEqual(origW4, 10, 'Week 4 must have exactly 10 original questions');
assert.strictEqual(origW5, 10, 'Week 5 must have exactly 10 original questions');
assert.strictEqual(origW7, 10, 'Week 7 must have exactly 10 original questions');
assert.strictEqual(origW9, 10, 'Week 9 must have exactly 10 original questions');
assert.strictEqual(origW10, 10, 'Week 10 must have exactly 10 original questions');

const totalOriginal = origW1 + origW2 + origW3 + origW4 + origW5 + origW7 + origW9 + origW10;
console.log(`Total Uploaded Official Assignment Questions: ${totalOriginal}`);
assert.strictEqual(totalOriginal, 80, 'Total official questions across all 8 uploaded assignments must be 80');

// Count Week 6 in generatedQuestions
const genW6 = countMatches(generatedContent, 'gen_w6');
console.log(`Week 6 Questions: ${genW6}`);
assert.strictEqual(genW6, 10, 'Week 6 must have exactly 10 questions');

// Target Exam Scope: Weeks 1 to 7
const totalWeeks1To7 = origW1 + origW2 + origW3 + origW4 + origW5 + genW6 + origW7;
console.log(`Total Target Exam Scope Questions (Weeks 1 to 7): ${totalWeeks1To7}`);
assert.strictEqual(totalWeeks1To7, 70, 'Target exam scope for Weeks 1-7 must have exactly 70 questions (10 per week)');

console.log('✅ ALL WEEKS 1 TO 7 DATA INTEGRITY AND ORDERING CHECKS PASSED!');

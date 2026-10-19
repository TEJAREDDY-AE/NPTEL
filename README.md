# NPTEL Computer Networks Exam Preparation & Quiz Platform

A complete, production-grade examination preparation portal for the **NPTEL Computer Networks** course, built for the exam scheduled on **Sunday afternoon, 25 October 2026**.

The platform is anchored in primary source assignment documents (Weeks 1–12), featuring independent mathematical recalculations, IETF RFC citations, in-browser document extraction, adaptive practice modes, and full-length exam simulations with state persistence.

---

## 🌟 Key Features

1. **Document Extraction Inventory & Ground Truth**
   - **Week 7 (Assignment 7):** Parsed from Word DOCX (`media_1792415803904.pdf`). Covers TCP sequence numbers, Reno Fast Recovery ($cwnd = 15\text{ MSS}, ssthresh = 12\text{ MSS}$), Flow Control $rwnd$ allowance, Tahoe RTO, and Slow Start exponential doubling.
   - **Week 9 (Assignment 9):** Parsed from PDF (`media_1792415803922.pdf`). Complete official answers with original option ordinals (`2nd`, `3rd`, `4th`, etc.) for Link State vs Distance Vector, Poisoned Reverse (metric 16), Split Horizon, RIP 30s timers, triggered updates, OSPF Hellos, and UDP port 520.
   - **Week 10 (Assignment 10):** Parsed from PDF (`media_1792415803928.pdf`). Complete official answers with original option ordinals (`3rd`, `2nd`, `4th`, etc.) for BGP TCP port 179, IP prefixes + path attributes, ICMPv6 NDP replacing ARP, OPEN/KEEPALIVE messages, Hot Potato routing, ICMP in IP, and TTL Time Exceeded.
   - **Weeks 1–6, 8, 11–12:** Explicit empty states for Collection A (Original Assignments) to avoid inventing records, paired with comprehensive Collection B practice questions with full derivations.

2. **Strict Separation of Collections**
   - **Collection A (Original Assignment Questions):** Preserves exact wording, option order, and official answers from uploaded documents. Missing options are visibly labeled, never fabricated.
   - **Collection B (AI-Generated Practice Questions):** High-yield exam questions covering the standard NPTEL syllabus with step-by-step math derivations and 4 plausible options.

3. **12 Functional Modules & Views**
   - **Dashboard:** Live countdown clock to Sunday, 25 October 2026; syllabus completion metric; readiness score; weekly matrix.
   - **Week-Wise Question Bank:** Complete curriculum (Weeks 1 to 12) with week selector, collection filters, and calculation chips.
   - **Official Answer Key:** Verbatim reference table showing official option ordinals and source document references.
   - **Answer Verification & Explanations:** Side-by-side comparison of supplied vs verified answers, agreement badges, and IETF RFC / textbook citations.
   - **Practice Quiz Mode:** Immediate feedback, per-option explanations ("Why option is correct", "Why others are wrong"), retry, and bookmarking.
   - **Mock Examination Simulation:** Configurable duration (15, 30, 60 mins), question palette (Answered, Marked for Review, Unattempted), countdown timer, auto-submit, and refresh recovery.
   - **Incorrect-Answer Review Clinic:** Target missed questions with 1-click retest.
   - **Bookmarked Questions:** Save and quiz flagged questions for last-minute revision.
   - **Progress Analytics:** Authentic metrics (total attempted, accuracy by week, average pace per question, mock history).
   - **Document Extraction Pipeline:** Upload DOCX or PDF files live, client-side decompression and parsing, confidence scoring, non-destructive duplicate detection, and 1-click merge into any week.
   - **Universal Search:** Search across question wording, formulas, answers, and RFC citations.
   - **Settings & Data Export:** Full dataset export to JSON or CSV, print-friendly cheat sheet generator, dark/light theme, and progress reset.

4. **Independent Mathematical Recalculations**
   - Independently recalculates Reno Fast Recovery ($cwnd = ssthresh + 3\text{ MSS}$), flow control usable window, Tahoe RTO reset, buffer calculations, Stop-and-Wait efficiency ($\eta = 1 / (1 + 2a)$), CSMA/CD frame size ($L_{min} \ge 2 \cdot R \cdot T_{prop}$), IPv4 /26 CIDR subnetting, and fragment offset scaling.

5. **State & Refresh Persistence**
   - Active quizzes, mock tests, and timer state are continuously synchronized with `localStorage`. Refreshing or closing the tab will not erase your active test.

---

## 🚀 Quick Start & Development

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation
```bash
# Clone or navigate to repository root
cd /home/teja_123/reddy

# Install dependencies
npm install
```

### Running Locally
```bash
# Start Vite development server strictly on localhost (127.0.0.1)
npm run dev
```
Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) in your browser.

### Running Automated Test Suite
```bash
# Run calculation derivations and shuffle integrity tests
npm test
```

### Building for Production
```bash
npm run build
```

---

## ⚡ Deploying to Vercel

This repository includes a pre-configured `vercel.json` for seamless 1-click deployment on [Vercel](https://vercel.com):

1. **Push to GitHub**:
   ```bash
   git push origin main
   ```
2. **Import into Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new).
   - Select your repository: `https://github.com/TEJAREDDY-AE/NPTEL`.
   - Framework Preset: **Vite** (auto-detected).
   - Build Command: `npm run build` (auto-detected).
   - Output Directory: `dist` (auto-detected).
   - Click **Deploy**!

---

## 🔒 Security & Privacy Guarantees
- **No Data Leaks:** 100% client-side local-first architecture. No database credentials, auth tokens, or paid APIs required for offline study.
- **XSS Prevention:** Renders all strings through native React JSX escaping. No `dangerouslySetInnerHTML` or `innerHTML`.
- **Compulsory Authentication Gateway:** Candidate verification with official Google Single Sign-On and local session persistence.


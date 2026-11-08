// MulkiMark results. Edit this file by hand and push: the page reads it directly.
//
// Scores are { correct, total } so the page can show both the raw count and
// the percentage. Every model id used in a score must appear in `models`.
// Set `sample: false` once the numbers are real; it hides the "sample data" note.

window.MULKIMARK = {
  sample: true,
  updated: "2026-11-08",

  // Column order in the table, and colour order everywhere. Keep to 4 or fewer
  // models for colour-blind-safe charts; add more only with care.
  models: [
    { id: "opus", name: "Opus 5.5", maker: "Anthropic" },
    { id: "sonnet", name: "Sonnet 5.5", maker: "Anthropic" },
    { id: "haiku", name: "Haiku 5.5", maker: "Anthropic" },
    { id: "rival", name: "Rival Model", maker: "Placeholder" },
  ],

  // One row per quiz in the results table.
  quizzes: [
    {
      name: "Mahaquizzer 2026",
      date: "2026-10",
      note: "Written prelims, 150 questions",
      scores: {
        opus: { correct: 112, total: 150 },
        sonnet: { correct: 101, total: 150 },
        haiku: { correct: 74, total: 150 },
        rival: { correct: 98, total: 150 },
      },
    },
    {
      name: "Mahaquizzer 2025",
      date: "2025-10",
      note: "Written prelims, 150 questions",
      scores: {
        opus: { correct: 118, total: 150 },
        sonnet: { correct: 106, total: 150 },
        haiku: { correct: 79, total: 150 },
        rival: { correct: 103, total: 150 },
      },
    },
    {
      name: "KQA Sunday Quiz, Sep 2026",
      date: "2026-09",
      note: "General, 40 questions",
      scores: {
        opus: { correct: 27, total: 40 },
        sonnet: { correct: 26, total: 40 },
        haiku: { correct: 17, total: 40 },
        rival: { correct: 28, total: 40 },
      },
    },
  ],

  // One drill-down section per category, across all quizzes combined.
  // `quip` is optional commentary shown under the chart.
  categories: [
    {
      name: "Science",
      scores: {
        opus: { correct: 41, total: 48 },
        sonnet: { correct: 37, total: 48 },
        haiku: { correct: 29, total: 48 },
        rival: { correct: 36, total: 48 },
      },
      quip: "Knows the half-life of everything, including your patience.",
    },
    {
      name: "Sport",
      scores: {
        opus: { correct: 30, total: 44 },
        sonnet: { correct: 28, total: 44 },
        haiku: { correct: 19, total: 44 },
        rival: { correct: 31, total: 44 },
      },
      quip: "Can name every Ranji Trophy winner. Still thinks LBW is negotiable.",
    },
    {
      name: "Literature",
      scores: {
        opus: { correct: 39, total: 46 },
        sonnet: { correct: 33, total: 46 },
        haiku: { correct: 22, total: 46 },
        rival: { correct: 31, total: 46 },
      },
    },
    {
      name: "Entertainment",
      scores: {
        opus: { correct: 34, total: 50 },
        sonnet: { correct: 34, total: 50 },
        haiku: { correct: 25, total: 50 },
        rival: { correct: 35, total: 50 },
      },
      quip: "Everyone has seen the films. Nobody remembers the music director.",
    },
    {
      name: "India & Karnataka",
      scores: {
        opus: { correct: 36, total: 52 },
        sonnet: { correct: 31, total: 52 },
        haiku: { correct: 20, total: 52 },
        rival: { correct: 27, total: 52 },
      },
      quip: "The real test: knowing which Bengaluru road was renamed last week.",
    },
    {
      name: "Business & Brands",
      scores: {
        opus: { correct: 32, total: 40 },
        sonnet: { correct: 30, total: 40 },
        haiku: { correct: 18, total: 40 },
        rival: { correct: 29, total: 40 },
      },
    },
    {
      name: "History & Politics",
      scores: {
        opus: { correct: 25, total: 40 },
        sonnet: { correct: 23, total: 40 },
        haiku: { correct: 17, total: 40 },
        rival: { correct: 22, total: 40 },
      },
    },
  ],
};

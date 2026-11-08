// MulkiMark results. Edit this file by hand and push: the page reads it directly.
//
// Scores are { correct, total } so the page can show both the raw count and
// the percentage. Every model id used in a score must appear in `models`.
// A model with no score for a quiz or category shows as a dash.
// Set `sample: false` once the numbers are real; it hides the "sample data" note.

window.MULKIMARK = {
  sample: false,
  updated: "2026-11-08",

  // Column order in the table, and colour order everywhere. Keep to 4 or fewer
  // models for colour-blind-safe charts; add more only with care.
  models: [
    { id: "opus", name: "Opus 5.5", maker: "Anthropic" },
    { id: "sonnet", name: "Sonnet 5.5", maker: "Anthropic" },
    { id: "haiku", name: "Haiku 5.5", maker: "Anthropic" },
  ],

  // One row per quiz in the results table, newest first.
  quizzes: [
    {
      name: "MindSweep 2026, Part II",
      date: "2026",
      note: "Music, Sciences, Social Sciences, Sports & Games · 80 questions",
      scores: {
        opus: { correct: 78, total: 80 },
      },
    },
    {
      name: "MindSweep 2026, Part I",
      date: "2026",
      note: "Arts, Food, Movies & TV, Literature · 80 questions",
      scores: {
        opus: { correct: 77, total: 80 },
      },
    },
    {
      name: "AsiaSweep 2025",
      date: "2025",
      note: "50 questions, 75 points (25 singles, 25 two-parters)",
      scores: {
        opus: { correct: 71, total: 75 },
      },
    },
    {
      name: "Mahaquizzer 2025",
      date: "2025",
      note: "Written prelims, 150 questions",
      scores: {
        opus: { correct: 145, total: 150 },
      },
    },
    {
      name: "MindSweep 2025, Part II",
      date: "2025",
      note: "Music, Sciences, Social Sciences, Sports & Games · 100 questions",
      scores: {
        opus: { correct: 95, total: 100 },
      },
    },
    {
      name: "MindSweep 2025, Part I",
      date: "2025",
      note: "Arts, Food, Movies & TV, Literature · 100 questions",
      scores: {
        opus: { correct: 98, total: 100 },
      },
    },
    {
      name: "AsiaSweep 2024",
      date: "2024",
      note: "64 questions, 88 points (40 singles, 24 two-parters)",
      scores: {
        opus: { correct: 80, total: 88 },
      },
    },
    {
      name: "Mahaquizzer 2024",
      date: "2024",
      note: "Written prelims, 150 questions",
      scores: {
        opus: { correct: 147, total: 150 },
      },
    },
  ],

  // One drill-down section per category, across all quizzes combined.
  // Categories are assigned by hand when marking; quizzes with their own topics
  // map onto them (e.g. MindSweep's Social Sciences counts as History & Society).
  // `quip` is optional commentary shown under the chart.
  categories: [
    {
      name: "Science",
      scores: {
        opus: { correct: 87, total: 89 },
      },
      quip: "Knows the half-life of everything, including your patience.",
    },
    {
      name: "Sport",
      scores: {
        opus: { correct: 67, total: 73 },
      },
      quip: "Can name every Ranji Trophy winner. Still thinks LBW is negotiable.",
    },
    {
      name: "Literature",
      scores: {
        opus: { correct: 85, total: 87 },
      },
    },
    {
      name: "Entertainment",
      scores: {
        opus: { correct: 89, total: 95 },
      },
      quip: "Everyone has seen the films. Nobody remembers the music director.",
    },
    {
      name: "Music",
      scores: {
        opus: { correct: 69, total: 70 },
      },
      quip: "Perfect pitch, no ears.",
    },
    {
      name: "India & Karnataka",
      scores: {
        opus: { correct: 34, total: 34 },
      },
      quip: "The real test: knowing which Bengaluru road was renamed last week.",
    },
    {
      name: "History & Society",
      scores: {
        opus: { correct: 137, total: 142 },
      },
    },
    {
      name: "Arts",
      scores: {
        opus: { correct: 65, total: 71 },
      },
      quip: "Spots a Rococo brushstroke at fifty paces. Has never been inside a gallery.",
    },
    {
      name: "Food & Drink",
      scores: {
        opus: { correct: 71, total: 72 },
      },
      quip: "Has never eaten a thing, and still knows where every dish got its name.",
    },
    {
      name: "Business & Brands",
      scores: {
        opus: { correct: 27, total: 28 },
      },
    },
    {
      name: "Culture & Lifestyle",
      scores: {
        opus: { correct: 60, total: 62 },
      },
      quip: "Words, festivals and oddities: the questions you can't revise for.",
    },
  ],
};

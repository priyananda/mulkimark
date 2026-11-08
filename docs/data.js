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

  // One row per quiz in the results table.
  quizzes: [
    {
      name: "MindSweep 2026, Part I",
      date: "2026",
      note: "Arts, Food, Movies & TV, Literature · 80 questions",
      scores: {
        opus: { correct: 77, total: 80 },
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
  ],

  // One drill-down section per category, across all quizzes combined.
  // Categories are assigned by hand when marking; the quiz itself has none.
  // `quip` is optional commentary shown under the chart.
  categories: [
    {
      name: "Science",
      scores: {
        opus: { correct: 20, total: 21 },
      },
      quip: "Knows the half-life of everything, including your patience.",
    },
    {
      name: "Sport",
      scores: {
        opus: { correct: 14, total: 14 },
      },
      quip: "Can name every Ranji Trophy winner. Still thinks LBW is negotiable.",
    },
    {
      name: "Literature",
      scores: {
        opus: { correct: 31, total: 33 },
      },
    },
    {
      name: "Entertainment",
      scores: {
        opus: { correct: 38, total: 40 },
      },
      quip: "Everyone has seen the films. Nobody remembers the music director.",
    },
    {
      name: "India & Karnataka",
      scores: {
        opus: { correct: 17, total: 17 },
      },
      quip: "The real test: knowing which Bengaluru road was renamed last week.",
    },
    {
      name: "Business & Brands",
      scores: {
        opus: { correct: 10, total: 11 },
      },
    },
    {
      name: "History & Politics",
      scores: {
        opus: { correct: 26, total: 26 },
      },
    },
    {
      name: "Culture & Lifestyle",
      scores: {
        opus: { correct: 19, total: 19 },
      },
      quip: "Words, festivals and oddities: the questions you can't revise for.",
    },
    {
      name: "Arts",
      scores: {
        opus: { correct: 23, total: 25 },
      },
      quip: "Spots a Rococo brushstroke at fifty paces. Has never been inside a gallery.",
    },
    {
      name: "Food & Drink",
      scores: {
        opus: { correct: 24, total: 24 },
      },
      quip: "Has never eaten a thing, and still knows where every dish got its name.",
    },
  ],
};

# MulkiMark

A semi-serious benchmark of how AI models do at Indian trivia quizzes set by the Karnataka Quiz Association. This repo holds only the static results page; the quizzes are run and marked by hand, and the questions are never published.

## Updating the results

All numbers live in [`docs/data.js`](docs/data.js):

- `models`: the table columns, in order. Colours follow this order; four or fewer keeps the charts colour-blind safe.
- `quizzes`: one table row per quiz, with `{ correct, total }` for each model.
- `categories`: one drill-down card per subject. The headline ("Opus 5.5 is better at Science", or "Dead heat in ..." when the top two are within 2 points) is worked out from the numbers. `quip` is optional commentary.
- `sample`: set to `false` once the numbers are real, to hide the placeholder note.

Preview locally by opening `docs/index.html` in a browser, or run `python3 -m http.server -d docs`.

## Publishing

In the repository settings, under Pages, choose "Deploy from a branch", branch `main`, folder `/docs`. The page will be at `https://priyananda.github.io/mulkimark/`.

/*
 * MATHEMATICS SUBJECT DATA — Class 10 | UBSE | Session 2026-27
 *
 * Rationalised syllabus: 14 chapters across 7 units (80 marks).
 * Syllabus metadata lives in ./manifest.js.
 * Chapter content files: data/mathematics/chapters/chapter-01.js ...
 */

import { MATHEMATICS_MANIFEST } from "./manifest.js";
import { mathematicsChapter01 } from "./chapters/chapter-01.js";

export { MATHEMATICS_MANIFEST };
export const manifest = MATHEMATICS_MANIFEST;

/* Chapters that currently have full study content. */
export const chapters = [
  mathematicsChapter01
];

/* Full syllabus skeleton from the manifest, for progress/completion views. */
export const syllabusChapters = MATHEMATICS_MANIFEST.chapters;

/* Chapters removed by NCERT rationalisation — never present as syllabus. */
export const deletedChapters = MATHEMATICS_MANIFEST.deletedChapters;

export default {
  manifest: MATHEMATICS_MANIFEST,
  chapters,
  syllabusChapters,
  deletedChapters
};


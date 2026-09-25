/*
 * SCIENCE SUBJECT DATA — Class 10 | UBSE | Session 2026-27
 *
 * Phase 3 batches 1-2 = all 13 chapters content-ready (Units I-V).
 * Syllabus metadata lives in ./manifest.js (13 chapters, 3 deleted).
 * Chapter content files: data/science/chapters/chapter-01.js ... chapter-13.js.
 */

import { SCIENCE_MANIFEST } from "./manifest.js";
import { scienceChapter01 } from "./chapters/chapter-01.js";
import { scienceChapter02 } from "./chapters/chapter-02.js";
import { scienceChapter03 } from "./chapters/chapter-03.js";
import { scienceChapter04 } from "./chapters/chapter-04.js";
import { scienceChapter05 } from "./chapters/chapter-05.js";
import { scienceChapter06 } from "./chapters/chapter-06.js";
import { scienceChapter07 } from "./chapters/chapter-07.js";
import { scienceChapter08 } from "./chapters/chapter-08.js";
import { scienceChapter09 } from "./chapters/chapter-09.js";
import { scienceChapter10 } from "./chapters/chapter-10.js";
import { scienceChapter11 } from "./chapters/chapter-11.js";
import { scienceChapter12 } from "./chapters/chapter-12.js";
import { scienceChapter13 } from "./chapters/chapter-13.js";
export { SCIENCE_MANIFEST };

export const manifest = SCIENCE_MANIFEST;

/* Chapters that currently have full study content. */
export const chapters = [
  scienceChapter01,
  scienceChapter02,
  scienceChapter03,
  scienceChapter04,
  scienceChapter05,
  scienceChapter06,
  scienceChapter07,
  scienceChapter08,
  scienceChapter09,
  scienceChapter10,
  scienceChapter11,
  scienceChapter12,
  scienceChapter13
];

/* Full syllabus skeleton from the manifest, for progress/completion views. */
export const syllabusChapters = SCIENCE_MANIFEST.chapters;

/* Chapters removed by NCERT rationalisation — never present as syllabus. */
export const deletedChapters = SCIENCE_MANIFEST.deletedChapters;

export default {
  manifest: SCIENCE_MANIFEST,
  chapters,
  syllabusChapters,
  deletedChapters
};

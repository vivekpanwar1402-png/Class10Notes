# HISTORY BATCH 1 — CONTENT TASK

Fill Chapter 01 completely using the project's existing material schema.

FIRST:
- Inspect the existing repository.
- Read the material schemas and loader.
- Read AUTHORING-RULES.md.
- Inspect the current UI data requirements.
- Do NOT modify unrelated UI architecture.

RESEARCH:
Use the official UBSE Class 10 2026-27 Social Science syllabus as the
primary syllabus source.
Use official UBSE question-bank/sample-paper/paper-design material where
available.
Use NCERT/prescribed material for factual cross-checking where applicable.

IMPORTANT:
Do not guess the Chapter 01 title.
Determine it from the verified syllabus/textbook context before writing
student-facing content.

CREATE/FILL:
data/material/subjects/history/chapters/chapter-01/index.js

Populate:
1. chapter metadata
2. syllabus mapping
3. all relevant topics
4. concise Hindi notes
5. concept explanations
6. important facts
7. definitions/key terms
8. meaningful dates
9. important points
10. MCQs
11. very-short questions
12. short-answer questions
13. long-answer questions
14. competency/application questions
15. case/source-based questions where appropriate
16. assertion-reason questions where appropriate
17. map/date/fact questions where appropriate
18. verified PYQs separately
19. board-aligned practice questions separately
20. flashcards
21. quick-revision sheet
22. common mistakes
23. source metadata

QUESTION QUALITY:
- Cover the complete chapter, not just the introduction.
- Cover both factual recall and conceptual understanding.
- Include different difficulty levels.
- Avoid repetitive wording.
- Include explanations for objective questions.
- Do not invent PYQ labels.
- Do not claim a question appeared in a board paper unless verified.

INTEGRATION:
Make sure the generated chapter can be discovered by the existing
material loader/search index without changing unrelated modules.

TEST:
Create/update a focused History Batch 1 validation test that verifies:
- chapter exists
- chapter metadata exists
- topics are non-empty
- notes are non-empty
- dates are valid
- question collections exist
- MCQs have options and answers
- flashcards have front/back
- sources are present
- no duplicate question IDs
- no empty student-facing question text
- no PYQ entry lacks source/year metadata

Do not weaken existing tests.

Do not modify CSS/UI files unless integration absolutely requires it.

Finally:
- run the focused test
- run the existing test suite
- fix failures
- git add -A
- git commit
- git push origin main

End terminal output with:

========================================
CLASS10NOTES HISTORY BATCH 1 COMPLETE
========================================
Syllabus mapping : PASS
Chapter 01       : PASS
Notes            : PASS
Dates            : PASS
MCQs             : PASS
Questions        : PASS
Competency       : PASS
PYQ separation   : PASS
Flashcards       : PASS
Revision         : PASS
Sources          : PASS
Validation       : PASS
Full tests       : PASS
Git push         : PASS
STATUS: HISTORY BATCH 1 COMPLETE
========================================

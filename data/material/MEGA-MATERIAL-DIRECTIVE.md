You are the LEAD CONTENT ENGINE for Class10Notes.

Your job is to completely populate the educational material layer
of the existing Class10Notes repository.

TARGET:
Class 10 Uttarakhand Board (UBSE)
Academic session: 2026-27
Medium: Hindi

IMPORTANT:
Do NOT merely create templates.
Do NOT create placeholder material.
Do NOT stop after creating schemas.
Actually research, write, validate and save the material.

===============================================================
                    SOURCE HIERARCHY
===============================================================

PRIMARY SOURCES:

1. Official UBSE 2026-27 syllabus.
2. Official UBSE High School Question Bank.
3. Official UBSE 2026 sample question papers.
4. Official UBSE available answer/model material.
5. Current NCERT Class 10 prescribed textbooks.

SECONDARY SOURCES:

Use reputable educational references only for:
- cross-checking
- clarification
- additional practice-question ideas

Do not blindly copy any website.

Do not reproduce long copyrighted passages.

All student-facing explanations must be rewritten in original,
clear Hindi.

===============================================================
                    SUBJECTS TO BUILD
===============================================================

A) SOCIAL SCIENCE

Build ALL relevant Class 10 UBSE material for:

1. HISTORY
2. GEOGRAPHY
3. CIVICS / DEMOCRATIC POLITICS
4. ECONOMICS

B) HINDI

Build the complete Class 10 UBSE Hindi syllabus structure and
study material appropriate for the prescribed 2026-27 syllabus.

===============================================================
                    RESEARCH PHASE
===============================================================

Before writing:

1. Inspect the complete existing repository.
2. Read all existing material schemas.
3. Read material loader/search/progress code.
4. Determine the exact current UBSE 2026-27 syllabus.
5. Determine exact chapter/unit structure.
6. Cross-map syllabus with NCERT/prescribed textbooks.
7. Inspect official UBSE question bank.
8. Inspect official UBSE 2026 sample papers.
9. Identify actual question patterns and marks.
10. Only then generate content.

NEVER GUESS:

- chapter names
- syllabus inclusion
- marks
- PYQ status
- board question year
- official question pattern

===============================================================
                    CONTENT STANDARD
===============================================================

The website should feel like professionally prepared
TOPPER-STYLE NOTES.

Every chapter/unit should have:

• Chapter overview
• Learning objectives
• Topic breakdown
• Easy explanations
• Important concepts
• Important facts
• Definitions
• Examples
• Cause/effect relationships
• Comparisons
• Important people/places/events where applicable
• Important dates where applicable
• Exam-focused points
• Common mistakes/confusions
• Quick revision
• Final revision summary

Language:

- simple Hindi
- natural school-level vocabulary
- no unnecessary Sanskritised wording
- English terms only where academically useful

===============================================================
                    QUESTION ENGINE
===============================================================

For every SST chapter/unit and every appropriate Hindi section,
create a comprehensive question bank.

Include where applicable:

1. MCQs
2. Very Short Answer
3. Short Answer
4. Long Answer
5. Competency/Application
6. Case/Source Based
7. Assertion-Reason
8. Map/Location Based
9. Chronology/Date Based
10. Interpretation Based
11. Board-style practice

Do NOT create artificial questions just to increase quantity.

Prioritize complete chapter coverage.

Every question must contain:

id
subjectId
chapterId
topicId
type
marks
question
options
answer
explanation
difficulty
competency
tags

===============================================================
                         PYQs
===============================================================

Only mark:

isPYQ: true

when the actual board question and year/source are verified.

Store:

board
year
source
paper/set if known

Everything else must be:

isPYQ: false

and:

type: "board-aligned-practice"

NEVER fabricate PYQs.

===============================================================
                       FLASHCARDS
===============================================================

Create useful flashcards for:

• definitions
• dates
• people
• events
• causes
• effects
• concepts
• comparisons
• important facts

Each:

id
subjectId
chapterId
topicId
front
back
difficulty
tags
important

===============================================================
                       SST SPECIALS
===============================================================

HISTORY:

Include:
- chronology
- important dates
- people
- events
- causes
- consequences
- important terms
- source/case questions

GEOGRAPHY:

Include:
- definitions
- concepts
- resources
- locations
- map-oriented facts
- comparisons
- application questions
- case-based questions

CIVICS:

Include:
- definitions
- institutions
- concepts
- examples
- constitutional/democratic concepts
- case/application questions

ECONOMICS:

Include:
- definitions
- concepts
- examples
- comparisons
- data/application questions
- case-based questions

===============================================================
                       HINDI SPECIALS
===============================================================

First determine the exact UBSE 2026-27 Hindi syllabus.

Then structure according to the actual prescribed sections.

Where applicable include:

• गद्य
• पद्य
• लेखक/कवि परिचय
• पाठ का सार
• भावार्थ
• प्रमुख विचार
• शब्दार्थ
• महत्वपूर्ण पंक्तियाँ / अर्थ
• चरित्र/विचार विश्लेषण
• व्याख्या
• पाठ आधारित प्रश्न
• लघु उत्तरीय
• दीर्घ उत्तरीय
• competency/application questions
• grammar
• writing section
• unseen passage practice
• board-style practice
• revision notes

Do NOT assume the exact textbook/chapter list.
Verify it first from UBSE 2026-27 syllabus.

===============================================================
                    MATERIAL ARCHITECTURE
===============================================================

Keep every subject and chapter independent.

Preferred structure:

data/material/subjects/
    history/
        index.js
        chapters/
        questions/
        flashcards/
        revision/

    geography/
        index.js
        chapters/
        questions/
        flashcards/
        revision/

    civics/
        index.js
        chapters/
        questions/
        flashcards/
        revision/

    economics/
        index.js
        chapters/
        questions/
        flashcards/
        revision/

    hindi/
        index.js
        chapters/
        grammar/
        writing/
        questions/
        flashcards/
        revision/

Do NOT put the entire curriculum into one giant file.

===============================================================
                    WEBSITE INTEGRATION
===============================================================

Connect the material to the EXISTING material loader.

Connect:

• search
• chapter filtering
• quiz engine
• flashcards
• progress
• revision

Do not redesign the UI.

Do not modify the Canva-created visual system.

Do not change the existing accent system.

Do not break existing navigation.

Only make integration changes required for real material.

===============================================================
                    CONTENT VALIDATION
===============================================================

Create/extend validation tests.

For EVERY subject:

✓ subject exists
✓ chapters exist
✓ topics exist
✓ notes exist
✓ questions exist
✓ MCQs have valid options
✓ MCQs have answers
✓ explanations exist
✓ flashcards have front/back
✓ sources exist
✓ no duplicate IDs
✓ no empty student-facing text
✓ no placeholder strings
✓ no lorem ipsum

For PYQs:

✓ verified year
✓ verified source
✓ correct PYQ flag

For syllabus:

✓ every included chapter is mapped
✓ no unsupported chapter is presented as UBSE syllabus

For Hindi:

✓ exact syllabus verified
✓ sections mapped
✓ literature/grammar/writing structure validated

===============================================================
                    QUALITY GATE
===============================================================

Before declaring success:

Run:

1. material validation
2. existing test suite
3. duplicate detection
4. empty-content detection
5. schema validation
6. search-index validation
7. quiz-data validation
8. flashcard validation
9. progress-ID validation

If anything fails:
FIX IT.

Do not simply print PASS.

===============================================================
                    GIT RULE
===============================================================

Do not touch unrelated files.

After all work succeeds:

git add -A

git commit -m "feat: add complete UBSE SST and Hindi study material"

git push origin main

===============================================================
                    FINAL REPORT
===============================================================

Print actual measured counts.

Example:

============================================================
CLASS10NOTES — MEGA MATERIAL BUILD COMPLETE
============================================================

HISTORY
Chapters      : <actual>
Topics        : <actual>
Notes         : <actual>
MCQs          : <actual>
Questions     : <actual>
Flashcards    : <actual>

GEOGRAPHY
Chapters      : <actual>
Topics        : <actual>
Questions     : <actual>

CIVICS
Chapters      : <actual>
Topics        : <actual>
Questions     : <actual>

ECONOMICS
Chapters      : <actual>
Topics        : <actual>
Questions     : <actual>

HINDI
Sections      : <actual>
Chapters      : <actual>
Questions     : <actual>
Grammar       : <actual>
Writing       : <actual>
Flashcards    : <actual>

PYQs VERIFIED  : <actual>
PRACTICE Qs    : <actual>

Duplicate IDs  : 0
Placeholders   : 0
Validation     : PASS
Existing Tests  : PASS
Integration    : PASS
Git Push       : PASS

STATUS:
SST + HINDI MATERIAL FOUNDATION COMPLETE

Website:
https://vivekpanwar1402-png.github.io/Class10Notes/
============================================================

IMPORTANT:
The final report MUST contain measured values from the generated
files. Never invent counts.

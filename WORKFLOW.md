# AI-Assisted Workflow Drill

## Overview

This drill compared two implementations of the same settings form using a vague prompt and a precise prompt. Both rounds used the same project and started from the same baseline, with the results kept on separate branches: `workflow-vague` and `workflow-precise`.

## Round 1: Vague Prompt

Round 1 was completed using Cursor with a deliberately vague prompt. The generated implementation included a settings form with validation, theme selection, language selection, timezone, notification and privacy settings, persistence, reset behavior, and responsive styling.

Manual testing showed that most functionality worked correctly. Required fields and invalid email formats were validated, settings persisted after saving and refreshing, theme switching worked, reset functionality worked, and the form was usable with keyboard navigation.

The main correctness issue was language handling. The language selector successfully saved and persisted the selected language, but changing the language to Spanish did not translate the interface; the user-facing content remained in English. This was an AI mistake caused by the vague prompt not clearly defining the expected localization behavior.

## Round 2: Precise Prompt

For Round 2, the `workflow-precise` branch used a detailed prompt specifying expected behavior, accessibility requirements, persistence, responsive behavior, edge cases, and testing. The required workflow was followed: **Explore → Plan → Code → Test**.

The AI first explored the existing HTML, CSS, JavaScript, README, and project structure, then produced an implementation plan before coding. During testing, an issue was found where the JavaScript field bindings did not match the HTML naming. The AI corrected the issue and reran the tests successfully. The final automated test result was **3 tests passed and 0 failed**. Manual testing also confirmed correct validation, persistence, theme switching, language switching, reset behavior, responsive layout, keyboard navigation, and focus states.

The precise prompt specifically required language changes to update user-facing text and persist after refresh. Unlike Round 1, all tested language options correctly updated the interface and persisted.

## Accessibility, Edge Cases, and Review Effort

The vague implementation included some usable accessibility behavior, but accessibility requirements were not explicitly specified. The precise prompt made semantic structure, accessible labels, keyboard accessibility, visible focus states, and validation feedback that does not rely only on color explicit. It also addressed edge cases such as invalid email submission, empty required fields, reset behavior, persistence after refresh, and language switching.

The precise implementation required more initial review because the generated changes were broader and introduced a test harness. However, the explicit requirements made correctness easier to evaluate and reduced ambiguity during manual review. The vague implementation required less initial specification but more effort to identify missing behavior, particularly the localization issue.

## Branch Diff and Project Rules

A Git diff between `workflow-vague` and `workflow-precise` showed changes across 7 files, with **1,447 insertions and 145 deletions**. The precise workflow added `js/settings-core.js`, `tests/settings.test.js`, `package.json`, and `package-lock.json`, while also updating the existing HTML, CSS, and JavaScript files. These changes reflect the more explicit requirements in the precise prompt, particularly around localization, accessibility, persistence, and automated testing.

The project rules file, `.cursor/rules.md`, was updated with concrete, project-specific guidance covering the project structure, settings persistence, language switching, validation, accessibility, responsive behavior, testing, and avoiding unnecessary dependencies. This provides future AI-assisted changes with clear constraints based on the actual project rather than only generic frontend conventions.

## Tool Switch

Round 1 used Cursor. While starting Round 2, the Cursor free Agent usage limit was reached, and Gemini CLI was unavailable due to API/authentication issues. Round 2 was therefore completed using VS Code with GitHub Copilot Free. The FlyRank team confirmed that this switch was acceptable because the comparison is tool-independent, provided the same project and `workflow-precise` branch were used, the precise prompt and Explore → Plan → Code → Test workflow were followed, and the tool switch was documented transparently.

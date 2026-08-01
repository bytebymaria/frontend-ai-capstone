# Frontend AI Capstone Rules

## Project Stack

* HTML5
* CSS3
* JavaScript (ES6+)
* Git & GitHub
* AI-assisted development using Cursor and GitHub Copilot Free
* Node.js for automated testing

## Project Structure

* Keep page markup in `index.html`.
* Keep styling in `css/styles.css`.
* Keep browser-facing form behavior in `js/settings.js`.
* Keep reusable settings logic in `js/settings-core.js`.
* Keep automated tests in `tests/`.
* Avoid introducing frameworks or unnecessary dependencies.

## Settings Form Requirements

* Preserve the existing settings form structure when extending functionality.
* Use `localStorage` for saved user settings and restore saved values after page refresh.
* The Save Changes action must persist all editable settings.
* Reset to Defaults must restore every setting and the corresponding visible UI state.
* Invalid required fields and invalid email formats must prevent saving and show clear validation feedback.
* Language selection must update all relevant user-facing text, not only the selected option, and must persist after refresh.
* Theme selection must visibly apply to the interface and persist after refresh.
* Timezone, notification, and privacy settings must persist after saving and refreshing.

## Accessibility and Responsive Design

* Use semantic HTML and explicit accessible labels for form controls.
* Ensure all interactive controls are keyboard accessible.
* Provide visible focus states.
* Validation feedback must be understandable and must not rely only on color.
* Keep the settings form usable on smaller screens.

## Coding Standards

* Prefer Flexbox and CSS Grid for layouts.
* Use descriptive variable and function names.
* Keep code simple, maintainable, and consistent with the existing project.
* Avoid unnecessary dependencies.
* Do not break existing functionality when adding features.

## Testing and Review

* Test required-field validation and invalid email submission.
* Test saving and restoring settings after refresh.
* Test every available language option and verify that visible text changes correctly.
* Test theme switching and persistence.
* Test Reset to Defaults for all settings.
* Review keyboard navigation, focus states, responsive behavior, and edge cases before considering the feature complete.
* Follow Conventional Commits when suggesting commit messages.

import {
  STORAGE_KEY,
  DEFAULT_SETTINGS,
  TRANSLATIONS,
  applyTheme,
  getLanguageText,
  loadSettings,
  saveSettings,
  resetSettings,
  validateSettingsData,
} from "./settings-core.js";

const form = document.getElementById("settings-form");
const statusMessage = document.getElementById("status-message");
const resetButton = document.getElementById("reset-button");
const displayNameField = document.getElementById("display-name");
const emailField = document.getElementById("email");
const bioField = document.getElementById("bio");
const bioCounter = document.getElementById("bio-counter");
const themeField = document.getElementById("theme");
const languageField = document.getElementById("language");
const timezoneField = document.getElementById("timezone");
const emailNotificationsField = document.getElementById("email-notifications");
const pushNotificationsField = document.getElementById("push-notifications");
const marketingEmailsField = document.getElementById("marketing-emails");
const profileVisibilityField = document.getElementById("profile-visibility");
const shareUsageDataField = document.getElementById("share-usage-data");

const toggleFields = form.querySelectorAll('input[type="checkbox"][role="switch"]');
const i18nKeys = Array.from(document.querySelectorAll("[data-i18n-key]"));
const i18nPlaceholders = Array.from(document.querySelectorAll("[data-i18n-placeholder-key]"));

function updateBioCounter() {
  const length = bioField.value.length;
  bioCounter.textContent = getLanguageText(languageField.value, "bioCounter", {
    count: length,
  });
}

function showStatus(message, type = "success") {
  statusMessage.textContent = message;
  statusMessage.className = `status-message status-message--${type}`;
  statusMessage.hidden = false;

  window.clearTimeout(showStatus.timeoutId);
  showStatus.timeoutId = window.setTimeout(() => {
    statusMessage.hidden = true;
  }, 4000);
}

function setFieldError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorElement = document.getElementById(`${fieldId}-error`);

  field.setAttribute("aria-invalid", "true");
  field.setAttribute("aria-describedby", `${fieldId}-error`);
  errorElement.textContent = message;
  errorElement.hidden = false;
}

function clearFieldErrors() {
  form.querySelectorAll("[aria-invalid='true']").forEach((field) => {
    field.removeAttribute("aria-invalid");
  });

  form.querySelectorAll(".form-field__error").forEach((error) => {
    error.textContent = "";
    error.hidden = true;
  });
}

function applyTranslations(language) {
  const locale = TRANSLATIONS[language] ? language : "en";
  const translationSet = TRANSLATIONS[locale];

  i18nKeys.forEach((element) => {
    const key = element.getAttribute("data-i18n-key");
    const text = translationSet[key];
    if (text) {
      element.textContent = text;
    }
  });

  i18nPlaceholders.forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder-key");
    const text = translationSet[key];
    if (text) {
      element.setAttribute("placeholder", text);
    }
  });

  document.documentElement.lang = locale;
  document.title = translationSet.documentTitle;
}

function populateForm(settings) {
  displayNameField.value = settings.displayName;
  emailField.value = settings.email;
  bioField.value = settings.bio;
  themeField.value = settings.theme;
  languageField.value = settings.language;
  timezoneField.value = settings.timezone;
  emailNotificationsField.checked = settings.emailNotifications;
  pushNotificationsField.checked = settings.pushNotifications;
  marketingEmailsField.checked = settings.marketingEmails;
  profileVisibilityField.value = settings.profileVisibility;
  shareUsageDataField.checked = settings.shareUsageData;

  toggleFields.forEach((input) => {
    input.setAttribute("aria-checked", String(input.checked));
  });

  applyTranslations(settings.language);
  updateBioCounter();
  applyTheme(settings.theme);
}

function getFormData() {
  return {
    displayName: displayNameField.value.trim(),
    email: emailField.value.trim(),
    bio: bioField.value.trim(),
    theme: themeField.value,
    language: languageField.value,
    timezone: timezoneField.value,
    emailNotifications: emailNotificationsField.checked,
    pushNotifications: pushNotificationsField.checked,
    marketingEmails: marketingEmailsField.checked,
    profileVisibility: profileVisibilityField.value,
    shareUsageData: shareUsageDataField.checked,
  };
}

function validateForm(data) {
  clearFieldErrors();
  const validation = validateSettingsData(data);

  if (!validation.isValid) {
    if (validation.errors.displayName) {
      setFieldError("display-name", validation.errors.displayName);
    }

    if (validation.errors.email) {
      setFieldError("email", validation.errors.email);
    }
  }

  return validation.isValid;
}

function handleToggleChange(event) {
  const input = event.target;
  input.setAttribute("aria-checked", String(input.checked));
}

function handleThemeChange() {
  applyTheme(themeField.value);
}

function handleLanguageChange() {
  applyTranslations(languageField.value);
  updateBioCounter();
}

function handleSubmit(event) {
  event.preventDefault();

  const data = getFormData();

  if (!validateForm(data)) {
    showStatus(getLanguageText(data.language, "messagesValidation"), "error");
    return;
  }

  saveSettings(data, window.localStorage);
  populateForm(data);
  showStatus(getLanguageText(data.language, "messagesSaved"));
}

function handleReset() {
  const confirmed = window.confirm(
    "Reset all settings to their defaults? This cannot be undone."
  );

  if (!confirmed) {
    return;
  }

  window.localStorage.removeItem(STORAGE_KEY);
  const defaults = resetSettings(window.localStorage);
  populateForm(defaults);
  clearFieldErrors();
  showStatus(getLanguageText(defaults.language, "messagesReset"));
}

bioField.addEventListener("input", updateBioCounter);
themeField.addEventListener("change", handleThemeChange);
languageField.addEventListener("change", handleLanguageChange);
toggleFields.forEach((input) => {
  input.addEventListener("change", handleToggleChange);
});
form.addEventListener("submit", handleSubmit);
resetButton.addEventListener("click", handleReset);

populateForm(loadSettings(window.localStorage));

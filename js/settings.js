const STORAGE_KEY = "capstone-settings";

const DEFAULT_SETTINGS = {
  displayName: "",
  email: "",
  bio: "",
  theme: "system",
  language: "en",
  timezone: "UTC",
  emailNotifications: true,
  pushNotifications: false,
  marketingEmails: false,
  profileVisibility: "team",
  shareUsageData: true,
};

const form = document.getElementById("settings-form");
const statusMessage = document.getElementById("status-message");
const resetButton = document.getElementById("reset-button");
const bioField = document.getElementById("bio");
const bioCounter = document.getElementById("bio-counter");
const themeField = document.getElementById("theme");

const toggleFields = form.querySelectorAll('input[type="checkbox"][role="switch"]');

function loadSettings() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return { ...DEFAULT_SETTINGS };
    }

    return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}

function saveSettings(settings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

function applyTheme(theme) {
  if (theme === "system") {
    document.documentElement.removeAttribute("data-theme");
    return;
  }

  document.documentElement.setAttribute("data-theme", theme);
}

function populateForm(settings) {
  form.displayName.value = settings.displayName;
  form.email.value = settings.email;
  form.bio.value = settings.bio;
  form.theme.value = settings.theme;
  form.language.value = settings.language;
  form.timezone.value = settings.timezone;
  form.emailNotifications.checked = settings.emailNotifications;
  form.pushNotifications.checked = settings.pushNotifications;
  form.marketingEmails.checked = settings.marketingEmails;
  form.profileVisibility.value = settings.profileVisibility;
  form.shareUsageData.checked = settings.shareUsageData;

  toggleFields.forEach((input) => {
    input.setAttribute("aria-checked", String(input.checked));
  });

  updateBioCounter();
  applyTheme(settings.theme);
}

function getFormData() {
  return {
    displayName: form.displayName.value.trim(),
    email: form.email.value.trim(),
    bio: form.bio.value.trim(),
    theme: form.theme.value,
    language: form.language.value,
    timezone: form.timezone.value,
    emailNotifications: form.emailNotifications.checked,
    pushNotifications: form.pushNotifications.checked,
    marketingEmails: form.marketingEmails.checked,
    profileVisibility: form.profileVisibility.value,
    shareUsageData: form.shareUsageData.checked,
  };
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

function validateForm(data) {
  clearFieldErrors();
  let isValid = true;

  if (data.displayName.length < 2) {
    setFieldError("display-name", "Display name must be at least 2 characters.");
    isValid = false;
  }

  if (!data.email) {
    setFieldError("email", "Email address is required.");
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    setFieldError("email", "Enter a valid email address.");
    isValid = false;
  }

  return isValid;
}

function updateBioCounter() {
  const length = bioField.value.length;
  bioCounter.textContent = `${length} / 200 characters`;
}

function handleToggleChange(event) {
  const input = event.target;
  input.setAttribute("aria-checked", String(input.checked));
}

function handleThemeChange() {
  applyTheme(form.theme.value);
}

function handleSubmit(event) {
  event.preventDefault();

  const data = getFormData();

  if (!validateForm(data)) {
    showStatus("Please fix the errors below before saving.", "error");
    return;
  }

  saveSettings(data);
  showStatus("Settings saved successfully.");
}

function handleReset() {
  const confirmed = window.confirm(
    "Reset all settings to their defaults? This cannot be undone."
  );

  if (!confirmed) {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  populateForm(DEFAULT_SETTINGS);
  clearFieldErrors();
  showStatus("Settings reset to defaults.");
}

bioField.addEventListener("input", updateBioCounter);
themeField.addEventListener("change", handleThemeChange);
toggleFields.forEach((input) => {
  input.addEventListener("change", handleToggleChange);
});
form.addEventListener("submit", handleSubmit);
resetButton.addEventListener("click", handleReset);

populateForm(loadSettings());

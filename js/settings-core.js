export const STORAGE_KEY = "capstone-settings";

export const DEFAULT_SETTINGS = Object.freeze({
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
});

export const TRANSLATIONS = {
  en: {
    skipLink: "Skip to main content",
    siteBrand: "Frontend AI Capstone",
    navSettings: "Settings",
    pageTitle: "Settings",
    pageDescription:
      "Update your profile, preferences, and notification options. Changes are saved locally in your browser.",
    profileHeading: "Profile",
    profileDescription: "Basic information used across the app.",
    displayNameLabel: "Display name",
    displayNameHint: "2–50 characters.",
    displayNamePlaceholder: "Jane Doe",
    emailLabel: "Email address",
    emailPlaceholder: "jane@example.com",
    bioLabel: "Bio",
    bioPlaceholder: "Tell us a little about yourself.",
    bioCounter: "{count} / 200 characters",
    preferencesHeading: "Preferences",
    preferencesDescription: "Customize how the app looks and behaves.",
    themeLabel: "Theme",
    themeSystem: "System default",
    themeLight: "Light",
    themeDark: "Dark",
    languageLabel: "Language",
    languageEnglish: "English",
    languageSpanish: "Spanish",
    languageFrench: "French",
    languageGerman: "German",
    timezoneLabel: "Timezone",
    notificationsHeading: "Notifications",
    notificationsDescription: "Choose what updates you want to receive.",
    notificationOptionsLegend: "Notification options",
    emailNotificationsLabel: "Email notifications",
    emailNotificationsHint: "Receive summaries and important account updates.",
    pushNotificationsLabel: "Push notifications",
    pushNotificationsHint: "Get real-time alerts in your browser.",
    marketingEmailsLabel: "Marketing emails",
    marketingEmailsHint: "Product news, tips, and feature announcements.",
    privacyHeading: "Privacy",
    privacyDescription: "Control who can see your information.",
    profileVisibilityLabel: "Profile visibility",
    profileVisibilityPublic: "Public",
    profileVisibilityTeam: "Team only",
    profileVisibilityPrivate: "Private",
    shareUsageDataLabel: "Share usage data",
    shareUsageDataHint:
      "Help improve the product by sharing anonymous usage statistics.",
    saveChanges: "Save changes",
    resetButton: "Reset to defaults",
    messagesSaved: "Settings saved successfully.",
    messagesValidation: "Please fix the errors below before saving.",
    messagesReset: "Settings reset to defaults.",
    requiredDisplayName: "Display name must be at least 2 characters.",
    requiredEmail: "Email address is required.",
    invalidEmail: "Enter a valid email address.",
    documentTitle: "Settings | Frontend AI Capstone",
  },
  es: {
    skipLink: "Saltar al contenido principal",
    siteBrand: "Frontend AI Capstone",
    navSettings: "Configuración",
    pageTitle: "Configuración",
    pageDescription:
      "Actualiza tu perfil, preferencias y opciones de notificación. Los cambios se guardan localmente en tu navegador.",
    profileHeading: "Perfil",
    profileDescription: "Información básica utilizada en la aplicación.",
    displayNameLabel: "Nombre para mostrar",
    displayNameHint: "2–50 caracteres.",
    displayNamePlaceholder: "Juana Pérez",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "juana@ejemplo.com",
    bioLabel: "Biografía",
    bioPlaceholder: "Cuéntanos un poco sobre ti.",
    bioCounter: "{count} / 200 caracteres",
    preferencesHeading: "Preferencias",
    preferencesDescription: "Personaliza cómo se ve y se comporta la aplicación.",
    themeLabel: "Tema",
    themeSystem: "Predeterminado del sistema",
    themeLight: "Claro",
    themeDark: "Oscuro",
    languageLabel: "Idioma",
    languageEnglish: "Inglés",
    languageSpanish: "Español",
    languageFrench: "Francés",
    languageGerman: "Alemán",
    timezoneLabel: "Zona horaria",
    notificationsHeading: "Notificaciones",
    notificationsDescription: "Elige qué actualizaciones quieres recibir.",
    notificationOptionsLegend: "Opciones de notificación",
    emailNotificationsLabel: "Notificaciones por correo",
    emailNotificationsHint: "Recibe resúmenes y actualizaciones importantes de la cuenta.",
    pushNotificationsLabel: "Notificaciones push",
    pushNotificationsHint: "Recibe alertas en tiempo real en tu navegador.",
    marketingEmailsLabel: "Correos de marketing",
    marketingEmailsHint: "Noticias del producto, consejos y anuncios de funciones.",
    privacyHeading: "Privacidad",
    privacyDescription: "Controla quién puede ver tu información.",
    profileVisibilityLabel: "Visibilidad del perfil",
    profileVisibilityPublic: "Público",
    profileVisibilityTeam: "Solo equipo",
    profileVisibilityPrivate: "Privado",
    shareUsageDataLabel: "Compartir datos de uso",
    shareUsageDataHint:
      "Ayuda a mejorar el producto compartiendo estadísticas de uso anónimas.",
    saveChanges: "Guardar cambios",
    resetButton: "Restablecer valores predeterminados",
    messagesSaved: "Configuración guardada con éxito.",
    messagesValidation: "Corrige los errores que aparecen abajo antes de guardar.",
    messagesReset: "Configuración restablecida a los valores predeterminados.",
    requiredDisplayName: "El nombre para mostrar debe tener al menos 2 caracteres.",
    requiredEmail: "El correo electrónico es obligatorio.",
    invalidEmail: "Introduce una dirección de correo válida.",
    documentTitle: "Configuración | Frontend AI Capstone",
  },
  fr: {
    skipLink: "Passer au contenu principal",
    siteBrand: "Frontend AI Capstone",
    navSettings: "Paramètres",
    pageTitle: "Paramètres",
    pageDescription:
      "Mettez à jour votre profil, vos préférences et vos options de notification. Les modifications sont enregistrées localement dans votre navigateur.",
    profileHeading: "Profil",
    profileDescription: "Informations de base utilisées dans l’application.",
    displayNameLabel: "Nom affiché",
    displayNameHint: "2–50 caractères.",
    displayNamePlaceholder: "Jeanne Martin",
    emailLabel: "Adresse e-mail",
    emailPlaceholder: "jeanne@example.com",
    bioLabel: "Biographie",
    bioPlaceholder: "Parlez-nous un peu de vous.",
    bioCounter: "{count} / 200 caractères",
    preferencesHeading: "Préférences",
    preferencesDescription: "Personnalisez l’apparence et le comportement de l’application.",
    themeLabel: "Thème",
    themeSystem: "Par défaut du système",
    themeLight: "Clair",
    themeDark: "Sombre",
    languageLabel: "Langue",
    languageEnglish: "Anglais",
    languageSpanish: "Espagnol",
    languageFrench: "Français",
    languageGerman: "Allemand",
    timezoneLabel: "Fuseau horaire",
    notificationsHeading: "Notifications",
    notificationsDescription: "Choisissez les mises à jour que vous souhaitez recevoir.",
    notificationOptionsLegend: "Options de notification",
    emailNotificationsLabel: "Notifications par e-mail",
    emailNotificationsHint: "Recevez des résumés et des mises à jour importantes de votre compte.",
    pushNotificationsLabel: "Notifications push",
    pushNotificationsHint: "Recevez des alertes en temps réel dans votre navigateur.",
    marketingEmailsLabel: "E-mails marketing",
    marketingEmailsHint: "Actualités du produit, conseils et annonces de fonctionnalités.",
    privacyHeading: "Confidentialité",
    privacyDescription: "Contrôlez qui peut voir vos informations.",
    profileVisibilityLabel: "Visibilité du profil",
    profileVisibilityPublic: "Public",
    profileVisibilityTeam: "Équipe uniquement",
    profileVisibilityPrivate: "Privé",
    shareUsageDataLabel: "Partager les données d’utilisation",
    shareUsageDataHint:
      "Aidez à améliorer le produit en partageant des statistiques d’utilisation anonymes.",
    saveChanges: "Enregistrer les modifications",
    resetButton: "Réinitialiser les valeurs par défaut",
    messagesSaved: "Paramètres enregistrés avec succès.",
    messagesValidation: "Veuillez corriger les erreurs ci-dessous avant d’enregistrer.",
    messagesReset: "Les paramètres ont été réinitialisés.",
    requiredDisplayName: "Le nom affiché doit contenir au moins 2 caractères.",
    requiredEmail: "L’adresse e-mail est obligatoire.",
    invalidEmail: "Entrez une adresse e-mail valide.",
    documentTitle: "Paramètres | Frontend AI Capstone",
  },
  de: {
    skipLink: "Zum Hauptinhalt springen",
    siteBrand: "Frontend AI Capstone",
    navSettings: "Einstellungen",
    pageTitle: "Einstellungen",
    pageDescription:
      "Aktualisieren Sie Ihr Profil, Ihre Einstellungen und Ihre Benachrichtigungsoptionen. Änderungen werden lokal in Ihrem Browser gespeichert.",
    profileHeading: "Profil",
    profileDescription: "Grundinformationen, die in der App verwendet werden.",
    displayNameLabel: "Anzeigename",
    displayNameHint: "2–50 Zeichen.",
    displayNamePlaceholder: "Anna Müller",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "anna@example.com",
    bioLabel: "Kurzbiografie",
    bioPlaceholder: "Erzählen Sie uns ein wenig über sich.",
    bioCounter: "{count} / 200 Zeichen",
    preferencesHeading: "Einstellungen",
    preferencesDescription: "Passen Sie an, wie die App aussieht und funktioniert.",
    themeLabel: "Theme",
    themeSystem: "Systemstandard",
    themeLight: "Hell",
    themeDark: "Dunkel",
    languageLabel: "Sprache",
    languageEnglish: "Englisch",
    languageSpanish: "Spanisch",
    languageFrench: "Französisch",
    languageGerman: "Deutsch",
    timezoneLabel: "Zeitzone",
    notificationsHeading: "Benachrichtigungen",
    notificationsDescription: "Wählen Sie aus, welche Updates Sie erhalten möchten.",
    notificationOptionsLegend: "Benachrichtigungsoptionen",
    emailNotificationsLabel: "E-Mail-Benachrichtigungen",
    emailNotificationsHint: "Erhalten Sie Zusammenfassungen und wichtige Kontoaktualisierungen.",
    pushNotificationsLabel: "Push-Benachrichtigungen",
    pushNotificationsHint: "Erhalten Sie Echtzeitwarnungen in Ihrem Browser.",
    marketingEmailsLabel: "Marketing-E-Mails",
    marketingEmailsHint: "Produktnews, Tipps und Funktionsankündigungen.",
    privacyHeading: "Datenschutz",
    privacyDescription: "Steuern Sie, wer Ihre Informationen sehen kann.",
    profileVisibilityLabel: "Profil-Sichtbarkeit",
    profileVisibilityPublic: "Öffentlich",
    profileVisibilityTeam: "Nur Team",
    profileVisibilityPrivate: "Privat",
    shareUsageDataLabel: "Nutzungsdaten teilen",
    shareUsageDataHint:
      "Helfen Sie dabei, das Produkt zu verbessern, indem Sie anonyme Nutzungsstatistiken teilen.",
    saveChanges: "Änderungen speichern",
    resetButton: "Auf Standard zurücksetzen",
    messagesSaved: "Einstellungen erfolgreich gespeichert.",
    messagesValidation: "Bitte beheben Sie die Fehler unten, bevor Sie speichern.",
    messagesReset: "Einstellungen auf Standardwerte zurückgesetzt.",
    requiredDisplayName: "Der Anzeigename muss mindestens 2 Zeichen lang sein.",
    requiredEmail: "Die E-Mail-Adresse ist erforderlich.",
    invalidEmail: "Geben Sie eine gültige E-Mail-Adresse ein.",
    documentTitle: "Einstellungen | Frontend AI Capstone",
  },
};

export function createDefaultSettings() {
  return { ...DEFAULT_SETTINGS };
}

export function normalizeSettings(settings = {}) {
  return { ...createDefaultSettings(), ...settings };
}

export function loadSettings(storage = globalThis.localStorage) {
  try {
    const stored = storage?.getItem?.(STORAGE_KEY);
    if (!stored) {
      return createDefaultSettings();
    }

    return normalizeSettings(JSON.parse(stored));
  } catch {
    return createDefaultSettings();
  }
}

export function saveSettings(settings, storage = globalThis.localStorage) {
  const normalized = normalizeSettings(settings);
  storage?.setItem?.(STORAGE_KEY, JSON.stringify(normalized));
  return normalized;
}

export function resetSettings(storage = globalThis.localStorage) {
  return saveSettings(createDefaultSettings(), storage);
}

export function validateSettingsData(data) {
  const errors = {};

  if (data.displayName.length < 2) {
    errors.displayName = getLanguageText(data.language || "en", "requiredDisplayName");
  }

  if (!data.email) {
    errors.email = getLanguageText(data.language || "en", "requiredEmail");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = getLanguageText(data.language || "en", "invalidEmail");
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function getLanguageText(language, key, replacements = {}) {
  const locale = TRANSLATIONS[language] ? language : "en";
  const entry = TRANSLATIONS[locale][key] ?? TRANSLATIONS.en[key] ?? key;

  return Object.entries(replacements).reduce((text, [placeholder, value]) => {
    return text.replace(new RegExp(`\\{${placeholder}\\}`, "g"), String(value));
  }, entry);
}

export function applyTheme(theme, root = globalThis.document?.documentElement) {
  if (!root) {
    return;
  }

  if (theme === "system") {
    root.removeAttribute("data-theme");
    return;
  }

  root.setAttribute("data-theme", theme);
}

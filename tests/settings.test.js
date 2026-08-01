const { JSDOM } = require("jsdom");
const path = require("path");
const assert = require("assert");

const htmlPath = path.resolve(__dirname, "../index.html");
const html = require("fs").readFileSync(htmlPath, "utf8");

const dom = new JSDOM(html, {
  runScripts: "outside-only",
  url: "http://localhost/",
});

const { window } = dom;
const { document } = window;

global.window = window;
global.document = document;
global.localStorage = window.localStorage;

global.HTMLElement = window.HTMLElement;
global.HTMLInputElement = window.HTMLInputElement;
global.HTMLTextAreaElement = window.HTMLTextAreaElement;
global.HTMLSelectElement = window.HTMLSelectElement;
global.HTMLButtonElement = window.HTMLButtonElement;
global.Node = window.Node;

globalThis.window = window;
globalThis.document = document;
globalThis.localStorage = window.localStorage;

globalThis.HTMLElement = window.HTMLElement;

globalThis.HTMLInputElement = window.HTMLInputElement;

globalThis.HTMLTextAreaElement = window.HTMLTextAreaElement;

globalThis.HTMLSelectElement = window.HTMLSelectElement;

globalThis.HTMLButtonElement = window.HTMLButtonElement;
globalThis.Node = window.Node;

const scriptPath = path.resolve(__dirname, "../js/settings.js");
require(scriptPath);

function test(name, fn) {
  try {
    fn();
    console.log(`✔ ${name}`);
  } catch (error) {
    console.error(`✖ ${name}`);
    throw error;
  }
}

test("invalid email blocks submission and shows an error", () => {
  document.getElementById("display-name").value = "Ada";
  document.getElementById("email").value = "not-an-email";
  document.getElementById("theme").value = "light";
  document.getElementById("language").value = "en";
  document.getElementById("timezone").value = "UTC";
  document.getElementById("settings-form").dispatchEvent(new window.Event("submit", { bubbles: true, cancelable: true }));

  const error = document.getElementById("email-error");
  assert.strictEqual(error.hidden, false);
  assert.match(error.textContent, /valid email/i);
});

test("saving settings persists them and applies the selected language", () => {
  document.getElementById("display-name").value = "Grace";
  document.getElementById("email").value = "grace@example.com";
  document.getElementById("language").value = "es";
  document.getElementById("theme").value = "dark";
  document.getElementById("timezone").value = "Europe/Paris";
  document.getElementById("settings-form").dispatchEvent(new window.Event("submit", { bubbles: true, cancelable: true }));

  const stored = JSON.parse(window.localStorage.getItem("capstone-settings"));
  assert.strictEqual(stored.language, "es");
  assert.strictEqual(document.querySelector("h1").textContent, "Configuración");
  assert.strictEqual(document.documentElement.getAttribute("data-theme"), "dark");
});

test("reset restores defaults", () => {
  window.confirm = () => true;
  document.getElementById("reset-button").click();
  const stored = JSON.parse(window.localStorage.getItem("capstone-settings"));
  assert.strictEqual(stored.language, "en");
  assert.strictEqual(stored.theme, "system");
  assert.strictEqual(document.getElementById("language").value, "en");
  assert.strictEqual(document.getElementById("theme").value, "system");
});

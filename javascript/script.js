const dashboardButton = document.getElementById("dashboard");
const voltageButton = document.getElementById("voltage");
const currentButton = document.getElementById("current");
const reportsButton = document.getElementById("reports");
const settingsButton = document.getElementById("settings");

const dashboardField = document.getElementById("dashboard-field");
const voltageField = document.getElementById("voltage-field");
const currentField = document.getElementById("current-field");
const reportsField = document.getElementById("reports-field");

dashboardButton.addEventListener("click", (e) => {
  voltageField.classList.add("hidden");
  currentField.classList.add("hidden");
  reportsField.classList.add("hidden");

  voltageButton.classList.remove("active");
  currentButton.classList.remove("active");
  reportsButton.classList.remove("active");

  dashboardField.classList.remove("hidden");

  dashboardButton.classList.add("active");
});

voltageButton.addEventListener("click", () => {
  dashboardField.classList.add("hidden");
  currentField.classList.add("hidden");
  reportsField.classList.add("hidden");

  dashboardButton.classList.remove("active");
  currentButton.classList.remove("active");
  reportsButton.classList.remove("active");

  voltageField.classList.remove("hidden");

  voltageButton.classList.add("active");
});

currentButton.addEventListener("click", () => {
  dashboardField.classList.add("hidden");
  voltageField.classList.add("hidden");
  reportsField.classList.add("hidden");

  dashboardButton.classList.remove("active");
  voltageButton.classList.remove("active");
  reportsButton.classList.remove("active");

  currentField.classList.remove("hidden");

  currentButton.classList.add("active");
});

reportsButton.addEventListener("click", () => {
  dashboardField.classList.add("hidden");
  voltageField.classList.add("hidden");
  currentField.classList.add("hidden");

  dashboardButton.classList.remove("active");
  voltageButton.classList.remove("active");
  currentButton.classList.remove("active");

  reportsField.classList.remove("hidden");

  reportsButton.classList.add("active");
});

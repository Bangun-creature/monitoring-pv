const dashboardButton = document.getElementById("dashboard");
const voltageButton = document.getElementById("voltage");
const currentButton = document.getElementById("current");
const reportButton = document.getElementById("reports");
const settingsButton = document.getElementById("settings");

const dashboardField = document.getElementById("dashboard-field");
const voltageField = document.getElementById("voltage-field");

dashboardButton.addEventListener("click", (e) => {
  voltageField.classList.add("hidden");
  dashboardField.classList.remove("hidden");
});

voltageButton.addEventListener("click", () => {
  dashboardField.classList.add("hidden");
  voltageField.classList.remove("hidden");
});

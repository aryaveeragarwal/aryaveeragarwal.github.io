const root = document.documentElement;
const toggle = document.getElementById("themeToggle");

// Apply saved theme
const saved = localStorage.getItem("theme");
if (saved === "dark") {
  root.setAttribute("data-theme", "dark");
  toggle.checked = true;
}

// Toggle handler
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    root.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
});
function updateFavicon(theme) {
  const favicon = document.getElementById("favicon");
  if (!favicon) return;

  if (theme === "dark") {
    favicon.href = "/favicon-dark.svg";
  } else {
    favicon.href = "/favicon-light.svg";
  }
}

const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

function toggleTheme() {
  const current = localStorage.getItem("theme") || "light";
  const next = current === "light" ? "dark" : "light";
  applyTheme(next);
}

const saved = localStorage.getItem("theme");
if (saved) {
  root.setAttribute("data-theme", saved);
} else {
  root.setAttribute("data-theme", "light");
}

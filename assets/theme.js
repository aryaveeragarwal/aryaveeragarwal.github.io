const root = document.documentElement;
const saved = localStorage.getItem("theme");

function applyTheme(theme) {
  if (theme === "system") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", theme);
  }
}

if (saved) {
  applyTheme(saved);
}

window.setTheme = function(theme) {
  localStorage.setItem("theme", theme);
  applyTheme(theme);
};

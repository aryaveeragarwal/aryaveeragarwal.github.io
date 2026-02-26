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

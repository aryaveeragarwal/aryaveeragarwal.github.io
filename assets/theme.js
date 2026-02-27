/* ===============================
   THEME MANAGEMENT (deterministic)
   - Single initialization on DOMContentLoaded
   - Syncs checkbox, data-theme, localStorage, and favicon
   - Keeps behavior identical to previous implementation
================================ */

document.addEventListener("DOMContentLoaded", () => {

  const root = document.documentElement;
  const toggle = document.getElementById("theme-checkbox");
  const favicon = document.getElementById("favicon");

  // If toggle not present (unlikely), still apply saved theme
  const savedTheme = localStorage.getItem("theme") || "light";
  root.setAttribute("data-theme", savedTheme);
  if (toggle) toggle.checked = savedTheme === "dark";
  if (favicon) updateFavicon(savedTheme);

  // Toggle handler (if toggle exists)
  if (toggle) {
    toggle.addEventListener("change", () => {
      const newTheme = toggle.checked ? "dark" : "light";
      root.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateFavicon(newTheme);
    });
  }

  // Helper: update favicon href to match theme
  function updateFavicon(theme) {
    if (!favicon) return;
    favicon.href = theme === "dark" ? "/favicon-dark.svg" : "/favicon-light.svg";
  }

});

/* ===============================
   MOBILE MENU
   - Minimal, idempotent function for the hamburger toggle
================================ */

function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  if (nav) nav.classList.toggle("open");
}

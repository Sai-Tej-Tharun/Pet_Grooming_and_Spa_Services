"use strict";

/* =========================
   THEME TOGGLE
========================= */
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");

  html.setAttribute(
    "data-theme",
    current === "dark" ? "light" : "dark"
  );
});

/* =========================
   NOTIFICATIONS DROPDOWN
========================= */
const notifBtn = document.getElementById("notifBtn");
const dropdown = document.getElementById("notifDropdown");

notifBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.classList.toggle("active");
});


document.addEventListener("click", () => {
  dropdown.classList.remove("active");
});

/* =========================
   INIT ICONS
========================= */
lucide.createIcons();
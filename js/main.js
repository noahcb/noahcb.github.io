// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
const backToTop = document.getElementById("backToTop");

// Current year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
    navToggle.classList.toggle("open");
  });

  // Close nav when clicking a link (mobile)
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      navToggle.classList.remove("open");
    });
  });
}

// Smooth scroll (for browsers that don't fully support CSS smooth behavior)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Back to top button visibility
window.addEventListener("scroll", () => {
  if (!backToTop) return;
  const show = window.scrollY > 400;
  backToTop.classList.toggle("show", show);
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

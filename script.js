function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {

  const links = document.querySelectorAll("nav a");
  let currentPage = window.location.pathname.split("/").pop();

  if (!currentPage) currentPage = "index.html";

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }

    link.addEventListener("click", () => {
      document.getElementById("navMenu").classList.remove("show");
    });
  });

  // SCROLL REVEAL
  const items = document.querySelectorAll("section, .card, .review, .gallery img");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.15 });

  items.forEach(el => observer.observe(el));
});

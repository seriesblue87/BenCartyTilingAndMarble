// hamburger toggle
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

// highlight active page WITHOUT shifting
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

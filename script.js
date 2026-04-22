function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

// active nav highlight
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

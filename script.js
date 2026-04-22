function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

// active nav highlight
const links = document.querySelectorAll("nav a");

// get current page safely
let currentPage = window.location.pathname.split("/").pop();

// fix homepage case
if (currentPage === "" || currentPage === "/") {
  currentPage = "index.html";
}

links.forEach(link => {
  const linkPage = link.getAttribute("href");

  // highlight active page
  if (linkPage === currentPage) {
    link.classList.add("active");
  }

  // close mobile menu on click
  link.addEventListener("click", () => {
    document.getElementById("navMenu").classList.remove("show");
  });
});

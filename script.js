function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

// active nav highlight (FIXED)
document.addEventListener("DOMContentLoaded", () => {

  const links = document.querySelectorAll("nav a");

  let currentPage = window.location.pathname.split("/").pop();

  // FIX: handle homepage correctly
  if (currentPage === "" || currentPage === "/" || !currentPage) {
    currentPage = "index.html";
  }

  links.forEach(link => {
    const linkPage = link.getAttribute("href");

    // set ONLY one active link
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }

    // close mobile menu on click
    link.addEventListener("click", () => {
      document.getElementById("navMenu").classList.remove("show");
    });
  });

});

function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

// EVERYTHING BELOW goes inside DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {

  const links = document.querySelectorAll("nav a");

  let currentPage = window.location.pathname.split("/").pop();

  if (currentPage === "" || currentPage === "/" || !currentPage) {
    currentPage = "index.html";
  }

  links.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }

    link.addEventListener("click", () => {
      document.getElementById("navMenu").classList.remove("show");
    });
  });

});

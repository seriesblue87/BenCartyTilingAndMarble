function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

// active nav highlight
const links = document.querySelectorAll("nav a");

// get current page (fixes index.html + subpages)
const currentPage = window.location.pathname.split("/").pop() || "index.html";

links.forEach(link => {
  const linkPage = link.getAttribute("href");

  // highlight active page
  if (
    linkPage === currentPage ||
    (currentPage === "" && linkPage === "index.html")
  ) {
    link.classList.add("active");
  }
});

/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();

/** Pàgina actual */
const navLinks = document.querySelectorAll(".fg__header--nav--item a");
const path = window.location.pathname.split("/").pop().toLowerCase() || "index.html";

navLinks.forEach((link) => {
  const linkPath = link.getAttribute("href").split("/").pop().toLowerCase();

  // Afegir 'active' si coincideix o si estem a la home
  if (linkPath === path || (path === "" && linkPath === "index.html")) {
    link.classList.add("active");
  }
});

/** Menu toggle en mobile */
const toggle = document.querySelector(".fg__header--toggle");
const nav = document.querySelector(".fg__header--nav");

toggle?.addEventListener("click", () => {
  nav.classList.toggle("active");
});

/** Tancar el menú si es canvia de mida a desktop */
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    nav.classList.remove("active");
  }
});
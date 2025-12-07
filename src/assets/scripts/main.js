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
let currentPage = window.location.pathname.split("/").pop();
if (currentPage === "") currentPage = "index.html";

/** Seleccionar links del header */
const navLinks = document.querySelectorAll(".header__nav-item a");

navLinks.forEach(link => {
  // Només el fitxer del href
  const linkPage = link.getAttribute("href").split("/").pop();

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

/** Menu toggle en mobile */
const toggle = document.querySelector(".header__toggle");
const nav = document.querySelector(".header__nav");

toggle?.addEventListener("click", () => {
  nav.classList.toggle("active");
});

/** Tancar el menú si es canvia de mida a desktop */
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    nav.classList.remove("active");
    nav.style.maxHeight = null;
  }
});

/** Obrir i tancar el formulari */
const openFormBtn = document.getElementById('open-fake-form');
const modal = document.getElementById('fake-form-modal');
const closeModal = modal.querySelector('.fake-form-close');

openFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});
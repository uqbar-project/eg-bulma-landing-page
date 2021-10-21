document.addEventListener("DOMContentLoaded", () => {
  const boton = document.querySelector(".navbar-burger");
  const menu = document.querySelector(".navbar-menu");
  boton.onclick = () => {
    menu.classList.toggle("is-active");
    boton.classList.toggle("is-active");
  };
});



const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
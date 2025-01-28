/*Hacer aparecer el menú.*/

const btnMenu = document.querySelector(".menu_filtros");
const navHeader = document.querySelector("#header_filtros");

btnMenu.addEventListener("click", () => {
  navHeader.classList.add("nav-visible")
});


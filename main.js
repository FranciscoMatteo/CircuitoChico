function mostrarLogo() {
  const header = document.getElementById("boxHeader");
  const logo = header.querySelector(".logo");
  const menu = header.querySelector(".navbar");

  // Agrega clases para mostrar el logo y el menú
  header.classList.add("mostrar");
  logo.style.display = "flex";
  menu.classList.add("mostrar-menu");
}

window.addEventListener("scroll", () => {
  const logo = document.getElementById("boxLogo");
  const header = document.getElementById("boxHeader");
  const box = document.getElementById("boxCentrado");
  const menu = header.querySelector(".navbar div");
  const scrollY = window.scrollY;
  function mostrarLogo() {
    const header = document.getElementById("boxHeader");
    const logo = header.querySelector(".logo");
    const menu = header.querySelector(".navbar div");

    // Agrega clases para mostrar el logo y el menú
    header.classList.add("mostrar");
    logo.style.display = "flex";
    menu.classList.add("mostrar-menu");
  }
  function sacarLogo() {
    const header = document.getElementById("boxHeader");
    const logo = header.querySelector(".logo");
    const menu = header.querySelector(".navbar div");

    // Agrega clases para mostrar el logo y el menú
    header.classList.remove("mostrar");
    logo.style.display = "none";
    menu.classList.remove("mostrar-menu");
  }

  if (scrollY > 500) {
    mostrarLogo();
    box.style.opacity = "0";
    menu.classList.remove("sacar-menu");
  } else {
    sacarLogo();
    menu.classList.add("sacar-menu");
    box.style.opacity = "1";
  }
});

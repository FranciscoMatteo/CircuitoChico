function mostrarLogo() {
  const header = document.getElementById("boxHeader");
  const logo = header.querySelector(".logo");
  const menu = header.querySelector(".navbar");

  // Agrega clases para mostrar el logo y el menú
  header.classList.add("mostrar");
  logo.style.display = "flex";
  menu.classList.add("mostrar-menu");
}
let tamanoDeseado = 1366;
let aca = 0;
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

  if (window.innerWidth <= tamanoDeseado) {
    if (scrollY > 400) {
      if (aca > 3) {
        aca -= 1;
      } else {
        aca += 1;
      }
      mostrarLogo();
      box.style.opacity = "0";
      menu.classList.remove("sacar-menu");
    } else if (aca > 1) {
      sacarLogo();
      menu.classList.add("sacar-menu");
      box.style.opacity = "1";
    }
  } else {
    if (scrollY > 650) {
      if (aca > 3) {
        aca -= 1;
      } else {
        aca += 1;
      }
      mostrarLogo();
      box.style.opacity = "0";
      menu.classList.remove("sacar-menu");
    } else if (aca > 1) {
      sacarLogo();
      menu.classList.add("sacar-menu");
      box.style.opacity = "1";
    }
  }
});

//  Agregar un event listener para el evento "resize" de la ventana
// window.addEventListener("resize", verificarTamañoPantalla);

//   Llamar a la función una vez al cargar la página para verificar el tamaño inicial
// verificarTamañoPantalla();

document.addEventListener("scroll", function () {
  let boton = document.getElementById("insBoton");
  let posicionActual = window.scrollY; // Obtiene la posición vertical actual del scroll
  let alturaPagina = document.body.scrollHeight - window.innerHeight - 500;
  let alturaPagina2 = document.body.scrollHeight - window.innerHeight - 400; // Calcula la altura total de la página
  let anchoPagina = window.innerWidth;

  // Verifica si estás al final de la página
  if (anchoPagina <= 1000) {
    if (posicionActual >= alturaPagina) {
      boton.style.opacity = "0";
    } else {
      boton.style.opacity = "1";
    }
    if (posicionActual >= alturaPagina2) {
      boton.style.display = "none";
    } else {
      boton.style.display = "";
    }
  } else {
    boton.style.opacity = "1";
    boton.style.display = "";
  }
});

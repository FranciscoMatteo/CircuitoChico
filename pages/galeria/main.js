const fulImgBox = document.getElementById("fulImgBox"),
  fulImg = document.getElementById("fulImg");

function openFulImg(reference) {
  fulImgBox.style.display = "flex";
  fulImg.src = reference;
}

function closeImg() {
  fulImgBox.style.display = "none";
}

document.addEventListener("scroll", function () {
  let boton = document.getElementById("insBoton");
  let posicionActual = window.scrollY; // Obtiene la posición vertical actual del scroll
  let alturaPagina = document.body.scrollHeight - window.innerHeight - 500;
  let alturaPagina2 = document.body.scrollHeight - window.innerHeight - 400; // Calcula la altura total de la página

  // Verifica si estás al final de la página
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
});

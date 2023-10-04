window.addEventListener("scroll", () => {
  const logo = document.getElementById("boxLogo");
  const header = document.getElementById("boxHeader");
  const box = document.getElementById("boxCentrado");
  const scrollY = window.scrollY;

  if (scrollY > 500) {
    box.style.opacity = "0";
    header.style.justifyContent = "space-between";
    logo.style.display = "flex";
  } else {
    box.style.opacity = "1";
    header.style.justifyContent = "center";
    logo.style.display = "none";
  }
});

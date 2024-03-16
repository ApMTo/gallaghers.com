const header = document.querySelector(".navbar-toggler");

window.addEventListener("scroll", () => {
  let scroll = scrollY;
  if (scroll >= 1) {
    header.classList.add("headerFixed");
  } else {
    header.classList.remove("headerFixed");
  }
});

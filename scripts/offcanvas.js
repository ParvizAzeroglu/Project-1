// offcanvas__active
const offcanvas = document.querySelector(".offcanvas");
const offcanvasButton = document.querySelector("#toggler");

offcanvasButton.addEventListener("click", () => {
  if (offcanvas.classList.contains("offcanvas__active")) {
    DeactivateOffcanvas();
  } else {
    ActivateOffcanvas();
  }
});

function ActivateOffcanvas() {
  offcanvas.classList.add("offcanvas__active");
}

function DeactivateOffcanvas() {
  offcanvas.classList.remove("offcanvas__active");
}

export { ActivateOffcanvas, DeactivateOffcanvas };

const btnOpen = document.querySelector("#open-btn");
const btnClose = document.querySelector("#close-btn");
const modalContainer = document.querySelector("#modal-container");

btnOpen.addEventListener("click", () => {
  modalContainer.style.display = "block";
  window.style.backgroundColor = "black";
});
btnClose.addEventListener("click", () => {
  modalContainer.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});

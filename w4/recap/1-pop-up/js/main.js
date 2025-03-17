const showModalButton = document.querySelector("#show-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");

function showModal() {
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

showModalButton.addEventListener("click", showModal);
closeModalButton.addEventListener("click", closeModal);

const openModal = document.querySelector(".open");
const modalContainer = document.querySelector(".modal-container");
const closeModal = document.querySelector(".modal-btn");

openModal.addEventListener("click", function() {
    modalContainer.classList.add("show");
})

closeModal.addEventListener("click", function() {
    modalContainer.classList.remove("show");
})
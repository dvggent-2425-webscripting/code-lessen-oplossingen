const confettiButton = document.querySelector("#confetti-button");
const confettiEffect = document.querySelector("#confetti-effect");

confettiButton.addEventListener("click", () => {
  confettiEffect.classList.add("show");
  setTimeout(() => confettiEffect.classList.remove("show"), 5000);
});

const jumpButton = document.querySelector("#button-jump");

jumpButton.addEventListener("click", () => {
  let x = Math.random() * (window.innerWidth - 100);
  let y = Math.random() * (window.innerHeight - 50);
  jumpButton.style.left = `${x}px`;
  jumpButton.style.top = `${y}px`;
});

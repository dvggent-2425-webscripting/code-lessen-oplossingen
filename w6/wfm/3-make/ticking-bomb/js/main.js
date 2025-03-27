let bombCode = "1234";
let bombTime = 20;
let bombTimer = document.getElementById("bomb-timer");
let bombElement = document.getElementById("bomb");
let bombActive = true;
let bombCountdown = null;

document.addEventListener("DOMContentLoaded", () => {
  shakeBomb();

  bombCountdown = setInterval(() => {
    if (!bombActive) return;

    bombTime--;
    bombTimer.textContent = bombTime;

    if (bombTime <= 0) {
      clearInterval(bombCountdown);
      bombActive = false;
      bombElement.classList.add("explode");
      bombTimer.textContent = "💥 BOEM!";
    }
  }, 1000);
});

function shakeBomb() {
  if (!bombActive) return;
  let x = Math.random() * 4 - 2;
  let y = Math.random() * 4 - 2;
  bombElement.style.transform = `translate(${x}px, ${y}px)`;
  requestAnimationFrame(shakeBomb);
}

document.getElementById("defuse-button").addEventListener("click", function () {
  let inputCode = document.getElementById("code-input").value;

  if (inputCode === bombCode) {
    clearInterval(bombCountdown);
    bombActive = false;
    bombTimer.textContent = "🎉 Bom geneutraliseerd!";
    bombElement.style.backgroundColor = "green";
    bombElement.style.transform = "none";
  } else {
    alert("Foute code! Probeer opnieuw.");
  }
});

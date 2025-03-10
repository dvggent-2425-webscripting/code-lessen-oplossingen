const bar = document.querySelector(".loading-bar");
const message = document.querySelector(".message");
document.getElementById("start").addEventListener("click", function () {
  // Reset animatie
  bar.style.animation = "none";
  bar.style.width = "0%";
  message.classList.remove("visible");

  // Start animatie
  setTimeout(function () {
    bar.style.animation = "fillBar 3s linear forwards";
  }, 1);

  // Toon boodschap na 3 seconden
  setTimeout(function () {
    message.classList.add("visible");
  }, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
  // Set the initial name
  document.querySelector("#name").innerText = "Jacques";

  // Function to generate a random color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Function to generate a random number
  function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  // Change the background color of lucky-color
  document.querySelector("#lucky-color").style.backgroundColor =
    getRandomColor();

  // Change the lucky number
  document.querySelector("#lucky-number").textContent = getRandomNumber();
});

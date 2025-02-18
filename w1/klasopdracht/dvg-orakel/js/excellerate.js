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

  // Function that sets a random color & number
  function generateRandomValues(element = document) {
    const colorElement = element.querySelector("#lucky-color");
    colorElement.style.backgroundColor = getRandomColor();

    const numberElement = element.querySelector("#lucky-number");
    numberElement.textContent = getRandomNumber();
  }

  // Function to add a new row
  function addRow() {
    const cardsWrapper = document.querySelector(".cards-wrapper");

    const newRow = document.createElement("div");
    newRow.className = "cards-row";
    newRow.innerHTML = `
        <article class="card">
            <p id="lucky-number" class="lucky-element lucky-number">7</p>
            <h2 class="lucky-description">Jouw Getal</h2>
        </article>

        <article class="card">
            <p id="lucky-color" class="lucky-element lucky-color"></p>
            <h2 class="lucky-description">Jouw Kleur</h2>
        </article>
    `;

    cardsWrapper.appendChild(newRow);
    generateRandomValues(newRow);

    const drawNumberElement = document.querySelector("#count");
    drawNumberElement.textContent =
      document.querySelectorAll(".cards-row").length;
  }

  // Event listener for the draw button
  document
    .querySelector("#draw-button")
    .addEventListener("click", () => addRow());

  // Generate random values for the initial state
  generateRandomValues();
});

const countButton = document.querySelector(".count-to-n");
const numberList = document.querySelector(".number-list");

countButton.addEventListener("click", () => {
  /* TODO 1: Zorg ervoor dat het resultaat van maxNumber een getal tussen 10 en 50 is */
  const maxNumber = Math.floor(Math.random() * 40) + 10;
  numberList.innerHTML = "";

  /* ------------------------------- OEFENING ------------------------------- */
  // TODO 2: Schrijf een for-loop die van 1 tot de waarde in maxNumber loopt.
  // Zorg ervoor dat elke loop de volgende code uitvoert:
  //  const li = document.createElement("li");
  //  li.textContent = i;
  //  numberList.appendChild(li);

  /* ------------------------------- OPLOSSING ------------------------------- */
  for (let i = 1; i <= maxNumber; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    numberList.appendChild(li);
  }
});

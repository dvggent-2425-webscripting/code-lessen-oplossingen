/**
 * Array van kandidaten. Elke kandidaat is een object met een firstName (string),
 * lastName (string) en img url (string).
 */
const candidates = [
  {
    firstName: "Bernard",
    lastName: "Balcaen",
    imageUrl: "images/bernard.png",
  },
  {
    firstName: "Charlotte",
    lastName: "De Mol",
    imageUrl: "images/charlotte.png",
  },
  {
    firstName: "Gillian",
    lastName: "Folens",
    imageUrl: "images/gillian.png",
  },
  {
    firstName: "Karolien",
    lastName: "Van Der Kelen",
    imageUrl: "images/karolien.png",
  },
  {
    firstName: "Lynn",
    lastName: "Thissen",
    imageUrl: "images/lynn.png",
  },
  {
    firstName: "Marta (Coco)",
    lastName: "Corbillo Colom",
    imageUrl: "images/marta.png",
  },
  {
    firstName: "Michaël",
    lastName: "Moens",
    imageUrl: "images/michael.png",
  },
  {
    firstName: "Philippe",
    lastName: "Weiler",
    imageUrl: "images/philippe.png",
  },
  {
    firstName: "Senne",
    lastName: "van der Zweep",
    imageUrl: "images/senne.png",
  },
  {
    firstName: "Stéphanie",
    lastName: "Bensaad",
    imageUrl: "images/stephanie.png",
  },
];

/**
 * Een variabele die het mol-object uit de candidates array bijhoudt.
 */
const deMol = candidates[3];

/**
 * Code die wordt uitgevoerd wanneer de DOM is ingeladen.
 */
document.addEventListener("DOMContentLoaded", () => {
  generateCandidates();

  const buttonElement = document.querySelector("button.reveal");
  buttonElement.addEventListener("click", () => revealAnswer());
});

/**
 * Functie die voor elk element in de `candidates` array een element
 * in HTML aanmaakt.
 */
function generateCandidates() {
  const candidatesElement = document.querySelector("#candidates");

  candidates.forEach((person, index) => {
    const personElement = document.createElement("article"); // Resultaat: <article></article>
    personElement.classList.add("candidate"); // Resulaat: <article class="candidate"></article>
    personElement.id = "candidate-" + index; // Resulaat: <article class="candidate" id="candidate-i"></article>
    personElement.innerHTML = `
        <img class="candidate__image" src="${person.imageUrl}">
        <h2 class="candidate__name">${person.firstName} ${person.lastName}</h2>`;
    candidatesElement.appendChild(personElement);
  });
}

/**
 * Functie die aan de hand van de index van het mol-object in de `candidates`-array
 * de mol zoekt in de DOM. Vervolgens wordt de volledige naam getoond in een
 * alert en wordt de klasse `molletje` toegevoegd aan het element.
 */
function revealAnswer() {
  const molID = candidates.findIndex((element) => element === deMol);

  const molElement = document.querySelector(`#candidate-${molID}`);
  molElement.classList.add("molletje");

  const fullName = deMol.firstName + " " + deMol.lastName;
  const message = fullName + " is het molletje!";

  alert(message);
}

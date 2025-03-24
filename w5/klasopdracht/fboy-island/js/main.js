/**
 * Array van objecten. Elk object heeft een name (string), image ("string")
 * en isNiceGuy property (boolean).
 */
const contestants = [
  { name: "Danny", image: "images/danny.jpg", isNiceGuy: false },
  { name: "Elysio", image: "images/elysio.jpg", isNiceGuy: true },
  { name: "Jacco", image: "images/jacco.jpg", isNiceGuy: false },
  { name: "Jesse", image: "images/jesse.jpg", isNiceGuy: true },
  { name: "Alan", image: "images/alan.jpg", isNiceGuy: true },
  { name: "Joel", image: "images/joel.jpg", isNiceGuy: false },
  { name: "Luca", image: "images/luca.jpg", isNiceGuy: true },
  { name: "Luuk", image: "images/luuk.jpg", isNiceGuy: false },
  { name: "Martin", image: "images/martin.jpg", isNiceGuy: true },
  { name: "Maurice", image: "images/maurice.jpg", isNiceGuy: false },
  { name: "Pybe", image: "images/pybe.jpg", isNiceGuy: true },
  { name: "Rev", image: "images/rev.jpg", isNiceGuy: false },
  { name: "Romayn", image: "images/romayn.jpg", isNiceGuy: true },
  { name: "Sonnie", image: "images/sonnie.jpg", isNiceGuy: false },
  { name: "Steven", image: "images/steven.jpg", isNiceGuy: true },
  { name: "Storm", image: "images/storm.jpg", isNiceGuy: false },
  { name: "Yoram", image: "images/yoram.jpg", isNiceGuy: true },
];

/* Haal de nodige elementen op uit de DOM. */
const contestantImage = document.querySelector("#contestant-image");
const contestantName = document.querySelector("#contestant-name");
const resultModal = document.querySelector("#result-modal");
const resultTitle = document.querySelector("#result-title");
const resultText = document.querySelector("#result-text");
const nextButton = document.querySelector("#next-btn");
const niceGuyButton = document.querySelector("#nice-guy-btn");
const fBoyButton = document.querySelector("#fboy-btn");

/* Eventlisteners op de buttons */
niceGuyButton.addEventListener("click", () => checkGuess(false));
fBoyButton.addEventListener("click", () => checkGuess(true));
nextButton.addEventListener("click", nextContestant);

/* Render een eerste contestant wanneer de DOM is ingeladen. */
document.addEventListener("DOMContentLoaded", loadContestant);

/**
 * Hou de index van de huidige contestant bij in een variabele en vul deze
 * initieel op met een random index tussen 0 (inclusief) en de lengte van de
 * array -1.
 */
let currentIndex = Math.floor(Math.random() * contestants.length);

/**
 * Functie die de data van de huidige contestant uit de array haalt en in de
 * DOM toont. De model wordt ook gesloten.
 */
function loadContestant() {
  const contestant = contestants[currentIndex];
  contestantImage.src = contestant.image;
  contestantName.textContent = contestant.name;
  resultModal.classList.remove("active");
}

/**
 * Functie die de modal toont en 2 zaken checkt:
 * 1. Heb je juist geraden? Dit wordt weerspiegeld in de titel.
 * 2. Is het een Fboy? Dit wordt weerspiegeld in de tekst.
 */
function checkGuess(isFboyGuess) {
  const contestant = contestants[currentIndex];

  resultTitle.classList.toggle(
    "correct",
    !isFboyGuess === contestant.isNiceGuy
  );
  resultTitle.classList.toggle(
    "incorrect",
    isFboyGuess === contestant.isNiceGuy
  );

  resultTitle.textContent =
    contestant.isNiceGuy === isFboyGuess ? "Foute gok!" : "Goed geraden!";
  const type = contestant.isNiceGuy ? "Nice Guy 💚" : "FBOY 🚩🚩🚩";
  resultText.textContent = `${contestant.name} is een ${type}`;
  resultModal.classList.add("active");
}

/**
 * Functie die een random contestant oproept en de modal terug sluit.
 * Er wordt voor gezorgd dat de nieuwe, random index nooit gelijk is aan de
 * vorige random index, dankzij de do-while loop.
 */
function nextContestant() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * contestants.length);
  } while (newIndex === currentIndex);
  currentIndex = newIndex;

  loadContestant();

  resultModal.classList.remove("active");
}

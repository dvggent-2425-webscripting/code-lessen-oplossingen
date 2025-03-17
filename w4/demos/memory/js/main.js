/**
 * We halen het element met class `.table` uit de DOM
 */
const board = document.querySelector(".table");

/**
 * We maken een lijst van symbolen in een willekeurige volgorde
 */
const symbols = ["🍎", "🍌", "🍇", "🍉", "🍎", "🍌", "🍇", "🍉"];
symbols.sort(() => 0.5 - Math.random());

/**
 * We maken een aantal variabelen aan. Je kan dit zien als de 'denkruimte' in ons hoofd.
 */
let firstCard, secondCard;
let lockBoard = false;

/**
 * We maken voor elk element in deze lijst een `div`, die we toevoegen aan de tafel.
 */
function createBoard() {
  symbols.forEach((symbol) => {
    const card = document.createElement("div"); // Maak een `div` element aan
    card.classList.add("card"); // Voeg een class toe aan de `div`
    card.dataset.symbol = symbol; // Voeg een data-attribuut toe aan de `div`
    card.addEventListener("click", (event) => flipCard(event)); // Voeg een eventListener toe aan de `div`

    // Leg de kaart op tafel
    board.appendChild(card);
  });
}

/**
 * Maak de opgeslagen variabelen terug leeg.
 */
function resetBoard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

/**
 * We bekijken de omgedraaide card en voeren de nodige checks uit
 */
function flipCard(event) {
  const clickedCard = event.currentTarget;

  /**
   * Check 1: zijn we al 2 kaarten aan het vergelijken?
   * Zo ja, dan reageren we even niet meer op nieuwe clicks.
   * */
  if (lockBoard) {
    return;
  }

  /**
   * Check 2: Klikken we nog eens op dezelfde, reeds omgedraaide, kaart?
   * Zo ja, dan reageren we even niet op deze click.
   */
  if (clickedCard === firstCard) {
    return;
  }

  /**
   * Check 3: Klikken we op een kaart die al omgedraaid was en dus content heeft?
   * Zo ja, dan reageren we even niet op deze click.
   */
  if (clickedCard.innerText) {
    return;
  }

  /**
   * We tonen de kaart.
   * We halen het symbool uit het data-attribuut op en voegen dit toe in de HTML.
   */
  clickedCard.textContent = clickedCard.dataset.symbol;
  clickedCard.classList.add("card--flipped");

  if (!firstCard) {
    firstCard = clickedCard;
    return;
  }

  secondCard = clickedCard;
  lockBoard = true;

  /**
   * Als firstCard & secondCard een waarde hebben,
   * wordt de checkForMatch() functie opgeroepen.
   */
  checkForMatch();
}

/**
 * Als de kaarten gelijk zijn, resetten we het bord.
 * Als de kaarten verschillend zijn, draaien we ze na 1 seconde terug om.
 */
function checkForMatch() {
  if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
    resetBoard();
  } else {
    setTimeout(() => {
      firstCard.textContent = "";
      secondCard.textContent = "";
      firstCard.classList.remove("card--flipped");
      secondCard.classList.remove("card--flipped");
      resetBoard();
    }, 1000);
  }
}

createBoard();

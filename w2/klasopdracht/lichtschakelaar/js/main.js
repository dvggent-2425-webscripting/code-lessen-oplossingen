// Haal de nodige HTML elementen op uit de DOM en plaats ze in variabelen
const bulb = document.querySelector("#bulb");
const switchBox = document.querySelector("#checkbox-switch");
const switchElement = document.querySelector("#switch");
const timesSwitched = document.querySelector("#times-switched");
const totalUsage = document.querySelector("#total-usage");

// Hou in een variabele met data type Boolean bij of de lamp aan of uit staat
const lightIsOn = false;

// Hou in een variabele met data type Number bij hoeveel keer de lichtknop werd ingeduwd.
let switchCount = 0;

/**
 * Voeg een eventListener toe aan de switch die checkt wanneer de switch verandert.
 * - Update daarin een klasse op een element
 * - Vermeerder de variabele die het aantal kliks bijhoudt
 * - Geef het aantal kliks weer in het witte kader bovenaan links
 * - Pas de boolean aan die checkt of de lamp aan of uit staat
 */
switchBox.addEventListener("change", () => {
  bulb.classList.toggle("off", !switchBox.checked);
  switchCount++;
  timesSwitched.textContent = switchCount;
  lightIsOn != lightIsOn;
});

/**
 * Voeg een eventListener toe aan de switch die checkt wanneer de cursor wordt ingedrukt
 * Pas daarna de gepaste klasse aan op het gepaste element.
 */
switchElement.addEventListener("mousedown", () => {
  bulb.classList.add("knipperen");
});

/**
 * Voeg een eventListener toe aan de switch die checkt wanneer de cursor niet meer wordt ingedrukt
 * Pas daarna de gepaste klasse aan op het gepaste element.
 */
switchElement.addEventListener("mouseup", () => {
  bulb.classList.remove("knipperen");
});

/**
 * Schrijf een functie die het totaalverbruik berekent en dit toont in het witte kader bovenaan links.
 * De berekening hoeft niet te kloppen; het volstaat om om de seconde het getal te verhogen met 1.
 */
function checkTotalUsage() {
  if (switchBox.checked) {
    totalUsage.textContent = parseInt(totalUsage.textContent) + 1;
  }
}

/**
 *  Schrijf een setInterval() functie die om de seconde het totaalverbruik herberekent.
 */
setInterval(checkTotalUsage, 1000);

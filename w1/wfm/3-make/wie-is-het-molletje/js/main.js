/**
 * De volgende code zorgt ervoor dat de functie revealAnwser() wordt uitgevoerd
 * als je op de button hebt geklikt.
 * */
const button = document.querySelector("button.reveal");
button.addEventListener("click", () => revealAnswer());

/* 1. TODO: Maak een variabele aan die de voornaam van de mol bijhoudt */
const deMol = "senne";

function revealAnswer() {
  /* 2. TODO: Voeg de classe 'molletje' toe aan het juiste element uit de DOM */
  const molElement = document.getElementById(deMol);
  molElement.classList.add("molletje");

  /* 3. TODO: Toon een alert met daarin de volledige naam van het molletje */
  const fullName = molElement.querySelector("h2").textContent;
  const message = fullName + " is het molletje!";
  alert(message);
}

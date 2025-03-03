document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.querySelector("#button-start-race");
  startButton.addEventListener("click", startRace);
});

function startRace() {
  // 1. Haal de fietsen op uit de DOM
  const bike1 = document.getElementById("bike1");
  const bike2 = document.getElementById("bike2");

  // 2. Bereken willekeurige snelheden per fiets. Zorg dat ze minstens 5 seconden (=5000 ms) erover doen.
  const bike1Speed = Math.random() * 1000 + 5000;
  const bike2Speed = Math.random() * 1000 + 5000;

  // 3. Voeg deze snelheden toe als waarde van de transition-duration property van de fietsen. Voeg er "ms" aan toe.
  bike1.style.transitionDuration = bike1Speed + "ms";
  bike2.style.transitionDuration = bike2Speed + "ms";

  // 4.Voeg de klasse 'active' toe aan de elementen, zodat ze beginnen 'wobblen'.
  bike1.classList.add("active");
  bike2.classList.add("active");

  // 5. Verplaats de elementen 90% naar rechts.
  bike1.style.left = "90%";
  bike2.style.left = "90%";

  // 6. Laat een alert verschijnen nadat de fiets die het traagst is, binnen is.
  setTimeout(() => {
    let winner;
    if (bike1Speed < bike2Speed) {
      winner = "Bike 1";
    } else {
      winner = "Bike 2";
    }
    bike1.classList.remove("active");
    bike2.classList.remove("active");
    alert(winner + " wins!");
  }, Math.max(bike1Speed, bike2Speed));
}

let ball = document.getElementById("ball");
let containerHeight = 480;
let gravity = 0.6;
let velocity = 0; // Snelheid = 0
let position = 0; // De bal begint bovenaan
let bounceFactor = 0.7;
let animating = false;

document.addEventListener("DOMContentLoaded", () => {
  function dropBall() {
    if (animating) return;
    animating = true;
    velocity = 0;
    position = 0;

    function animate() {
      velocity += gravity; // De zwaartekracht trekt de bal bij elke frame naar beneden -> Telkens 0.6 (px)
      position += velocity; // De bal krijgt snelheid en zakt telkens meer en meer naar beneden

      /* Foutje: verkeerde conditional */
      if (position >= containerHeight - 48) {
        position = containerHeight - 48; // Bal wordt op de grond gezet als hij 'te diep' valt
        velocity *= -bounceFactor; // Snelheid wordt negatief & een beetje kleiner -> de bal stuitert omhoogt, maar minder hoog dan ervoor
      }

      ball.style.top = position + "px";

      /* Foutje: && in plaats van || */
      // Zolang de bal nog een klein beetje beweegt (minder dan O.5 positief of negatief), of niet helemaal beneden is blijft ze stuiteren
      if (Math.abs(velocity) > 0.5 || position < containerHeight - 48) {
        /* Foutje: parameter werd niet meegegeven */
        requestAnimationFrame(animate);
      } else {
        animating = false;
      }
    }

    /* Foutje: functie werd niet opgeroepen */
    animate();
  }

  document.getElementById("reset-ball").addEventListener("click", dropBall);
});

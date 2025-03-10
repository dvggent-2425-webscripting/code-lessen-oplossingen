const actions = ["twist-it", "flick-it", "spin-it", "pull-it"];
let gameStarted = false;
let currentAction = "";

const bobItElement = document.querySelector("#bob-it");
const actionDisplayElement = document.querySelector("#action-display");

window.addEventListener("load", () => {
  bobItElement.addEventListener("click", startGame);

  actions.forEach((action) => {
    const actionElement = document.querySelector(`#${action}`);
    actionElement.addEventListener("click", () => {
      if (gameStarted && action === currentAction) {
        displayAction();
        triggerAnimation(action);
      } else if (gameStarted) {
        actionDisplayElement.innerText =
          "Wrong action! Game over. Press bob-it to restart.";
        gameStarted = false;
      }
    });
  });
});

function startGame() {
  gameStarted = true;
  displayAction();
  bobItElement.classList.add("start");
  setTimeout(() => {
    bobItElement.classList.remove("start");
  }, 1000);
}

function displayAction() {
  currentAction = actions[Math.floor(Math.random() * actions.length)];
  actionDisplayElement.innerText = `Do: ${currentAction}`;
}

function triggerAnimation(action) {
  const element = document.querySelector(`#${action}`);
  element.classList.add(action);
  setTimeout(() => {
    element.classList.remove(action);
  }, 1000);
}

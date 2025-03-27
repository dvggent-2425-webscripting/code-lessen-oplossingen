const searchInput = document.querySelector("#halte-nummer");
const busBoard = document.querySelector("#bus-board");
const toggleStrikeButton = document.querySelector("#toggle-strike");
const setHalteButton = document.querySelector("#set-halte");
const halteNummerInput = document.querySelector("#halte-nummer");
const halteNaam = document.querySelector("#halte-naam");

searchInput.setAttribute(
  "size",
  searchInput.getAttribute("placeholder").length + 2
);

const bussen = [
  { lijn: "1", richting: "Station", aankomst: 30, willStrike: false, halte: 1 },
  {
    lijn: "3",
    richting: "Blaarmeersen",
    aankomst: 45,
    willStrike: true,
    halte: 1,
  },
  {
    lijn: "5",
    richting: "Zwijnaarde",
    aankomst: 60,
    willStrike: false,
    halte: 2,
  },
  {
    lijn: "7",
    richting: "Sint-Pieters",
    aankomst: 20,
    willStrike: false,
    halte: 1,
  },
];

let isStaking = false;
let geselecteerdeHalte = null;

function updateBoard() {
  busBoard.innerHTML = "";

  bussen.forEach((bus) => {
    if (
      (geselecteerdeHalte !== null && bus.halte !== geselecteerdeHalte) ||
      bus.aankomst <= 0
    )
      return;

    const busElement = document.createElement("div");
    busElement.className = "bus-board__element";
    busElement.innerHTML = `
            <div class="bus-board__line">Lijn ${bus.lijn}</div>
            <div class="bus-board__direction">Naar ${bus.richting}</div>
            <div class="bus-board__arrival">Aankomst over <span>${bus.aankomst}</span> sec</div>
        `;
    if (isStaking && bus.willStrike) {
      busElement.classList.add("strike");
    }
    busBoard.appendChild(busElement);
  });

  if (busBoard.innerHTML === "") {
    const noBusesElement = document.createElement("div");
    noBusesElement.className = "bus-board__no-buses";
    noBusesElement.innerText = "Geen bussen die komen";
    busBoard.appendChild(noBusesElement);
  }
}

function updateTimers() {
  bussen.forEach((bus) => {
    if (bus.aankomst > 0) {
      bus.aankomst--;
    } else {
      bus.aankomst = 0;
    }
  });
  updateBoard();
}

toggleStrikeButton.addEventListener("click", () => {
  isStaking = !isStaking;
  toggleStrikeButton.classList.toggle("active", isStaking);
  toggleStrikeButton.innerText = isStaking
    ? "Deactiveer staking"
    : "Activeer staking";
  updateBoard();
});

setHalteButton.addEventListener("click", () => {
  const halteInput = halteNummerInput.value;
  geselecteerdeHalte = halteInput ? parseInt(halteInput) : null;
  halteNaam.innerText = geselecteerdeHalte
    ? `Halte ${geselecteerdeHalte}`
    : "Alle";
  setHalteButton.classList.toggle("active", geselecteerdeHalte !== null);
  updateBoard();
});

setInterval(updateTimers, 1000);
updateBoard();

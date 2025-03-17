// --- LEVEL 1: Firewall Scan ---
document.getElementById("button-1").addEventListener("click", () => {
  const ip = document.getElementById("input-1").value;
  const result = document.getElementById("result-1");
  result.textContent = isValidIP(ip)
    ? "✅ Geldig IP-adres"
    : "❌ Ongeldig IP-adres!";
});

function isValidIP(ip) {
  const regex =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return regex.test(ip);
}

// --- LEVEL 2: Even of Oneven Teller ---
document.getElementById("button-2").addEventListener("click", () => {
  const number = document.getElementById("input-2").value;
  let evenCount = 0;
  let oddCount = 0;

  for (let digit of number) {
    if (!isNaN(digit)) {
      if (digit % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  }

  document.getElementById(
    "result-2"
  ).textContent = `Even cijfers: ${evenCount}, Oneven cijfers: ${oddCount}`;
});

// --- LEVEL 3: Data-analyse ---
document.getElementById("button-3").addEventListener("click", () => {
  const words = document.getElementById("input-3").value.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  document.getElementById("result-3").textContent = `Langste woord: ${longest}`;
});

// --- LEVEL 4: Brute Force ---
document.getElementById("button-4").addEventListener("click", () => {
  let found = 0;

  for (let i = 1000; i <= 9999; i++) {
    if (i % 17 === 0 && i % 29 === 0) {
      found = i;
      break;
    }
  }

  document.getElementById("result-4").textContent = `Eerste getal: ${found}`;
});

// --- LEVEL 5: Excelleren ---
document.querySelector("#button-5").addEventListener("click", () => {
  const secretCode = "2468";
  const input = document.querySelector("#input-5").value;
  const result = document.querySelector("#result-5");
  const attemptsDisplay = document.querySelector("#attempts-5");
  let attempts = parseInt(attemptsDisplay.getAttribute("data-attempts")) || 3;

  if (attempts > 0) {
    if (input === secretCode) {
      result.textContent = "🎉 Geheime boodschap: Gefeliciteerd!";
    } else {
      attempts--;
      attemptsDisplay.setAttribute("data-attempts", attempts);
      result.textContent = "❌ Foutieve code!";
      attemptsDisplay.textContent = `Pogingen over: ${attempts}`;
    }
  } else {
    result.textContent = "🚫 Geen pogingen meer over!";
  }
});

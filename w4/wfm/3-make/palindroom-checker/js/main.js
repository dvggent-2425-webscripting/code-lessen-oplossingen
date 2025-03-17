const wordInput = document.querySelector(".word-input");
const reverseButton = document.querySelector(".reverse-word");
const reversedResult = document.querySelector(".reversed-result");

reverseButton.addEventListener("click", () => {
    const word = wordInput.value.toLowerCase() // Verwijder speciale tekens en spaties
    
    let reversed = ""; // Hier bouwen we het omgekeerde woord op
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }

    if (word === reversed) {
        reversedResult.textContent = `"${wordInput.value}" is een palindroom!`;
        document.body.classList.add("palindrome-yes");
        document.body.classList.remove("palindrome-no");
    } else {
        reversedResult.textContent = `"${wordInput.value}" is geen palindroom.`;
        document.body.classList.add("palindrome-no");
        document.body.classList.remove("palindrome-yes");
    }
});

const text = "Welkom bij de typemachine animatie!";
const typewriterElement = document.getElementById("typewriter-text");
let index = 0;

function typeCharacter() {
  if (index < text.length) {
    typewriterElement.textContent += text.charAt(index);
    index++;
  } else {
    clearInterval(typingInterval);
  }
}

const typingInterval = setInterval(typeCharacter, 100);

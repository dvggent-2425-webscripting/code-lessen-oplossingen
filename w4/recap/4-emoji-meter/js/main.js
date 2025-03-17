const emojiSlider = document.querySelector("#emoji-slider");
const emojiButton = document.querySelector("#emoji");
const emojis = ["😃", "😊", "😐", "😟", "😢"];

emojiSlider.addEventListener("input", () => {
  const value = emojiSlider.value;
  emojiButton.textContent = emojis[value];
});

// Extra: Dark mode button
const themeToggleButton = document.querySelector("#theme-toggle");

themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

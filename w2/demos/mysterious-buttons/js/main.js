document.addEventListener("DOMContentLoaded", function () {
  // 1. Variabelen declareren & elementen ophalen
  const magicButton = document.querySelector("#button-magic");
  const hideButton = document.querySelector("#button-hide");
  const showButton = document.querySelector("#button-show");
  const secretText = document.querySelector("#secret-text");
  const glowButtons = document.querySelectorAll(".button-glow");

  // 2. Magische Kleur
  magicButton.addEventListener("click", function () {
    this.classList.toggle("magic");
  });

  // 3.Toon Geheim
  showButton.addEventListener("click", function () {
    secretText.classList.remove("hidden");
    showButton.classList.add("hidden");
    hideButton.classList.remove("hidden");
  });

  // 4. Verberg Geheim
  hideButton.addEventListener("click", function () {
    secretText.classList.add("hidden");
    hideButton.classList.add("hidden");
    showButton.classList.remove("hidden");
  });

  // 5. Gloeiend Effect
  glowButtons.forEach((glowButton) => {
    glowButton.addEventListener("click", function () {
      this.classList.toggle("glow");
    });

    // Andere manier, zonder `this`
    // glowButton.addEventListener("click", function (event) {
    //   event.currentTarget.classList.toggle("glow");
    // });
  });
});

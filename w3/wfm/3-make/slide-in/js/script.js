// Hou het aantal kliks bij in een variabele met data type Number
let sliderOpenCount = 0;

// Vang een klik event op op alle buttons
document.querySelectorAll(".container .button").forEach((button) => {
  button.addEventListener("click", () => {
    // Als de button ook de class 'close-button' heeft, doe dan niets.
    sliderOpenCount++;

    const targetClass = button.getAttribute("data-target");
    const sliderElement = document.querySelector(`.slide-in.${targetClass}`);
    const headingElement = sliderElement.querySelector(".heading-element");
    const bodyElement = sliderElement.querySelector(".body-element");

    headingElement.textContent = button.getAttribute("data-heading");
    bodyElement.textContent = `${button.getAttribute(
      "data-content"
    )} You've opened a panel ${sliderOpenCount} times`;
    sliderElement.classList.toggle("active");
  });
});

// Vang een klik event op op alle close buttons. Indien er geklikt wordt, verberg het parent element dan terug.
document.querySelectorAll(".close-button").forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    closeButton.parentElement.classList.remove("active");
  });
});

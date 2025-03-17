const numberInput = document.querySelector(".number-input");
const checkButton = document.querySelector(".check-number");
const result = document.querySelector(".result");

checkButton.addEventListener("click", () => {
    const num = parseInt(numberInput.value);
    
    if (isNaN(num)) {
        result.textContent = "Voer een geldig getal in!";
        document.body.classList.remove("even", "odd");
    } else {
        result.textContent = num % 2 === 0 ? "Even getal" : "Oneven getal";
        document.body.classList.toggle("even", num % 2 === 0);
        document.body.classList.toggle("odd", num % 2 !== 0);
    }
});

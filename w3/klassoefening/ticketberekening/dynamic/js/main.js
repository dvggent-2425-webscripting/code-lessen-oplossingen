function getDataFromElement(element, dataAttributeName) {
  return element.getAttribute(`data-${dataAttributeName}`);
}

function writeDataToElement(element, value) {
  element.textContent = value;
}

function updateElementsWithData(elements, dataElement, dataAttributeName) {
  const data = getDataFromElement(dataElement, dataAttributeName);
  elements.forEach((element) => {
    writeDataToElement(element, data);
  });
}

function updateElementWithData(element, dataElement, dataAttributeName) {
  const data = getDataFromElement(dataElement, dataAttributeName);
  writeDataToElement(element, data);
}

const ticketNumberElements = document.querySelectorAll(".ticket-number");
const ticketNumberDataElement = document.querySelector("#ticket-number-data");
updateElementsWithData(
  ticketNumberElements,
  ticketNumberDataElement,
  "ticket-number"
);

const dateDataElement = document.querySelector("#date-data");
updateElementWithData(
  document.querySelector("#date-day"),
  dateDataElement,
  "date-day"
);
updateElementWithData(
  document.querySelector("#date-month"),
  dateDataElement,
  "date-month-day"
);
updateElementWithData(
  document.querySelector("#date-year"),
  dateDataElement,
  "date-year"
);

const showNameDataElement = document.querySelector("#show-name-data");
const showNameTitleElements = document.querySelectorAll(".title-data");
const showNameSubtitleElement = document.querySelector("#subtitle-data");
updateElementsWithData(
  showNameTitleElements,
  showNameDataElement,
  "show-name-title"
);
updateElementWithData(
  showNameSubtitleElement,
  showNameDataElement,
  "show-name-subtitle"
);

const timeDataElement = document.querySelector("#time-data");

updateElementsWithData(
  document.querySelectorAll(".date-time-start"),
  timeDataElement,
  "time-start"
);
updateElementsWithData(
  document.querySelectorAll(".date-time-end"),
  timeDataElement,
  "time-end"
);
updateElementsWithData(
  document.querySelectorAll(".date-time-doors"),
  timeDataElement,
  "time-doors"
);

const locationDataElement = document.querySelector("#location-data");
updateElementWithData(
  document.querySelector("#location-address"),
  locationDataElement,
  "location-address"
);
updateElementWithData(
  document.querySelector("#location-city"),
  locationDataElement,
  "location-city"
);

const rightTimeElement = document.querySelector(".right .time");
rightTimeElement.innerHTML = `<p>${getDataFromElement(
  timeDataElement,
  "time-start"
)} <span>TO</span> ${getDataFromElement(
  timeDataElement,
  "time-end"
)}</p><p>DOORS <span>@</span> ${getDataFromElement(
  timeDataElement,
  "time-doors"
)}</p>`;

const barcodeElement = document.querySelector("#barcode");
const barcodeImgElement = document.querySelector("#barcode-img");
barcodeImgElement.src = getDataFromElement(barcodeElement, "barcode-src");
barcodeImgElement.alt = getDataFromElement(barcodeElement, "barcode-alt");

// Shopping cart
const cartList = document.getElementById("cart-list");
const totalPriceElement = document.getElementById("total-price");
let totalPrice = 0;

document.querySelectorAll(".add-ticket").forEach((button) => {
  button.addEventListener("click", () => {
    const ticketType = button.getAttribute("data-type");
    const ticketPrice = parseFloat(button.getAttribute("data-price"));

    const listItem = document.createElement("li");
    listItem.textContent = `${
      ticketType.charAt(0).toUpperCase() + ticketType.slice(1)
    } Ticket - €${ticketPrice}`;
    cartList.appendChild(listItem);

    totalPrice += ticketPrice;
    totalPriceElement.textContent = totalPrice.toFixed(2);
  });
});

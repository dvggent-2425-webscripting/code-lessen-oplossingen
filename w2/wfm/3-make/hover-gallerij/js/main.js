document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("mouseover", function () {
    img.classList.add("hovered");
  });
  img.addEventListener("mouseout", function () {
    img.classList.remove("hovered");
  });
});

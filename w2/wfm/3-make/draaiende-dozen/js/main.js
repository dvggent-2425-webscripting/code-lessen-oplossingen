document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("click", function () {
    box.classList.add("active");
  });
});

document.getElementById("reset").addEventListener("click", function () {
  document.querySelectorAll(".box").forEach(function (box) {
    box.classList.remove("active");
  });
});

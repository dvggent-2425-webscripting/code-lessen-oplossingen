const road = document.querySelector("#road");
const sky = document.querySelector("#sky");
const balloon = document.querySelector("#balloon");
const title = document.querySelector("#title");
const section = document.querySelector(".section");

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;

  balloon.style.top = -1.1 * scrollY + "px";
  balloon.style.right = 0.7 * scrollY + "px";
  sky.style.top = -1.4 * scrollY + "px";
  road.style.top = -0.7 * scrollY + "px";
  title.style.top = window.innerHeight * 0.35 + -1.1 * scrollY + "px";
  section.style.top = -0.4 * scrollY + "px";
});

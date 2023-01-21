"use strict";

const hen = document.querySelector(".hen");
const fox = document.querySelector(".fox");
const foot = document.querySelector(".foot");
const jump = document.querySelector(".animation");
const blur = document.querySelector(".blur");
const clouds = document.querySelectorAll(".cloud");
const score = document.querySelector(".scoreCounter");
const gameOver = document.querySelector(".game_over");
const btnRetry = document.querySelectorAll(".retry");
const overlay = document.querySelector(".overlay");
const result = document.querySelectorAll(".result");
const chicken = document.querySelector(".chicken");
const chickenCounter = document.querySelector(".chickenCounter");
const title = document.querySelector(".title > span");
const win = document.querySelector(".win");
let i = 0;
let number = 10;

const counter = setInterval(() => {
  i++;
  score.textContent = i;
  if (i > 11 && i <= 21) {
    fox.style.animationDuration = "2s";
  }
  if (i > 21) {
    fox.style.animationDuration = "1s";
  }
}, 1000);
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    hen.classList.add("animation");
    foot.classList.add("animation");
    setTimeout(() => {
      hen.classList.remove("animation");
      foot.classList.remove("animation");
    }, 600);
  }
});

const chickenCounterFunction = () => {
  number--;
  title.textContent = number;
  if (number === 0) {
    win.classList.remove("hidden");
    fox.classList.add("hidden");
    hen.classList.add("hidden");
    foot.classList.add("hidden");
    chicken.style.display = "none";
    overlay.classList.remove("hidden");
    for (const res of result) {
      res.textContent = `Your time: ${i}s`;
    }
    clearInterval(counter);
  }
};

let isAlive = setInterval(() => {
  let henBottom = parseInt(
    window.getComputedStyle(hen).getPropertyValue("bottom")
  );
  let foxLeft = parseInt(window.getComputedStyle(fox).getPropertyValue("left"));
  let chickenLeft = parseInt(
    window.getComputedStyle(chicken).getPropertyValue("left")
  );
  if (chickenLeft < 100 && henBottom <= 70) {
    chicken.classList.add("hidden");
    chickenCounter.insertAdjacentHTML(
      "afterbegin",
      '<img src="chick.png" alt="minichick">'
    );
    setTimeout(() => {
      chicken.classList.remove("hidden");
    }, 600);
    chickenCounterFunction();
  }
  if (foxLeft < 60 && foxLeft > 0 && henBottom <= 120) {
    fox.src = "fox2.png";
    foot.style.animation = "none";
    fox.style.left = "50px";
    hen.style.bottom = "110px";
    hen.src = "henx.png";
    foot.style.display = "none";
    blur.style.animation = "none";
    chicken.style.display = "none";
    gameOver.classList.remove("hidden");
    overlay.classList.remove("hidden");
    for (const res of result) {
      res.textContent = `Your time: ${i}s`;
    }
    clearInterval(counter);
    for (const cloud of clouds) {
      cloud.style.display = "none";
    }
  }
}, 1);
for (const btns of btnRetry) {
  btns.addEventListener("click", () => {
    window.location.href = window.location.href;
  });
}

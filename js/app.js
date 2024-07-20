const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const codeColor = document.querySelectorAll(".color-code p")

const randomColor = (box, index) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  box.style.backgroundColor = `#${randomColor}`;
  codeColor[index - 1].innerText = `#${randomColor}`
};

box1.addEventListener("click", () => randomColor(box1, 1));
box2.addEventListener("click", () => randomColor(box2, 2));
box3.addEventListener("click", () => randomColor(box3, 3));
box4.addEventListener("click", () => randomColor(box4, 4));
box5.addEventListener("click", () => randomColor(box5, 5));
const containerElement = document.querySelector(".container");
const myBtn = document.querySelector(".btn");

for (let index = 0; index < 30; index++) {
  const colorContainerElement = document.createElement("div");
  colorContainerElement.classList.add("color-container");
  containerElement.appendChild(colorContainerElement);
}
const containerElementAll = document.querySelectorAll(".color-container");

myBtn.addEventListener("click", () => {
  generateColor();
});

function generateColor() {
  containerElementAll.forEach((colorContainerElement) => {
    const newColorCode = randomColor();
    console.log(newColorCode);
    colorContainerElement.style.backgroundColor = "#" + newColorCode;
    colorContainerElement.innerHTML = "#" + newColorCode;
  });
}

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const num = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(num, num + 1);
  }
  return colorCode;
}

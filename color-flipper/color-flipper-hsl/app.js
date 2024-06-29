const button = document.querySelector(".button");
const colorStauts = document.querySelector(".color-stauts");
function generateRandomNumber() {
  let hue = Math.floor(Math.random() * 360);
  let saturation = Math.floor(Math.random() * 101);
  let lightness = Math.floor(Math.random() * 101);
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

button.addEventListener("click", () => {
  const randomColor = generateRandomNumber();
  document.body.style.backgroundColor = randomColor;
  colorStauts.textContent = randomColor;
});

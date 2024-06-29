const button = document.querySelector(".button");
const colorStauts = document.querySelector(".color-stauts");
function generateRandomNumber() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener("click", () => {
  const randomColor = generateRandomNumber();
  document.body.style.backgroundColor = randomColor;
  colorStauts.textContent = randomColor;
});

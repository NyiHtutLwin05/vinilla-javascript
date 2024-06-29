const colorButton = document.getElementById("colorButton");
const colorValue = document.getElementById("colorValue");

colorButton.addEventListener("click", () => {
  let newColor = generateRandomColor();
  document.body.style.backgroundColor = newColor;
  colorValue.textContent = newColor;
});

const generateRandomColor = () => {
  let hexidecimal = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexidecimal[Math.floor(Math.random() * 16)];
  }
  return color;
};

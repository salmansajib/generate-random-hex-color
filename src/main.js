import "./style.css";

// select the DOM elements
const colorContainer = document.querySelector("#color-container");
const button = document.querySelector("#btn");
const showHexCode = document.querySelector("#show-hex-code");

// generate a random hex color code
const getRandomHexColor = () => {
  const hexDigits = "0123456789ABCDEF";

  const generatedHexCode = Array.from({ length: 6 }).reduce(
    (accumulator, _) => accumulator + hexDigits[Math.floor(Math.random() * 16)],
    "#"
  );

  return generatedHexCode;
};
console.log(getRandomHexColor());

// set the background color of the color container to a random color
// and display the hex code of the color
const setRandomBackgroundColor = () => {
  const randomColor = getRandomHexColor();
  colorContainer.style.backgroundColor = randomColor;
  showHexCode.textContent = randomColor;
};
setRandomBackgroundColor();

// add an event listener to the button to change the background color
button.addEventListener("click", () => {
  setRandomBackgroundColor();
});

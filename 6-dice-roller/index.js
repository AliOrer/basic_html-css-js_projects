
// Array of dice face image urls
const diceImages = [
  "img/dice-six-faces-one.png",
  "img/dice-six-faces-two.png",
  "img/dice-six-faces-three.png",
  "img/dice-six-faces-four.png",
  "img/dice-six-faces-five.png",
  "img/dice-six-faces-six.png"
];

//get dom elements
const diceImage = document.getElementById("diceImage");
const rollButton = document.getElementById("rollButton");


//add event listener to button
rollButton.addEventListener("click", function () {
    const randomIndex =Math.floor(Math.random() * 6); //generates 0-5
    diceImages.src = diceImages[randomIndex]; // update the image
});
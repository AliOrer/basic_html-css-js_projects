const colorBox = document.getElementById("colorBox");
const generateBtn = document.getElementById("generateBtn");

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#" ;
    
    for (let i = 0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

generateBtn.addEventListener("click", () => {
    let newColor = getRandomColor();
    colorBox.textContent = newColor;
    colorBox.style.backgroundColor = newColor;
    document.body.style.backgroundColor = newColor;
});
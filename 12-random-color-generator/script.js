const colorBox = document.getElementById("colorBox");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const message = document.getElementById("message");


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
    message.textContent = "";  //clear old messages
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(colorBox.textContent)
    .then(() => {
        message.textContent = "✅ Color code copied!";
    })

    .catch(() => {
        message.textContent =  "❌ Failed to copy!";
    });
});
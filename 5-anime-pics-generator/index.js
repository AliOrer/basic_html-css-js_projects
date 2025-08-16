const animeImages = [
    "https://wallpapercave.com/wp/wp4067814.jpg",
    "https://wallpapercave.com/wp/wp1917155.jpg",
    "https://wallpapercave.com/wp/wp1830497.jpg",
    "https://wallpapercave.com/wp/wp2516013.jpg",
    "https://wallpapercave.com/wp/wp2723453.jpg"
];

const btn = document.getElementById('generateBtn');
const img = document.getElementById('animeImage');

btn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random()* animeImages.length);
    img.src = animeImages[randomIndex];
});
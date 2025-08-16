const animeImages = [
    "pics/akame.jpg",
    "pics/bleach 2.webp",
    "pics/bleach.webp",
    "pics/chainsaw man.webp",
    "pics/chainsaw.jpg",
    "pics/one-piece.webp",
    "pics/luffy .webp",
    "pics/jjk.jpg",
    "pics/jjk friends.webp",
    "pics/itadori.jpg"
];

const btn = document.getElementById('generateBtn');
const img = document.getElementById('animeImage');

btn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * animeImages.length);
    img.src = animeImages[randomIndex];
});
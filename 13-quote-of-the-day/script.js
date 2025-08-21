
const quotes = [
      "Success is where preparation and opportunity meet.",
      "Life rewards the brave.",
      "Difficulties are hidden opportunities.",
      "Dreaming is half of achieving.",
      "Every day is a new beginning.",
      "Those without hope have no tomorrow.",
      "Small steps lead to great journeys.",
      "Love grows when shared.",
      "Thinking is easy, acting is hard; doing is the most valuable.",
      "You cannot change the past, but you can shape today.",
      
      
"“The unexamined life is not worth living.” — Socrates",

"“Knowing yourself is the beginning of all wisdom.” — Aristotle",

"“Opinion is the medium between knowledge and ignorance.” — Plato",

"“No man is free who is not master of himself.” — Epictetus",

"“You have power over your mind—not outside events.” — Marcus Aurelius",

"“He who has a why to live can bear almost any how.” — Friedrich Nietzsche",

"“I think, therefore I am.” — René Descartes",

"“Life can only be understood backwards; but it must be lived forwards.” — Søren Kierkegaard",

"“Real knowledge is to know the extent of one’s ignorance.” — Confucius",

"“The journey of a thousand miles begins with a single step.” — Lao Tzu",

"“Man is the measure of all things.” — Protagoras",

"“Happiness depends upon ourselves.” — Aristotle",

"“Man is condemned to be free.” — Jean-Paul Sartre",

"“Liberty means responsibility.” — George Bernard Shaw",

"“Time is the moving image of eternity.” — Plato",

"“Hell is other people.” — Jean-Paul Sartre",

"“All men by nature desire to know.” — Aristotle",

"“Freedom is nothing else but a chance to be better.” — Albert Camus",

"“One cannot step twice in the same river.” — Heraclitus",

"“What we achieve inwardly will change outer reality.” — Plutarch",

"“The greatest wealth is to live content with little.” — Plato",

"“An eye for an eye will only make the whole world blind.” — Mahatma Gandhi",

"“Wisdom begins in wonder.” — Socrates",

"“Man suffers only because he takes seriously what the gods made for fun.” — Alan Watts",

"“Happiness is not an ideal of reason but of imagination.” — Immanuel Kant",

"“Man is born free, and everywhere he is in chains.” — Jean-Jacques Rousseau",

"“Nothing great was ever achieved without enthusiasm.” — Ralph Waldo Emerson",

"“We are what we repeatedly do. Excellence, then, is not an act, but a habit.” — Aristotle",

"“History is written by the victors.” — Winston Churchill (often attributed as a philosophical remark)",

"“Happiness is the highest good.” — Aristotle",

"“Love is composed of a single soul inhabiting two bodies.” — Aristotle",

"“To live is to suffer, to survive is to find some meaning in the suffering.” — Friedrich Nietzsche",

"“Man is nothing else but what he makes of himself.” — Jean-Paul Sartre",

"“Happiness is only real when shared.” — Christopher McCandless (inspired by Tolstoy & Thoreau)",

"“Better to be a human dissatisfied than a pig satisfied.” — John Stuart Mill",

"“Without music, life would be a mistake.” — Friedrich Nietzsche",

"“There is nothing permanent except change.” — Heraclitus",

"“Man is a political animal.” — Aristotle",

"“All cruelty springs from weakness.” — Seneca",

"“Even while they teach, men learn.” — Seneca"
];

const quoteElement = document.getElementById("quote");



//get today's quote based on the day of the year
function getTodaysQuote(){
    const today = new Date();
    const dayOfYear = Math.floor( 
        (today - new Date(today.getFullYear(), 0,0)) / 86400000
    );
    return quotes[dayOfYear % quotes.length];
}

/*

// Load today's quote on page load
    document.getElementById("quote").textContent = getTodaysQuote();

    // Generate a random quote when button is clicked
    function newQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      document.getElementById("quote").textContent = quotes[randomIndex];
    }

*/



 // Smooth transition for changing text
    function changeQuote(text) {
      quoteElement.style.opacity = 0; // fade out
      setTimeout(() => {
        quoteElement.textContent = text;
        quoteElement.style.opacity = 1; // fade in
      }, 600); // matches CSS transition time
    }

    // Load today's quote on page load
    changeQuote(getTodaysQuote());

    // Random quote button
    function newQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      changeQuote(quotes[randomIndex]);
    }
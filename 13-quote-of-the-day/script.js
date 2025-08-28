const quoteElement = document.getElementById("quote");

async function fetchQuote() {
  try {
    //Using a custom API deployed on vercel 
    const res = await fetch("https://random-quote-api-beta.vercel.app/quote");
    const data = await res.json();
    return data.quote; // API already gives the full quote with author
  } catch (error) {
    return "The only way to do great work is to love what you do. — Steve Jobs";
  }
}

function changeQuote(text) {
  quoteElement.style.opacity = 0; // fade out
  setTimeout(() => {
    quoteElement.textContent = text;
    quoteElement.style.opacity = 1; // fade in
  }, 600);
}

// Load a quote on page load
fetchQuote().then((quote) => changeQuote(quote));

// Button handler
async function newQuote() {
  const quote = await fetchQuote();
  changeQuote(quote);
}

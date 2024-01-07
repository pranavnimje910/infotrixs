async function getRandomQuote() {
    const response = await fetch("https://zenquotes.io/api/random");
    var data = await response.json();
   displayQuote(data[0]);
  }
  
  async function searchByAuthor() {
    const author = document.getElementById('authorInput').value.toLowerCase();
    const response = await fetch('https://zenquotes.io/api/quotes');
    const data = await response.json();
  
    const filteredQuotes = data.filter(quote => quote.a.toLowerCase().includes(author));
  
    if (filteredQuotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
      displayQuote(filteredQuotes[randomIndex]);
    } else {
      alert('No quotes found for the given author.');
    }
  }

  function displayQuote(quote) {
    document.getElementById('quote').innerText = (`"${quote.q}"`);
    document.getElementById('authorQuote').innerText = (`~${quote.a}`);
  }
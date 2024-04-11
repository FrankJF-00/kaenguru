const doc = {
  quoteWrapper: document.querySelector(".quote-container"),
  quoteContainer: document.querySelector(".quote"),
  authorContainer: document.querySelector(".author"),
  btn: document.querySelector(".random-btn"),
  original: document.querySelector(".original"),
};

doc.quoteWrapper.style = "display: none";

function randomize() {
  return Math.floor(Math.random() * randomQuotes.length);
}

doc.btn.addEventListener("click", () => {
  doc.quoteWrapper.style = "display: flex";
  doc.quoteContainer.innerText = randomQuotes[randomize()].quote;
  doc.authorContainer.innerText = randomQuotes[randomize()].author;
});

doc.original.addEventListener("click", () => {
  for (let quote of randomQuotes) {
    if (quote.quote.includes(doc.quoteContainer.innerText)) {
      doc.authorContainer.innerText = quote.author;
    }
  }
});

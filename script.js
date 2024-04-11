const doc = {
  quoteWrapper: document.querySelector(".quote-container"),
  quoteContainer: document.querySelector(".quote"),
  authorContainer: document.querySelector(".author"),
  btn: document.querySelector(".random-btn"),
  original: document.querySelector(".original"),
};

const randomQuotes = [
  {
    quote:
      '"Frage nicht, was dein Land für dich tun kann, frage was du für dein Land tun kannst."',
    author: "Kim Jong-il",
  },
  {
    quote:
      '"Willst du den Charakter eines Menschen erkennen, so gib ihm Macht."',
    author: "Roland Koch",
  },
  {
    quote: '"Mister Gorbatschow, tear down this wall!"',
    author: "David Hasselhoff",
  },
  {
    quote: '"Dies ist mein Leib, der für euch hingegeben wird."',
    author: "Gina Wild",
  },
  {
    quote: '"Ich denke, also bin ich."',
    author: "Til Schweiger",
  },
  {
    quote: '"Hasta la victoria siempre!"',
    author: "John D. Rockefeller",
  },
  {
    quote:
      '"Da hat das rote Pferd sich einfach umgekehrt und hat mit seinem Schwanz die Fliege abgewehrt."',
    author: "Johann Wolfgang von Goethe",
  },
  {
    quote:
      '"Herr: es ist Zeit. Der Sommer war sehr groß. Leg deinen Schatten auf die Sonnenuhren, und auf den Fluren lass die Winde los."',
    author: "H. P. Baxxter",
  },
  {
    quote:
      '"Der Vorteil der Klugheit besteht darin, dass man sich dumm stellen kann. Das Gegenteil ist schon schwieriger."',
    author: "Bastian Schweinsteiger",
  },
  {
    quote: '"How much is the fish?"',
    author: "Karl Marx",
  },
  {
    quote: '"Mailand oder Madrid, hauptsache Italien."',
    author: "Benedikt der Sechzehnte",
  },
  {
    quote: '"Wenn man ein 0:2 kassiert, dann ist ein 1:1 nicht mehr möglich."',
    author: "Satz des Pythagoras",
  },
  {
    quote: '"Liebe deinen Nächsten wie dich selbst."',
    author: "Kurt Cobain",
  },
  {
    quote:
      '"Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde."',
    author: "Silvio Berlusconi",
  },
  {
    quote: '"Die Proletarier haben nichts zu verlieren als ihre Ketten."',
    author: "Heidi Klum",
  },
];

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
    } else if ((doc.quoteContainer = "")) {
      alert("Du mußt zuerst ein neues Zitat erzeugen.");
    }
  }
});

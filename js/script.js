// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

// QUOTES ARRAY
const quotes = [

  {
    quote: "Is Butter a carb",
    source: "Regina George",
    year: 2004,
    citation: "Mean Girls"


  }, {
    quote: `To see the world, things dangerous to come to, to see behind walls, draw closer, to find each other, and to feel. That is the purpose of life`,
    source: "Walter Mitty",
    year: 2013,
    citation: "The Secret Life Of Walter Mitty"


  }, {
    quote: `What we do in life echoes in eternity.`,
    source: "Maximus",
    year: 2000,
    citation: "Gladiator"


  }, {
    quote: `Kid, there are heroes and there are legends. Heroes get remembered, but legends never die. Follow your heart, kid, and you’ll never go wrong.`,
    source: "Babe Ruth",
    year: 1993,
    citation: "The Sandlot"


  }, {
    quote: `Do, or do not. There is no “try`,
    source: "Yoda",
    year: 1980,
    citation: "Empire Strikes Back"


  }, {
    quote: `Who is your daddy and what does he do`,
    source: "John Kimble",
    year: 1990,
    citation: "Kindergarten Cop"
  }
];

// Random quote function, pass a array with objects and selects random object from array.
const getRandomQuote = arr => arr[Math.floor(Math.random() * arr.length)];


// CREATES 3 RANDOM RGB COLORS AND ADDS TO BACKGROUND
const getRandomBackGround = () => {
  const rgbArr = [];
   for (let i = 0; i < 3; i++) {
    rgbArr.push(Math.floor(Math.random() * 255));
  }
   document.querySelector("body").style.background = `rgb(${rgbArr[0]},${rgbArr[1]},${rgbArr[2]})`;
}

// function calls two previously created functions.  Function prints out random quote to the DOM.
const printQuote = () => {

  getRandomBackGround();

  const { quote, source , citation, year } = getRandomQuote(quotes);

  const quoteTemplate = `<p class="quote">${quote}</p>
                <p class="source">${source}
                   <span class="citation"> ${citation}</span>
                    <span class="year">${year} </span>
                </p>`

  document.getElementById('quote-box').innerHTML = quoteTemplate;
}

// Invokes function
setInterval(printQuote, 5000);

// Grabs the node by its ID. Listens for a click and runs if button is clicked.
document.getElementById("loadQuote").addEventListener("click", printQuote, false);

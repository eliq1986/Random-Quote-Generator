// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

//****************
// QUOTES ARRAY
//****************
const quotes = [

    {
        quote: "Is Butter a carb",
        source: "Regina George",
        year: 2004,
        citation: "Mean Girls",
        tags: ["Funny", "Movie"]

    },
    {
        quote: `To see the world, things dangerous to come to, to see behind walls, draw closer, to find each other, and to feel. That is the purpose of life`,
        source: "Walter Mitty",
        year: 2013,
        citation: "The Secret Life Of Walter Mitty",
        tags: ["Enough", "Live", "Movie", "Life"]


    },
    {
        quote: `What we do in life echoes in eternity.`,
        source: "Maximus",
        year: 2000,
        citation: "Gladiator",
        tags: ["Confidence", "Life"]

    },
    {
        quote: `Kid, there are heroes and there are legends. Heroes get remembered, but legends never die. Follow your heart, kid, and you’ll never go wrong.`,
        source: "Babe Ruth",
        year: 1993,
        citation: "The Sandlot",
        tags: ["Fun", "Impossible", "Kind"]

    },
    {
        quote: `Do, or do not. There is no “try`,
        source: "Yoda",
        year: 1980,
        citation: "Empire Strikes Back",
        tags: ["Motivation", "Try", "Wisdom"]

    },
    {
        quote: `Who is your daddy and what does he do`,
        source: "John Kimble",
        year: 1990,
        citation: "Kindergarten Cop",
        tags: ["Funny", "School", "Cop"]

    }
];

//****************
// Random quote function, pass a array with objects and selects random object from array.
//****************

getRandomQuote = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];

}

//****************
// CREATES 3 RANDOM RGB COLORS AND ADDS TO BACKGROUND
//****************

getRandomBackGround = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    const body = document.getElementsByTagName("body")[0];
    body.style.background = `rgb(${r},${g},${b})`;

}

//****************
// function calls two previously created functions.  Function prints out random quote to the DOM.
//****************
printQuote = () => {

    getRandomBackGround()
    let quoteObj = getRandomQuote(quotes);

    let html = `<p class="quote">${quoteObj.quote}</p>`;
    html += `<p class="source">${quoteObj.source}
        <span class="citation"> ${quoteObj.citation} </span>
         <span class="year">${quoteObj.year} </span>
      </p>`

    document.getElementById('quote-box').innerHTML = html;
}
//****************
// Invokes the printQuote function every 3 seconds or 3000ms.
//****************
setInterval(printQuote,5000);

//****************
// Grabs the node by its ID. Listens for a click and runs if button is clicked.
//****************
document.getElementById("loadQuote").addEventListener("click", printQuote, false);

const quote = ["Your toast has been burnt, and no amount of scraping will remove the black parts.",
               "Time is not made out of lines. It is made out of circles; that is why clocks are round.", 
               "In the end, they just have to have faith. Ain't that a bitch?",
               "Never say goodbye. If you don't say goodbye, then you aren't really gone. You just aren't here right now",
               "Do you ever wonder why we're here?"];
const author = ["Michael J. Caboose",
                "Michael J. Caboose",
                "Epsilon",
                "Agent Carolina",
                "Dick Simmons"];

const btn = document.getElementById("new-quote");
const quoter = document.querySelector(".quoter");
const authorer = document.querySelector(".authorer");
const tweeter = document.querySelector(".tweet-quote")

// # 0-9, A-F
btn.addEventListener('click', function(){
    let pullQuote = getRandomNumber();
    console.log(quote[pullQuote])
    quoter.textContent = quote[pullQuote];    
    authorer.textContent = author[pullQuote];

  tweetUrl = "https://twitter.com/intent/tweet?text=" + quote[pullQuote];

  document.getElementById("tweet-quote").setAttribute("href",tweetUrl)
  //document.body.style.backgroundColor = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random()*quote.length);
}

////////// 
/////nav//
//////////

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

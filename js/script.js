// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
var quotes= [];
var availQuotesIndex=[];
var printedHTML;

function printQuote(){
  document.getElementById('quote-box').innerHTML=printedHTML;
  document.body.style.backgroundColor=getRandomColor();

}

function getRandomQuote(){

}

function getRandomColor(){

}

function getRandomRBG(){

}



document.getElementById('loadQuote').addEventListener("click", printQuote, false);

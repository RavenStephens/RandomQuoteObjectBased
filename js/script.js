//Thanks for grading. I have tried to make it as easy as possible.

var quotes= [{
  quote: 'We are such stuff as dreams are made on; and our little lives are rounded with a sleep.',
  source: 'Prospero',
  citation: 'The Tempest',
  year: '1611',
  tags: []
  },
  {
  quote: 'This above all: to thine ownself be true. And it must follow, as the night the day, Thou canst not then be false to any man',
  source: 'Polonius',
  citation: 'Hamlet',
  year: '1600',
  tags: []
  },
  {
  quote: 'Yet, do thy worst old Time: despite thy wrong, my love shall in my verse ever live young.',
  source: 'William Shakespeare',
  citation: 'Sonnet XIX',
  year: '',
  tags: []
  },
  {
  quote: 'Come what come may, time and the hour runs through the roughest day.',
  source: 'Macbeth',
  citation: '',
  year: '1605',
  tags: []
  },
  {
  quote: 'Swear not by the moon, the inconstant moon, That monthly changes in her circled orb, Lest that thy love prove likewise variable.',
  source: 'Juliet',
  citation: '',
  year: '',
  tags: []
  },
];
var availQuotesIndex=[];
var printedHTML;

function printQuote(){
  getRandomQuote();
  document.getElementById('quote-box').innerHTML= printedHTML;
  document.body.style.backgroundColor=getRandomColor();

}

function getRandomNum(multip){
  var randomNum= Math.floor(Math.random()*(multip));
  return randomNum;
}

function resetAvailQuotes(){
  for(i=0;i<quotes.length; i++){
    availQuotesIndex.push(i);
    console.log('Quote Options Reset');
  }
}

function getRandomQuote(){
  if(availQuotesIndex.length>0){
    var whichIndex= getRandomNum(availQuotesIndex.length);

    selectedQuoteIndex=availQuotesIndex.splice(whichIndex,1);

    printedHTML='<p class="quote">'+quotes[selectedQuoteIndex].quote+'</p>';
    printedHTML+= '<p class="source">'+ quotes[selectedQuoteIndex].source;

        //Checks to see if there is a citation. If so, proper HTML is added
    if(quotes[selectedQuoteIndex].citation !== ''){
      printedHTML+= '<span class="citation">' +quotes[selectedQuoteIndex].citation+'</span>';
    }
        //Checks to see if there is a year. If so, proper HTML is added
    if(quotes[selectedQuoteIndex].year !== ''){
      printedHTML+='<span class="year">' +quotes[selectedQuoteIndex].year+ '</span>';
    }

    printedHTML+='</p>';

      //For ease of grading.
    console.log('whichIndex: '+whichIndex);
    console.log('selectedQuoteIndex: '+selectedQuoteIndex);
    console.log('printedHTML: '+printedHTML);
    console.log('availQuotesIndex: '+availQuotesIndex);
    console.log('------------------------');
    return printedHTML;
  }else{
    resetAvailQuotes();
    getRandomQuote();
  }
}

function getRandomColor(){
  var randColor= 'rgb('+getRandomNum(256)+', '+getRandomNum(256)+', '+getRandomNum(256)+')';
  return randColor;
}


  //Prints first quote upon loading the page
window.onload=printQuote();
  //Sets up button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

  //Sets 15 second interval
setInterval(
  function (){
    printQuote()
  }
, 15000);

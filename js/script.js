//Thanks for grading. I have tried to make it as easy as possible.
//In the quotes array, there is some missing information to show how
//the iff statements work in the getRandomQuote function.

var quotes= [{
  quote: 'We are such stuff as dreams are made on; and our little lives are rounded with a sleep.',
  source: 'Prospero',
  citation: 'The Tempest',
  year: '1611',
  tags: ['dreams','tempest','sleep']
  },
  {
  quote: 'This above all: to thine ownself be true. And it must follow, as the night the day, Thou canst not then be false to any man',
  source: 'Polonius',
  citation: 'Hamlet',
  year: '1600',
  tags: ['fatherly advice','truth']
  },
  {
  quote: 'Yet, do thy worst old Time: despite thy wrong, my love shall in my verse ever live young.',
  source: 'William Shakespeare',
  citation: 'Sonnet XIX',
  tags: ['challenges', 'time', 'Sonnet', 'poetry' ]
  },
  {
  quote: 'Come what come may, time and the hour runs through the roughest day.',
  source: 'Macbeth',
  year: '1605',
  tags: ['moving on','challenge accepted']
  },
  {
  quote: 'Swear not by the moon, the inconstant moon, That monthly changes in her circled orb, Lest that thy love prove likewise variable.',
  source: 'Juliet',
  tags: ['Juliet','roofie from a priest','get it together']
  },
];
var availQuotesIndex=[];
var printedHTML;
var selectedQuoteIndex;


function printQuote(){
  getRandomQuote();
  document.getElementById('quote-box').innerHTML= printedHTML;
  document.getElementById('tags').innerHTML= getQuoteTags(selectedQuoteIndex);
  //console.log(getQuoteTags(selectedQuoteIndex));
  document.body.style.backgroundColor=getRandomColor();

}

  //Universal random number generator. Takes a MULTIPLIER argument.
  // ie. if I'm generating RGB values multip=256
function getRandomNum(multip){
  var randomNum= Math.floor(Math.random()*(multip));
  return randomNum;
}

  //reset function
function resetAvailQuotes(){
  for(i=0;i<quotes.length; i++){
    availQuotesIndex.push(i);
    console.log('Quote Options Reset');
  }
}

  //The meat and potatoes
function getRandomQuote(){
  if(availQuotesIndex.length>0){
        //chooses a random index from availQuotesIndex array
    var whichIndex= getRandomNum(availQuotesIndex.length);
        //Removes random index from array, places it in variable.
    selectedQuoteIndex = availQuotesIndex.splice(whichIndex,1);
        //Lets build the HTML!
    printedHTML='<p class="quote">'+quotes[selectedQuoteIndex].quote+'</p>';
    printedHTML+= '<p class="source">'+ quotes[selectedQuoteIndex].source;

        //Checks to see if there is a citation. If so, proper HTML is added
    if(quotes[selectedQuoteIndex].citation !== undefined){
      printedHTML+= '<span class="citation">' +quotes[selectedQuoteIndex].citation+'</span>';
    }
        //Checks to see if there is a year. If so, proper HTML is added
    if(quotes[selectedQuoteIndex].year !== undefined){
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
    //Resets the availQuotesIndex array if there are no more unused quotes
    resetAvailQuotes();
    getRandomQuote();
  }
}

  //getQuoteTags assembles tagHTML
function getQuoteTags(index){
  var tagHTML= '<p class="tags">'+quotes[index].tags.join('  |  ')+'</p>';
  return tagHTML;
}

  //assembles rgb() value for background-color
function getRandomColor(){
  var randColor= 'rgb('+getRandomNum(256)+', '+getRandomNum(256)+', '+getRandomNum(256)+')';
  return randColor;
}

//Applicaton

  //Prints first quote upon loading the page
window.onload=printQuote();

  //Sets 15 second interval.
window.setInterval(printQuote(), 15000);

//Sets up button
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

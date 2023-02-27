// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array From Letters
let lettersArray = Array.from(letters);
//console.log( lettersArray);

// Select Letters Container
let lettersContainer = document.querySelector(".letters");

// Generate Letters
lettersArray.forEach(letter => {

  // Create Span
  let span = document.createElement("span");

  // Create Letter Text Node
  let theLetter = document.createTextNode(letter);

  // Append The Letter To Span
  span.appendChild(theLetter);

  // Add Class On Span
  span.className = 'letter-box';

  // Append Span To The Letters Container
  lettersContainer.appendChild(span);

});

//Object Of Word  + Categories
//------------------------------------
const words = {
  programming: ["php", "javascript", "go", "scala", "fortran", "mysql", "python"],
  movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
  people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}
//Get Random Property
//------------------------------------

let allKeys = Object.keys(words);
//console.log(allKeys);

//Random  Number On Keys length
//------------------------------------

let randomPropNumber = Math.floor(Math.random() * allKeys.length);
//console.log(randomPropNumber);

//Category
//------------------------------------

let randomPropName = allKeys[randomPropNumber];
//console.log(randomPropName);

//Category Word
//------------------------------------

//console.log(words["people"]);
let randomPropValue = words[randomPropName];
//console.log(randomPropValue);

//Random  Number On Words length
//------------------------------------

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

//console.log(randomValueNumber);
//console.log(randomPropValue);

//The Chosen Word
//------------------------------------

//console.log(randomPropValue[randomValueNumber]);
let randomValueValue = randomPropValue[randomValueNumber];
//console.log(randomValueValue);

//Set Category Info
//------------------------------------

document.querySelector(".game-info .category span").innerHTML = randomPropName;

//Select Letter Guess Element
//------------------------------------

lettersGuessContainer = document.querySelector(".letters-guess");

//Convert  Chosen Word To Array
//------------------------------------

let lettersAndSpace = Array.from(randomValueValue);
//console.log(lettersAndSpace);

//Create  Spans Depend On Word
//---------------------------------

lettersAndSpace.forEach(letter => {

  //Create  Empty  Span
  let emptySpan = document.createElement("span");

  //If Letter Is Space

  if (letter === " ") {

    //Add Class To The span

    emptySpan.className = 'with-space';
  }

  //Append Span To The Letters Guess container

  lettersGuessContainer.appendChild(emptySpan);
});

//Select Guess Spans
//---------------------------------
let guessSpans = document.querySelectorAll('.letters-guess span');

//Set Wrong Attempts
//---------------------------------
let wrongAttempts = 0;

// Select The Draw Element
//---------------------------------
let theDraw = document.querySelector('.hangman-draw');

//Handle Clicking On Letters
//---------------------------------

document.addEventListener('click', (e) => {

  //Set  The Chose Status
  //---------------------------------
  let theStatus = false;

  if (e.target.className === 'letter-box') {

    e.target.classList.add('clicked');

    //Get Clicked Letter
    //---------------------------------
    let theClickedLetter = e.target.innerHTML.toLowerCase();

    //console.log(theClickedLetter);
    //console.log(lettersAndSpace);

    //The Chosen Word
    //---------------------------------
    let theChosenWord = Array.from(randomValueValue.toLowerCase());

    theChosenWord.forEach((wordLetter, wordIndex) => {

      // If The Clicked Letter Equal To One Of The  Chosen Word Letter
      if (theClickedLetter == wordLetter) {

        // Set Status To Correct
        //---------------------------------
        theStatus = true;

        //console.log(`Found At Index Number ${index}`);

        //Loop On All Guess Span
        //---------------------------------
        guessSpans.forEach((span, spanIndex) => {

          if (wordIndex === spanIndex) {
            span.innerHTML = theClickedLetter;
          }
        });
      }

    });
    //Outside Loop
    //---------------------------------
    //console.log(theStatus);

    //If Letter Is Wrong 
    //---------------------------------
    if (theStatus !== true) {

      //Increase The wrong Attempts
      wrongAttempts++;

      //Add Class Wrong On The Draw Element

      theDraw.classList.add(`wrong-${wrongAttempts}`);

      //play fail Sound
      document.getElementById('fail').play();
      if (wrongAttempts === 8) {

        endGame();

        lettersContainer.classList.add('finished');
      }

    } else {
      //play Success Sound
      document.getElementById('success').play();

      

    }
  }
});

//End Game Function

function endGame() {

  //Create Popup Div
  let div = document.createElement('div');

  //Create Text
  let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);

  div.appendChild(divText);
  //Add class On Div
  div.classList = 'popup';
  //Append To The Body
  document.body.appendChild(div);
}









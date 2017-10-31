/*
PlayTheGame(Improbability Engine)
Trying to make a function that runs the card guessing game until it takes it 20 trys to get it write and
reports how many it found the card before it took a chosen amount of trys  to get it right it take before it takes that long.
- Gian Lazzarini Aug,2017
*/

//Card array to make guess selection from
var cards = ['Diamond', 'Spade', 'Heart', 'Club']
var currentCard = 'Heart';

//This variable is for itterating how many attempts it took in the randomlySelectACard function to pick the currentCard variable
var numberOfRandomGuesses = 1;
//This variable is for itterating during a for loop to keep track of how many times the randomlySelectACard broke out of the loop unitl it hit's the desiredNumberOfFailure variable
var numberOfRecursiveLoopCycles = 1;
//This variable is for a desired minimum number of guesses you want it to take to test the math random function's probability
var desiredNumberOfFailure = 90;
//Record Score
var recordScore;

while(numberOfRandomGuesses < desiredNumberOfFailure){
    //THIS IS VERY IMPORTANT, you cannot forget to reset the boolean otherwise it will continue to evaluate as true and never
    //run the code inside.
    var currentCard = 'Heart';
    //Also don't forget to reset numberOfRandomGuesses for each play through
    numberOfRandomGuesses = 1;

    while (currentCard !== 'Spade'){
      console.log(currentCard);
      //Uses math to randomly select one of the cards
      var randomNumber = Math.floor(Math.random() * 4);
      currentCard = cards[randomNumber];
      //Itterates on the numberOfRandomGuesses variable
      numberOfRandomGuesses++;
    }
  console.log('Found the Spade in ' + numberOfRandomGuesses + ' guesses.')

  //After guessing correctly but the number of attempts still returning as less than the desiredNumberOfFailure this itterates 1 per game
  numberOfRecursiveLoopCycles++;
}

console.log('It took ' + numberOfRecursiveLoopCycles + ' runs of the game before it took more than ' + desiredNumberOfFailure + ' attempts to get it right.')

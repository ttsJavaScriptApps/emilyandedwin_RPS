hands = ['rock', 'paper', 'scissors'];

//returns a random value from hands array
function getHand() {
  return hands[parseInt(Math.random()*10)%3];
}

playerOne = {
  name: "Emily",
  hand: getHand,
  wins: 0
}

playerTwo = {
  name: "Edwin",
  hand: getHand,
  wins: 0
}

function playRound(playerOne, playerTwo) {
  // Gets hands from each
  // Determines the winner
  var playerOneHand = playerOne.hand();
  var playerTwoHand = playerTwo.hand();
  var winner;

  if (playerOneHand === "rock" && playerTwoHand === "paper" || playerOneHand === "paper" && playerTwoHand === "scissors" || playerOneHand === "scissors" && playerTwoHand === "rock"){
    //playerTwo wins
    winner = playerTwo.name;
    playerTwo.wins++;
  } else if (playerOneHand !== playerTwoHand) {
    //playerOne wins
    winner = playerOne.name;
    playerOne.wins++;
  } else if (playerOneHand === playerTwoHand) {
    //tie
    // If its a tie, log the hands played and "it's a tie".
    console.log("It's a tie!");
  }
  // Logs the hands played and name of the winner.
  console.log("Emily: " + playerOneHand + ", Edwin: " + playerTwoHand + " --> WINNER: " + winner);
  console.log("SCORE -- Emily:" + playerOne.wins + ", Edwin:" + playerTwo.wins);
  // Returns the winner object (null if no winner)
  return winner;
}

playRound(playerOne, playerTwo);



// function playGame(player1, player2, playUntil) {
//   while (player1.wins && player2.wins < playUntil) {
//     playRound(playerOne, playerTwo);
//   }
// }

// playGame(playerOne, playerTwo, 5);

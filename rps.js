var playerOne;
var playerTwo;
var playerOnePoints = 0;
var playerTwoPoints = 0;


while (playerOnePoints < 3 && playerTwoPoints < 3) {
  playerOne = prompt("Rock, paper, or scissors?");
  playerTwo = parseInt(Math.random()*10)%3;

  if (playerTwo === 0) {
    playerTwo = "rock";
  }
  else if (playerTwo === 1) {
    playerTwo = "paper";
  }
  else {
    playerTwo = "scissors";
  }

  alert("I got " + playerOne + " and computer has " + playerTwo);

  if (playerOne === playerTwo) {
    alert("There's a tie!");
  }
  else if (playerOne === "rock") {
      if (playerTwo === "paper") {
        alert("You won, computer...");
        playerTwoPoints = playerTwoPoints + 1;
      }
      else {
        alert("HAHA I WIN!");
        playerOnePoints = playerOnePoints + 1;
      }
  }
  else if (playerOne === "paper") {
    if (playerTwo === "rock") {
      alert("HAHA I WIN!");
      playerOnePoints = playerOnePoints + 1;
    }
    else {
      alert("You won, computer...");
      playerTwoPoints = playerTwoPoints + 1;
    }
  }
  else if (playerOne === "scissors") {
    if (playerTwo === "rock") {
      alert("You won, computer...");
      playerTwoPoints = playerTwoPoints + 1;
    }
    else {
      alert("HAHA I WIN!");
      playerOnePoints = playerOnePoints + 1;
    }
  }
}


console.log("GAME IS DONE");

if (playerOnePoints === 3) {
  alert("Sorry computer, I won best of three!");
}
else {
  alert("Computer, you won best of three.");
}

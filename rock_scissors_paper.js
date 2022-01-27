const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
} else {
  console.log('Error!');
  }
}

const getComputerChoice = () => {
  const randomNo = Math.floor(Math.random() * 3);
  switch (randomNo) {
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game was a tie!';
  } else {
    if(userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return 'The computer has won the game!';
      } else {
        return 'Congrats, you won!';
      }
    }
    if(userChoice === 'paper') {
      if(computerChoice === 'scissors') {
        return 'The computer has won the game.';
      } else {
        return 'Congrats, you won!'
      }
    }
      if(userChoice === 'scissors') {
        if(computerChoice === 'rock') {
          return 'The computer has won the game';
          } else {
            return 'Congrats, you won!';
          }
        }
        if(userChoice === 'bomb') {
          return 'BOOOM, Congrats you won!!';
        }
      }
    };
    // console.log(determineWinner('scissors', 'paper'));
    // console.log(determineWinner('scissors', 'rock'));
    // console.log(determineWinner('rock', 'rock'));
  


    const playGame = () => {
      const userChoice = getUserChoice('paper');
      const computerChoice = getComputerChoice();
      console.log('You threw: ' + userChoice);
      console.log('The computer threw: ' + computerChoice);

      console.log(determineWinner(userChoice, computerChoice));
    };

    playGame();

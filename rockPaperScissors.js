console.log('hi');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === ('rock' || 'paper' || 'scissors')) {
    return userInput;
  } else {
    console.log('incorrect input');
  }
}

function getComputerChoice() {
  const randomizer = Math.floor(Math.random() * 3);
  switch (randomizer) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'the game was a tie';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      console.log('Computer won');
    } else {
      console.log('You won');
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      console.log('Computer won');
    } else {
      console.log('You won');
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      console.log('Computer won');
    } else {
      console.log('You won');
    }
  }
}

function playGame() {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

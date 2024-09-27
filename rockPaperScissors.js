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

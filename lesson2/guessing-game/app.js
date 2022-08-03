document.addEventListener('DOMContentLoaded', () => {
  const pFeedback = document.querySelector('body > main > p');
  const inputNumber = document.querySelector('input[type="text"]');
  const form = document.querySelector('form');
  const aNewGame = document.querySelector('a');
  const submitButton = document.querySelector('input[type="submit"]');

  // make a guess for the random number
  let rngNumber = Math.ceil(Math.random() * 100);
  let numberOfGuesses = 0;

  pFeedback.innerHTML = 'Guess a number between 1 and 100';

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userGuess = Number(inputNumber.value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      pFeedback.innerHTML = 'Not a valid number';
      return
    }
    numberOfGuesses++;
    if (userGuess === rngNumber) {
      pFeedback.innerHTML = `You guessed it. It took you ${numberOfGuesses} guesses`;
      submitButton.setAttribute('disabled', true) 
      submitButton.style.boxShadow = '0';

    } else if (userGuess > rngNumber) {
      pFeedback.innerHTML = `My number if lower than ${userGuess}`;
    } else {
      pFeedback.innerHTML = `My number if higher than ${userGuess}`;
    }
  })

  aNewGame.addEventListener('click', (event) => {
    event.preventDefault();
    pFeedback.innerHTML = 'Guess a number between 1 and 100';
    numberOfGuesses = 0;
    rngNumber = Math.ceil(Math.random() * 100);
  })
})

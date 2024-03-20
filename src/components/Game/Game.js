import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js'

import GuessResults from '../GuessResults'
import GuessInput from '../GuessInput'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const startingGuesses = []
  for (let i=0; i<NUM_OF_GUESSES_ALLOWED; i++) {
    startingGuesses.push(null)
  }
  const [guesses, setGuesses] = React.useState(startingGuesses)

  function checkGuess(newGuess) {
    const newGuesses = [...guesses]
    newGuesses[newGuesses.indexOf(null)] = newGuess
    setGuesses(newGuesses)
  }

  return <>
    <GuessResults guesses={guesses} answer={answer} />
    <GuessInput checkGuess={checkGuess} />
  </>;
}

export default Game;

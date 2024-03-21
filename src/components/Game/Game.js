import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js'

import GuessResults from '../GuessResults'
import GuessInput from '../GuessInput'
import WinBanner from '../WinBanner'
import LoseBanner from '../LoseBanner'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const startingGuesses = []
  for (let i = 0; i < NUM_OF_GUESSES_ALLOWED; i++) {
    startingGuesses.push(null)
  }
  const [guesses, setGuesses] = React.useState(startingGuesses)
  const [gameStatus, setGameStatus] = React.useState('play')

  function checkGuess(newGuess) {
    const newGuesses = [...guesses]
    newGuesses[newGuesses.indexOf(null)] = newGuess
    setGuesses(newGuesses)
    if (newGuess === answer) {
      setGameStatus('win')
    } else if (newGuesses.indexOf(null) === -1) {
      setGameStatus('lose')
    }
  }

  return <>
    <GuessResults guesses={guesses} answer={answer} />
    {gameStatus === 'play' &&
      <GuessInput checkGuess={checkGuess} />}
    {gameStatus === 'win' &&
      <WinBanner>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{guesses.length} guesses</strong>.
      </WinBanner>}
    {gameStatus === 'lose' &&
      <LoseBanner>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </LoseBanner>}

  </>;
}

export default Game;

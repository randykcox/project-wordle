import React from 'react';
import Guess from '../Guess'

function GuessResults({ guesses, answer }) {
  return <>
    <div className="guess-results">
      {guesses.map((word, index) => (
        <Guess key={index} word={word} answer={answer} />
      )
      )}
    </div>
  </>
}

export default GuessResults;

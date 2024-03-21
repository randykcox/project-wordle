import React from 'react';

import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'
/*
  checkGuess('WHALE', 'LEARN');
  Returns:

  [
    { letter: 'W', status: 'incorrect' },
    { letter: 'H', status: 'incorrect' },
    { letter: 'A', status: 'correct' },
    { letter: 'L', status: 'misplaced' },
    { letter: 'E', status: 'misplaced' },
  ]
*/

function Guess({ word, answer }) {
  const wordResult = checkGuess(word, answer)
  return (
    <>
      <p className="guess">
        {range(5).map(num => (
          wordResult ?
            <span key={num} className={"cell " + wordResult[num].status}>
              {wordResult[num].letter}
            </span>
            :
            <span key={num} className="cell"></span>
        ))}
      </p>
    </>
  )
}

export default Guess;

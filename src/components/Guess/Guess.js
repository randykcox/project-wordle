import React from 'react';



function Guess({ word }) {
  return <>
    <p className="guess">
      <span className="cell">{word && word[0]}</span>
      <span className="cell">{word && word[1]}</span>
      <span className="cell">{word && word[2]}</span>
      <span className="cell">{word && word[3]}</span>
      <span className="cell">{word && word[4]}</span>
    </p>
  </>
}

export default Guess;

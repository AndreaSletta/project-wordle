import React, { useState } from 'react';

function GuessInput() {
  const [guess, setGuess] = useState('');

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();

        if (guess.length === 5) {
          console.log('Guess:', guess);
          setGuess('');
        } else {
          window.alert('Please enter a 5 letter word.');
        }
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;

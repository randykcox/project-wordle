import React from 'react';

function GuessInput() {
	const [guess, setGuess] = React.useState('')

	function submitGuess(event) {
		event.preventDefault()

		// Do nothing if shorter than 5 characters
		if (guess.length < 5) {
			console.log('Guess too short. Ignoring form submit.')
			return
		}

		console.log({ guess })
		setGuess('')
	}

	function validateGuess(event) {
		let newGuess = event.target.value.toUpperCase().slice(0, 5)
		setGuess(newGuess)
	}
	return (
		<form className="guess-input-wrapper"
			onSubmit={submitGuess}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				required
				minLength={5}
				maxLength={5}
				id="guess-input"
				type="text"
				value={guess}
				onChange={validateGuess}
			/>
		</form>
	)
}

export default GuessInput;

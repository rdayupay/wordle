import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [guessTerm, setGuessTerm] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleSubmitGuess(guessTerm);

    setGuessTerm("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required={true}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={guessTerm}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuessTerm(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;

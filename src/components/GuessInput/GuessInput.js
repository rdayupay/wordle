import React from "react";

function GuessInput() {
  const [guessTerm, setGuessTerm] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log({ guessTerm });

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

import React from "react";
import ChoiceButtons from "./ChoiceButtons";
import Main from "./Main";
import Results from "./Results";

function App() {
  const [playerScore, setPlayerScore] = React.useState(0);
  const [computerScore, setComputerScore] = React.useState(0);
  const [options, setOptions] = React.useState(["rock", "paper", "scissors"]);
  const [playerChoice, setPlayerChoice] = React.useState("");
  const [computerChoice, setComputerChoice] = React.useState("");
  const [winnerResults, setWinnerResults] = React.useState("");

  const handleClick = (e) => {
    const tempCompChoice = compChoice();
    setComputerChoice(tempCompChoice);
    setPlayerChoice(e.target.value);
    setWinnerResults(compareChoices(tempCompChoice, e.target.value));
  };

  const handleReset = () => {
    setComputerChoice("");
    setPlayerChoice("");
    setWinnerResults("");
    setOptions(["rock", "paper", "scissors"]);
  };

  const compChoice = () => {
    return options[Math.floor(Math.random() * options.length)];
  };

  const compareChoices = (computer, player) => {
    console.log("player", player);
    console.log("computer", computer);
    console.log("-------");

    if (player === computer) {
      return "Draw";
    } else if (
      (player === options[0] && computer === options[2]) ||
      (player === options[1] && computer === options[0]) ||
      (player === options[2] && computer === options[1])
    ) {
      return "You Win";
    }
    return "You Lost";
  };

  return (
    <div className="container" data-test="component-app">
      <Main />
      <Results
        playerChoice={playerChoice}
        computerChoice={computerChoice}
        playerScore={playerScore}
        computerScore={computerScore}
        winnerResults={winnerResults}
      />
      <ChoiceButtons handleClick={handleClick} handleReset={handleReset} />
    </div>
  );
}

export default App;

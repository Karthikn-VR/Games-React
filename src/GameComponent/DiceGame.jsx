import { useState } from "react";
import bgImage from "../assets/image.png";

export default function DiceGame() {
  const [userDice, setUserDice] = useState(0);
  const [compDice, setCompDice] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);

  const rollDice = () => {
    const userRoll = Math.floor(Math.random() * 6) + 1;
    const compRoll = Math.floor(Math.random() * 6) + 1;

    setUserDice(userRoll);
    setCompDice(compRoll);

    if (userRoll > compRoll) setUserScore((s) => s + 1);
    else if (userRoll < compRoll) setCompScore((s) => s + 1);
  };

  const resetGame = () => {
    setUserDice(0);
    setCompDice(0);
    setUserScore(0);
    setCompScore(0);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div className="bg-light bg-opacity-75 p-5 rounded-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center fw-bold mb-3">Dice Roll Game</h2>
        <div className="text-center fs-1 mb-3">
          You: {userDice || ""} <i className={`bi bi-dice-${userDice}`}></i> CPU: {compDice || ""}
        </div>
        <div className="d-flex justify-content-between mb-3 fw-bold">
          <div className="text-success">Your Score: {userScore}</div>
          <div className="text-danger">Computer: {compScore}</div>
        </div>
        <button className="btn btn-outline-primary w-100 mb-2" onClick={rollDice}>
          Roll Dice
        </button>
        <button className="btn btn-secondary w-100" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
}

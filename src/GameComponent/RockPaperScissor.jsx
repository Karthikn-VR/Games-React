import React, { useState } from "react";
import image from "../assets/image.png";

export default function RockPaperScissors() {
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [userChoice, setUserChoice] = useState("");
  const [compChoice, setCompChoice] = useState("");
  const [giveupMsg, setGiveupMsg] = useState("");
  const [showMsg, setShowMsg] = useState(false);

  const choices = ["rock", "paper", "scissors"];

  const setChoice = (value) => {
    const computer = choices[Math.floor(Math.random() * choices.length)];

    setUserChoice(value);
    setCompChoice(computer);
    setShowMsg(false); // hide previous message

    if (value === computer) {
      // Draw – no score update
    } else if (
      (value === "rock" && computer === "scissors") ||
      (value === "paper" && computer === "rock") ||
      (value === "scissors" && computer === "paper")
    ) {
      setUserScore((prev) => prev + 1);
    } else {
      setCompScore((prev) => prev + 1);
    }
  };

  const handleGiveUp = () => {
    setGiveupMsg(
      userScore === compScore
        ? `🤝 It's a Draw! Both scored ${userScore}`
        : userScore > compScore
        ? `You Won with score ${userScore}`
        : `Computer Won with score ${compScore}`
    );
    setShowMsg(true);
  };

  const resetGame = () => {
    setUserScore(0);
    setCompScore(0);
    setUserChoice("");
    setCompChoice("");
    setGiveupMsg("");
    setShowMsg(false);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div
        className="p-5 border rounded-4 shadow bg-light bg-opacity-75"
        style={{ maxWidth: "650px", width: "100%" }}
      >
        <div className="mb-4 text-center">
          <h2 className="mb-2 text-dark fw-bold">Rock Paper Scissors</h2>
          <hr className="text-dark" />
        </div>

        {choices.map((item, index) => (
          <div className="row mb-3 align-items-center" key={index}>
            <div className="col-4 text-start fw-bold">
              <h5 className="text-capitalize mb-0">{item}:</h5>
            </div>
            <div className="col-8">
              <button
                type="button"
                className="btn btn-outline-dark btn-lg w-100"
                onClick={() => setChoice(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </div>
          </div>
        ))}

        <div className="text-white p-4 rounded-4 bg-dark shadow-sm mt-4">
          <h5 className="mb-3 fw-semibold border-bottom pb-2">Game Stats</h5>

          <div className="row mb-2">
            <div className="col-6 fw-bold text-warning">Your Choice:</div>
            <div className="col-6 text-end">{userChoice}</div>
          </div>

          <div className="row mb-2">
            <div className="col-6 fw-bold text-info">Computer Choice:</div>
            <div className="col-6 text-end">{compChoice}</div>
          </div>

          <div className="row mb-2">
            <div className="col-6 fw-bold text-success">Your Score:</div>
            <div className="col-6 text-end">{userScore}</div>
          </div>

          <div className="row">
            <div className="col-6 fw-bold text-danger">Computer Score:</div>
            <div className="col-6 text-end">{compScore}</div>
          </div>
        </div>

        <div className="d-flex justify-content-between gap-3 mt-4">
          <button type="button" className="btn btn-danger w-50" onClick={handleGiveUp}>
            Give Up
          </button>
          <button type="button" className="btn btn-secondary w-50" onClick={resetGame}>
            Reset
          </button>
        </div>

        {showMsg && (
          <div className="alert alert-info text-center mt-4 fw-semibold fs-5">
            {giveupMsg}
          </div>
        )}
      </div>
    </div>
  );
}

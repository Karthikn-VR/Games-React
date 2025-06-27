import { useState } from "react";
import bgImage from "../assets/image.png"; // change to your preferred image

export default function NumberGuessGame() {
  const [useinput, setUserInput] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [compinput, setCompInput] = useState(0);
  const [compScore, setCompScore] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  function CheckNumber(e) {
    e.preventDefault();
    const userNum = parseInt(useinput);
    const newCompNum = generateRandomNumber();
    setCompInput(newCompNum);

    if (userNum === newCompNum) {
      setUserScore((prev) => prev + 1);
    } else {
      setCompScore((prev) => prev + 1);
    }
  }

  function resetGame() {
    setUserInput(0);
    setCompInput(0);
    setUserScore(0);
    setCompScore(0);
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <form
        className="p-5 border rounded-4 shadow bg-light bg-opacity-75"
        style={{ maxWidth: "500px", width: "100%" }}
        onSubmit={CheckNumber}
      >
        <div className="mb-4 text-center">
          <h2 className="mb-2 text-dark fw-bold">Guess The Number</h2>
          <hr className="text-dark" />
        </div>

        <div className="input-group input-group-lg mb-4">
          <input
            type="number"
            className="form-control"
            placeholder="Enter number"
            onChange={(e) => setUserInput(e.target.value)}
            required
            min={0}
            max={9}
          />
          <button className="btn btn-outline-primary" type="submit">
            Check
          </button>
        </div>

        <div className="text-dark fw-semibold">
          <div className="row mb-2">
            <div className="col-6">Your Score:</div>
            <div className="col-6 text-end text-success">{userScore}</div>
          </div>
          <div className="row mb-2">
            <div className="col-6">Computer Score:</div>
            <div className="col-6 text-end text-danger">{compScore}</div>
          </div>
          <div className="row">
            <div className="col-6">Computer Picked:</div>
            <div className="col-6 text-end text-info">{compinput}</div>
          </div>
        </div>

        <div className="text-center mt-4">
          <button type="button" className="btn btn-secondary w-100" onClick={resetGame}>
            Reset Game
          </button>
        </div>
      </form>
    </div>
  );
}

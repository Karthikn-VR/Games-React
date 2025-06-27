import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import RockPaperScissors from "../GameComponent/RockPaperScissor";
import QrGenerator from "../GameComponent/QRGenerator";
import NumberGuessGame from "../GameComponent/NumberGuessGame";
import DiceGame from "../GameComponent/DiceGame";
import GameConsole from "../GameComponent/GameConsole";

export default function Homepage() {
  const [currentView, setCurrentView] = useState(0);

  const RenderView = () => {
    switch (currentView) {
      case 1:
        return <RockPaperScissors />;
      case 2:
        return <QrGenerator />;
      case 3:
        return <NumberGuessGame />;
      case 4:
        return <DiceGame />;  
      default:
        return <GameConsole />;
    }
  };

  return (
    <div>
      <div className="position-relative">
        <button
          className="btn btn-outline-light position-absolute p-2"
          type="button"
          style={{ top: "75px", right: "20px" }}
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          Open Console
        </button>
      </div>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-theme ="dark"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Game Console
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <hr />
        <div className="offcanvas-body position-relative">
          <div className="d-grid gap-3">
            <button
              className="btn btn-outline-light w-100"
              type="button"
              onClick={() => setCurrentView(1)}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              Rock Paper Scissor
            </button>
            <button
              className="btn btn-outline-light w-100"
              type="button"
              onClick={() => setCurrentView(2)}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              QR Generator
            </button>
            <button
              className="btn btn-outline-light w-100"
              type="button"
              onClick={() => setCurrentView(3)}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              Number Guess Game
            </button>
            <button
              className="btn btn-outline-light w-100"
              type="button"
              onClick={() => setCurrentView(4)}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              Dice Game
            </button>
            <button
              className="btn btn-outline-danger w-100"
              type="button"
              onClick={() => setCurrentView(0)}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              Back To Home
            </button>
          </div>
        </div>
      </div>

      <div>{RenderView()}</div>
    </div>
  );
}

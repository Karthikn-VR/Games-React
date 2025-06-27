import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/image.png'; 

export default function AboutPage() {
  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        padding: '3rem 1rem',
      }}
    >
      <div className="container bg-dark bg-opacity-75 text-white p-5 rounded-4 shadow-lg">
        <h1 className="text-center mb-4 display-4 fw-bold text-light">About Game Vault</h1>

        <p className="lead text-center mb-5 text-light">
          Game Vault is a collection of fun and engaging mini-games built using React and Bootstrap.
          Whether you're testing your luck or sharpening your mind, Game Vault offers something for everyone.
        </p>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="p-4 bg-black bg-opacity-50 rounded-3 h-100">
              <h4 className="mb-3 text-info">🎮 Games Included</h4>
              <ul className="list-unstyled fs-5"><i class="bi bi-joystick"></i>
                <li>Rock Paper Scissors</li>
                <li>Number Guessing Game</li>
                <li>QR Code Generator</li>
                <li>Dice Roll Game</li>
                <li>Memory Match Game</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 bg-black bg-opacity-50 rounded-3 h-100">
              <h4 className="mb-3 text-info">🛠 Built With</h4>
              <ul className="list-unstyled fs-5">
                <li>⚛️ React.js</li>
                <li>⚡ Vite</li>
                <li>🎨 Bootstrap 5</li>
                <li>🌐 GitHub Pages for Hosting</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <Link to="/" className="btn btn-outline-light">← Back to Home</Link>
        </div>
      </div>
      </div>
    
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/image.png'; // Dark background image

export default function PricingPage() {
  return (
    <>
    <div
      className="min-vh-100 align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        padding: '3rem 1rem',
      }}
    >
      
        <h1 className="text-center mb-4 display-4 fw-bold text-light">Pricing Plans</h1>
        <p className="lead text-center mb-5 text-light">
          Whether you're broke or a billionaire, we've got a plan for you. But hey, it's all free anyway 😉
        </p>

        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="card bg-black bg-opacity-50 text-white border-light h-100 shadow-sm">
              <div className="card-header text-center fs-4 fw-bold">Free Plan</div>
              <div className="card-body text-center">
                <h2 className="card-title text-success">₹0 / Forever</h2>
                <ul className="list-unstyled my-4">
                  <li>✔ Unlimited Fun</li>
                  <li>✔ No Ads (We can't afford them)</li>
                  <li>✔ All Games Unlocked</li>
                  <li>✔ No Credit Card Needed</li>
                </ul>
                <button className="btn btn-outline-success">Start Playing</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-black bg-opacity-50 text-white border-light h-100 shadow-sm">
              <div className="card-header text-center fs-4 fw-bold">💎 Premium Plan</div>
              <div className="card-body text-center">
                <h2 className="card-title text-info">₹9,99,999 (Just Kidding)</h2>
                <ul className="list-unstyled my-4">
                  <li>✔ Bragging Rights</li>
                  <li>✔ Eternal Glory</li>
                  <li>✔ Personalized Thank You</li>
                  <li>✔ Still the Same Games </li>
                </ul>
                <button className="btn btn-outline-info">Fake Upgrade</button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      
      <div
      className="min-vh-100 align-items-center justify-content-center"
    >
      <div className="container bg-dark bg-opacity-75 text-white p-5 rounded-4 shadow-lg">
        <h1 className="text-center mb-4 display-5 fw-bold text-light">📩 Contact Us</h1>
        <p className="lead text-center text-light mb-5">
          We'd love to hear your feedback, game ideas, or jokes. Drop us a message below!
        </p>

        <form className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-light">Your Name</label>
            <input type="text" className="form-control" id="name" placeholder="Player One" />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label text-light">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="karthiknvr@gmail.com" />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label text-light">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="U r Comments"></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-outline-success px-4 py-2 fw-semibold">Send Message</button>
          </div>
        </form>

        <div className="text-center mt-5">
          <Link to="/" className="btn btn-outline-light">← Back to Home</Link>
        </div>
      </div>
    
    </div>
    </div>
    </>
  
  );
}

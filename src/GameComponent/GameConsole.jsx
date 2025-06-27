import 'bootstrap/dist/css/bootstrap.min.css';
import BgImg from '../assets/image.png';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function GameConsole() {
  return (
    <div className="App bg-light text-light vh-100 overflow-hidden">
      
      <nav className="navbar navbar-light border-bottom px-4 py-2">
        <div className="d-flex align-items-center">
          <img
            src={logo}
            alt="game-icon"
            style={{ width: '30px', marginRight: '10px' }}
          />
          <span className="navbar-brand text-light fw-bold mb-0 h1">Game Vault</span>
        </div>
        <div className="d-flex gap-4">
          <Link className="nav-link" to={'/'}>Home</Link>
          <Link className="nav-link" to={'/About'}>About Us</Link>
          <Link className="nav-link" to={'/Pricing'}>Pricing</Link>
        </div>
    
      </nav>
     

     
      <div className="d-flex justify-content-center align-items-center flex-column h-75">
        <img src={BgImg} alt="Background" className="img-fluid" style={{objectFit:'cover',width:'100%'}}/>
      </div>
    </div>
  );
}



import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import AboutPage from './Components/Aboutus';
import PricingPage from './Components/Pricing';
export default function App(){

  return(
    <Routes>
      <Route path='/' element={<Homepage />}/>
       <Route path='/About' element={<AboutPage />} />
      <Route path='/Pricing' element={<PricingPage />} />
    </Routes>
  );
}
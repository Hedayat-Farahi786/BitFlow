// src/App.js
import Navbar from './components/Navbar';
import { Landing } from './components/Landing';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import StartProjectSteps from './components/Steps';

function App() {

  return (
    <div className='w-full overflow-x-hidden'>
      <Landing />
      <Services />
      <About />
      <Portfolio />
      <Testimonials/>
      <StartProjectSteps />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;

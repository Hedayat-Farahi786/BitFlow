// src/App.js
import Navbar from './components/Navbar';
import { Landing } from './components/Landing';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {

  return (
    <div className='w-full overflow-x-hidden'>
      <Landing />
      <Services />
      {/* <Steps /> */}
      <About />
      <Portfolio />
      <Testimonials/>
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;

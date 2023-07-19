// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counterSlice';
import { Button } from 'flowbite-react';
import Navbar from './components/Navbar';
import { Landing } from './components/Landing';
import Services from './components/Services';
import Steps from './components/Steps';
import Technologies from './components/Technologies';
import About from './components/About';
import Testimonials from './components/Testimonials';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <section id='home' className='w-full overflow-x-hidden'>
      <Navbar />
      <Landing />
      <Services />
      {/* <Steps /> */}
      <About />
      <Testimonials/>
      <GetInTouch />
      <Footer />
    </section>
  );
}

export default App;

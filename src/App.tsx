import { useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';

import About from './sections/About';
import Approach from './sections/Approach';
import Hero from './sections/Hero';
import Quote from './sections/Quote';
import Workshops from './sections/Workshops';
import Contact from './sections/Contact';
import Testimonial from './sections/Testimonial';
import Footer from './components/Footer';

import './index.css';

function App() {
  const sectionRefs = {
    approach: useRef(null),
    workshops: useRef(null),
    about: useRef(null),
    contact: useRef(null),
  };

  return (
    <BrowserRouter>
      <Hero refs={sectionRefs} />
      <Approach ref={sectionRefs.approach} />
      <Workshops ref={sectionRefs.workshops} />
      <Quote />
      <About ref={sectionRefs.about} />
      <Testimonial />
      <Contact ref={sectionRefs.contact} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

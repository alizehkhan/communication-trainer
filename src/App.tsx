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
      <div className="bg-gray-100 py-24 font-serif md:text-6xl text-4xl text-center md:leading-tight tracking-[-1px] leading-snug text-gray-700">
        <p className="container mx-auto">
          Stay connected, motivated and create {''}
          <span className="italic text-amber-700">
            psychological safety
          </span>{' '}
          {''}
          for difficult conversations.
        </p>
      </div>
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

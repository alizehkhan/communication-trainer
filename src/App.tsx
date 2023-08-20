import { useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';

import About from './sections/About';
import Approach from './sections/Approach';
import Hero from './sections/Hero';
import Quote from './sections/Quote';
import Workshops from './sections/Workshops';
import Contact from './sections/Contact';
import Testimonial from './sections/Testimonial';
import Offering from './sections/Offering';
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
      <Offering />
      <Approach ref={sectionRefs.approach} />
      <div className="bg-gray-100 py-24 font-serif md:text-5xl text-4xl text-center md:leading-tight tracking-[-1px] leading-snug text-gray-600">
        <p className="max-w-4xl px-4 mx-auto">
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
      <img
        src="coaching.jpg"
        alt=""
        className="md:h-[75vh] h-60 object-cover w-full"
      />
      <About ref={sectionRefs.about} />
      <Testimonial />
      <img
        src="workshop.jpg"
        alt=""
        className="md:h-[75vh] h-60 object-cover w-full"
      />
      <Contact ref={sectionRefs.contact} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

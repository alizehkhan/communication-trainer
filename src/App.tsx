import { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactPlayer from "react-player";

import About from "./sections/About";
import Approach from "./sections/Approach";
import Hero from "./sections/Hero";
import Quote1 from "./sections/Quote1";
import Quote2 from "./sections/Quote2";
import Workshops from "./sections/Workshops";
import Contact from "./sections/Contact";
import Testimonial from "./sections/Testimonial";
import Offering from "./sections/Offering";
import Footer from "./components/Footer";

import "./index.css";

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
      <Quote1 refs={sectionRefs} />
      <Workshops ref={sectionRefs.workshops} />
      <Quote2 />
      <img
        src="coaching.jpg"
        alt=""
        className="aspect-video w-full object-cover md:aspect-[16/6]"
      />
      <About refs={sectionRefs} ref={sectionRefs.about} />
      <Testimonial />
      <ReactPlayer
        url="workshop.mp4"
        playing
        loop
        muted
        width="100vw"
        height="100%"
      />
      <Contact ref={sectionRefs.contact} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

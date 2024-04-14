// eslint-disable-next-line import/no-unresolved
import { Analytics } from "@vercel/analytics/react";
import { useRef } from "react";
import ReactPlayer from "react-player";
import { BrowserRouter } from "react-router-dom";

import { Footer } from "./components/Footer";
import { About } from "./sections/About";
import { Approach } from "./sections/Approach";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Offering } from "./sections/Offering";
import { Quote1 } from "./sections/Quote1";
import { Quote2 } from "./sections/Quote2";
import { Testimonial } from "./sections/Testimonial";
import { Workshops } from "./sections/Workshops";

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
      <Workshops ref={sectionRefs.workshops} />
      <Quote1 refs={sectionRefs} />
      <Approach ref={sectionRefs.approach} />
      <Quote2 refs={sectionRefs} />
      <img
        src="coaching.jpg"
        alt=""
        className="aspect-video w-full object-cover md:aspect-[16/7]"
      />
      <About refs={sectionRefs} ref={sectionRefs.about} />
      <Testimonial />
      <ReactPlayer
        url="workshop.mp4"
        playing
        loop
        muted
        width="100%"
        height="100%"
      />
      <Contact ref={sectionRefs.contact} />
      <Footer />
      <Analytics />
    </BrowserRouter>
  );
}

export default App;

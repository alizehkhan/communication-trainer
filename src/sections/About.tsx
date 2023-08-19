import { Ref, forwardRef } from 'react';

const About = forwardRef((_, ref: Ref<HTMLDivElement>) => (
  <div className="container mx-auto py-20" id="about" ref={ref}>
    <h2 className="uppercase text-gray-700 tracking-wider font-bold mb-4">
      About
    </h2>
    <p className="text-gray-700 font-serif md:text-5xl text-4xl tracking-[-1px] font-bold">
      Hi, I'm Haneen
    </p>
    <p className="text-xl max-w-2xl text-gray-600 mt-8">
      Haneen is a coach, facilitator and teacher conducting one-on-one coaching
      and courses in communication & conflict. She developed her integrative
      approach over the last 5 years, and has taught hundreds of people.
    </p>
    <p className="text-xl max-w-2xl text-gray-600 mt-8">
      She helps employees uproot unhelpful communication patterns that cause
      conflict avoidance, micro-management, resentment and demotivation! And
      transform this into a heart-led culture that brings more efficiency and
      psychological safety into the workplace.
    </p>
    <p className="text-xl max-w-2xl text-gray-600 mt-8">
      Most communication courses are all about a technique and focus on what to
      say or how to say it. But this misses a crucial first step: to develop a
      stronger relationship to your feelings and how you treat them. From there,
      you'll be able to understand what you need from a co-worker or supervisor
      and deliver this kindly & directly, rather than abrasively or tacitly.
    </p>
    <button className="bg-amber-700 text-white py-3 px-4 mt-4 rounded-md font-bold hover:bg-amber-800">
      Get in touch
    </button>
  </div>
));

export default About;

import { Ref, forwardRef } from "react";

// eslint-disable-next-line react/display-name
const About = forwardRef(
  ({ refs }: { refs: any }, ref: Ref<HTMLDivElement>) => (
    <div className="container mx-auto py-20" id="about" ref={ref}>
      <div className="max-w-[70ch]">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-600">
          About
        </h2>
        <p className="font-serif text-4xl font-semibold tracking-[-1px] text-gray-600 md:text-5xl">
          Hi, I&apos;m Haneen
        </p>
        <p className="mt-6 text-lg text-gray-600">
          I am a coach, facilitator and teacher conducting one-on-one coaching
          and courses in communication & conflict. I developed my integrative
          approach over the last 5 years, and have taught hundreds of people.
        </p>
        <p className="mt-6 text-lg text-gray-600">
          I help employees uproot unhelpful communication patterns that cause
          conflict avoidance, micro-management, resentment and demotivation! And
          transform this into a heart-led culture that brings more efficiency
          and psychological safety into the workplace.
        </p>
        <p className="mt-6 text-lg text-gray-600">
          Most communication courses are all about a technique and focus on what
          to say or how to say it. But this misses a crucial first step: to
          develop a stronger relationship to your feelings and how you treat
          them. From there, you&apos;ll be able to understand what you need from
          a co-worker or supervisor and deliver this kindly & directly, rather
          than abrasively or tacitly.
        </p>
        <a
          className="mt-4 inline-block rounded-md bg-amber-700 px-6 py-3 font-semibold text-white hover:bg-amber-800"
          href="#contact"
          onClick={(event) => {
            event?.preventDefault();
            refs["contact"].current?.scrollIntoView({
              block: "start",
              behavior: "smooth",
            });
          }}
        >
          Get in touch
        </a>
      </div>
    </div>
  ),
);

export default About;

import { Ref, forwardRef } from 'react';

const Approach = forwardRef((_, ref: Ref<HTMLDivElement>) => {
  return (
    <div
      className="bg-gray-800 text-white py-24 text-center"
      id="approach"
      ref={ref}
    >
      <h2 className="uppercase text-white container tracking-wider font-bold mb-4">
        Approach
      </h2>
      <p className="font-serif md:text-5xl text-4xl leading-normal tracking-[-1px] container mx-auto font-bold text-gray-200">
        My approach uses a blend of
      </p>
      <div className="flex justify-center md:mt-20 mt-10 container mx-auto flex-wrap md:gap-24 gap-16">
        <div className="w-[280px] text-center">
          <p className="font-serif text-2xl mb-3">Non-violent communication</p>
          <p className="text-gray-300">
            An approach to communication that is rooted in sharing one's
            feelings & needs. It is not an attempt to end disagreements, but a
            way to increase empathy and understanding.
          </p>
        </div>
        <div className="w-[280px] text-center">
          <p className="font-serif text-2xl mb-3">
            Internal family systems therapy
          </p>
          <p className="text-gray-300">
            An evidence-based psychotherapy, helping people to access and heal
            their parts such as the “inner critic” and “inner procrastinator”.
          </p>
        </div>
        <div className="w-[280px] text-center">
          <p className="font-serif text-2xl mb-3">Authentic Relating</p>
          <p className="text-gray-300">
            Centered around expressing one's true feelings and emotions, showing
            vulnerability and allowing oneself to connect fully from your heart
            in the company of others.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-16 container mx-auto flex-wrap md:gap-24 gap-16">
        <div className="w-[280px] text-center">
          <p className="font-serif text-2xl mb-3">Radical honesty</p>
          <p className="text-gray-300">
            A process to directly express and get over anger, reduce stress, and
            create real connection with others.
          </p>
        </div>
        <div className="w-[280px] text-center">
          <p className="font-serif text-2xl mb-3">Somatic experiencing</p>
          <p className="text-gray-300">
            A body-oriented therapeutic model that helps heal trauma and other
            stress disorders
          </p>
        </div>
      </div>
    </div>
  );
});

export default Approach;

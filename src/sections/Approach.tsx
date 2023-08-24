import { Ref, forwardRef } from "react";

const Approach = forwardRef((_, ref: Ref<HTMLDivElement>) => {
  return (
    <div
      className="bg-white pb-24 pt-20 text-center text-gray-600"
      id="approach"
      ref={ref}
    >
      <h2 className="container mb-3 text-sm font-bold uppercase tracking-wider text-gray-600">
        Approach
      </h2>
      <p className="container mx-auto font-serif text-4xl font-bold leading-normal tracking-[-1px] text-gray-600 md:text-5xl">
        My approach uses a blend of
      </p>
      <div className="container mx-auto mt-6 flex flex-wrap items-center justify-center gap-12 md:gap-16">
        <div className="w-[280px] text-center">
          <img src="nvc.png" alt="" className="mx-auto mb-4 w-36" />
          <p className="mb-3 font-serif text-2xl font-bold">
            Non-violent communication
          </p>
          <p className="text-gray-600">
            Rooted in sharing one's feelings & needs. It is not an attempt to
            end disagreements, but a way to increase empathy and understanding.
          </p>
        </div>
        <div className="w-[280px] text-center">
          <img src="ifs.png" alt="" className="mx-auto mb-4 w-40" />
          <p className="mb-3 font-serif text-2xl font-bold">
            Internal family systems therapy
          </p>
          <p className="text-gray-600">
            An evidence-based psychotherapy, helping people to access and heal
            their parts such as the “inner critic” and “inner procrastinator”.
          </p>
        </div>
        <div className="w-[280px] text-center">
          <img src="art.png" alt="" className="mx-auto mb-4 w-40" />
          <p className="mb-3 font-serif text-2xl font-bold">
            Authentic Relating
          </p>
          <p className="text-gray-600">
            Centered around expressing one's true feelings and emotions, showing
            vulnerability and allowing oneself to connect fully from your heart
            in the company of others.
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-12 flex flex-wrap items-end justify-center gap-12 md:gap-16">
        <div className="w-[280px] text-center">
          <img src="rh.png" alt="" className="mx-auto mb-2 w-20" />
          <p className="mb-3 font-serif text-2xl font-bold">Radical honesty</p>
          <p className="text-gray-600">
            A process to directly express and get over anger, reduce stress, and
            create real connection with others.
          </p>
        </div>
        <div className="w-[280px] text-center">
          <img src="se.png" alt="" className="mx-auto mb-4 w-40" />
          <p className="mb-3 font-serif text-2xl font-bold">
            Somatic experiencing
          </p>
          <p className="text-gray-600">
            A body-oriented therapeutic model that helps heal trauma and other
            stress disorders
          </p>
        </div>
      </div>
    </div>
  );
});

export default Approach;

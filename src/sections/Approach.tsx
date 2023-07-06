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
      <p className="font-serif md:text-5xl text-4xl leading-normal container mx-auto font-bold text-gray-200">
        My approach uses a blend of
      </p>
      <div className="flex justify-center md:mt-20 mt-10 container mx-auto flex-wrap md:gap-24 gap-16">
        <div className="w-[280px] text-center">
          <p className="font-serif text-2xl mb-3">Non-violent communication</p>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur. Vitae amet consequat nunc
            cras nisl nascetur vitae blandit nam.
          </p>
        </div>
        <div className="w-[280px] text-center">
          <p className="font-serif text-2xl mb-3">
            Internal family systems therapy
          </p>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur. Vitae amet consequat nunc
            cras nisl nascetur vitae blandit nam.
          </p>
        </div>
        <div className="w-[280px] text-center">
          <p className="font-serif text-2xl mb-3">Somatic experiencing</p>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur. Vitae amet consequat nunc
            cras nisl nascetur vitae blandit nam.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-16 container mx-auto flex-wrap md:gap-24 gap-16">
        <div className="w-[280px] text-center">
          <p className="font-serif text-2xl mb-3">Radical honesty</p>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur. Vitae amet consequat nunc
            cras nisl nascetur vitae blandit nam.
          </p>
        </div>
        <div className="w-[280px] text-center">
          <p className="font-serif text-2xl mb-3">Authentic Relating</p>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur. Vitae amet consequat nunc
            cras nisl nascetur vitae blandit nam.
          </p>
        </div>
      </div>
    </div>
  );
});

export default Approach;

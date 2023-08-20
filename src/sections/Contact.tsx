import { Ref, forwardRef } from 'react';

const Contact = forwardRef((_, ref: Ref<HTMLDivElement>) => {
  return (
    <div className="py-24 container" id="contact" ref={ref}>
      <h2 className="uppercase text-gray-600 tracking-wider font-bold mb-4">
        Contact
      </h2>
      <p className="font-serif md:text-5xl text-4xl tracking-[-1px] text-gray-600 font-bold">
        hello@haneenkhan.com
      </p>
      <p className="text-xl max-w-2xl text-gray-600 mt-8">
        All my workshops are easily adapted for companies, and can be offered
        both in-person or online. I'm happy to explore your needs and offer a
        simple solution that delivers.
      </p>
      <button className="bg-amber-700 text-white py-3 px-4 mt-4 rounded-md font-bold hover:bg-amber-800">
        Ask me anything
      </button>
    </div>
  );
});

export default Contact;

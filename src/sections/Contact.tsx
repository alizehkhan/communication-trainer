import { Ref, forwardRef } from 'react';

const Contact = forwardRef((_, ref: Ref<HTMLDivElement>) => {
  return (
    <div className="py-24 container" id="contact" ref={ref}>
      <h2 className="uppercase text-gray-700 tracking-wider font-bold mb-4">
        Contact
      </h2>
      <p className="font-serif text-5xl text-gray-700 font-bold">
        Get in touch
      </p>
      <p className="text-xl max-w-2xl text-gray-600 mt-8">
        Lorem ipsum dolor sit amet consectetur. Libero iaculis at dignissim
        gravida molestie pretium blandit est eu. Condimentum vitae venenatis
        turpis semper. Id leo fermentum est enim.
      </p>
      <button className="bg-amber-700 text-white py-3 px-4 mt-4 rounded-md font-bold hover:bg-amber-800">
        Book a call
      </button>
    </div>
  );
});

export default Contact;

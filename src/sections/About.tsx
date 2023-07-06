import { Ref, forwardRef } from 'react';
import { RoughNotation } from 'react-rough-notation';

const About = forwardRef((_, ref: Ref<HTMLDivElement>) => (
  <div className="container mx-auto py-20" id="about" ref={ref}>
    <h2 className="uppercase text-gray-700 tracking-wider font-bold mb-4">
      About
    </h2>
    <p className="text-gray-700 font-serif md:text-5xl text-4xl font-bold">
      Hi, I'm {''}
      <RoughNotation
        type="underline"
        strokeWidth={3}
        color="#B45309"
        show={true}
        iterations={3}
      >
        Haneen
      </RoughNotation>
    </p>
    <p className="text-xl max-w-2xl text-gray-600 mt-8">
      Lorem ipsum dolor sit amet consectetur. Libero iaculis at dignissim
      gravida molestie pretium blandit est eu. Condimentum vitae venenatis
      turpis semper. Id leo fermentum est enim. Elit cras accumsan at id lacinia
      ac ut. Lorem ipsum dolor sit amet consectetur. Libero iaculis at dignissim
      gravida molestie pretium blandit est eu. Condimentum vitae venenatis
      turpis semper. Id leo fermentum est enim. Elit cras accumsan at id lacinia
      ac ut.
    </p>
  </div>
));

export default About;

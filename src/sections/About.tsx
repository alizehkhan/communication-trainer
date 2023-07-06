import { RoughNotation } from 'react-rough-notation';

const About = () => (
  <div className="container mx-auto my-20">
    <h2 className="uppercase text-gray-700 tracking-wider font-bold mb-4">
      About
    </h2>
    <p className="text-gray-700 font-serif text-5xl font-bold">
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
);

export default About;

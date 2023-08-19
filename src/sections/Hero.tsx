import Navigation from '../components/Navigation';

const Hero = ({ refs }: { refs: any }) => {
  return (
    <div className="bg-[url('/hero.png')] min-h-screen bg-cover">
      <Navigation refs={refs} />
      <div className="container mx-auto flex justify-end mt-20">
        <div>
          <h1 className="text-white md:text-5xl text-4xl font-bold max-w-[500px] font-serif md:leading-[1.12] leading-tight">
            Bring
          </h1>
          <h1 className="text-white md:text-5xl text-4xl font-bold max-w-[500px] font-serif md:leading-[1.12] leading-tight">
            radically clear communication to your workplace
          </h1>
          <p className="text-white max-w-[440px] md:text-xl text-lg mt-2">
            I believe that non-violent communication is the key to bringing
            greater engagement & efficiency in the workplace.
          </p>
          <button className="bg-amber-700 text-white py-3 px-4 mt-4 rounded-md font-bold hover:bg-amber-800">
            Get a quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

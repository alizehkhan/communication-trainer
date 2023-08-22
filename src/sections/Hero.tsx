import Navigation from '../components/Navigation';

const Hero = ({ refs }: { refs: any }) => {
  return (
    <div className="bg-[url('/hero.png')] min-h-screen bg-cover">
      <Navigation refs={refs} />
      <div className="container mx-auto flex mt-20">
        <div>
          <h1 className="text-white opacity-80 md:text-[56px] text-4xl max-w-[520px] font-serif md:leading-[1.12] leading-tight">
            <span className="block">Bring</span> radically clear communication
            to your workplace
          </h1>
          <p className="text-white opacity-80 max-w-[440px] md:text-2xl text-lg mt-2">
            The key to greater engagement & efficiency in the workplace
          </p>
          <button className="bg-amber-700 text-white py-3 px-6 mt-4 rounded-md font-bold hover:bg-amber-800">
            Get a quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

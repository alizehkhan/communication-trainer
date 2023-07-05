import Navigation from '../ components/Navigation';

const Hero = () => {
  return (
    <div className="bg-[url('hero.png')] h-screen bg-cover">
      <Navigation />
      <div className="container mx-auto flex justify-end mt-20">
        <div>
          <h1 className="text-white text-6xl font-bold max-w-[520px] font-serif leading-tight">
            Transform relationships and culture in the workplace
          </h1>
          <p className="text-white max-w-[440px] text-2xl">
            Recreate a sense of community, common purpose and collaboration with
            communication workshops
          </p>
          <button className="bg-amber-700 text-white py-3 px-4 mt-4 rounded-md font-bold">
            Book free consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import Navigation from "../components/Navigation";

const Hero = ({ refs }: { refs: any }) => {
  return (
    <div className="min-h-[100svh] bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat">
      <Navigation refs={refs} />
      <div className="container mx-auto mt-20 flex">
        <div>
          <h1 className="max-w-[520px] font-serif text-4xl leading-tight text-white opacity-80 md:text-[56px] md:leading-[1.12]">
            <span className="block">Bring</span> radically clear communication
            to your workplace
          </h1>
          <p className="mt-2 max-w-[440px] text-lg text-white opacity-80 md:text-2xl">
            The key to greater engagement & efficiency in the workplace
          </p>
          <a
            className="mt-4 inline-block rounded-md bg-amber-700 px-6 py-3 font-bold text-white hover:bg-amber-800 focus:outline focus:outline-4 focus:outline-orange-300 md:mt-6"
            href="#contact"
            onClick={(event) => {
              event?.preventDefault();
              refs["contact"].current?.scrollIntoView({
                block: "start",
                behavior: "smooth",
              });
            }}
          >
            Get a quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

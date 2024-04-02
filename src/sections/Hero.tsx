import { Button } from "../components/Button";
import { Navigation } from "../components/Navigation";

export const Hero = ({ refs }: { refs: any }) => {
  return (
    <div className="hero min-h-[100svh] bg-cover bg-center bg-no-repeat">
      <Navigation refs={refs} />
      <div className="container mx-auto mt-20 flex">
        <div>
          <h1 className="max-w-[465px] font-serif text-4xl font-semibold leading-tight text-white opacity-80 md:text-[56px] md:leading-[1.12]">
            <span className="block">Bring</span> radically clear communication
            to your workplace
          </h1>
          <p className="mt-2 max-w-[360px] text-xl text-white opacity-80">
            The key to greater engagement & efficiency in the workplace
          </p>
          <Button refs={refs} />
        </div>
      </div>
    </div>
  );
};

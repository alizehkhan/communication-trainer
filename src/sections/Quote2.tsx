import { Button } from "../components/Button";

export const Quote2 = ({ refs }: { refs: any }) => {
  return (
    <div className="bg-gray-100 py-24">
      <div className="container mx-auto">
        <p className="max-w-3xl font-serif text-4xl leading-snug tracking-[-1px] text-gray-600 md:text-5xl md:leading-tight">
          Any communication technique can be hurtful or stop working if it is
          coming from strategy instead of {""}
          <span className="italic text-amber-700">authenticity</span>.
        </p>
        <Button refs={refs} />
      </div>
    </div>
  );
};

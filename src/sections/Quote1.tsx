import { Button } from "../components/Button";

export const Quote1 = ({ refs }: { refs: any }) => {
  return (
    <div className="bg-gray-100 py-24">
      <div className="container">
        <p className="max-w-2xl font-serif text-4xl leading-snug tracking-[-1px] text-gray-600 md:text-5xl md:leading-tight">
          Stay connected, motivated and create {""}
          <span className="italic text-amber-700">
            psychological safety
          </span>{" "}
          for difficult conversations.
        </p>
        <Button refs={refs} />
      </div>
    </div>
  );
};

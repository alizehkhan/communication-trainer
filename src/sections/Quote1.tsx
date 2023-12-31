const Quote1 = ({ refs }: { refs: any }) => {
  return (
    <div className="bg-gray-100 py-16 text-center">
      <p className="mx-auto max-w-4xl px-4 font-serif text-4xl leading-snug tracking-[-1px] text-gray-600 md:text-5xl md:leading-tight">
        Stay connected, motivated and create {""}
        <span className="italic text-amber-700">psychological safety</span> for
        difficult conversations.
      </p>
      <a
        className="mt-6 inline-block rounded-md bg-amber-700 px-6 py-3 font-semibold text-white hover:bg-amber-800"
        href="#contact"
        onClick={(event) => {
          event?.preventDefault();
          refs["contact"].current?.scrollIntoView({
            block: "start",
            behavior: "smooth",
          });
        }}
      >
        Get in touch
      </a>
    </div>
  );
};

export default Quote1;

export const Offering = () => {
  return (
    <div className="bg-gray-800 py-20 md:py-24">
      <div className="container mx-auto flex flex-col gap-10 text-gray-300 md:flex-row">
        <div className="flex max-w-md flex-col items-center text-center md:flex-row md:gap-8 md:text-left">
          <img
            src="workshop.jpg"
            alt=""
            className="h-36 w-36 rounded-full object-cover"
          />
          <div>
            <p className="mt-4 font-serif text-3xl md:text-4xl">Workshops</p>
            <p className="mt-2 font-sans text-lg">
              Experiential, live team workshops for 10–100 people
            </p>
          </div>
        </div>
        <div className="flex max-w-md flex-col items-center text-center md:flex-row md:gap-8 md:text-left">
          <img
            src="speaking.png"
            alt=""
            className="h-36 w-36 rounded-full object-cover"
          />
          <div>
            <p className="mt-4 font-serif text-3xl md:text-4xl">
              Speaking engagements
            </p>
            <p className="mt-2 font-sans text-lg">
              Interactive teaching, coaching, and training
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

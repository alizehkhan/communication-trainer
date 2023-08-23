const Offering = () => {
  return (
    <div className="bg-gray-800 py-16 md:py-20">
      <div className="container mx-auto text-gray-300">
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:items-start">
          <div className="flex max-w-lg flex-col items-center text-center md:flex-row md:gap-8 md:text-left">
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
          <div className="flex max-w-lg flex-col items-center text-center md:flex-row md:gap-8 md:text-left">
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
    </div>
  );
};

export default Offering;

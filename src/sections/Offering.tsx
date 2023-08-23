const Offering = () => {
  return (
    <div className="bg-gray-800 py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:items-start">
          <div className="flex max-w-lg items-center gap-8">
            <img
              src="workshop.jpg"
              alt=""
              className="h-36 w-36 rounded-full object-cover"
            />
            <div>
              <p className="mt-4 font-serif text-4xl text-gray-300">
                Workshops
              </p>
              <p className="mt-2 font-sans text-lg text-gray-300">
                Experiential, live team workshops for 10–100 people
              </p>
            </div>
          </div>
          <div className="flex max-w-lg items-center gap-8">
            <img
              src="speaking.png"
              alt=""
              className="h-36 w-36 rounded-full object-cover"
            />
            <div>
              <p className="mt-4 font-serif text-4xl text-gray-300">
                Speaking engagements
              </p>
              <p className="mt-2 font-sans text-lg text-gray-300">
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

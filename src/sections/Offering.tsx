const Offering = () => {
  return (
    <div className="bg-gray-800 py-20">
      <div className="container mx-auto">
        <h2 className="uppercase text-gray-300 tracking-wider font-bold mb-4">
          Offerings
        </h2>
        <div className="flex gap-8 items-center">
          <p className="text-8xl text-gray-500 font-bold font-serif w-10">1</p>
          <div>
            <p className="text-gray-300 text-4xl max-w-[540px] font-serif">
              Workshops
            </p>
            <p className="font-sans text-gray-200 text-lg mt-2">
              Experiential, live team workshops for 10–100 people
            </p>
          </div>
        </div>
        <div className="flex gap-8 items-center mt-8">
          <p className="text-8xl text-gray-500 font-bold font-serif w-10">2</p>
          <div>
            <p className="text-gray-300 text-4xl max-w-[540px] font-serif">
              Speaking engagements
            </p>
            <p className="font-sans text-gray-200 text-lg mt-2">
              Interactive teaching, coaching, and training
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offering;

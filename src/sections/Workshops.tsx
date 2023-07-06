import { col1, col2, col3 } from '../content/workshops';

const Workshops = () => {
  return (
    <div className="container my-24 text-gray-700 text-center">
      <h2 className="uppercase text-gray-700 tracking-wider font-bold mb-4">
        Workshops
      </h2>
      <p className="font-serif text-5xl text-gray-700 font-bold">
        I touch on a range of topics
      </p>
      <div className="flex gap-8 mt-10 flex-wrap justify-center">
        <div className="flex flex-col gap-8">
          {col1.map((topic, index) => (
            <div
              key={index}
              className="bg-gray-100 w-72 py-8 px-4 rounded-md text-center shadow-sm"
            >
              <p className="font-serif font-bold text-lg mb-2">{topic.title}</p>
              <p className="text-lg">{topic.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {col2.map((topic, index) => (
            <div
              key={index}
              className="bg-gray-100 w-72 py-8 px-4 rounded-md text-center shadow-sm"
            >
              <p className="font-serif font-bold text-lg mb-2">{topic.title}</p>
              <p className="text-lg">{topic.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {col3.map((topic, index) => (
            <div
              key={index}
              className="bg-gray-100 w-72 py-8 px-4 rounded-md text-center shadow-sm"
            >
              <p className="font-serif font-bold text-lg mb-2">{topic.title}</p>
              <p className="text-lg">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workshops;

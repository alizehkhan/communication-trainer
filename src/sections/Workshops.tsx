import { Ref, forwardRef } from "react";

import { col1, col2, col3 } from "../content/workshops";

// eslint-disable-next-line react/display-name
const Workshops = forwardRef((_, ref: Ref<HTMLDivElement>) => {
  return (
    <div
      className="container py-20 text-center text-gray-600"
      ref={ref}
      id="workshops"
    >
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-600">
        Workshops
      </h2>
      <p className="font-serif text-4xl font-semibold leading-tight tracking-[-1px] text-gray-600 md:text-5xl">
        I touch on a range of topics
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-8">
        <div className="flex flex-col gap-8">
          {col1.map((topic, index) => (
            <div
              key={index}
              className="w-72 rounded-md bg-gray-100 px-4 py-6 text-center shadow-sm"
            >
              <p className="mb-2 font-serif text-xl font-semibold">
                {topic.title}
              </p>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {col2.map((topic, index) => (
            <div
              key={index}
              className="w-72 rounded-md bg-gray-100 px-4 py-6 text-center shadow-sm"
            >
              <p className="mb-2 font-serif text-xl font-semibold">
                {topic.title}
              </p>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {col3.map((topic, index) => (
            <div
              key={index}
              className="w-72 rounded-md bg-gray-100 px-4 py-6 text-center shadow-sm"
            >
              <p className="mb-2 font-serif text-xl font-semibold">
                {topic.title}
              </p>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Workshops;

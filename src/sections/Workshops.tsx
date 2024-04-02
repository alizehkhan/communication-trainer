import { Ref, forwardRef } from "react";

import { col1, col2, col3, col4 } from "../content/workshops";

// eslint-disable-next-line react/display-name
export const Workshops = forwardRef((_, ref: Ref<HTMLDivElement>) => {
  return (
    <div className="container py-24 text-gray-600" ref={ref} id="workshops">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-wider text-gray-500">
        Workshops
      </h2>
      <p className="font-serif text-4xl font-semibold leading-tight tracking-[-1px] text-gray-600 md:text-5xl">
        My workshops touch on a range of topics...
      </p>
      <div className="mt-16 flex flex-wrap justify-center gap-8">
        <div className="flex flex-1 flex-col gap-8">
          {col1.map((topic, index) => (
            <div
              key={index}
              className="rounded-md bg-gray-50 px-4 py-6 text-center shadow-sm"
            >
              <p className="mb-2 font-serif text-xl font-semibold">
                {topic.title}
              </p>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-8">
          {col2.map((topic, index) => (
            <div
              key={index}
              className="rounded-md bg-gray-50 px-4 py-6 text-center shadow-sm"
            >
              <p className="mb-2 font-serif text-xl font-semibold">
                {topic.title}
              </p>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-8">
          {col3.map((topic, index) => (
            <div
              key={index}
              className="rounded-md bg-gray-50 px-4 py-6 text-center shadow-sm"
            >
              <p className="mb-2 font-serif text-xl font-semibold">
                {topic.title}
              </p>
              <p>{topic.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-8">
          {col4.map((topic, index) => (
            <div
              key={index}
              className="rounded-md bg-gray-50 px-4 py-6 text-center shadow-sm"
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

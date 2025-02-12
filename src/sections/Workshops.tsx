import { Ref, forwardRef } from "react";

import { workshops } from "../content/workshops";

export const Workshops = forwardRef((_, ref: Ref<HTMLDivElement>) => {
  return (
    <div className="container py-24 text-gray-600" ref={ref} id="workshops">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-wider text-gray-500">
        Workshops
      </h2>
      <p className="font-serif text-4xl font-semibold tracking-[-1px] text-gray-600 md:text-5xl md:leading-[1.275]">
        I help employees uproot unhelpful communication patterns that cause
        conflict avoidance, micro-management, resentment and demotivation.
      </p>
      <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] grid-rows-[masonry] gap-8">
        {workshops.map((topic, index) => (
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
  );
});

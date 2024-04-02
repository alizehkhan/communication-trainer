import { Ref, forwardRef } from "react";

import { approaches } from "../content/approaches";

// eslint-disable-next-line react/display-name
export const Approach = forwardRef((_, ref: Ref<HTMLDivElement>) => {
  return (
    <div
      className="container bg-white pb-24 pt-20 text-gray-600"
      id="approach"
      ref={ref}
    >
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-wider text-gray-500">
        Approach
      </h2>
      <p className="mx-auto font-serif text-4xl font-semibold leading-normal tracking-[-1px] text-gray-600 md:text-5xl">
        My approach uses a blend of
      </p>
      <div className="mx-auto mt-12 grid grid-cols-[repeat(auto-fit,minmax(500px,1fr))] items-center gap-8">
        {approaches.map((approach, i) => (
          <div
            key={i}
            className="flex max-w-[500px] flex-col gap-4 md:flex-row md:items-center"
          >
            <img
              src={approach.image}
              alt=""
              className="h-24 w-40 shrink-0 object-contain"
            />
            <div>
              <p className="mb-2 font-serif text-2xl font-semibold">
                {approach.title}
              </p>
              <p className="text-gray-600">{approach.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

import { Ref, forwardRef } from "react";

import { Input } from "../components/Input";
import { TextArea } from "../components/TextArea";

// eslint-disable-next-line react/display-name
export const Contact = forwardRef((_, ref: Ref<HTMLDivElement>) => {
  return (
    <div className="container py-24" id="contact" ref={ref}>
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-wider text-gray-500">
        Contact
      </h2>
      <p className="font-serif text-4xl font-semibold tracking-[-1px] text-gray-600 md:text-5xl">
        Get in touch
      </p>
      <p className="mt-8 max-w-xl text-lg text-gray-600">
        All my workshops are easily adapted for companies, and can be offered
        both in-person or online. I&apos;m happy to explore your needs and offer
        a simple solution that delivers.
      </p>
      <form action="" className="text-gray-700">
        <Input id="name" autoComplete="name" width="md:w-[30ch]" required>
          Name
        </Input>
        <Input
          id="email"
          autoComplete="email"
          width="md:w-[40ch]"
          type="email"
          required
        >
          Email
        </Input>
        <Input
          id="company-website"
          autoComplete="url"
          width="md:w-[40ch]"
          type="url"
          placeholder="https://"
          required
        >
          Company website
        </Input>
        <TextArea
          required
          id="message"
          rows={10}
          hint="Please let me know the goals of your training, the number of people, the length of the training (if known) and anything else you feel is relevant."
          width="md:w-[70ch]"
        >
          Message
        </TextArea>
        <button
          type="submit"
          className="mt-4 rounded-md bg-amber-700 px-6 py-3 font-semibold text-white hover:bg-amber-800"
        >
          Send
        </button>
      </form>
    </div>
  );
});

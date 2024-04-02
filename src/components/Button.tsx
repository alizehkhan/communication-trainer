import { Link } from "react-router-dom";

export const Button = ({ refs }: { refs: any }) => {
  return (
    <Link
      className="mt-6 inline-block rounded-md bg-amber-700 px-6 py-3 font-semibold text-white hover:bg-amber-800"
      to="#contact"
      onClick={(event) => {
        event?.preventDefault();
        refs["contact"].current?.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }}
    >
      Get in touch
    </Link>
  );
};

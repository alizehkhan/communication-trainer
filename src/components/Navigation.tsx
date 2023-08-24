import { LINKS } from "../content/links";

const Navigation = ({ refs }: { refs: any }) => {
  return (
    <header>
      <nav className="container mx-auto flex justify-between py-12 text-white">
        <a href="/" className="font-serif text-2xl hover:no-underline">
          Haneen Khan
        </a>
        <ul className="hidden gap-8 font-bold md:flex">
          {LINKS.map((link, index) => (
            <li key={index}>
              <a
                href={`#${link.to}`}
                onClick={(event) => {
                  event?.preventDefault();
                  refs[link.to].current?.scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                  });
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

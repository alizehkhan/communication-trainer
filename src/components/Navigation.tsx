import { LINKS } from '../content/links';

const Navigation = ({ refs }: { refs: any }) => {
  return (
    <header>
      <nav className="text-white flex justify-between container mx-auto py-10">
        <a href="/" className="font-serif text-xl hover:no-underline">
          Haneen Khan
        </a>
        <ul className="gap-8 hidden md:flex">
          {LINKS.map((link, index) => (
            <li key={index}>
              <a
                href={`#${link.to}`}
                onClick={(event) => {
                  event?.preventDefault();
                  refs[link.to].current?.scrollIntoView({
                    block: 'start',
                    behavior: 'smooth',
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

import { NavLink } from 'react-router-dom';
import { LINKS } from '../content/links';

const Navigation = () => {
  return (
    <header>
      <nav className="text-white flex justify-between container mx-auto py-10">
        <a href="" className="font-serif text-xl">
          Haneen Khan
        </a>
        <ul className="gap-8 hidden md:flex">
          {LINKS.map((link, index) => (
            <li key={index}>
              <NavLink to={link.to}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

const Navigation = () => {
  return (
    <header>
      <nav className="text-white flex justify-between container mx-auto py-10">
        <a href="" className="font-serif text-xl">
          Haneen Khan
        </a>
        <ul className="flex gap-8">
          <li>
            <a href="">Approach</a>
          </li>
          <li>
            <a href="">Workshops</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

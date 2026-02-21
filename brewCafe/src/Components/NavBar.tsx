const menu = [
  { name: "Home", link: "#about" },
  { name: "Menu", link: "/menu" },
  { name: "Galerie", link: "/Galerie" },
  { name: "Our Team", link: "/OurTeam" },
  { name: "Contact", link: "/Contact" },
];

function NavBar() {
  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="absolute inset-0 bg-noir-doux/80 backdrop-blur-md border-b border-beige-creme/10" />

      <div className="relative max-w-7xl mx-auto px-8 flex items-center justify-between h-16">
        <h1
          className="text-2xl font-bold text-beige-creme tracking-wide"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Brew<span className="italic text-caramel">Café</span>
        </h1>

        <ul className="flex items-center gap-8">
          {menu.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="relative text-sm tracking-widest uppercase text-beige-creme/70 hover:text-beige-creme transition-colors duration-300 group"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                {item.name}

                <span className="absolute -bottom-1 left-0 w-0 h-px bg-caramel group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/Contact"
          className="text-xs tracking-widest uppercase px-5 py-2 border border-caramel text-caramel hover:bg-caramel hover:text-noir-doux transition-all duration-300"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Réserver
        </a>
      </div>
    </nav>
  );
}

export default NavBar;

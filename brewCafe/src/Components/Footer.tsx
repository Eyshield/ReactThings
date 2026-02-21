const links = [
  {
    title: "Navigation",
    items: [
      { name: "Home", href: "#" },
      { name: "Menu", href: "/menu" },
      { name: "Galerie", href: "/Galerie" },
      { name: "Our Team", href: "/OurTeam" },
    ],
  },
  {
    title: "Infos",
    items: [
      { name: "À propos", href: "#" },
      { name: "Réservations", href: "/Contact" },
      { name: "Mentions légales", href: "#" },
    ],
  },
];

const socials = [
  { name: "Instagram", href: "#", symbol: "IG" },
  { name: "Facebook", href: "#", symbol: "FB" },
  { name: "TikTok", href: "#", symbol: "TK" },
];

function Footer() {
  return (
    <footer className="relative bg-[#0d0d0d] border-t border-beige-creme/10 pt-20 pb-8 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-px bg-linear-to-r from-transparent via-caramel/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 flex flex-col gap-5">
            <h2
              className="text-4xl font-bold text-beige-creme"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Brew<span className="italic text-caramel">Café</span>
            </h2>
            <p
              className="text-beige-creme/50 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              An artisanal coffee shop in the heart of Paris. Each cup is an
              invitation to slow down, savor, and reconnect.
            </p>

            <div className="flex gap-3 mt-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-9 h-9 flex items-center justify-center border border-beige-creme/15 text-beige-creme/50 text-xs hover:border-caramel hover:text-caramel transition-all duration-300 rounded-md"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {s.symbol}
                </a>
              ))}
            </div>
          </div>

          {/* Liens */}
          {links.map((group) => (
            <div key={group.title} className="flex flex-col gap-5">
              <p
                className="text-xs tracking-[0.3em] uppercase text-caramel"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                {group.title}
              </p>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-beige-creme/50 hover:text-beige-creme transition-colors duration-300"
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-beige-creme/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-xs text-beige-creme/25"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            © {new Date().getFullYear()} BrewCafé. All rights reserved.
          </p>
          <p
            className="text-xs text-beige-creme/25 italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Fait avec ☕ à Paris
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import cafeBg from "../assets/cafe.webp";

function HeroSection() {
  return (
    <section
      id="#about"
      className="relative w-full h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${cafeBg})` }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/70" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <span
          className="mb-4 text-xs tracking-[0.3em] uppercase text-caramel font-medium"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Where every cup tells a story.
        </span>

        <h1
          className="text-6xl md:text-8xl font-bold text-beige-creme leading-tight mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Urban Brew
          <br />
          <span className="italic text-caramel">Café</span>
        </h1>

        <p
          className="max-w-md text-beige-creme/80 text-base md:text-lg mb-10 leading-relaxed"
          style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
        >
          Freshly roasted coffee, artisan pastries, and a cozy atmosphere in the
          heart of the city.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <button
            className="px-8 py-3 bg-caramel text-beige-creme text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#a5623c]"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Our Menu
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

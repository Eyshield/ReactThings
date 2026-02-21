import image from "../assets/imgecafe1.jpg";
import image2 from "../assets/imagecafe2.jpg";
import image3 from "../assets/imagecafe3.webp";
import image4 from "../assets/imagecafe4.jpg";
import image5 from "../assets/cafeimage4.webp";
const images = [
  { src: image, alt: "Café ambiance", span: "col-span-1 row-span-2" },
  { src: image2, alt: "Café détail", span: "col-span-1 row-span-1" },
  { src: image3, alt: "Café torréfaction", span: "col-span-1 row-span-1" },
  { src: image4, alt: "Café latte art", span: "col-span-2 row-span-1" },
  {
    src: image5,
    alt: "Café atmosphère",
    span: "col-span-3 row-span-1",
    quote: "Chaque tasse, une expérience",
  },
];

function GalerieSection() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6">
      <div className="text-center mb-14">
        <p
          className="text-xs tracking-[0.3em] uppercase text-caramel mb-3"
          style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
        >
          Our Moments
        </p>
        <h2
          className="text-5xl font-bold text-beige-creme"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          The soul of our <span className="italic text-caramel">Café</span>
        </h2>
        <div className="w-12 h-px bg-caramel mx-auto mt-5" />
      </div>

      <div className="grid grid-cols-3 grid-rows-3 gap-4 h-175">
        {images.map((img, index) => (
          <div
            key={index}
            className={`${img.span} group relative overflow-hidden rounded-2xl`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl flex items-center justify-center">
              {img.quote && (
                <p
                  className="text-beige-creme text-2xl italic tracking-widest px-6 text-center"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {img.quote}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GalerieSection;

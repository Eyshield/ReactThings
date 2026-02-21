interface CardMenuProps {
  category: string;
  icon?: string;
  items: { name: string; price: number; description?: string }[];
}

function CardMenu({ category, icon = "☕", items }: CardMenuProps) {
  return (
    <div
      className="
        group relative w-full h-fit
        bg-noir-doux border border-beige-creme/10
        rounded-2xl p-8
        transition-all duration-500 ease-out
        hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(198,124,78,0.15)]
        hover:border-caramel/40
        cursor-pointer overflow-hidden
      "
    >
      <div className="absolute inset-0 bg-linear-to-br from-caramel/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      <div className="relative flex items-center gap-3 mb-6">
        <span className="text-2xl">{icon}</span>
        <div>
          <h2
            className="text-2xl font-bold text-beige-creme"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {category}
          </h2>
        </div>
      </div>

      <div className="relative w-full h-px bg-beige-creme/10 mb-6 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-0 bg-caramel group-hover:w-full transition-all duration-700 ease-out" />
      </div>

      <div className="relative flex flex-col gap-4">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex justify-between items-start gap-4 group/item"
          >
            <div className="flex-1">
              <span
                className="text-beige-creme text-base group-hover/item:text-caramel transition-colors duration-300"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.1rem",
                }}
              >
                {item.name}
              </span>
              {item.description && (
                <p
                  className="text-beige-creme/40 text-xs mt-0.5"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  {item.description}
                </p>
              )}
            </div>

            <span
              className="text-caramel font-semibold text-base shrink-0"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {item.price.toFixed(2)} €
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardMenu;

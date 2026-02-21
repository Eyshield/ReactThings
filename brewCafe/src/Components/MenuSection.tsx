import CardMenu from "./CardMenu";
function menuSection() {
  const menu = [
    {
      category: "Coffee",
      items: [
        { name: "Espresso", price: 3 },
        { name: "Cappuccino", price: 4 },
        { name: "Latte", price: 4.5 },
        { name: "Flat White", price: 4 },
        { name: "Mocha", price: 5 },
      ],
    },
    {
      category: "Cold Drinks",
      items: [
        { name: "Iced Latte", price: 5 },
        { name: "Iced Americano", price: 4 },
        { name: "Fresh Orange Juice", price: 4 },
        { name: "Smoothie Bowl", price: 6 },
      ],
    },
    {
      category: "Pastries",
      items: [
        { name: "Croissant", price: 3 },
        { name: "Chocolate Muffin", price: 3.5 },
        { name: "Cinnamon Roll", price: 4 },
        { name: "Cheesecake Slice", price: 5 },
      ],
    },
    {
      category: "Breakfast",
      items: [
        { name: "Avocado Toast", price: 7 },
        { name: "Pancakes", price: 6 },
        { name: "Omelette", price: 6 },
        { name: "Granola Bowl", price: 5 },
      ],
    },
  ];
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <p
        className="text-3xl tracking-[0.3em] uppercase text-caramel mb-0.5 text-center"
        style={{ fontFamily: "'Lato', sans-serif", fontWeight: 800 }}
      >
        Our selection
      </p>
      <section className=" gap-4 grid grid-cols-2 max-w-7xl  mx-auto py-16">
        {menu.map((section) => (
          <CardMenu
            key={section.category}
            category={section.category}
            items={section.items}
          />
        ))}
      </section>
    </div>
  );
}
export default menuSection;

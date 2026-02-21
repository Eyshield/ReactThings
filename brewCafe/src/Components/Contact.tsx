import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const infos = [
    { label: "Adresse", value: "12 Rue du Moulin, Paris 75001" },
    { label: "Horaires", value: "Lun – Sam : 8h → 20h" },
    { label: "Téléphone", value: "+33 1 23 45 67 89" },
    { label: "Email", value: "hello@brewcafe.fr" },
  ];

  return (
    <section className="relative w-full py-28 px-6 bg-[#111111] overflow-hidden">
      <div className="absolute -top-40 -right-40 w-125 h-125 rounded-full bg-caramel/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-100 h-100 rounded-full bg-caramel/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p
            className="text-xs tracking-[0.3em] uppercase text-caramel mb-3"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            Contact us
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold text-beige-creme"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Venez nous{" "}
            <span className="italic text-caramel">rendre visite</span>
          </h2>
          <div className="w-12 h-px bg-caramel mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-10">
            <p
              className="text-beige-creme/60 text-base leading-relaxed max-w-sm"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              A coffee, a smile, a moment suspended in time. Find us in the
              heart of Paris for a break that reflects you.
            </p>

            <div className="flex flex-col gap-6">
              {infos.map((info) => (
                <div
                  key={info.label}
                  className="flex flex-col gap-1 border-l-2 border-caramel/40 pl-4"
                >
                  <span
                    className="text-xs tracking-widest uppercase text-caramel"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {info.label}
                  </span>
                  <span
                    className="text-beige-creme text-base"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.15rem",
                    }}
                  >
                    {info.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-noir-doux border border-beige-creme/10 rounded-2xl p-8 flex flex-col gap-6">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4">
                <span className="text-4xl">☕</span>
                <p
                  className="text-beige-creme text-2xl italic text-center"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Message sent, see you soon!
                </p>
                <p
                  className="text-beige-creme/40 text-sm text-center"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  We will respond as soon as possible.
                </p>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-xs tracking-widest uppercase text-caramel"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    className="bg-transparent border border-beige-creme/15 rounded-lg px-4 py-3 text-beige-creme placeholder-beige-creme/25 focus:outline-none focus:border-caramel transition-colors duration-300 text-sm"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    className="text-xs tracking-widest uppercase text-caramel"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jean@exemple.fr"
                    className="bg-transparent border border-beige-creme/15 rounded-lg px-4 py-3 text-beige-creme placeholder-beige-creme/25 focus:outline-none focus:border-caramel transition-colors duration-300 text-sm"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label
                    className="text-xs tracking-widest uppercase text-caramel"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Votre message..."
                    className="bg-transparent border border-beige-creme/15 rounded-lg px-4 py-3 text-beige-creme placeholder-beige-creme/25 focus:outline-none focus:border-caramel transition-colors duration-300 text-sm resize-none"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full py-3 bg-caramel text-noir-doux text-sm tracking-widest uppercase font-semibold hover:bg-vert-sauge transition-colors duration-300 rounded-lg"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Send message
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

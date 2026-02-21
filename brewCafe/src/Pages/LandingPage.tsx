import NavBar from "../Components/NavBar";
import HeroSEction from "../Components/HeroSection";
import MenuSection from "../Components/MenuSection";
import GalerieSection from "../Components/GalerieSection";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
function landingPage() {
  return (
    <section className="w-full min-h-screen bg-brun-sombre text-beige-creme ">
      <NavBar />
      <HeroSEction />
      <MenuSection />
      <GalerieSection />
      <Contact />
      <Footer />
    </section>
  );
}
export default landingPage;

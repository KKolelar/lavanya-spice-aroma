import SpiceHero from "@/components/SpiceHero";
import ProductsSection from "@/components/ProductsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SpiceHero />
      <ProductsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

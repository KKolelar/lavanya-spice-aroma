import ProductCard from "./ProductCard";
import garamMasalaImg from "@/assets/garam-masala.jpg";
import kandaLasunMasalaImg from "@/assets/kanda-lasun-masala.jpg";
import kalaMasalaImg from "@/assets/kala-masala.jpg";

const ProductsSection = () => {
  const products = [
    {
      image: garamMasalaImg,
      title: "Garam Masala",
      description: "Authentic blend of Indian spices for rich, aromatic flavor that transforms any dish into a culinary masterpiece.",
      price: "₹99"
    },
    {
      image: kandaLasunMasalaImg,
      title: "Kanda Lasun Masala",
      description: "Traditional Maharashtrian mix of onion, garlic, and spices that brings authentic regional flavors to your kitchen.",
      price: "₹129"
    },
    {
      image: kalaMasalaImg,
      title: "Kala Masala",
      description: "Dark, roasted spice mix for bold and smoky flavor that adds depth and complexity to your favorite recipes.",
      price: "₹139"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Premium 
            <span className="bg-gradient-spice bg-clip-text text-transparent ml-3">
              Spice Collection
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated selection of authentic Indian spices, 
            each blend crafted with generations of traditional knowledge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
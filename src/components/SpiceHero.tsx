import { Button } from "@/components/ui/button";
import spiceHeroBg from "@/assets/spice-hero-bg.jpg";

const SpiceHero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${spiceHeroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in-up">
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Lavanya
          </span>
          <br />
          <span className="text-white">Spices</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up font-light max-w-2xl mx-auto leading-relaxed">
          Authentic Indian spices crafted with tradition, bringing the finest flavors to your kitchen
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
          <Button variant="hero" size="lg" className="px-8 py-4">
            Explore Our Spices
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
            Learn Our Story
          </Button>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-12 h-12 bg-primary/20 rounded-full animate-float" />
      <div className="absolute bottom-32 right-16 w-8 h-8 bg-secondary/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-32 w-6 h-6 bg-accent/25 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default SpiceHero;
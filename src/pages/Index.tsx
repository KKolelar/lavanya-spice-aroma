import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Heart, Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import spiceHeroBg from "@/assets/spice-hero-bg.jpg";
import garamMasalaImg from "@/assets/garam-masala.jpg";
import kandaLasunMasalaImg from "@/assets/kanda-lasun-masala.jpg";
import kalaMasalaImg from "@/assets/kala-masala.jpg";

// Product Card Component
interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const ProductCard = ({ image, title, description, price }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-warm hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 bg-white/95 backdrop-blur-sm">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="icon" variant="ghost" className="bg-white/80 hover:bg-white text-primary">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            {price}
          </span>
          <Button variant="spice" className="group-hover:scale-105 transition-transform duration-300">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Index = () => {
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
    <div className="min-h-screen">
      {/* Hero Section */}
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

      {/* Products Section */}
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

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-muted/30 via-background to-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in 
              <span className="bg-gradient-warm bg-clip-text text-transparent ml-3">
                Touch
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about our spices? We'd love to hear from you. 
              Reach out and let's discuss how we can spice up your culinary journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-warm border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    placeholder="First Name" 
                    className="border-border/50 focus:border-primary transition-colors duration-300"
                  />
                  <Input 
                    placeholder="Last Name" 
                    className="border-border/50 focus:border-primary transition-colors duration-300"
                  />
                </div>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="border-border/50 focus:border-primary transition-colors duration-300"
                />
                <Input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="border-border/50 focus:border-primary transition-colors duration-300"
                />
                <Textarea 
                  placeholder="Your Message" 
                  rows={5}
                  className="border-border/50 focus:border-primary transition-colors duration-300 resize-none"
                />
                <Button variant="spice" className="w-full text-lg py-6">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="shadow-warm border-0 bg-white/80 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-spice rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email Us</h3>
                    <p className="text-muted-foreground">contact@lavanyaspices.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-warm border-0 bg-white/80 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Call Us</h3>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-warm border-0 bg-white/80 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-spice rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Visit Us</h3>
                    <p className="text-muted-foreground">123 Spice Market, Mumbai, India</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-warm border-0 bg-white/80 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-warm rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Business Hours</h3>
                    <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-foreground via-foreground/95 to-foreground text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-3xl font-bold bg-gradient-spice bg-clip-text text-transparent mb-4">
                Lavanya Spices
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Bringing authentic Indian flavors to your kitchen with our premium spice blends, 
                crafted with traditional methods and the finest ingredients sourced directly from farms.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors duration-300 cursor-pointer">
                  <Facebook className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors duration-300 cursor-pointer">
                  <Instagram className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors duration-300 cursor-pointer">
                  <Twitter className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors duration-300 cursor-pointer">
                  <Mail className="h-5 w-5" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-primary transition-colors duration-300 cursor-pointer">About Us</li>
                <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Our Products</li>
                <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Recipes</li>
                <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Blog</li>
                <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Contact</li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="hover:text-primary transition-colors duration-300 cursor-pointer">FAQ</li>
                <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Shipping Info</li>
                <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Returns</li>
                <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Track Order</li>
                <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Help Center</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-600" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
            <p>© 2025 Lavanya Spices. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="hover:text-primary transition-colors duration-300 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-primary transition-colors duration-300 cursor-pointer">Terms of Service</span>
              <span className="hover:text-primary transition-colors duration-300 cursor-pointer">Cookie Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

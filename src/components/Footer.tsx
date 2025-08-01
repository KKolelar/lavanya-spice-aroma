import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
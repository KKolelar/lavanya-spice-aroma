import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
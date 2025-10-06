import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Truck, Settings } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Hero content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Your Remote Procurement Team
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Find Best Prices,
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Handle Delivery
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              B2B procurement and logistics marketplace connecting regional buyers with verified suppliers and freight partners across Ethiopia.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group">
                Get Started
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">156</div>
                <div className="text-sm text-muted-foreground">Total Orders</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">89</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-success">96%</div>
                <div className="text-sm text-muted-foreground">On-time Rate</div>
              </div>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative lg:block hidden">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="B2B Procurement Hub" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-elegant border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                  <Package className="w-6 h-6 text-success" />
                </div>
                <div>
                  <div className="font-semibold">25 Products</div>
                  <div className="text-sm text-muted-foreground">In Transit</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-elegant border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold">8 Deliveries</div>
                  <div className="text-sm text-muted-foreground">Today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

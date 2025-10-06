import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <Package className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">Beytim</span>
          </div>
          
          {/* Navigation links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <select 
              className="hidden sm:inline-flex h-10 px-3 rounded-md border border-input bg-background text-sm font-medium hover:bg-accent transition-colors cursor-pointer"
              onChange={(e) => {
                if (e.target.value) window.location.href = e.target.value;
              }}
              defaultValue=""
            >
              <option value="" disabled>Select Portal</option>
              <option value="/buyer">Buyer Portal</option>
              <option value="/freight">Freight Portal</option>
              <option value="/admin">Admin Portal</option>
            </select>
            <Button variant="hero" asChild>
              <Link to="/buyer">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

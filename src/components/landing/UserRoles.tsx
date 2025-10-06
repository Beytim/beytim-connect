import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Truck, Settings, ArrowRight, CheckCircle2 } from "lucide-react";

const roles = [
  {
    icon: ShoppingCart,
    title: "For Buyers",
    subtitle: "Regional Shops & Wholesalers",
    description: "Create requests, compare prices from multiple suppliers, and track deliveries - all in one platform.",
    features: [
      "Create and manage product requests",
      "Compare prices from verified suppliers",
      "Track shipments in real-time",
      "Save with bulk order templates",
    ],
    gradient: "bg-gradient-primary",
    color: "text-primary",
  },
  {
    icon: Truck,
    title: "For Freight Partners",
    subtitle: "Truck Owners & Logistics",
    description: "Manage your fleet, update shipment status, and optimize delivery routes to maximize earnings.",
    features: [
      "Manage fleet and drivers",
      "Real-time shipment updates",
      "Track earnings and performance",
      "Optimize delivery routes",
    ],
    gradient: "bg-gradient-secondary",
    color: "text-secondary",
  },
  {
    icon: Settings,
    title: "For Platform Admins",
    subtitle: "System Operators",
    description: "Manage supplier network, assign orders, process payments, and monitor platform performance.",
    features: [
      "Manage supplier network",
      "Assign orders efficiently",
      "Process payments securely",
      "Monitor platform analytics",
    ],
    gradient: "bg-gradient-success",
    color: "text-success",
  },
];

export const UserRoles = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Built for Every Stakeholder</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're buying, delivering, or managing - Beytim has you covered.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-elegant transition-all duration-300 border-border"
            >
              <div className="space-y-6">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${role.gradient} flex items-center justify-center shadow-glow`}>
                  <role.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Title */}
                <div>
                  <h3 className="text-2xl font-bold mb-1">{role.title}</h3>
                  <p className={`text-sm ${role.color} font-medium`}>{role.subtitle}</p>
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground">{role.description}</p>
                
                {/* Features */}
                <ul className="space-y-3">
                  {role.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${role.color}`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <Button variant="ghost" className="w-full group">
                  Learn More
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Card } from "@/components/ui/card";
import { FileText, Search, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Create Request",
    description: "Submit your product requirements with quantity, delivery location, and deadline.",
  },
  {
    icon: Search,
    number: "02",
    title: "Get Best Prices",
    description: "Our platform finds verified suppliers and compares prices to save you money.",
  },
  {
    icon: Truck,
    number: "03",
    title: "Track Delivery",
    description: "Monitor your shipment in real-time with our freight partner network.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Receive & Pay",
    description: "Get your products delivered and complete payment seamlessly.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How Beytim Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent process from request to delivery
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="p-6 relative hover:shadow-elegant transition-all duration-300 border-border"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border z-0" />
              )}
              
              <div className="relative z-10 space-y-4">
                {/* Number */}
                <div className="text-5xl font-bold text-primary/10">{step.number}</div>
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

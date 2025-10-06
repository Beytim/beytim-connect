import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, DollarSign, Star, TrendingUp, Plus } from "lucide-react";
import { FleetManagement } from "@/components/freight/FleetManagement";

const FreightDashboard = () => {
  const [showFleet, setShowFleet] = useState(false);

  const stats = [
    { label: "Active Shipments", value: "3", icon: Truck, color: "text-primary" },
    { label: "Completed Today", value: "5", icon: TrendingUp, color: "text-success" },
    { label: "Total Revenue", value: "15,400", suffix: "ETB", icon: DollarSign, color: "text-secondary" },
    { label: "Rating", value: "4.8", suffix: "/5", icon: Star, color: "text-secondary" },
  ];

  const activeShipments = [
    { id: "REQ001", destination: "Hawassa", status: "In Transit" },
    { id: "REQ005", destination: "Bahir Dar", status: "Picked Up" },
    { id: "REQ008", destination: "Addis Ababa", status: "Loading" },
  ];

  if (showFleet) {
    return <FleetManagement onBack={() => setShowFleet(false)} />;
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="bg-card border-b border-border">
        <div className="container px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Freight Partner Dashboard</h1>
              <p className="text-muted-foreground">Manage your fleet and deliveries</p>
            </div>
            <Button variant="hero" onClick={() => setShowFleet(true)}>
              <Plus className="w-4 h-4" />
              Manage Fleet
            </Button>
          </div>
        </div>
      </div>

      <div className="container px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold">
                    {stat.value}
                    {stat.suffix && <span className="text-lg ml-1">{stat.suffix}</span>}
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* On-time Rate */}
        <Card className="p-6 mb-8 bg-gradient-success border-success/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-success-foreground/80 mb-1">On-time Delivery Rate</p>
              <p className="text-4xl font-bold text-success-foreground">96%</p>
            </div>
            <div className="text-success-foreground/60 text-sm">
              Excellent performance
            </div>
          </div>
        </Card>

        {/* Active Shipments */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Active Shipments</h2>
          <div className="space-y-4">
            {activeShipments.map((shipment) => (
              <div key={shipment.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:shadow-elegant transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Truck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{shipment.id}</p>
                    <p className="text-sm text-muted-foreground">
                      {shipment.destination} • {shipment.status}
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Update
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Analytics Button */}
        <div className="mt-6">
          <Button variant="outline" className="w-full">
            View Analytics
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FreightDashboard;

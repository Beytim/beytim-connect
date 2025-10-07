import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Calendar, Download } from "lucide-react";

interface FleetAnalyticsProps {
  onBack: () => void;
}

export const FleetAnalytics = ({ onBack }: FleetAnalyticsProps) => {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="bg-card border-b border-border">
        <div className="container px-4 py-6">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-3xl font-bold mb-2">Fleet Analytics</h1>
        </div>
      </div>

      <div className="container px-4 py-8">
        <Card className="p-6 mb-8 bg-gradient-primary border-primary/20">
          <h2 className="text-xl font-bold text-primary-foreground mb-4">Performance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-primary-foreground/80">On-time Delivery</p>
              <p className="text-3xl font-bold text-primary-foreground">96%</p>
            </div>
            <div>
              <p className="text-sm text-primary-foreground/80">Revenue This Month</p>
              <p className="text-3xl font-bold text-primary-foreground">45,200</p>
              <p className="text-sm text-primary-foreground/80">ETB</p>
            </div>
            <div>
              <p className="text-sm text-primary-foreground/80">Fuel Efficiency</p>
              <p className="text-3xl font-bold text-primary-foreground">8</p>
              <p className="text-sm text-primary-foreground/80">km/L</p>
            </div>
            <div>
              <p className="text-sm text-primary-foreground/80">Maintenance Cost</p>
              <p className="text-3xl font-bold text-primary-foreground">2,500</p>
              <p className="text-sm text-primary-foreground/80">ETB</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Earnings Breakdown</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Completed Trips</p>
              <p className="text-2xl font-bold">25</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Total Distance</p>
              <p className="text-2xl font-bold">4,500 km</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Avg. Revenue/Trip</p>
              <p className="text-2xl font-bold">1,800 ETB</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Platform Fees</p>
              <p className="text-2xl font-bold">9,000 ETB</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Net Earnings</p>
              <p className="text-2xl font-bold text-success">36,200 ETB</p>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-4">
          <Button variant="outline" size="lg" className="h-20 flex gap-3">
            <Calendar className="w-6 h-6" />
            <span>Monthly Report</span>
          </Button>
          <Button variant="outline" size="lg" className="h-20 flex gap-3">
            <Download className="w-6 h-6" />
            <span>Download Data</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

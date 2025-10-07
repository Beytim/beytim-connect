import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Calendar, Download, RefreshCw } from "lucide-react";

export const AnalyticsDashboard = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="bg-card border-b border-border">
        <div className="container px-4 py-6">
          <h1 className="text-3xl font-bold mb-2">Platform Analytics</h1>
          <p className="text-muted-foreground">Comprehensive performance metrics and insights</p>
        </div>
      </div>

      <div className="container px-4 py-8">
        <Card className="p-6 mb-8 bg-gradient-primary border-primary/20">
          <h2 className="text-xl font-bold text-primary-foreground mb-4">Key Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-primary-foreground/80 mb-1">Monthly Revenue</p>
              <p className="text-3xl font-bold text-primary-foreground">156K</p>
              <p className="text-sm text-primary-foreground/80">ETB</p>
            </div>
            <div>
              <p className="text-sm text-primary-foreground/80 mb-1">Order Volume</p>
              <p className="text-3xl font-bold text-primary-foreground">245</p>
            </div>
            <div>
              <p className="text-sm text-primary-foreground/80 mb-1">Active Users</p>
              <p className="text-3xl font-bold text-primary-foreground">89</p>
            </div>
            <div>
              <p className="text-sm text-primary-foreground/80 mb-1">Avg. Order Value</p>
              <p className="text-3xl font-bold text-primary-foreground">1,200</p>
              <p className="text-sm text-primary-foreground/80">ETB</p>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Customer Satisfaction</h2>
            <div className="flex items-end gap-2">
              <p className="text-5xl font-bold">4.7</p>
              <p className="text-2xl text-muted-foreground mb-2">/5</p>
            </div>
            <p className="text-sm text-success flex items-center gap-1 mt-2">
              <TrendingUp className="w-4 h-4" />
              +0.3 from last month
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">On-time Delivery Rate</h2>
            <div className="flex items-end gap-2">
              <p className="text-5xl font-bold">96</p>
              <p className="text-2xl text-muted-foreground mb-2">%</p>
            </div>
            <p className="text-sm text-success flex items-center gap-1 mt-2">
              <TrendingUp className="w-4 h-4" />
              +2% from last month
            </p>
          </Card>
        </div>

        <Card className="p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Trend Analysis</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-success/10">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <div>
                    <p className="font-medium">Revenue Growth</p>
                    <p className="text-sm text-muted-foreground">Month over Month</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-success">+15%</p>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-success/10">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <div>
                    <p className="font-medium">User Growth</p>
                    <p className="text-sm text-muted-foreground">Month over Month</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-success">+22%</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-destructive/10">
                <div className="flex items-center gap-3">
                  <TrendingDown className="w-5 h-5 text-destructive" />
                  <div>
                    <p className="font-medium">Order Cancellation</p>
                    <p className="text-sm text-muted-foreground">This month</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-destructive">3%</p>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-success/10">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <div>
                    <p className="font-medium">On-time Delivery</p>
                    <p className="text-sm text-muted-foreground">This month</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-success">96%</p>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-4">
          <Button variant="outline" size="lg" className="h-20 flex flex-col gap-2">
            <Calendar className="w-6 h-6" />
            <span>Custom Report</span>
          </Button>
          <Button variant="outline" size="lg" className="h-20 flex flex-col gap-2">
            <Download className="w-6 h-6" />
            <span>Export Data</span>
          </Button>
          <Button variant="outline" size="lg" className="h-20 flex flex-col gap-2">
            <RefreshCw className="w-6 h-6" />
            <span>Refresh</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

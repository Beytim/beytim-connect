import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, AlertCircle, Truck, DollarSign, Users, Building2 } from "lucide-react";
import { SupplierManagement } from "@/components/admin/SupplierManagement";

const AdminDashboard = () => {
  const [showSuppliers, setShowSuppliers] = useState(false);

  const stats = [
    { label: "Total Orders", value: "156", icon: Package, color: "text-primary" },
    { label: "Pending Approval", value: "12", icon: AlertCircle, color: "text-secondary" },
    { label: "Active Shipments", value: "8", icon: Truck, color: "text-success" },
    { label: "Revenue", value: "45,200", suffix: "ETB", icon: DollarSign, color: "text-primary" },
  ];

  const alerts = [
    { type: "urgent", message: "3 orders need assignment", color: "text-destructive" },
    { type: "warning", message: "5 payments pending", color: "text-secondary" },
    { type: "info", message: "2 support tickets open", color: "text-primary" },
  ];

  if (showSuppliers) {
    return <SupplierManagement onBack={() => setShowSuppliers(false)} />;
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="bg-card border-b border-border">
        <div className="container px-4 py-6">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Platform management and overview</p>
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

        {/* Users Stat */}
        <Card className="p-6 mb-8 bg-gradient-primary border-primary/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-primary-foreground/80 mb-1">Total Users</p>
              <p className="text-4xl font-bold text-primary-foreground">89</p>
            </div>
            <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
              <Users className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
        </Card>

        {/* Alerts */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Alerts</h2>
          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-border">
                <AlertCircle className={`w-5 h-5 ${alert.color}`} />
                <p className={`font-medium ${alert.color}`}>{alert.message}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4">
          <Button variant="outline" className="h-24 flex flex-col gap-2">
            <Users className="w-6 h-6" />
            <span>Manage Users</span>
          </Button>
          <Button variant="outline" className="h-24 flex flex-col gap-2" onClick={() => setShowSuppliers(true)}>
            <Building2 className="w-6 h-6" />
            <span>Suppliers</span>
          </Button>
          <Button variant="outline" className="h-24 flex flex-col gap-2">
            <Truck className="w-6 h-6" />
            <span>Fleet</span>
          </Button>
          <Button variant="outline" className="h-24 flex flex-col gap-2">
            <DollarSign className="w-6 h-6" />
            <span>Payments</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

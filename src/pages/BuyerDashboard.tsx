import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Truck, Clock, CheckCircle2, Plus, FileText, Phone, Edit } from "lucide-react";
import { CreateRequestForm } from "@/components/buyer/CreateRequestForm";
import { OrderTemplates } from "@/components/buyer/OrderTemplates";
import { OrderModificationForm } from "@/components/buyer/OrderModificationForm";
import { SupportTicketing } from "@/components/support/SupportTicketing";

const BuyerDashboard = () => {
  const [showCreateRequest, setShowCreateRequest] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);
  const [showModifyForm, setShowModifyForm] = useState<string | null>(null);
  const [showSupport, setShowSupport] = useState(false);

  const stats = [
    { label: "Total Requests", value: "25", icon: Package, color: "text-primary" },
    { label: "Delivered", value: "10", icon: CheckCircle2, color: "text-success" },
    { label: "In Transit", value: "3", icon: Truck, color: "text-secondary" },
    { label: "Pending", value: "12", icon: Clock, color: "text-muted-foreground" },
  ];

  const recentRequests = [
    { id: "REQ001", products: "Water, Juice", status: "In Transit", location: "Hawassa", date: "Oct 10", action: "View" },
    { id: "REQ002", products: "Soap", status: "Delivered", location: "Addis Ababa", date: "Sep 20", action: "Reorder" },
    { id: "REQ003", products: "Flour", status: "Pending", location: "Bahir Dar", date: "Oct 15", action: "Modify" },
  ];

  if (showCreateRequest) {
    return <CreateRequestForm onBack={() => setShowCreateRequest(false)} />;
  }

  if (showTemplates) {
    return <OrderTemplates onBack={() => setShowTemplates(false)} />;
  }

  if (showModifyForm) {
    return <OrderModificationForm orderId={showModifyForm} onBack={() => setShowModifyForm(null)} />;
  }

  if (showSupport) {
    return <SupportTicketing />;
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="container px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Buyer Dashboard</h1>
              <p className="text-muted-foreground">Manage your procurement requests</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setShowTemplates(true)}>
                <FileText className="w-4 h-4" />
                My Templates
              </Button>
              <Button variant="hero" onClick={() => setShowCreateRequest(true)}>
                <Plus className="w-4 h-4" />
                New Request
              </Button>
            </div>
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
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Savings Card */}
        <Card className="p-6 mb-8 bg-gradient-success border-success/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-success-foreground/80 mb-1">Total Saved</p>
              <p className="text-4xl font-bold text-success-foreground">ETB 15,200</p>
            </div>
            <div className="text-success-foreground/60 text-sm">
              Compared to market prices
            </div>
          </div>
        </Card>

        {/* Recent Requests */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Recent Requests</h2>
          <div className="space-y-4">
            {recentRequests.map((request) => (
              <div key={request.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:shadow-elegant transition-all">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-semibold">{request.id}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      request.status === 'Delivered' ? 'bg-success/10 text-success' :
                      request.status === 'In Transit' ? 'bg-secondary/10 text-secondary' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {request.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{request.products}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {request.location} • {request.date}
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => request.action === "Modify" ? setShowModifyForm(request.id) : null}
                >
                  {request.action}
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="mt-6 flex gap-4">
          <Button variant="outline" className="flex-1" onClick={() => setShowSupport(true)}>
            <Phone className="w-4 h-4" />
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;

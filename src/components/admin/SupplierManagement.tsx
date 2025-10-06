import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, Plus, Upload, Building2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface SupplierManagementProps {
  onBack: () => void;
}

export const SupplierManagement = ({ onBack }: SupplierManagementProps) => {
  const [showAddSupplier, setShowAddSupplier] = useState(false);

  const suppliers = [
    { name: "Aqua Addis", category: "Beverages", rating: "4.8", status: "Active" },
    { name: "Derba Cement", category: "Construction", rating: "4.6", status: "Active" },
    { name: "Blue Nile Waters", category: "Beverages", rating: "4.7", status: "Pending" },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="bg-card border-b border-border">
        <div className="container px-4 py-6">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Button>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Supplier Management</h1>
            <Button variant="hero" onClick={() => setShowAddSupplier(true)}>
              <Plus className="w-4 h-4" />
              Add Supplier
            </Button>
          </div>
        </div>
      </div>

      <div className="container px-4 py-8 max-w-6xl">
        {/* Supplier List */}
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Registered Suppliers</h2>
          <div className="space-y-3">
            {suppliers.map((supplier, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border hover:shadow-elegant transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{supplier.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {supplier.category} • Rating: {supplier.rating}/5
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    supplier.status === 'Active' ? 'bg-success/10 text-success' : 'bg-secondary/10 text-secondary'
                  }`}>
                    {supplier.status}
                  </span>
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Add Supplier Form */}
        {showAddSupplier && (
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-6">Add New Supplier</h2>
            <div className="space-y-6">
              {/* Basic Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="business">Business Name *</Label>
                  <Input id="business" placeholder="Enter business name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Person *</Label>
                  <Input id="contact" placeholder="Contact name" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" placeholder="+251..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="email@example.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                    <option>Beverages</option>
                    <option>Construction</option>
                    <option>Food & Grain</option>
                    <option>Cleaning Supplies</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input id="location" placeholder="City, Region" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="products">Products Offered</Label>
                <Textarea 
                  id="products" 
                  placeholder="List main products and brands..."
                  rows={3}
                />
              </div>

              {/* Documents */}
              <div>
                <Label className="mb-3 block">Required Documents</Label>
                <div className="grid md:grid-cols-3 gap-3">
                  <Button variant="outline">
                    <Upload className="w-4 h-4" />
                    Business License
                  </Button>
                  <Button variant="outline">
                    <Upload className="w-4 h-4" />
                    Tax Certificate
                  </Button>
                  <Button variant="outline">
                    <Upload className="w-4 h-4" />
                    Quality Certs
                  </Button>
                </div>
              </div>

              {/* Commission */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="commission">Platform Commission (%)</Label>
                  <Input id="commission" type="number" placeholder="5" defaultValue="5" />
                </div>
                <div>
                  <Label className="mb-3 block">Initial Status</Label>
                  <RadioGroup defaultValue="pending">
                    <div className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="active" id="status-active" />
                        <Label htmlFor="status-active" className="cursor-pointer">Active</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pending" id="status-pending" />
                        <Label htmlFor="status-pending" className="cursor-pointer">Pending Review</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <Button variant="hero" onClick={() => {
                  toast.success("Supplier added successfully!");
                  setShowAddSupplier(false);
                }}>
                  <CheckCircle2 className="w-4 h-4" />
                  Verify & Add Supplier
                </Button>
                <Button variant="outline" onClick={() => setShowAddSupplier(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

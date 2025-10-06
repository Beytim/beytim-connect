import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Plus, Save, Send, FileText } from "lucide-react";
import { toast } from "sonner";

interface CreateRequestFormProps {
  onBack: () => void;
}

export const CreateRequestForm = ({ onBack }: CreateRequestFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    deliveryType: "deliver",
    budget: "",
    paymentMethod: "delivery",
    autoConfirm: "no",
    urgency: "medium",
    notes: "",
  });

  const catalogProducts = [
    { name: "Water", price: "50 ETB/crate" },
    { name: "Soap", price: "30 ETB/carton" },
    { name: "Juice", price: "40 ETB/pack" },
  ];

  const handleSubmit = () => {
    toast.success("Request submitted successfully!");
    onBack();
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="bg-card border-b border-border">
        <div className="container px-4 py-6">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold">Create New Request</h1>
        </div>
      </div>

      <div className="container px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          {/* Buyer Info */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Buyer Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input 
                  id="name" 
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input 
                  id="phone" 
                  placeholder="+251..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
          </Card>

          {/* Products */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Products</h2>
            
            <div className="space-y-4 mb-6">
              <Label>From Catalog</Label>
              {catalogProducts.map((product, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border border-border">
                  <Checkbox id={`product-${index}`} />
                  <label htmlFor={`product-${index}`} className="flex-1 cursor-pointer">
                    <span className="font-medium">{product.name}</span>
                    <span className="text-sm text-muted-foreground ml-2">({product.price})</span>
                  </label>
                  <Input type="number" placeholder="Qty" className="w-24" />
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-6">
              <Label className="mb-3 block">Or Add Custom Product</Label>
              <div className="grid md:grid-cols-3 gap-3">
                <Input placeholder="Product name" />
                <Input placeholder="Quantity" type="number" />
                <Input placeholder="Preferred brand" />
              </div>
              <Button variant="outline" className="mt-3">
                <Plus className="w-4 h-4" />
                Add Product
              </Button>
            </div>
          </Card>

          {/* Delivery */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Delivery Details</h2>
            
            <div className="space-y-4">
              <div>
                <Label className="mb-3 block">Delivery Type</Label>
                <RadioGroup value={formData.deliveryType} onValueChange={(value) => setFormData({ ...formData, deliveryType: value })}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="deliver" id="deliver" />
                    <Label htmlFor="deliver" className="cursor-pointer">Deliver to me</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pickup" id="pickup" />
                    <Label htmlFor="pickup" className="cursor-pointer">I will pickup</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-3">
                <Label>Delivery Locations</Label>
                <Input placeholder="Enter delivery address" />
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4" />
                  Add Location
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="deadline">Deadline</Label>
                  <Input id="deadline" type="date" />
                </div>
                <div>
                  <Label className="mb-3 block">Urgency</Label>
                  <RadioGroup value={formData.urgency} onValueChange={(value) => setFormData({ ...formData, urgency: value })}>
                    <div className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="low" id="low" />
                        <Label htmlFor="low" className="cursor-pointer">Low</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medium" id="medium" />
                        <Label htmlFor="medium" className="cursor-pointer">Medium</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="high" id="high" />
                        <Label htmlFor="high" className="cursor-pointer">High</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </Card>

          {/* Payment */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Payment Details</h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="budget">Budget (ETB)</Label>
                <Input 
                  id="budget" 
                  type="number" 
                  placeholder="Enter your budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                />
              </div>

              <div>
                <Label className="mb-3 block">Payment Method</Label>
                <RadioGroup value={formData.paymentMethod} onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="prepay" id="prepay" />
                    <Label htmlFor="prepay" className="cursor-pointer">Prepay</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="delivery" id="delivery" />
                    <Label htmlFor="delivery" className="cursor-pointer">On Delivery</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="collection" id="collection" />
                    <Label htmlFor="collection" className="cursor-pointer">Collection</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="mb-3 block">Auto-confirm best price?</Label>
                <RadioGroup value={formData.autoConfirm} onValueChange={(value) => setFormData({ ...formData, autoConfirm: value })}>
                  <div className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="auto-yes" />
                      <Label htmlFor="auto-yes" className="cursor-pointer">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="auto-no" />
                      <Label htmlFor="auto-no" className="cursor-pointer">No</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea 
                  id="notes" 
                  placeholder="Any special requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>
            </div>
          </Card>

          {/* Actions */}
          <div className="flex gap-4">
            <Button variant="outline" className="flex-1">
              <Save className="w-4 h-4" />
              Save Draft
            </Button>
            <Button variant="outline" className="flex-1">
              <FileText className="w-4 h-4" />
              Save as Template
            </Button>
            <Button variant="hero" className="flex-1" onClick={handleSubmit}>
              <Send className="w-4 h-4" />
              Submit Request
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, Plus, Save, Edit, Trash2 } from "lucide-react";

interface OrderTemplatesProps {
  onBack: () => void;
}

export const OrderTemplates = ({ onBack }: OrderTemplatesProps) => {
  const templates = [
    { name: "Weekly Restock", products: 5, active: true },
    { name: "Construction Monthly", products: 8, active: false },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="bg-card border-b border-border">
        <div className="container px-4 py-6">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold">Order Templates</h1>
        </div>
      </div>

      <div className="container px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          {/* Existing Templates */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">My Templates</h2>
            <div className="space-y-3">
              {templates.map((template, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border">
                  <div>
                    <p className="font-semibold mb-1">🛒 {template.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Products: {template.products} • Active: {template.active ? "Yes" : "No"}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Use</Button>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Create New Template */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Create Template</h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="template-name">Template Name</Label>
                <Input id="template-name" placeholder="e.g., Weekly Restock" />
              </div>

              <div>
                <Label className="mb-3 block">Products</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-3 rounded-lg border border-border">
                    <Checkbox id="t-water" />
                    <label htmlFor="t-water" className="flex-1 cursor-pointer">
                      Water - 25 crates
                    </label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg border border-border">
                    <Checkbox id="t-soap" />
                    <label htmlFor="t-soap" className="flex-1 cursor-pointer">
                      Soap - 10 cartons
                    </label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg border border-border">
                    <Checkbox id="t-juice" />
                    <label htmlFor="t-juice" className="flex-1 cursor-pointer">
                      Juice - 15 packs
                    </label>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-3">
                  <Plus className="w-4 h-4" />
                  Add Product
                </Button>
              </div>

              <div>
                <Label className="mb-3 block">Schedule</Label>
                <RadioGroup defaultValue="weekly">
                  <div className="flex gap-4 mb-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="weekly" id="weekly" />
                      <Label htmlFor="weekly" className="cursor-pointer">Weekly</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="monthly" id="monthly" />
                      <Label htmlFor="monthly" className="cursor-pointer">Monthly</Label>
                    </div>
                  </div>
                </RadioGroup>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label>Day</Label>
                    <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                      <option>Monday</option>
                      <option>Tuesday</option>
                      <option>Wednesday</option>
                    </select>
                  </div>
                  <div>
                    <Label className="mb-2 block">Auto-submit</Label>
                    <RadioGroup defaultValue="no">
                      <div className="flex gap-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="submit-yes" />
                          <Label htmlFor="submit-yes" className="cursor-pointer">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="submit-no" />
                          <Label htmlFor="submit-no" className="cursor-pointer">No</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>

              <Button variant="hero" className="w-full">
                <Save className="w-4 h-4" />
                Save Template
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Plus, Minus } from "lucide-react";

interface OrderModificationFormProps {
  orderId: string;
  onBack: () => void;
}

export const OrderModificationForm = ({ orderId, onBack }: OrderModificationFormProps) => {
  const [quantities, setQuantities] = useState({
    water: 25,
    juice: 15,
  });

  const handleQuantityChange = (product: string, value: number) => {
    setQuantities(prev => ({ ...prev, [product]: value }));
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="bg-card border-b border-border">
        <div className="container px-4 py-6">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-3xl font-bold mb-2">Modify Order #{orderId}</h1>
        </div>
      </div>

      <div className="container px-4 py-8 max-w-3xl">
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Changes</h2>
          
          <div className="space-y-6">
            <div>
              <Label className="text-base font-semibold mb-3 block">Add Products</Label>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 rounded-lg border border-border">
                  <Checkbox id="sugar" />
                  <label htmlFor="sugar" className="flex-1">Sugar - 45 ETB/kg</label>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg border border-border">
                  <Checkbox id="oil" />
                  <label htmlFor="oil" className="flex-1">Oil - 120 ETB/liter</label>
                </div>
              </div>
            </div>

            <div>
              <Label className="text-base font-semibold mb-3 block">Remove Products</Label>
              <div className="flex items-center gap-3 p-3 rounded-lg border border-border">
                <Checkbox id="soap" />
                <label htmlFor="soap" className="flex-1">Soap - 10 cartons</label>
              </div>
            </div>

            <div>
              <Label className="text-base font-semibold mb-3 block">Update Quantities</Label>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <Label className="w-24">Water:</Label>
                  <Input
                    type="number"
                    value={quantities.water}
                    onChange={(e) => handleQuantityChange("water", parseInt(e.target.value))}
                    className="w-24"
                  />
                  <span className="text-muted-foreground">crates</span>
                </div>
                <div className="flex items-center gap-4">
                  <Label className="w-24">Juice:</Label>
                  <Input
                    type="number"
                    value={quantities.juice}
                    onChange={(e) => handleQuantityChange("juice", parseInt(e.target.value))}
                    className="w-24"
                  />
                  <span className="text-muted-foreground">packs</span>
                </div>
              </div>
            </div>

            <div>
              <Label className="text-base font-semibold mb-3 block">Delivery</Label>
              <div className="space-y-3">
                <div>
                  <Label>Address</Label>
                  <Input placeholder="Update delivery address" />
                </div>
                <div>
                  <Label>Deadline</Label>
                  <Input type="date" />
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Price Impact</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Original:</span>
              <span className="font-medium">2,850 ETB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Changes:</span>
              <span className="font-medium text-success">+350 ETB</span>
            </div>
            <div className="border-t border-border pt-2 flex justify-between text-lg font-bold">
              <span>New Total:</span>
              <span>3,200 ETB</span>
            </div>
          </div>
          <Button variant="outline" className="w-full mt-4">
            Recalculate Prices
          </Button>
        </Card>

        <div className="flex gap-4">
          <Button className="flex-1" size="lg">
            Confirm Changes
          </Button>
          <Button variant="outline" className="flex-1" size="lg" onClick={onBack}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

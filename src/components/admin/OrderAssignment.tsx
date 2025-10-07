import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, MessageSquare, Send } from "lucide-react";

interface OrderAssignmentProps {
  orderId: string;
  onBack: () => void;
}

export const OrderAssignment = ({ orderId, onBack }: OrderAssignmentProps) => {
  const [selectedSupplier, setSelectedSupplier] = useState("aqua-addis");
  const [selectedFreight, setSelectedFreight] = useState("abebe");

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="bg-card border-b border-border">
        <div className="container px-4 py-6">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-3xl font-bold mb-2">Assign Order #{orderId}</h1>
        </div>
      </div>

      <div className="container px-4 py-8 max-w-3xl">
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Order Details</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Buyer:</span>
              <span className="font-medium">Mohamed Ali</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Products:</span>
              <span className="font-medium">Water, Juice, Soap</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Budget:</span>
              <span className="font-medium">5,000 ETB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivery:</span>
              <span className="font-medium">Hawassa</span>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Supplier Selection</h2>
          
          <RadioGroup value={selectedSupplier} onValueChange={setSelectedSupplier}>
            <Label className="text-sm font-semibold mb-2 block">Recommended</Label>
            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-3 p-4 rounded-lg border border-border">
                <RadioGroupItem value="aqua-addis" id="aqua-addis" className="mt-1" />
                <label htmlFor="aqua-addis" className="flex-1 cursor-pointer">
                  <div className="font-medium">Aqua Addis</div>
                  <div className="text-sm text-muted-foreground">Rating: 4.8/5</div>
                  <div className="text-sm">Price: 2,050 ETB • 2 days</div>
                </label>
              </div>
            </div>

            <Label className="text-sm font-semibold mb-2 block">Alternatives</Label>
            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-3 p-4 rounded-lg border border-border">
                <RadioGroupItem value="blue-nile" id="blue-nile" className="mt-1" />
                <label htmlFor="blue-nile" className="flex-1 cursor-pointer">
                  <div className="font-medium">Blue Nile Waters</div>
                  <div className="text-sm text-muted-foreground">Rating: 4.7/5</div>
                  <div className="text-sm">Price: 2,100 ETB • 1 day</div>
                </label>
              </div>
            </div>

            <Label className="text-sm font-semibold mb-2 block">Custom</Label>
            <div className="flex gap-3">
              <Input placeholder="Select supplier" />
              <Input placeholder="Price (ETB)" className="w-32" />
            </div>
          </RadioGroup>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Freight Assignment</h2>
          
          <RadioGroup value={selectedFreight} onValueChange={setSelectedFreight}>
            <Label className="text-sm font-semibold mb-2 block">Recommended</Label>
            <div className="space-y-3 mb-4">
              <div className="flex items-start gap-3 p-4 rounded-lg border border-border">
                <RadioGroupItem value="abebe" id="abebe" className="mt-1" />
                <label htmlFor="abebe" className="flex-1 cursor-pointer">
                  <div className="font-medium">Abebe Logistics</div>
                  <div className="text-sm text-muted-foreground">Rating: 4.8/5</div>
                  <div className="text-sm">Cost: 700 ETB • 2 days</div>
                </label>
              </div>
            </div>

            <Label className="text-sm font-semibold mb-2 block">Alternatives</Label>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 rounded-lg border border-border">
                <RadioGroupItem value="quick-trans" id="quick-trans" className="mt-1" />
                <label htmlFor="quick-trans" className="flex-1 cursor-pointer">
                  <div className="font-medium">Quick Trans</div>
                  <div className="text-sm text-muted-foreground">Rating: 4.6/5</div>
                  <div className="text-sm">Cost: 650 ETB • 3 days</div>
                </label>
              </div>
            </div>
          </RadioGroup>
        </Card>

        <Card className="p-6 mb-6 bg-gradient-primary border-primary/20">
          <h2 className="text-xl font-bold text-primary-foreground mb-4">Final Quote</h2>
          <div className="space-y-2 text-primary-foreground">
            <div className="flex justify-between">
              <span className="text-primary-foreground/80">Products:</span>
              <span className="font-medium">2,050 ETB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-primary-foreground/80">Freight:</span>
              <span className="font-medium">700 ETB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-primary-foreground/80">Platform Fee:</span>
              <span className="font-medium">150 ETB</span>
            </div>
            <div className="border-t border-primary-foreground/20 pt-2 flex justify-between text-lg font-bold">
              <span>TOTAL:</span>
              <span>2,900 ETB</span>
            </div>
            <div className="text-sm text-primary-foreground/80">
              Buyer Savings: 1,100 ETB
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-4">
          <Button className="flex gap-2" size="lg">
            <Send className="w-4 h-4" />
            Send to Buyer
          </Button>
          <Button variant="outline" className="flex gap-2" size="lg">
            <MessageSquare className="w-4 h-4" />
            Negotiate
          </Button>
        </div>
      </div>
    </div>
  );
};

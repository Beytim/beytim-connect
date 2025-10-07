import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, Camera, MapPin, Phone } from "lucide-react";

interface ShipmentStatusUpdateProps {
  shipmentId: string;
  onBack: () => void;
}

export const ShipmentStatusUpdate = ({ shipmentId, onBack }: ShipmentStatusUpdateProps) => {
  const [status, setStatus] = useState("in-transit");

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="bg-card border-b border-border">
        <div className="container px-4 py-6">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-3xl font-bold mb-2">Update Shipment #{shipmentId}</h1>
        </div>
      </div>

      <div className="container px-4 py-8 max-w-3xl">
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Current Status</h2>
          
          <div className="space-y-4">
            <div>
              <Label>Status</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="picked-up">Picked Up</SelectItem>
                  <SelectItem value="in-transit">In Transit</SelectItem>
                  <SelectItem value="delayed">Delayed</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Location</Label>
              <Input placeholder="Current location" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>ETA</Label>
                <Input type="datetime-local" />
              </div>
              <div>
                <Label>Actual Arrival</Label>
                <Input type="datetime-local" />
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Updates</h2>
          
          <div className="space-y-4">
            <div>
              <Label>Notes</Label>
              <Textarea placeholder="Add update notes..." rows={3} />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Button variant="outline" className="flex flex-col gap-2 h-20">
                <Camera className="w-5 h-5" />
                <span className="text-sm">Add Photo</span>
              </Button>
              <Button variant="outline" className="flex flex-col gap-2 h-20">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">Share Location</span>
              </Button>
              <Button variant="outline" className="flex flex-col gap-2 h-20">
                <Phone className="w-5 h-5" />
                <span className="text-sm">Contact Buyer</span>
              </Button>
            </div>
          </div>
        </Card>

        {status === "delivered" && (
          <Card className="p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Delivery Confirmation</h2>
            
            <div className="space-y-4">
              <div>
                <Label>Recipient Name</Label>
                <Input placeholder="Name of person who received" />
              </div>

              <div>
                <Label>Signature</Label>
                <div className="border-2 border-dashed border-border rounded-lg h-32 flex items-center justify-center text-muted-foreground">
                  Click to add signature
                </div>
              </div>

              <div>
                <Label>Issues</Label>
                <RadioGroup defaultValue="none">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="none" id="none" />
                    <Label htmlFor="none">None</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="damaged" id="damaged" />
                    <Label htmlFor="damaged">Damaged</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="partial" id="partial" />
                    <Label htmlFor="partial">Partial</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </Card>
        )}

        <Button className="w-full" size="lg">
          Update Status
        </Button>
      </div>
    </div>
  );
};

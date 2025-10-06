import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, Plus, Upload, Edit, User } from "lucide-react";
import { toast } from "sonner";

interface FleetManagementProps {
  onBack: () => void;
}

export const FleetManagement = ({ onBack }: FleetManagementProps) => {
  const [showRegisterVehicle, setShowRegisterVehicle] = useState(false);
  const [showDrivers, setShowDrivers] = useState(false);

  const vehicles = [
    { plate: "3A-45678", type: "Truck", status: "Active", driver: "Abebe Mekonnen" },
    { plate: "2B-12345", type: "Van", status: "Maintenance", driver: "Tigist Haile" },
  ];

  const drivers = [
    { name: "Abebe Mekonnen", phone: "+251911234567", vehicle: "3A-45678" },
    { name: "Tigist Haile", phone: "+251922345678", vehicle: "2B-12345" },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="bg-card border-b border-border">
        <div className="container px-4 py-6">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold">Fleet Management</h1>
        </div>
      </div>

      <div className="container px-4 py-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Vehicles */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Vehicles</h2>
              <Button variant="outline" size="sm" onClick={() => setShowRegisterVehicle(true)}>
                <Plus className="w-4 h-4" />
                Add Vehicle
              </Button>
            </div>
            
            <div className="space-y-3">
              {vehicles.map((vehicle, index) => (
                <div key={index} className="p-4 rounded-lg border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold">{vehicle.plate}</p>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      vehicle.status === 'Active' ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'
                    }`}>
                      {vehicle.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{vehicle.type}</p>
                  <p className="text-sm text-muted-foreground">Driver: {vehicle.driver}</p>
                  <Button variant="ghost" size="sm" className="mt-2">
                    <Edit className="w-4 h-4" />
                    Edit
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          {/* Drivers */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Drivers</h2>
              <Button variant="outline" size="sm" onClick={() => setShowDrivers(true)}>
                <Plus className="w-4 h-4" />
                Add Driver
              </Button>
            </div>
            
            <div className="space-y-3">
              {drivers.map((driver, index) => (
                <div key={index} className="p-4 rounded-lg border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{driver.name}</p>
                      <p className="text-sm text-muted-foreground">{driver.phone}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Vehicle: {driver.vehicle}</p>
                  <Button variant="ghost" size="sm" className="mt-2">
                    <Edit className="w-4 h-4" />
                    Edit
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Register Vehicle Form */}
        {showRegisterVehicle && (
          <Card className="p-6 mt-6">
            <h2 className="text-xl font-bold mb-4">Register New Vehicle</h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="plate">Plate Number *</Label>
                  <Input id="plate" placeholder="e.g., 3A-45678" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                    <option>Truck</option>
                    <option>Van</option>
                    <option>Pickup</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="capacity">Capacity (kg)</Label>
                  <Input id="capacity" type="number" placeholder="5000" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="make">Make</Label>
                  <Input id="make" placeholder="Toyota" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="model">Model</Label>
                  <Input id="model" placeholder="Hilux" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Year</Label>
                  <Input id="year" type="number" placeholder="2020" />
                </div>
              </div>

              <div>
                <Label className="mb-3 block">Documents</Label>
                <div className="grid md:grid-cols-4 gap-3">
                  <Button variant="outline" size="sm">
                    <Upload className="w-4 h-4" />
                    Insurance
                  </Button>
                  <Button variant="outline" size="sm">
                    <Upload className="w-4 h-4" />
                    Registration
                  </Button>
                  <Button variant="outline" size="sm">
                    <Upload className="w-4 h-4" />
                    License
                  </Button>
                  <Button variant="outline" size="sm">
                    <Upload className="w-4 h-4" />
                    Inspection
                  </Button>
                </div>
              </div>

              <div>
                <Label className="mb-3 block">Status</Label>
                <RadioGroup defaultValue="active">
                  <div className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="active" id="active" />
                      <Label htmlFor="active" className="cursor-pointer">Active</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="maintenance" id="maintenance" />
                      <Label htmlFor="maintenance" className="cursor-pointer">Maintenance</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="flex gap-3">
                <Button variant="hero" onClick={() => {
                  toast.success("Vehicle registered successfully!");
                  setShowRegisterVehicle(false);
                }}>
                  Register Vehicle
                </Button>
                <Button variant="outline" onClick={() => setShowRegisterVehicle(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Add Driver Form */}
        {showDrivers && (
          <Card className="p-6 mt-6">
            <h2 className="text-xl font-bold mb-4">Add New Driver</h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="driver-name">Name *</Label>
                  <Input id="driver-name" placeholder="Enter driver name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="driver-phone">Phone *</Label>
                  <Input id="driver-phone" placeholder="+251..." />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="driver-vehicle">Assign Vehicle</Label>
                  <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                    <option>3A-45678</option>
                    <option>2B-12345</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Upload License</Label>
                  <Button variant="outline" className="w-full">
                    <Upload className="w-4 h-4" />
                    Upload Document
                  </Button>
                </div>
              </div>

              <div>
                <Label className="mb-3 block">Status</Label>
                <RadioGroup defaultValue="active">
                  <div className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="active" id="driver-active" />
                      <Label htmlFor="driver-active" className="cursor-pointer">Active</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="inactive" id="driver-inactive" />
                      <Label htmlFor="driver-inactive" className="cursor-pointer">Inactive</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="flex gap-3">
                <Button variant="hero" onClick={() => {
                  toast.success("Driver added successfully!");
                  setShowDrivers(false);
                }}>
                  Add Driver
                </Button>
                <Button variant="outline" onClick={() => setShowDrivers(false)}>
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

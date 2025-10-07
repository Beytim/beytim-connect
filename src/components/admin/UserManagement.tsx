import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, BarChart3 } from "lucide-react";

interface UserManagementProps {
  onBack: () => void;
}

export const UserManagement = ({ onBack }: UserManagementProps) => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const users = [
    { id: "1", name: "Mohamed Ali", type: "Buyer" },
    { id: "2", name: "Abebe Logistics", type: "Freight" },
    { id: "3", name: "Aqua Addis", type: "Supplier" },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="bg-card border-b border-border">
        <div className="container px-4 py-6">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-3xl font-bold mb-2">User Management</h1>
        </div>
      </div>

      <div className="container px-4 py-8 max-w-3xl">
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">User List</h2>
          <div className="space-y-2">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 cursor-pointer"
                onClick={() => setSelectedUser(user.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-medium">{user.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-muted-foreground">{user.type}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Manage</Button>
                  <Button variant="outline" size="sm">Suspend</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {selectedUser && (
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">User Details</h2>
            
            <div className="space-y-4">
              <div>
                <Label>Type</Label>
                <Select defaultValue="buyer">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buyer">Buyer</SelectItem>
                    <SelectItem value="freight">Freight Partner</SelectItem>
                    <SelectItem value="supplier">Supplier</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Name</Label>
                <Input placeholder="User name" defaultValue="Mohamed Ali" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Phone</Label>
                  <Input placeholder="Phone number" defaultValue="+251911234567" />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input placeholder="Email address" defaultValue="mohamed@example.com" />
                </div>
              </div>

              <div>
                <Label>Status</Label>
                <RadioGroup defaultValue="active">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="active" id="active" />
                    <Label htmlFor="active">Active</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="suspended" id="suspended" />
                    <Label htmlFor="suspended">Suspended</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label>Join Date</Label>
                <Input type="date" defaultValue="2025-01-15" />
              </div>

              <div>
                <Label className="text-base font-semibold mb-3 block">Permissions</Label>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Checkbox id="create" defaultChecked />
                    <label htmlFor="create">Can create orders</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox id="modify" defaultChecked />
                    <label htmlFor="modify">Can modify orders</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox id="support" defaultChecked />
                    <label htmlFor="support">Can contact support</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox id="notifications" defaultChecked />
                    <label htmlFor="notifications">Receive notifications</label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <Button size="lg">
                  Save Changes
                </Button>
                <Button variant="outline" size="lg" className="flex gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Activity Log
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

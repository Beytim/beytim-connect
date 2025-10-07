import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MessageSquare, Paperclip } from "lucide-react";

export const SupportTicketing = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="bg-card border-b border-border">
        <div className="container px-4 py-6">
          <h1 className="text-3xl font-bold mb-2">Support Center</h1>
          <p className="text-muted-foreground">Get help with your orders and account</p>
        </div>
      </div>

      <div className="container px-4 py-8 max-w-3xl">
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">My Tickets</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <div>
                  <div className="font-medium">#TKT001 - Delivery Issue</div>
                  <div className="text-sm text-muted-foreground">Order #REQ001 • 2 hours ago</div>
                </div>
              </div>
              <Button variant="outline" size="sm">View</Button>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-success"></div>
                <div>
                  <div className="font-medium">#TKT002 - Payment Question</div>
                  <div className="text-sm text-muted-foreground">Order #REQ005 • Resolved</div>
                </div>
              </div>
              <Button variant="outline" size="sm">View</Button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">New Ticket</h2>
          
          <div className="space-y-4">
            <div>
              <Label>Regarding</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="req001">Order #REQ001</SelectItem>
                  <SelectItem value="req002">Order #REQ002</SelectItem>
                  <SelectItem value="req003">Order #REQ003</SelectItem>
                  <SelectItem value="general">General Inquiry</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Issue Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select issue type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="delivery">Delivery Issue</SelectItem>
                  <SelectItem value="payment">Payment Issue</SelectItem>
                  <SelectItem value="quality">Product Quality</SelectItem>
                  <SelectItem value="account">Account Issue</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Priority</Label>
              <RadioGroup defaultValue="medium">
                <div className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="low" id="low" />
                    <Label htmlFor="low">Low</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium">Medium</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="high" id="high" />
                    <Label htmlFor="high">High</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label>Description</Label>
              <Textarea 
                placeholder="Please describe your issue in detail..." 
                rows={5}
              />
            </div>

            <div>
              <Label>Attachments</Label>
              <Button variant="outline" className="w-full flex gap-2">
                <Paperclip className="w-4 h-4" />
                Add photos or documents
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <Button size="lg">
                Submit Ticket
              </Button>
              <Button variant="outline" size="lg" className="flex gap-2">
                <MessageSquare className="w-4 h-4" />
                Live Chat
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

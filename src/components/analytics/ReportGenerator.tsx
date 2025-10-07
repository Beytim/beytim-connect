import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RefreshCw, Download, Save } from "lucide-react";

export const ReportGenerator = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="bg-card border-b border-border">
        <div className="container px-4 py-6">
          <h1 className="text-3xl font-bold mb-2">Generate Report</h1>
          <p className="text-muted-foreground">Create custom reports with specific parameters</p>
        </div>
      </div>

      <div className="container px-4 py-8 max-w-3xl">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Report Parameters</h2>
          
          <div className="space-y-6">
            <div>
              <Label>Period</Label>
              <Select defaultValue="30days">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7days">Last 7 days</SelectItem>
                  <SelectItem value="30days">Last 30 days</SelectItem>
                  <SelectItem value="90days">Last 90 days</SelectItem>
                  <SelectItem value="12months">Last 12 months</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Report Type</Label>
              <Select defaultValue="sales">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Sales Report</SelectItem>
                  <SelectItem value="user">User Activity Report</SelectItem>
                  <SelectItem value="supplier">Supplier Performance</SelectItem>
                  <SelectItem value="freight">Freight Metrics</SelectItem>
                  <SelectItem value="financial">Financial Summary</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Format</Label>
              <RadioGroup defaultValue="pdf">
                <div className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pdf" id="pdf" />
                    <Label htmlFor="pdf">PDF</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="excel" id="excel" />
                    <Label htmlFor="excel">Excel</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="csv" id="csv" />
                    <Label htmlFor="csv">CSV</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="text-base font-semibold mb-3 block">Data to Include</Label>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Checkbox id="orders" defaultChecked />
                  <label htmlFor="orders">Orders & Revenue</label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="users" defaultChecked />
                  <label htmlFor="users">User Activity</label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="suppliers" defaultChecked />
                  <label htmlFor="suppliers">Supplier Performance</label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="freight" defaultChecked />
                  <label htmlFor="freight">Freight Metrics</label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="financial" defaultChecked />
                  <label htmlFor="financial">Financial Summary</label>
                </div>
              </div>
            </div>

            <div>
              <Label className="text-base font-semibold mb-3 block">Filters</Label>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label className="text-sm">Region</Label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Regions</SelectItem>
                      <SelectItem value="addis">Addis Ababa</SelectItem>
                      <SelectItem value="hawassa">Hawassa</SelectItem>
                      <SelectItem value="bahirdar">Bahir Dar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm">Category</Label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="beverages">Beverages</SelectItem>
                      <SelectItem value="food">Food</SelectItem>
                      <SelectItem value="supplies">Supplies</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm">Status</Label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <Button size="lg" className="flex gap-2">
                <RefreshCw className="w-4 h-4" />
                Generate
              </Button>
              <Button variant="outline" size="lg" className="flex gap-2">
                <Download className="w-4 h-4" />
                Export
              </Button>
              <Button variant="outline" size="lg" className="flex gap-2">
                <Save className="w-4 h-4" />
                Save Template
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

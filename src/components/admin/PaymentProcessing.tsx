import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, FileText, RefreshCw } from "lucide-react";

interface PaymentProcessingProps {
  onBack: () => void;
}

export const PaymentProcessing = ({ onBack }: PaymentProcessingProps) => {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const pendingPayments = [
    { id: "REQ001", buyer: "Mohamed Ali", amount: 2900 },
    { id: "REQ005", buyer: "Aster Mekonnen", amount: 4200 },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="bg-card border-b border-border">
        <div className="container px-4 py-6">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-3xl font-bold mb-2">Payment Management</h1>
        </div>
      </div>

      <div className="container px-4 py-8 max-w-3xl">
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Pending Payments</h2>
          <div className="space-y-3">
            {pendingPayments.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 cursor-pointer"
                onClick={() => setSelectedOrder(payment.id)}
              >
                <div>
                  <div className="font-medium">#{payment.id} - {payment.buyer}</div>
                  <div className="text-sm text-muted-foreground">{payment.amount} ETB</div>
                </div>
                <Button variant="outline" size="sm">Process</Button>
              </div>
            ))}
          </div>
        </Card>

        {selectedOrder && (
          <>
            <Card className="p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Process Payment #{selectedOrder}</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-muted-foreground">Buyer</Label>
                    <p className="font-medium">Mohamed Ali</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Amount</Label>
                    <p className="font-medium">2,900 ETB</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Method</Label>
                    <p className="font-medium">On Delivery</p>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <Label className="text-base font-semibold mb-3 block">Distribution</Label>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Supplier:</span>
                      <span className="font-medium">2,050 ETB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Freight:</span>
                      <span className="font-medium">700 ETB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Platform:</span>
                      <span className="font-medium">150 ETB</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Status</Label>
                  <RadioGroup defaultValue="collected">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="collected" id="collected" />
                      <Label htmlFor="collected">Collected</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pending" id="pending" />
                      <Label htmlFor="pending">Pending</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="failed" id="failed" />
                      <Label htmlFor="failed">Failed</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="refunded" id="refunded" />
                      <Label htmlFor="refunded">Refunded</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label>Notes</Label>
                  <Textarea placeholder="Add payment notes..." rows={3} />
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-3 gap-4">
              <Button className="flex gap-2" size="lg">
                Mark Paid
              </Button>
              <Button variant="outline" className="flex gap-2" size="lg">
                <FileText className="w-4 h-4" />
                Send Invoice
              </Button>
              <Button variant="outline" className="flex gap-2" size="lg">
                <RefreshCw className="w-4 h-4" />
                Refund
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

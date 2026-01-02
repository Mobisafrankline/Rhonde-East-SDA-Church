import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Heart, CreditCard, Smartphone, Building } from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '../context/AuthContext';

export function Giving() {
  const { accessToken } = useAuth();
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('tithe');
  const [method, setMethod] = useState('card');

  const handleDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!accessToken) {
      toast.error('Please sign in to make a donation');
      return;
    }

    // This is a demo - real implementation would integrate with payment processor
    toast.success('Donation processed successfully! (Demo mode)');
    setAmount('');
  };

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-heading font-bold mb-4">Online Giving</h1>
          <p className="text-xl text-muted-foreground">
            Support God's work through faithful giving
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Why Give?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tithe</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Returning 10% of our income to God, acknowledging Him as the source of all blessings.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Offerings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Freewill gifts beyond tithe, supporting various church ministries and projects.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Make a Donation</CardTitle>
            <CardDescription>Choose your donation amount and method</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleDonation} className="space-y-6">
              <div>
                <Label>Donation Type</Label>
                <RadioGroup value={type} onValueChange={setType} className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="tithe" id="tithe" />
                    <Label htmlFor="tithe">Tithe</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="offering" id="offering" />
                    <Label htmlFor="offering">Offering</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="building" id="building" />
                    <Label htmlFor="building">Building Fund</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="missions" id="missions" />
                    <Label htmlFor="missions">Missions</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  min="1"
                  step="0.01"
                />
              </div>

              <div>
                <Label>Payment Method</Label>
                <Select value={method} onValueChange={setMethod}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="card">
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4" />
                        Credit/Debit Card
                      </div>
                    </SelectItem>
                    <SelectItem value="mpesa">
                      <div className="flex items-center gap-2">
                        <Smartphone className="h-4 w-4" />
                        M-Pesa
                      </div>
                    </SelectItem>
                    <SelectItem value="bank">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        Bank Transfer
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Heart className="mr-2 h-5 w-5" />
                Give ${amount || '0.00'}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                This is a demonstration. In a production environment, this would integrate with secure payment processors like Stripe, PayPal, or M-Pesa.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

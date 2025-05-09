import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Info, Calculator, DollarSign, Percent } from "lucide-react";
import { toast } from "sonner";
import { 
  calculateEtsyFees, 
  calculateProfit, 
  calculatePriceForProfit, 
  calculateSalePrice, 
  calculateOriginalPrice, 
  formatCurrency, 
  formatPercentage,
  OFFSITE_ADS_FEE_HIGH,
  OFFSITE_ADS_FEE_LOW
} from "@/utils/calculatorUtils";

const PricingCalculator = () => {
  // Input states
  const [productCost, setProductCost] = useState<number | undefined>(undefined);
  const [discount, setDiscount] = useState<number>(0);
  const [priceBeforeSale, setPriceBeforeSale] = useState<number | undefined>(undefined);
  const [priceAfterSale, setPriceAfterSale] = useState<number | undefined>(undefined);
  const [desiredProfit, setDesiredProfit] = useState<number | undefined>(undefined);
  const [shipping, setShipping] = useState<number>(0);
  const [offsiteAds, setOffsiteAds] = useState<boolean>(false);
  const [offsiteAdsFeePercent, setOffsiteAdsFeePercent] = useState<number>(OFFSITE_ADS_FEE_HIGH);

  // Output states
  const [calculatedProfit, setCalculatedProfit] = useState<number | undefined>(undefined);
  const [calculatedPriceBeforeSale, setCalculatedPriceBeforeSale] = useState<number | undefined>(undefined);
  const [calculatedPriceAfterSale, setCalculatedPriceAfterSale] = useState<number | undefined>(undefined);
  const [fees, setFees] = useState<any>({});
  const [profitMargin, setProfitMargin] = useState<number | undefined>(undefined);

  // Handle calculations whenever inputs change
  useEffect(() => {
    calculateResults();
  }, [productCost, discount, priceBeforeSale, priceAfterSale, desiredProfit, shipping, offsiteAds, offsiteAdsFeePercent]);

  // Parse input value to number or undefined
  const parseInput = (value: string): number | undefined => {
    const parsed = parseFloat(value);
    return isNaN(parsed) ? undefined : parsed;
  };

  // Handle calculation based on available inputs
  const calculateResults = () => {
    if (!productCost && productCost !== 0) {
      // Can't calculate without product cost
      return;
    }
    try {
      // Case 1: Both prices defined - validate they match the discount
      if (priceBeforeSale !== undefined && priceAfterSale !== undefined) {
        const expectedAfterSale = calculateSalePrice(priceBeforeSale, discount);
        if (Math.abs(expectedAfterSale - priceAfterSale) > 0.01) {
          // Prices don't match the discount percentage
          return;
        }
        const result = calculateProfit(priceAfterSale, productCost, shipping, offsiteAds, offsiteAdsFeePercent);
        setCalculatedProfit(result.profit);
        setFees(result.fees);
        setProfitMargin(result.profitMargin);
        setCalculatedPriceBeforeSale(priceBeforeSale);
        setCalculatedPriceAfterSale(priceAfterSale);
      }
      // Case 2: Desired profit defined - calculate both prices
      else if (desiredProfit !== undefined) {
        const result = calculatePriceForProfit(desiredProfit, productCost, shipping, discount, offsiteAds, offsiteAdsFeePercent);
        setCalculatedProfit(desiredProfit);
        setFees(result.fees);
        setCalculatedPriceBeforeSale(result.priceBeforeSale);
        setCalculatedPriceAfterSale(result.priceAfterSale);
        setProfitMargin(desiredProfit / result.priceAfterSale * 100);
      }
      // Case 3: Only pre-sale price defined - calculate after-sale price and profit
      else if (priceBeforeSale !== undefined) {
        const afterSale = calculateSalePrice(priceBeforeSale, discount);
        const result = calculateProfit(afterSale, productCost, shipping, offsiteAds, offsiteAdsFeePercent);
        setCalculatedProfit(result.profit);
        setFees(result.fees);
        setProfitMargin(result.profitMargin);
        setCalculatedPriceBeforeSale(priceBeforeSale);
        setCalculatedPriceAfterSale(afterSale);
      }
      // Case 4: Only after-sale price defined - calculate pre-sale price and profit
      else if (priceAfterSale !== undefined) {
        const beforeSale = calculateOriginalPrice(priceAfterSale, discount);
        const result = calculateProfit(priceAfterSale, productCost, shipping, offsiteAds, offsiteAdsFeePercent);
        setCalculatedProfit(result.profit);
        setFees(result.fees);
        setProfitMargin(result.profitMargin);
        setCalculatedPriceBeforeSale(beforeSale);
        setCalculatedPriceAfterSale(priceAfterSale);
      }
    } catch (error) {
      console.error("Calculation error:", error);
    }
  };

  // Manual calculate function for button
  const handleCalculate = () => {
    if (!productCost && productCost !== 0) {
      toast.error("Product cost is required");
      return;
    }
    calculateResults();
    toast.success("Calculation complete!");
  };
  
  return <div className="max-w-4xl mx-auto px-4">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 text-primary">Etsy Fee Calculator</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          This easy calculator will help you determine selling prices for your products in order to save money and increase profits
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              <span>Calculator Inputs</span>
            </CardTitle>
            <CardDescription>Enter your product details below</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              {/* Offsite Ads Toggle and Dropdown - Moved to top */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="offsiteAds" className="font-medium">Offsite Ads</Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">Calculate with Etsy Offsite Ads fee (15% or 12% of revenue)</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Switch id="offsiteAds" checked={offsiteAds} onCheckedChange={setOffsiteAds} />
                </div>
                
                {offsiteAds && (
                  <div className="space-y-2 pl-4 border-l-2 border-primary/20">
                    <Label htmlFor="offsiteAdsFee" className="text-sm text-muted-foreground">Fee Percentage</Label>
                    <Select value={offsiteAdsFeePercent.toString()} onValueChange={(value) => setOffsiteAdsFeePercent(parseFloat(value))}>
                      <SelectTrigger id="offsiteAdsFee">
                        <SelectValue placeholder="Select fee percentage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={OFFSITE_ADS_FEE_HIGH.toString()}>15% (Standard)</SelectItem>
                        <SelectItem value={OFFSITE_ADS_FEE_LOW.toString()}>12% (Over $10k in sales)</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground mt-1">
                      {offsiteAdsFeePercent === OFFSITE_ADS_FEE_LOW ? 
                        "12% applies if you've made over $10,000 in sales in the past 365 days" : 
                        "15% applies to most sellers"}
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="productCost" className="font-medium">Product Cost + Shipping Cost</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 ml-2 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">The cost to fulfill the order (materials, labor, etc.)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="productCost" type="number" placeholder="0.00" min="0" step="0.01" className="pl-10" value={productCost === undefined ? '' : productCost} onChange={e => setProductCost(parseInput(e.target.value))} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="discount" className="font-medium">Your Daily Sale Discount %</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 ml-2 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Percentage discount from original price (e.g. 20 for 20% off)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="relative">
                  <Percent className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="discount" type="number" placeholder="0" min="0" max="100" className="pl-10" value={discount === 0 ? '' : discount} onChange={e => setDiscount(parseInput(e.target.value) ?? 0)} />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="priceBeforeSale" className="font-medium">Product Price Before Sale</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 ml-2 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Original listing price before any discount (optional)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="priceBeforeSale" type="number" placeholder="0.00" min="0" step="0.01" className="pl-10" value={priceBeforeSale === undefined ? '' : priceBeforeSale} onChange={e => {
                  setPriceBeforeSale(parseInput(e.target.value));
                  // Clear conflicting fields
                  if (e.target.value) {
                    setDesiredProfit(undefined);
                  }
                }} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="priceAfterSale" className="font-medium">Product Price After Sale</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 ml-2 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Final listing price after any discount is applied (optional)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="priceAfterSale" type="number" placeholder="0.00" min="0" step="0.01" className="pl-10" value={priceAfterSale === undefined ? '' : priceAfterSale} onChange={e => {
                  setPriceAfterSale(parseInput(e.target.value));
                  // Clear conflicting fields
                  if (e.target.value) {
                    setDesiredProfit(undefined);
                  }
                }} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="desiredProfit" className="font-medium">Desired Profit</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 ml-2 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Target profit amount after all fees (optional)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="desiredProfit" type="number" placeholder="0.00" min="0" step="0.01" className="pl-10" value={desiredProfit === undefined ? '' : desiredProfit} onChange={e => {
                  setDesiredProfit(parseInput(e.target.value));
                  // Clear conflicting fields
                  if (e.target.value) {
                    setPriceBeforeSale(undefined);
                    setPriceAfterSale(undefined);
                  }
                }} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="shipping" className="font-medium">Your Shipping Charge</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="h-4 w-4 ml-2 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Amount charged to customer for shipping (fees apply to this)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="shipping" type="number" placeholder="0.00" min="0" step="0.01" className="pl-10" value={shipping === 0 ? '' : shipping} onChange={e => setShipping(parseInput(e.target.value) ?? 0)} />
                </div>
              </div>
            </div>
            
            <Button className="w-full" size="lg" onClick={handleCalculate}>
              Calculate
            </Button>
          </CardContent>
        </Card>

        {/* Results Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              <span>Results</span>
            </CardTitle>
            <CardDescription>Your calculated prices and profit</CardDescription>
          </CardHeader>
          <CardContent>
            {calculatedProfit !== undefined && <div className="space-y-6">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Recommended Price</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Before Sale</p>
                      <p className="text-2xl font-bold">
                        {calculatedPriceBeforeSale !== undefined ? formatCurrency(calculatedPriceBeforeSale) : '-'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">After Sale</p>
                      <p className="text-2xl font-bold">
                        {calculatedPriceAfterSale !== undefined ? formatCurrency(calculatedPriceAfterSale) : '-'}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">Profit</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-2xl font-bold">{formatCurrency(calculatedProfit)}</p>
                      {profitMargin !== undefined && <span className={`px-2 py-1 rounded text-xs font-medium ${profitMargin > 20 ? 'bg-green-100 text-green-800' : profitMargin > 0 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                          {formatPercentage(profitMargin)} margin
                        </span>}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium">Fee Breakdown</h3>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Listing Fee</span>
                        <span>{fees.listingFee ? formatCurrency(fees.listingFee) : '-'}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Transaction Fee (6.5%)</span>
                        <span>{fees.transactionFee ? formatCurrency(fees.transactionFee) : '-'}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Processing Fee (3% + $0.25)</span>
                        <span>{fees.processingFee ? formatCurrency(fees.processingFee) : '-'}</span>
                      </div>
                      {offsiteAds && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Offsite Ads Fee ({(offsiteAdsFeePercent * 100).toFixed(0)}%)
                          </span>
                          <span>{fees.offsiteAdsFee ? formatCurrency(fees.offsiteAdsFee) : '-'}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm font-medium pt-2">
                        <span>Total Fees</span>
                        <span>{fees.totalFees ? formatCurrency(fees.totalFees) : '-'}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Revenue</p>
                      <p className="font-medium">
                        {calculatedPriceAfterSale !== undefined ? formatCurrency(calculatedPriceAfterSale + shipping) : '-'}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Product Cost</p>
                      <p className="font-medium">{productCost !== undefined ? formatCurrency(productCost) : '-'}</p>
                    </div>
                    {shipping > 0 && <>
                        <div>
                          <p className="text-muted-foreground">Shipping Charge</p>
                          <p className="font-medium">{formatCurrency(shipping)}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Total Fees</p>
                          <p className="font-medium">{fees.totalFees ? formatCurrency(fees.totalFees) : '-'}</p>
                        </div>
                      </>}
                  </div>
                </div>
              </div>}
            
            {calculatedProfit === undefined && <div className="flex flex-col items-center justify-center h-[400px] text-center p-6">
                <Info className="h-12 w-12 text-muted-foreground/50 mb-4" />
                <h3 className="text-xl font-medium mb-2">Enter Your Details</h3>
                <p className="text-muted-foreground">
                  Fill in the required fields to see your pricing calculations and profit analysis.
                </p>
              </div>}
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8 bg-muted p-6 rounded-lg">
        <h2 className="text-lg font-medium mb-3">About Etsy Fees</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
          <div>
            <h3 className="font-medium mb-1">Listing Fee</h3>
            <p className="text-muted-foreground">$0.20 per item</p>
          </div>
          <div>
            <h3 className="font-medium mb-1">Transaction Fee</h3>
            <p className="text-muted-foreground">6.5% of total sale price (including shipping)</p>
          </div>
          <div>
            <h3 className="font-medium mb-1">Processing Fee</h3>
            <p className="text-muted-foreground">3% + $0.25 of total sale price (including shipping)</p>
          </div>
          <div>
            <h3 className="font-medium mb-1">Offsite Ads Fee</h3>
            <p className="text-muted-foreground">15% standard or 12% for sellers with over $10k in sales</p>
          </div>
        </div>
      </div>
    </div>;
};

export default PricingCalculator;

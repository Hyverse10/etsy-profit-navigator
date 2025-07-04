
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Data for the pricing comparison
const pricingData = [
  { 
    size: 'S-XL', 
    printifyBase: 10.67, 
    printifyShipping: 4.75, 
    printifyTotal: 15.42,
    monsterBase: 10.89,
    monsterShipping: 4.75,
    monsterTotal: 15.64
  },
  { 
    size: '2XL', 
    printifyBase: 11.71, 
    printifyShipping: 4.75, 
    printifyTotal: 16.46,
    monsterBase: 11.92,
    monsterShipping: 4.75,
    monsterTotal: 16.67
  },
  { 
    size: '3XL', 
    printifyBase: 13.36, 
    printifyShipping: 4.75, 
    printifyTotal: 18.11,
    monsterBase: 13.36,
    monsterShipping: 4.75,
    monsterTotal: 18.11
  },
  { 
    size: '4XL', 
    printifyBase: 15.14, 
    printifyShipping: 4.75, 
    printifyTotal: 19.89,
    monsterBase: null,
    monsterShipping: null,
    monsterTotal: null
  }
];

const ProductCosts = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-slate-800">Product Costs for Comfort Colors C1717</h2>
      
      <div className="prose max-w-none">
        <p>
          Before pricing your products, you need to know exactly how much each shirt costs you — that includes both the base price and the shipping cost. 
          This section breaks that down for Comfort Colors C1717 shirts, one of the most popular blanks for Etsy sellers. 
          You can choose between two providers: Printify Choice and Monster Digital.
        </p>
      </div>
      
      {/* Detailed cost breakdown table with improved visual differentiation */}
      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Detailed Cost Breakdown</h3>
        
        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableCaption>Cost breakdown for Comfort Colors C1717 shirts by size and provider</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead rowSpan={2} className="bg-purple-100 text-purple-800">Size</TableHead>
                <TableHead colSpan={3} className="text-center border-b bg-blue-50 text-blue-800">Printify Choice</TableHead>
                <TableHead colSpan={3} className="text-center border-b bg-orange-50 text-orange-800">Monster Digital</TableHead>
              </TableRow>
              <TableRow>
                <TableHead className="bg-blue-50 text-blue-700">Base</TableHead>
                <TableHead className="bg-blue-50 text-blue-700">Shipping</TableHead>
                <TableHead className="bg-blue-50 text-blue-700 font-bold">Total</TableHead>
                <TableHead className="bg-orange-50 text-orange-700">Base</TableHead>
                <TableHead className="bg-orange-50 text-orange-700">Shipping</TableHead>
                <TableHead className="bg-orange-50 text-orange-700 font-bold">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricingData.map((row, index) => (
                <TableRow key={row.size} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                  <TableCell className="font-medium bg-purple-50 text-purple-900">{row.size}</TableCell>
                  <TableCell className="bg-blue-50/40">${row.printifyBase.toFixed(2)}</TableCell>
                  <TableCell className="bg-blue-50/40">${row.printifyShipping.toFixed(2)}</TableCell>
                  <TableCell className="font-medium bg-blue-50/40">${row.printifyTotal.toFixed(2)}</TableCell>
                  <TableCell className="bg-orange-50/40">{row.monsterBase ? `$${row.monsterBase.toFixed(2)}` : 'N/A'}</TableCell>
                  <TableCell className="bg-orange-50/40">{row.monsterShipping ? `$${row.monsterShipping.toFixed(2)}` : 'N/A'}</TableCell>
                  <TableCell className="font-medium bg-orange-50/40">{row.monsterTotal ? `$${row.monsterTotal.toFixed(2)}` : 'N/A'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      
      {/* Provider notes */}
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Provider Comparison</AlertTitle>
        <AlertDescription>
          <p className="mt-2">
            Printify Choice tends to fulfill quicker, while Monster Digital is known for quality consistency. 
            Either one is reliable, but you'll want to factor in cost differences when deciding on your pricing strategy.
          </p>
          <p className="mt-2">
            <strong>Note:</strong> Monster Digital doesn't offer 4XL size for this product.
          </p>
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default ProductCosts;

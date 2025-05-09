
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
import { 
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { 
  Bar, 
  BarChart, 
  CartesianGrid, 
  Legend, 
  ResponsiveContainer, 
  XAxis, 
  YAxis 
} from "recharts";
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

// Chart data formated for Recharts
const chartData = pricingData.map(item => ({
  size: item.size,
  'Printify Choice': item.printifyTotal,
  'Monster Digital': item.monsterTotal || 0
}));

const ProductCosts = () => {
  const chartConfig = {
    'Printify Choice': {
      label: 'Printify Choice',
      theme: {
        light: '#3b82f6', // blue-500
        dark: '#60a5fa'   // blue-400
      }
    },
    'Monster Digital': {
      label: 'Monster Digital',
      theme: {
        light: '#f97316', // orange-500
        dark: '#fb923c'   // orange-400
      }
    }
  };

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
      
      {/* Visual cost comparison chart */}
      <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
        <h3 className="text-lg font-medium mb-4">Total Cost Comparison by Size</h3>
        
        <div className="h-72">
          <ChartContainer config={chartConfig}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="size" />
              <YAxis tickFormatter={(value) => `$${value}`} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar dataKey="Printify Choice" name="Printify Choice" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Monster Digital" name="Monster Digital" fill="#f97316" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
      
      {/* Detailed cost breakdown table */}
      <div>
        <h3 className="text-lg font-medium mb-4">Detailed Cost Breakdown</h3>
        
        <div className="rounded-md border">
          <Table>
            <TableCaption>Cost breakdown for Comfort Colors C1717 shirts by size and provider</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead rowSpan={2}>Size</TableHead>
                <TableHead colSpan={3} className="text-center border-b">Printify Choice</TableHead>
                <TableHead colSpan={3} className="text-center border-b">Monster Digital</TableHead>
              </TableRow>
              <TableRow>
                <TableHead>Base</TableHead>
                <TableHead>Shipping</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Base</TableHead>
                <TableHead>Shipping</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricingData.map((row) => (
                <TableRow key={row.size}>
                  <TableCell className="font-medium">{row.size}</TableCell>
                  <TableCell>${row.printifyBase.toFixed(2)}</TableCell>
                  <TableCell>${row.printifyShipping.toFixed(2)}</TableCell>
                  <TableCell className="font-medium">${row.printifyTotal.toFixed(2)}</TableCell>
                  <TableCell>{row.monsterBase ? `$${row.monsterBase.toFixed(2)}` : 'N/A'}</TableCell>
                  <TableCell>{row.monsterShipping ? `$${row.monsterShipping.toFixed(2)}` : 'N/A'}</TableCell>
                  <TableCell className="font-medium">{row.monsterTotal ? `$${row.monsterTotal.toFixed(2)}` : 'N/A'}</TableCell>
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

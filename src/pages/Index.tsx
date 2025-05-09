
import { Calculator } from "lucide-react";
import PricingCalculator from "@/components/PricingCalculator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-slate-800">Etsy Profit Navigator</h1>
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md">
              <Calculator className="h-4 w-4" />
              <span>Pricing Calculator</span>
            </div>
          </div>
          
          <PricingCalculator />
        </div>
      </div>
    </div>
  );
};

export default Index;

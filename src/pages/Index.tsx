
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PricingCalculator from "@/components/PricingCalculator";
import SEOTool from "@/components/SEOTool";
import { Tag, Calculator } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-slate-800">Etsy Profit Navigator</h1>
        
        <Tabs defaultValue="pricing" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <TabsList className="grid grid-cols-2 w-[400px]">
              <TabsTrigger value="pricing" className="flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                <span>Pricing Calculator</span>
              </TabsTrigger>
              <TabsTrigger value="seo" className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                <span>SEO Tool</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="pricing">
            <PricingCalculator />
          </TabsContent>
          
          <TabsContent value="seo">
            <SEOTool />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;

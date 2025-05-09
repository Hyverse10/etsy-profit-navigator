
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProductCosts from "@/components/ExposureGuide/ProductCosts";
import MarketResearch from "@/components/ExposureGuide/MarketResearch";
import PricingStrategy from "@/components/ExposureGuide/PricingStrategy";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ExposureGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Link to="/" className="flex items-center text-sm text-slate-600 hover:text-slate-900 transition-colors">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Profit Guide
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-8 text-slate-800">Exposure Guide</h1>
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-slate-600 mb-6">
              This guide will help you understand how to price your products effectively for maximum exposure and profit on Etsy.
            </p>
            
            <Tabs defaultValue="product-costs" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
                <TabsTrigger value="product-costs">Product Costs</TabsTrigger>
                <TabsTrigger value="market-research">Market Research</TabsTrigger>
                <TabsTrigger value="pricing-strategy">Pricing Strategy</TabsTrigger>
                <TabsTrigger value="pricing-psychology">Pricing Psychology</TabsTrigger>
              </TabsList>
              
              <TabsContent value="product-costs" className="pt-6">
                <ProductCosts />
              </TabsContent>
              <TabsContent value="market-research" className="pt-6">
                <MarketResearch />
              </TabsContent>
              <TabsContent value="pricing-strategy" className="pt-6">
                <PricingStrategy />
              </TabsContent>
              <TabsContent value="pricing-psychology" className="pt-6">
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-slate-800">Pricing Psychology</h2>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <p className="text-amber-800 font-medium">Coming soon!</p>
                    <p className="text-amber-700 mt-2">This section will cover psychological pricing tactics to boost your sales, including:</p>
                    <ul className="mt-3 space-y-2 text-amber-700">
                      <li>• Creating the perception of value with strategic discounts</li>
                      <li>• Using charm pricing ($19.99 vs $20) to drive conversions</li>
                      <li>• Implementing bait pricing with your most popular variants</li>
                      <li>• Leveraging the contrast effect in your product listings</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExposureGuide;


import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProductCosts from "@/components/ExposureGuide/ProductCosts";
import MarketResearch from "@/components/ExposureGuide/MarketResearch";
import PricingStrategy from "@/components/ExposureGuide/PricingStrategy";
import PricingPsychology from "@/components/ExposureGuide/PricingPsychology";
import { NavigationBar } from "@/components/home/NavigationBar";

const ExposureGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <NavigationBar />
      
      <div className="container mx-auto px-4 py-12">
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
                <TabsTrigger value="pricing-psychology">Pricing Psychology</TabsTrigger>
                <TabsTrigger value="pricing-strategy">Pricing Strategy</TabsTrigger>
              </TabsList>
              
              <TabsContent value="product-costs" className="pt-6">
                <ProductCosts />
              </TabsContent>
              <TabsContent value="market-research" className="pt-6">
                <MarketResearch />
              </TabsContent>
              <TabsContent value="pricing-psychology" className="pt-6">
                <PricingPsychology />
              </TabsContent>
              <TabsContent value="pricing-strategy" className="pt-6">
                <PricingStrategy />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <footer className="bg-slate-50 py-8 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} List2Profits | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default ExposureGuide;

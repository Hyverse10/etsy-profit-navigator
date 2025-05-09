
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Star, Search, TrendingUp } from "lucide-react";

const MarketResearch = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-slate-800">Market Research Guide</h2>
      
      <div className="prose max-w-none">
        <p className="text-slate-600">
          Before you decide what to charge, you need to understand what similar, successful sellers are already doing.
          Etsy has been flooded with print-on-demand products for years — so instead of trying to reinvent the wheel,
          your goal should be to replicate what's working.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-l-4 border-l-blue-500 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-lg font-medium">
              <Search className="h-5 w-5 mr-2 text-blue-500" />
              Search Strategy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600">
              Start by searching for shirts similar to yours on Etsy. Pay attention to:
            </p>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li className="flex items-start">
                <Star className="h-5 w-5 mr-2 mt-0.5 text-amber-500 flex-shrink-0" />
                <span>Sellers with a <strong>4.8 to 5-star</strong> average rating and <strong>100+ reviews</strong> – this shows consistency and reliability.</span>
              </li>
              <li className="flex items-start">
                <Star className="h-5 w-5 mr-2 mt-0.5 text-amber-500 flex-shrink-0" />
                <span>Listings with the <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded font-medium">Bestseller</span> badge – Etsy doesn't give this out randomly.</span>
              </li>
              <li className="flex items-start">
                <Star className="h-5 w-5 mr-2 mt-0.5 text-amber-500 flex-shrink-0" />
                <span>Shops selling the same shirt type, especially Comfort Colors C1717.</span>
              </li>
              <li className="flex items-start">
                <Star className="h-5 w-5 mr-2 mt-0.5 text-amber-500 flex-shrink-0" />
                <span>Their shipping prices – are they offering free shipping or charging extra?</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center text-lg font-medium">
              <TrendingUp className="h-5 w-5 mr-2 text-purple-500" />
              Pricing Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600">
              Most of these top sellers price their shirts between <strong className="text-purple-700">$25–$30</strong> and typically run <strong className="text-purple-700">30–50% off sales</strong> to attract buyers.
            </p>
            <p className="mt-3 text-slate-600">
              As a new seller, matching their prices may not be enough to compete since they already have built-in social proof (reviews, favorites, past sales). 
              That's where pricing strategy and psychological pricing tactics can help — both of which we'll cover in the next sections.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-6 border border-amber-200">
        <h3 className="text-lg font-medium text-amber-800 flex items-center mb-4">
          <AlertCircle className="h-5 w-5 mr-2" />
          Pro Tips
        </h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-amber-200 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center font-semibold mr-3 mt-0.5 flex-shrink-0">
              1
            </div>
            <p className="text-slate-700">
              Use an <strong>incognito window</strong> when researching Etsy — this avoids personalized search results and helps you find fresh listings instead of ones you've previously clicked.
            </p>
          </div>
          <div className="flex items-start">
            <div className="bg-amber-200 text-amber-800 rounded-full h-6 w-6 flex items-center justify-center font-semibold mr-3 mt-0.5 flex-shrink-0">
              2
            </div>
            <div className="text-slate-700">
              <p>Create a simple spreadsheet where you log each top seller's:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Product price</li>
                <li>Shipping cost</li>
                <li>Estimated profit (using your calculator)</li>
                <li>Total sales and number of reviews</li>
              </ul>
              <p className="mt-2">
                This becomes your <strong>replication list</strong> — a reference point for what success looks like and a blueprint for how to compete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketResearch;

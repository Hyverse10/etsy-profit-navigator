
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Tag, Star, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PricingStrategy = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-slate-800">Pricing Strategy</h2>
      
      <div className="prose max-w-none">
        <p className="text-slate-600">
          Once you've done your market research, use the calculator tool on this site to figure out 
          how much profit other sellers are making per sale after fees and shipping. This gives you a 
          clear target range to work from — not just pricing blindly, but understanding what works and why.
        </p>
        <p className="text-slate-600 mt-4">
          Your pricing goal should be to find the sweet spot between making a profit and staying competitive. 
          And that sweet spot looks very different for new sellers compared to established ones.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="border-l-4 border-l-emerald-500 shadow-md overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-emerald-50 to-transparent pb-2">
            <CardTitle className="flex items-center text-lg font-medium text-emerald-800">
              <Tag className="h-5 w-5 mr-2 text-emerald-600" />
              For New Sellers: Focus on Sales, Not Profit
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600">
              Starting out, your priority should be generating sales and building social proof — 
              not squeezing out max profit from day one. Here's how to approach it:
            </p>
            <ul className="mt-4 space-y-4 text-slate-600">
              <li className="flex items-start">
                <div className="bg-emerald-100 text-emerald-700 rounded-full h-6 w-6 flex items-center justify-center font-medium mr-3 mt-0.5 flex-shrink-0">1</div>
                <span>Enter your shirt's product cost, the discount you plan to show, and your desired profit into the calculator tool.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-emerald-100 text-emerald-700 rounded-full h-6 w-6 flex items-center justify-center font-medium mr-3 mt-0.5 flex-shrink-0">2</div>
                <span>Aim for a consistent profit across all sizes, keeping the difference within $1–$2 between sizes.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-emerald-100 text-emerald-700 rounded-full h-6 w-6 flex items-center justify-center font-medium mr-3 mt-0.5 flex-shrink-0">3</div>
                <span>Understand that your best-performing size (usually S–XL) can be priced as a bait offer — this means you're breaking even or even taking a small loss on it to drive conversions and clicks.</span>
              </li>
            </ul>
            
            <div className="mt-6 bg-emerald-50 p-4 rounded-md flex items-center">
              <Calculator className="h-5 w-5 mr-3 text-emerald-600" />
              <div>
                <p className="font-medium text-emerald-800">Recommendation:</p>
                <p className="text-emerald-700">Aim for <strong>$3–$4 profit per shirt</strong> after Etsy fees. If you can afford it, go even lower or take a <strong>$1–$2 loss</strong> on your bait size to gain traction.</p>
              </div>
            </div>

            <div className="mt-5 border border-slate-200 rounded-md p-4 bg-slate-50">
              <p className="font-medium text-slate-700">Example for New Sellers:</p>
              <p className="mt-2 text-slate-600">
                Let's say your total cost for an S–XL shirt is <strong className="text-emerald-700">$15.42</strong>. 
                To make a <strong className="text-emerald-700">$3 profit</strong> while running a 50% off sale, 
                you'd set your listing price around <strong className="text-emerald-700">$14.99</strong> after 
                discount with <strong className="text-emerald-700">$5.99 shipping</strong>. 
                That comes out to a full price of <strong className="text-emerald-700">$40</strong> — but to 
                the customer, it looks like a major deal. Sizes 2XL–4XL will naturally cost more, so adjust accordingly.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-indigo-500 shadow-md overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-indigo-50 to-transparent pb-2">
            <CardTitle className="flex items-center text-lg font-medium text-indigo-800">
              <Star className="h-5 w-5 mr-2 text-indigo-600" />
              For Established Sellers (350–500+ Sales): Scale Your Profits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600">
              Once you hit around 350–500 sales and start collecting strong reviews, Etsy rewards 
              your listing with higher visibility. At this point, it's time to start raising your 
              prices and increasing your margins.
            </p>
            
            <div className="mt-6 bg-indigo-50 p-4 rounded-md flex items-center">
              <Calculator className="h-5 w-5 mr-3 text-indigo-600" />
              <div>
                <p className="font-medium text-indigo-800">Recommendation:</p>
                <p className="text-indigo-700">Adjust your pricing to make <strong>at least $7 profit per shirt</strong>. Keep your bait offer if it's working, but increase the price across other sizes and colors.</p>
              </div>
            </div>

            <div className="mt-5 border border-slate-200 rounded-md p-4 bg-slate-50">
              <p className="font-medium text-slate-700">Example for Established Sellers:</p>
              <p className="mt-2 text-slate-600">
                With the same <strong className="text-indigo-700">$15.42 cost</strong> and a 50% off sale, 
                you'd now aim to set your discounted price at <strong className="text-indigo-700">$19.99</strong> with 
                <strong className="text-indigo-700"> $5.99 shipping</strong>, making your full price about 
                <strong className="text-indigo-700"> $52</strong>. Etsy shoppers see a deal, you earn more per 
                sale, and your listing stays competitive.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg p-6 border border-slate-200">
        <div className="flex items-start">
          <TrendingUp className="h-5 w-5 mr-3 mt-1 text-slate-700" />
          <div>
            <p className="font-medium text-slate-800">Keep monitoring your competitors' prices and adjust every few weeks.</p>
            <p className="mt-1 text-slate-600">As your reviews grow, so should your profit margin.</p>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 mr-2">Coming next</Badge>
          <p className="text-slate-700">Ready to learn about psychological pricing tactics?</p>
        </div>
      </div>
    </div>
  );
};

export default PricingStrategy;

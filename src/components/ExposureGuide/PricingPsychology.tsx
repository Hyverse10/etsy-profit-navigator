
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Percent, DollarSign, BadgePercent, AlarmClock, TrendingUp } from "lucide-react";

const PricingPsychology = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-slate-800">Pricing Psychology: Sell Smarter by Framing It Right</h2>
      
      <div className="prose max-w-none">
        <p className="text-slate-600">
          People don't shop logically — they shop emotionally. That's why pricing psychology is one of the 
          most powerful tools you have as a seller. It's not just about how much you charge — it's about 
          how you present that price.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-l-4 border-l-purple-500 shadow-md overflow-hidden">
          <CardContent className="pt-6">
            <div className="flex items-start">
              <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-3 flex-shrink-0">
                <Percent className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium text-slate-800 text-lg">Use .99 or .95 Endings</h3>
                <p className="mt-2 text-slate-600">
                  A shirt priced at $24.99 will almost always convert better than one at $25. 
                  These endings feel like a deal and are psychologically more appealing. Always round 
                  your final prices to end in .99 or .95 to boost conversions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-teal-500 shadow-md overflow-hidden">
          <CardContent className="pt-6">
            <div className="flex items-start">
              <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center mr-3 flex-shrink-0">
                <BadgePercent className="h-4 w-4 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-slate-800 text-lg">Always Show a Discount</h3>
                <p className="mt-2 text-slate-600">
                  Customers love feeling like they're getting a bargain. The best way to trigger this 
                  emotion is to run a permanent sale. We recommend setting your retail price high and 
                  running a 30–50% off sale every day. This can easily be done in Etsy under 
                  <strong> Marketing &gt; Sales &amp; Discounts</strong>.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500 shadow-md overflow-hidden">
          <CardContent className="pt-6">
            <div className="flex items-start">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                <DollarSign className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-slate-800 text-lg">Encourage Bundling</h3>
                <p className="mt-2 text-slate-600">
                  Boost your average order value by offering a 5% discount when customers buy 3 
                  or more items. Etsy tracks order volume and listing popularity, so the more units 
                  you sell, the more often your listings will be shown to shoppers.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-amber-500 shadow-md overflow-hidden">
          <CardContent className="pt-6">
            <div className="flex items-start">
              <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 flex-shrink-0">
                <AlarmClock className="h-4 w-4 text-amber-600" />
              </div>
              <div>
                <h3 className="font-medium text-slate-800 text-lg">Create Urgency</h3>
                <p className="mt-2 text-slate-600">
                  Etsy highlights listings that have real-time shopper engagement, like:
                </p>
                <ul className="mt-2 space-y-1 text-slate-600">
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">•</span>
                    "X people have this in their cart"
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">•</span>
                    "Sale ends in 24 hours"
                  </li>
                </ul>
                <p className="mt-2 text-slate-600">
                  These urgency triggers increase conversions. Keep your store active, keep sales 
                  running, and keep traffic flowing.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-l-4 border-l-emerald-500 bg-gradient-to-r from-emerald-50 to-white shadow-md overflow-hidden">
        <CardContent className="pt-6">
          <div className="flex items-start">
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 mr-3">Secret Tip</Badge>
            <h3 className="font-semibold text-slate-800 text-lg">Use a Bait Price to Drive Massive Exposure</h3>
          </div>
          
          <p className="mt-3 text-slate-600">
            One of the smartest things you can do as a new seller is to introduce a "bait price" — a super-low 
            price on a less popular color/size combo to boost listing traffic.
          </p>
          
          <h4 className="mt-4 font-medium text-slate-800">Here's how it works:</h4>
          <p className="mt-2 text-slate-600">
            Let's say your regular S–XL shirt price is $14.99 after your 50% off sale, giving you about $3 profit 
            per sale. Choose one uncommon color (like Khaki or Yam) and set the Small size to a lower price, even 
            if it means breaking even or losing $1–2. This boosts click-through rate and makes your listing show up 
            more often in Etsy search.
          </p>
          <p className="mt-2 text-slate-600">
            Over time, as you gain reviews and become more established, raise your bait price to break even or profit 
            slightly — but keep it lower than the rest of your variants to retain its exposure boost.
          </p>
          
          <div className="mt-4 bg-white border border-emerald-100 rounded-md p-4">
            <h4 className="font-medium text-slate-800">Example:</h4>
            <p className="text-slate-600">
              If your regular post-sale price is $14.99, set your bait color to $9.99 after sale. Some sellers go as 
              low as $7.99 — but we don't recommend going any lower than that.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-100">
        <div className="flex items-start">
          <div className="bg-white bg-opacity-80 rounded-full p-2 mr-4 shadow-sm">
            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
              <DollarSign className="h-4 w-4 text-indigo-600" />
            </div>
          </div>
          <div>
            <p className="font-medium text-indigo-900">
              Your shirt might cost $15 to make, but with the right price framing — discounts, 
              urgency, and perceived deals — you can make it feel like a must-have value, not just a product.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg p-6 border border-slate-200">
        <div className="flex items-start">
          <TrendingUp className="h-5 w-5 mr-3 mt-1 text-slate-700" />
          <div>
            <p className="font-medium text-slate-800">Now that you understand the psychology of pricing, it's time to implement a strategy.</p>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 mr-2">Coming next</Badge>
          <p className="text-slate-700">Ready to learn how to implement pricing strategies?</p>
        </div>
      </div>
    </div>
  );
};

export default PricingPsychology;

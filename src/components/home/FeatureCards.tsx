
import React from 'react';
import { Calculator, GraduationCap, BarChart3, Package, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    title: "Smart Pricing Calculator",
    description: "Instantly calculate ideal prices and Etsy fees based on your shirt type, discount strategy, and profit goals.",
    icon: Calculator
  },
  {
    title: "A-Z Course for Beginners",
    description: "Learn everything from picking the right niche to running sales and scaling your store.",
    icon: GraduationCap
  },
  {
    title: "Real Growth Visuals",
    description: "See case study screenshots of stores growing from 0 to 500 sales — and follow the exact strategy.",
    icon: BarChart3
  },
  {
    title: "Product Cost Database",
    description: "Get access to updated POD pricing breakdowns (Comfort Colors, Gildan, etc.) and compare providers.",
    icon: Package
  },
  {
    title: "Email Templates & Marketing Tools",
    description: "Tools to help you grow your audience and increase repeat buyers.",
    icon: Mail
  }
];

export const FeatureCards = () => {
  return (
    <section className="py-16 px-4 bg-white" id="features">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">What You'll Get With List2Profits</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Everything you need to launch and grow a profitable Etsy print-on-demand business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-slate-200 hover:border-primary/20 hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

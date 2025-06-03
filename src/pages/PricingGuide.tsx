
import React from 'react';
import { NavigationBar } from "@/components/home/NavigationBar";
import { Calculator } from "lucide-react";

const PricingGuidePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />
      
      <main>
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto">
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-blue-500 text-white">
                  <Calculator className="h-8 w-8" />
                </div>
                <h1 className="text-4xl font-bold text-primary">Pricing Guide</h1>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Learn how to price your products competitively while maximizing profits
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
                  <p className="text-slate-600">
                    Our comprehensive pricing guide is currently under development. This guide will help you:
                  </p>
                  <ul className="mt-4 space-y-2 text-slate-600">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Understand market pricing strategies
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Calculate optimal profit margins
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Analyze competitor pricing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Implement psychological pricing tactics
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-slate-50 py-8 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} List2Profits | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default PricingGuidePage;

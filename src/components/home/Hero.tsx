
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calculator, BookOpen, ArrowRight, TrendingUp } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-white to-slate-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-800">
              Start Your Etsy POD Journey With Confidence
            </h1>
            <p className="text-lg text-slate-600 md:pr-10">
              From pricing your first product to building a profitable storefront — we guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="w-full sm:w-auto gap-2" asChild>
                <Link to="/calculator">
                  <Calculator className="h-5 w-5" />
                  Launch the Pricing Calculator
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Link to="/exposure-guide">
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                  <BookOpen className="h-5 w-5" />
                  Explore the A–Z Etsy Course
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-xl shadow-lg p-3 md:p-5 border">
              <div className="aspect-video bg-white rounded-lg overflow-hidden relative">
                <div className="flex flex-col p-4">
                  <div className="grid grid-cols-4 gap-4 mb-4">
                    <div className="space-y-1">
                      <div className="text-sm text-slate-600">Visits</div>
                      <div className="text-2xl font-bold">7,757</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-slate-600">Orders</div>
                      <div className="text-2xl font-bold">437</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-slate-600">Conversion rate</div>
                      <div className="text-2xl font-bold">5.6%</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-slate-600">Revenue</div>
                      <div className="text-2xl font-bold text-primary">$10,050.39</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-green-700 mb-3">
                    <TrendingUp className="h-4 w-4" />
                    <span>Visits increased <span className="font-bold">1936%</span> compared to the same period last year.</span>
                  </div>
                  
                  <div className="h-48 w-full">
                    <div className="relative h-full w-full">
                      {/* Simplified chart representation inspired by the image */}
                      <svg viewBox="0 0 800 200" className="h-full w-full">
                        {/* Chart background lines */}
                        <line x1="0" y1="180" x2="800" y2="180" stroke="#f0f0f0" strokeWidth="1" />
                        <line x1="0" y1="150" x2="800" y2="150" stroke="#f0f0f0" strokeWidth="1" />
                        <line x1="0" y1="120" x2="800" y2="120" stroke="#f0f0f0" strokeWidth="1" />
                        <line x1="0" y1="90" x2="800" y2="90" stroke="#f0f0f0" strokeWidth="1" />
                        <line x1="0" y1="60" x2="800" y2="60" stroke="#f0f0f0" strokeWidth="1" />
                        <line x1="0" y1="30" x2="800" y2="30" stroke="#f0f0f0" strokeWidth="1" />
                        
                        {/* Chart line inspired by the screenshot */}
                        <path 
                          d="M0,140 C20,138 30,138 50,136 C70,134 80,120 100,124 C120,128 140,110 160,115 C180,120 200,90 220,80 C240,70 260,105 280,95 C300,85 320,60 340,50 C360,40 380,50 400,65 C420,80 440,40 460,50 C480,60 500,70 520,60 C540,50 560,40 580,35 C600,30 620,35 640,45 C660,55 680,50 700,45 C720,40 750,120 780,140" 
                          fill="none" 
                          stroke="#3B7BFF" 
                          strokeWidth="2.5"
                        />
                        
                        {/* X-axis labels */}
                        <text x="0" y="195" fontSize="10" fill="#666">Apr 10</text>
                        <text x="280" y="195" fontSize="10" fill="#666">Apr 17</text>
                        <text x="560" y="195" fontSize="10" fill="#666">Apr 25</text>
                        <text x="700" y="195" fontSize="10" fill="#666">May 2</text>
                        <text x="780" y="195" fontSize="10" fill="#666">May 9</text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">First 10 Days:</span>
                      <span className="font-medium">12 sales</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">First 20 Days:</span>
                      <span className="font-medium">42 sales</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">After 30 Days:</span>
                      <span className="font-medium text-primary">437 sales, $10,050 profit</span>
                    </div>
                  </div>
                  <p className="text-xs text-center mt-3 text-slate-500">Real Store Growth — 30 Days In</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 rounded-full w-32 h-32 bg-primary/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

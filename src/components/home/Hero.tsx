
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calculator, BookOpen, ArrowRight } from 'lucide-react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const Hero = () => {
  const salesData = [
    { day: 1, sales: 0, profit: 0 },
    { day: 5, sales: 3, profit: 45 },
    { day: 10, sales: 12, profit: 180 },
    { day: 15, sales: 25, profit: 375 },
    { day: 20, sales: 42, profit: 630 },
    { day: 25, sales: 56, profit: 840 },
    { day: 30, sales: 68, profit: 1056 }
  ];

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
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    <div className="space-y-0">
                      <div className="text-xs text-slate-600">Visits</div>
                      <div className="text-lg font-bold">7,757</div>
                    </div>
                    <div className="space-y-0">
                      <div className="text-xs text-slate-600">Orders</div>
                      <div className="text-lg font-bold">437</div>
                    </div>
                    <div className="space-y-0">
                      <div className="text-xs text-slate-600">Conv. rate</div>
                      <div className="text-lg font-bold">5.6%</div>
                    </div>
                    <div className="space-y-0">
                      <div className="text-xs text-slate-600">Revenue</div>
                      <div className="text-lg font-bold text-primary">$10,050</div>
                    </div>
                  </div>
                  
                  <div className="h-52 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={salesData}>
                        <XAxis 
                          dataKey="day" 
                          tick={{fontSize: 12, fill: '#6b7280'}}
                          tickLine={false}
                          axisLine={{stroke: '#e5e7eb'}}
                          tickFormatter={(value) => `Day ${value}`}
                        />
                        <Tooltip 
                          formatter={(value, name) => [`${value} sales`, 'Sales']}
                          labelFormatter={(label) => `Day ${label}`}
                          contentStyle={{
                            backgroundColor: '#fff',
                            borderRadius: '0.375rem',
                            padding: '0.5rem',
                            border: '1px solid #e5e7eb',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                          }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="sales" 
                          stroke="#3B7BFF" 
                          strokeWidth={2.5} 
                          dot={{stroke: '#3B7BFF', strokeWidth: 2, fill: '#fff', r: 4}}
                          activeDot={{stroke: '#3B7BFF', strokeWidth: 2, fill: '#3B7BFF', r: 6}}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="bg-slate-50 rounded-lg p-3">
                  <div className="space-y-2">
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

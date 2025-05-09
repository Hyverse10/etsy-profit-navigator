
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calculator, BookOpen, ArrowRight } from 'lucide-react';

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
                <a href="#calculator">
                  <Calculator className="h-5 w-5" />
                  Launch the Pricing Calculator
                  <ArrowRight className="h-4 w-4" />
                </a>
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
              <div className="aspect-video bg-slate-50 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex justify-center">
                      <Calculator className="h-12 w-12 text-primary mb-4" />
                    </div>
                    <h3 className="text-xl font-medium text-slate-700">Pricing Calculator</h3>
                    <p className="text-slate-500 mt-2">Calculate ideal prices and profit margins</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Day 1:</span>
                      <span className="font-medium">$0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Day 10:</span>
                      <span className="font-medium">12 sales</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Day 30:</span>
                      <span className="font-medium text-primary">68 sales, $1,056 profit</span>
                    </div>
                    <div className="h-12 bg-white rounded-md border mt-2 relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                        <div className="h-[10%] w-[3%] bg-blue-100"></div>
                        <div className="h-[20%] w-[3%] bg-blue-200"></div>
                        <div className="h-[15%] w-[3%] bg-blue-100"></div>
                        <div className="h-[25%] w-[3%] bg-blue-300"></div>
                        <div className="h-[30%] w-[3%] bg-blue-200"></div>
                        <div className="h-[20%] w-[3%] bg-blue-100"></div>
                        <div className="h-[40%] w-[3%] bg-blue-300"></div>
                        <div className="h-[35%] w-[3%] bg-blue-200"></div>
                        <div className="h-[45%] w-[3%] bg-blue-300"></div>
                        <div className="h-[50%] w-[3%] bg-blue-400"></div>
                        <div className="h-[40%] w-[3%] bg-blue-300"></div>
                        <div className="h-[60%] w-[3%] bg-blue-500"></div>
                        <div className="h-[55%] w-[3%] bg-blue-400"></div>
                        <div className="h-[65%] w-[3%] bg-blue-500"></div>
                        <div className="h-[70%] w-[3%] bg-blue-600"></div>
                        <div className="h-[75%] w-[3%] bg-blue-500"></div>
                        <div className="h-[80%] w-[3%] bg-blue-600"></div>
                        <div className="h-[85%] w-[3%] bg-blue-700"></div>
                        <div className="h-[90%] w-[3%] bg-primary"></div>
                        <div className="h-[95%] w-[3%] bg-primary"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-center mt-2 text-slate-500">Real Store Growth — 30 Days In</p>
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

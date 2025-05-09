import React from 'react';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, ArrowRight } from 'lucide-react';
export const GrowthShowcase = () => {
  const dailySales = [{
    day: 1,
    sales: 0,
    profit: 0
  }, {
    day: 5,
    sales: 3,
    profit: 45
  }, {
    day: 10,
    sales: 12,
    profit: 180
  }, {
    day: 15,
    sales: 25,
    profit: 375
  }, {
    day: 20,
    sales: 42,
    profit: 630
  }, {
    day: 25,
    sales: 56,
    profit: 840
  }, {
    day: 30,
    sales: 68,
    profit: 1056
  }];
  return <section className="py-16 px-4 bg-white" id="calculator">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">From New Seller to Profit in 30 Days</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Explore real results using the List2Profits pricing strategy and course.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl border p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-xl">30 Day Sales Growth</h3>
              </div>
              <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">$2,342 Total Profit</span>
            </div>
            
            <div className="h-64 relative">
              {/* Simple chart representation */}
              <div className="absolute inset-0 flex items-end justify-between">
                {dailySales.map((data, index) => <div key={index} className="flex flex-col items-center group" style={{
                height: '100%'
              }}>
                    <div className="w-10 bg-primary/20 rounded-t-sm group-hover:bg-primary/40 transition-colors" style={{
                  height: `${data.sales > 0 ? data.sales / 68 * 100 : 3}%`
                }}>
                      <div className="w-full bg-primary rounded-t-sm transition-all" style={{
                    height: '30%'
                  }}></div>
                    </div>
                    <div className="mt-2 text-xs text-slate-600">Day {data.day}</div>
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-10 bg-slate-800 text-white text-xs py-1 px-2 rounded pointer-events-none transition-opacity">
                      {data.sales} sales / ${data.profit}
                    </div>
                  </div>)}
              </div>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-sm text-slate-600">Based on actual seller data using our strategy</p>
            </div>
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-xl">Growth Milestones</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <span className="font-medium">Day 1</span>
                  <span>Store setup complete</span>
                  <span className="text-slate-500 font-medium">$0</span>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <span className="font-medium">Day 5</span>
                  <span>First sales coming in</span>
                  <span className="text-slate-500 font-medium">2 sales</span>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <span className="font-medium">Day 10</span>
                  <span>Momentum building</span>
                  <span className="text-slate-500 font-medium">8 sales</span>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg bg-slate-50">
                  <span className="font-medium">Day 30</span>
                  <span>Consistent daily sales</span>
                  <span className="text-primary font-medium">68 sales, $2,342 profit</span>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="w-full sm:w-auto sm:self-center gap-2">
              Join the Challenge
              <ArrowRight className="h-4 w-4" />
            </Button>
            <p className="text-center text-sm text-slate-500">Start Your First 30 Days With Guidance</p>
          </div>
        </div>
      </div>
    </section>;
};

import React from 'react';
import PricingCalculator from "@/components/PricingCalculator";

const Calculator = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto">
            <PricingCalculator />
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

export default Calculator;

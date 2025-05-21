
import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Search } from 'lucide-react';
import { NavigationBar } from '@/components/home/NavigationBar';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />

      <main>
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Boost Your Etsy Shop Success</h1>
              <p className="text-lg text-slate-600">
                Powerful tools to optimize your pricing and improve your listings' visibility
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Calculator Tool Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">Pricing Calculator</h2>
                  <p className="text-slate-600 mb-6">
                    Calculate optimal prices for your Etsy listings. Factor in costs, fees, and desired profits to maximize your earnings.
                  </p>
                  <Link to="/calculator">
                    <Button className="w-full">
                      Use Calculator
                    </Button>
                  </Link>
                </div>
              </div>

              {/* SEO Tool Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">SEO Tool</h2>
                  <p className="text-slate-600 mb-6">
                    Generate high-converting titles, tags, and descriptions for your Etsy listings to improve visibility and drive more sales.
                  </p>
                  <Link to="/seo-tool">
                    <Button className="w-full">
                      Use SEO Tool
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Why List2Profits?</h2>
              <p className="text-slate-600 mb-8">
                Our tools are designed by Etsy sellers for Etsy sellers, helping you optimize your shop for maximum visibility and profit.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Smart Pricing</h3>
                  <p className="text-slate-600">Calculate all Etsy fees and ensure profitable listings</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
                  <p className="text-slate-600">Generate buyer-focused keywords and descriptions</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Save Time</h3>
                  <p className="text-slate-600">Focus on creating while our tools handle the technical details</p>
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

export default Home;

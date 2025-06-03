
import React from 'react';
import { NavigationBar } from "@/components/home/NavigationBar";
import { Calculator, TrendingUp, Target, DollarSign, Settings, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PricingGuidePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />
      
      <main>
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="mb-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-blue-500 text-white">
                  <Calculator className="h-8 w-8" />
                </div>
                <h1 className="text-4xl font-bold text-primary">Pricing Guide for New Etsy Sellers</h1>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Master the art of pricing to boost sales, build momentum, and maximize your Etsy success
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Introduction Card */}
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-800">
                    <Lightbulb className="h-5 w-5" />
                    The Golden Rule of New Seller Pricing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-700 text-lg font-medium mb-3">
                    Volume beats margin when you're starting out!
                  </p>
                  <p className="text-blue-600">
                    Getting 5 sales at $3 profit each is way better than 1 sale at $9 profit. Why? Because sales boost your listing rank in Etsy's algorithm, build social proof, and create momentum for your shop. Think of your first sales as investments in your shop's future success.
                  </p>
                </CardContent>
              </Card>

              {/* Step 1: Daily Sales Strategy */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    Step 1: Set Up Your Daily Sale Strategy
                  </CardTitle>
                  <CardDescription>Create urgency and attract price-conscious buyers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-800 mb-2">The Daily Sale Method</h3>
                    <p className="text-green-700 mb-3">
                      Run a "daily sale" of 30-50% off that refreshes every day. This creates constant urgency and makes customers feel like they're getting a deal.
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-green-800">How to set it up:</p>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-green-700">
                        <li>Go to your Etsy Seller Dashboard</li>
                        <li>Navigate to Marketing → Sales & Discounts</li>
                        <li>Create a new sale with 30-50% off</li>
                        <li>Set it to run for 24 hours</li>
                        <li>Recreate it daily (or use Etsy's recurring sale feature)</li>
                      </ol>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    <strong>Pro tip:</strong> Price your items higher initially, then apply the daily sale to reach your target price. This way, customers see the "discount" and feel good about their purchase.
                  </p>
                </CardContent>
              </Card>

              {/* Step 2: Calculator Usage */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-blue-500" />
                    Step 2: Use Our Calculator for Perfect Pricing
                  </CardTitle>
                  <CardDescription>Calculate your before-sale price to hit your target</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Our pricing calculator helps you work backwards from your desired after-sale price to determine what your original price should be.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-800 mb-2">Example Calculation:</h3>
                    <ul className="space-y-1 text-sm text-blue-700">
                      <li>• You want customers to pay $12.99 after the sale</li>
                      <li>• You're running a 40% daily sale</li>
                      <li>• Set your original price to $21.65</li>
                      <li>• After 40% off: $21.65 × 0.6 = $12.99 ✓</li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <Button asChild>
                      <Link to="/">Try Our Calculator</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Step 3: Psychological Pricing */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-purple-500" />
                    Step 3: Master Psychological Pricing
                  </CardTitle>
                  <CardDescription>Small price changes that make a big difference</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="text-2xl font-bold text-purple-600 mb-1">$.49</div>
                      <div className="text-sm text-purple-700">Feels like a deal</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="text-2xl font-bold text-purple-600 mb-1">$.95</div>
                      <div className="text-sm text-purple-700">Premium but accessible</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="text-2xl font-bold text-purple-600 mb-1">$.99</div>
                      <div className="text-sm text-purple-700">Classic choice</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Ending your prices in .49, .95, or .99 increases conversions because customers focus on the first number and perceive the price as lower than it actually is.
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <p className="text-yellow-800">
                      <strong>Example:</strong> $14.99 feels much cheaper than $15.00, even though it's only 1¢ difference!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Step 4: Profit Target */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-green-500" />
                    Step 4: Aim for $3–$4 Profit Per Sale
                  </CardTitle>
                  <CardDescription>Sweet spot for new sellers building momentum</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    For new sellers, $3–$4 profit per sale (including what you charge for shipping) is the sweet spot. This gives you:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Competitive pricing that attracts buyers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Enough profit to reinvest in your business</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Room for sales and discounts without losing money</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Faster sales velocity to boost your ranking</span>
                    </li>
                  </ul>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="text-green-800">
                      <strong>Remember:</strong> You can always raise prices later once you have reviews and ranking. Start competitive, build momentum, then optimize for profit.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Step 5: Bait Pricing Strategy */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-orange-500" />
                    Step 5: The "Bait Price" Strategy
                  </CardTitle>
                  <CardDescription>Hook customers with one irresistible option</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Create one option that's priced to break even or take a small $1–$2 loss. This "bait price" attracts customers to your listing, and many will choose the higher-priced options.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h3 className="font-semibold text-orange-800 mb-2">Example Bait Pricing:</h3>
                    <div className="space-y-1 text-sm text-orange-700">
                      <p>• Orange/Small: $9.99 (break even or small loss)</p>
                      <p>• All other colors/sizes: $14.99 + shipping</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Why this works:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Gets clicks from price-conscious shoppers</li>
                        <li>• Many customers prefer popular colors anyway</li>
                        <li>• Creates perception of value across all options</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Tips for success:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Choose an uncommon color/size combo</li>
                        <li>• Make sure other options are clearly profitable</li>
                        <li>• Monitor which options sell most</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 6: Shipping Strategy */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-blue-500" />
                    Step 6: Smart Shipping Strategy
                  </CardTitle>
                  <CardDescription>Set shipping to work in your favor</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-800 mb-2">Recommended: $5.99 Shipping</h3>
                    <p className="text-blue-700 mb-3">
                      Set your shipping to $5.99 in Settings → Shipping Settings. Here's why this works:
                    </p>
                    <ul className="space-y-1 text-sm text-blue-700">
                      <li>• Etsy doesn't penalize listings with shipping under $6</li>
                      <li>• Most customers expect to pay for shipping anyway</li>
                      <li>• Lets you keep your product price lower and more attractive</li>
                      <li>• Shipping charges feel separate from product value</li>
                    </ul>
                  </div>
                  <p className="text-muted-foreground">
                    <strong>Pro tip:</strong> Include your shipping profit in your $3–$4 total profit target. If shipping costs you $3 and you charge $5.99, that's $2.99 profit from shipping alone!
                  </p>
                </CardContent>
              </Card>

              {/* Action Steps */}
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Ready to Price Like a Pro?</CardTitle>
                  <CardDescription className="text-green-700">Follow these action steps to implement your new pricing strategy</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium mb-2 text-green-800">Quick Action Checklist:</h3>
                      <ul className="space-y-1 text-sm text-green-700">
                        <li>□ Use our calculator to find your before-sale price</li>
                        <li>□ Set up daily sales in your Etsy dashboard</li>
                        <li>□ End all prices in .49, .95, or .99</li>
                        <li>□ Create one "bait price" option</li>
                        <li>□ Set shipping to $5.99</li>
                        <li>□ Target $3–$4 total profit per sale</li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Button asChild className="w-full">
                        <Link to="/">Use Our Pricing Calculator</Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/resources">Explore More Guides</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
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

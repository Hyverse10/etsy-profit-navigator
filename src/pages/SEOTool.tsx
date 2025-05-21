
import React from 'react';
import SEOTool from "@/components/SEOTool";
import { NavigationBar } from "@/components/home/NavigationBar";

const SEOToolPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />
      
      <main>
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold mb-2 text-primary">Etsy SEO Generator</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Generate optimized titles, tags, and descriptions for your Etsy listings
              </p>
            </div>
            
            <SEOTool />
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

export default SEOToolPage;

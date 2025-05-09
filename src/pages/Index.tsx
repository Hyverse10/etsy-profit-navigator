
import { Calculator, BookOpen, ArrowRight, BarChart3, GraduationCap, Package, Mail } from "lucide-react";
import PricingCalculator from "@/components/PricingCalculator";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/home/Hero";
import { FeatureCards } from "@/components/home/FeatureCards";
import { CourseOverview } from "@/components/home/CourseOverview";
import { GrowthShowcase } from "@/components/home/GrowthShowcase";
import { NavigationBar } from "@/components/home/NavigationBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />
      
      <main>
        <Hero />
        <FeatureCards />
        <CourseOverview />
        <GrowthShowcase />
        
        <section id="calculator" className="py-16 bg-slate-50">
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

export default Index;

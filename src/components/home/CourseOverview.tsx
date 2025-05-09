
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, CheckCircle2 } from 'lucide-react';

const courseModules = [
  "Setting Up Your Store",
  "Creating Listings That Convert",
  "Pricing for Profit",
  "SEO & Keyword Research",
  "Marketing Strategies",
  "Scaling Your Business"
];

export const CourseOverview = () => {
  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-800">Step-by-Step Etsy POD Course</h2>
            <p className="text-slate-600">
              No fluff. No gatekeeping. Just results.
            </p>
            
            <div className="space-y-3">
              {courseModules.map((module, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-slate-700">Module {index + 1}: {module}</p>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="gap-2">
              <BookOpen className="h-5 w-5" />
              Preview the Course
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-xl shadow-lg p-6 border">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Course Dashboard</h3>
              </div>
              
              <div className="space-y-4">
                {courseModules.map((module, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                    <span className="bg-primary text-white text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-medium">{module}</h4>
                      <div className="w-full h-2 bg-slate-100 rounded-full mt-2">
                        <div 
                          className="h-full bg-primary rounded-full" 
                          style={{ width: index === 0 ? '100%' : index === 1 ? '80%' : index === 2 ? '60%' : '0%' }}>
                        </div>
                      </div>
                    </div>
                    {index <= 2 ? (
                      <span className="text-xs text-primary font-medium">In Progress</span>
                    ) : (
                      <span className="text-xs text-slate-500 font-medium">Coming Soon</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-6 -left-6 -z-10 rounded-full w-32 h-32 bg-primary/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

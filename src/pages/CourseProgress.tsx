
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, BookOpen, Lock, CheckCircle2 } from 'lucide-react';

// Course modules data with descriptions
const courseModules = [
  {
    id: 1,
    title: "Starting Your Store",
    description: "Learn how to set up your Etsy shop correctly and avoid common beginner mistakes.",
    path: "starting-your-store",
    progress: 75,
    isLocked: false
  },
  {
    id: 2,
    title: "Creating Designs That Convert",
    description: "How to design shirts people actually want to buy, even if you're not a designer.",
    path: "designs-that-convert",
    progress: 40,
    isLocked: false
  },
  {
    id: 3,
    title: "Creating Mockups",
    description: "How to find and create attractive mockups that improve click-through rate.",
    path: "creating-mockups",
    progress: 20,
    isLocked: false
  },
  {
    id: 4,
    title: "Setting Up Your Listings",
    description: "Everything you need to know about writing descriptions, uploading mockups, and pricing your products.",
    path: "setup-listings",
    progress: 0,
    isLocked: false
  },
  {
    id: 5,
    title: "SEO Research & Automation",
    description: "Learn how to find high-ranking keywords and automate your SEO with AI tools.",
    path: "seo-research",
    progress: 0,
    isLocked: true
  },
  {
    id: 6,
    title: "Marketing Strategies",
    description: "How to get views and sales without relying on paid ads — includes social media tips.",
    path: "marketing-strategies",
    progress: 0,
    isLocked: true
  },
  {
    id: 7,
    title: "Scaling Your Business",
    description: "Raise your profits, launch new niches, and reinvest smart as you grow.",
    path: "scaling-business",
    progress: 0,
    isLocked: true
  }
];

const CourseProgress = () => {
  const navigate = useNavigate();
  const [modules, setModules] = useState(courseModules);
  
  // Calculate overall progress
  const overallProgress = Math.round(
    modules.reduce((total, module) => total + module.progress, 0) / modules.length
  );

  // Load progress from localStorage on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('courseProgress');
    if (savedProgress) {
      try {
        const parsed = JSON.parse(savedProgress);
        // Apply saved progress to modules
        setModules(prevModules => 
          prevModules.map(module => ({
            ...module,
            progress: parsed[module.id] || module.progress,
            isLocked: module.id > 1 && 
              (parsed[module.id - 1] || 0) < 100 && 
              module.isLocked
          }))
        );
      } catch (e) {
        console.error('Error loading progress:', e);
      }
    }
  }, []);

  const handleModuleClick = (moduleId, isLocked) => {
    if (isLocked) return;
    navigate(`/course/${modules.find(m => m.id === moduleId).path}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Link to="/" className="flex items-center text-sm text-slate-600 hover:text-slate-900 transition-colors">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-800 mb-8 text-center">Your Course Progress</h1>
          
          <div className="bg-white shadow-md rounded-lg p-6 mb-10">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-medium text-slate-700">Overall Progress</h2>
              <span className="text-primary font-semibold">{overallProgress}%</span>
            </div>
            <Progress value={overallProgress} className="h-3" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module) => (
              <Card 
                key={module.id}
                className={`transition-all duration-300 hover:shadow-lg border ${
                  module.isLocked ? 'opacity-75' : 'cursor-pointer'
                }`}
                onClick={() => handleModuleClick(module.id, module.isLocked)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-primary/10 p-2 rounded-lg mr-3">
                        {module.isLocked ? (
                          <Lock className="h-5 w-5 text-slate-400" />
                        ) : (
                          <BookOpen className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <CardTitle className="text-lg">Module {module.id}: {module.title}</CardTitle>
                    </div>
                    {module.progress === 100 && (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600">{module.description}</p>
                  
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">Progress</span>
                      <span className="text-xs font-medium text-primary">{module.progress}%</span>
                    </div>
                    <Progress value={module.progress} className="h-2" />
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      size="sm" 
                      className="w-full"
                      variant={module.isLocked ? "secondary" : "default"}
                      disabled={module.isLocked}
                    >
                      {module.isLocked && <Lock className="h-4 w-4 mr-2" />}
                      {module.progress > 0 ? "Continue Module" : "Start Module"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseProgress;

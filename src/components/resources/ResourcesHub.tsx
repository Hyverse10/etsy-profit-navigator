
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Image, Search, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const ResourcesHub = () => {
  const resources = [
    {
      id: 'pricing-guide',
      title: 'Pricing Guide',
      description: 'Learn how to price your products competitively while maximizing profits',
      icon: Calculator,
      color: 'bg-blue-500',
      link: '/pricing-guide',
      status: 'Available'
    },
    {
      id: 'mockup-automation',
      title: 'Mockup Automation',
      description: 'Automate your mockup creation process to save time and increase productivity',
      icon: Image,
      color: 'bg-purple-500',
      link: '/mockup-automation',
      status: 'Coming Soon'
    },
    {
      id: 'competitor-analysis',
      title: 'Competitor Analysis',
      description: 'Analyze your competition to find opportunities and improve your strategy',
      icon: Search,
      color: 'bg-green-500',
      link: '/competitor-analysis',
      status: 'Coming Soon'
    },
    {
      id: 'seo-optimization',
      title: 'SEO Optimization',
      description: 'Generate optimized titles, tags, and descriptions for your Etsy listings',
      icon: TrendingUp,
      color: 'bg-orange-500',
      link: '/seo-tool',
      status: 'Available'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {resources.map((resource) => {
          const IconComponent = resource.icon;
          const isAvailable = resource.status === 'Available';
          
          return (
            <Card key={resource.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg ${resource.color} text-white`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      isAvailable 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {resource.status}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 mb-4">
                  {resource.description}
                </CardDescription>
                
                {isAvailable ? (
                  <Button asChild className="w-full">
                    <Link to={resource.link}>
                      Access Guide
                    </Link>
                  </Button>
                ) : (
                  <Button variant="outline" disabled className="w-full">
                    Coming Soon
                  </Button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200 mt-8">
        <h3 className="text-lg font-medium text-blue-800 mb-2">More Resources Coming Soon!</h3>
        <p className="text-blue-700">
          We're constantly working on new guides and tools to help you succeed on Etsy. 
          Check back regularly for updates, or bookmark this page to stay informed about new resources.
        </p>
      </div>
    </div>
  );
};

export default ResourcesHub;

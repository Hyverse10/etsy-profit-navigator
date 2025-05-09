
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, FileDown, CheckCircle2, Book } from 'lucide-react';
import LessonContent from '@/components/course/LessonContent';

// Helper function to save progress
const saveModuleProgress = (moduleId, progress) => {
  try {
    // Get existing progress from localStorage or initialize empty object
    const existingProgress = JSON.parse(localStorage.getItem('courseProgress') || '{}');
    
    // Update with new progress
    const updatedProgress = {
      ...existingProgress,
      [moduleId]: progress
    };
    
    // Save back to localStorage
    localStorage.setItem('courseProgress', JSON.stringify(updatedProgress));
  } catch (e) {
    console.error('Error saving progress:', e);
  }
};

// Mock data for the module content (would come from a backend in real app)
const moduleData = {
  'starting-your-store': {
    id: 1,
    title: 'Starting Your Store',
    lessons: [
      { id: 1, title: 'Setting up your Etsy account', content: 'lesson-setup-etsy', completed: true },
      { id: 2, title: 'Store branding essentials', content: 'lesson-branding', completed: true },
      { id: 3, title: 'Choosing your niche', content: 'lesson-niche', completed: false },
      { id: 4, title: 'Setting up payment methods', content: 'lesson-payment', completed: false }
    ],
    resources: [
      { id: 1, title: 'Etsy Setup Checklist', fileType: 'PDF', downloadUrl: '#' },
      { id: 2, title: 'Branding Template', fileType: 'Notion', downloadUrl: '#' }
    ]
  },
  'designs-that-convert': {
    id: 2,
    title: 'Creating Designs That Convert',
    lessons: [
      { id: 1, title: 'Understanding your target audience', content: 'lesson-target-audience', completed: true },
      { id: 2, title: 'Design principles for POD', content: 'lesson-design-principles', completed: false },
      { id: 3, title: 'Using Canva for t-shirt design', content: 'lesson-canva', completed: false },
      { id: 4, title: 'Typography best practices', content: 'lesson-typography', completed: false }
    ],
    resources: [
      { id: 1, title: 'Design Checklist', fileType: 'PDF', downloadUrl: '#' },
      { id: 2, title: 'Canva Templates', fileType: 'ZIP', downloadUrl: '#' }
    ]
  },
  'creating-mockups': {
    id: 3,
    title: 'Creating Mockups',
    lessons: [
      { id: 1, title: 'Finding quality mockup templates', content: 'lesson-mockup-templates', completed: true },
      { id: 2, title: 'Editing mockups in Photoshop', content: 'lesson-photoshop', completed: false },
      { id: 3, title: 'Creating mockups with online tools', content: 'lesson-online-mockups', completed: false }
    ],
    resources: [
      { id: 1, title: 'Mockup Templates Pack', fileType: 'ZIP', downloadUrl: '#' },
      { id: 2, title: 'Mockup Creation Guide', fileType: 'PDF', downloadUrl: '#' }
    ]
  },
  'setup-listings': {
    id: 4,
    title: 'Setting Up Your Listings',
    lessons: [
      { id: 1, title: 'Writing effective descriptions', content: 'lesson-descriptions', completed: false },
      { id: 2, title: 'Product photography best practices', content: 'lesson-photography', completed: false },
      { id: 3, title: 'Pricing strategy for maximum exposure', content: 'lesson-pricing', completed: false },
      { id: 4, title: 'Setting up variations correctly', content: 'lesson-variations', completed: false }
    ],
    resources: [
      { id: 1, title: 'Pricing Calculator', fileType: 'Excel', downloadUrl: '#' },
      { id: 2, title: 'Description Templates', fileType: 'PDF', downloadUrl: '#' },
      { id: 3, title: 'Exposure Guide', fileType: 'PDF', downloadUrl: '#' }
    ]
  },
  'seo-research': {
    id: 5,
    title: 'SEO Research & Automation',
    lessons: [
      { id: 1, title: 'Keyword research fundamentals', content: 'lesson-keywords', completed: false },
      { id: 2, title: 'Using eRank effectively', content: 'lesson-erank', completed: false },
      { id: 3, title: 'Automating SEO with AI tools', content: 'lesson-seo-ai', completed: false }
    ],
    resources: [
      { id: 1, title: 'SEO Keyword Planner', fileType: 'PDF', downloadUrl: '#' },
      { id: 2, title: 'AI Prompt Templates', fileType: 'TXT', downloadUrl: '#' }
    ]
  },
  'marketing-strategies': {
    id: 6,
    title: 'Marketing Strategies',
    lessons: [
      { id: 1, title: 'Organic marketing on Pinterest', content: 'lesson-pinterest', completed: false },
      { id: 2, title: 'Instagram for Etsy sellers', content: 'lesson-instagram', completed: false },
      { id: 3, title: 'Email marketing basics', content: 'lesson-email', completed: false }
    ],
    resources: [
      { id: 1, title: 'Social Media Content Calendar', fileType: 'Excel', downloadUrl: '#' },
      { id: 2, title: 'Pinterest Strategy Guide', fileType: 'PDF', downloadUrl: '#' }
    ]
  },
  'scaling-business': {
    id: 7,
    title: 'Scaling Your Business',
    lessons: [
      { id: 1, title: 'Expanding to new niches', content: 'lesson-new-niches', completed: false },
      { id: 2, title: 'Managing finances and taxes', content: 'lesson-finances', completed: false },
      { id: 3, title: 'Outsourcing and automation', content: 'lesson-outsourcing', completed: false },
      { id: 4, title: 'Building a passive income system', content: 'lesson-passive-income', completed: false }
    ],
    resources: [
      { id: 1, title: 'Scaling Roadmap', fileType: 'PDF', downloadUrl: '#' },
      { id: 2, title: 'Profit Reinvestment Calculator', fileType: 'Excel', downloadUrl: '#' }
    ]
  }
};

const CourseModule = () => {
  const { moduleSlug, lessonId } = useParams();
  const navigate = useNavigate();
  const [module, setModule] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [activeLesson, setActiveLesson] = useState(null);

  useEffect(() => {
    // Find the module data based on the slug
    const currentModule = moduleData[moduleSlug];
    if (currentModule) {
      setModule(currentModule);
      // Set initially completed lessons
      setCompletedLessons(
        currentModule.lessons
          .filter(lesson => lesson.completed)
          .map(lesson => lesson.id)
      );
      
      // If lessonId is provided in URL, set active lesson
      if (lessonId) {
        const lesson = currentModule.lessons.find(l => l.id === parseInt(lessonId));
        setActiveLesson(lesson || null);
      } else {
        setActiveLesson(null);
      }
    } else {
      // Redirect to course page if module not found
      navigate('/course');
    }
  }, [moduleSlug, lessonId, navigate]);

  // Calculate module progress
  const calculateProgress = () => {
    if (!module) return 0;
    return Math.round((completedLessons.length / module.lessons.length) * 100);
  };

  const handleMarkComplete = (lessonId) => {
    if (!module) return;
    
    // Toggle lesson completion
    if (completedLessons.includes(lessonId)) {
      setCompletedLessons(completedLessons.filter(id => id !== lessonId));
    } else {
      setCompletedLessons([...completedLessons, lessonId]);
    }
    
    // Update progress in localStorage after a short delay
    setTimeout(() => {
      const updatedCompletedLessons = completedLessons.includes(lessonId) 
        ? completedLessons.filter(id => id !== lessonId)
        : [...completedLessons, lessonId];
      
      const progress = Math.round((updatedCompletedLessons.length / module.lessons.length) * 100);
      saveModuleProgress(module.id, progress);
    }, 100);
  };

  const navigateToModule = (direction) => {
    if (!module) return;
    
    const allModuleSlugs = Object.keys(moduleData);
    const currentIndex = allModuleSlugs.indexOf(moduleSlug);
    
    if (direction === 'prev' && currentIndex > 0) {
      navigate(`/course/${allModuleSlugs[currentIndex - 1]}`);
    } else if (direction === 'next' && currentIndex < allModuleSlugs.length - 1) {
      navigate(`/course/${allModuleSlugs[currentIndex + 1]}`);
    }
  };

  const startLesson = (lesson) => {
    navigate(`/course/${moduleSlug}/${lesson.id}`);
  };

  // If a specific lesson is active, show its content
  if (activeLesson) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link 
              to={`/course/${moduleSlug}`} 
              className="flex items-center text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Module
            </Link>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-2xl font-bold text-slate-800 mb-2">
                {activeLesson.title}
              </h1>
              <p className="text-slate-500 mb-6">Module {module.id}: {module.title}</p>
              
              <div className="prose prose-slate max-w-none">
                <LessonContent lessonKey={activeLesson.content} />
              </div>
              
              <div className="mt-10 pt-6 border-t flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={() => navigate(`/course/${moduleSlug}`)}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" /> Back to Module
                </Button>
                <Button 
                  onClick={() => {
                    handleMarkComplete(activeLesson.id);
                    navigate(`/course/${moduleSlug}`);
                  }}
                  className={completedLessons.includes(activeLesson.id) 
                    ? "bg-green-500 hover:bg-green-600" 
                    : ""}
                >
                  {completedLessons.includes(activeLesson.id) 
                    ? "Lesson Completed" 
                    : "Mark as Completed"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!module) return <div className="container mx-auto p-12 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <Link to="/course" className="flex items-center text-sm text-slate-600 hover:text-slate-900 transition-colors">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Course Dashboard
          </Link>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => navigateToModule('prev')}
              disabled={module.id === 1}
            >
              <ChevronLeft className="h-4 w-4 mr-1" /> Previous Module
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => navigateToModule('next')}
              disabled={module.id === 7}
            >
              Next Module <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-800 mb-3">Module {module.id}: {module.title}</h1>
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <span className="text-sm text-slate-500 mr-2">Your progress:</span>
              <span className="text-sm font-medium text-primary">{calculateProgress()}%</span>
            </div>
            <Progress value={calculateProgress()} className="h-2 w-36" />
          </div>
          
          <div className="space-y-8">
            {/* Lessons Section */}
            <div>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Lessons</h2>
              <div className="space-y-4">
                {module.lessons.map((lesson) => (
                  <Card key={lesson.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`rounded-full h-8 w-8 flex items-center justify-center 
                            ${completedLessons.includes(lesson.id) 
                              ? 'bg-green-100 text-green-600' 
                              : 'bg-slate-100 text-slate-500'}`}>
                            {completedLessons.includes(lesson.id) ? (
                              <CheckCircle2 className="h-5 w-5" />
                            ) : (
                              <Book className="h-5 w-5" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-medium text-slate-800">Lesson {lesson.id}: {lesson.title}</h3>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline" onClick={() => startLesson(lesson)}>
                            Start Lesson
                          </Button>
                          <Button 
                            size="sm" 
                            variant={completedLessons.includes(lesson.id) ? "outline" : "default"}
                            className={completedLessons.includes(lesson.id) ? "border-green-500 text-green-600" : ""}
                            onClick={() => handleMarkComplete(lesson.id)}
                          >
                            {completedLessons.includes(lesson.id) ? 'Completed' : 'Mark Complete'}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Resources Section */}
            <div>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {module.resources.map((resource) => (
                  <Card key={resource.id} className="bg-slate-50">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <FileDown className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-slate-800">{resource.title}</p>
                            <p className="text-xs text-slate-500">{resource.fileType} Document</p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">Download</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between pt-6">
              <Button 
                variant="outline" 
                onClick={() => navigateToModule('prev')}
                disabled={module.id === 1}
              >
                <ChevronLeft className="h-4 w-4 mr-1" /> Previous Module
              </Button>
              <Button 
                variant="default"
                onClick={() => {
                  // Set all lessons as complete
                  const allLessonIds = module.lessons.map(l => l.id);
                  setCompletedLessons(allLessonIds);
                  // Save 100% progress
                  saveModuleProgress(module.id, 100);
                  // Redirect to next module if not the last one
                  if (module.id < 7) {
                    const allModuleSlugs = Object.keys(moduleData);
                    const currentIndex = allModuleSlugs.indexOf(moduleSlug);
                    navigate(`/course/${allModuleSlugs[currentIndex + 1]}`);
                  } else {
                    navigate('/course');
                  }
                }}
              >
                {module.id < 7 ? 'Complete & Continue to Next Module' : 'Mark Module as Complete'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModule;

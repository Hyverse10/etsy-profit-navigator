
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calculator, BookOpen, ChevronDown, Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">List2Profits</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <Link to="/calculator">
                        <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="flex items-center gap-2">
                            <Calculator className="h-4 w-4" />
                            <div className="text-sm font-medium leading-none">Pricing Calculator</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Calculate ideal prices and Etsy fees
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/course">
                        <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Product Cost Database</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Access updated POD pricing breakdowns
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Store Growth Charts</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Visualize your store growth over time
                          </p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/course">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Course
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <Link to="/">
                        <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Customer Support</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Get help with your account or course materials
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">FAQs</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Frequently asked questions
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Blog / Tutorials</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn through our detailed tutorials and articles
                          </p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button size="sm">
            Get Started
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? 
            <X className="h-6 w-6" /> : 
            <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-white p-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg font-medium">
              Home
            </Link>
            <div className="py-2 text-lg font-medium">Features</div>
            <Link to="/calculator" onClick={() => setMobileMenuOpen(false)} className="pl-4 py-2">
              Pricing Calculator
            </Link>
            <Link to="/course" onClick={() => setMobileMenuOpen(false)} className="pl-4 py-2">
              Product Cost Database
            </Link>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="pl-4 py-2">
              Store Growth Charts
            </Link>
            <Link to="/course" onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg font-medium">
              Course
            </Link>
            <div className="py-2 text-lg font-medium">Resources</div>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="pl-4 py-2">
              Customer Support
            </Link>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="pl-4 py-2">
              FAQs
            </Link>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="pl-4 py-2">
              Blog / Tutorials
            </Link>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg font-medium">
              Pricing
            </Link>
            <Button onClick={() => setMobileMenuOpen(false)} className="mt-4">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calculator, Menu, Search, X } from "lucide-react";
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
                <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
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
                      <Link to="/seo-tool">
                        <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="flex items-center gap-2">
                            <Search className="h-4 w-4" />
                            <div className="text-sm font-medium leading-none">SEO Tool</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Generate optimized titles and tags
                          </p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/calculator">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Calculator
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/seo-tool">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    SEO Tool
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button size="sm" asChild>
            <Link to="/">
              Get Started
            </Link>
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
            <Link to="/calculator" onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg font-medium">
              Pricing Calculator
            </Link>
            <Link to="/seo-tool" onClick={() => setMobileMenuOpen(false)} className="py-2 text-lg font-medium">
              SEO Tool
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

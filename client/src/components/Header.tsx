import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Calculator, BookOpen, FileText, HelpCircle, Info, Github, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: 'Calculator', href: '#calculator', icon: Calculator, description: 'Interactive crafting calculator' },
    { name: 'Guides', href: '/guides', icon: BookOpen, description: 'Comprehensive crafting guides' },
    { name: 'Blog', href: '/blog', icon: FileText, description: 'Latest PoE insights' },
    { name: 'FAQ', href: '/faq', icon: HelpCircle, description: 'Common questions' },
    { name: 'About', href: '/about', icon: Info, description: 'About the project' },
  ];

  const scrollToCalculator = (e: React.MouseEvent) => {
    if (location === '/') {
      e.preventDefault();
      const element = document.getElementById('calculator');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-amber-500/30 sticky top-0 z-50 shadow-lg backdrop-blur-sm">
      <div className="bg-amber-500/10 backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-200 shadow-lg">
                  <span className="text-slate-900 font-bold text-xl">V</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  Vorici Calculator
                </span>
                <span className="text-xs text-amber-300/80 font-medium">
                  Path of Exile Crafting Tool
                </span>
              </div>
            </Link>
            
            {/* Desktop Navigation with Enhanced Styling */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location === item.href || (item.href === '#calculator' && location === '/');
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group relative px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                      isActive 
                        ? 'bg-amber-500/20 text-amber-300 shadow-md' 
                        : 'hover:bg-white/10 text-slate-300 hover:text-white'
                    }`}
                    onClick={item.href === '#calculator' ? scrollToCalculator : undefined}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-amber-400 rounded-full"></div>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* GitHub Link and CTA */}
            <div className="hidden md:flex items-center space-x-3">
              <a 
                href="https://github.com/vorici-calculator" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                <Star className="w-4 h-4" />
              </a>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                Live
              </Badge>
            </div>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-slate-300 hover:text-white hover:bg-white/10 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
          
          {/* Enhanced Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-amber-500/20 pt-4">
              <div className="grid gap-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = location === item.href || (item.href === '#calculator' && location === '/');
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive 
                          ? 'bg-amber-500/20 text-amber-300' 
                          : 'hover:bg-white/10 text-slate-300 hover:text-white'
                      }`}
                      onClick={(e) => {
                        setIsMenuOpen(false);
                        if (item.href === '#calculator') scrollToCalculator(e);
                      }}
                    >
                      <Icon className="w-5 h-5" />
                      <div className="flex flex-col">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-xs opacity-70">{item.description}</span>
                      </div>
                    </Link>
                  );
                })}
                
                {/* Mobile GitHub Link */}
                <a 
                  href="https://github.com/vorici-calculator" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-all duration-200 mt-2 border-t border-amber-500/20 pt-4"
                >
                  <Github className="w-5 h-5" />
                  <div className="flex flex-col">
                    <span className="font-medium">View on GitHub</span>
                    <span className="text-xs opacity-70">Open source project</span>
                  </div>
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

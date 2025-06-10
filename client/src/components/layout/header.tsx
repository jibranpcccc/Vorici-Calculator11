import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: 'Calculator', href: '#calculator', external: true },
    { name: 'Guides', href: '/guides' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'About', href: '/about' },
  ];

  const isActive = (href: string) => {
    if (href.startsWith('#')) return false;
    return location === href || location.startsWith(href + '/');
  };

  return (
    <header className="bg-dark-slate border-b border-exalted-gold/30 sticky top-0 z-50 backdrop-blur-lg bg-dark-slate/95">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-exalted-gold to-vibrant-gold rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-charcoal-stone font-heading font-bold text-lg">⚡</span>
            </div>
            <div>
              <h1 className="text-2xl font-heading font-bold text-exalted-gold">Vorici Calculator</h1>
              <p className="text-xs text-light-slate">Path of Exile Crafting Tool</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-off-white hover:text-exalted-gold hover:bg-exalted-gold/10 transition-all font-medium"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive(item.href)
                      ? 'text-exalted-gold bg-exalted-gold/20 border border-exalted-gold/30'
                      : 'text-off-white hover:text-exalted-gold hover:bg-exalted-gold/10'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden btn-secondary w-10 h-10 rounded-lg flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 border-t border-exalted-gold/30 pt-6">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-4 py-3 rounded-lg text-off-white hover:text-exalted-gold hover:bg-exalted-gold/10 transition-all font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-3 rounded-lg font-medium transition-all ${
                      isActive(item.href)
                        ? 'text-exalted-gold bg-exalted-gold/20 border border-exalted-gold/30'
                        : 'text-off-white hover:text-exalted-gold hover:bg-exalted-gold/10'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

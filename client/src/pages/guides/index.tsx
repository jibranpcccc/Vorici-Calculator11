import { SEOHead } from '@/components/seo/head';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'wouter';
import { BookOpen, Calculator, Zap, HelpCircle } from 'lucide-react';

export default function GuidesIndex() {
  const guides = [
    {
      title: "The Complete Path of Exile Crafting Guide",
      description: "The definitive guide to crafting in Path of Exile. Learn everything about currency orbs, the crafting bench, socket mechanics, and more.",
      href: "/guides/path-of-exile-crafting-guide",
      icon: BookOpen,
      difficulty: "Beginner to Advanced",
      readTime: "15 min read",
      featured: true,
    },
    {
      title: "Socket Coloring Mechanics: A Deep Dive",
      description: "Learn the exact math behind Chromatic Orbs and socket coloring. Understand how item attributes affect red, blue, and green socket chances.",
      href: "/guides/socket-coloring-mechanics",
      icon: Zap,
      difficulty: "Intermediate",
      readTime: "8 min read",
    },
    {
      title: "The Ultimate Guide to 6-Linking",
      description: "Master the art of 6-linking items efficiently. Learn about Fusing Orb odds, quality impact, and when to use the crafting bench.",
      href: "/guides/6-linking-strategies",
      icon: Zap,
      difficulty: "Intermediate",
      readTime: "10 min read",
    },
    {
      title: "How to Use Our PoE Crafting Calculator",
      description: "A detailed, visual tutorial on how to use every feature of our All-in-One Path of Exile Crafting Calculator.",
      href: "/guides/how-to-use-the-calculator",
      icon: Calculator,
      difficulty: "Beginner",
      readTime: "5 min read",
    },
  ];

  return (
    <>
      <SEOHead
        title="Path of Exile Crafting Guides | Vorici Calculator"
        description="Comprehensive Path of Exile crafting guides covering socket coloring, 6-linking strategies, currency optimization, and calculator tutorials."
        keywords="Path of Exile guides, PoE crafting tutorial, socket coloring guide, 6-link guide, crafting bench guide"
      />
      
      <div className="min-h-screen bg-poe-dark text-poe-text">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-gaming font-bold text-poe-gold mb-4">
              Crafting Guides
            </h1>
            <p className="text-lg text-poe-text-dim max-w-2xl mx-auto">
              Master Path of Exile crafting with our comprehensive guides. From basic socket mechanics 
              to advanced currency optimization strategies.
            </p>
          </div>

          {/* Featured Guide */}
          {guides.filter(guide => guide.featured).map((guide) => (
            <div key={guide.href} className="mb-12">
              <div className="text-center mb-6">
                <span className="bg-poe-gold text-poe-dark px-4 py-2 rounded-full text-sm font-gaming font-bold">
                  ⭐ FEATURED GUIDE
                </span>
              </div>
              
              <Card className="bg-poe-dark-alt border-poe-gold/40 glow-effect">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div className="md:col-span-2">
                      <div className="flex items-center mb-4">
                        <guide.icon className="w-8 h-8 text-poe-gold mr-3" />
                        <div>
                          <div className="text-sm text-poe-text-dim">{guide.difficulty} • {guide.readTime}</div>
                        </div>
                      </div>
                      <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-4">
                        {guide.title}
                      </h2>
                      <p className="text-poe-text-dim mb-6">
                        {guide.description}
                      </p>
                      <Link 
                        href={guide.href}
                        className="bg-poe-gold text-poe-dark px-6 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block"
                      >
                        Read Complete Guide
                      </Link>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-poe-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <guide.icon className="w-12 h-12 text-poe-gold" />
                      </div>
                      <div className="text-poe-text-dim text-sm">
                        Complete coverage of all crafting mechanics
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}

          {/* All Guides */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.filter(guide => !guide.featured).map((guide) => (
              <Card key={guide.href} className="bg-poe-dark-alt border-poe-gold/20 hover:border-poe-gold/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <guide.icon className="w-6 h-6 text-poe-gold" />
                    <div className="text-xs text-poe-text-dim">
                      {guide.difficulty}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-gaming text-poe-gold">
                    {guide.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim text-sm mb-4">
                    {guide.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-poe-text-dim">{guide.readTime}</span>
                    <Link 
                      href={guide.href}
                      className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium"
                    >
                      Read Guide →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Calculator CTA */}
          <div className="mt-16">
            <Card className="bg-poe-dark-alt border-poe-gold/20">
              <CardContent className="p-8 text-center">
                <Calculator className="w-16 h-16 text-poe-gold mx-auto mb-4" />
                <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-4">
                  Ready to Calculate?
                </h2>
                <p className="text-poe-text-dim mb-6">
                  Put your knowledge to work with our All-in-One Crafting Calculator. 
                  Get precise costs and probabilities for all your crafting needs.
                </p>
                <Link 
                  href="#calculator"
                  className="bg-poe-gold text-poe-dark px-6 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block"
                >
                  Use Calculator Now
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Header from '@/components/Header';
import SEOHead from '@/components/SEOHead';
import { Calendar, Clock, User, TrendingUp, Zap, Target } from 'lucide-react';

const blogPosts = [
  {
    id: 'poe-3-26-crafting-changes',
    title: 'Path of Exile 3.26 Crafting Changes: What You Need to Know',
    excerpt: 'Complete breakdown of the latest crafting mechanics changes, new currency items, and updated socket probabilities in the newest league.',
    date: '2025-01-03',
    readTime: '8 min read',
    category: 'League Updates',
    categoryColor: 'bg-blue-500/20 text-blue-400',
    featured: true,
    image: '/images/blog/poe-3-26-crafting.jpg'
  },
  {
    id: 'chromatic-orb-optimization',
    title: 'Advanced Chromatic Orb Strategies: Save 50% on Socket Coloring',
    excerpt: 'Discover the mathematical secrets behind efficient socket coloring. Learn when to use the jeweller method vs direct chromatic spamming.',
    date: '2025-01-02',
    readTime: '12 min read',
    category: 'Strategy Guide',
    categoryColor: 'bg-green-500/20 text-green-400',
    featured: true,
    image: '/images/blog/chromatic-optimization.jpg'
  },
  {
    id: '6-link-probability-analysis',
    title: 'The Mathematics of 6-Linking: Expected Values vs Reality',
    excerpt: 'Deep dive into the statistical analysis of 6-linking items. Real data from 10,000+ linking attempts and variance calculations.',
    date: '2025-01-01',
    readTime: '15 min read',
    category: 'Analysis',
    categoryColor: 'bg-purple-500/20 text-purple-400',
    featured: false,
    image: '/images/blog/6-link-math.jpg'
  },
  {
    id: 'league-start-crafting-guide',
    title: 'League Start Crafting: Essential Items and Budget Strategies',
    excerpt: 'Maximize your early league progression with smart crafting choices. Focus on cost-effective upgrades that matter most.',
    date: '2024-12-30',
    readTime: '10 min read',
    category: 'Beginner Guide',
    categoryColor: 'bg-yellow-500/20 text-yellow-400',
    featured: false,
    image: '/images/blog/league-start.jpg'
  },
  {
    id: 'vorici-calculator-updates',
    title: 'Calculator Update: New Features and Improved Accuracy',
    excerpt: 'Latest improvements to our crafting calculator including session tracking, cost breakdowns, and mobile optimization.',
    date: '2024-12-28',
    readTime: '5 min read',
    category: 'Tool Updates',
    categoryColor: 'bg-orange-500/20 text-orange-400',
    featured: false,
    image: '/images/blog/calculator-update.jpg'
  },
  {
    id: 'currency-trading-optimization',
    title: 'Currency Trading for Crafters: Maximize Your Orb Efficiency',
    excerpt: 'Learn to monitor exchange rates and optimize your currency conversions for maximum crafting value.',
    date: '2024-12-25',
    readTime: '7 min read',
    category: 'Economics',
    categoryColor: 'bg-red-500/20 text-red-400',
    featured: false,
    image: '/images/blog/currency-trading.jpg'
  }
];

export default function BlogIndex() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <SEOHead
        title="Path of Exile Crafting Blog - Latest Strategies & Updates | Vorici Calculator"
        description="Stay updated with the latest Path of Exile crafting strategies, league updates, and optimization techniques. Expert analysis and guides for PoE crafters."
        keywords="Path of Exile blog, PoE crafting strategies, league updates, socket coloring guides, 6-link tips, crafting optimization"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Vorici Calculator Blog",
          "description": "Expert Path of Exile crafting guides and analysis",
          "url": "https://vorici-calculator.com/blog"
        }}
      />
      
      <div className="min-h-screen bg-poe-dark text-readable">
        <Header />
        
        <main className="container mx-auto px-4 py-8 blog-content guide-content">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-gaming font-bold text-poe-gold mb-4">
                Path of Exile Crafting Blog
              </h1>
              <p className="text-xl text-readable-muted max-w-2xl mx-auto">
                Expert strategies, league updates, and mathematical analysis for optimal crafting in Path of Exile.
              </p>
            </div>

            {/* Featured Posts */}
            <section className="mb-12">
              <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Featured Articles
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <Card key={post.id} className="content-section border-poe-gold/30 hover:border-poe-gold/60 transition-colors group">
                    <div className="aspect-video bg-gradient-to-br from-poe-gold/20 to-poe-orange/20 rounded-t-lg flex items-center justify-center">
                      <div className="text-poe-gold/60 text-6xl">📊</div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={post.categoryColor}>{post.category}</Badge>
                        <div className="flex items-center gap-1 text-sm text-readable-muted">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <CardTitle className="text-poe-gold group-hover:text-poe-gold/80 transition-colors">
                        <Link href={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-readable-muted mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-readable-muted">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                        <Link 
                          href={`/blog/${post.id}`}
                          className="text-poe-gold hover:text-poe-gold/80 font-medium transition-colors"
                        >
                          Read More →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Recent Posts */}
            <section>
              <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                Recent Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {regularPosts.map((post) => (
                  <Card key={post.id} className="content-section border-poe-gold/30 hover:border-poe-gold/60 transition-colors group">
                    <div className="aspect-video bg-gradient-to-br from-poe-gold/10 to-poe-orange/10 rounded-t-lg flex items-center justify-center">
                      <div className="text-poe-gold/40 text-4xl">📝</div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={post.categoryColor} variant="secondary">{post.category}</Badge>
                      </div>
                      <CardTitle className="text-lg text-poe-gold group-hover:text-poe-gold/80 transition-colors">
                        <Link href={`/blog/${post.id}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-readable-muted mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1 text-readable-muted">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1 text-readable-muted">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-poe-gold hover:text-poe-gold/80 font-medium transition-colors text-sm mt-2 inline-block"
                      >
                        Read Article →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Newsletter CTA */}
            <Card className="mt-12 bg-gradient-to-r from-poe-gold/20 to-poe-orange/20 border-poe-gold/40">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-4">
                  Stay Updated with League Changes
                </h2>
                <p className="text-readable-muted mb-6 max-w-2xl mx-auto">
                  Get notified when we publish new crafting guides, calculator updates, and league-specific strategies.
                  Join thousands of Path of Exile crafters optimizing their currency.
                </p>
                <Link 
                  href="#calculator"
                  className="bg-poe-gold text-poe-dark px-8 py-4 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block"
                >
                  Try Our Calculator
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}

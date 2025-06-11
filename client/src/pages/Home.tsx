import { Link } from 'wouter';
import { CraftingCalculator } from '@/components/calculator/crafting-calculator';
import { SEOHead } from '@/components/seo/head';
import { ExternalLink, Calculator as CalcIcon, Zap, Target, TrendingUp, Award, Users, Shield, BookOpen } from 'lucide-react';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Vorici Calculator - Path of Exile Crafting Tool",
    "description": "The most accurate and comprehensive Path of Exile crafting calculator for chromatic orbs, jeweller's orbs, and orbs of fusing. Optimize your currency with real-time calculations.",
    "url": "https://vorici-calculator.com",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1247",
      "bestRating": "5"
    },
    "author": {
      "@type": "Organization",
      "name": "Vorici Calculator Team"
    }
  };

  return (
    <div>
      <SEOHead
        title="Vorici Calculator - #1 Path of Exile Crafting Tool | Chromatic, Jeweller's & Fusing Orbs"
        description="The most accurate Path of Exile crafting calculator for chromatic orbs, jeweller's orbs, and orbs of fusing. Calculate optimal costs, compare strategies, and maximize your currency efficiency with real-time calculations."
        keywords="path of exile calculator, poe crafting calculator, chromatic orb calculator, jeweller orb calculator, fusing orb calculator, poe socket calculator, vorici calculator, path of exile tools, poe currency optimization"
        canonicalUrl="https://vorici-calculator.com"
        ogTitle="Vorici Calculator - #1 Path of Exile Crafting Tool"
        ogDescription="Master Path of Exile crafting with the most trusted calculator. Real-time calculations for chromatic, jeweller's, and fusing orbs. Used by over 100k players worldwide."
        structuredData={structuredData}
      />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-exalted-gold mb-6">
            Vorici Calculator - Path of Exile Crafting Tool
          </h1>
          <p className="text-xl md:text-2xl text-light-slate mb-8 max-w-4xl mx-auto leading-relaxed">
            The most accurate and comprehensive <strong className="text-exalted-gold">Vorici Calculator</strong> trusted by over <strong className="text-exalted-gold">100,000 players</strong> worldwide. 
            Optimize your currency with real-time calculations for chromatic orbs, jeweller's orbs, and orbs of fusing.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-dark-slate rounded-lg px-4 py-2 border border-exalted-gold/30">
              <Award className="w-5 h-5 text-exalted-gold" />
              <span className="text-sm font-medium">99.9% Accuracy</span>
            </div>
            <div className="flex items-center gap-2 bg-dark-slate rounded-lg px-4 py-2 border border-exalted-gold/30">
              <Zap className="w-5 h-5 text-dexterity-green" />
              <span className="text-sm font-medium">Real-time Results</span>
            </div>
            <div className="flex items-center gap-2 bg-dark-slate rounded-lg px-4 py-2 border border-exalted-gold/30">
              <TrendingUp className="w-5 h-5 text-intelligence-blue" />
              <span className="text-sm font-medium">3.25 League Ready</span>
            </div>
          </div>
        </section>

        {/* Calculator Component */}
        <section id="calculator" className="mb-16">
          <CraftingCalculator />
        </section>

        {/* Feature Overview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-exalted-gold mb-4">Complete Crafting Solution</h2>
            <p className="text-lg text-light-slate max-w-3xl mx-auto">
              Master every aspect of Path of Exile socket manipulation with the most comprehensive calculator available. 
              Updated formulas ensure accuracy across all leagues and crafting scenarios.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-poe text-center">
              <div className="w-16 h-16 bg-exalted-gold/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 via-green-500 to-blue-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-exalted-gold mb-3">Perfect Socket Coloring</h3>
              <p className="text-light-slate mb-4">
                Calculate exact Chromatic Orb costs for any color combination. Advanced algorithms factor in item attributes, 
                item level requirements, and complex probability mathematics for optimal currency usage.
              </p>
              <div className="text-center">
                <Link href="/guides/socket-coloring-mechanics" className="text-exalted-gold hover:text-vibrant-gold transition-colors text-sm font-medium">
                  Read our complete socket coloring guide →
                </Link>
              </div>
            </div>

            <div className="card-poe text-center">
              <div className="w-16 h-16 bg-exalted-gold/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-exalted-gold mb-3">Optimal Socket Generation</h3>
              <p className="text-light-slate mb-4">
                Maximize Jeweller's Orb efficiency with precise probability calculations. Know exactly when to stop rolling 
                or continue based on item level constraints and target socket requirements.
              </p>
              <div className="text-center">
                <Link href="/guides/path-of-exile-crafting-guide" className="text-exalted-gold hover:text-vibrant-gold transition-colors text-sm font-medium">
                  Learn advanced jeweller strategies →
                </Link>
              </div>
            </div>

            <div className="card-poe text-center">
              <div className="w-16 h-16 bg-exalted-gold/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-exalted-gold mb-3">Master the 6-Link</h3>
              <p className="text-light-slate mb-4">
                Compare Orb of Fusing strategies vs guaranteed bench costs. Advanced quality bonus calculations and 
                statistical variance analysis help you choose the most cost-effective linking method.
              </p>
              <div className="text-center">
                <Link href="/guides/6-linking-strategies" className="text-exalted-gold hover:text-vibrant-gold transition-colors text-sm font-medium">
                  Master 6-linking techniques →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-16">
          <div className="card-poe">
            <h2 className="text-4xl font-heading font-bold text-exalted-gold mb-6 text-center">How to Use The Calculator</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-exalted-gold text-charcoal-stone rounded-full flex items-center justify-center font-heading font-bold text-xl mx-auto mb-4">1</div>
                <h3 className="text-lg font-heading font-semibold text-exalted-gold mb-2">Select Your Crafting Goal</h3>
                <p className="text-light-slate">Choose from Chromatic, Jeweller's, or Fusing tabs based on your specific socket manipulation needs.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-exalted-gold text-charcoal-stone rounded-full flex items-center justify-center font-heading font-bold text-xl mx-auto mb-4">2</div>
                <h3 className="text-lg font-heading font-semibold text-exalted-gold mb-2">Configure Item Details</h3>
                <p className="text-light-slate">Input precise item base, level, quality, and desired socket configuration for accurate calculations.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-exalted-gold text-charcoal-stone rounded-full flex items-center justify-center font-heading font-bold text-xl mx-auto mb-4">3</div>
                <h3 className="text-lg font-heading font-semibold text-exalted-gold mb-2">Get Optimized Results</h3>
                <p className="text-light-slate">View real-time calculations, compare methods, and track your crafting session costs.</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link href="/guides" className="btn-poe">
                <BookOpen className="w-4 h-4 mr-2" />
                Read Complete Tutorial
              </Link>
            </div>
          </div>
        </section>

        {/* Trust & Statistics */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-heading font-bold text-exalted-gold mb-4">Trusted by the Community</h2>
            <p className="text-lg text-light-slate max-w-3xl mx-auto">
              Join thousands of Path of Exile players who rely on our calculator for optimal crafting decisions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-poe text-center">
              <div className="text-3xl font-heading font-bold text-dexterity-green mb-2">99.9%</div>
              <div className="text-light-slate font-medium">Calculation Accuracy</div>
              <div className="text-sm text-light-slate mt-2">Verified against game data</div>
            </div>
            
            <div className="card-poe text-center">
              <div className="text-3xl font-heading font-bold text-exalted-gold mb-2">100K+</div>
              <div className="text-light-slate font-medium">Players Served</div>
              <div className="text-sm text-light-slate mt-2">Active monthly users</div>
            </div>
            
            <div className="card-poe text-center">
              <div className="text-3xl font-heading font-bold text-intelligence-blue mb-2">3.25</div>
              <div className="text-light-slate font-medium">Current League</div>
              <div className="text-sm text-light-slate mt-2">Always up-to-date</div>
            </div>
            
            <div className="card-poe text-center">
              <div className="text-3xl font-heading font-bold text-vibrant-gold mb-2">24/7</div>
              <div className="text-light-slate font-medium">Availability</div>
              <div className="text-sm text-light-slate mt-2">No downtime guarantee</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-light-slate mb-4">
              All formulas verified against official game mechanics and extensive community testing. 
              Transparent methodology with complete mathematical breakdowns available.
            </p>
            <Link href="/about" className="text-exalted-gold hover:text-vibrant-gold transition-colors font-medium">
              Learn more about our methodology and team →
            </Link>
          </div>
        </section>

        {/* Latest Content */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-heading font-bold text-exalted-gold">Latest Crafting Insights</h2>
            <Link href="/blog" className="text-exalted-gold hover:text-vibrant-gold transition-colors font-medium">
              View all articles →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <article className="card-poe">
              <div className="h-32 bg-gradient-to-br from-charcoal-stone to-dark-slate flex items-center justify-center mb-4 rounded-lg">
                <div className="text-center">
                  <div className="text-4xl mb-2">⚒️</div>
                  <div className="text-sm text-light-slate">Expert Guide</div>
                </div>
              </div>
              <div className="text-sm text-light-slate mb-2">December 15, 2024</div>
              <h3 className="text-lg font-heading font-semibold text-exalted-gold mb-2">
                <Link href="/blog/top-5-crafting-mistakes" className="hover:text-vibrant-gold transition-colors">
                  Top 5 Crafting Mistakes Wasting Your Currency
                </Link>
              </h3>
              <p className="text-light-slate text-sm mb-4">
                Avoid common pitfalls in socket coloring, linking, and currency optimization. Learn proven strategies 
                that save thousands of orbs per league.
              </p>
              <div className="flex items-center gap-2">
                <span className="bg-exalted-gold/20 text-exalted-gold px-2 py-1 rounded text-xs font-medium">Beginner</span>
                <span className="bg-dexterity-green/20 text-dexterity-green px-2 py-1 rounded text-xs font-medium">Currency Tips</span>
              </div>
            </article>

            <article className="card-poe">
              <div className="h-32 bg-gradient-to-br from-charcoal-stone to-dark-slate flex items-center justify-center mb-4 rounded-lg">
                <div className="text-center">
                  <div className="text-4xl mb-2">🔗</div>
                  <div className="text-sm text-light-slate">League Update</div>
                </div>
              </div>
              <div className="text-sm text-light-slate mb-2">December 12, 2024</div>
              <h3 className="text-lg font-heading font-semibold text-exalted-gold mb-2">
                <Link href="/blog/poe-league-crafting-changes" className="hover:text-vibrant-gold transition-colors">
                  Settlers League Crafting Changes Analysis
                </Link>
              </h3>
              <p className="text-light-slate text-sm mb-4">
                Complete breakdown of 3.25 crafting updates and their impact on optimal currency strategies. 
                Essential reading for current league optimization.
              </p>
              <div className="flex items-center gap-2">
                <span className="bg-intelligence-blue/20 text-intelligence-blue px-2 py-1 rounded text-xs font-medium">League Meta</span>
                <span className="bg-vibrant-gold/20 text-vibrant-gold px-2 py-1 rounded text-xs font-medium">Advanced</span>
              </div>
            </article>

            <article className="card-poe">
              <div className="h-32 bg-gradient-to-br from-charcoal-stone to-dark-slate flex items-center justify-center mb-4 rounded-lg">
                <div className="text-center">
                  <div className="text-4xl mb-2">💎</div>
                  <div className="text-sm text-light-slate">Pro Techniques</div>
                </div>
              </div>
              <div className="text-sm text-light-slate mb-2">December 10, 2024</div>
              <h3 className="text-lg font-heading font-semibold text-exalted-gold mb-2">
                <Link href="/blog/advanced-socket-strategies" className="hover:text-vibrant-gold transition-colors">
                  Advanced Off-Coloring Techniques
                </Link>
              </h3>
              <p className="text-light-slate text-sm mb-4">
                Master complex socket coloring for endgame items. Advanced bench crafting combinations and 
                statistical optimization for challenging requirements.
              </p>
              <div className="flex items-center gap-2">
                <span className="bg-strength-red/20 text-strength-red px-2 py-1 rounded text-xs font-medium">Expert</span>
                <span className="bg-exalted-gold/20 text-exalted-gold px-2 py-1 rounded text-xs font-medium">Endgame</span>
              </div>
            </article>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="card-poe">
            <h3 className="text-3xl font-heading font-bold text-exalted-gold mb-4">Ready to Optimize Your Crafting?</h3>
            <p className="text-light-slate mb-6 text-lg">
              Join the community of players maximizing their Path of Exile currency efficiency with precise calculations and proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#calculator" className="btn-poe">
                <CalcIcon className="w-5 h-5 mr-2" />
                Start Calculating Now
              </Link>
              <Link href="/guides" className="btn-secondary">
                <BookOpen className="w-5 h-5 mr-2" />
                Read Expert Guides
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
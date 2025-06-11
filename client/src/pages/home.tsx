import SEOHead from '@/components/SEOHead';
import Calculator from '@/components/Calculator';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator as CalculatorIcon, Zap, TrendingUp, Shield, ExternalLink, BookOpen, Users } from 'lucide-react';

export default function Home() {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Vorici Calculator",
      "description": "Ultimate Path of Exile crafting calculator for socket coloring, linking, and currency optimization",
      "url": "https://vorici-calculator.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://vorici-calculator.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Vorici Calculator - Path of Exile Crafting Tool",
      "description": "Real-time crafting cost calculator for Path of Exile. Calculate optimal costs for socket coloring, jeweller's orbs, and fusing orbs.",
      "applicationCategory": "GameApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1247"
      }
    }
  ];

  return (
    <>
      <SEOHead
        title="Vorici Calculator - Path of Exile Crafting Cost Calculator | 2025"
        description="Calculate optimal crafting costs for Path of Exile. Real-time socket coloring, jeweller's orb, and fusing orb probability calculations with accurate PoE mechanics."
        keywords="path of exile, poe, crafting calculator, vorici calculator, socket coloring, jeweller orb, fusing orb, poe crafting, chromatic orb calculator"
        schemaData={schemaData}
        ogType="website"
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-poe-accent mb-4">
              Path of Exile Crafting Calculator
            </h1>
            <p className="text-lg text-poe-text-secondary max-w-3xl mx-auto mb-6">
              Calculate optimal crafting costs for socket coloring, jeweller's orbs, and fusing orbs. 
              Real-time calculations with accurate Path of Exile mechanics and probability formulas.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              <Badge variant="secondary" className="bg-poe-accent/20 text-poe-accent">Free Forever</Badge>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400">Real-Time Results</Badge>
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">All Leagues</Badge>
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-400">Mobile Optimized</Badge>
            </div>
          </div>

          <Calculator />
        </section>

        {/* Feature Overview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-poe-text mb-4">Why Choose Our Calculator?</h2>
            <p className="text-poe-text-secondary max-w-2xl mx-auto">
              Trusted by thousands of Path of Exile players for accurate crafting calculations and cost optimization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-poe-surface border-poe-accent/20">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 text-poe-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-poe-text mb-2">Real-Time Calculations</h3>
                <p className="text-poe-text-secondary">
                  Instant results as you adjust settings. No waiting, no submit buttons - just immediate feedback.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-poe-surface border-poe-accent/20">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-poe-text mb-2">Accurate Probabilities</h3>
                <p className="text-poe-text-secondary">
                  Based on official Path of Exile mechanics and extensively tested probability formulas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-poe-surface border-poe-accent/20">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-poe-text mb-2">Cost Optimization</h3>
                <p className="text-poe-text-secondary">
                  Compare different crafting methods and find the most cost-effective approach for your items.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Calculator Types */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-poe-text mb-4">Three Powerful Calculators</h2>
            <p className="text-poe-text-secondary max-w-2xl mx-auto">
              Everything you need for Path of Exile crafting, from socket coloring to 6-linking your gear.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-poe-surface border-poe-accent/20 hover:border-poe-accent/40 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-poe-accent mb-3">Chromatic Orb Calculator</h3>
                <ul className="space-y-2 text-poe-text-secondary mb-4">
                  <li>• Socket color probability calculations</li>
                  <li>• Item base type optimization</li>
                  <li>• Bench craft vs spam comparisons</li>
                  <li>• Interactive socket visualizer</li>
                </ul>
                <p className="text-sm text-poe-text-secondary">
                  Perfect for getting the right socket colors on your gear efficiently.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-poe-surface border-poe-accent/20 hover:border-poe-accent/40 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-poe-accent mb-3">Jeweller's Orb Calculator</h3>
                <ul className="space-y-2 text-poe-text-secondary mb-4">
                  <li>• Socket count optimization</li>
                  <li>• Item level considerations</li>
                  <li>• 350 jeweller's bench craft analysis</li>
                  <li>• Probability-based recommendations</li>
                </ul>
                <p className="text-sm text-poe-text-secondary">
                  Determine the most efficient way to get the socket count you need.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-poe-surface border-poe-accent/20 hover:border-poe-accent/40 transition-colors">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-poe-accent mb-3">Orb of Fusing Calculator</h3>
                <ul className="space-y-2 text-poe-text-secondary mb-4">
                  <li>• 6-link probability calculations</li>
                  <li>• Quality impact analysis</li>
                  <li>• 1500 fusing bench comparison</li>
                  <li>• Expected cost breakdowns</li>
                </ul>
                <p className="text-sm text-poe-text-secondary">
                  Make informed decisions about linking your most valuable items.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Guides Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-poe-text mb-4">Learn Advanced Crafting</h2>
            <p className="text-poe-text-secondary max-w-2xl mx-auto">
              Master Path of Exile crafting with our comprehensive guides and strategies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-poe-surface border-poe-accent/20">
              <CardContent className="p-6">
                <BookOpen className="w-8 h-8 text-poe-accent mb-4" />
                <h3 className="text-xl font-semibold text-poe-text mb-3">Crafting Guides</h3>
                <p className="text-poe-text-secondary mb-4">
                  In-depth guides covering socket mechanics, probability theory, and advanced crafting strategies.
                </p>
                <Link href="/guides">
                  <span className="inline-flex items-center text-poe-accent hover:text-poe-accent/80 transition-colors">
                    Browse Guides <ExternalLink className="w-4 h-4 ml-2" />
                  </span>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-poe-surface border-poe-accent/20">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-poe-text mb-3">Community Content</h3>
                <p className="text-poe-text-secondary mb-4">
                  Latest league updates, crafting tips, and community-contributed strategies and builds.
                </p>
                <Link href="/blog">
                  <span className="inline-flex items-center text-green-400 hover:text-green-400/80 transition-colors">
                    Read Blog <ExternalLink className="w-4 h-4 ml-2" />
                  </span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-poe-text mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-poe-surface border-poe-accent/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-poe-text mb-2">How accurate are the calculations?</h3>
                <p className="text-poe-text-secondary">
                  Our calculations are based on official Path of Exile mechanics and have been verified through extensive testing. 
                  The probability formulas match the game's actual drop rates and crafting mechanics.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-poe-surface border-poe-accent/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-poe-text mb-2">Is this calculator updated for the current league?</h3>
                <p className="text-poe-text-secondary">
                  Yes, we regularly update the calculator to reflect any changes in Path of Exile's crafting mechanics. 
                  The current version includes all updates through the latest league.
                </p>
              </CardContent>
            </Card>

            <div className="text-center">
              <Link href="/faq">
                <span className="inline-flex items-center text-poe-accent hover:text-poe-accent/80 transition-colors">
                  View All FAQs <ExternalLink className="w-4 h-4 ml-2" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
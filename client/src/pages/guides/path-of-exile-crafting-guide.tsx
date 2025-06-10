import { Link } from 'wouter';
import { SEOHead } from '@/components/seo/head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Calculator, Zap, Target, TrendingUp, ExternalLink } from 'lucide-react';

export default function PathOfExileCraftingGuide() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Complete Path of Exile Crafting Guide",
    "description": "The definitive guide to crafting in Path of Exile. Learn everything about currency orbs, the crafting bench, socket mechanics, influencing items, and more.",
    "author": {
      "@type": "Organization",
      "name": "Vorici Calculator Team"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Vorici Calculator",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vorici-calculator.com/logo.png"
      }
    },
    "datePublished": "2024-12-15",
    "dateModified": "2024-12-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://vorici-calculator.com/guides/path-of-exile-crafting-guide/"
    }
  };

  return (
    <div>
      <SEOHead
        title="The Complete Path of Exile Crafting Guide (2024) | Master All Mechanics"
        description="The definitive guide to crafting in Path of Exile. Learn everything about currency orbs, the crafting bench, socket mechanics, influencing items, and more. Updated for current league."
        keywords="path of exile crafting guide, poe crafting mechanics, crafting bench, socket mechanics, orb of fusing, chromatic orb guide, jeweller orb, poe currency guide"
        canonicalUrl="https://vorici-calculator.com/guides/path-of-exile-crafting-guide/"
        structuredData={structuredData}
      />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-poe-text-dim">
            <li><Link href="/" className="hover:text-poe-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/guides" className="hover:text-poe-gold transition-colors">Guides</Link></li>
            <li>/</li>
            <li className="text-poe-text">Complete Crafting Guide</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-poe-gold mb-6">
            The Complete Path of Exile Crafting Guide
          </h1>
          <p className="text-xl text-poe-text-dim mb-8 max-w-4xl leading-relaxed">
            Master every aspect of Path of Exile crafting with this comprehensive guide. From basic currency usage to advanced 
            socket manipulation, learn the mechanics that will save you thousands of orbs and elevate your gameplay.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-poe-gold/30">
              <BookOpen className="w-5 h-5 text-poe-gold" />
              <span className="text-sm font-medium">15 min read</span>
            </div>
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-poe-gold/30">
              <TrendingUp className="w-5 h-5 text-dexterity-green" />
              <span className="text-sm font-medium">Updated for 3.25</span>
            </div>
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-poe-gold/30">
              <Target className="w-5 h-5 text-intelligence-blue" />
              <span className="text-sm font-medium">Comprehensive</span>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-poe-gold/20 to-poe-orange/20 border-poe-gold/40">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Calculator className="w-8 h-8 text-poe-gold" />
                <div>
                  <h3 className="text-lg font-gaming font-bold text-poe-gold mb-2">
                    Put Theory into Practice
                  </h3>
                  <p className="text-poe-text-dim mb-4">
                    Use our All-in-One Crafting Calculator to get precise cost estimates while you read this guide.
                  </p>
                  <Link 
                    href="/#calculator"
                    className="bg-poe-gold text-poe-dark px-4 py-2 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block"
                  >
                    Try the Calculator Now
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </header>

        {/* Table of Contents */}
        <Card className="mb-12 bg-poe-dark-alt border-poe-gold/30">
          <CardHeader>
            <CardTitle className="text-poe-gold font-gaming">Table of Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-2 text-poe-text-dim">
              <li><a href="#core-currencies" className="hover:text-poe-gold transition-colors">1. The Core Crafting Currencies</a></li>
              <li><a href="#understanding-items" className="hover:text-poe-gold transition-colors">2. Understanding Your Item (The Crafting Base)</a></li>
              <li><a href="#crafting-bench" className="hover:text-poe-gold transition-colors">3. The Crafting Bench: Your Best Friend</a></li>
              <li><a href="#socket-mathematics" className="hover:text-poe-gold transition-colors">4. The Mathematics of Sockets, Links, and Colors</a></li>
              <li><a href="#advanced-crafting" className="hover:text-poe-gold transition-colors">5. Advanced Crafting: Influences, Essences, and Fossils</a></li>
              <li><a href="#practical-strategies" className="hover:text-poe-gold transition-colors">6. Practical Crafting Strategies</a></li>
              <li><a href="#common-mistakes" className="hover:text-poe-gold transition-colors">7. Common Mistakes to Avoid</a></li>
            </ol>
          </CardContent>
        </Card>

        {/* Main Content */}
        <article className="prose prose-lg max-w-none">
          
          {/* Section 1: Core Currencies */}
          <section id="core-currencies" className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">The Core Crafting Currencies</h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              Path of Exile's economy revolves around currency orbs that modify items. Understanding each orb's function 
              and probability is essential for efficient crafting. This section covers the three orbs our calculator specializes in.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Chromatic Orbs */}
              <Card className="bg-poe-dark-alt border-strength-red/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 via-green-500 to-blue-500 rounded-full"></div>
                    <CardTitle className="text-strength-red font-gaming">Chromatic Orbs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4">
                    Reforge the colors of sockets on an item. Socket colors are weighted based on the item's attribute requirements.
                  </p>
                  <ul className="text-sm text-poe-text-dim space-y-1">
                    <li>• Strength items favor red sockets</li>
                    <li>• Dexterity items favor green sockets</li>
                    <li>• Intelligence items favor blue sockets</li>
                    <li>• Hybrid items have balanced weights</li>
                  </ul>
                  <div className="mt-4">
                    <Link href="/guides/socket-coloring-mechanics" className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium">
                      Read our deep-dive on socket coloring mechanics →
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Jeweller's Orbs */}
              <Card className="bg-poe-dark-alt border-dexterity-green/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full"></div>
                    <CardTitle className="text-dexterity-green font-gaming">Jeweller's Orbs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4">
                    Reforge the number of sockets on an item. The maximum sockets depend on item level and type.
                  </p>
                  <ul className="text-sm text-poe-text-dim space-y-1">
                    <li>• Item level 1: Maximum 2 sockets</li>
                    <li>• Item level 15: Maximum 3 sockets</li>
                    <li>• Item level 28: Maximum 4 sockets</li>
                    <li>• Item level 35: Maximum 5 sockets</li>
                    <li>• Item level 50+: Maximum 6 sockets</li>
                  </ul>
                  <div className="mt-4">
                    <span className="text-poe-gold text-sm font-medium">Bench Recipe: 350 Jeweller's for guaranteed 6 sockets</span>
                  </div>
                </CardContent>
              </Card>

              {/* Orbs of Fusing */}
              <Card className="bg-poe-dark-alt border-intelligence-blue/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-full"></div>
                    <CardTitle className="text-intelligence-blue font-gaming">Orbs of Fusing</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4">
                    Reforge the links between sockets on an item. Quality on the item improves linking chances.
                  </p>
                  <ul className="text-sm text-poe-text-dim space-y-1">
                    <li>• 6-link chance: ~1/1200 at 0% quality</li>
                    <li>• 20% quality improves odds by ~20%</li>
                    <li>• Bench recipe: 1500 fusings for guaranteed 6-link</li>
                    <li>• Always 20% quality before attempting</li>
                  </ul>
                  <div className="mt-4">
                    <Link href="/guides/6-linking-strategies" className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium">
                      Master 6-linking techniques →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 2: Understanding Items */}
          <section id="understanding-items" className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">Understanding Your Item (The Crafting Base)</h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              Before you start crafting, you need to understand the item you're working with. Every item has properties 
              that affect crafting outcomes, and choosing the right base can save you hundreds of orbs.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming">Item Level (iLvl)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4">
                    Item level determines the maximum number of sockets an item can have. This is crucial for socket planning.
                  </p>
                  <div className="bg-poe-dark rounded-lg p-4">
                    <h4 className="font-semibold text-poe-gold mb-2">Socket Limits by Item Level:</h4>
                    <ul className="text-sm text-poe-text-dim space-y-1">
                      <li>iLvl 1-14: 1-2 sockets maximum</li>
                      <li>iLvl 15-27: 1-3 sockets maximum</li>
                      <li>iLvl 28-34: 1-4 sockets maximum</li>
                      <li>iLvl 35-49: 1-5 sockets maximum</li>
                      <li>iLvl 50+: 1-6 sockets maximum</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming">Attribute Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4">
                    An item's attribute requirements determine socket color probabilities when using Chromatic Orbs.
                  </p>
                  <div className="bg-poe-dark rounded-lg p-4">
                    <h4 className="font-semibold text-poe-gold mb-2">Color Weights:</h4>
                    <ul className="text-sm text-poe-text-dim space-y-1">
                      <li><span className="text-strength-red">Strength items:</span> 100 red, 25 green, 25 blue</li>
                      <li><span className="text-dexterity-green">Dexterity items:</span> 25 red, 100 green, 25 blue</li>
                      <li><span className="text-intelligence-blue">Intelligence items:</span> 25 red, 25 green, 100 blue</li>
                      <li><span className="text-poe-gold">Hybrid items:</span> Balanced between requirements</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-poe-orange/20 to-poe-gold/20 border-poe-orange/40">
              <CardContent className="p-6">
                <h3 className="text-xl font-gaming font-bold text-poe-orange mb-3">
                  Pro Tip: Off-Coloring Strategy
                </h3>
                <p className="text-poe-text-dim">
                  When you need colors that don't match your item's attributes (like blue sockets on a strength item), 
                  expect to use significantly more Chromatic Orbs. Always check the calculator to compare costs with 
                  Vorici bench recipes for guaranteed results.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 3: Crafting Bench */}
          <section id="crafting-bench" className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">The Crafting Bench: Your Best Friend</h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              The Crafting Bench in your hideout provides guaranteed outcomes for fixed costs. For socket manipulation, 
              these recipes often provide the most cost-effective solutions, especially for difficult color combinations.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming">Socket Recipes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-poe-text mb-2">Number of Sockets:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>6 sockets: 350 Jeweller's Orbs</li>
                        <li>5 sockets: 70 Jeweller's Orbs</li>
                        <li>4 sockets: 20 Jeweller's Orbs</li>
                        <li>3 sockets: 7 Jeweller's Orbs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-poe-text mb-2">Socket Colors:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>1 red socket: 4 Chromatic Orbs</li>
                        <li>2 red sockets: 25 Chromatic Orbs</li>
                        <li>3 red sockets: 120 Chromatic Orbs</li>
                        <li>(Same costs for green and blue)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming">Linking Recipes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-poe-text mb-2">Socket Links:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>6-link: 1500 Orbs of Fusing</li>
                        <li>5-link: 150 Orbs of Fusing</li>
                        <li>4-link: 30 Orbs of Fusing</li>
                      </ul>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-3">
                      <p className="text-sm text-poe-gold font-medium">
                        ⚡ Bench recipes provide guaranteed results but cost more than average RNG outcomes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-intelligence-blue/20 to-poe-blue/20 border-intelligence-blue/40">
              <CardContent className="p-6">
                <h3 className="text-xl font-gaming font-bold text-intelligence-blue mb-3">
                  When to Use the Bench vs RNG
                </h3>
                <p className="text-poe-text-dim mb-4">
                  Use our calculator to compare costs! Generally:
                </p>
                <ul className="text-poe-text-dim space-y-2">
                  <li>• <strong>Use bench for:</strong> Off-color combinations, guaranteed 6-links on valuable items</li>
                  <li>• <strong>Use RNG for:</strong> On-color combinations, when you have excess currency to gamble</li>
                  <li>• <strong>Consider risk tolerance:</strong> Bench = guaranteed cost, RNG = potential savings with risk</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Section 4: Socket Mathematics */}
          <section id="socket-mathematics" className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">The Mathematics of Sockets, Links, and Colors</h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              Understanding the probability mathematics behind socket manipulation helps you make informed crafting decisions. 
              Our calculator handles the complex formulas, but knowing the basics helps you understand the results.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-poe-dark-alt border-strength-red/30">
                <CardHeader>
                  <CardTitle className="text-strength-red font-gaming text-lg">Socket Colors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-poe-text-dim mb-3">
                    Color probability is based on weighted rolls using item attribute requirements.
                  </p>
                  <Link href="/guides/socket-coloring-mechanics" className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium">
                    Read our deep-dive on socket coloring mechanics →
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-dexterity-green/30">
                <CardHeader>
                  <CardTitle className="text-dexterity-green font-gaming text-lg">Socket Numbers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-poe-text-dim mb-3">
                    Socket count probability varies by item level, with each outcome having different weights.
                  </p>
                  <span className="text-poe-gold text-sm font-medium">
                    6 sockets: ~16.7% chance at iLvl 50+
                  </span>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-intelligence-blue/30">
                <CardHeader>
                  <CardTitle className="text-intelligence-blue font-gaming text-lg">Socket Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-poe-text-dim mb-3">
                    Link probability is very low for high-tier outcomes, making quality crucial for efficiency.
                  </p>
                  <Link href="/guides/6-linking-strategies" className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium">
                    Master 6-linking techniques →
                  </Link>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-poe-dark-alt border-poe-gold/30">
              <CardHeader>
                <CardTitle className="text-poe-gold font-gaming">Quality Bonus for Linking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-poe-text-dim mb-4">
                  Item quality provides a significant bonus to linking chances. This is why you should always 20% quality 
                  an item before attempting to link it.
                </p>
                <div className="bg-poe-dark rounded-lg p-4">
                  <h4 className="font-semibold text-poe-gold mb-2">Quality Impact:</h4>
                  <ul className="text-sm text-poe-text-dim space-y-1">
                    <li>0% quality: Base linking chance (~1/1200 for 6-link)</li>
                    <li>10% quality: ~10% better linking odds</li>
                    <li>20% quality: ~20% better linking odds</li>
                    <li>28% quality (Perfect Fossils): ~28% better linking odds</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-poe-gold/20 to-poe-orange/20 border-poe-gold/40 mb-12">
            <CardContent className="p-8 text-center">
              <Calculator className="w-12 h-12 text-poe-gold mx-auto mb-4" />
              <h3 className="text-2xl font-gaming font-bold text-poe-gold mb-4">
                Ready to Calculate Your Crafting Costs?
              </h3>
              <p className="text-poe-text-dim mb-6 max-w-2xl mx-auto">
                Now that you understand the mechanics, use our All-in-One Crafting Calculator to get precise 
                cost estimates for all your socket manipulation projects.
              </p>
              <Link 
                href="/#calculator"
                className="bg-poe-gold text-poe-dark px-8 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block"
              >
                Use the Calculator Now
              </Link>
            </CardContent>
          </Card>

          {/* External References */}
          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-poe-gold mb-6">Additional Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardContent className="p-6">
                  <h3 className="font-gaming font-semibold text-poe-gold mb-3">Official PoE Wiki</h3>
                  <p className="text-poe-text-dim mb-4 text-sm">
                    For the most up-to-date information on crafting mechanics and official formulas.
                  </p>
                  <a 
                    href="https://www.poewiki.net/wiki/Crafting" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium inline-flex items-center gap-1"
                  >
                    Visit PoE Wiki <ExternalLink className="w-3 h-3" />
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardContent className="p-6">
                  <h3 className="font-gaming font-semibold text-poe-gold mb-3">Craft of Exile</h3>
                  <p className="text-poe-text-dim mb-4 text-sm">
                    Advanced crafting simulator for complex modifier crafting scenarios.
                  </p>
                  <a 
                    href="https://www.craftofexile.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium inline-flex items-center gap-1"
                  >
                    Visit Craft of Exile <ExternalLink className="w-3 h-3" />
                  </a>
                </CardContent>
              </Card>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
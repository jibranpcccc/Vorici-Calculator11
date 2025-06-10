import { Link } from 'wouter';
import { SEOHead } from '@/components/seo/head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, TrendingUp, Target, Zap, AlertTriangle } from 'lucide-react';

export default function SixLinkingStrategies() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "PoE 6-Linking Strategies: Complete Guide to Orbs of Fusing",
    "description": "Master the art of 6-linking in Path of Exile. Learn optimal strategies, quality importance, cost calculations, and when to use the crafting bench vs RNG methods.",
    "author": {
      "@type": "Organization",
      "name": "Vorici Calculator Team"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Vorici Calculator"
    },
    "datePublished": "2024-12-15",
    "dateModified": "2024-12-15"
  };

  return (
    <div>
      <SEOHead
        title="PoE 6-Linking Strategies: Complete Guide to Orbs of Fusing (2024)"
        description="Master the art of 6-linking in Path of Exile. Learn optimal strategies, quality importance, cost calculations, and when to use the crafting bench vs RNG methods."
        keywords="poe 6 link guide, orbs of fusing strategy, 6 linking cost, quality bonus linking, vorici bench vs fusing, path of exile linking guide"
        canonicalUrl="https://vorici-calculator.com/guides/6-linking-strategies/"
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
            <li className="text-poe-text">6-Linking Strategies</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-poe-gold mb-6">
            Master the 6-Link: Complete Orbs of Fusing Guide
          </h1>
          <p className="text-xl text-poe-text-dim mb-8 max-w-4xl leading-relaxed">
            Achieving a 6-link is one of Path of Exile's most challenging and rewarding crafting goals. Learn the optimal 
            strategies, understand the mathematics, and discover when to use RNG versus guaranteed methods.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-poe-gold/30">
              <Target className="w-5 h-5 text-poe-gold" />
              <span className="text-sm font-medium">10 min read</span>
            </div>
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-poe-gold/30">
              <TrendingUp className="w-5 h-5 text-dexterity-green" />
              <span className="text-sm font-medium">Updated for 3.25</span>
            </div>
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-poe-gold/30">
              <Zap className="w-5 h-5 text-intelligence-blue" />
              <span className="text-sm font-medium">Expert Level</span>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-poe-gold/20 to-poe-orange/20 border-poe-gold/40">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Calculator className="w-8 h-8 text-poe-gold" />
                <div>
                  <h3 className="text-lg font-gaming font-bold text-poe-gold mb-2">
                    Calculate Before You Link
                  </h3>
                  <p className="text-poe-text-dim mb-4">
                    Use our calculator to compare 6-linking costs at different quality levels and decide between RNG and bench methods.
                  </p>
                  <Link 
                    href="/#calculator"
                    className="bg-poe-gold text-poe-dark px-4 py-2 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block"
                  >
                    Calculate Linking Costs
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </header>

        {/* Main Content */}
        <article className="prose prose-lg max-w-none">
          
          {/* Section 1: Understanding the Basics */}
          <section className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">
              Understanding 6-Link Mechanics
            </h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              Socket linking in Path of Exile follows strict probability rules. Understanding these mechanics is crucial 
              for making informed decisions about when to attempt linking and when to use guaranteed methods.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming">Base Linking Probabilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4">
                    These are the approximate chances for achieving different link configurations at 0% quality:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-poe-dark rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-poe-text">6-Link:</span>
                        <span className="text-poe-gold font-semibold">~1/1200 (0.083%)</span>
                      </div>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-poe-text">5-Link:</span>
                        <span className="text-dexterity-green font-semibold">~1/150 (0.67%)</span>
                      </div>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-poe-text">4-Link:</span>
                        <span className="text-intelligence-blue font-semibold">~1/30 (3.33%)</span>
                      </div>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-poe-text">3-Link:</span>
                        <span className="text-poe-orange font-semibold">~1/10 (10%)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming">Quality's Impact on Linking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4">
                    Item quality provides a significant bonus to linking success rates:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-poe-dark rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-poe-text">20% Quality:</span>
                        <span className="text-dexterity-green font-semibold">~20% better odds</span>
                      </div>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-poe-text">28% Quality (Perfect):</span>
                        <span className="text-dexterity-green font-semibold">~28% better odds</span>
                      </div>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-poe-text">6-Link at 20% Quality:</span>
                        <span className="text-poe-gold font-semibold">~1/1000 attempts</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-dexterity-green/20 rounded-lg border border-dexterity-green/30">
                    <p className="text-sm text-poe-text font-semibold">
                      Always 20% quality your item before attempting to 6-link!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-strength-red/20 to-poe-red/20 border-strength-red/40">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-strength-red mt-1" />
                  <div>
                    <h3 className="text-xl font-gaming font-bold text-strength-red mb-3">
                      Critical Warning: Links Reset on Reroll
                    </h3>
                    <p className="text-poe-text-dim">
                      Every time you use an Orb of Fusing, the item's links are completely rerolled. This means you can 
                      lose a 5-link while attempting a 6-link. Many players stop at 5-link to avoid this risk, especially 
                      on expensive items.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 2: The Three 6-Linking Strategies */}
          <section className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">
              The Three Primary 6-Linking Strategies
            </h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              There are three main approaches to achieving a 6-link, each with distinct advantages and disadvantages. 
              Your choice depends on your risk tolerance, available currency, and the item's value.
            </p>

            <div className="space-y-8 mb-12">
              {/* Strategy 1: Vorici Bench */}
              <Card className="bg-poe-dark-alt border-intelligence-blue/30">
                <CardHeader>
                  <CardTitle className="text-intelligence-blue font-gaming text-2xl">Strategy 1: The Guaranteed Approach (Vorici Bench)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-poe-gold font-semibold mb-3">How It Works:</h4>
                      <ul className="text-poe-text-dim space-y-2 mb-4">
                        <li>• Use the crafting bench recipe</li>
                        <li>• Costs exactly 1500 Orbs of Fusing</li>
                        <li>• 100% guaranteed 6-link result</li>
                        <li>• No RNG or quality requirements</li>
                      </ul>
                      
                      <h4 className="text-dexterity-green font-semibold mb-2">Best For:</h4>
                      <ul className="text-poe-text-dim text-sm space-y-1">
                        <li>• Expensive unique items</li>
                        <li>• Risk-averse players</li>
                        <li>• Items with perfect rolls</li>
                        <li>• End-of-league crafting</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-poe-gold font-semibold mb-3">Cost Analysis:</h4>
                      <div className="bg-poe-dark rounded-lg p-4 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-poe-text-dim">Fixed Cost:</span>
                          <span className="text-poe-gold font-semibold">1500 Fusings</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-poe-text-dim">Success Rate:</span>
                          <span className="text-dexterity-green font-semibold">100%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-poe-text-dim">Risk Level:</span>
                          <span className="text-intelligence-blue font-semibold">Zero</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 p-3 bg-intelligence-blue/20 rounded-lg border border-intelligence-blue/30">
                        <p className="text-sm text-poe-text font-semibold">
                          The bench method costs more than the statistical average but eliminates all risk.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Strategy 2: Quality + RNG */}
              <Card className="bg-poe-dark-alt border-dexterity-green/30">
                <CardHeader>
                  <CardTitle className="text-dexterity-green font-gaming text-2xl">Strategy 2: The Optimized RNG Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-poe-gold font-semibold mb-3">How It Works:</h4>
                      <ul className="text-poe-text-dim space-y-2 mb-4">
                        <li>• 20% quality the item first (essential)</li>
                        <li>• Use Orbs of Fusing until success</li>
                        <li>• Set a spending limit before starting</li>
                        <li>• Switch to bench if limit exceeded</li>
                      </ul>
                      
                      <h4 className="text-dexterity-green font-semibold mb-2">Best For:</h4>
                      <ul className="text-poe-text-dim text-sm space-y-1">
                        <li>• Players with good currency reserves</li>
                        <li>• Items you can afford to lose</li>
                        <li>• Early league when fusings are cheap</li>
                        <li>• Risk-tolerant players</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-poe-gold font-semibold mb-3">Cost Analysis:</h4>
                      <div className="bg-poe-dark rounded-lg p-4 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-poe-text-dim">Average Cost:</span>
                          <span className="text-poe-gold font-semibold">~1000 Fusings</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-poe-text-dim">Quality Investment:</span>
                          <span className="text-poe-orange">20 Whetstones</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-poe-text-dim">Risk Level:</span>
                          <span className="text-strength-red font-semibold">High</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 p-3 bg-dexterity-green/20 rounded-lg border border-dexterity-green/30">
                        <p className="text-sm text-poe-text font-semibold">
                          Can save 500+ fusings but might cost much more. Set strict limits!
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Strategy 3: Hybrid Approach */}
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming text-2xl">Strategy 3: The Hybrid Approach (Recommended)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-poe-gold font-semibold mb-3">How It Works:</h4>
                      <ul className="text-poe-text-dim space-y-2 mb-4">
                        <li>• 20% quality the item</li>
                        <li>• Attempt RNG up to 1200 fusings</li>
                        <li>• If unsuccessful, use bench method</li>
                        <li>• Total max cost: ~2700 fusings</li>
                      </ul>
                      
                      <h4 className="text-dexterity-green font-semibold mb-2">Best For:</h4>
                      <ul className="text-poe-text-dim text-sm space-y-1">
                        <li>• Most players and situations</li>
                        <li>• Balances cost savings with risk control</li>
                        <li>• Valuable items you want to preserve</li>
                        <li>• League start scenarios</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-poe-gold font-semibold mb-3">Expected Outcomes:</h4>
                      <div className="bg-poe-dark rounded-lg p-4 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-poe-text-dim">Success in 1200:</span>
                          <span className="text-dexterity-green font-semibold">~70% chance</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-poe-text-dim">Average Total Cost:</span>
                          <span className="text-poe-gold font-semibold">~1350 Fusings</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-poe-text-dim">Maximum Cost:</span>
                          <span className="text-poe-orange">2720 Fusings</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 p-3 bg-poe-gold/20 rounded-lg border border-poe-gold/30">
                        <p className="text-sm text-poe-text font-semibold">
                          Best balance of cost savings and risk management for most players.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 3: Quality Preparation Guide */}
          <section className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">
              Quality Preparation: The Foundation of Success
            </h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              Proper quality preparation is the most important factor in successful 6-linking. The difference between 
              0% and 20% quality can save you hundreds of Orbs of Fusing.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming">Standard Quality Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-poe-text font-semibold mb-2">Blacksmith's Whetstones (Weapons):</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>• 20 Whetstones for 20% quality</li>
                        <li>• Most common and accessible method</li>
                        <li>• Works on all weapon types</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-poe-text font-semibold mb-2">Armourer's Scraps (Armor):</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>• 20 Scraps for 20% quality</li>
                        <li>• Standard method for all armor</li>
                        <li>• Always available from vendors</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-poe-text font-semibold mb-2">Crafting Bench:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>• Alternative to currency method</li>
                        <li>• Requires specific recipes unlocked</li>
                        <li>• Same final result</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming">Advanced Quality Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-poe-text font-semibold mb-2">Perfect Fossils:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>• Can achieve 28-30% quality</li>
                        <li>• Significant cost but maximum benefit</li>
                        <li>• Best for expensive items</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-poe-text font-semibold mb-2">Hillock in Transportation:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>• 28% quality for weapons</li>
                        <li>• Requires specific Betrayal setup</li>
                        <li>• Free but time-consuming</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-poe-text font-semibold mb-2">Beast Crafting:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>• 30% quality corruption</li>
                        <li>• Cannot be modified after</li>
                        <li>• High risk, high reward</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-poe-orange/20 to-poe-gold/20 border-poe-orange/40">
              <CardContent className="p-6">
                <h3 className="text-xl font-gaming font-bold text-poe-orange mb-3">
                  Quality Cost-Benefit Analysis
                </h3>
                <p className="text-poe-text-dim mb-4">
                  The cost of achieving 20% quality is minimal compared to the linking cost savings:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-poe-text font-semibold mb-2">Quality Investment:</h4>
                    <ul className="text-poe-text-dim text-sm space-y-1">
                      <li>• 20 Whetstones/Scraps: ~1-2 Chaos</li>
                      <li>• Perfect Fossil: ~15-30 Chaos</li>
                      <li>• Hillock service: Time investment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-poe-text font-semibold mb-2">Fusing Savings:</h4>
                    <ul className="text-poe-text-dim text-sm space-y-1">
                      <li>• 20% quality: ~200 fusings saved</li>
                      <li>• 28% quality: ~280 fusings saved</li>
                      <li>• ROI: 10,000%+ return on investment</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 4: Decision Matrix */}
          <section className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">
              6-Linking Decision Matrix
            </h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              Choose your strategy based on your situation, risk tolerance, and the item's value. This matrix helps 
              you make optimal decisions for different scenarios.
            </p>

            <Card className="bg-poe-dark-alt border-poe-gold/30 mb-8">
              <CardHeader>
                <CardTitle className="text-poe-gold font-gaming">When to Use Each Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-poe-gold/30">
                        <th className="text-left py-3 text-poe-gold">Scenario</th>
                        <th className="text-left py-3 text-poe-gold">Item Value</th>
                        <th className="text-left py-3 text-poe-gold">Currency Available</th>
                        <th className="text-left py-3 text-poe-gold">Recommended Strategy</th>
                        <th className="text-left py-3 text-poe-gold">Reasoning</th>
                      </tr>
                    </thead>
                    <tbody className="text-poe-text-dim">
                      <tr className="border-b border-poe-gold/10">
                        <td className="py-3">Perfect unique item</td>
                        <td className="py-3 text-strength-red">Very High</td>
                        <td className="py-3">High</td>
                        <td className="py-3 text-intelligence-blue font-semibold">Vorici Bench</td>
                        <td className="py-3">Zero risk on irreplaceable item</td>
                      </tr>
                      <tr className="border-b border-poe-gold/10">
                        <td className="py-3">League starter item</td>
                        <td className="py-3 text-dexterity-green">Medium</td>
                        <td className="py-3">Low</td>
                        <td className="py-3 text-poe-gold font-semibold">Hybrid (500 limit)</td>
                        <td className="py-3">Balanced risk, limited currency</td>
                      </tr>
                      <tr className="border-b border-poe-gold/10">
                        <td className="py-3">Common unique</td>
                        <td className="py-3 text-dexterity-green">Low</td>
                        <td className="py-3">High</td>
                        <td className="py-3 text-dexterity-green font-semibold">RNG Method</td>
                        <td className="py-3">Replaceable item, high upside</td>
                      </tr>
                      <tr className="border-b border-poe-gold/10">
                        <td className="py-3">Crafted rare</td>
                        <td className="py-3 text-poe-orange">High</td>
                        <td className="py-3">Medium</td>
                        <td className="py-3 text-poe-gold font-semibold">Hybrid (1000 limit)</td>
                        <td className="py-3">Good rolls worth protecting</td>
                      </tr>
                      <tr className="border-b border-poe-gold/10">
                        <td className="py-3">End of league</td>
                        <td className="py-3">Any</td>
                        <td className="py-3">High</td>
                        <td className="py-3 text-dexterity-green font-semibold">RNG Method</td>
                        <td className="py-3">No future value, maximize fun</td>
                      </tr>
                      <tr className="border-b border-poe-gold/10">
                        <td className="py-3">Budget build</td>
                        <td className="py-3 text-dexterity-green">Low</td>
                        <td className="py-3">Low</td>
                        <td className="py-3 text-intelligence-blue font-semibold">Buy 6-linked</td>
                        <td className="py-3">Often cheaper than self-linking</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-intelligence-blue/20 to-poe-blue/20 border-intelligence-blue/40">
              <CardContent className="p-6">
                <h3 className="text-xl font-gaming font-bold text-intelligence-blue mb-3">
                  Alternative: Buying Pre-linked Items
                </h3>
                <p className="text-poe-text-dim mb-4">
                  Sometimes the most cost-effective approach is to buy an already 6-linked item:
                </p>
                <ul className="text-poe-text-dim space-y-2">
                  <li>• <strong>Common uniques:</strong> Often cheaper than self-linking</li>
                  <li>• <strong>White 6-links:</strong> Good base for crafting projects</li>
                  <li>• <strong>Corrupted 6-links:</strong> Significantly cheaper but cannot be modified</li>
                  <li>• <strong>Prophecy chains:</strong> Can provide guaranteed 6-links for specific items</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Calculator CTA */}
          <Card className="bg-gradient-to-r from-poe-gold/20 to-poe-orange/20 border-poe-gold/40 mb-12">
            <CardContent className="p-8 text-center">
              <Calculator className="w-12 h-12 text-poe-gold mx-auto mb-4" />
              <h3 className="text-2xl font-gaming font-bold text-poe-gold mb-4">
                Calculate Your 6-Linking Strategy
              </h3>
              <p className="text-poe-text-dim mb-6 max-w-2xl mx-auto">
                Use our calculator to compare costs at different quality levels and determine the optimal 
                approach for your specific situation and risk tolerance.
              </p>
              <Link 
                href="/#calculator"
                className="bg-poe-gold text-poe-dark px-8 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block"
              >
                Calculate Linking Costs Now
              </Link>
            </CardContent>
          </Card>

          {/* Back to main guide */}
          <Card className="bg-poe-dark-alt border-poe-gold/30">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-3">
                Continue Your Crafting Journey
              </h3>
              <p className="text-poe-text-dim mb-4">
                6-linking is just one aspect of Path of Exile crafting mastery. Explore our complete guide 
                for comprehensive crafting knowledge.
              </p>
              <Link 
                href="/guides/path-of-exile-crafting-guide"
                className="text-poe-gold hover:text-poe-orange transition-colors font-medium"
              >
                Return to the Complete Path of Exile Crafting Guide →
              </Link>
            </CardContent>
          </Card>
        </article>
      </main>
    </div>
  );
}
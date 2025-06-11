import { Link } from 'wouter';
import { SEOHead } from '@/components/seo/head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Calculator, ExternalLink, Zap, TrendingUp, AlertCircle, DollarSign, Target } from 'lucide-react';

export default function SixLinkingStrategies() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "PoE 6-Link Strategies & Calculator Guide (2025)",
    "description": "Learn how to 6-link items efficiently in Path of Exile. This guide covers Fusing Orb odds, the impact of item quality, and when to use the crafting bench.",
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
    "wordCount": 1650,
    "datePublished": "2024-12-15",
    "dateModified": "2024-12-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://vorici-calculator.com/guides/6-linking-strategies/"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vorici-calculator.com/" },
        { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://vorici-calculator.com/guides/" },
        { "@type": "ListItem", "position": 3, "name": "6-Linking Strategies", "item": "https://vorici-calculator.com/guides/6-linking-strategies/" }
      ]
    }
  };

  return (
    <div>
      <SEOHead
        title="PoE 6-Link Strategies & Calculator Guide (2025)"
        description="Learn how to 6-link items efficiently in Path of Exile. This guide covers Fusing Orb odds, the impact of item quality, and when to use the crafting bench."
        keywords="6-link strategies, orb of fusing, path of exile linking, poe 6-link guide, fusing calculator, crafting bench, item quality"
        canonicalUrl="https://vorici-calculator.com/guides/6-linking-strategies/"
        structuredData={structuredData}
      />
      
      <main className="container mx-auto px-4 py-8 blog-content guide-content">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-readable-muted">
            <li><Link href="/" className="hover:text-poe-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/guides" className="hover:text-poe-gold transition-colors">Guides</Link></li>
            <li>/</li>
            <li className="text-readable">6-Linking Strategies</li>
          </ol>
        </nav>

        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/guides" 
            className="inline-flex items-center text-poe-gold hover:text-poe-orange transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Guides
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-poe-gold mb-6">
              The Ultimate Guide to 6-Linking in Path of Exile
            </h1>
            <p className="text-xl text-readable-muted leading-relaxed mb-6">
              Achieving a 6-link is one of the most expensive and frustrating endeavors in Path of Exile. This comprehensive guide addresses the pain point of spending thousands of fusings and provides data-driven strategies to minimize your costs while maximizing your chances of success.
            </p>
            <div className="flex items-center gap-4 text-sm text-readable-muted">
              <span>Updated for 2025</span>
              <span>•</span>
              <span>10 minute read</span>
              <span>•</span>
              <span>Intermediate Level</span>
            </div>
          </header>

          {/* Quick Calculator Link */}
          <Card className="bg-poe-gold/10 border-poe-gold/30 mb-12">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-2">
                    Calculate your 6-link odds with the Vorici Calculator
                  </h3>
                  <p className="text-readable-muted">
                    Use our Orbs of Fusing calculator to determine the most cost-effective approach for your specific item
                  </p>
                </div>
                <Link 
                  href="/"
                  className="bg-poe-gold text-poe-dark px-4 py-2 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors flex items-center"
                  onClick={() => {
                    setTimeout(() => {
                      document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Try Calculator
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            {/* Introduction Section */}
            <section className="mb-12">
              <p className="text-readable mb-6 text-lg leading-relaxed">
                Every Path of Exile player has experienced the heartbreak: hundreds or even thousands of Orbs of Fusing spent, 
                only to watch their item cycle through every possible link combination except the coveted 6-link. Understanding 
                the mathematics and available strategies can save you significant currency and emotional distress.
              </p>

              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-2">The Harsh Reality</h3>
                    <p className="text-readable">
                      The average player will spend 1,200-1,500 Orbs of Fusing to achieve a 6-link on a 20% quality item. 
                      Without proper strategy, costs can easily exceed 3,000 fusings due to variance and poor decision-making.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-poe-gold mb-6">
                The Orb of Fusing: How It Really Works
              </h2>
              
              <p className="text-readable mb-6">
                Understanding the base probability mechanics is crucial for making informed decisions about your linking strategy. 
                The <Link href="/" className="text-poe-gold hover:text-poe-orange transition-colors">Vorici Calculator</Link> uses these exact probabilities to provide real-time cost analysis for any item configuration.
              </p>

              <div className="content-section rounded-lg p-6 border border-poe-gold/20 mb-8">
                <h3 className="text-xl font-gaming font-semibold text-poe-gold mb-4">Base 6-Link Probability Table</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-poe-gold/30">
                        <th className="text-left py-3 text-poe-gold">Item Quality</th>
                        <th className="text-center py-3 text-poe-gold">6-Link Chance</th>
                        <th className="text-center py-3 text-poe-gold">Expected Attempts</th>
                        <th className="text-center py-3 text-poe-gold">Average Cost</th>
                      </tr>
                    </thead>
                    <tbody className="text-readable">
                      <tr className="border-b border-poe-gold/10">
                        <td className="py-3">0% Quality</td>
                        <td className="text-center">~0.10%</td>
                        <td className="text-center">~1,000</td>
                        <td className="text-center text-red-400">Very High</td>
                      </tr>
                      <tr className="border-b border-poe-gold/10">
                        <td className="py-3">10% Quality</td>
                        <td className="text-center">~0.15%</td>
                        <td className="text-center">~667</td>
                        <td className="text-center text-yellow-400">High</td>
                      </tr>
                      <tr className="border-b border-poe-gold/10">
                        <td className="py-3 font-semibold">20% Quality</td>
                        <td className="text-center font-semibold">~0.20%</td>
                        <td className="text-center font-semibold">~500</td>
                        <td className="text-center text-green-400 font-semibold">Optimal</td>
                      </tr>
                      <tr className="border-b border-poe-gold/10">
                        <td className="py-3">28% Quality (Hillock)</td>
                        <td className="text-center">~0.28%</td>
                        <td className="text-center">~357</td>
                        <td className="text-center text-green-400">Best</td>
                      </tr>
                      <tr className="border-b border-poe-gold/10">
                        <td className="py-3">30% Quality (Perfect Fossil)</td>
                        <td className="text-center">~0.30%</td>
                        <td className="text-center">~333</td>
                        <td className="text-center text-green-400">Premium</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="content-section rounded-lg p-6 border border-poe-gold/20 mb-8">
                <h3 className="text-xl font-gaming font-semibold text-poe-gold mb-4">Mathematical Foundation</h3>
                <p className="text-readable mb-4">
                  The exact formula for 6-link probability includes quality as a multiplier:
                </p>
                <div className="font-mono text-poe-gold bg-poe-dark p-4 rounded border mb-4">
                  6-Link_Chance = Base_Rate × (1 + Quality/100)<br/>
                  Expected_Attempts = 1 / 6-Link_Chance<br/>
                  <br/>
                  Where Base_Rate ≈ 0.10% for 6-socket items
                </div>
                <p className="text-readable-muted text-sm">
                  Note: These calculations are based on community research and extensive data collection. 
                  Grinding Gear Games has never officially revealed the exact probabilities.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-poe-gold mb-6">
                The Quality Advantage: Does It Matter?
              </h2>
              
              <p className="text-readable mb-6">
                Item quality has a significant impact on linking success rates. The data consistently shows that investing 
                in quality before attempting to 6-link is almost always cost-effective, even when factoring in the currency 
                spent on quality improvement.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="content-section border-poe-gold/20">
                  <CardHeader>
                    <CardTitle className="text-poe-gold flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Cost-Benefit Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-green-900/20 border border-green-500/30 p-4 rounded">
                        <strong className="text-green-400">20% Quality Investment:</strong>
                        <div className="text-sm mt-2 space-y-1">
                          <div>• Cost: ~20 Armourer's Scraps + 4 Whetstones</div>
                          <div>• Savings: ~500 fewer Orbs of Fusing needed</div>
                          <div>• ROI: Approximately 2,500% return on investment</div>
                        </div>
                      </div>
                      <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded">
                        <strong className="text-blue-400">28% Quality (Hillock):</strong>
                        <div className="text-sm mt-2 space-y-1">
                          <div>• Additional savings: ~143 Orbs of Fusing</div>
                          <div>• Setup cost: Syndicate farming time</div>
                          <div>• Best for: High-value items worth 10+ Divine Orbs</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="content-section border-poe-gold/20">
                  <CardHeader>
                    <CardTitle className="text-poe-gold flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      Quality Breakpoints
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="border-b border-poe-gold/20 pb-2">
                        <strong className="text-poe-gold">0-19% Quality:</strong>
                        <p className="text-sm text-readable">Significantly worse odds. Always quality to 20% minimum.</p>
                      </div>
                      <div className="border-b border-poe-gold/20 pb-2">
                        <strong className="text-poe-gold">20% Quality:</strong>
                        <p className="text-sm text-readable">Standard benchmark. Cost-effective for most items.</p>
                      </div>
                      <div className="border-b border-poe-gold/20 pb-2">
                        <strong className="text-poe-gold">21-27% Quality:</strong>
                        <p className="text-sm text-readable">Marginal improvements. Usually not worth the investment.</p>
                      </div>
                      <div>
                        <strong className="text-poe-gold">28%+ Quality:</strong>
                        <p className="text-sm text-readable">Significant improvement. Worth it for expensive items.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-semibold text-yellow-400 mb-3">Quality vs. Cost Data Table</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-yellow-500/30">
                        <th className="text-left py-2 text-yellow-400">Quality Level</th>
                        <th className="text-center py-2 text-yellow-400">Setup Cost</th>
                        <th className="text-center py-2 text-yellow-400">Expected Fusings</th>
                        <th className="text-center py-2 text-yellow-400">Total Cost</th>
                        <th className="text-center py-2 text-yellow-400">Efficiency</th>
                      </tr>
                    </thead>
                    <tbody className="text-readable">
                      <tr className="border-b border-yellow-500/10">
                        <td className="py-2">0% Quality</td>
                        <td className="text-center">0</td>
                        <td className="text-center">1,000</td>
                        <td className="text-center text-red-400">1,000 Fusings</td>
                        <td className="text-center text-red-400">Poor</td>
                      </tr>
                      <tr className="border-b border-yellow-500/10">
                        <td className="py-2">20% Quality</td>
                        <td className="text-center">~25 Currency</td>
                        <td className="text-center">500</td>
                        <td className="text-center text-green-400">525 Total</td>
                        <td className="text-center text-green-400">Excellent</td>
                      </tr>
                      <tr className="border-b border-yellow-500/10">
                        <td className="py-2">28% Quality</td>
                        <td className="text-center">Time Investment</td>
                        <td className="text-center">357</td>
                        <td className="text-center text-green-400">357+ Time</td>
                        <td className="text-center text-green-400">Best</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-poe-gold mb-6">
                Fusing Spam vs. The Crafting Bench
              </h2>
              
              <p className="text-readable mb-6">
                The eternal question: should you risk the variance of Orb of Fusing spam, or pay the guaranteed 1,500 
                Orbs of Fusing at the crafting bench? The answer depends on your risk tolerance, currency reserves, 
                and the specific value of your item.
              </p>

              <div className="space-y-8">
                <Card className="content-section border-poe-gold/20">
                  <CardHeader>
                    <CardTitle className="text-poe-gold flex items-center">
                      <Zap className="w-5 h-5 mr-2" />
                      Orb of Fusing Spam Strategy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-poe-gold mb-3">Advantages:</h4>
                        <ul className="text-readable space-y-1 text-sm">
                          <li>• Average cost (~500 fusings) is significantly lower than bench</li>
                          <li>• Potential for early success (some players get lucky in &lt;100 attempts)</li>
                          <li>• Maintains flexibility to stop and sell partially linked item</li>
                          <li>• No reputation requirements or quest completion needed</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-poe-gold mb-3">Disadvantages:</h4>
                        <ul className="text-readable space-y-1 text-sm">
                          <li>• High variance (10% chance of needing 1,500+ fusings)</li>
                          <li>• Psychological stress and frustration</li>
                          <li>• Risk of destroying existing 5-links</li>
                          <li>• No guarantee of success within budget</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="content-section border-poe-gold/20">
                  <CardHeader>
                    <CardTitle className="text-poe-gold flex items-center">
                      <DollarSign className="w-5 h-5 mr-2" />
                      Crafting Bench Strategy (1,500 Fusings)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-poe-gold mb-3">Advantages:</h4>
                        <ul className="text-readable space-y-1 text-sm">
                          <li>• Guaranteed result with known cost</li>
                          <li>• No variance or gambling involved</li>
                          <li>• Allows precise budget planning</li>
                          <li>• Preserves existing socket links during process</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-poe-gold mb-3">Disadvantages:</h4>
                        <ul className="text-readable space-y-1 text-sm">
                          <li>• 200% higher cost than statistical average</li>
                          <li>• Requires level 7 Vorici master (legacy) or unveiling</li>
                          <li>• No possibility of early success/savings</li>
                          <li>• Removes the excitement factor entirely</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="content-section rounded-lg p-6 border border-poe-gold/20 mt-8">
                <h3 className="text-xl font-gaming font-semibold text-poe-gold mb-4">Decision Framework</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-900/20 border border-green-500/30 p-4 rounded">
                    <strong className="text-green-400">Use Fusing Spam When:</strong>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• Item value &lt; 5 Divine Orbs</li>
                      <li>• You can afford to lose 2x average cost</li>
                      <li>• You enjoy the gambling aspect</li>
                      <li>• Currency is not immediately needed</li>
                    </ul>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded">
                    <strong className="text-blue-400">Use Crafting Bench When:</strong>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• Item value &gt; 10 Divine Orbs</li>
                      <li>• You need guaranteed timeline</li>
                      <li>• Risk tolerance is low</li>
                      <li>• League ending soon</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-900/20 border border-yellow-500/30 p-4 rounded">
                    <strong className="text-yellow-400">Hybrid Approach:</strong>
                    <ul className="text-sm mt-2 space-y-1">
                      <li>• Try fusing spam up to 800 attempts</li>
                      <li>• Switch to bench if unlucky</li>
                      <li>• Limits maximum loss while allowing upside</li>
                      <li>• Popular among experienced players</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-poe-gold mb-6">
                Tainted Fusings: The High-Risk, High-Reward Option
              </h2>
              
              <p className="text-readable mb-6">
                Tainted Orbs of Fusing, introduced in league mechanics, offer an alternative approach to 6-linking. 
                These specialized currency items work only on corrupted items and provide different probability distributions.
              </p>

              <div className="content-section rounded-lg p-6 border border-poe-gold/20 mb-8">
                <h3 className="text-xl font-gaming font-semibold text-poe-gold mb-4">Tainted Fusing Mechanics</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-poe-gold mb-2">How They Work:</h4>
                    <ul className="text-readable space-y-1 text-sm">
                      <li>• Only usable on corrupted items</li>
                      <li>• Higher 6-link probability than regular fusings</li>
                      <li>• Can add or remove socket links randomly</li>
                      <li>• May reduce existing links (risk factor)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-poe-gold mb-2">Best Use Cases:</h4>
                    <ul className="text-readable space-y-1 text-sm">
                      <li>• Items corrupted for other benefits (implicits)</li>
                      <li>• When regular fusings are not applicable</li>
                      <li>• High-end items where cost efficiency matters less</li>
                      <li>• Late-league scenarios with abundant currency</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-red-400 mb-2">Important Considerations</h4>
                    <ul className="text-readable space-y-1">
                      <li>• Tainted Fusings can reduce your existing link count</li>
                      <li>• They're typically more expensive per attempt than regular fusings</li>
                      <li>• Only available during specific league mechanics or through trade</li>
                      <li>• Risk/reward calculation differs significantly from standard linking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Practical Tips Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-poe-gold mb-6">
                Practical 6-Linking Tips & Best Practices
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="content-section border-poe-gold/20">
                  <CardHeader>
                    <CardTitle className="text-poe-gold">Preparation Checklist</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-readable space-y-2 text-sm">
                      <li>✓ Quality item to 20% minimum (28% if possible)</li>
                      <li>✓ Ensure item has 6 sockets before linking attempts</li>
                      <li>✓ Set a budget limit and stick to it</li>
                      <li>✓ Have backup currency or alternative plans</li>
                      <li>✓ Consider the item's total value vs. linking cost</li>
                      <li>✓ Check if pre-linked alternatives exist on trade</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="content-section border-poe-gold/20">
                  <CardHeader>
                    <CardTitle className="text-poe-gold">Common Mistakes to Avoid</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-readable space-y-2 text-sm">
                      <li>✗ Attempting to link 0% quality items</li>
                      <li>✗ Continuing far beyond average cost without stopping</li>
                      <li>✗ Ignoring the trade market for pre-linked options</li>
                      <li>✗ Not considering item value vs. linking cost</li>
                      <li>✗ Emotional decision-making after bad variance</li>
                      <li>✗ Attempting to link low-value items when buying is cheaper</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>
          </article>

          {/* Navigation Links */}
          <div className="grid md:grid-cols-2 gap-6 mt-12 pt-8 border-t border-poe-gold/20">
            <Link 
              href="/"
              className="bg-poe-gold/10 border border-poe-gold/30 rounded-lg p-6 hover:bg-poe-gold/20 transition-colors group"
              onClick={() => {
                setTimeout(() => {
                  document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-2 group-hover:text-poe-orange transition-colors">
                    Use the Vorici Calculator for 6-Link Planning
                  </h3>
                  <p className="text-readable-muted text-sm">
                    Calculate exact fusing odds and plan your linking strategy
                  </p>
                </div>
                <Calculator className="w-6 h-6 text-poe-gold group-hover:text-poe-orange transition-colors" />
              </div>
            </Link>

            <Link 
              href="/guides/path-of-exile-crafting-guide"
              className="content-section border border-poe-gold/20 rounded-lg p-6 hover:border-poe-gold/40 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-2 group-hover:text-poe-orange transition-colors">
                    Part of our complete crafting guide
                  </h3>
                  <p className="text-readable-muted text-sm">
                    Continue learning about Path of Exile crafting
                  </p>
                </div>
                <ExternalLink className="w-6 h-6 text-poe-gold group-hover:text-poe-orange transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
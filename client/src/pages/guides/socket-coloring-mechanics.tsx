import { Link } from 'wouter';
import { SEOHead } from '@/components/seo/head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Calculator, ExternalLink, Target, TrendingUp, Zap, AlertTriangle } from 'lucide-react';

export default function SocketColoringMechanics() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "PoE Socket Coloring Mechanics: A Deep Dive",
    "description": "Learn the exact math behind Chromatic Orbs and socket coloring in Path of Exile. Understand how item attributes affect red, blue, and green socket chances.",
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
    "wordCount": 1850,
    "datePublished": "2024-12-15",
    "dateModified": "2024-12-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://vorici-calculator.com/guides/socket-coloring-mechanics/"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vorici-calculator.com/" },
        { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://vorici-calculator.com/guides/" },
        { "@type": "ListItem", "position": 3, "name": "Socket Coloring Mechanics", "item": "https://vorici-calculator.com/guides/socket-coloring-mechanics/" }
      ]
    }
  };

  return (
    <div>
      <SEOHead
        title="PoE Socket Coloring Mechanics: A Deep Dive (2025)"
        description="Learn the exact math behind Chromatic Orbs and socket coloring in Path of Exile. Understand how item attributes affect red, blue, and green socket chances."
        keywords="socket coloring mechanics, chromatic orb, path of exile sockets, poe socket colors, off-coloring, attribute requirements, vorici calculator"
        canonicalUrl="https://vorici-calculator.com/guides/socket-coloring-mechanics/"
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
            <li className="text-poe-text">Socket Coloring Mechanics</li>
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
              A Deep Dive into Socket Coloring Mechanics
            </h1>
            <p className="text-xl text-readable-dim leading-relaxed mb-6">
              Understanding socket coloring mechanics is essential for any serious Path of Exile player. This comprehensive guide explains the exact formulas, probability calculations, and advanced strategies that determine how Chromatic Orbs interact with your items to produce the socket colors you need.
            </p>
            <div className="flex items-center gap-4 text-sm text-poe-text-dim">
              <span>Updated for 2025</span>
              <span>•</span>
              <span>8 minute read</span>
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
                    Calculate your exact costs with our All-in-One Crafting Calculator
                  </h3>
                  <p className="text-poe-text-dim">
                    Put this knowledge into practice with real-time calculations and see the math in action
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
          <article className="prose prose-lg max-w-none content-bg rounded-lg p-8">
            {/* Introduction Section */}
            <section className="mb-12">
              <p className="text-readable mb-6 text-lg leading-relaxed">
                Path of Exile's socket coloring system is governed by precise mathematical formulas that the <Link href="/" className="text-poe-gold hover:text-poe-orange transition-colors">Vorici Calculator</Link> uses to provide accurate cost estimates. 
                By the end of this guide, you'll understand exactly why getting 6 blue sockets on a Strength-based chest piece 
                costs thousands of Chromatic Orbs, while achieving the same result on an Intelligence item requires just a few attempts.
              </p>

              <div className="bg-poe-dark-alt rounded-lg p-6 border border-poe-gold/20 mb-8">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-poe-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-2">Key Takeaway</h3>
                    <p className="text-readable">
                      Socket colors are weighted based on item attribute requirements. High Strength requirements heavily favor red sockets, 
                      Dexterity favors green, and Intelligence favors blue. Understanding this weighting is crucial for cost-effective crafting.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-poe-gold mb-6">
                How Item Attributes Determine Socket Color Weighting
              </h2>
              
              <p className="text-readable mb-6">
                The foundation of socket coloring mechanics lies in attribute requirements. Every item in Path of Exile has specific 
                Strength, Dexterity, and Intelligence requirements that directly influence socket color probability. Items with higher 
                attribute requirements in one stat will heavily favor the corresponding socket color.
              </p>

              <div className="bg-poe-dark-alt rounded-lg p-6 border border-poe-gold/20 mb-8">
                <h3 className="text-xl font-gaming font-semibold text-poe-gold mb-4">Complete Socket Color Weighting Table</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-poe-gold/30">
                        <th className="text-left py-3 text-poe-gold">Item Attribute Profile</th>
                        <th className="text-center py-3 text-red-400">Red Weight</th>
                        <th className="text-center py-3 text-green-400">Green Weight</th>
                        <th className="text-center py-3 text-blue-400">Blue Weight</th>
                        <th className="text-center py-3 text-gray-300">White Weight</th>
                      </tr>
                    </thead>
                    <tbody className="text-poe-text">
                      <tr className="border-b border-poe-gold/10">
                        <td className="py-3">Pure Strength (159+ STR, &lt;60 DEX/INT)</td>
                        <td className="text-center text-red-400 font-bold">200</td>
                        <td className="text-center">20</td>
                        <td className="text-center">20</td>
                        <td className="text-center">20</td>
                      </tr>
                      <tr className="border-b border-poe-gold/10">
                        <td className="py-3">Pure Dexterity (159+ DEX, &lt;60 STR/INT)</td>
                        <td className="text-center">20</td>
                        <td className="text-center text-green-400 font-bold">200</td>
                        <td className="text-center">20</td>
                        <td className="text-center">20</td>
                      </tr>
                      <tr className="border-b border-poe-gold/10">
                        <td className="py-3">Pure Intelligence (159+ INT, &lt;60 STR/DEX)</td>
                        <td className="text-center">20</td>
                        <td className="text-center">20</td>
                        <td className="text-center text-blue-400 font-bold">200</td>
                        <td className="text-center">20</td>
                      </tr>
                      <tr className="border-b border-poe-gold/10">
                        <td className="py-3">Str/Dex Hybrid (105+ STR, 105+ DEX)</td>
                        <td className="text-center text-red-400 font-semibold">120</td>
                        <td className="text-center text-green-400 font-semibold">120</td>
                        <td className="text-center">20</td>
                        <td className="text-center">20</td>
                      </tr>
                      <tr className="border-b border-poe-gold/10">
                        <td className="py-3">Str/Int Hybrid (105+ STR, 105+ INT)</td>
                        <td className="text-center text-red-400 font-semibold">120</td>
                        <td className="text-center">20</td>
                        <td className="text-center text-blue-400 font-semibold">120</td>
                        <td className="text-center">20</td>
                      </tr>
                      <tr className="border-b border-poe-gold/10">
                        <td className="py-3">Dex/Int Hybrid (105+ DEX, 105+ INT)</td>
                        <td className="text-center">20</td>
                        <td className="text-center text-green-400 font-semibold">120</td>
                        <td className="text-center text-blue-400 font-semibold">120</td>
                        <td className="text-center">20</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-400 mb-2">Important Note on White Sockets</h4>
                    <p className="text-poe-text">
                      White sockets can only appear on corrupted items or through specific crafting methods like Vaal Orbs or certain league mechanics. 
                      The white socket weighting shown above applies only when white sockets are possible on the item.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-poe-gold mb-6">
                The Chromatic Orb Formula Explained
              </h2>
              
              <p className="text-poe-text mb-6">
                The probability calculation for socket colors follows a weighted random distribution. Each socket is rolled independently, 
                and the probability of getting a specific color depends on the total weight of all possible outcomes.
              </p>

              <div className="bg-poe-dark-alt rounded-lg p-6 border border-poe-gold/20 mb-8">
                <h3 className="text-xl font-gaming font-semibold text-poe-gold mb-4">Core Probability Formula</h3>
                <div className="font-mono text-poe-gold bg-poe-dark p-4 rounded border mb-4">
                  P(specific_color) = Weight(color) / Total_Weight<br/>
                  <br/>
                  Where:<br/>
                  Total_Weight = Red_Weight + Green_Weight + Blue_Weight + White_Weight
                </div>
                <p className="text-poe-text-dim text-sm">
                  For multiple sockets, multiply individual probabilities: P(combination) = P(socket1) × P(socket2) × ... × P(socketN)
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-poe-dark-alt border-poe-gold/20">
                  <CardHeader>
                    <CardTitle className="text-poe-gold">Example: Pure Strength Helmet (4 sockets)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm">
                        <strong className="text-poe-gold">Total Weight:</strong> 200 + 20 + 20 + 20 = 260
                      </div>
                      <ul className="text-poe-text space-y-1 text-sm">
                        <li>• Red socket: 200/260 = 76.9%</li>
                        <li>• Green socket: 20/260 = 7.7%</li>
                        <li>• Blue socket: 20/260 = 7.7%</li>
                        <li>• White socket: 20/260 = 7.7%</li>
                      </ul>
                      <div className="pt-2 border-t border-poe-gold/20">
                        <strong className="text-red-400">4 Red sockets:</strong> (0.769)⁴ = 34.9%
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-poe-dark-alt border-poe-gold/20">
                  <CardHeader>
                    <CardTitle className="text-poe-gold">Example: Pure Intelligence Chest (6 sockets)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm">
                        <strong className="text-poe-gold">Total Weight:</strong> 20 + 20 + 200 + 20 = 260
                      </div>
                      <ul className="text-poe-text space-y-1 text-sm">
                        <li>• Red socket: 20/260 = 7.7%</li>
                        <li>• Green socket: 20/260 = 7.7%</li>
                        <li>• Blue socket: 200/260 = 76.9%</li>
                        <li>• White socket: 20/260 = 7.7%</li>
                      </ul>
                      <div className="pt-2 border-t border-poe-gold/20">
                        <strong className="text-blue-400">6 Blue sockets:</strong> (0.769)⁶ = 20.8%
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-poe-dark-alt rounded-lg p-6 border border-poe-gold/20 mb-8">
                <h3 className="text-xl font-gaming font-semibold text-poe-gold mb-4">Expected Cost Calculation</h3>
                <p className="text-poe-text mb-4">
                  To find the average number of Chromatic Orbs needed, use the inverse of the probability:
                </p>
                <div className="font-mono text-poe-gold bg-poe-dark p-4 rounded border">
                  Expected_Attempts = 1 / P(desired_outcome)<br/>
                  Average_Cost = Expected_Attempts × Chromatic_Orb_Price
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-poe-gold mb-6">
                Off-Coloring: Strategies & Costs
              </h2>
              
              <p className="text-poe-text mb-6">
                "Off-coloring" refers to achieving socket colors that oppose the item's natural attribute bias. This is one of the most 
                currency-intensive activities in Path of Exile, but certain strategies can significantly reduce costs.
              </p>

              <div className="space-y-8">
                <Card className="bg-poe-dark-alt border-poe-gold/20">
                  <CardHeader>
                    <CardTitle className="text-poe-gold flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      Strategy 1: Direct Chromatic Spam
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-poe-text mb-4">
                      The straightforward approach: repeatedly use Chromatic Orbs until you achieve the desired socket combination. 
                      This method is most effective for items requiring 1-2 off-color sockets.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-green-900/20 border border-green-500/30 p-4 rounded">
                        <strong className="text-green-400">Best for:</strong>
                        <ul className="text-poe-text mt-2 space-y-1 text-sm">
                          <li>• 1-2 off-color sockets needed</li>
                          <li>• Lower socket count items (2-4 sockets)</li>
                          <li>• Probability above 1% (under 100 attempts average)</li>
                        </ul>
                      </div>
                      <div className="bg-red-900/20 border border-red-500/30 p-4 rounded">
                        <strong className="text-red-400">Avoid when:</strong>
                        <ul className="text-poe-text mt-2 space-y-1 text-sm">
                          <li>• Probability below 0.1% (1000+ attempts)</li>
                          <li>• Need 4+ off-color sockets</li>
                          <li>• Working with 6-socket items</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-poe-dark-alt border-poe-gold/20">
                  <CardHeader>
                    <CardTitle className="text-poe-gold flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Strategy 2: The Jeweller's Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-poe-text mb-4">
                      For extreme off-coloring scenarios, this method dramatically reduces costs by working with fewer sockets at a time:
                    </p>
                    <ol className="text-poe-text space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="bg-poe-gold text-poe-dark w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                        <div>
                          <strong>Reduce sockets:</strong> Use Jeweller's Orbs to bring the item down to 2-3 sockets
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-poe-gold text-poe-dark w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                        <div>
                          <strong>Color the reduced sockets:</strong> Use Chromatic Orbs to get desired colors on fewer sockets
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-poe-gold text-poe-dark w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                        <div>
                          <strong>Increase sockets:</strong> Use Jeweller's Orbs to add sockets back (existing colors are preserved)
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-poe-gold text-poe-dark w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                        <div>
                          <strong>Repeat:</strong> Continue the process for additional off-color sockets
                        </div>
                      </li>
                    </ol>
                    <div className="bg-poe-dark p-4 rounded border border-poe-gold/30">
                      <strong className="text-poe-gold">Critical Insight:</strong> 
                      <span className="text-poe-text ml-2">
                        This method exploits the fact that existing socket colors are preserved when adding sockets, 
                        allowing you to build up your desired combination incrementally.
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Cost Examples */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-poe-gold mb-6">
                Real-World Cost Examples
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-red-900/20 border-red-500/30">
                  <CardHeader>
                    <CardTitle className="text-red-400">Expensive: 4B on STR Chest</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-poe-text mb-3">
                      Getting 4 blue sockets on a pure Strength chest piece
                    </p>
                    <div className="text-sm space-y-1">
                      <div>Probability: ~0.00046%</div>
                      <div>Average Cost: ~21,600 Chromatics</div>
                      <div className="text-red-400 font-semibold">Recommendation: Use Jeweller's Trick</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-900/20 border-green-500/30">
                  <CardHeader>
                    <CardTitle className="text-green-400">Reasonable: 2R on DEX Bow</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-poe-text mb-3">
                      Getting 2 red sockets on a Dexterity bow
                    </p>
                    <div className="text-sm space-y-1">
                      <div>Probability: ~6.9%</div>
                      <div>Average Cost: ~15 Chromatics</div>
                      <div className="text-green-400 font-semibold">Recommendation: Chromatic Spam</div>
                    </div>
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
                    Use the Vorici Calculator Now
                  </h3>
                  <p className="text-poe-text-dim text-sm">
                    Apply socket coloring mechanics with our free calculator
                  </p>
                </div>
                <Calculator className="w-6 h-6 text-poe-gold group-hover:text-poe-orange transition-colors" />
              </div>
            </Link>

            <Link 
              href="/guides/path-of-exile-crafting-guide"
              className="bg-poe-dark-alt border border-poe-gold/20 rounded-lg p-6 hover:border-poe-gold/40 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-2 group-hover:text-poe-orange transition-colors">
                    Return to the Complete Path of Exile Crafting Guide
                  </h3>
                  <p className="text-poe-text-dim text-sm">
                    Continue your crafting education
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
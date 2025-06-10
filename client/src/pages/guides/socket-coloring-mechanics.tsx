import { Link } from 'wouter';
import { SEOHead } from '@/components/seo/head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, TrendingUp, Target, Zap } from 'lucide-react';

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
      "name": "Vorici Calculator"
    },
    "datePublished": "2024-12-15",
    "dateModified": "2024-12-15"
  };

  return (
    <div>
      <SEOHead
        title="PoE Socket Coloring Mechanics: A Deep Dive (2024) | Complete Guide"
        description="Learn the exact math behind Chromatic Orbs and socket coloring in Path of Exile. Understand how item attributes affect red, blue, and green socket chances."
        keywords="poe socket coloring mechanics, chromatic orb formula, socket color probability, off-color sockets, poe attribute requirements, vorici calculator"
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

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-poe-gold mb-6">
            A Deep Dive into Socket Coloring Mechanics
          </h1>
          <p className="text-xl text-poe-text-dim mb-8 max-w-4xl leading-relaxed">
            Master the exact mathematics behind Chromatic Orbs and socket coloring. Understanding how item attributes 
            determine socket color probabilities will save you thousands of orbs and make off-color strategies possible.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-poe-gold/30">
              <Target className="w-5 h-5 text-poe-gold" />
              <span className="text-sm font-medium">8 min read</span>
            </div>
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-poe-gold/30">
              <TrendingUp className="w-5 h-5 text-dexterity-green" />
              <span className="text-sm font-medium">Updated for 3.25</span>
            </div>
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-poe-gold/30">
              <Zap className="w-5 h-5 text-intelligence-blue" />
              <span className="text-sm font-medium">Advanced</span>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-poe-gold/20 to-poe-orange/20 border-poe-gold/40">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Calculator className="w-8 h-8 text-poe-gold" />
                <div>
                  <h3 className="text-lg font-gaming font-bold text-poe-gold mb-2">
                    Calculate Your Exact Costs
                  </h3>
                  <p className="text-poe-text-dim mb-4">
                    Use our All-in-One Crafting Calculator to get precise cost estimates for any color combination while reading this guide.
                  </p>
                  <Link 
                    href="/#calculator"
                    className="bg-poe-gold text-poe-dark px-4 py-2 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block"
                  >
                    Try the Calculator
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </header>

        {/* Main Content */}
        <article className="prose prose-lg max-w-none">
          
          {/* Section 1: How Attributes Determine Color Weighting */}
          <section className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">
              How Item Attributes Determine Socket Color Weighting
            </h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              Socket coloring mechanics in Path of Exile are based on a weighted probability system. Every time you use a Chromatic Orb, 
              the game rolls for each socket's color based on the item's attribute requirements. This isn't random—it's mathematically 
              predictable once you understand the weights.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming">The Base Weight System</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4">
                    Each item type has base weights for socket colors based on its attribute requirements:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-poe-dark rounded-lg p-4">
                      <h4 className="text-strength-red font-semibold mb-2">Pure Strength Items</h4>
                      <ul className="text-sm text-poe-text-dim">
                        <li>Red sockets: 100 weight</li>
                        <li>Green sockets: 25 weight</li>
                        <li>Blue sockets: 25 weight</li>
                        <li>White sockets: 1 weight</li>
                      </ul>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-4">
                      <h4 className="text-dexterity-green font-semibold mb-2">Pure Dexterity Items</h4>
                      <ul className="text-sm text-poe-text-dim">
                        <li>Red sockets: 25 weight</li>
                        <li>Green sockets: 100 weight</li>
                        <li>Blue sockets: 25 weight</li>
                        <li>White sockets: 1 weight</li>
                      </ul>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-4">
                      <h4 className="text-intelligence-blue font-semibold mb-2">Pure Intelligence Items</h4>
                      <ul className="text-sm text-poe-text-dim">
                        <li>Red sockets: 25 weight</li>
                        <li>Green sockets: 25 weight</li>
                        <li>Blue sockets: 100 weight</li>
                        <li>White sockets: 1 weight</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming">Hybrid Item Calculations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4">
                    Hybrid items (requiring multiple attributes) have balanced weights based on their requirements:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-poe-dark rounded-lg p-4">
                      <h4 className="text-poe-orange font-semibold mb-2">Strength/Dexterity Items</h4>
                      <ul className="text-sm text-poe-text-dim">
                        <li>Red sockets: 50 weight</li>
                        <li>Green sockets: 50 weight</li>
                        <li>Blue sockets: 25 weight</li>
                        <li>White sockets: 1 weight</li>
                      </ul>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-4">
                      <h4 className="text-poe-purple font-semibold mb-2">Strength/Intelligence Items</h4>
                      <ul className="text-sm text-poe-text-dim">
                        <li>Red sockets: 50 weight</li>
                        <li>Green sockets: 25 weight</li>
                        <li>Blue sockets: 50 weight</li>
                        <li>White sockets: 1 weight</li>
                      </ul>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-4">
                      <h4 className="text-poe-cyan font-semibold mb-2">Dexterity/Intelligence Items</h4>
                      <ul className="text-sm text-poe-text-dim">
                        <li>Red sockets: 25 weight</li>
                        <li>Green sockets: 50 weight</li>
                        <li>Blue sockets: 50 weight</li>
                        <li>White sockets: 1 weight</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-intelligence-blue/20 to-poe-blue/20 border-intelligence-blue/40">
              <CardContent className="p-6">
                <h3 className="text-xl font-gaming font-bold text-intelligence-blue mb-3">
                  Understanding Weight vs Probability
                </h3>
                <p className="text-poe-text-dim mb-4">
                  Weights determine relative chances, not absolute percentages. For a pure Strength item:
                </p>
                <ul className="text-poe-text-dim space-y-2">
                  <li>• Total weight: 100 + 25 + 25 + 1 = 151</li>
                  <li>• Red socket chance: 100/151 = 66.2%</li>
                  <li>• Green socket chance: 25/151 = 16.6%</li>
                  <li>• Blue socket chance: 25/151 = 16.6%</li>
                  <li>• White socket chance: 1/151 = 0.7%</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Section 2: The Chromatic Orb Formula */}
          <section className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">
              The Chromatic Orb Formula Explained
            </h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              The exact mathematical formula for calculating socket color probabilities allows you to predict costs 
              with near-perfect accuracy. Here's how the game calculates your chances.
            </p>

            <Card className="bg-poe-dark-alt border-poe-gold/30 mb-8">
              <CardHeader>
                <CardTitle className="text-poe-gold font-gaming">The Core Formula</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-poe-dark rounded-lg p-6 mb-6">
                  <code className="text-poe-gold font-mono text-lg block text-center">
                    P(color) = color_weight / total_weight
                  </code>
                </div>
                <p className="text-poe-text-dim mb-4">
                  For multiple sockets with specific colors, the probability becomes:
                </p>
                <div className="bg-poe-dark rounded-lg p-6 mb-6">
                  <code className="text-poe-gold font-mono text-lg block text-center">
                    P(combination) = ∏(P(color_i))
                  </code>
                </div>
                <p className="text-poe-text-dim text-sm">
                  Where ∏ means "product of" all individual socket color probabilities.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-poe-dark-alt border-strength-red/30">
                <CardHeader>
                  <CardTitle className="text-strength-red font-gaming">Example: 4 Red Sockets</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4">
                    On a pure Strength item (Astral Plate):
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-poe-dark rounded-lg p-3">
                      <p>Single red socket chance: 100/151 = 66.2%</p>
                      <p>Four red sockets: (100/151)^4 = 19.2%</p>
                      <p className="text-poe-gold font-semibold">Expected cost: ~5.2 Chromatic Orbs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-intelligence-blue/30">
                <CardHeader>
                  <CardTitle className="text-intelligence-blue font-gaming">Example: 4 Blue Sockets</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4">
                    On the same Strength item (off-color):
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-poe-dark rounded-lg p-3">
                      <p>Single blue socket chance: 25/151 = 16.6%</p>
                      <p>Four blue sockets: (25/151)^4 = 0.75%</p>
                      <p className="text-poe-gold font-semibold">Expected cost: ~133 Chromatic Orbs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-poe-orange/20 to-poe-gold/20 border-poe-orange/40">
              <CardContent className="p-6">
                <h3 className="text-xl font-gaming font-bold text-poe-orange mb-3">
                  Why This Matters for Your Builds
                </h3>
                <p className="text-poe-text-dim">
                  Understanding these probabilities helps you choose the right item base for your build. A Dexterity-based 
                  character needing green sockets should prioritize Dexterity armor pieces, while off-color combinations 
                  require significant currency investment or Vorici bench recipes for guaranteed results.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 3: Off-Coloring Strategies */}
          <section className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">
              Off-Coloring: Strategies & Costs
            </h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              "Off-coloring" refers to getting socket colors that don't match your item's primary attributes. This is often 
              necessary for builds that use gear with superior defensive properties but unfavorable attribute requirements.
            </p>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming text-lg">Chromatic Spam Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4 text-sm">
                    Use Chromatic Orbs until you get the desired combination.
                  </p>
                  <div className="space-y-2">
                    <div className="text-xs text-poe-text-dim">
                      <strong className="text-dexterity-green">Pros:</strong>
                      <ul className="ml-4 list-disc">
                        <li>Can be cheaper than bench (if lucky)</li>
                        <li>No recipe unlocking required</li>
                      </ul>
                    </div>
                    <div className="text-xs text-poe-text-dim">
                      <strong className="text-strength-red">Cons:</strong>
                      <ul className="ml-4 list-disc">
                        <li>Highly variable costs</li>
                        <li>Can be extremely expensive</li>
                        <li>No guarantee of success</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming text-lg">Vorici Bench Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4 text-sm">
                    Use crafting bench recipes for guaranteed results.
                  </p>
                  <div className="space-y-2">
                    <div className="text-xs text-poe-text-dim">
                      <strong className="text-dexterity-green">Pros:</strong>
                      <ul className="ml-4 list-disc">
                        <li>Guaranteed results</li>
                        <li>Predictable costs</li>
                        <li>No RNG involved</li>
                      </ul>
                    </div>
                    <div className="text-xs text-poe-text-dim">
                      <strong className="text-strength-red">Cons:</strong>
                      <ul className="ml-4 list-disc">
                        <li>Higher fixed costs</li>
                        <li>Requires recipe unlocking</li>
                        <li>Limited combinations available</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming text-lg">Hybrid Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4 text-sm">
                    Combine both methods for optimal results.
                  </p>
                  <div className="space-y-2">
                    <div className="text-xs text-poe-text-dim">
                      <strong className="text-dexterity-green">Strategy:</strong>
                      <ul className="ml-4 list-disc">
                        <li>Try chromatic spam first (set limit)</li>
                        <li>Use bench if spam fails</li>
                        <li>Calculate break-even point</li>
                      </ul>
                    </div>
                    <div className="text-xs text-poe-text-dim">
                      <strong className="text-intelligence-blue">Best for:</strong>
                      <ul className="ml-4 list-disc">
                        <li>Medium-difficulty combinations</li>
                        <li>Risk-tolerant players</li>
                        <li>Currency-conscious crafting</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-poe-dark-alt border-poe-gold/30 mb-8">
              <CardHeader>
                <CardTitle className="text-poe-gold font-gaming">Common Off-Color Scenarios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-poe-gold/30">
                        <th className="text-left py-2 text-poe-gold">Item Type</th>
                        <th className="text-left py-2 text-poe-gold">Desired Colors</th>
                        <th className="text-left py-2 text-poe-gold">Avg Cost (Chromatics)</th>
                        <th className="text-left py-2 text-poe-gold">Bench Cost</th>
                        <th className="text-left py-2 text-poe-gold">Recommendation</th>
                      </tr>
                    </thead>
                    <tbody className="text-poe-text-dim">
                      <tr className="border-b border-poe-gold/10">
                        <td className="py-2">STR Armor</td>
                        <td className="py-2">4 Blue</td>
                        <td className="py-2">~133</td>
                        <td className="py-2">130</td>
                        <td className="py-2 text-intelligence-blue">Use Bench</td>
                      </tr>
                      <tr className="border-b border-poe-gold/10">
                        <td className="py-2">STR Armor</td>
                        <td className="py-2">2 Blue</td>
                        <td className="py-2">~11</td>
                        <td className="py-2">25</td>
                        <td className="py-2 text-dexterity-green">Spam Chromatics</td>
                      </tr>
                      <tr className="border-b border-poe-gold/10">
                        <td className="py-2">DEX Armor</td>
                        <td className="py-2">4 Red</td>
                        <td className="py-2">~133</td>
                        <td className="py-2">130</td>
                        <td className="py-2 text-intelligence-blue">Use Bench</td>
                      </tr>
                      <tr className="border-b border-poe-gold/10">
                        <td className="py-2">INT Armor</td>
                        <td className="py-2">3 Red</td>
                        <td className="py-2">~37</td>
                        <td className="py-2">120</td>
                        <td className="py-2 text-dexterity-green">Spam Chromatics</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-dexterity-green/20 to-poe-green/20 border-dexterity-green/40">
              <CardContent className="p-6">
                <h3 className="text-xl font-gaming font-bold text-dexterity-green mb-3">
                  Pro Tip: Set Your Limits
                </h3>
                <p className="text-poe-text-dim mb-4">
                  Before attempting off-color combinations, decide on a maximum number of Chromatic Orbs you're willing to spend. 
                  If you exceed this limit, switch to the Vorici bench for guaranteed results.
                </p>
                <p className="text-poe-text-dim">
                  <strong>Example:</strong> For 4 blue sockets on a Strength item, set a limit of 100 Chromatics. If you don't 
                  succeed, use the bench recipe (130 Chromatics) for a guaranteed result.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Calculator CTA */}
          <Card className="bg-gradient-to-r from-poe-gold/20 to-poe-orange/20 border-poe-gold/40 mb-12">
            <CardContent className="p-8 text-center">
              <Calculator className="w-12 h-12 text-poe-gold mx-auto mb-4" />
              <h3 className="text-2xl font-gaming font-bold text-poe-gold mb-4">
                Calculate Your Exact Socket Coloring Costs
              </h3>
              <p className="text-poe-text-dim mb-6 max-w-2xl mx-auto">
                Use our All-in-One Crafting Calculator to get precise cost estimates and compare chromatic spam 
                vs Vorici bench costs for any socket combination.
              </p>
              <Link 
                href="/#calculator"
                className="bg-poe-gold text-poe-dark px-8 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block"
              >
                Use the Calculator Now
              </Link>
            </CardContent>
          </Card>

          {/* Back to main guide */}
          <Card className="bg-poe-dark-alt border-poe-gold/30">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-3">
                Continue Your Crafting Education
              </h3>
              <p className="text-poe-text-dim mb-4">
                Socket coloring is just one aspect of Path of Exile crafting. Learn about all crafting mechanics 
                in our comprehensive guide.
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
import { SEOHead } from '@/components/seo/head';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';

export default function SocketColoring() {
  return (
    <>
      <SEOHead
        title="PoE Socket Coloring Mechanics: A Deep Dive (2025)"
        description="Learn the exact math behind Chromatic Orbs and socket coloring in Path of Exile. Understand how item attributes affect red, blue, and green socket chances."
        keywords="Path of Exile socket coloring, chromatic orbs, socket mechanics, PoE crafting math, off-coloring strategies"
      />
      
      <div className="min-h-screen bg-poe-dark text-poe-text">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <article className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-gaming font-bold text-poe-gold mb-4">
                A Deep Dive into Socket Coloring Mechanics
              </h1>
              <p className="text-lg text-poe-text-dim">
                Master the mathematics behind Chromatic Orbs and achieve any color combination efficiently.
              </p>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-poe-text-dim">
                <span>📅 Updated for Patch 3.25</span>
                <span>⏱️ 8 min read</span>
                <span>📊 Intermediate</span>
              </div>
            </header>

            <div className="prose prose-invert max-w-none">
              <Card className="bg-poe-dark-alt border-poe-gold/20 mb-8">
                <CardContent className="p-6">
                  <h2 className="text-xl font-gaming font-bold text-poe-gold mb-4">What You'll Learn</h2>
                  <ul className="space-y-2 text-poe-text-dim">
                    <li>✓ The exact mathematical formulas behind socket coloring</li>
                    <li>✓ How item attribute requirements determine color weights</li>
                    <li>✓ Advanced off-coloring strategies for difficult combinations</li>
                    <li>✓ When to use Vorici bench vs. chromatic spam</li>
                    <li>✓ Cost optimization techniques for any color setup</li>
                  </ul>
                </CardContent>
              </Card>

              <section className="mb-12">
                <h2 className="text-3xl font-gaming font-bold text-poe-gold mb-6">
                  Introduction: Understanding Socket Color Mechanics
                </h2>
                <p className="text-poe-text-dim mb-4">
                  Socket coloring mechanics in Path of Exile are far more complex than they initially appear. 
                  Every Chromatic Orb roll is influenced by the item's attribute requirements, creating a 
                  weighted probability system that savvy crafters can exploit.
                </p>
                <p className="text-poe-text-dim mb-6">
                  This guide will explain the exact formulas and teach you how to calculate costs for any 
                  desired color combination, making you a more efficient and cost-effective crafter.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-gaming font-bold text-poe-gold mb-6">
                  How Item Attributes Determine Socket Color Weighting
                </h2>
                
                <Card className="bg-poe-dark-alt border-poe-gold/20 mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-4">
                      Base Color Weights by Item Type
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-poe-gold/20">
                            <th className="text-left py-2 text-poe-gold">Item Type</th>
                            <th className="text-center py-2 text-red-400">Red Weight</th>
                            <th className="text-center py-2 text-green-400">Green Weight</th>
                            <th className="text-center py-2 text-blue-400">Blue Weight</th>
                            <th className="text-center py-2 text-white">White Weight</th>
                          </tr>
                        </thead>
                        <tbody className="text-poe-text-dim">
                          <tr className="border-b border-poe-gold/10">
                            <td className="py-2">Pure Strength</td>
                            <td className="text-center py-2 font-bold text-red-400">100</td>
                            <td className="text-center py-2">25</td>
                            <td className="text-center py-2">25</td>
                            <td className="text-center py-2">1</td>
                          </tr>
                          <tr className="border-b border-poe-gold/10">
                            <td className="py-2">Pure Dexterity</td>
                            <td className="text-center py-2">25</td>
                            <td className="text-center py-2 font-bold text-green-400">100</td>
                            <td className="text-center py-2">25</td>
                            <td className="text-center py-2">1</td>
                          </tr>
                          <tr className="border-b border-poe-gold/10">
                            <td className="py-2">Pure Intelligence</td>
                            <td className="text-center py-2">25</td>
                            <td className="text-center py-2">25</td>
                            <td className="text-center py-2 font-bold text-blue-400">100</td>
                            <td className="text-center py-2">1</td>
                          </tr>
                          <tr className="border-b border-poe-gold/10">
                            <td className="py-2">Hybrid Str/Dex</td>
                            <td className="text-center py-2 text-red-400">50</td>
                            <td className="text-center py-2 text-green-400">50</td>
                            <td className="text-center py-2">25</td>
                            <td className="text-center py-2">1</td>
                          </tr>
                          <tr className="border-b border-poe-gold/10">
                            <td className="py-2">Hybrid Str/Int</td>
                            <td className="text-center py-2 text-red-400">50</td>
                            <td className="text-center py-2">25</td>
                            <td className="text-center py-2 text-blue-400">50</td>
                            <td className="text-center py-2">1</td>
                          </tr>
                          <tr>
                            <td className="py-2">Hybrid Dex/Int</td>
                            <td className="text-center py-2">25</td>
                            <td className="text-center py-2 text-green-400">50</td>
                            <td className="text-center py-2 text-blue-400">50</td>
                            <td className="text-center py-2">1</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                <p className="text-poe-text-dim mb-4">
                  The table above shows the base weights used in socket color calculations. Notice how 
                  pure attribute items heavily favor their primary color (4:1 ratio), while hybrid items 
                  give equal weight to both primary attributes.
                </p>

                <p className="text-poe-text-dim mb-6">
                  White sockets have a fixed weight of 1, making them extremely rare on most items. 
                  This is why achieving off-colors (colors that don't match the item's primary attributes) 
                  requires specific strategies.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-gaming font-bold text-poe-gold mb-6">
                  The Chromatic Orb Formula Explained
                </h2>
                
                <Card className="bg-poe-dark-alt border-poe-gold/20 mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-4">
                      The Mathematical Foundation
                    </h3>
                    <div className="bg-poe-dark rounded-lg p-4 mb-4">
                      <code className="text-poe-text text-sm font-mono">
                        P(color) = color_weight / total_weight<br />
                        where total_weight = red_weight + green_weight + blue_weight + white_weight
                      </code>
                    </div>
                    <p className="text-poe-text-dim text-sm mb-4">
                      For multiple sockets, the probability of achieving a specific combination is:
                    </p>
                    <div className="bg-poe-dark rounded-lg p-4">
                      <code className="text-poe-text text-sm font-mono">
                        P(combination) = P(socket1) × P(socket2) × P(socket3) × ... × P(socketN)
                      </code>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="bg-poe-dark-alt border-poe-gold/20">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-3">
                        Example: 4R on Strength Helmet
                      </h3>
                      <div className="space-y-2 text-sm text-poe-text-dim">
                        <div>Red weight: 100</div>
                        <div>Total weight: 151</div>
                        <div>P(red) = 100/151 = 66.2%</div>
                        <div className="border-t border-poe-gold/20 pt-2 mt-2">
                          <div className="text-poe-gold">P(4R) = (100/151)⁴ = 19.3%</div>
                          <div className="text-poe-orange">Expected cost: ~5 Chromatics</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-poe-dark-alt border-poe-gold/20">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-3">
                        Example: 4B on Strength Helmet
                      </h3>
                      <div className="space-y-2 text-sm text-poe-text-dim">
                        <div>Blue weight: 25</div>
                        <div>Total weight: 151</div>
                        <div>P(blue) = 25/151 = 16.6%</div>
                        <div className="border-t border-poe-gold/20 pt-2 mt-2">
                          <div className="text-poe-gold">P(4B) = (25/151)⁴ = 0.75%</div>
                          <div className="text-poe-orange">Expected cost: ~133 Chromatics</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-poe-text-dim mb-6">
                  This dramatic difference in expected costs (5 vs 133 Chromatics) illustrates why 
                  understanding item types is crucial for efficient crafting. The second example shows 
                  a clear case where alternative methods should be considered.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-gaming font-bold text-poe-gold mb-6">
                  Off-Coloring: Strategies & Costs
                </h2>
                
                <p className="text-poe-text-dim mb-6">
                  Off-coloring refers to achieving socket colors that don't match an item's primary 
                  attributes. This is often necessary for specific build requirements and requires 
                  strategic thinking about cost optimization.
                </p>

                <div className="space-y-6 mb-8">
                  <Card className="bg-poe-dark-alt border-poe-gold/20">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-4">
                        Strategy 1: Vorici Bench Method
                      </h3>
                      <p className="text-poe-text-dim mb-4">
                        The crafting bench offers guaranteed color combinations at fixed costs. This is 
                        often the most efficient method for difficult off-color combinations.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-semibold text-poe-gold mb-2">When to Use:</div>
                          <ul className="space-y-1 text-poe-text-dim">
                            <li>• Expected cost > bench cost</li>
                            <li>• Guaranteed results needed</li>
                            <li>• High-value items (risk aversion)</li>
                          </ul>
                        </div>
                        <div>
                          <div className="font-semibold text-poe-gold mb-2">Common Bench Costs:</div>
                          <ul className="space-y-1 text-poe-text-dim">
                            <li>• 1 specific color: 4 Chromatics</li>
                            <li>• 2 specific colors: 25 Chromatics</li>
                            <li>• 3 specific colors: 120 Chromatics</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-poe-dark-alt border-poe-gold/20">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-4">
                        Strategy 2: Progressive Coloring
                      </h3>
                      <p className="text-poe-text-dim mb-4">
                        For complex combinations, consider achieving colors step-by-step using bench 
                        crafts to lock in difficult colors first, then chroming for the remainder.
                      </p>
                      <div className="bg-poe-dark rounded-lg p-4">
                        <div className="text-sm text-poe-text-dim">
                          <div className="text-poe-gold mb-2">Example: 2B2R on Strength Item</div>
                          <div>1. Bench craft "2 Blue sockets" (25 Chromatics)</div>
                          <div>2. Chrome remaining sockets for red (cheap on STR item)</div>
                          <div>3. Total cost: ~30-40 Chromatics vs ~200+ pure RNG</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-poe-dark-alt border-poe-gold/20">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-4">
                        Strategy 3: Item Type Consideration
                      </h3>
                      <p className="text-poe-text-dim mb-4">
                        Sometimes it's more efficient to acquire a different item base that naturally 
                        favors your desired colors, especially for expensive unique items.
                      </p>
                      <div className="text-sm text-poe-text-dim">
                        <div className="text-poe-gold mb-2">Cost-Benefit Analysis:</div>
                        <div>• Calculate expected coloring cost on current item</div>
                        <div>• Compare to cost of acquiring favorable base + coloring</div>
                        <div>• Factor in other item properties (links, quality, corruption)</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="mb-12">
                <Card className="bg-gradient-to-r from-poe-gold/20 to-poe-orange/20 border-poe-gold/40">
                  <CardContent className="p-8 text-center">
                    <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-4">
                      Calculate Your Exact Costs
                    </h2>
                    <p className="text-poe-text-dim mb-6">
                      Use our All-in-One Crafting Calculator to get precise cost estimates for any 
                      color combination. Input your item type and desired colors for instant results.
                    </p>
                    <Link 
                      href="/#calculator"
                      className="bg-poe-gold text-poe-dark px-6 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block"
                    >
                      Calculate Your Exact Costs with our All-in-One Crafting Calculator
                    </Link>
                  </CardContent>
                </Card>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-gaming font-bold text-poe-gold mb-6">
                  Advanced Tips & Tricks
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-poe-dark-alt border-poe-gold/20">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-4">
                        Quality Considerations
                      </h3>
                      <p className="text-poe-text-dim text-sm mb-3">
                        Item quality doesn't affect socket coloring probabilities, but it does 
                        impact linking chances. Plan your quality application accordingly.
                      </p>
                      <div className="text-xs text-poe-text-dim">
                        Tip: Apply quality before linking, but coloring can be done at any quality level.
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-poe-dark-alt border-poe-gold/20">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-4">
                        Currency Market Timing
                      </h3>
                      <p className="text-poe-text-dim text-sm mb-3">
                        Chromatic Orb prices fluctuate throughout a league. Consider market timing 
                        for expensive off-coloring projects.
                      </p>
                      <div className="text-xs text-poe-text-dim">
                        Tip: Early league chromatics are typically more expensive relative to chaos orbs.
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="mb-8">
                <Card className="bg-poe-dark-alt border-poe-gold/20">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-gaming font-bold text-poe-gold mb-4">
                      Continue Your Mastery
                    </h2>
                    <p className="text-poe-text-dim mb-4">
                      Now that you understand socket coloring mechanics, expand your crafting knowledge 
                      with our related guides:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <Link href="/guides/path-of-exile-crafting-guide" className="text-poe-gold hover:text-poe-orange">
                          ← Return to the Complete Path of Exile Crafting Guide
                        </Link>
                      </div>
                      <div>
                        <Link href="/guides/6-linking-strategies" className="text-poe-gold hover:text-poe-orange">
                          Next: Master 6-Linking Strategies →
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}

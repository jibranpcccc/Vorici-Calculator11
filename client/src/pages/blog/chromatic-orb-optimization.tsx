
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import Header from '@/components/Header';
import SEOHead from '@/components/SEOHead';
import { Calendar, Clock, User, TrendingUp, Calculator, Lightbulb, Target } from 'lucide-react';
import { ChromaticOrbIcon } from '@/components/icons/ItemBaseIcons';

export default function ChromaticOrbOptimization() {
  return (
    <>
      <SEOHead
        title="Advanced Chromatic Orb Strategies: Save 50% on Socket Coloring | PoE Guide"
        description="Master chromatic orb optimization in Path of Exile. Learn the jeweller method, cost-effective color combinations, and mathematical strategies to save currency."
        keywords="chromatic orb guide, PoE socket coloring, jeweller method, chromatic orb calculator, Path of Exile crafting optimization"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Advanced Chromatic Orb Strategies: Save 50% on Socket Coloring",
          "description": "Comprehensive guide to optimizing chromatic orb usage in Path of Exile",
          "author": {
            "@type": "Organization",
            "name": "Vorici Calculator"
          },
          "datePublished": "2025-01-02",
          "dateModified": "2025-01-02",
          "wordCount": "2500"
        }}
      />
      
      <div className="min-h-screen bg-poe-dark text-poe-text">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <article className="max-w-4xl mx-auto">
            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-500/20 text-green-400">Strategy Guide</Badge>
                <div className="flex items-center gap-1 text-sm text-poe-text-dim">
                  <Calendar className="w-4 h-4" />
                  January 2, 2025
                </div>
                <div className="flex items-center gap-1 text-sm text-poe-text-dim">
                  <Clock className="w-4 h-4" />
                  12 min read
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-gaming font-bold text-poe-gold mb-4">
                Advanced Chromatic Orb Strategies: Save 50% on Socket Coloring
              </h1>
              
              <p className="text-xl text-poe-text-dim leading-relaxed">
                Discover the mathematical secrets behind efficient socket coloring in Path of Exile. 
                Learn when to use the jeweller method versus direct chromatic spamming, and master 
                the art of currency optimization for any color combination.
              </p>
            </div>

            {/* Featured Image Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-poe-gold/20 to-poe-orange/20 rounded-lg flex items-center justify-center mb-8">
              <ChromaticOrbIcon className="w-24 h-24" />
            </div>

            {/* Article Content */}
            <div className="prose prose-invert max-w-none space-y-8">
              
              {/* Introduction */}
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardContent className="p-6">
                  <p className="text-poe-text-dim leading-relaxed">
                    Socket coloring in Path of Exile is one of the most expensive aspects of crafting, 
                    often consuming hundreds or thousands of chromatic orbs for off-color combinations. 
                    However, with the right mathematical understanding and strategic approach, you can 
                    reduce these costs by up to 50% or more.
                  </p>
                </CardContent>
              </Card>

              {/* The Mathematics Behind Socket Colors */}
              <section>
                <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-4 flex items-center gap-2">
                  <Calculator className="w-6 h-6" />
                  The Mathematics Behind Socket Colors
                </h2>
                
                <p className="text-poe-text-dim mb-4">
                  Understanding the probability system is crucial for optimization. Each item base has 
                  different socket color weights based on its attribute requirements:
                </p>

                <Card className="bg-poe-dark-alt border-poe-gold/30 mb-6">
                  <CardHeader>
                    <CardTitle className="text-poe-gold">Base Color Probabilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-poe-dark rounded-lg p-4 border border-red-500/30">
                        <h4 className="font-semibold text-red-400 mb-2">Pure Strength Base</h4>
                        <ul className="text-sm space-y-1">
                          <li>Red: <span className="text-poe-gold">45%</span></li>
                          <li>Green: <span className="text-poe-gold">25%</span></li>
                          <li>Blue: <span className="text-poe-gold">25%</span></li>
                          <li>White: <span className="text-poe-gold">5%</span></li>
                        </ul>
                      </div>
                      <div className="bg-poe-dark rounded-lg p-4 border border-green-500/30">
                        <h4 className="font-semibold text-green-400 mb-2">Pure Dexterity Base</h4>
                        <ul className="text-sm space-y-1">
                          <li>Red: <span className="text-poe-gold">25%</span></li>
                          <li>Green: <span className="text-poe-gold">45%</span></li>
                          <li>Blue: <span className="text-poe-gold">25%</span></li>
                          <li>White: <span className="text-poe-gold">5%</span></li>
                        </ul>
                      </div>
                      <div className="bg-poe-dark rounded-lg p-4 border border-blue-500/30">
                        <h4 className="font-semibold text-blue-400 mb-2">Pure Intelligence Base</h4>
                        <ul className="text-sm space-y-1">
                          <li>Red: <span className="text-poe-gold">25%</span></li>
                          <li>Green: <span className="text-poe-gold">25%</span></li>
                          <li>Blue: <span className="text-poe-gold">45%</span></li>
                          <li>White: <span className="text-poe-gold">5%</span></li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-poe-dark rounded-lg p-6 border border-poe-gold/20 mb-6">
                  <h4 className="font-semibold text-poe-gold mb-3">Expected Value Calculation</h4>
                  <p className="text-poe-text-dim mb-3">
                    For multiple sockets, we multiply individual probabilities:
                  </p>
                  <div className="bg-poe-dark-alt rounded p-4 border border-poe-gold/10">
                    <code className="text-green-400 block mb-2">
                      3R2G on Strength Base = (0.45)³ × (0.25)² × C(5,3) = 0.091 × 0.0625 × 10 = 0.057 (5.7%)
                    </code>
                    <code className="text-green-400 block">
                      Expected Chromatics = 1 / 0.057 ≈ 18 orbs
                    </code>
                  </div>
                </div>
              </section>

              {/* The 50 Orb Rule */}
              <section>
                <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6" />
                  The 50 Orb Rule: When to Switch Strategies
                </h2>
                
                <p className="text-poe-text-dim mb-4">
                  The critical threshold for strategy switching is approximately 50 chromatic orbs. 
                  Above this cost, alternative methods become more efficient:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <Card className="bg-poe-dark-alt border-green-500/30">
                    <CardHeader>
                      <CardTitle className="text-green-400">Direct Chromatic Method</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-poe-text-dim mb-3">Use when expected cost &lt; 50 orbs</p>
                      <ul className="text-sm space-y-1">
                        <li>• Simple and fast</li>
                        <li>• Best for on-color combinations</li>
                        <li>• No secondary currency needed</li>
                        <li>• Immediate results</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-poe-dark-alt border-yellow-500/30">
                    <CardHeader>
                      <CardTitle className="text-yellow-400">Jeweller Method</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-poe-text-dim mb-3">Use when expected cost &gt; 50 orbs</p>
                      <ul className="text-sm space-y-1">
                        <li>• Dramatically reduces off-color costs</li>
                        <li>• Requires jeweller orbs</li>
                        <li>• More time-intensive</li>
                        <li>• Can save thousands of chromatics</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* The Jeweller Method Explained */}
              <section>
                <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-4 flex items-center gap-2">
                  <Lightbulb className="w-6 h-6" />
                  The Jeweller Method: Step-by-Step Guide
                </h2>
                
                <p className="text-poe-text-dim mb-4">
                  This technique exploits the fact that socket colors are determined when you add 
                  sockets, not when you reroll them. Here's how it works:
                </p>

                <Card className="bg-poe-dark-alt border-poe-gold/30 mb-6">
                  <CardHeader>
                    <CardTitle className="text-poe-gold">Method Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3 text-poe-text-dim">
                      <li>
                        <strong className="text-poe-gold">Step 1:</strong> Use jeweller orbs to reduce item to 1 socket
                      </li>
                      <li>
                        <strong className="text-poe-gold">Step 2:</strong> If socket is desired color, proceed. If not, use 1 chromatic to reroll
                      </li>
                      <li>
                        <strong className="text-poe-gold">Step 3:</strong> Use jeweller orbs to add 1 more socket (now 2 sockets)
                      </li>
                      <li>
                        <strong className="text-poe-gold">Step 4:</strong> If new socket is correct color, continue. If not, return to 1 socket
                      </li>
                      <li>
                        <strong className="text-poe-gold">Step 5:</strong> Repeat until all sockets are correct colors
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-yellow-400 mb-2">💡 Pro Tip: The 2-Socket Trick</h4>
                  <p className="text-sm text-poe-text-dim">
                    For extremely off-color combinations (like 6B on a strength base), you can use the 
                    2-socket method: Get 2 correct sockets, then use jeweller orbs to go 2→3→2→3 until 
                    the 3rd socket is correct. This is more efficient than the 1-socket method for very rare colors.
                  </p>
                </div>
              </section>

              {/* Real-World Examples */}
              <section>
                <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-4">
                  Real-World Cost Comparisons
                </h2>
                
                <p className="text-poe-text-dim mb-4">
                  Let's examine specific scenarios where the jeweller method saves significant currency:
                </p>

                <div className="space-y-6">
                  <Card className="bg-poe-dark-alt border-poe-gold/30">
                    <CardHeader>
                      <CardTitle className="text-poe-gold">Example 1: 5B1R on Strength Chest</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-red-400 mb-2">Direct Chromatic Method</h5>
                          <ul className="text-sm space-y-1">
                            <li>Success rate: ~0.01%</li>
                            <li>Expected chromatics: ~10,000</li>
                            <li>Chaos equivalent: ~500-800c</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-green-400 mb-2">Jeweller Method</h5>
                          <ul className="text-sm space-y-1">
                            <li>Expected jewellers: ~800</li>
                            <li>Expected chromatics: ~200</li>
                            <li>Chaos equivalent: ~150-200c</li>
                            <li><strong className="text-poe-gold">Savings: 60-75%</strong></li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-poe-dark-alt border-poe-gold/30">
                    <CardHeader>
                      <CardTitle className="text-poe-gold">Example 2: 4G2R on Intelligence Base</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-red-400 mb-2">Direct Chromatic Method</h5>
                          <ul className="text-sm space-y-1">
                            <li>Success rate: ~0.39%</li>
                            <li>Expected chromatics: ~256</li>
                            <li>Chaos equivalent: ~15-25c</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-yellow-400 mb-2">Recommendation</h5>
                          <p className="text-sm text-poe-text-dim">
                            Use direct chromatic method. Cost is below the 50-orb threshold, 
                            making the jeweller method less efficient due to setup time.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Market Considerations */}
              <section>
                <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-4">
                  Market Price Optimization
                </h2>
                
                <p className="text-poe-text-dim mb-4">
                  Currency exchange rates fluctuate throughout leagues. Monitor these ratios to optimize your approach:
                </p>

                <Card className="bg-poe-dark-alt border-poe-gold/30 mb-6">
                  <CardHeader>
                    <CardTitle className="text-poe-gold">Key Exchange Rates to Watch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-poe-gold mb-3">Early League (Week 1-2)</h5>
                        <ul className="text-sm space-y-1 text-poe-text-dim">
                          <li>• Chromatics: 12-15:1c</li>
                          <li>• Jewellers: 20-25:1c</li>
                          <li>• Fusings: 2-2.5:1c</li>
                          <li><strong>Strategy:</strong> Direct chromatic often better</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-poe-gold mb-3">Mid-Late League</h5>
                        <ul className="text-sm space-y-1 text-poe-text-dim">
                          <li>• Chromatics: 8-10:1c</li>
                          <li>• Jewellers: 15-20:1c</li>
                          <li>• Fusings: 1.5-2:1c</li>
                          <li><strong>Strategy:</strong> Jeweller method more attractive</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-blue-400 mb-2">📊 Daily Rate Checking</h4>
                  <p className="text-sm text-poe-text-dim">
                    Check currency exchange rates daily on the official trade site. A 20% change in 
                    jeweller:chromatic ratio can flip the optimal strategy for borderline cases.
                  </p>
                </div>
              </section>

              {/* Advanced Techniques */}
              <section>
                <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-4">
                  Advanced Optimization Techniques
                </h2>
                
                <div className="space-y-6">
                  <Card className="bg-poe-dark-alt border-purple-500/30">
                    <CardHeader>
                      <CardTitle className="text-purple-400">The Hybrid Approach</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-poe-text-dim mb-3">
                        For moderately difficult combinations (50-150 chromatics), consider a hybrid approach:
                      </p>
                      <ol className="text-sm space-y-1 text-poe-text-dim">
                        <li>1. Try direct chromatic for 50-100 attempts</li>
                        <li>2. If unsuccessful, switch to jeweller method</li>
                        <li>3. This balances time investment with potential lucky outcomes</li>
                      </ol>
                    </CardContent>
                  </Card>

                  <Card className="bg-poe-dark-alt border-orange-500/30">
                    <CardHeader>
                      <CardTitle className="text-orange-400">Bulk Purchase Strategy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-poe-text-dim mb-3">
                        When planning major socket projects:
                      </p>
                      <ul className="text-sm space-y-1 text-poe-text-dim">
                        <li>• Buy currency in bulk for better rates (5-10% savings)</li>
                        <li>• Calculate total project costs before starting</li>
                        <li>• Consider opportunity cost of currency sitting unused</li>
                        <li>• Factor in potential market changes during long projects</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Calculator Integration */}
              <Card className="bg-gradient-to-r from-poe-gold/20 to-poe-orange/20 border-poe-gold/40">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-4">
                    Apply These Strategies Now
                  </h2>
                  <p className="text-poe-text-dim mb-6 max-w-2xl mx-auto">
                    Use our advanced chromatic calculator to determine the optimal strategy for your specific 
                    socket combination. Get real-time cost comparisons and make informed crafting decisions.
                  </p>
                  <Link 
                    href="/#calculator"
                    className="bg-poe-gold text-poe-dark px-8 py-4 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block"
                  >
                    Calculate Your Optimal Strategy
                  </Link>
                </CardContent>
              </Card>

              {/* Conclusion */}
              <section>
                <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-4">
                  Key Takeaways
                </h2>
                
                <Card className="bg-poe-dark-alt border-poe-gold/30">
                  <CardContent className="p-6">
                    <ul className="space-y-3 text-poe-text-dim">
                      <li>
                        <strong className="text-poe-gold">The 50 Orb Rule:</strong> Switch to jeweller method when expected chromatic cost exceeds 50 orbs
                      </li>
                      <li>
                        <strong className="text-poe-gold">Understand Probabilities:</strong> Item base dramatically affects socket color chances
                      </li>
                      <li>
                        <strong className="text-poe-gold">Monitor Market Rates:</strong> Currency exchange rates can change optimal strategies
                      </li>
                      <li>
                        <strong className="text-poe-gold">Plan Ahead:</strong> Calculate total project costs before starting major socket work
                      </li>
                      <li>
                        <strong className="text-poe-gold">Use Tools:</strong> Leverage calculators to make precise, data-driven decisions
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </section>
            </div>

            {/* Author/Meta Info */}
            <div className="mt-12 pt-8 border-t border-poe-gold/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-poe-gold/20 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-poe-gold" />
                </div>
                <div>
                  <div className="font-semibold text-poe-gold">Vorici Calculator Team</div>
                  <div className="text-sm text-poe-text-dim">Expert Path of Exile crafting analysis and tools</div>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}

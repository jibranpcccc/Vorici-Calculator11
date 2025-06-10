
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import Header from '@/components/Header';
import SEOHead from '@/components/SEOHead';
import { ChromaticOrbIcon, JewellersOrbIcon, FusingOrbIcon } from '@/components/icons/ItemBaseIcons';
import { Calculator, Zap, Target, TrendingUp, Award, BookOpen } from 'lucide-react';

export default function ComprehensivePOECraftingGuide() {
  return (
    <>
      <SEOHead
        title="Complete Path of Exile Crafting Guide 2025 - Master Socket Manipulation"
        description="The ultimate Path of Exile crafting guide covering chromatic orbs, socket coloring, 6-linking, and advanced crafting techniques. Master PoE crafting with expert strategies."
        keywords="Path of Exile crafting guide, PoE socket coloring, chromatic orbs guide, 6-link guide, fusing orbs, jeweller orbs, socket manipulation"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Complete Path of Exile Crafting Guide 2025",
          "description": "Comprehensive guide to Path of Exile crafting mechanics, socket manipulation, and currency optimization",
          "author": {
            "@type": "Organization",
            "name": "Vorici Calculator"
          },
          "datePublished": "2025-01-03",
          "dateModified": "2025-01-03"
        }}
      />
      
      <div className="min-h-screen bg-poe-dark text-poe-text">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-gaming font-bold text-poe-gold mb-4">
                Complete Path of Exile<br />Crafting Guide 2025
              </h1>
              <p className="text-xl text-poe-text-dim max-w-2xl mx-auto mb-8">
                Master socket manipulation, currency optimization, and advanced crafting techniques 
                with this comprehensive guide to Path of Exile crafting mechanics.
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                <Badge variant="secondary" className="bg-poe-gold/20 text-poe-gold">Beginner Friendly</Badge>
                <Badge variant="secondary" className="bg-poe-orange/20 text-poe-orange">Advanced Strategies</Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-400">2025 Updated</Badge>
              </div>
              <Link 
                href="/#calculator"
                className="bg-poe-gold text-poe-dark px-8 py-4 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block"
              >
                Try the Calculator
              </Link>
            </div>

            {/* Table of Contents */}
            <Card className="mb-12 bg-poe-dark-alt border-poe-gold/30">
              <CardHeader>
                <CardTitle className="text-poe-gold font-gaming">Guide Contents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-poe-gold">Fundamentals</h4>
                    <ul className="space-y-1 text-sm text-poe-text-dim">
                      <li>• Socket System Basics</li>
                      <li>• Item Requirements & Bases</li>
                      <li>• Currency Types & Uses</li>
                      <li>• Probability Mathematics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-poe-gold">Advanced Techniques</h4>
                    <ul className="space-y-1 text-sm text-poe-text-dim">
                      <li>• Cost-Effective Strategies</li>
                      <li>• Bench Craft vs RNG</li>
                      <li>• Min-Maxing Approaches</li>
                      <li>• League-Specific Tips</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Main Content Tabs */}
            <Tabs defaultValue="fundamentals" className="mb-12">
              <TabsList className="grid w-full grid-cols-4 bg-poe-dark-alt border border-poe-gold/30">
                <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
                <TabsTrigger value="chromatic">Chromatic Orbs</TabsTrigger>
                <TabsTrigger value="linking">Socket Linking</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
              </TabsList>

              <TabsContent value="fundamentals" className="mt-8">
                <div className="space-y-8">
                  <Card className="bg-poe-dark-alt border-poe-gold/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-poe-gold">
                        <BookOpen className="w-5 h-5" />
                        Understanding Socket Mechanics
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-poe-gold mb-3">Socket Colors & Requirements</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-poe-dark rounded-lg p-4 border border-red-500/30">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-4 h-4 bg-red-500 rounded"></div>
                              <span className="font-semibold text-red-400">Red Sockets</span>
                            </div>
                            <p className="text-sm text-poe-text-dim">
                              Strength-based gems. More common on armor items (chest, gloves, boots, helmets).
                            </p>
                          </div>
                          <div className="bg-poe-dark rounded-lg p-4 border border-green-500/30">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-4 h-4 bg-green-500 rounded"></div>
                              <span className="font-semibold text-green-400">Green Sockets</span>
                            </div>
                            <p className="text-sm text-poe-text-dim">
                              Dexterity-based gems. More common on evasion items (bows, claws, daggers).
                            </p>
                          </div>
                          <div className="bg-poe-dark rounded-lg p-4 border border-blue-500/30">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-4 h-4 bg-blue-500 rounded"></div>
                              <span className="font-semibold text-blue-400">Blue Sockets</span>
                            </div>
                            <p className="text-sm text-poe-text-dim">
                              Intelligence-based gems. More common on energy shield items (wands, staves).
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-poe-gold mb-3">Item Base Influence</h4>
                        <p className="text-poe-text-dim mb-4">
                          Your item's base type significantly affects socket color probabilities:
                        </p>
                        <ul className="space-y-2 text-poe-text-dim">
                          <li>• <strong className="text-red-400">Pure Strength</strong>: 45% red, 25% green, 25% blue, 5% white</li>
                          <li>• <strong className="text-green-400">Pure Dexterity</strong>: 25% red, 45% green, 25% blue, 5% white</li>
                          <li>• <strong className="text-blue-400">Pure Intelligence</strong>: 25% red, 25% green, 45% blue, 5% white</li>
                          <li>• <strong className="text-poe-gold">Hybrid bases</strong>: Balanced between their two stats</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-poe-dark-alt border-poe-gold/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-poe-gold">
                        <Calculator className="w-5 h-5" />
                        Probability Mathematics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-poe-text-dim">
                          Understanding the math behind socket probabilities helps you make informed crafting decisions:
                        </p>
                        <div className="bg-poe-dark rounded-lg p-4 border border-poe-gold/20">
                          <h5 className="font-semibold text-poe-gold mb-2">Expected Value Formula</h5>
                          <code className="text-sm text-green-400 block mb-2">
                            Expected Orbs = 1 / Success_Probability
                          </code>
                          <p className="text-sm text-poe-text-dim">
                            For example, if you have a 10% chance of success, you'll need an average of 10 orbs.
                          </p>
                        </div>
                        <div className="bg-poe-dark rounded-lg p-4 border border-poe-gold/20">
                          <h5 className="font-semibold text-poe-gold mb-2">Multi-Socket Calculations</h5>
                          <p className="text-sm text-poe-text-dim">
                            For multiple sockets, multiply individual probabilities. A 3R2G combination on a 
                            strength base might have ~2.5% chance, requiring ~40 chromatic orbs on average.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="chromatic" className="mt-8">
                <div className="space-y-8">
                  <Card className="bg-poe-dark-alt border-poe-gold/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-poe-gold">
                        <ChromaticOrbIcon className="w-6 h-6" />
                        Chromatic Orb Mastery
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-poe-gold mb-3">Optimal Strategies by Cost</h4>
                        <div className="space-y-4">
                          <div className="bg-poe-dark rounded-lg p-4 border border-green-500/30">
                            <h5 className="font-semibold text-green-400 mb-2">Low Cost (&lt;50 orbs)</h5>
                            <p className="text-sm text-poe-text-dim mb-2">
                              Spam chromatic orbs directly. Most efficient for easy color combinations.
                            </p>
                            <ul className="text-sm text-poe-text-dim space-y-1">
                              <li>• Perfect for on-color combinations (3R on strength base)</li>
                              <li>• Use when success probability is above 2%</li>
                              <li>• Quick and straightforward approach</li>
                            </ul>
                          </div>
                          
                          <div className="bg-poe-dark rounded-lg p-4 border border-yellow-500/30">
                            <h5 className="font-semibold text-yellow-400 mb-2">Medium Cost (50-200 orbs)</h5>
                            <p className="text-sm text-poe-text-dim mb-2">
                              Consider Vorici bench alternatives or jeweller method.
                            </p>
                            <ul className="text-sm text-poe-text-dim space-y-1">
                              <li>• Compare bench costs vs. RNG approach</li>
                              <li>• Factor in time investment vs. guaranteed results</li>
                              <li>• Consider market prices for chromatic vs. jeweller orbs</li>
                            </ul>
                          </div>

                          <div className="bg-poe-dark rounded-lg p-4 border border-red-500/30">
                            <h5 className="font-semibold text-red-400 mb-2">High Cost (&gt;200 orbs)</h5>
                            <p className="text-sm text-poe-text-dim mb-2">
                              Always use alternative methods like jeweller technique.
                            </p>
                            <ul className="text-sm text-poe-text-dim space-y-1">
                              <li>• Jeweller method: Use 1 socket → add sockets → repeat</li>
                              <li>• Guaranteed bench crafts when available</li>
                              <li>• Consider buying pre-colored items</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-poe-gold mb-3">The Jeweller Method</h4>
                        <div className="bg-poe-dark-alt rounded-lg p-6 border border-poe-gold/30">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-semibold text-poe-gold mb-3">How It Works</h5>
                              <ol className="space-y-2 text-sm text-poe-text-dim">
                                <li>1. Use jeweller orbs to get 1 socket with desired color</li>
                                <li>2. Use jeweller orbs to add more sockets</li>
                                <li>3. If new socket is wrong color, go back to step 1</li>
                                <li>4. Repeat until all sockets are correct</li>
                              </ol>
                            </div>
                            <div>
                              <h5 className="font-semibold text-poe-gold mb-3">When to Use</h5>
                              <ul className="space-y-2 text-sm text-poe-text-dim">
                                <li>• Off-color combinations (5B on strength base)</li>
                                <li>• When chromatic cost exceeds ~150 orbs</li>
                                <li>• For extremely rare color combinations</li>
                                <li>• When jeweller orbs are cheaper than chromatics</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="linking" className="mt-8">
                <div className="space-y-8">
                  <Card className="bg-poe-dark-alt border-poe-gold/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-poe-gold">
                        <FusingOrbIcon className="w-6 h-6" />
                        Socket Linking Guide
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-poe-gold mb-3">Quality Matters</h4>
                        <p className="text-poe-text-dim mb-4">
                          Item quality significantly affects linking success rates:
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-red-400">0%</div>
                            <div className="text-sm text-poe-text-dim">Base Rate</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-yellow-400">20%</div>
                            <div className="text-sm text-poe-text-dim">+20% Success</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-400">28%</div>
                            <div className="text-sm text-poe-text-dim">+48% Success</div>
                          </div>
                        </div>
                        <p className="text-sm text-poe-text-dim mt-4">
                          <strong>Always</strong> quality your item to 20% or higher before attempting to 6-link. 
                          The Perfect Fossil method (28% quality) is most cost-effective for expensive items.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-poe-gold mb-3">6-Link Strategies</h4>
                        <div className="space-y-4">
                          <div className="bg-poe-dark rounded-lg p-4 border border-poe-gold/20">
                            <h5 className="font-semibold text-poe-gold mb-2">Standard Items</h5>
                            <p className="text-poe-text-dim text-sm mb-2">
                              Average: ~1000-1500 fusings at 20% quality
                            </p>
                            <ul className="text-sm text-poe-text-dim space-y-1">
                              <li>• Use the 6-link bench craft (1500 fusings) for guaranteed results</li>
                              <li>• RNG method if you enjoy gambling or fusings are cheap</li>
                              <li>• Consider buying pre-linked items for expensive bases</li>
                            </ul>
                          </div>

                          <div className="bg-poe-dark rounded-lg p-4 border border-poe-orange/20">
                            <h5 className="font-semibold text-poe-orange mb-2">Influenced/Special Items</h5>
                            <p className="text-poe-text-dim text-sm mb-2">
                              Cannot use bench crafts - RNG only
                            </p>
                            <ul className="text-sm text-poe-text-dim space-y-1">
                              <li>• Always max quality (28% with Perfect Fossil)</li>
                              <li>• Prepare for high variance - budget 2000+ fusings</li>
                              <li>• Consider The Fated Connections prophecy if available</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-poe-gold mb-3">5-Link vs 6-Link</h4>
                        <div className="bg-poe-dark-alt rounded-lg p-4 border border-poe-gold/20">
                          <p className="text-poe-text-dim mb-4">
                            5-links are much easier to achieve and often sufficient for most builds:
                          </p>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h6 className="font-semibold text-green-400 mb-2">5-Link Benefits</h6>
                              <ul className="text-sm text-poe-text-dim space-y-1">
                                <li>• Average ~150 fusings</li>
                                <li>• Suitable for most builds</li>
                                <li>• Good stepping stone</li>
                                <li>• Bench craft available</li>
                              </ul>
                            </div>
                            <div>
                              <h6 className="font-semibold text-poe-gold mb-2">6-Link Investment</h6>
                              <ul className="text-sm text-poe-text-dim space-y-1">
                                <li>• 8-10x more expensive</li>
                                <li>• Marginal damage increase</li>
                                <li>• End-game luxury</li>
                                <li>• High opportunity cost</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="advanced" className="mt-8">
                <div className="space-y-8">
                  <Card className="bg-poe-dark-alt border-poe-gold/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-poe-gold">
                        <TrendingUp className="w-5 h-5" />
                        Advanced Optimization
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-poe-gold mb-3">Currency Exchange Optimization</h4>
                        <p className="text-poe-text-dim mb-4">
                          Monitor currency ratios to optimize your crafting costs:
                        </p>
                        <div className="bg-poe-dark rounded-lg p-4 border border-poe-gold/20">
                          <h5 className="font-semibold text-poe-gold mb-2">Market Awareness</h5>
                          <ul className="text-sm text-poe-text-dim space-y-1">
                            <li>• Check chromatic:chaos ratio daily</li>
                            <li>• Compare jeweller:chromatic rates</li>
                            <li>• Factor in fusing:chaos conversion</li>
                            <li>• Use bulk trade for better rates</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-poe-gold mb-3">League-Specific Strategies</h4>
                        <div className="space-y-4">
                          <div className="bg-poe-dark rounded-lg p-4 border border-blue-500/30">
                            <h5 className="font-semibold text-blue-400 mb-2">League Start</h5>
                            <ul className="text-sm text-poe-text-dim space-y-1">
                              <li>• Focus on 4-links and 5-links</li>
                              <li>• Save currency for essential upgrades</li>
                              <li>• Use vendor recipes efficiently</li>
                              <li>• Prioritize mapping over perfecting gear</li>
                            </ul>
                          </div>
                          
                          <div className="bg-poe-dark rounded-lg p-4 border border-purple-500/30">
                            <h5 className="font-semibold text-purple-400 mb-2">End League</h5>
                            <ul className="text-sm text-poe-text-dim space-y-1">
                              <li>• Currency is cheaper - good time for 6-links</li>
                              <li>• Experiment with expensive techniques</li>
                              <li>• Perfect gear for next league planning</li>
                              <li>• Test theoretical crafting approaches</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-poe-gold mb-3">Min-Max Techniques</h4>
                        <div className="bg-poe-dark-alt rounded-lg p-6 border border-poe-gold/30">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-semibold text-poe-gold mb-3">Hybrid Approaches</h5>
                              <ul className="space-y-2 text-sm text-poe-text-dim">
                                <li>• Combine bench crafts with RNG when cost-effective</li>
                                <li>• Use partial success states (4L → 5L → 6L)</li>
                                <li>• Leverage quality bonuses from different sources</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-semibold text-poe-gold mb-3">Risk Management</h5>
                              <ul className="space-y-2 text-sm text-poe-text-dim">
                                <li>• Set stop-loss limits for RNG methods</li>
                                <li>• Calculate break-even points vs. guaranteed methods</li>
                                <li>• Factor in opportunity cost of time investment</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            {/* Calculator CTA */}
            <Card className="bg-gradient-to-r from-poe-gold/20 to-poe-orange/20 border-poe-gold/40">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-4">
                  Put This Knowledge Into Practice
                </h2>
                <p className="text-poe-text-dim mb-6 max-w-2xl mx-auto">
                  Use our advanced calculator to apply these strategies to your specific items. 
                  Get precise cost estimates and optimal crafting approaches for any configuration.
                </p>
                <Link 
                  href="/#calculator"
                  className="bg-poe-gold text-poe-dark px-8 py-4 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block"
                >
                  Calculate Your Crafting Costs
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}

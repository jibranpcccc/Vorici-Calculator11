
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import Header from '@/components/Header';
import SEOHead from '@/components/SEOHead';
import Calculator from '@/components/Calculator';
import { Calculator as CalculatorIcon, Zap, Target, TrendingUp } from 'lucide-react';

export default function POESocketCalculator() {
  return (
    <>
      <SEOHead
        title="Path of Exile Socket Calculator - Chromatic, Jeweller & Fusing Orb Calculator"
        description="Free PoE socket calculator for chromatic orb costs, jeweller orb requirements, and fusing orb probabilities. Instant calculations with precise mathematics for all socket combinations."
        keywords="PoE socket calculator, Path of Exile calculator, chromatic orb calculator, jeweller orb calculator, fusing orb calculator, socket coloring calculator"
        schemaData={{
          "@context": "https://schema.org",
          "@type": ["WebApplication", "SoftwareApplication"],
          "name": "Path of Exile Socket Calculator",
          "description": "Comprehensive socket calculation tool for Path of Exile crafting",
          "applicationCategory": "GameApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }}
      />
      
      <div className="min-h-screen bg-poe-dark text-poe-text">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {/* SEO-focused intro section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-gaming font-bold text-poe-gold mb-4">
                Path of Exile Socket Calculator
              </h1>
              <p className="text-xl text-poe-text-dim max-w-3xl mx-auto mb-6">
                The most accurate and comprehensive PoE socket calculator available. Calculate exact 
                chromatic orb costs, jeweller orb requirements, and fusing orb probabilities for any 
                item combination. Updated for the current league with precise mathematical formulas.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary" className="bg-poe-gold/20 text-poe-gold">Free Forever</Badge>
                <Badge variant="secondary" className="bg-green-500/20 text-green-400">Instant Results</Badge>
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">League Updated</Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-400">Mobile Friendly</Badge>
              </div>
            </div>

            {/* Feature highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-poe-dark-alt border-poe-gold/30 text-center">
                <CardHeader>
                  <CalculatorIcon className="w-8 h-8 text-poe-gold mx-auto mb-2" />
                  <CardTitle className="text-poe-gold">All-in-One Calculator</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim text-sm">
                    Calculate chromatic orb colors, socket counts, and link probabilities in one powerful tool.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30 text-center">
                <CardHeader>
                  <Zap className="w-8 h-8 text-poe-orange mx-auto mb-2" />
                  <CardTitle className="text-poe-gold">Real-Time Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim text-sm">
                    Get instant cost estimates as you configure your item. No waiting, no submit buttons.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30 text-center">
                <CardHeader>
                  <Target className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <CardTitle className="text-poe-gold">Precise Mathematics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim text-sm">
                    Based on exact game formulas and probability calculations used by the PoE community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Calculator */}
          <Calculator />

          {/* SEO Content */}
          <div className="max-w-4xl mx-auto mt-16 space-y-12">
            <section>
              <h2 className="text-3xl font-gaming font-bold text-poe-gold mb-6">
                How to Use the PoE Socket Calculator
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-poe-dark-alt border-poe-gold/30">
                  <CardHeader>
                    <CardTitle className="text-poe-gold">Chromatic Orb Calculator</CardTitle>
                  </CardHeader>
                  <CardContent className="text-poe-text-dim text-sm space-y-2">
                    <p>Calculate socket coloring costs for any item combination:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Select your item base type (strength, dexterity, intelligence, or hybrid)</li>
                      <li>Set the item level for accurate calculations</li>
                      <li>Click sockets to configure your desired color pattern</li>
                      <li>View instant cost estimates and optimal strategies</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-poe-dark-alt border-poe-gold/30">
                  <CardHeader>
                    <CardTitle className="text-poe-gold">Jeweller & Fusing Calculators</CardTitle>
                  </CardHeader>
                  <CardContent className="text-poe-text-dim text-sm space-y-2">
                    <p>Optimize socket count and linking strategies:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Set current and target socket counts</li>
                      <li>Configure item quality for accurate fusing calculations</li>
                      <li>Compare bench craft costs vs RNG methods</li>
                      <li>Track total spending across crafting sessions</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-gaming font-bold text-poe-gold mb-6">
                Why Use Our Path of Exile Calculator?
              </h2>
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-poe-gold mb-4">Accuracy & Reliability</h3>
                      <ul className="space-y-2 text-poe-text-dim">
                        <li>• Based on official Path of Exile socket mechanics</li>
                        <li>• Regularly updated for each league</li>
                        <li>• Verified by thousands of players</li>
                        <li>• Includes all item base types and modifiers</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-poe-gold mb-4">Advanced Features</h3>
                      <ul className="space-y-2 text-poe-text-dim">
                        <li>• Session tracking for multiple attempts</li>
                        <li>• Cost breakdown with detailed explanations</li>
                        <li>• Copy results for easy sharing</li>
                        <li>• Mobile-optimized interface</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-3xl font-gaming font-bold text-poe-gold mb-6">
                Common Socket Coloring Questions
              </h2>
              <div className="space-y-4">
                <Card className="bg-poe-dark-alt border-poe-gold/30">
                  <CardHeader>
                    <CardTitle className="text-poe-gold text-lg">How do socket colors work in Path of Exile?</CardTitle>
                  </CardHeader>
                  <CardContent className="text-poe-text-dim text-sm">
                    <p>
                      Socket colors are determined by your item's attribute requirements. Strength items favor red sockets, 
                      dexterity items favor green sockets, and intelligence items favor blue sockets. Each socket has about 
                      a 5% chance to be white regardless of item type.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-poe-dark-alt border-poe-gold/30">
                  <CardHeader>
                    <CardTitle className="text-poe-gold text-lg">When should I use the jeweller method vs direct chromatics?</CardTitle>
                  </CardHeader>
                  <CardContent className="text-poe-text-dim text-sm">
                    <p>
                      Use the jeweller method when the expected chromatic cost exceeds approximately 50 orbs. This typically 
                      happens with off-color combinations like getting blue sockets on strength items or red sockets on 
                      intelligence items.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-poe-dark-alt border-poe-gold/30">
                  <CardHeader>
                    <CardTitle className="text-poe-gold text-lg">How accurate are the calculator predictions?</CardTitle>
                  </CardHeader>
                  <CardContent className="text-poe-text-dim text-sm">
                    <p>
                      Our calculator uses the exact probability formulas from Path of Exile's code. While individual results 
                      vary due to RNG, the averages are mathematically accurate. Over many attempts, actual costs will closely 
                      match calculated expectations.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Call to action */}
            <Card className="bg-gradient-to-r from-poe-gold/20 to-poe-orange/20 border-poe-gold/40">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-4">
                  Start Optimizing Your Crafting Today
                </h2>
                <p className="text-poe-text-dim mb-6 max-w-2xl mx-auto">
                  Join thousands of Path of Exile players who use our calculator to save currency and make smarter crafting decisions.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link 
                    href="/guides/comprehensive-poe-crafting-guide"
                    className="bg-poe-gold text-poe-dark px-6 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors"
                  >
                    Read Crafting Guide
                  </Link>
                  <Link 
                    href="/blog"
                    className="bg-poe-orange text-poe-dark px-6 py-3 rounded-lg font-gaming font-medium hover:bg-poe-orange/90 transition-colors"
                  >
                    View Latest Tips
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}

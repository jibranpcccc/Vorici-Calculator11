import { Link } from 'wouter';
import { ExternalLink, Calculator, Users, Shield, Zap } from 'lucide-react';

export default function About() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-gaming font-bold text-poe-gold mb-4">About Vorici Calculator</h1>
          <p className="text-lg text-poe-text-dim">
            Building the most trusted and comprehensive crafting calculator for the Path of Exile community.
          </p>
        </div>

        <div className="space-y-12">
          {/* Mission */}
          <section className="bg-poe-dark-alt rounded-2xl p-8 border border-poe-gold/20">
            <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-6">Our Mission</h2>
            <p className="text-poe-text-dim text-lg leading-relaxed mb-4">
              To become the #1 trusted, go-to destination for Path of Exile players to calculate, understand, and master crafting mechanics related to sockets, links, and colors.
            </p>
            <p className="text-poe-text-dim leading-relaxed">
              We provide the most accurate, fastest, and fully integrated All-in-One crafting tool, kept meticulously up-to-date for every PoE league, and supported by the most comprehensive guides available.
            </p>
          </section>

          {/* Why Trust Us */}
          <section>
            <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-8 text-center">Why Trust Vorici Calculator?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-poe-dark-alt rounded-xl p-6 border border-poe-gold/20 text-center">
                <div className="w-12 h-12 bg-poe-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-6 h-6 text-poe-gold" />
                </div>
                <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-2">Verified Accuracy</h3>
                <p className="text-poe-text-dim text-sm">
                  All formulas verified against game data and extensive community testing for 99.9% accuracy.
                </p>
              </div>

              <div className="bg-poe-dark-alt rounded-xl p-6 border border-poe-gold/20 text-center">
                <div className="w-12 h-12 bg-poe-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-poe-gold" />
                </div>
                <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-2">Always Updated</h3>
                <p className="text-poe-text-dim text-sm">
                  Updated within 24-48 hours of every league launch and patch release.
                </p>
              </div>

              <div className="bg-poe-dark-alt rounded-xl p-6 border border-poe-gold/20 text-center">
                <div className="w-12 h-12 bg-poe-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-poe-gold" />
                </div>
                <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-2">Transparent</h3>
                <p className="text-poe-text-dim text-sm">
                  Complete mathematical formulas and explanations available for every calculation.
                </p>
              </div>

              <div className="bg-poe-dark-alt rounded-xl p-6 border border-poe-gold/20 text-center">
                <div className="w-12 h-12 bg-poe-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-poe-gold" />
                </div>
                <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-2">Community-Driven</h3>
                <p className="text-poe-text-dim text-sm">
                  Built by PoE players, for PoE players, with continuous community feedback integration.
                </p>
              </div>
            </div>
          </section>

          {/* Experience & Expertise */}
          <section className="bg-poe-dark-alt rounded-2xl p-8 border border-poe-gold/20">
            <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-6">Experience & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-3">Path of Exile Expertise</h3>
                <ul className="text-poe-text-dim space-y-2">
                  <li>• 8+ years of active Path of Exile gameplay</li>
                  <li>• Deep understanding of crafting mechanics across all leagues</li>
                  <li>• Extensive testing and validation of calculation formulas</li>
                  <li>• Active participation in the PoE community and forums</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-3">Technical Authority</h3>
                <ul className="text-poe-text-dim space-y-2">
                  <li>• Professional software development background</li>
                  <li>• Statistical analysis and probability mathematics</li>
                  <li>• Game mechanics research and documentation</li>
                  <li>• Performance optimization and user experience design</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-8 text-center">What Makes Us Different</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-poe-dark-alt rounded-xl p-6 border border-poe-gold/20">
                <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-3">All-in-One Tool</h3>
                <p className="text-poe-text-dim text-sm">
                  The only calculator that handles Chromatic, Jeweller's, and Fusing calculations in a single, seamless interface.
                </p>
              </div>
              <div className="bg-poe-dark-alt rounded-xl p-6 border border-poe-gold/20">
                <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-3">Real-Time Updates</h3>
                <p className="text-poe-text-dim text-sm">
                  No submit buttons needed - calculations update instantly as you modify your item configuration.
                </p>
              </div>
              <div className="bg-poe-dark-alt rounded-xl p-6 border border-poe-gold/20">
                <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-3">Educational Content</h3>
                <p className="text-poe-text-dim text-sm">
                  Comprehensive guides that teach you the 'why' behind the calculations, not just the results.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-poe-dark-alt rounded-xl p-8 border border-poe-gold/20">
              <h3 className="text-2xl font-gaming font-bold text-poe-gold mb-4">Ready to Optimize Your Crafting?</h3>
              <p className="text-poe-text-dim mb-6">
                Join thousands of Path of Exile players who trust Vorici Calculator for their crafting needs.
              </p>
              <div className="space-y-4">
                <Link href="/#calculator" className="bg-poe-gold text-poe-dark px-8 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block mr-4">
                  Try Calculator Now
                </Link>
                <Link href="/guides" className="border border-poe-gold text-poe-gold px-8 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/10 transition-colors inline-block">
                  Read Guides
                </Link>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="text-center">
            <div className="bg-poe-dark rounded-lg p-6 border border-poe-gold/10">
              <p className="text-poe-text-dim text-sm">
                <strong>Disclaimer:</strong> Vorici Calculator is not affiliated with Grinding Gear Games. 
                Path of Exile is a trademark of Grinding Gear Games. All calculations are based on publicly 
                available game mechanics and community research.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

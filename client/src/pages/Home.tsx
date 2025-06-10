import { Link } from 'wouter';
import Calculator from '@/components/Calculator';
import { ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Calculator />

      {/* Feature Overview */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-gaming font-bold text-poe-gold mb-4">One Tool for All Your Core Crafting Needs</h2>
          <p className="text-lg text-poe-text-dim max-w-3xl mx-auto">
            Master Path of Exile crafting with precise calculations for every orb type. 
            Updated formulas ensure accuracy across all leagues.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-poe-dark-alt rounded-xl p-6 border border-poe-gold/20 hover:border-poe-gold/40 transition-colors">
            <div className="w-16 h-16 bg-poe-gold/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 via-green-500 to-blue-500 rounded-full"></div>
            </div>
            <h3 className="text-xl font-gaming font-semibold text-poe-gold mb-3 text-center">Perfect Socket Coloring</h3>
            <p className="text-poe-text-dim text-center mb-4">
              Calculate exact Chromatic Orb costs for any color combination. Factor in item attributes and probability mathematics.
            </p>
            <div className="text-center">
              <Link href="/guides/socket-coloring-mechanics" className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium">
                Read our complete socket coloring mechanics guide →
              </Link>
            </div>
          </div>

          <div className="bg-poe-dark-alt rounded-xl p-6 border border-poe-gold/20 hover:border-poe-gold/40 transition-colors">
            <div className="w-16 h-16 bg-poe-gold/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full"></div>
            </div>
            <h3 className="text-xl font-gaming font-semibold text-poe-gold mb-3 text-center">Max Sockets Every Time</h3>
            <p className="text-poe-text-dim text-center mb-4">
              Optimize Jeweller's Orb usage with precise probability calculations. Know exactly when to stop or continue.
            </p>
            <div className="text-center">
              <Link href="/guides" className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium">
                Learn more in our main guide →
              </Link>
            </div>
          </div>

          <div className="bg-poe-dark-alt rounded-xl p-6 border border-poe-gold/20 hover:border-poe-gold/40 transition-colors">
            <div className="w-16 h-16 bg-poe-gold/20 rounded-full flex items-center justify-center mb-4 mx-auto">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-600 rounded-full"></div>
            </div>
            <h3 className="text-xl font-gaming font-semibold text-poe-gold mb-3 text-center">Master the 6-Link</h3>
            <p className="text-poe-text-dim text-center mb-4">
              Compare Orb of Fusing spam vs bench crafting costs. Factor in quality bonuses and statistical variance.
            </p>
            <div className="text-center">
              <Link href="/guides/6-linking-strategies" className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium">
                Read our full 6-linking strategies guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="mb-16">
        <div className="bg-poe-dark-alt rounded-2xl p-8 border border-poe-gold/20">
          <h2 className="text-3xl font-gaming font-bold text-poe-gold mb-6 text-center">How to Use The Ultimate Crafting Calculator</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-poe-gold text-poe-dark rounded-full flex items-center justify-center font-gaming font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-2">Select Your Orb Type</h3>
              <p className="text-poe-text-dim">Choose from Chromatic, Jeweller's, or Fusing tabs based on your crafting goal.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-poe-gold text-poe-dark rounded-full flex items-center justify-center font-gaming font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-2">Configure Your Item</h3>
              <p className="text-poe-text-dim">Input item base, level, quality, and your desired socket configuration.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-poe-gold text-poe-dark rounded-full flex items-center justify-center font-gaming font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-2">Get Instant Results</h3>
              <p className="text-poe-text-dim">View real-time calculations, costs, and optimal crafting strategies.</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/guides/how-to-use-the-calculator" className="bg-poe-gold text-poe-dark px-6 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block">
              Read the full step-by-step tutorial
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Factors */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-gaming font-bold text-poe-gold mb-4">Why Trust This Calculator?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-poe-dark-alt rounded-lg p-6 text-center border border-poe-gold/20">
            <div className="text-3xl font-gaming font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-poe-text-dim">Calculation Accuracy</div>
          </div>
          
          <div className="bg-poe-dark-alt rounded-lg p-6 text-center border border-poe-gold/20">
            <div className="text-3xl font-gaming font-bold text-poe-gold mb-2">3.25</div>
            <div className="text-poe-text-dim">Current League Support</div>
          </div>
          
          <div className="bg-poe-dark-alt rounded-lg p-6 text-center border border-poe-gold/20">
            <div className="text-3xl font-gaming font-bold text-blue-400 mb-2">Open</div>
            <div className="text-poe-text-dim">Source Mathematics</div>
          </div>
          
          <div className="bg-poe-dark-alt rounded-lg p-6 text-center border border-poe-gold/20">
            <div className="text-3xl font-gaming font-bold text-poe-orange mb-2">24/7</div>
            <div className="text-poe-text-dim">Always Available</div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-poe-text-dim mb-4">
            Formulas verified against game data and community testing. Transparent methodology with mathematical breakdowns available.
          </p>
          <Link href="/guides" className="text-poe-gold hover:text-poe-orange transition-colors font-medium">
            Learn more about our calculation methods
          </Link>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-gaming font-bold text-poe-gold">Latest Crafting Insights</h2>
          <Link href="/blog" className="text-poe-gold hover:text-poe-orange transition-colors font-medium">
            View all posts →
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <article className="bg-poe-dark-alt rounded-xl overflow-hidden border border-poe-gold/20 hover:border-poe-gold/40 transition-colors">
            <div className="h-48 bg-gradient-to-br from-poe-dark to-poe-dark-alt flex items-center justify-center">
              <div className="text-poe-text-dim text-center">
                <div className="text-4xl mb-2">⚒️</div>
                <div className="text-sm">Crafting Guide</div>
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-poe-text-dim mb-2">December 15, 2024</div>
              <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-2">
                <Link href="/blog/top-5-crafting-mistakes" className="hover:text-poe-orange transition-colors">
                  Top 5 Crafting Mistakes That Are Wasting Your Currency
                </Link>
              </h3>
              <p className="text-poe-text-dim text-sm">
                Avoid these common pitfalls when coloring, socketing, and linking your gear. Learn to craft smarter, not harder.
              </p>
            </div>
          </article>

          <article className="bg-poe-dark-alt rounded-xl overflow-hidden border border-poe-gold/20 hover:border-poe-gold/40 transition-colors">
            <div className="h-48 bg-gradient-to-br from-poe-dark to-poe-dark-alt flex items-center justify-center">
              <div className="text-poe-text-dim text-center">
                <div className="text-4xl mb-2">🔗</div>
                <div className="text-sm">League Updates</div>
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-poe-text-dim mb-2">December 12, 2024</div>
              <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-2">
                <Link href="/blog/poe-3-25-crafting-changes" className="hover:text-poe-orange transition-colors">
                  PoE 3.25 Crafting Changes: What You Need to Know
                </Link>
              </h3>
              <p className="text-poe-text-dim text-sm">
                Complete breakdown of Settlers League crafting updates and how they affect your currency optimization strategies.
              </p>
            </div>
          </article>

          <article className="bg-poe-dark-alt rounded-xl overflow-hidden border border-poe-gold/20 hover:border-poe-gold/40 transition-colors">
            <div className="h-48 bg-gradient-to-br from-poe-dark to-poe-dark-alt flex items-center justify-center">
              <div className="text-poe-text-dim text-center">
                <div className="text-4xl mb-2">💎</div>
                <div className="text-sm">Advanced Tips</div>
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-poe-text-dim mb-2">December 10, 2024</div>
              <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-2">
                <Link href="/blog/advanced-socket-strategies" className="hover:text-poe-orange transition-colors">
                  Advanced Socket Color Strategies for Endgame Items
                </Link>
              </h3>
              <p className="text-poe-text-dim text-sm">
                Master off-coloring techniques and bench crafting combinations for the most challenging socket requirements.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

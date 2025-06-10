import { Link } from 'wouter';
import { SEOHead } from '@/components/seo/head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Target, TrendingUp, Calculator, Clock } from 'lucide-react';

export default function AdvancedSocketStrategies() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Advanced Socket Strategies for Path of Exile Veterans",
    "description": "Master advanced techniques like the jeweller method, chromatic spamming optimization, and cost-effective off-coloring strategies for experienced players.",
    "author": {
      "@type": "Organization",
      "name": "Vorici Calculator Team"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Vorici Calculator"
    },
    "datePublished": "2024-12-10",
    "dateModified": "2024-12-10",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://vorici-calculator.com/blog/advanced-socket-strategies/"
    }
  };

  return (
    <div>
      <SEOHead
        title="Advanced Socket Strategies for Path of Exile Veterans | Expert Techniques"
        description="Master advanced techniques like the jeweller method, chromatic spamming optimization, and cost-effective off-coloring strategies for experienced players."
        keywords="advanced poe socket strategies, jeweller method, chromatic optimization, off-coloring techniques, expert crafting guide, socket manipulation"
        canonicalUrl="https://vorici-calculator.com/blog/advanced-socket-strategies/"
        structuredData={structuredData}
      />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-poe-text-dim">
            <li><Link href="/" className="hover:text-poe-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-poe-gold transition-colors">Blog</Link></li>
            <li>/</li>
            <li className="text-poe-text">Advanced Socket Strategies</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-poe-gold" />
            <span className="text-sm font-medium text-vibrant-gold bg-vibrant-gold/20 px-3 py-1 rounded-full">Advanced</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-poe-gold mb-6">
            Advanced Socket Strategies for PoE Veterans
          </h1>
          
          <p className="text-xl text-poe-text-dim mb-8 max-w-4xl leading-relaxed">
            Ready to take your socket manipulation skills to the next level? This guide covers advanced techniques 
            that go beyond basic calculations, including the jeweller method, chromatic optimization patterns, 
            and cost-effective strategies for the most challenging off-color combinations.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-vibrant-gold/30">
              <Target className="w-5 h-5 text-vibrant-gold" />
              <span className="text-sm font-medium">Expert Level</span>
            </div>
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-poe-gold/30">
              <Clock className="w-5 h-5 text-poe-gold" />
              <span className="text-sm font-medium">12 min read</span>
            </div>
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-dexterity-green/30">
              <TrendingUp className="w-5 h-5 text-dexterity-green" />
              <span className="text-sm font-medium">December 10, 2024</span>
            </div>
          </div>
        </header>

        {/* Prerequisites */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-vibrant-gold/10 to-poe-orange/10 border-vibrant-gold/30">
            <CardHeader>
              <CardTitle className="text-vibrant-gold font-gaming">Prerequisites</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-poe-text-dim mb-4">
                This guide assumes you already understand basic socket mechanics. If you're new to crafting, 
                start with our foundational guides first.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/guides/path-of-exile-crafting-guide"
                  className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium bg-poe-dark-alt px-3 py-1 rounded"
                >
                  Complete Crafting Guide
                </Link>
                <Link 
                  href="/guides/socket-coloring-mechanics"
                  className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium bg-poe-dark-alt px-3 py-1 rounded"
                >
                  Socket Coloring Mechanics
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Content */}
        <article className="prose prose-lg max-w-none">
          
          {/* The Jeweller Method */}
          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-poe-gold mb-8">
              The Jeweller Method: Advanced Off-Coloring
            </h2>
            
            <p className="text-poe-text-dim mb-6 leading-relaxed">
              The jeweller method is the most cost-effective technique for achieving difficult off-color combinations. 
              Instead of spamming chromatics on a 6-socket item, you manipulate sockets one at a time.
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

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-poe-dark-alt border-dexterity-green/30">
                <CardHeader>
                  <CardTitle className="text-dexterity-green">When to Use Jeweller Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-poe-text-dim">
                    <li>• Need 4+ off-color sockets on pure attribute items</li>
                    <li>• Expected chromatic cost exceeds 50+ orbs</li>
                    <li>• Working with expensive bases where failure is costly</li>
                    <li>• Need specific socket arrangements (colors in order)</li>
                    <li>• Have abundant jeweller orbs available</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-strength-red/30">
                <CardHeader>
                  <CardTitle className="text-strength-red">Jeweller Method Limitations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-poe-text-dim">
                    <li>• Time-intensive process requiring patience</li>
                    <li>• Jeweller orbs can be expensive relative to chromatics</li>
                    <li>• Risk of accidentally hitting unwanted socket numbers</li>
                    <li>• Not cost-effective for easy color combinations</li>
                    <li>• Requires manual execution (can't be automated)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-poe-gold/20 to-poe-orange/20 border-poe-gold/40">
              <CardContent className="p-6">
                <h4 className="text-lg font-gaming font-bold text-poe-gold mb-4">Real Example: 6 Blue on STR Chest</h4>
                <p className="text-poe-text-dim mb-4">
                  Getting 6 blue sockets on a pure strength chest (like Kaom's Heart) is nearly impossible with chromatics. 
                  Our calculator shows ~2000+ chromatic expected cost, but the jeweller method can achieve this for 
                  significantly less currency.
                </p>
                <div className="bg-poe-dark rounded-lg p-4">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-strength-red font-semibold mb-2">Chromatic Spam:</div>
                      <div className="text-poe-text-dim">Expected: 2000+ chromatics</div>
                      <div className="text-poe-text-dim">Variance: Extremely high</div>
                    </div>
                    <div>
                      <div className="text-dexterity-green font-semibold mb-2">Jeweller Method:</div>
                      <div className="text-poe-text-dim">Expected: 300 jewellers + 60 chromatics</div>
                      <div className="text-poe-text-dim">Variance: Much lower</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Chromatic Optimization Patterns */}
          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-poe-gold mb-8">
              Chromatic Optimization Patterns
            </h2>
            
            <p className="text-poe-text-dim mb-6 leading-relaxed">
              Even when using standard chromatic spam, there are optimization patterns that can significantly 
              reduce costs for specific scenarios.
            </p>

            <div className="space-y-6">
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold">The 2-Socket Start Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4">
                    For items where you need specific colors in the first few sockets, start with 2 sockets, 
                    get the colors right, then expand to full sockets.
                  </p>
                  <div className="bg-poe-dark rounded-lg p-4">
                    <h4 className="font-semibold text-poe-orange mb-2">Example: Need RRG in first 3 sockets</h4>
                    <ol className="text-sm text-poe-text-dim space-y-1">
                      <li>1. Craft item to 2 sockets using bench</li>
                      <li>2. Chromatic until you get RR</li>
                      <li>3. Craft to 3 sockets using bench</li>
                      <li>4. If 3rd socket is green, expand. If not, return to 2 sockets</li>
                      <li>5. Continue expanding once core colors are secured</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold">Quality Timing Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4">
                    Quality affects linking but not coloring. Strategic quality application can save currency.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-dexterity-green mb-2">Optimal Order:</h4>
                      <ol className="text-sm text-poe-text-dim space-y-1">
                        <li>1. Get correct socket number first</li>
                        <li>2. Get correct colors (quality doesn't help)</li>
                        <li>3. Apply 20% quality with Perfect Fossils/Hillock</li>
                        <li>4. Link the sockets (quality helps significantly)</li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="font-semibold text-strength-red mb-2">Common Mistake:</h4>
                      <p className="text-sm text-poe-text-dim">
                        Applying quality before coloring wastes the quality bonus and may require 
                        re-quality after color changes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Cost-Benefit Analysis */}
          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-poe-gold mb-8">
              Advanced Cost-Benefit Analysis
            </h2>
            
            <p className="text-poe-text-dim mb-6 leading-relaxed">
              Advanced players must consider not just raw orb costs, but time investment, risk tolerance, 
              and opportunity costs when choosing strategies.
            </p>

            <Card className="bg-poe-dark-alt border-poe-gold/30 mb-6">
              <CardHeader>
                <CardTitle className="text-poe-gold">The Hidden Costs Matrix</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-poe-gold/30">
                        <th className="text-left py-2 text-poe-gold">Method</th>
                        <th className="text-center py-2 text-poe-gold">Orb Cost</th>
                        <th className="text-center py-2 text-poe-gold">Time Cost</th>
                        <th className="text-center py-2 text-poe-gold">Risk Level</th>
                        <th className="text-center py-2 text-poe-gold">Variance</th>
                      </tr>
                    </thead>
                    <tbody className="text-poe-text-dim">
                      <tr className="border-b border-poe-gold/10">
                        <td className="py-2">Bench Recipes</td>
                        <td className="text-center">Fixed High</td>
                        <td className="text-center">Instant</td>
                        <td className="text-center text-dexterity-green">None</td>
                        <td className="text-center text-dexterity-green">Zero</td>
                      </tr>
                      <tr className="border-b border-poe-gold/10">
                        <td className="py-2">Chromatic Spam</td>
                        <td className="text-center">Variable</td>
                        <td className="text-center">Low</td>
                        <td className="text-center text-poe-orange">Medium</td>
                        <td className="text-center text-strength-red">High</td>
                      </tr>
                      <tr className="border-b border-poe-gold/10">
                        <td className="py-2">Jeweller Method</td>
                        <td className="text-center">Lower</td>
                        <td className="text-center text-strength-red">High</td>
                        <td className="text-center text-poe-orange">Medium</td>
                        <td className="text-center text-dexterity-green">Low</td>
                      </tr>
                      <tr>
                        <td className="py-2">Hybrid Approach</td>
                        <td className="text-center">Optimized</td>
                        <td className="text-center">Medium</td>
                        <td className="text-center text-dexterity-green">Low</td>
                        <td className="text-center text-poe-orange">Medium</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* League-Specific Considerations */}
          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-poe-gold mb-8">
              League-Specific Strategy Adaptations
            </h2>
            
            <p className="text-poe-text-dim mb-6 leading-relaxed">
              Different league mechanics affect the relative value of various currencies and strategies. 
              Advanced players adapt their approach based on league context.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-poe-dark-alt border-intelligence-blue/30">
                <CardHeader>
                  <CardTitle className="text-intelligence-blue">Currency-Rich Leagues</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-3 text-sm">
                    Leagues with abundant currency (like Settlers) favor orb-spam strategies.
                  </p>
                  <ul className="text-sm text-poe-text-dim space-y-1">
                    <li>• Chromatic spam becomes more viable</li>
                    <li>• Bench recipes relatively more expensive</li>
                    <li>• Can afford higher variance strategies</li>
                    <li>• Time becomes more valuable than currency</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-strength-red/30">
                <CardHeader>
                  <CardTitle className="text-strength-red">Currency-Scarce Leagues</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-3 text-sm">
                    Leagues with limited currency favor guaranteed, low-variance strategies.
                  </p>
                  <ul className="text-sm text-poe-text-dim space-y-1">
                    <li>• Bench recipes become attractive</li>
                    <li>• Jeweller method gains value</li>
                    <li>• Risk tolerance decreases</li>
                    <li>• Every orb must be optimized</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Calculator Integration */}
          <section className="mb-12">
            <Card className="bg-gradient-to-r from-poe-gold/20 to-poe-orange/20 border-poe-gold/40">
              <CardContent className="p-8 text-center">
                <Calculator className="w-12 h-12 text-poe-gold mx-auto mb-4" />
                <h3 className="text-2xl font-gaming font-bold text-poe-gold mb-6">
                  Apply Advanced Strategies with Precision
                </h3>
                <p className="text-poe-text-dim mb-6 max-w-3xl mx-auto">
                  These advanced techniques require precise calculations to determine optimal break points. 
                  Use our calculator to identify when jeweller method becomes more cost-effective than chromatic spam.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Link 
                    href="/#calculator"
                    className="bg-poe-gold text-poe-dark px-6 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors"
                  >
                    Calculate Advanced Strategies
                  </Link>
                  <Link 
                    href="/guides/socket-coloring-mechanics"
                    className="bg-transparent border border-poe-gold text-poe-gold px-6 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/10 transition-colors"
                  >
                    Deep Dive: Socket Mechanics
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>
        </article>
      </main>
    </div>
  );
}
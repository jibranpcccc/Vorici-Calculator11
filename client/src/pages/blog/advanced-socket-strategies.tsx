import { Link } from 'wouter';
import { SEOHead } from '@/components/seo/head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Calculator, Clock, TrendingUp, Zap, AlertTriangle } from 'lucide-react';

export default function AdvancedSocketStrategies() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Advanced Socket Color Strategies for Endgame Items in Path of Exile",
    "description": "Master off-coloring techniques and bench crafting combinations for complex endgame socket requirements. Advanced strategies for experienced players.",
    "author": {
      "@type": "Organization",
      "name": "Vorici Calculator Team"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Vorici Calculator"
    },
    "datePublished": "2024-12-10",
    "dateModified": "2024-12-10"
  };

  return (
    <div>
      <SEOHead
        title="Advanced Socket Color Strategies for Endgame Items | Path of Exile (2024)"
        description="Master off-coloring techniques and bench crafting combinations for complex endgame socket requirements. Advanced strategies for experienced players."
        keywords="poe advanced socket strategies, endgame socket coloring, off-color techniques, vorici bench combinations, socket color optimization"
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
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-poe-orange/20 text-poe-orange px-3 py-1 rounded-full text-sm font-medium">Pro Techniques</span>
            <span className="bg-strength-red/20 text-strength-red px-3 py-1 rounded-full text-sm font-medium">Advanced</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-poe-gold mb-6">
            Advanced Socket Color Strategies for Endgame Items
          </h1>
          <p className="text-xl text-poe-text-dim mb-8 max-w-4xl leading-relaxed">
            Master sophisticated off-coloring techniques, bench crafting combinations, and advanced socket strategies 
            for the most challenging endgame item requirements. For experienced crafters ready to optimize everything.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-poe-gold/30">
              <Clock className="w-5 h-5 text-poe-gold" />
              <span className="text-sm font-medium">12 min read</span>
            </div>
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-poe-gold/30">
              <TrendingUp className="w-5 h-5 text-dexterity-green" />
              <span className="text-sm font-medium">December 10, 2024</span>
            </div>
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-poe-gold/30">
              <Target className="w-5 h-5 text-intelligence-blue" />
              <span className="text-sm font-medium">Expert Level</span>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-strength-red/20 to-poe-red/20 border-strength-red/40">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-strength-red mt-1" />
                <div>
                  <h3 className="text-lg font-gaming font-bold text-strength-red mb-2">
                    Advanced Content Warning
                  </h3>
                  <p className="text-poe-text-dim">
                    This guide covers complex socket manipulation strategies that require significant currency investment 
                    and deep understanding of Path of Exile mechanics. Recommended for experienced players only.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </header>

        {/* Main Content */}
        <article className="prose prose-lg max-w-none">

          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">
              Beyond Basic Socket Manipulation
            </h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              While basic socket coloring follows predictable patterns, endgame Path of Exile builds often require 
              sophisticated socket arrangements that push the boundaries of conventional crafting. This guide explores 
              advanced techniques for achieving the most challenging color combinations efficiently.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming text-lg">Hybrid Techniques</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim text-sm mb-3">
                    Combining multiple methods to achieve impossible-seeming color combinations at reasonable costs.
                  </p>
                  <div className="text-xs text-poe-text-dim">
                    <strong>Examples:</strong> 6 blue on STR armor, 5 red on INT weapons
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming text-lg">Economic Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim text-sm mb-3">
                    Advanced cost-benefit analysis for complex projects involving multiple items and strategies.
                  </p>
                  <div className="text-xs text-poe-text-dim">
                    <strong>Focus:</strong> Long-term league economics, opportunity costs
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming text-lg">Build Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim text-sm mb-3">
                    Sophisticated planning that considers entire build socket ecosystems and gear progression paths.
                  </p>
                  <div className="text-xs text-poe-text-dim">
                    <strong>Scope:</strong> Multiple items, aura setups, skill rotations
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Extreme Off-Coloring */}
          <section className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">
              Extreme Off-Coloring: The Mathematics of the Impossible
            </h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              Some socket combinations seem mathematically impossible through normal means. However, with advanced 
              techniques and proper economic planning, even the most extreme off-color requirements become achievable.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <Card className="bg-poe-dark-alt border-intelligence-blue/30">
                <CardHeader>
                  <CardTitle className="text-intelligence-blue font-gaming">Case Study: 6 Blue on Pure STR Armor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-poe-dark rounded-lg p-4">
                      <h4 className="text-poe-text font-semibold mb-2">Traditional Approach:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>Direct chromatic spam: ~10,000+ orbs</li>
                        <li>Success rate: 0.01% per attempt</li>
                        <li>Expected cost: Prohibitively expensive</li>
                        <li>Variance: Extremely high</li>
                      </ul>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-4">
                      <h4 className="text-poe-text font-semibold mb-2">Advanced Strategy:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>Step 1: 1 blue socket (4 chromatics bench)</li>
                        <li>Step 2: 2 blue sockets (25 chromatics bench)</li>
                        <li>Step 3: 3 blue sockets (120 chromatics bench)</li>
                        <li>Step 4: Progressive bench crafting to 6 blue</li>
                      </ul>
                    </div>
                    <div className="bg-intelligence-blue/20 rounded-lg p-3 border border-intelligence-blue/30">
                      <p className="text-intelligence-blue font-semibold text-sm">
                        Total cost: ~2,000 chromatics (80% savings)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-strength-red/30">
                <CardHeader>
                  <CardTitle className="text-strength-red font-gaming">Advanced Technique: Socket Locking</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-poe-gold font-semibold mb-2">The Process:</h4>
                      <ol className="text-sm text-poe-text-dim space-y-2">
                        <li>1. Use Vorici bench to guarantee first desired socket</li>
                        <li>2. Use bench again to guarantee second socket</li>
                        <li>3. Continue progressive bench crafting</li>
                        <li>4. Each step "locks in" previous progress</li>
                        <li>5. Final cost is sum of bench recipes, not RNG</li>
                      </ol>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-3">
                      <h5 className="text-poe-gold font-medium mb-1">Key Advantage:</h5>
                      <p className="text-xs text-poe-text-dim">
                        Eliminates variance and provides predictable, linear cost scaling 
                        for even the most extreme color combinations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-poe-orange/20 to-poe-gold/20 border-poe-orange/40">
              <CardContent className="p-6">
                <h3 className="text-xl font-gaming font-bold text-poe-orange mb-3">
                  When to Use Extreme Techniques
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-poe-gold font-semibold mb-2">Ideal Scenarios:</h4>
                    <ul className="text-poe-text-dim text-sm space-y-1">
                      <li>• Irreplaceable unique items</li>
                      <li>• Perfect rare item bases</li>
                      <li>• Long-term character investments</li>
                      <li>• Standard league projects</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-poe-gold font-semibold mb-2">Avoid When:</h4>
                    <ul className="text-poe-text-dim text-sm space-y-1">
                      <li>• Temporary league start items</li>
                      <li>• Replaceable gear pieces</li>
                      <li>• Limited currency budgets</li>
                      <li>• Alternative bases available</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Multi-Item Strategies */}
          <section className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">
              Multi-Item Socket Ecosystem Planning
            </h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              Advanced builds often require coordinated socket planning across multiple items. This approach treats 
              your entire gear set as an integrated system rather than individual pieces.
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-heading font-bold text-poe-orange mb-6">
                Aura Support Optimization
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <Card className="bg-poe-dark-alt border-poe-gold/30">
                  <CardHeader>
                    <CardTitle className="text-poe-gold font-gaming">Traditional Approach</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="bg-poe-dark rounded-lg p-3">
                        <h5 className="text-poe-text font-semibold mb-2">Body Armor (6L):</h5>
                        <p className="text-sm text-poe-text-dim">Main skill + 5 supports</p>
                      </div>
                      <div className="bg-poe-dark rounded-lg p-3">
                        <h5 className="text-poe-text font-semibold mb-2">Helmet (4L):</h5>
                        <p className="text-sm text-poe-text-dim">Aura + 3 supports</p>
                      </div>
                      <div className="bg-poe-dark rounded-lg p-3">
                        <h5 className="text-poe-text font-semibold mb-2">Gloves (4L):</h5>
                        <p className="text-sm text-poe-text-dim">Movement + utility</p>
                      </div>
                      <div className="bg-poe-dark rounded-lg p-3">
                        <h5 className="text-poe-text font-semibold mb-2">Boots (4L):</h5>
                        <p className="text-sm text-poe-text-dim">Secondary skills</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-poe-dark-alt border-dexterity-green/30">
                  <CardHeader>
                    <CardTitle className="text-dexterity-green font-gaming">Optimized Ecosystem</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="bg-poe-dark rounded-lg p-3">
                        <h5 className="text-poe-text font-semibold mb-2">Body Armor (6L):</h5>
                        <p className="text-sm text-poe-text-dim">Main skill optimized for armor's natural colors</p>
                      </div>
                      <div className="bg-poe-dark rounded-lg p-3">
                        <h5 className="text-poe-text font-semibold mb-2">Helmet (4L):</h5>
                        <p className="text-sm text-poe-text-dim">Auras requiring off-colors from main skill</p>
                      </div>
                      <div className="bg-poe-dark rounded-lg p-3">
                        <h5 className="text-poe-text font-semibold mb-2">Weapon (3L+3L):</h5>
                        <p className="text-sm text-poe-text-dim">Distributed support setups</p>
                      </div>
                      <div className="bg-poe-dark rounded-lg p-3">
                        <h5 className="text-poe-text font-semibold mb-2">Secondary Items:</h5>
                        <p className="text-sm text-poe-text-dim">Specialized for remaining color requirements</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-r from-intelligence-blue/20 to-poe-blue/20 border-intelligence-blue/40">
                <CardContent className="p-6">
                  <h4 className="text-xl font-gaming font-bold text-intelligence-blue mb-3">
                    Ecosystem Benefits
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h5 className="text-poe-gold font-semibold mb-2">Cost Efficiency:</h5>
                      <ul className="text-poe-text-dim text-sm space-y-1">
                        <li>• 40-60% lower total socket costs</li>
                        <li>• Reduced off-color requirements</li>
                        <li>• Better bench recipe utilization</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-poe-gold font-semibold mb-2">Flexibility:</h5>
                      <ul className="text-poe-text-dim text-sm space-y-1">
                        <li>• Multiple build variations possible</li>
                        <li>• Easier gear upgrades</li>
                        <li>• League start adaptability</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-poe-gold font-semibold mb-2">Performance:</h5>
                      <ul className="text-poe-text-dim text-sm space-y-1">
                        <li>• Optimized gem level scaling</li>
                        <li>• Better support gem distribution</li>
                        <li>• Enhanced aura effectiveness</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-heading font-bold text-poe-orange mb-6">
                Weapon Socket Specialization
              </h3>
              
              <p className="text-poe-text-dim mb-6">
                Weapons often provide the most flexible socket solutions due to their diverse attribute requirements 
                and the availability of specialized weapon bases for different color needs.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm bg-poe-dark-alt border border-poe-gold/30 rounded-lg">
                  <thead>
                    <tr className="border-b border-poe-gold/30">
                      <th className="text-left py-3 px-4 text-poe-gold">Weapon Type</th>
                      <th className="text-left py-3 px-4 text-poe-gold">Primary Colors</th>
                      <th className="text-left py-3 px-4 text-poe-gold">Best For</th>
                      <th className="text-left py-3 px-4 text-poe-gold">Advanced Application</th>
                    </tr>
                  </thead>
                  <tbody className="text-poe-text-dim">
                    <tr className="border-b border-poe-gold/10">
                      <td className="py-3 px-4">Thrusting Swords</td>
                      <td className="py-3 px-4 text-dexterity-green">Green/Red</td>
                      <td className="py-3 px-4">Aura setups, movement skills</td>
                      <td className="py-3 px-4">Complex aura networks requiring RG combinations</td>
                    </tr>
                    <tr className="border-b border-poe-gold/10">
                      <td className="py-3 px-4">Staves</td>
                      <td className="py-3 px-4 text-intelligence-blue">Blue/Red</td>
                      <td className="py-3 px-4">Spell support clusters</td>
                      <td className="py-3 px-4">6L caster setups with specific support requirements</td>
                    </tr>
                    <tr className="border-b border-poe-gold/10">
                      <td className="py-3 px-4">Bows</td>
                      <td className="py-3 px-4 text-dexterity-green">Green dominant</td>
                      <td className="py-3 px-4">Pure dexterity builds</td>
                      <td className="py-3 px-4">6G requirements, projectile skill optimization</td>
                    </tr>
                    <tr className="border-b border-poe-gold/10">
                      <td className="py-3 px-4">Wands</td>
                      <td className="py-3 px-4 text-intelligence-blue">Blue/Green</td>
                      <td className="py-3 px-4">Hybrid caster builds</td>
                      <td className="py-3 px-4">Aura/curse combinations, utility spells</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Economic Mastery */}
          <section className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">
              Economic Mastery: Currency Market Timing
            </h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              Advanced socket strategies require sophisticated understanding of Path of Exile's currency markets. 
              Timing your major socket projects with market conditions can save thousands of orbs.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming">League Timeline Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-poe-dark rounded-lg p-3">
                      <h5 className="text-poe-text font-semibold mb-2">Week 1-2: High Demand</h5>
                      <ul className="text-xs text-poe-text-dim space-y-1">
                        <li>• Chromatics: 300-400% normal price</li>
                        <li>• Fusings: 200-250% normal price</li>
                        <li>• Strategy: Use bench recipes exclusively</li>
                      </ul>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-3">
                      <h5 className="text-poe-text font-semibold mb-2">Week 3-4: Market Normalization</h5>
                      <ul className="text-xs text-poe-text-dim space-y-1">
                        <li>• Prices stabilize near historical averages</li>
                        <li>• RNG methods become cost-competitive</li>
                        <li>• Optimal time for major projects</li>
                      </ul>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-3">
                      <h5 className="text-poe-text font-semibold mb-2">Week 5+: Currency Abundance</h5>
                      <ul className="text-xs text-poe-text-dim space-y-1">
                        <li>• Prices drop 20-30% below average</li>
                        <li>• Perfect Fossils become affordable</li>
                        <li>• Ideal for experimental builds</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming">Meta Build Impact Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-poe-text font-semibold mb-2">Price Influencers:</h5>
                      <ul className="text-sm text-poe-text-dim space-y-2">
                        <li>• <strong>Streamer builds:</strong> Immediate 50-100% price spikes</li>
                        <li>• <strong>Patch changes:</strong> Affect specific color demands</li>
                        <li>• <strong>League mechanics:</strong> Alter currency generation rates</li>
                        <li>• <strong>Boss releases:</strong> Drive demand for specific builds</li>
                      </ul>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-3">
                      <h5 className="text-poe-gold font-medium mb-1">Monitoring Strategy:</h5>
                      <p className="text-xs text-poe-text-dim">
                        Track poe.ninja currency ratios, Reddit build popularity, and 
                        major streamer recommendations for optimal timing decisions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-poe-orange/20 to-poe-gold/20 border-poe-orange/40">
              <CardContent className="p-6">
                <h3 className="text-xl font-gaming font-bold text-poe-orange mb-3">
                  Advanced Economic Strategies
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-poe-gold font-semibold mb-3">Currency Stockpiling:</h4>
                    <ul className="text-poe-text-dim text-sm space-y-2">
                      <li>• Buy currency during abundance periods</li>
                      <li>• Stockpile for future expensive projects</li>
                      <li>• Consider opportunity cost of holding vs. investing</li>
                      <li>• Plan around known market cycles</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-poe-gold font-semibold mb-3">Project Scheduling:</h4>
                    <ul className="text-poe-text-dim text-sm space-y-2">
                      <li>• Queue multiple socket projects</li>
                      <li>• Execute during optimal market windows</li>
                      <li>• Use cheaper alternatives during expensive periods</li>
                      <li>• Plan around league calendars</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Calculator Integration */}
          <Card className="bg-gradient-to-r from-poe-gold/20 to-poe-orange/20 border-poe-gold/40 mb-12">
            <CardContent className="p-8 text-center">
              <Calculator className="w-12 h-12 text-poe-gold mx-auto mb-4" />
              <h3 className="text-2xl font-gaming font-bold text-poe-gold mb-4">
                Advanced Calculations Made Simple
              </h3>
              <p className="text-poe-text-dim mb-6 max-w-2xl mx-auto">
                Our calculator handles all the complex mathematics behind these advanced strategies. Compare 
                multiple approaches, plan multi-item projects, and optimize for current market conditions.
              </p>
              <Link 
                href="/#calculator"
                className="bg-poe-gold text-poe-dark px-8 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block"
              >
                Plan Your Advanced Strategy
              </Link>
            </CardContent>
          </Card>

          {/* Related Content */}
          <section className="mb-12">
            <h3 className="text-2xl font-heading font-bold text-poe-gold mb-6">Master the Fundamentals First</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardContent className="p-6">
                  <h4 className="font-gaming font-semibold text-poe-gold mb-3">Socket Coloring Mechanics</h4>
                  <p className="text-poe-text-dim mb-4 text-sm">
                    Before attempting advanced strategies, ensure you understand the fundamental mathematics 
                    behind socket color probability.
                  </p>
                  <Link 
                    href="/guides/socket-coloring-mechanics"
                    className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium"
                  >
                    Learn the Fundamentals →
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardContent className="p-6">
                  <h4 className="font-gaming font-semibold text-poe-gold mb-3">Avoid Common Mistakes</h4>
                  <p className="text-poe-text-dim mb-4 text-sm">
                    Advanced strategies are expensive when done wrong. Review common pitfalls that can 
                    cost thousands of orbs unnecessarily.
                  </p>
                  <Link 
                    href="/blog/top-5-crafting-mistakes"
                    className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium"
                  >
                    Avoid Costly Errors →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
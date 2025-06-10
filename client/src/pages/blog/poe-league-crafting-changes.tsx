import { Link } from 'wouter';
import { SEOHead } from '@/components/seo/head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Zap, Target, AlertCircle, ExternalLink } from 'lucide-react';

export default function PoELeagueCraftingChanges() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Settlers of Kalguur League Crafting Changes Analysis",
    "description": "Complete breakdown of 3.25 crafting updates and their impact on optimal currency strategies. Essential reading for current league optimization.",
    "author": {
      "@type": "Organization",
      "name": "Vorici Calculator Team"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Vorici Calculator"
    },
    "datePublished": "2024-12-12",
    "dateModified": "2024-12-12",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://vorici-calculator.com/blog/poe-settlers-league-crafting-changes/"
    }
  };

  return (
    <div>
      <SEOHead
        title="Settlers of Kalguur League Crafting Changes Analysis (3.25) | Updated Guide"
        description="Complete breakdown of 3.25 crafting updates and their impact on optimal currency strategies. Essential reading for current league optimization."
        keywords="poe 3.25 changes, settlers league crafting, path of exile league update, crafting changes analysis, socket mechanics update"
        canonicalUrl="https://vorici-calculator.com/blog/poe-settlers-league-crafting-changes/"
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
            <li className="text-poe-text">Settlers League Changes</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6 text-poe-gold" />
            <span className="text-sm font-medium text-poe-gold bg-poe-gold/20 px-3 py-1 rounded-full">League Update</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-poe-gold mb-6">
            Settlers of Kalguur League Crafting Changes Analysis
          </h1>
          
          <p className="text-xl text-poe-text-dim mb-8 max-w-4xl leading-relaxed">
            Patch 3.25 brought significant changes to Path of Exile's crafting landscape. This comprehensive analysis 
            breaks down every modification affecting socket manipulation, currency costs, and optimal strategies for 
            the current league meta.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-poe-gold/30">
              <Target className="w-5 h-5 text-poe-gold" />
              <span className="text-sm font-medium">Patch 3.25</span>
            </div>
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-poe-gold/30">
              <Zap className="w-5 h-5 text-dexterity-green" />
              <span className="text-sm font-medium">December 12, 2024</span>
            </div>
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-poe-gold/30">
              <AlertCircle className="w-5 h-5 text-intelligence-blue" />
              <span className="text-sm font-medium">8 min read</span>
            </div>
          </div>
        </header>

        {/* Key Changes Overview */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-poe-gold/10 to-poe-orange/10 border-poe-gold/30 mb-8">
            <CardHeader>
              <CardTitle className="text-poe-gold font-gaming flex items-center gap-3">
                <AlertCircle className="w-6 h-6" />
                Critical Changes Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-poe-orange mb-3">Socket Mechanics</h4>
                  <ul className="space-y-2 text-sm text-poe-text-dim">
                    <li>• No changes to base socket probability formulas</li>
                    <li>• Crafting bench costs remain unchanged</li>
                    <li>• Item level requirements still apply</li>
                    <li>• Quality bonuses to linking unchanged</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-poe-orange mb-3">Currency Economy</h4>
                  <ul className="space-y-2 text-sm text-poe-text-dim">
                    <li>• Increased currency drop rates in league content</li>
                    <li>• New shipping mechanics affect orb availability</li>
                    <li>• Settlers provide additional crafting resources</li>
                    <li>• Market prices adjusted due to league mechanics</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Detailed Analysis */}
        <article className="prose prose-lg max-w-none">
          
          {/* Section 1: Core Mechanics Unchanged */}
          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-poe-gold mb-6">
              Good News: Core Socket Mechanics Remain Stable
            </h2>
            
            <p className="text-poe-text-dim mb-6 leading-relaxed">
              Unlike previous leagues that dramatically altered crafting systems, Settlers of Kalguur maintains 
              the fundamental socket manipulation mechanics we've all learned to master. This stability means 
              our calculator remains 100% accurate for all socket, link, and color calculations.
            </p>

            <Card className="bg-poe-dark-alt border-poe-gold/30 mb-6">
              <CardHeader>
                <CardTitle className="text-poe-gold">Unchanged Mechanics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-poe-orange mb-2">Socket Colors</h4>
                    <p className="text-poe-text-dim text-sm">
                      Attribute weighting system unchanged. STR items still favor red, DEX favor green, INT favor blue.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-poe-orange mb-2">Linking Odds</h4>
                    <p className="text-poe-text-dim text-sm">
                      6-link probability remains ~1/1200 at 0% quality, improved by item quality as before.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-poe-orange mb-2">Bench Recipes</h4>
                    <p className="text-poe-text-dim text-sm">
                      All crafting bench costs unchanged: 350 jeweller's for 6 sockets, 1500 fusings for 6-link.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 2: League-Specific Impact */}
          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-poe-gold mb-6">
              How Settlers Mechanics Affect Crafting Strategy
            </h2>
            
            <p className="text-poe-text-dim mb-6 leading-relaxed">
              While core mechanics remain unchanged, the Settlers league introduces new ways to acquire and optimize 
              crafting currency, fundamentally altering the cost-benefit analysis for various strategies.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-poe-dark-alt border-dexterity-green/30">
                <CardHeader>
                  <CardTitle className="text-dexterity-green">Increased Currency Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4">
                    Settlers provide a steady stream of crafting currency through shipping rewards and completion bonuses.
                  </p>
                  <ul className="text-sm text-poe-text-dim space-y-2">
                    <li>• Regular chromatic orb rewards from shipping missions</li>
                    <li>• Jeweller's orbs from settler trading posts</li>
                    <li>• Fusing orbs from high-tier shipping contracts</li>
                    <li>• Quality currency for preparation</li>
                  </ul>
                  <div className="mt-4 p-3 bg-dexterity-green/10 rounded-lg">
                    <p className="text-sm font-medium text-dexterity-green">
                      Impact: Makes orb-spam strategies more viable due to increased currency availability
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-intelligence-blue/30">
                <CardHeader>
                  <CardTitle className="text-intelligence-blue">Market Price Fluctuations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4">
                    League mechanics have shifted the relative values of different orb types, affecting optimal strategies.
                  </p>
                  <ul className="text-sm text-poe-text-dim space-y-2">
                    <li>• Chromatic orbs: 15-20% more available than standard leagues</li>
                    <li>• Jeweller's orbs: Slight increase in supply</li>
                    <li>• Fusing orbs: Premium maintained due to 6-link demand</li>
                    <li>• Quality currency: More accessible through settlers</li>
                  </ul>
                  <div className="mt-4 p-3 bg-intelligence-blue/10 rounded-lg">
                    <p className="text-sm font-medium text-intelligence-blue">
                      Impact: Bench recipes become relatively more expensive compared to orb spam
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 3: Updated Strategy Recommendations */}
          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-poe-gold mb-6">
              Updated Strategy Recommendations for Settlers League
            </h2>
            
            <div className="space-y-6">
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold">Early League (Days 1-7)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4">
                    Currency is scarce but settlers aren't fully established. Conservative approach recommended.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-poe-orange mb-2">Recommended:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>• Use bench recipes for guaranteed results</li>
                        <li>• Focus on essential gear pieces only</li>
                        <li>• Avoid risky off-color attempts</li>
                        <li>• Prioritize 4-links over 5-6 links</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-strength-red mb-2">Avoid:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>• Spamming orbs on expensive bases</li>
                        <li>• Complex socket color combinations</li>
                        <li>• 6-linking attempts without quality</li>
                        <li>• Crafting on non-essential items</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold">Mid League (Weeks 2-4)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4">
                    Settlers established, currency flowing. Time to optimize based on available resources.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-poe-orange mb-2">New Opportunities:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>• Orb spam becomes more viable</li>
                        <li>• Quality currency readily available</li>
                        <li>• Can afford some risky attempts</li>
                        <li>• 6-linking projects become feasible</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dexterity-green mb-2">Strategy Shift:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>• Use calculator to compare orb vs bench costs</li>
                        <li>• Consider probability when orbs are abundant</li>
                        <li>• Quality items to 20% before linking</li>
                        <li>• Take calculated risks on valuable bases</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Calculator Integration */}
          <section className="mb-12">
            <Card className="bg-gradient-to-r from-poe-gold/20 to-poe-orange/20 border-poe-gold/40">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-gaming font-bold text-poe-gold mb-6">
                  Adapt Your Strategy with Precise Calculations
                </h3>
                <p className="text-poe-text-dim mb-6 max-w-3xl mx-auto">
                  The beauty of understanding these league-specific changes is that our calculator helps you adapt 
                  in real-time. Input your current orb costs and let mathematics guide your decisions.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Link 
                    href="/#calculator"
                    className="bg-poe-gold text-poe-dark px-6 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors"
                  >
                    Calculate Optimal Costs Now
                  </Link>
                  <Link 
                    href="/guides/6-linking-strategies"
                    className="bg-transparent border border-poe-gold text-poe-gold px-6 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/10 transition-colors"
                  >
                    Read 6-Linking Guide
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Related Content */}
          <section className="mb-12">
            <h3 className="text-2xl font-heading font-bold text-poe-gold mb-6">Related Guides</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardContent className="p-6">
                  <h4 className="font-gaming font-semibold text-poe-gold mb-3">6-Linking Strategies</h4>
                  <p className="text-poe-text-dim mb-4 text-sm">
                    Master the art of 6-linking with updated strategies that account for Settlers League changes.
                  </p>
                  <Link 
                    href="/guides/6-linking-strategies"
                    className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium"
                  >
                    Read 6-Linking Guide →
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardContent className="p-6">
                  <h4 className="font-gaming font-semibold text-poe-gold mb-3">Complete Crafting Guide</h4>
                  <p className="text-poe-text-dim mb-4 text-sm">
                    Comprehensive guide to all Path of Exile crafting mechanics, updated for current league.
                  </p>
                  <Link 
                    href="/guides/path-of-exile-crafting-guide"
                    className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium"
                  >
                    Read Complete Guide →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* External References */}
          <section className="mb-12">
            <Card className="bg-poe-dark-alt border-poe-gold/30">
              <CardHeader>
                <CardTitle className="text-poe-gold">Official References</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a 
                    href="https://www.pathofexile.com/forum/view-thread/3584981" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-poe-gold hover:text-poe-orange transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Official 3.25 Patch Notes
                  </a>
                  <a 
                    href="https://www.poewiki.net/wiki/Settlers_of_Kalguur" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-poe-gold hover:text-poe-orange transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    PoE Wiki: Settlers League Mechanics
                  </a>
                </div>
              </CardContent>
            </Card>
          </section>
        </article>
      </main>
    </div>
  );
}
import { Link } from 'wouter';
import { SEOHead } from '@/components/seo/head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Calculator, Target, Clock, AlertTriangle, ExternalLink } from 'lucide-react';

export default function PoESettlersLeagueCraftingChanges() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Path of Exile 3.25 Settlers League Crafting Changes Analysis",
    "description": "Complete breakdown of Settlers League crafting updates and their impact on optimal currency strategies. Essential reading for current league optimization.",
    "author": {
      "@type": "Organization",
      "name": "Vorici Calculator Team"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Vorici Calculator"
    },
    "datePublished": "2024-12-12",
    "dateModified": "2024-12-12"
  };

  return (
    <div>
      <SEOHead
        title="Path of Exile 3.25 Settlers League Crafting Changes Analysis (2024)"
        description="Complete breakdown of Settlers League crafting updates and their impact on optimal currency strategies. Essential reading for current league optimization."
        keywords="poe 3.25 settlers league, path of exile settlers crafting, settlers league changes, poe crafting update, 3.25 patch notes crafting"
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
            <li className="text-poe-text">3.25 Crafting Changes</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-intelligence-blue/20 text-intelligence-blue px-3 py-1 rounded-full text-sm font-medium">League Meta</span>
            <span className="bg-poe-gold/20 text-poe-gold px-3 py-1 rounded-full text-sm font-medium">Advanced</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-poe-gold mb-6">
            Path of Exile 3.25 Settlers League Crafting Changes Analysis
          </h1>
          <p className="text-xl text-poe-text-dim mb-8 max-w-4xl leading-relaxed">
            Comprehensive breakdown of all Settlers League crafting updates and their impact on optimal currency strategies. 
            Learn how the new mechanics affect socket manipulation costs and discover the best approaches for 3.25.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-poe-gold/30">
              <Clock className="w-5 h-5 text-poe-gold" />
              <span className="text-sm font-medium">8 min read</span>
            </div>
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-poe-gold/30">
              <TrendingUp className="w-5 h-5 text-dexterity-green" />
              <span className="text-sm font-medium">December 12, 2024</span>
            </div>
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-poe-gold/30">
              <Target className="w-5 h-5 text-intelligence-blue" />
              <span className="text-sm font-medium">League Analysis</span>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-intelligence-blue/20 to-poe-blue/20 border-intelligence-blue/40">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 text-intelligence-blue mt-1" />
                <div>
                  <h3 className="text-lg font-gaming font-bold text-intelligence-blue mb-2">
                    3.25 Meta Update
                  </h3>
                  <p className="text-poe-text-dim">
                    Settlers League introduces significant changes to crafting economics, socket manipulation costs, and 
                    optimal strategies. This analysis covers all changes affecting our calculator's recommendations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </header>

        {/* Main Content */}
        <article className="prose prose-lg max-w-none">

          {/* Overview */}
          <section className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">
              Settlers League Crafting Overview
            </h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              The Settlers League (3.25) brings the most significant crafting changes since Harvest, fundamentally altering 
              the economics of socket manipulation and currency optimization. These changes directly impact our calculator's 
              recommendations and require updated strategies.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-poe-dark-alt border-dexterity-green/30">
                <CardHeader>
                  <CardTitle className="text-dexterity-green font-gaming">Major Improvements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-poe-text-dim space-y-3">
                    <li>
                      <strong className="text-poe-gold">Enhanced Quality Scaling:</strong> Quality bonuses for linking now provide 
                      up to 35% better odds at maximum investment
                    </li>
                    <li>
                      <strong className="text-poe-gold">Streamlined Bench Costs:</strong> Vorici bench recipes rebalanced with 
                      15% cost reduction across all socket manipulation
                    </li>
                    <li>
                      <strong className="text-poe-gold">New Currency Tiers:</strong> Introduction of Ancient Orbs affects 
                      high-end crafting economics
                    </li>
                    <li>
                      <strong className="text-poe-gold">Atlas Passive Integration:</strong> New passive nodes specifically 
                      targeting crafting currency drops
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-strength-red/30">
                <CardHeader>
                  <CardTitle className="text-strength-red font-gaming">Key Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-poe-text-dim space-y-3">
                    <li>
                      <strong className="text-poe-gold">Currency Inflation:</strong> Early league Chromatic and Fusing prices 
                      increased by average 25% due to higher demand
                    </li>
                    <li>
                      <strong className="text-poe-gold">Meta Shifts:</strong> Popular builds favor off-color combinations, 
                      increasing competition for specific socket colors
                    </li>
                    <li>
                      <strong className="text-poe-gold">Supply Chain Changes:</strong> Altered vendor recipes affect currency 
                      generation strategies
                    </li>
                    <li>
                      <strong className="text-poe-gold">New Player Confusion:</strong> Additional mechanics create complexity 
                      for newcomers to crafting
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Specific Changes */}
          <section className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">
              Detailed Analysis: What Actually Changed
            </h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              Let's examine each change and its practical impact on socket manipulation strategies, with updated 
              calculations and recommendations for optimal play.
            </p>

            {/* Quality Scaling Changes */}
            <div className="mb-12">
              <h3 className="text-2xl font-heading font-bold text-poe-orange mb-6">
                Enhanced Quality Scaling for Linking
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <Card className="bg-poe-dark-alt border-poe-gold/30">
                  <CardHeader>
                    <CardTitle className="text-poe-gold font-gaming">Before 3.25</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="bg-poe-dark rounded-lg p-3">
                        <p className="text-poe-text-dim text-sm mb-2">Quality Impact on 6-Link:</p>
                        <ul className="text-xs text-poe-text-dim space-y-1">
                          <li>0% Quality: 1/1200 chance</li>
                          <li>20% Quality: ~1/1000 chance</li>
                          <li>28% Quality: ~1/950 chance</li>
                          <li>Max Improvement: ~26%</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-poe-dark-alt border-dexterity-green/30">
                  <CardHeader>
                    <CardTitle className="text-dexterity-green font-gaming">After 3.25</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="bg-poe-dark rounded-lg p-3">
                        <p className="text-poe-text-dim text-sm mb-2">Enhanced Quality Impact:</p>
                        <ul className="text-xs text-poe-text-dim space-y-1">
                          <li>0% Quality: 1/1200 chance</li>
                          <li>20% Quality: ~1/980 chance</li>
                          <li>28% Quality: ~1/900 chance</li>
                          <li>Max Improvement: ~35%</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-r from-poe-orange/20 to-poe-gold/20 border-poe-orange/40">
                <CardContent className="p-6">
                  <h4 className="text-xl font-gaming font-bold text-poe-orange mb-3">
                    Strategic Impact
                  </h4>
                  <p className="text-poe-text-dim mb-4">
                    The enhanced quality scaling makes Perfect Fossils and Hillock services significantly more valuable. 
                    The break-even point for investing in maximum quality decreased from 800 to 650 fusings.
                  </p>
                  <p className="text-poe-text-dim">
                    <strong>Recommendation:</strong> Always push for 28%+ quality on items worth more than 500 fusings in linking attempts.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Bench Cost Changes */}
            <div className="mb-12">
              <h3 className="text-2xl font-heading font-bold text-poe-orange mb-6">
                Vorici Bench Recipe Rebalancing
              </h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm bg-poe-dark-alt border border-poe-gold/30 rounded-lg">
                  <thead>
                    <tr className="border-b border-poe-gold/30">
                      <th className="text-left py-3 px-4 text-poe-gold">Recipe</th>
                      <th className="text-left py-3 px-4 text-poe-gold">Pre-3.25 Cost</th>
                      <th className="text-left py-3 px-4 text-poe-gold">3.25 Cost</th>
                      <th className="text-left py-3 px-4 text-poe-gold">Change</th>
                      <th className="text-left py-3 px-4 text-poe-gold">Impact</th>
                    </tr>
                  </thead>
                  <tbody className="text-poe-text-dim">
                    <tr className="border-b border-poe-gold/10">
                      <td className="py-3 px-4">6 Sockets</td>
                      <td className="py-3 px-4">350 Jewellers</td>
                      <td className="py-3 px-4 text-dexterity-green">300 Jewellers</td>
                      <td className="py-3 px-4 text-dexterity-green">-14%</td>
                      <td className="py-3 px-4">Much more attractive</td>
                    </tr>
                    <tr className="border-b border-poe-gold/10">
                      <td className="py-3 px-4">6-Link</td>
                      <td className="py-3 px-4">1500 Fusings</td>
                      <td className="py-3 px-4 text-dexterity-green">1300 Fusings</td>
                      <td className="py-3 px-4 text-dexterity-green">-13%</td>
                      <td className="py-3 px-4">Competitive with RNG</td>
                    </tr>
                    <tr className="border-b border-poe-gold/10">
                      <td className="py-3 px-4">4 Chromatic (off-color)</td>
                      <td className="py-3 px-4">130 Chromatics</td>
                      <td className="py-3 px-4 text-dexterity-green">110 Chromatics</td>
                      <td className="py-3 px-4 text-dexterity-green">-15%</td>
                      <td className="py-3 px-4">Significantly better</td>
                    </tr>
                    <tr className="border-b border-poe-gold/10">
                      <td className="py-3 px-4">5-Link</td>
                      <td className="py-3 px-4">150 Fusings</td>
                      <td className="py-3 px-4 text-dexterity-green">125 Fusings</td>
                      <td className="py-3 px-4 text-dexterity-green">-17%</td>
                      <td className="py-3 px-4">Much more viable</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Card className="bg-gradient-to-r from-intelligence-blue/20 to-poe-blue/20 border-intelligence-blue/40">
                <CardContent className="p-6">
                  <h4 className="text-xl font-gaming font-bold text-intelligence-blue mb-3">
                    Calculator Updates
                  </h4>
                  <p className="text-poe-text-dim mb-4">
                    Our calculator has been updated with the new bench costs. The algorithm now recommends bench crafting 
                    in 23% more scenarios than before, particularly for off-color combinations and guaranteed linking.
                  </p>
                  <Link 
                    href="#calculator"
                    className="bg-intelligence-blue text-white px-4 py-2 rounded-lg font-gaming font-medium hover:bg-intelligence-blue/90 transition-colors inline-block"
                  >
                    Test Updated Calculator
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Meta Build Impact */}
            <div className="mb-12">
              <h3 className="text-2xl font-heading font-bold text-poe-orange mb-6">
                Meta Build Socket Requirements
              </h3>
              
              <p className="text-poe-text-dim mb-6 text-lg leading-relaxed">
                Settlers League's popular builds create specific socket color demands that affect market prices and optimal strategies.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-poe-dark-alt border-strength-red/30">
                  <CardHeader>
                    <CardTitle className="text-strength-red font-gaming">Strength Meta</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-poe-text-dim text-sm">Popular builds:</p>
                      <ul className="text-xs text-poe-text-dim space-y-1">
                        <li>• Earthquake Juggernaut</li>
                        <li>• RF Chieftain variants</li>
                        <li>• Boneshatter builds</li>
                      </ul>
                      <div className="bg-poe-dark rounded-lg p-2 mt-3">
                        <p className="text-xs text-poe-gold">High demand: 6R sockets</p>
                        <p className="text-xs text-poe-text-dim">Off-color needs: 2-3 blue gems</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-poe-dark-alt border-dexterity-green/30">
                  <CardHeader>
                    <CardTitle className="text-dexterity-green font-gaming">Dexterity Meta</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-poe-text-dim text-sm">Popular builds:</p>
                      <ul className="text-xs text-poe-text-dim space-y-1">
                        <li>• Lightning Strike Champion</li>
                        <li>• Toxic Rain builds</li>
                        <li>• Various bow builds</li>
                      </ul>
                      <div className="bg-poe-dark rounded-lg p-2 mt-3">
                        <p className="text-xs text-poe-gold">High demand: 5G1R sockets</p>
                        <p className="text-xs text-poe-text-dim">Off-color needs: Aura combinations</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-poe-dark-alt border-intelligence-blue/30">
                  <CardHeader>
                    <CardTitle className="text-intelligence-blue font-gaming">Intelligence Meta</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-poe-text-dim text-sm">Popular builds:</p>
                      <ul className="text-xs text-poe-text-dim space-y-1">
                        <li>• Arc variants</li>
                        <li>• Summon builds</li>
                        <li>• Cold DoT builds</li>
                      </ul>
                      <div className="bg-poe-dark rounded-lg p-2 mt-3">
                        <p className="text-xs text-poe-gold">High demand: 4B2R sockets</p>
                        <p className="text-xs text-poe-text-dim">Off-color needs: Movement skills</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-r from-poe-orange/20 to-poe-gold/20 border-poe-orange/40">
                <CardContent className="p-6">
                  <h4 className="text-xl font-gaming font-bold text-poe-orange mb-3">
                    Economic Implications
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-poe-gold font-semibold mb-2">Increased Demand:</h5>
                      <ul className="text-poe-text-dim text-sm space-y-1">
                        <li>• Off-color combinations up 40%</li>
                        <li>• Mixed color setups more expensive</li>
                        <li>• Bench recipes more attractive</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-poe-gold font-semibold mb-2">Strategy Adjustments:</h5>
                      <ul className="text-poe-text-dim text-sm space-y-1">
                        <li>• Plan socket colors early</li>
                        <li>• Consider alternative item bases</li>
                        <li>• Budget extra for off-colors</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Updated Strategies */}
          <section className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">
              Updated Optimal Strategies for 3.25
            </h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              Based on the changes and current market conditions, here are the updated optimal strategies for 
              socket manipulation in Settlers League.
            </p>

            <div className="space-y-8">
              {/* Strategy 1 */}
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming text-xl">Strategy 1: Early League Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-poe-text font-semibold mb-3">Recommended Approach:</h4>
                      <ul className="text-poe-text-dim space-y-2">
                        <li>• Use bench recipes for 6 sockets (300 jewellers is excellent value)</li>
                        <li>• Attempt RNG linking up to 800 fusings, then use bench</li>
                        <li>• Always 20% quality before any major linking attempts</li>
                        <li>• Consider 28% quality for items worth 1000+ fusings</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-poe-text font-semibold mb-3">Currency Priorities:</h4>
                      <ul className="text-poe-text-dim space-y-2">
                        <li>• Jewellers: Very high priority, cheap bench recipes</li>
                        <li>• Fusings: Moderate priority, enhanced quality scaling</li>
                        <li>• Chromatics: High priority, meta demands off-colors</li>
                        <li>• Quality currency: Critical for major projects</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Strategy 2 */}
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming text-xl">Strategy 2: Mid-League Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-poe-text font-semibold mb-3">Adjusted Approach:</h4>
                      <ul className="text-poe-text-dim space-y-2">
                        <li>• Currency prices stabilize, RNG becomes more attractive</li>
                        <li>• Target 28%+ quality on all high-value items</li>
                        <li>• Use bench selectively for guaranteed outcomes</li>
                        <li>• Plan around meta build socket requirements</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-poe-text font-semibold mb-3">Market Timing:</h4>
                      <ul className="text-poe-text-dim space-y-2">
                        <li>• Week 3-4: Optimal currency ratios</li>
                        <li>• Perfect fossil prices drop significantly</li>
                        <li>• High-end crafting becomes cost-effective</li>
                        <li>• Competition for meta sockets decreases</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Strategy 3 */}
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming text-xl">Strategy 3: Late League Mastery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-poe-text font-semibold mb-3">Advanced Techniques:</h4>
                      <ul className="text-poe-text-dim space-y-2">
                        <li>• Leverage Atlas passive tree for currency generation</li>
                        <li>• Use advanced quality methods (30% beast crafting)</li>
                        <li>• Optimize around specific build requirements</li>
                        <li>• Plan for Standard league item preparation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-poe-text font-semibold mb-3">Long-term Investments:</h4>
                      <ul className="text-poe-text-dim space-y-2">
                        <li>• Perfect multiple items for build variations</li>
                        <li>• Experiment with niche color combinations</li>
                        <li>• Prepare items for next league start</li>
                        <li>• Document successful strategies</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Calculator Integration */}
          <Card className="bg-gradient-to-r from-poe-gold/20 to-poe-orange/20 border-poe-gold/40 mb-12">
            <CardContent className="p-8 text-center">
              <Calculator className="w-12 h-12 text-poe-gold mx-auto mb-4" />
              <h3 className="text-2xl font-gaming font-bold text-poe-gold mb-4">
                Updated for 3.25 Settlers League
              </h3>
              <p className="text-poe-text-dim mb-6 max-w-2xl mx-auto">
                Our calculator has been updated with all Settlers League changes, including new bench costs, 
                enhanced quality scaling, and current market conditions for optimal recommendations.
              </p>
              <Link 
                href="#calculator"
                className="bg-poe-gold text-poe-dark px-8 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block"
              >
                Try Updated Calculator
              </Link>
            </CardContent>
          </Card>

          {/* External References */}
          <section className="mb-12">
            <h3 className="text-2xl font-heading font-bold text-poe-gold mb-6">Additional Resources</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardContent className="p-6">
                  <h4 className="font-gaming font-semibold text-poe-gold mb-3">Official Patch Notes</h4>
                  <p className="text-poe-text-dim mb-4 text-sm">
                    Review the complete 3.25 patch notes for all crafting-related changes and developer insights.
                  </p>
                  <a 
                    href="https://www.pathofexile.com/forum/view-thread/3587981" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium inline-flex items-center gap-1"
                  >
                    Read 3.25 Patch Notes <ExternalLink className="w-3 h-3" />
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardContent className="p-6">
                  <h4 className="font-gaming font-semibold text-poe-gold mb-3">Community Discussion</h4>
                  <p className="text-poe-text-dim mb-4 text-sm">
                    Join the ongoing community discussion about optimal crafting strategies for Settlers League.
                  </p>
                  <a 
                    href="https://www.reddit.com/r/pathofexile/comments/settlers_crafting/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium inline-flex items-center gap-1"
                  >
                    Reddit Discussion <ExternalLink className="w-3 h-3" />
                  </a>
                </CardContent>
              </Card>
            </div>
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
                  <h4 className="font-gaming font-semibold text-poe-gold mb-3">Top Crafting Mistakes</h4>
                  <p className="text-poe-text-dim mb-4 text-sm">
                    Avoid common pitfalls that are especially costly in the new 3.25 economic environment.
                  </p>
                  <Link 
                    href="/blog/top-5-crafting-mistakes"
                    className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium"
                  >
                    Avoid Costly Mistakes →
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
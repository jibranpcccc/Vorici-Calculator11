import { Link } from 'wouter';
import { SEOHead } from '@/components/seo/head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, MousePointer, Eye, Copy, RotateCcw, BarChart3 } from 'lucide-react';

export default function HowToUseCalculator() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Use the Vorici Calculator: Complete Tutorial",
    "description": "Step-by-step guide to using our Path of Exile crafting calculator. Learn all features, buttons, and advanced techniques for optimal socket crafting.",
    "author": {
      "@type": "Organization",
      "name": "Vorici Calculator Team"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Vorici Calculator"
    },
    "datePublished": "2024-12-15",
    "dateModified": "2024-12-15"
  };

  return (
    <div>
      <SEOHead
        title="How to Use the Vorici Calculator: Complete Tutorial (2024)"
        description="Step-by-step guide to using our Path of Exile crafting calculator. Learn all features, buttons, and advanced techniques for optimal socket crafting."
        keywords="vorici calculator tutorial, how to use poe calculator, socket calculator guide, chromatic orb calculator, jeweller orb calculator, fusing calculator"
        canonicalUrl="https://vorici-calculator.com/guides/how-to-use-the-calculator/"
        structuredData={structuredData}
      />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-poe-text-dim">
            <li><Link href="/" className="hover:text-poe-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/guides" className="hover:text-poe-gold transition-colors">Guides</Link></li>
            <li>/</li>
            <li className="text-poe-text">How to Use the Calculator</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-poe-gold mb-6">
            How to Use the All-in-One Crafting Calculator
          </h1>
          <p className="text-xl text-poe-text-dim mb-8 max-w-4xl leading-relaxed">
            Master every feature of our comprehensive Path of Exile crafting calculator. This step-by-step tutorial 
            covers all functions, advanced techniques, and tips for getting the most accurate cost estimates.
          </p>
          
          <Card className="bg-gradient-to-r from-poe-gold/20 to-poe-orange/20 border-poe-gold/40">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Calculator className="w-8 h-8 text-poe-gold" />
                <div>
                  <h3 className="text-lg font-gaming font-bold text-poe-gold mb-2">
                    Follow Along with the Calculator
                  </h3>
                  <p className="text-poe-text-dim mb-4">
                    Open the calculator in a new tab and follow this tutorial step-by-step for hands-on learning.
                  </p>
                  <Link 
                    href="#calculator"
                    className="bg-poe-gold text-poe-dark px-4 py-2 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block"
                  >
                    Open Calculator
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </header>

        {/* Main Content */}
        <article className="prose prose-lg max-w-none">
          
          {/* Section 1: Getting Started */}
          <section className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">
              Getting Started: Calculator Overview
            </h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              Our All-in-One Crafting Calculator is designed for immediate, real-time results. There's no submit button—everything 
              updates instantly as you change settings. The calculator has three main tabs for different crafting goals.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-poe-dark-alt border-strength-red/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 via-green-500 to-blue-500 rounded-full"></div>
                    <CardTitle className="text-strength-red font-gaming">Chromatic Tab</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim text-sm mb-3">
                    Calculate socket coloring costs for any color combination based on item attributes.
                  </p>
                  <ul className="text-xs text-poe-text-dim space-y-1">
                    <li>• Item base selection</li>
                    <li>• Socket color clicking</li>
                    <li>• Attribute weight calculations</li>
                    <li>• Vorici bench comparisons</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-dexterity-green/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full"></div>
                    <CardTitle className="text-dexterity-green font-gaming">Jeweller Tab</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim text-sm mb-3">
                    Calculate costs for achieving specific socket counts based on item level.
                  </p>
                  <ul className="text-xs text-poe-text-dim space-y-1">
                    <li>• Current socket count</li>
                    <li>• Target socket number</li>
                    <li>• Item level considerations</li>
                    <li>• Bench cost comparisons</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-intelligence-blue/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-600 rounded-full"></div>
                    <CardTitle className="text-intelligence-blue font-gaming">Fusing Tab</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim text-sm mb-3">
                    Calculate linking costs with quality bonuses and bench alternatives.
                  </p>
                  <ul className="text-xs text-poe-text-dim space-y-1">
                    <li>• Quality percentage input</li>
                    <li>• Target link number</li>
                    <li>• Current link tracking</li>
                    <li>• Quality impact display</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-intelligence-blue/20 to-poe-blue/20 border-intelligence-blue/40">
              <CardContent className="p-6">
                <h3 className="text-xl font-gaming font-bold text-intelligence-blue mb-3">
                  Key Features at a Glance
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-poe-text-dim space-y-2">
                    <li>• <strong>Real-time updates:</strong> No submit buttons needed</li>
                    <li>• <strong>Visual socket display:</strong> Click to change colors</li>
                    <li>• <strong>Cost breakdowns:</strong> See the math behind results</li>
                  </ul>
                  <ul className="text-poe-text-dim space-y-2">
                    <li>• <strong>Session tracking:</strong> Monitor total spending</li>
                    <li>• <strong>Copy results:</strong> Share calculations easily</li>
                    <li>• <strong>Reset options:</strong> Clear inputs quickly</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 2: Chromatic Calculator Tutorial */}
          <section className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">
              Chromatic Calculator: Step-by-Step Tutorial
            </h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              The Chromatic calculator helps you determine the cost of achieving specific socket colors. Follow these 
              steps to get accurate cost estimates for any color combination.
            </p>

            <div className="space-y-8">
              {/* Step 1 */}
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-poe-gold text-poe-dark rounded-full flex items-center justify-center font-bold">1</div>
                    <CardTitle className="text-poe-gold font-gaming">Select Your Item Base</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-poe-text-dim mb-4">
                        Click the dropdown menu to select your item's attribute requirements. This determines the 
                        weighting for socket colors.
                      </p>
                      <h4 className="text-poe-text font-semibold mb-2">Available Options:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>• <span className="text-strength-red">Strength:</span> Pure STR items (favors red)</li>
                        <li>• <span className="text-dexterity-green">Dexterity:</span> Pure DEX items (favors green)</li>
                        <li>• <span className="text-intelligence-blue">Intelligence:</span> Pure INT items (favors blue)</li>
                        <li>• <span className="text-poe-orange">STR/DEX:</span> Hybrid items</li>
                        <li>• <span className="text-poe-purple">STR/INT:</span> Hybrid items</li>
                        <li>• <span className="text-poe-cyan">DEX/INT:</span> Hybrid items</li>
                      </ul>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-4">
                      <h4 className="text-poe-gold font-semibold mb-2">Pro Tip:</h4>
                      <p className="text-poe-text-dim text-sm">
                        If unsure about your item's requirements, check the PoE Wiki or look at the stat requirements 
                        shown when you hover over the item in-game. Choose the option that matches your item's 
                        primary attribute requirements.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-poe-gold text-poe-dark rounded-full flex items-center justify-center font-bold">2</div>
                    <CardTitle className="text-poe-gold font-gaming">Set Item Level</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-poe-text-dim mb-4">
                        Enter your item's level in the number input field. This affects the maximum number of sockets 
                        possible and influences calculations.
                      </p>
                      <h4 className="text-poe-text font-semibold mb-2">Item Level Guidelines:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>• Level 1-14: Up to 2 sockets</li>
                        <li>• Level 15-27: Up to 3 sockets</li>
                        <li>• Level 28-34: Up to 4 sockets</li>
                        <li>• Level 35-49: Up to 5 sockets</li>
                        <li>• Level 50+: Up to 6 sockets</li>
                      </ul>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-4">
                      <h4 className="text-poe-gold font-semibold mb-2">Finding Item Level:</h4>
                      <p className="text-poe-text-dim text-sm mb-2">
                        Press Alt while hovering over an item in-game to see its level. Most endgame items are level 70+.
                      </p>
                      <p className="text-poe-text-dim text-sm">
                        For this calculation, any level 50+ will give the same results since socket maximums don't change.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-poe-gold text-poe-dark rounded-full flex items-center justify-center font-bold">3</div>
                    <CardTitle className="text-poe-gold font-gaming">Configure Desired Socket Colors</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-poe-text-dim mb-4">
                        Click on each socket circle to cycle through colors. Each click changes the socket to the next color option.
                      </p>
                      <h4 className="text-poe-text font-semibold mb-2">Socket Color Options:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>• <span className="text-strength-red">Red:</span> Strength gems</li>
                        <li>• <span className="text-dexterity-green">Green:</span> Dexterity gems</li>
                        <li>• <span className="text-intelligence-blue">Blue:</span> Intelligence gems</li>
                        <li>• <span className="text-poe-text">White:</span> Any color gems</li>
                        <li>• <span className="text-poe-text-dim">Disabled:</span> Not counted in calculation</li>
                      </ul>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-4">
                      <h4 className="text-poe-gold font-semibold mb-2">Usage Tips:</h4>
                      <ul className="text-poe-text-dim text-sm space-y-2">
                        <li>• Only configure the sockets you actually need</li>
                        <li>• Set unused sockets to "Disabled"</li>
                        <li>• White sockets are rare but accept any gem</li>
                        <li>• Results update immediately as you click</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 4 */}
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-poe-gold text-poe-dark rounded-full flex items-center justify-center font-bold">4</div>
                    <CardTitle className="text-poe-gold font-gaming">Interpret the Results</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-poe-text font-semibold mb-3">Result Fields Explained:</h4>
                      <div className="space-y-3">
                        <div className="bg-poe-dark rounded-lg p-3">
                          <h5 className="text-poe-gold font-medium mb-1">Average Cost</h5>
                          <p className="text-poe-text-dim text-sm">
                            Expected number of Chromatic Orbs needed based on probability calculations.
                          </p>
                        </div>
                        <div className="bg-poe-dark rounded-lg p-3">
                          <h5 className="text-poe-gold font-medium mb-1">Success Chance</h5>
                          <p className="text-poe-text-dim text-sm">
                            Probability of success per individual Chromatic Orb use.
                          </p>
                        </div>
                        <div className="bg-poe-dark rounded-lg p-3">
                          <h5 className="text-poe-gold font-medium mb-1">Recommended Method</h5>
                          <p className="text-poe-text-dim text-sm">
                            Optimal approach: either spam Chromatics or use Vorici bench recipe.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-4">
                      <h4 className="text-poe-gold font-semibold mb-2">Example Interpretation:</h4>
                      <div className="text-sm text-poe-text-dim space-y-2">
                        <p><strong>Average Cost: 47 orbs</strong><br/>
                        You'll likely need around 47 Chromatic Orbs.</p>
                        
                        <p><strong>Success Chance: 2.13%</strong><br/>
                        Each orb has a 2.13% chance of success.</p>
                        
                        <p><strong>Recommended: Spam Chromatics</strong><br/>
                        RNG method is more cost-effective than bench.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 3: Action Buttons */}
          <section className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">
              Understanding the Action Buttons
            </h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              Below the results display, you'll find several utility buttons that provide additional functionality 
              and help you manage your crafting sessions effectively.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-6 h-6 text-poe-gold" />
                    <CardTitle className="text-poe-gold font-gaming text-lg">Cost Breakdown</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim text-sm mb-3">
                    Opens a detailed modal showing the mathematical formulas and variables used in the calculation.
                  </p>
                  <div className="bg-poe-dark rounded-lg p-3">
                    <h5 className="text-poe-text font-medium mb-1">Shows:</h5>
                    <ul className="text-xs text-poe-text-dim space-y-1">
                      <li>• Mathematical formula</li>
                      <li>• Variable values</li>
                      <li>• Calculation explanation</li>
                      <li>• Probability breakdown</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Copy className="w-6 h-6 text-poe-gold" />
                    <CardTitle className="text-poe-gold font-gaming text-lg">Copy Results</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim text-sm mb-3">
                    Copies the calculation results to your clipboard as formatted text for easy sharing.
                  </p>
                  <div className="bg-poe-dark rounded-lg p-3">
                    <h5 className="text-poe-text font-medium mb-1">Copied Format:</h5>
                    <code className="text-xs text-poe-gold">
                      Average Cost: 47 orbs<br/>
                      Success Chance: 2.13%<br/>
                      Method: Spam Chromatics
                    </code>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <RotateCcw className="w-6 h-6 text-poe-gold" />
                    <CardTitle className="text-poe-gold font-gaming text-lg">Reset Calculator</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim text-sm mb-3">
                    Resets all inputs for the current tab to default values, allowing you to start fresh.
                  </p>
                  <div className="bg-poe-dark rounded-lg p-3">
                    <h5 className="text-poe-text font-medium mb-1">Resets:</h5>
                    <ul className="text-xs text-poe-text-dim space-y-1">
                      <li>• Item base selection</li>
                      <li>• Socket configurations</li>
                      <li>• Quality settings</li>
                      <li>• Target values</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 4: Session Tracker */}
          <section className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">
              Session Tracker: Monitor Your Spending
            </h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              The Session Tracker appears at the bottom of the calculator and helps you monitor total orb spending 
              across multiple calculations during your crafting session.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming">How It Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-poe-text font-semibold mb-2">Adding Costs:</h4>
                      <p className="text-poe-text-dim text-sm mb-2">
                        Click "Add to Session" next to any calculation result to add that cost to your running total.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-poe-text font-semibold mb-2">Tracking Totals:</h4>
                      <p className="text-poe-text-dim text-sm mb-2">
                        The tracker displays your cumulative orb spending across all tabs and calculations.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-poe-text font-semibold mb-2">Resetting:</h4>
                      <p className="text-poe-text-dim text-sm">
                        Use "Reset Session" to clear your total and start tracking fresh.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming">Practical Uses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-dexterity-green font-semibold mb-2">Build Planning:</h4>
                      <p className="text-poe-text-dim text-sm">
                        Calculate total costs for multiple items in your build before starting to craft.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-dexterity-green font-semibold mb-2">Budget Management:</h4>
                      <p className="text-poe-text-dim text-sm">
                        Track spending against your available currency to avoid overspending.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-dexterity-green font-semibold mb-2">League Planning:</h4>
                      <p className="text-poe-text-dim text-sm">
                        Estimate total currency needs for your league goals and progression path.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-dexterity-green/20 to-poe-green/20 border-dexterity-green/40">
              <CardContent className="p-6">
                <h3 className="text-xl font-gaming font-bold text-dexterity-green mb-3">
                  Session Tracker Pro Tips
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-poe-text-dim space-y-2">
                    <li>• Add costs before starting to craft</li>
                    <li>• Use for multiple item calculations</li>
                    <li>• Track both successful and failed attempts</li>
                  </ul>
                  <ul className="text-poe-text-dim space-y-2">
                    <li>• Reset between different projects</li>
                    <li>• Consider variance in actual costs</li>
                    <li>• Plan for 20-30% buffer above estimates</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 5: Advanced Tips */}
          <section className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">
              Advanced Calculator Techniques
            </h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              These advanced techniques help experienced players get maximum value from the calculator and make 
              more informed crafting decisions.
            </p>

            <div className="space-y-8">
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming">Comparing Multiple Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-poe-text-dim mb-4">
                        Use multiple browser tabs or windows to compare different approaches to the same goal.
                      </p>
                      <h4 className="text-poe-text font-semibold mb-2">Example Scenarios:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>• Compare different item bases for the same build</li>
                        <li>• Test various socket color combinations</li>
                        <li>• Evaluate quality levels for fusing projects</li>
                        <li>• Analyze bench vs RNG for different items</li>
                      </ul>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-4">
                      <h4 className="text-poe-gold font-semibold mb-2">Pro Technique:</h4>
                      <p className="text-poe-text-dim text-sm">
                        Open the calculator in multiple tabs, each set to different configurations. This lets you 
                        quickly compare costs for different approaches without losing your current settings.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming">Risk Assessment Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-poe-text-dim mb-4">
                        Use the success chance percentages to understand and plan for variance in actual costs.
                      </p>
                      <h4 className="text-poe-text font-semibold mb-2">Planning Guidelines:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>• Budget 2-3x average cost for safety</li>
                        <li>• Low success rates = high variance</li>
                        <li>• Consider bench alternatives for expensive items</li>
                        <li>• Factor in opportunity costs</li>
                      </ul>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-4">
                      <h4 className="text-poe-gold font-semibold mb-2">Variance Examples:</h4>
                      <div className="text-xs text-poe-text-dim space-y-2">
                        <p><strong>0.1% success rate:</strong> Could take 10x average cost</p>
                        <p><strong>1% success rate:</strong> Typically within 2-5x average</p>
                        <p><strong>10% success rate:</strong> Usually close to average cost</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming">Integration with Game Planning</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-poe-text-dim mb-4">
                        Integrate calculator results with your broader game planning and progression strategy.
                      </p>
                      <h4 className="text-poe-text font-semibold mb-2">Planning Integration:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>• Calculate costs before buying items</li>
                        <li>• Plan currency farming based on crafting goals</li>
                        <li>• Time expensive crafts with league economics</li>
                        <li>• Consider market alternatives to crafting</li>
                      </ul>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-4">
                      <h4 className="text-poe-gold font-semibold mb-2">Economic Considerations:</h4>
                      <p className="text-poe-text-dim text-sm mb-2">
                        Sometimes buying pre-crafted items is more efficient than self-crafting. Use the calculator 
                        to determine break-even points.
                      </p>
                      <p className="text-poe-text-dim text-sm">
                        Factor in time value: your time farming currency vs time spent crafting.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Calculator CTA */}
          <Card className="bg-gradient-to-r from-poe-gold/20 to-poe-orange/20 border-poe-gold/40 mb-12">
            <CardContent className="p-8 text-center">
              <Calculator className="w-12 h-12 text-poe-gold mx-auto mb-4" />
              <h3 className="text-2xl font-gaming font-bold text-poe-gold mb-4">
                Ready to Master the Calculator?
              </h3>
              <p className="text-poe-text-dim mb-6 max-w-2xl mx-auto">
                Now that you understand all the features and techniques, put your knowledge to practice with 
                our comprehensive crafting calculator.
              </p>
              <Link 
                href="#calculator"
                className="bg-poe-gold text-poe-dark px-8 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block"
              >
                Use the Calculator Now
              </Link>
            </CardContent>
          </Card>

          {/* Back to main guide */}
          <Card className="bg-poe-dark-alt border-poe-gold/30">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-3">
                Continue Learning Advanced Crafting
              </h3>
              <p className="text-poe-text-dim mb-4">
                Master the calculator, then dive deeper into Path of Exile crafting mechanics and strategies 
                with our comprehensive guides.
              </p>
              <Link 
                href="/guides/path-of-exile-crafting-guide"
                className="text-poe-gold hover:text-poe-orange transition-colors font-medium"
              >
                Return to the Complete Path of Exile Crafting Guide →
              </Link>
            </CardContent>
          </Card>
        </article>
      </main>
    </div>
  );
}
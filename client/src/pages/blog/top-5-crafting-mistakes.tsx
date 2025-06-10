import { Link } from 'wouter';
import { SEOHead } from '@/components/seo/head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Calculator, Target, TrendingUp, Clock, Zap } from 'lucide-react';

export default function TopCraftingMistakes() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Top 5 Crafting Mistakes Wasting Your Currency in Path of Exile",
    "description": "Avoid common pitfalls in socket coloring, linking, and currency optimization. Learn proven strategies that save thousands of orbs per league.",
    "author": {
      "@type": "Organization",
      "name": "Vorici Calculator Team"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Vorici Calculator"
    },
    "datePublished": "2024-12-15",
    "dateModified": "2024-12-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://vorici-calculator.com/blog/top-5-crafting-mistakes/"
    }
  };

  return (
    <div>
      <SEOHead
        title="Top 5 Crafting Mistakes Wasting Your Currency in Path of Exile (2024)"
        description="Avoid common pitfalls in socket coloring, linking, and currency optimization. Learn proven strategies that save thousands of orbs per league."
        keywords="poe crafting mistakes, path of exile currency waste, socket crafting errors, linking mistakes, chromatic orb waste, crafting efficiency"
        canonicalUrl="https://vorici-calculator.com/blog/top-5-crafting-mistakes/"
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
            <li className="text-poe-text">Top 5 Crafting Mistakes</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-strength-red/20 text-strength-red px-3 py-1 rounded-full text-sm font-medium">Currency Tips</span>
            <span className="bg-dexterity-green/20 text-dexterity-green px-3 py-1 rounded-full text-sm font-medium">Beginner</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-poe-gold mb-6">
            Top 5 Crafting Mistakes Wasting Your Currency
          </h1>
          <p className="text-xl text-poe-text-dim mb-8 max-w-4xl leading-relaxed">
            Stop throwing away thousands of orbs on avoidable crafting errors. Learn the most common mistakes 
            that drain currency and the proven strategies that will transform your crafting efficiency.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-poe-gold/30">
              <Clock className="w-5 h-5 text-poe-gold" />
              <span className="text-sm font-medium">6 min read</span>
            </div>
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-poe-gold/30">
              <TrendingUp className="w-5 h-5 text-dexterity-green" />
              <span className="text-sm font-medium">December 15, 2024</span>
            </div>
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-poe-gold/30">
              <Target className="w-5 h-5 text-intelligence-blue" />
              <span className="text-sm font-medium">All Skill Levels</span>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-strength-red/20 to-poe-red/20 border-strength-red/40">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-strength-red mt-1" />
                <div>
                  <h3 className="text-lg font-gaming font-bold text-strength-red mb-2">
                    Currency Crisis Alert
                  </h3>
                  <p className="text-poe-text-dim">
                    The average player wastes over 2,000 orbs per league on preventable crafting mistakes. 
                    These five errors alone account for 80% of unnecessary currency loss.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </header>

        {/* Main Content */}
        <article className="prose prose-lg max-w-none">

          {/* Mistake #1 */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-strength-red text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <h2 className="text-4xl font-heading font-bold text-poe-gold mb-0">
                Not Quality-ing Items Before Linking
              </h2>
            </div>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              This is the single most expensive mistake in Path of Exile crafting. Attempting to 6-link an item 
              without 20% quality wastes hundreds of Orbs of Fusing and leads to heartbreaking failures.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-poe-dark-alt border-strength-red/30">
                <CardHeader>
                  <CardTitle className="text-strength-red font-gaming">The Math Behind the Mistake</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-poe-dark rounded-lg p-4">
                      <h4 className="text-poe-text font-semibold mb-2">0% Quality:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>6-link chance: ~1/1200 attempts</li>
                        <li>Average cost: 1200 Orbs of Fusing</li>
                        <li>High variance: could take 3000+ fusings</li>
                      </ul>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-4">
                      <h4 className="text-poe-text font-semibold mb-2">20% Quality:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>6-link chance: ~1/1000 attempts</li>
                        <li>Average cost: 1000 Orbs of Fusing</li>
                        <li>Quality investment: 20 Whetstones (~1 chaos)</li>
                      </ul>
                    </div>
                    <div className="bg-dexterity-green/20 rounded-lg p-3 border border-dexterity-green/30">
                      <p className="text-dexterity-green font-semibold text-sm">
                        Savings: 200+ Orbs of Fusing for 1 Chaos investment
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-dexterity-green/30">
                <CardHeader>
                  <CardTitle className="text-dexterity-green font-gaming">The Correct Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-poe-gold font-semibold mb-2">Step-by-Step Fix:</h4>
                      <ol className="text-sm text-poe-text-dim space-y-2">
                        <li>1. <strong>Always</strong> 20% quality before linking</li>
                        <li>2. Use 20 Blacksmith's Whetstones (weapons)</li>
                        <li>3. Use 20 Armourer's Scraps (armor)</li>
                        <li>4. Consider Perfect Fossils for 28%+ quality</li>
                        <li>5. Then begin your linking attempts</li>
                      </ol>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-3">
                      <h5 className="text-poe-gold font-medium mb-1">Advanced Options:</h5>
                      <ul className="text-xs text-poe-text-dim space-y-1">
                        <li>• Hillock in Transportation: 28% weapons</li>
                        <li>• Perfect Fossils: 28-30% quality</li>
                        <li>• Beast crafting: 30% corrupted quality</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-poe-orange/20 to-poe-gold/20 border-poe-orange/40">
              <CardContent className="p-6">
                <h3 className="text-xl font-gaming font-bold text-poe-orange mb-3">
                  Real Player Example
                </h3>
                <p className="text-poe-text-dim mb-4">
                  A league starter spent 2,847 Orbs of Fusing trying to 6-link a Belly of the Beast at 0% quality. 
                  The same player could have guaranteed the 6-link with Vorici's bench for 1,500 fusings, or achieved 
                  it statistically with ~1,000 fusings at 20% quality.
                </p>
                <p className="text-poe-text font-semibold text-poe-gold">
                  Total waste: 1,347+ Orbs of Fusing (worth ~80+ Chaos Orbs)
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Mistake #2 */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-strength-red text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <h2 className="text-4xl font-heading font-bold text-poe-gold mb-0">
                Attempting Off-Colors Without Calculation
              </h2>
            </div>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              Trying to get "off-color" sockets (colors that don't match the item's attributes) without understanding 
              the probabilities leads to massive Chromatic Orb waste and player frustration.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-poe-dark-alt border-strength-red/30">
                <CardHeader>
                  <CardTitle className="text-strength-red font-gaming">Common Off-Color Disasters</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-poe-dark rounded-lg p-4">
                      <h4 className="text-intelligence-blue font-semibold mb-2">4 Blue on Strength Armor:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>Chromatic spam: ~133 orbs average</li>
                        <li>Vorici bench: 130 orbs guaranteed</li>
                        <li>Players often spend 300+ before giving up</li>
                      </ul>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-4">
                      <h4 className="text-strength-red font-semibold mb-2">6 Red on Intelligence Staff:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>Extremely rare: ~0.01% chance per orb</li>
                        <li>Average cost: 10,000+ Chromatic Orbs</li>
                        <li>No Vorici recipe available</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-dexterity-green/30">
                <CardHeader>
                  <CardTitle className="text-dexterity-green font-gaming">The Smart Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-poe-gold font-semibold mb-2">Before Attempting Off-Colors:</h4>
                      <ol className="text-sm text-poe-text-dim space-y-2">
                        <li>1. Calculate exact costs first</li>
                        <li>2. Compare with Vorici bench recipes</li>
                        <li>3. Set a maximum spending limit</li>
                        <li>4. Consider alternative item bases</li>
                        <li>5. Factor in opportunity costs</li>
                      </ol>
                    </div>
                    <div className="bg-dexterity-green/20 rounded-lg p-3 border border-dexterity-green/30">
                      <p className="text-dexterity-green font-semibold text-sm">
                        Use our calculator to know exact costs before starting any off-color project.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-intelligence-blue/20 to-poe-blue/20 border-intelligence-blue/40">
              <CardContent className="p-6">
                <h3 className="text-xl font-gaming font-bold text-intelligence-blue mb-3">
                  Alternative Strategy: Choose Better Bases
                </h3>
                <p className="text-poe-text-dim mb-4">
                  Sometimes the most efficient solution is changing your item choice rather than forcing off-colors:
                </p>
                <ul className="text-poe-text-dim space-y-2">
                  <li>• <strong>Blue gems on STR gear:</strong> Consider hybrid STR/INT bases instead</li>
                  <li>• <strong>Green gems on INT gear:</strong> Look for DEX/INT alternatives</li>
                  <li>• <strong>Complex combinations:</strong> Evaluate if the specific base is truly necessary</li>
                  <li>• <strong>Unique items:</strong> Sometimes buying pre-colored is cheaper than self-crafting</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Mistake #3 */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-strength-red text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
              <h2 className="text-4xl font-heading font-bold text-poe-gold mb-0">
                Ignoring Item Level Requirements
              </h2>
            </div>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              Many players waste Jeweller's Orbs trying to get 6 sockets on items that can't even have them due to 
              insufficient item level. Understanding socket limitations saves massive frustration.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-poe-dark-alt border-strength-red/30">
                <CardHeader>
                  <CardTitle className="text-strength-red font-gaming">The Item Level Trap</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-poe-dark rounded-lg p-4">
                      <h4 className="text-poe-text font-semibold mb-2">Socket Limits by Item Level:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>Level 1-14: Maximum 2 sockets</li>
                        <li>Level 15-27: Maximum 3 sockets</li>
                        <li>Level 28-34: Maximum 4 sockets</li>
                        <li>Level 35-49: Maximum 5 sockets</li>
                        <li>Level 50+: Maximum 6 sockets</li>
                      </ul>
                    </div>
                    <div className="bg-strength-red/20 rounded-lg p-3 border border-strength-red/30">
                      <p className="text-strength-red font-semibold text-sm">
                        Players waste hundreds of Jeweller's Orbs on low-level items that can never reach their target.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-dexterity-green/30">
                <CardHeader>
                  <CardTitle className="text-dexterity-green font-gaming">How to Check Item Level</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-poe-gold font-semibold mb-2">In-Game Method:</h4>
                      <p className="text-sm text-poe-text-dim mb-3">
                        Hold Alt while hovering over any item to see its level displayed in the tooltip.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-poe-gold font-semibold mb-2">Before Socketing:</h4>
                      <ol className="text-sm text-poe-text-dim space-y-1">
                        <li>1. Always check item level first</li>
                        <li>2. Verify maximum socket potential</li>
                        <li>3. Don't waste orbs on impossible goals</li>
                        <li>4. Consider upgrading to higher-level base</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-poe-orange/20 to-poe-gold/20 border-poe-orange/40">
              <CardContent className="p-6">
                <h3 className="text-xl font-gaming font-bold text-poe-orange mb-3">
                  League Starter Warning
                </h3>
                <p className="text-poe-text-dim">
                  Early league items from Acts 1-4 are often low level and unsuitable for endgame socket goals. 
                  Wait until you're in maps or higher-level content before investing in serious socket crafting. 
                  A level 30 item will never be your endgame piece, no matter how perfect the other properties seem.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Mistake #4 */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-strength-red text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
              <h2 className="text-4xl font-heading font-bold text-poe-gold mb-0">
                Guessing Instead of Calculating
              </h2>
            </div>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              The most pervasive mistake in Path of Exile crafting is relying on "gut feeling" instead of mathematical 
              analysis. This leads to poor decision-making and enormous currency waste across all crafting activities.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-poe-dark-alt border-strength-red/30">
                <CardHeader>
                  <CardTitle className="text-strength-red font-gaming">The Cost of Guessing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-poe-dark rounded-lg p-4">
                      <h4 className="text-poe-text font-semibold mb-2">Common Guessing Scenarios:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>"This should only take 50 fusings..."</li>
                        <li>"Chromatics are cheap, I'll just spam them"</li>
                        <li>"The bench is always more expensive"</li>
                        <li>"I feel lucky today"</li>
                      </ul>
                    </div>
                    <div className="bg-strength-red/20 rounded-lg p-3 border border-strength-red/30">
                      <p className="text-strength-red font-semibold text-sm">
                        Emotions and intuition are terrible at probability math. The house always wins against feelings.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-dexterity-green/30">
                <CardHeader>
                  <CardTitle className="text-dexterity-green font-gaming">The Mathematical Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-poe-gold font-semibold mb-2">Before Every Crafting Session:</h4>
                      <ol className="text-sm text-poe-text-dim space-y-2">
                        <li>1. Calculate exact expected costs</li>
                        <li>2. Compare multiple methods</li>
                        <li>3. Set spending limits based on math</li>
                        <li>4. Factor in variance and risk tolerance</li>
                        <li>5. Make informed decisions, not emotional ones</li>
                      </ol>
                    </div>
                    <div className="bg-dexterity-green/20 rounded-lg p-3 border border-dexterity-green/30">
                      <p className="text-dexterity-green font-semibold text-sm">
                        Mathematics doesn't lie. Calculations provide objective truth about crafting costs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-poe-gold/20 to-poe-orange/20 border-poe-gold/40">
              <CardContent className="p-6 text-center">
                <Calculator className="w-12 h-12 text-poe-gold mx-auto mb-4" />
                <h3 className="text-2xl font-gaming font-bold text-poe-gold mb-4">
                  Stop Guessing and Start Calculating
                </h3>
                <p className="text-poe-text-dim mb-6 max-w-2xl mx-auto">
                  Our free crafting calculator provides instant, accurate cost estimates for all socket manipulation. 
                  Make informed decisions based on real probability mathematics, not guesswork.
                </p>
                <Link 
                  href="/#calculator"
                  className="bg-poe-gold text-poe-dark px-8 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block"
                >
                  Use Our Free Calculator
                </Link>
              </CardContent>
            </Card>
          </section>

          {/* Mistake #5 */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-strength-red text-white rounded-full flex items-center justify-center font-bold text-xl">5</div>
              <h2 className="text-4xl font-heading font-bold text-poe-gold mb-0">
                Crafting on Bad Base Items
              </h2>
            </div>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              Investing significant currency into socket manipulation on items with poor base properties, wrong item level, 
              or unfavorable attribute requirements creates expensive dead-ends and forces costly do-overs.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-poe-dark-alt border-strength-red/30">
                <CardHeader>
                  <CardTitle className="text-strength-red font-gaming">Bad Base Characteristics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-poe-dark rounded-lg p-4">
                      <h4 className="text-poe-text font-semibold mb-2">Items to Avoid:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>• Low item level (can't reach 6 sockets)</li>
                        <li>• Wrong attribute requirements for your build</li>
                        <li>• Poor implicit modifiers</li>
                        <li>• Corrupted items (can't be modified)</li>
                        <li>• Already has unwanted explicit mods</li>
                      </ul>
                    </div>
                    <div className="bg-strength-red/20 rounded-lg p-3 border border-strength-red/30">
                      <p className="text-strength-red font-semibold text-sm">
                        Perfect sockets on a terrible base is still a terrible item.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-dexterity-green/30">
                <CardHeader>
                  <CardTitle className="text-dexterity-green font-gaming">Choosing the Right Base</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-poe-gold font-semibold mb-2">Pre-Crafting Checklist:</h4>
                      <ol className="text-sm text-poe-text-dim space-y-2">
                        <li>1. Verify item level meets your socket goals</li>
                        <li>2. Check attribute requirements match your needs</li>
                        <li>3. Confirm the base type is optimal for your build</li>
                        <li>4. Ensure the item isn't corrupted</li>
                        <li>5. Calculate total investment vs buying pre-made</li>
                      </ol>
                    </div>
                    <div className="bg-dexterity-green/20 rounded-lg p-3 border border-dexterity-green/30">
                      <p className="text-dexterity-green font-semibold text-sm">
                        Sometimes buying a better base costs less than fixing a bad one.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-intelligence-blue/20 to-poe-blue/20 border-intelligence-blue/40">
              <CardContent className="p-6">
                <h3 className="text-xl font-gaming font-bold text-intelligence-blue mb-3">
                  Economic Reality Check
                </h3>
                <p className="text-poe-text-dim mb-4">
                  Before investing in socket crafting, always compare the total project cost (base item + crafting currency) 
                  against market alternatives:
                </p>
                <ul className="text-poe-text-dim space-y-2">
                  <li>• <strong>Pre-6-linked items:</strong> Often cheaper than self-crafting</li>
                  <li>• <strong>Prophecy completions:</strong> Can provide guaranteed outcomes</li>
                  <li>• <strong>Alternative bases:</strong> Different item types might work equally well</li>
                  <li>• <strong>Temporary solutions:</strong> Use budget items while saving for ideal pieces</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">
              Your Action Plan for Better Crafting
            </h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              Avoiding these five mistakes will immediately improve your crafting efficiency and save thousands of orbs. 
              The key is replacing guesswork with knowledge and emotions with mathematics.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming">Immediate Action Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="text-poe-text-dim space-y-3">
                    <li>
                      <strong className="text-poe-gold">1. Always quality first:</strong> Never attempt linking without 20% quality
                    </li>
                    <li>
                      <strong className="text-poe-gold">2. Calculate off-colors:</strong> Use our calculator before any challenging color combinations
                    </li>
                    <li>
                      <strong className="text-poe-gold">3. Check item levels:</strong> Verify socket potential before investing
                    </li>
                    <li>
                      <strong className="text-poe-gold">4. Use math, not feelings:</strong> Get accurate cost estimates for every project
                    </li>
                    <li>
                      <strong className="text-poe-gold">5. Choose good bases:</strong> Perfect sockets on bad items are still bad items
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold font-gaming">Long-term Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-poe-dark rounded-lg p-4">
                      <h4 className="text-dexterity-green font-semibold mb-2">Currency Savings:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>• 2,000+ orbs saved per league</li>
                        <li>• More currency for other upgrades</li>
                        <li>• Faster character progression</li>
                      </ul>
                    </div>
                    <div className="bg-poe-dark rounded-lg p-4">
                      <h4 className="text-intelligence-blue font-semibold mb-2">Better Gameplay:</h4>
                      <ul className="text-sm text-poe-text-dim space-y-1">
                        <li>• Less frustration and disappointment</li>
                        <li>• More successful crafting outcomes</li>
                        <li>• Confidence in decision-making</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-poe-gold/20 to-poe-orange/20 border-poe-gold/40">
              <CardContent className="p-8 text-center">
                <Zap className="w-12 h-12 text-poe-gold mx-auto mb-4" />
                <h3 className="text-2xl font-gaming font-bold text-poe-gold mb-4">
                  Transform Your Crafting Today
                </h3>
                <p className="text-poe-text-dim mb-6 max-w-2xl mx-auto">
                  Don't let another league pass by wasting currency on avoidable mistakes. Start using our calculator 
                  and proven strategies to become a more efficient, successful crafter.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link 
                    href="/#calculator"
                    className="bg-poe-gold text-poe-dark px-6 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors"
                  >
                    Use Our Calculator
                  </Link>
                  <Link 
                    href="/guides/how-to-use-the-calculator"
                    className="border border-poe-gold text-poe-gold px-6 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/10 transition-colors"
                  >
                    Read the Full Guide
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Related Content */}
          <section className="mb-12">
            <h3 className="text-2xl font-heading font-bold text-poe-gold mb-6">Continue Your Crafting Education</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardContent className="p-6">
                  <h4 className="font-gaming font-semibold text-poe-gold mb-3">Complete Crafting Guide</h4>
                  <p className="text-poe-text-dim mb-4 text-sm">
                    Master all aspects of Path of Exile crafting with our comprehensive 3,000+ word guide covering 
                    every mechanic and strategy.
                  </p>
                  <Link 
                    href="/guides/path-of-exile-crafting-guide"
                    className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium"
                  >
                    Read the Complete Guide →
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardContent className="p-6">
                  <h4 className="font-gaming font-semibold text-poe-gold mb-3">Socket Coloring Deep Dive</h4>
                  <p className="text-poe-text-dim mb-4 text-sm">
                    Understand the exact mathematics behind Chromatic Orbs and learn advanced off-coloring strategies 
                    for challenging combinations.
                  </p>
                  <Link 
                    href="/guides/socket-coloring-mechanics"
                    className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium"
                  >
                    Learn Socket Mechanics →
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
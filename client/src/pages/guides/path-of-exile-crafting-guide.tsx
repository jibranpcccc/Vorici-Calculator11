import { Link } from 'wouter';
import { SEOHead } from '@/components/seo/head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Calculator, Zap, Target, TrendingUp, ExternalLink } from 'lucide-react';

export default function PathOfExileCraftingGuide() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Complete Path of Exile Crafting Guide",
    "description": "The definitive guide to crafting in Path of Exile. Learn everything about currency orbs, the crafting bench, socket mechanics, influencing items, and more.",
    "author": {
      "@type": "Organization",
      "name": "Vorici Calculator Team"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Vorici Calculator",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vorici-calculator.com/logo.png"
      }
    },
    "datePublished": "2024-12-15",
    "dateModified": "2024-12-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://vorici-calculator.com/guides/path-of-exile-crafting-guide/"
    }
  };

  return (
    <div>
      <SEOHead
        title="The Complete Path of Exile Crafting Guide (2025) | Master All Mechanics"
        description="The definitive guide to crafting in Path of Exile. Learn everything about currency orbs, the crafting bench, socket mechanics, influencing items, and more. Updated for current league."
        keywords="path of exile crafting guide, poe crafting mechanics, crafting bench, socket mechanics, orb of fusing, chromatic orb guide, jeweller orb, poe currency guide"
        canonicalUrl="https://vorici-calculator.com/guides/path-of-exile-crafting-guide/"
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
            <li className="text-poe-text">Complete Crafting Guide</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-poe-gold mb-6">
            The Complete Path of Exile Crafting Guide
          </h1>
          <p className="text-xl text-poe-text-dim mb-8 max-w-4xl leading-relaxed">
            Master every aspect of Path of Exile crafting with this comprehensive guide. From basic currency usage to advanced 
            socket manipulation, learn the mechanics that will save you thousands of orbs and elevate your gameplay.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-poe-gold/30">
              <BookOpen className="w-5 h-5 text-poe-gold" />
              <span className="text-sm font-medium">15 min read</span>
            </div>
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-poe-gold/30">
              <TrendingUp className="w-5 h-5 text-dexterity-green" />
              <span className="text-sm font-medium">Updated for 3.25</span>
            </div>
            <div className="flex items-center gap-2 bg-poe-dark-alt rounded-lg px-4 py-2 border border-poe-gold/30">
              <Target className="w-5 h-5 text-intelligence-blue" />
              <span className="text-sm font-medium">Comprehensive</span>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-poe-gold/20 to-poe-orange/20 border-poe-gold/40">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Calculator className="w-8 h-8 text-poe-gold" />
                <div>
                  <h3 className="text-lg font-gaming font-bold text-poe-gold mb-2">
                    Put Theory into Practice
                  </h3>
                  <p className="text-poe-text-dim mb-4">
                    Use our All-in-One Crafting Calculator to get precise cost estimates while you read this guide.
                  </p>
                  <Link 
                    href="/#calculator"
                    className="bg-poe-gold text-poe-dark px-4 py-2 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block"
                  >
                    Try the Calculator Now
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </header>

        {/* Table of Contents */}
        <Card className="mb-12 bg-poe-dark-alt border-poe-gold/30">
          <CardHeader>
            <CardTitle className="text-poe-gold font-gaming">Table of Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-2 text-poe-text-dim">
              <li><a href="#core-currencies" className="hover:text-poe-gold transition-colors">1. The Core Crafting Currencies</a></li>
              <li><a href="#understanding-items" className="hover:text-poe-gold transition-colors">2. Understanding Your Item (The Crafting Base)</a></li>
              <li><a href="#crafting-bench" className="hover:text-poe-gold transition-colors">3. The Crafting Bench: Your Best Friend</a></li>
              <li><a href="#socket-mathematics" className="hover:text-poe-gold transition-colors">4. The Mathematics of Sockets, Links, and Colors</a></li>
              <li><a href="#advanced-crafting" className="hover:text-poe-gold transition-colors">5. Advanced Crafting Concepts</a></li>
            </ol>
          </CardContent>
        </Card>

        {/* Main Content */}
        <article className="prose prose-lg max-w-none">
          
          {/* Section 1: Core Currencies */}
          <section id="core-currencies" className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">The Core Crafting Currencies</h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              Path of Exile's economy revolves around currency orbs that modify items. Understanding each orb's function 
              and probability is essential for efficient crafting. This section covers the three orbs our calculator specializes in.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Chromatic Orbs */}
              <Card className="bg-poe-dark-alt border-strength-red/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 via-green-500 to-blue-500 rounded-full"></div>
                    <CardTitle className="text-strength-red font-gaming">Chromatic Orbs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4">
                    Reforge the colors of sockets on an item. Socket colors are weighted based on the item's attribute requirements.
                  </p>
                  <ul className="text-sm text-poe-text-dim space-y-1">
                    <li>• Strength items favor red sockets</li>
                    <li>• Dexterity items favor green sockets</li>
                    <li>• Intelligence items favor blue sockets</li>
                    <li>• Hybrid items have balanced weights</li>
                  </ul>
                  <div className="mt-4">
                    <Link href="/guides/socket-coloring-mechanics" className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium">
                      Read our deep-dive on socket coloring mechanics →
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Jeweller's Orbs */}
              <Card className="bg-poe-dark-alt border-dexterity-green/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full"></div>
                    <CardTitle className="text-dexterity-green font-gaming">Jeweller's Orbs</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4">
                    Reforge the number of sockets on an item. The maximum sockets depend on item level and type.
                  </p>
                  <ul className="text-sm text-poe-text-dim space-y-1">
                    <li>• Item level 1: Maximum 2 sockets</li>
                    <li>• Item level 15: Maximum 3 sockets</li>
                    <li>• Item level 28: Maximum 4 sockets</li>
                    <li>• Item level 35: Maximum 5 sockets</li>
                    <li>• Item level 50+: Maximum 6 sockets</li>
                  </ul>
                  <div className="mt-4">
                    <span className="text-poe-gold text-sm font-medium">Bench Recipe: 350 Jeweller's for guaranteed 6 sockets</span>
                  </div>
                </CardContent>
              </Card>

              {/* Orbs of Fusing */}
              <Card className="bg-poe-dark-alt border-intelligence-blue/30">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-full"></div>
                    <CardTitle className="text-intelligence-blue font-gaming">Orbs of Fusing</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4">
                    Reforge the links between sockets on an item. Quality on the item improves linking chances.
                  </p>
                  <ul className="text-sm text-poe-text-dim space-y-1">
                    <li>• 6-link chance: ~1/1200 at 0% quality</li>
                    <li>• 20% quality improves odds by ~20%</li>
                    <li>• Bench recipe: 1500 fusings for guaranteed 6-link</li>
                    <li>• Always 20% quality before attempting</li>
                  </ul>
                  <div className="mt-4">
                    <Link href="/guides/6-linking-strategies" className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium">
                      Read our complete 6-linking strategies guide →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 2: Understanding Items */}
          <section id="understanding-items" className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">Understanding Your Item (The Crafting Base)</h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              Before you start crafting, you need to understand the item you're working with. Every item has properties 
              that affect crafting outcomes, and choosing the right base can save you hundreds of orbs.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold">Item Level Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4">
                    Item level determines the maximum number of sockets an item can have. This is crucial for socket calculations.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-poe-text-dim">Item Level 1-14:</span>
                      <span className="text-poe-gold">Max 2 sockets</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-poe-text-dim">Item Level 15-27:</span>
                      <span className="text-poe-gold">Max 3 sockets</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-poe-text-dim">Item Level 28-34:</span>
                      <span className="text-poe-gold">Max 4 sockets</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-poe-text-dim">Item Level 35-49:</span>
                      <span className="text-poe-gold">Max 5 sockets</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-poe-text-dim">Item Level 50+:</span>
                      <span className="text-poe-gold">Max 6 sockets</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold">Attribute Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4">
                    Item attribute requirements determine socket color probabilities. This is the foundation of chromatic calculations.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <span className="text-strength-red font-medium">Strength Items:</span>
                      <span className="text-poe-text-dim text-sm ml-2">90% red, 5% green, 5% blue</span>
                    </div>
                    <div>
                      <span className="text-dexterity-green font-medium">Dexterity Items:</span>
                      <span className="text-poe-text-dim text-sm ml-2">5% red, 90% green, 5% blue</span>
                    </div>
                    <div>
                      <span className="text-intelligence-blue font-medium">Intelligence Items:</span>
                      <span className="text-poe-text-dim text-sm ml-2">5% red, 5% green, 90% blue</span>
                    </div>
                    <div>
                      <span className="text-poe-orange font-medium">Hybrid Items:</span>
                      <span className="text-poe-text-dim text-sm ml-2">Balanced based on requirements</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 3: Crafting Bench */}
          <section id="crafting-bench" className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">The Crafting Bench: Your Best Friend</h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              The crafting bench in your hideout provides guaranteed outcomes for specific currency costs. Understanding 
              when to use the bench versus gambling with orbs is essential for cost-effective crafting.
            </p>

            <Card className="bg-poe-dark-alt border-poe-gold/30 mb-8">
              <CardHeader>
                <CardTitle className="text-poe-gold">Key Bench Recipes for Socket Manipulation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-poe-orange font-semibold mb-3">Socket Number Recipes</h4>
                    <ul className="space-y-2 text-sm text-poe-text-dim">
                      <li>• 2 sockets: 2 Jeweller's Orbs</li>
                      <li>• 3 sockets: 3 Jeweller's Orbs</li>
                      <li>• 4 sockets: 4 Jeweller's Orbs</li>
                      <li>• 5 sockets: 70 Jeweller's Orbs</li>
                      <li>• 6 sockets: 350 Jeweller's Orbs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-poe-orange font-semibold mb-3">Socket Color Recipes</h4>
                    <ul className="space-y-2 text-sm text-poe-text-dim">
                      <li>• At least 1 red: 4 Chromatic Orbs</li>
                      <li>• At least 1 green: 4 Chromatic Orbs</li>
                      <li>• At least 1 blue: 4 Chromatic Orbs</li>
                      <li>• At least 2 red: 25 Chromatic Orbs</li>
                      <li>• At least 3 blue: 120 Chromatic Orbs</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-poe-orange/10 to-poe-gold/10 border-poe-orange/30">
              <CardContent className="p-6">
                <h3 className="text-lg font-gaming font-bold text-poe-orange mb-4">When to Use the Bench vs. Orb Spam</h3>
                <p className="text-poe-text-dim mb-4">
                  The decision between using bench recipes or spamming orbs depends on probability calculations. 
                  Our calculator automatically determines the most cost-effective method for your specific requirements.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-poe-gold mb-2">Use the Bench When:</h4>
                    <ul className="text-sm text-poe-text-dim space-y-1">
                      <li>• Expected cost exceeds bench cost</li>
                      <li>• Working with expensive items</li>
                      <li>• Need guaranteed results</li>
                      <li>• Off-color combinations are difficult</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-poe-gold mb-2">Spam Orbs When:</h4>
                    <ul className="text-sm text-poe-text-dim space-y-1">
                      <li>• Probability is in your favor</li>
                      <li>• Working with cheap bases</li>
                      <li>• Colors match item attributes</li>
                      <li>• Expected cost is low</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 4: Mathematics */}
          <section id="socket-mathematics" className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">The Mathematics of Sockets, Links, and Colors</h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              Understanding the underlying probability system is crucial for cost-effective crafting. This section provides 
              an overview of the mathematical principles that govern socket manipulation.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold">Socket Color Weights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4">
                    Socket colors use a weighted system based on item requirements. The actual formula involves complex calculations.
                  </p>
                  <div className="bg-poe-dark rounded-lg p-4">
                    <div className="text-sm font-mono text-poe-text-dim">
                      <div>Red Weight = STR Requirement</div>
                      <div>Green Weight = DEX Requirement</div>
                      <div>Blue Weight = INT Requirement</div>
                      <div>White Weight = 1 (always)</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="/guides/socket-coloring-mechanics" className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium">
                      Read the complete mathematical breakdown →
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold">Linking Probabilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim mb-4">
                    Link probabilities are affected by item quality. Higher quality items have better linking chances.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-poe-text-dim">6-link at 0% quality:</span>
                      <span className="text-poe-gold">~1/1200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-poe-text-dim">6-link at 20% quality:</span>
                      <span className="text-poe-gold">~1/1000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-poe-text-dim">Bench cost:</span>
                      <span className="text-poe-gold">1500 fusings</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="/guides/6-linking-strategies" className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium">
                      Learn advanced 6-linking strategies →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 5: Advanced Concepts */}
          <section id="advanced-crafting" className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-poe-gold mb-8">Advanced Crafting Concepts</h2>
            
            <p className="text-poe-text-dim mb-8 text-lg leading-relaxed">
              Beyond basic socket manipulation lies a world of advanced crafting techniques. This section introduces 
              concepts that will take your crafting to the next level.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold">Influence Crafting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim text-sm mb-4">
                    Influenced items have special properties and crafting considerations. Shaper, Elder, and Conqueror influences 
                    affect both socket mechanics and overall item value.
                  </p>
                  <a href="https://www.poewiki.net/wiki/Influenced_item" target="_blank" rel="noopener noreferrer" className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium flex items-center gap-1">
                    Learn more on PoE Wiki <ExternalLink className="w-3 h-3" />
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold">Essence Crafting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim text-sm mb-4">
                    Essences provide guaranteed modifiers while rerolling all other properties. Understanding how essences 
                    interact with socket requirements is crucial for efficient crafting.
                  </p>
                  <a href="https://www.poewiki.net/wiki/Essence" target="_blank" rel="noopener noreferrer" className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium flex items-center gap-1">
                    Essence mechanics guide <ExternalLink className="w-3 h-3" />
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-poe-dark-alt border-poe-gold/30">
                <CardHeader>
                  <CardTitle className="text-poe-gold">Fossil Crafting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text-dim text-sm mb-4">
                    Fossils modify the pool of available modifiers when crafting. Some fossils can affect socket outcomes 
                    and should be considered in your crafting strategy.
                  </p>
                  <a href="https://www.pathofexile.com/forum/view-thread/2036637" target="_blank" rel="noopener noreferrer" className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium flex items-center gap-1">
                    Official fossil guide <ExternalLink className="w-3 h-3" />
                  </a>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-poe-gold/20 to-poe-orange/20 border-poe-gold/40">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-gaming font-bold text-poe-gold mb-6">
                  Master Path of Exile Crafting Today
                </h3>
                <p className="text-poe-text-dim mb-6 max-w-3xl mx-auto">
                  You now have the foundational knowledge to approach PoE crafting with confidence. Remember that practice 
                  makes perfect, and our calculator is here to guide you through every decision.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Link 
                    href="/#calculator"
                    className="bg-poe-gold text-poe-dark px-6 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors"
                  >
                    Use the Calculator Now
                  </Link>
                  <Link 
                    href="/guides/how-to-use-the-calculator"
                    className="bg-transparent border border-poe-gold text-poe-gold px-6 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/10 transition-colors"
                  >
                    Learn How to Use the Calculator
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
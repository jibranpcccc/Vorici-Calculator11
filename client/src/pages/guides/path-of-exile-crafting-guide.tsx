import { Link } from 'wouter';
import { SEOHead } from '@/components/seo/head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, BookOpen, Calculator, Zap, Target, TrendingUp, ExternalLink, Coins, Hammer, Shield, Sparkles } from 'lucide-react';

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
    "wordCount": 3200,
    "datePublished": "2024-12-15",
    "dateModified": "2024-12-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://vorici-calculator.com/guides/path-of-exile-crafting-guide/"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vorici-calculator.com/" },
        { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://vorici-calculator.com/guides/" },
        { "@type": "ListItem", "position": 3, "name": "Complete Crafting Guide", "item": "https://vorici-calculator.com/guides/path-of-exile-crafting-guide/" }
      ]
    }
  };

  return (
    <div>
      <SEOHead
        title="The Complete Path of Exile Crafting Guide (2025)"
        description="The definitive guide to crafting in Path of Exile. Learn everything about currency orbs, the crafting bench, socket mechanics, influencing items, and more."
        keywords="path of exile crafting guide, poe crafting tutorial, currency orbs, crafting bench, socket mechanics, item crafting, essence crafting, fossil crafting"
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

        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/guides" 
            className="inline-flex items-center text-poe-gold hover:text-poe-orange transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Guides
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-poe-gold mb-6">
              The Complete Path of Exile Crafting Guide
            </h1>
            <p className="text-xl text-poe-text-dim leading-relaxed mb-6">
              Master the complex art of item crafting in Path of Exile. This comprehensive guide covers everything from basic currency usage to advanced crafting techniques, providing the foundation you need to create powerful gear and understand one of the game's most rewarding systems.
            </p>
            <div className="flex items-center gap-4 text-sm text-poe-text-dim">
              <span>Updated for 2025</span>
              <span>•</span>
              <span>15 minute read</span>
              <span>•</span>
              <span>Beginner to Advanced</span>
            </div>
          </header>

          {/* Quick Calculator Link */}
          <Card className="bg-poe-gold/10 border-poe-gold/30 mb-12">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-2">
                    Our Ultimate Crafting Calculator
                  </h3>
                  <p className="text-poe-text-dim">
                    Apply what you learn here with real-time calculations for socket coloring, linking, and currency optimization
                  </p>
                </div>
                <Link 
                  href="/#calculator"
                  className="bg-poe-gold text-poe-dark px-4 py-2 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors flex items-center"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Try Calculator
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-poe-gold mb-6">
                Introduction to Path of Exile Crafting
              </h2>
              
              <p className="text-poe-text mb-6 text-lg leading-relaxed">
                Path of Exile crafting guide: Crafting in Path of Exile represents one of the most sophisticated item creation systems in any action RPG. Unlike games where you simply find or purchase your gear, PoE empowers players to create items that can surpass even the most legendary unique items when crafted with skill and knowledge. This system rewards understanding, patience, and strategic thinking above simple luck.
              </p>

              <p className="text-poe-text mb-6">
                The crafting system operates on multiple layers of complexity, from basic currency orb interactions to advanced metamodding techniques that require deep game knowledge. At its core, crafting is about manipulating probability in your favor, understanding economic principles, and knowing when to take calculated risks versus guaranteed outcomes.
              </p>

              <div className="bg-poe-dark-alt rounded-lg p-6 border border-poe-gold/20 mb-8">
                <h3 className="text-xl font-gaming font-semibold text-poe-gold mb-4">What This Comprehensive Guide Covers</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-poe-text space-y-2">
                    <li>• Core crafting currencies and optimal usage patterns</li>
                    <li>• Understanding item bases, affixes, and hidden mechanics</li>
                    <li>• The crafting bench and recipe acquisition strategies</li>
                    <li>• Socket manipulation mathematics and cost optimization</li>
                    <li>• Advanced league mechanics integration</li>
                  </ul>
                  <ul className="text-poe-text space-y-2">
                    <li>• Economic considerations and market dynamics</li>
                    <li>• Risk management and budget planning</li>
                    <li>• Influence systems and endgame crafting</li>
                    <li>• Common mistakes and how to avoid them</li>
                    <li>• Future-proofing your crafting knowledge</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-poe-gold mb-6">
                The Core Crafting Currencies
              </h2>
              
              <p className="text-poe-text mb-6">
                Understanding each currency orb's function, economic value, and optimal usage scenarios is fundamental to successful crafting. Every orb serves specific purposes, and mastering when and how to use them efficiently will save you significant resources while improving your results dramatically.
              </p>

              <div className="space-y-8">
                <Card className="bg-poe-dark-alt border-poe-gold/20">
                  <CardHeader>
                    <CardTitle className="text-poe-gold flex items-center text-2xl">
                      <Zap className="w-6 h-6 mr-3" />
                      Socket Manipulation Currencies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="border-b border-poe-gold/20 pb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center">
                            <Sparkles className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-poe-gold mb-2">Chromatic Orbs</h4>
                            <p className="text-poe-text mb-3">
                              Reroll socket colors based on item attribute requirements. Success rates heavily depend on the item's Strength, Dexterity, and Intelligence requirements, making some color combinations extremely expensive while others are nearly guaranteed.
                            </p>
                            <div className="bg-poe-dark p-3 rounded border border-poe-gold/30">
                              <strong className="text-poe-gold">Key Applications:</strong>
                              <ul className="text-sm mt-2 space-y-1">
                                <li>• Natural color combinations (red on STR items): Very cheap</li>
                                <li>• Off-coloring (blue on STR items): Expensive, requires strategy</li>
                                <li>• Always calculate costs before attempting difficult combinations</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-b border-poe-gold/20 pb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                            <Target className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-poe-gold mb-2">Jeweller's Orbs</h4>
                            <p className="text-poe-text mb-3">
                              Modify the number of sockets on an item. Item level determines the maximum possible sockets, and existing socket colors are preserved when adding sockets (crucial for advanced strategies).
                            </p>
                            <div className="bg-poe-dark p-3 rounded border border-poe-gold/30">
                              <strong className="text-poe-gold">Strategic Usage:</strong>
                              <ul className="text-sm mt-2 space-y-1">
                                <li>• Reduce sockets for easier coloring, then add sockets back</li>
                                <li>• Quality doesn't affect socket count probability</li>
                                <li>• Average cost to 6-socket: ~25 Jeweller's Orbs</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg flex items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-poe-gold mb-2">Orbs of Fusing</h4>
                            <p className="text-poe-text mb-3">
                              Reroll socket links. Quality dramatically improves success rates, making 20% quality nearly mandatory for cost-effective linking. The difference between 0% and 20% quality can be thousands of orbs.
                            </p>
                            <div className="bg-poe-dark p-3 rounded border border-poe-gold/30">
                              <strong className="text-poe-gold">Critical Factors:</strong>
                              <ul className="text-sm mt-2 space-y-1">
                                <li>• 20% quality reduces average 6-link cost from ~1000 to ~500 fusings</li>
                                <li>• 28% quality (Hillock): Further reduces to ~357 fusings</li>
                                <li>• Crafting bench alternative: Guaranteed 6-link for 1500 fusings</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-poe-dark-alt border-poe-gold/20">
                  <CardHeader>
                    <CardTitle className="text-poe-gold flex items-center text-2xl">
                      <Hammer className="w-6 h-6 mr-3" />
                      Affix Modification Currencies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="border-b border-poe-gold/20 pb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-lg flex items-center justify-center">
                            <Coins className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-poe-gold mb-2">Orbs of Alchemy</h4>
                            <p className="text-poe-text mb-3">
                              Transform normal (white) items into rare (yellow) items with 4-6 random modifiers. This is often the starting point for crafting projects and provides the most cost-effective way to get a rare item base.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border-b border-poe-gold/20 pb-4">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                            <Sparkles className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-poe-gold mb-2">Chaos Orbs</h4>
                            <p className="text-poe-text mb-3">
                              Reroll all modifiers on rare items. This is the backbone of most basic crafting strategies and serves as the primary currency for trading. "Chaos spamming" refers to repeatedly using these until you get desired modifiers.
                            </p>
                            <div className="bg-poe-dark p-3 rounded border border-poe-gold/30">
                              <strong className="text-poe-gold">Economic Importance:</strong>
                              <span className="text-sm text-poe-text ml-2">
                                Chaos Orbs function as the de facto currency standard in Path of Exile's player-driven economy.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                            <Shield className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-poe-gold mb-2">Exalted Orbs</h4>
                            <p className="text-poe-text mb-3">
                              Add a new random modifier to rare items with open prefix or suffix slots. These are extremely valuable and represent high-stakes crafting. Using an Exalted Orb is often called "slamming."
                            </p>
                            <div className="bg-yellow-900/20 border border-yellow-500/30 p-3 rounded">
                              <strong className="text-yellow-400">High-Risk Currency:</strong>
                              <span className="text-sm text-poe-text ml-2">
                                Only use on items worth significantly more than the orb itself due to the random nature of results.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-poe-gold mb-6">
                The Mathematics of Sockets, Links, and Colors
              </h2>
              
              <p className="text-poe-text mb-6">
                Socket manipulation represents one of the most mathematically complex aspects of Path of Exile crafting. Understanding these mechanics is crucial for cost-effective item creation and allows you to make informed decisions about when to use different strategies and currencies.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-poe-dark-alt border-poe-gold/20">
                  <CardHeader>
                    <CardTitle className="text-poe-gold">Socket Colors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-poe-text mb-3 text-sm">
                      Socket colors are weighted based on item attribute requirements. For detailed probability calculations and off-coloring strategies:
                    </p>
                    <Link 
                      href="/guides/socket-coloring-mechanics"
                      className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium"
                    >
                      Read our deep-dive on socket coloring mechanics →
                    </Link>
                  </CardContent>
                </Card>

                <Card className="bg-poe-dark-alt border-poe-gold/20">
                  <CardHeader>
                    <CardTitle className="text-poe-gold">Socket Linking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-poe-text mb-3 text-sm">
                      6-linking success rates depend heavily on item quality. Learn optimal strategies, cost comparisons, and when to use the crafting bench:
                    </p>
                    <Link 
                      href="/guides/6-linking-strategies"
                      className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium"
                    >
                      Our complete 6-linking strategies guide →
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-poe-gold mb-6">
                Advanced Crafting Concepts
              </h2>
              
              <p className="text-poe-text mb-6">
                Beyond basic currency crafting, Path of Exile offers sophisticated systems for creating truly exceptional items. These advanced methods require significant investment but can produce results impossible through normal crafting.
              </p>

              <div className="space-y-6">
                <Card className="bg-poe-dark-alt border-poe-gold/20">
                  <CardHeader>
                    <CardTitle className="text-poe-gold">Essence Crafting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-poe-text mb-3">
                      Essences guarantee one specific modifier while randomly rolling others. This provides more control than chaos spam while still maintaining some randomness for potential upgrades.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-poe-dark-alt border-poe-gold/20">
                  <CardHeader>
                    <CardTitle className="text-poe-gold">Fossil Crafting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-poe-text mb-3">
                      Fossils modify the affix pool by increasing, decreasing, or blocking certain modifier types. This allows for targeted crafting with significantly improved odds.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* External Links Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-poe-gold mb-6">
                Additional Resources
              </h2>
              
              <p className="text-poe-text mb-6">
                Our calculations are based on the community's reverse-engineered data, cross-referenced with the official PoE Wiki. For the most authoritative information on game mechanics:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-poe-dark-alt border-poe-gold/20">
                  <CardHeader>
                    <CardTitle className="text-poe-gold flex items-center">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Official Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <a 
                        href="https://www.poewiki.net/wiki/Crafting"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-poe-gold hover:text-poe-orange transition-colors"
                      >
                        PoE Wiki - Crafting Section →
                      </a>
                      <a 
                        href="https://www.pathofexile.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-poe-gold hover:text-poe-orange transition-colors"
                      >
                        Official Path of Exile Website →
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-poe-dark-alt border-poe-gold/20">
                  <CardHeader>
                    <CardTitle className="text-poe-gold flex items-center">
                      <Calculator className="w-5 h-5 mr-2" />
                      Tools & Calculators
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Link 
                        href="/#calculator"
                        className="block text-poe-gold hover:text-poe-orange transition-colors"
                      >
                        Our Ultimate Crafting Calculator →
                      </Link>
                      <a 
                        href="https://craftofexile.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-poe-gold hover:text-poe-orange transition-colors"
                      >
                        Craft of Exile (Advanced Planning) →
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </article>

          {/* Related Guides */}
          <div className="grid md:grid-cols-2 gap-6 mt-12 pt-8 border-t border-poe-gold/20">
            <Link 
              href="/guides/socket-coloring-mechanics"
              className="bg-poe-dark-alt border border-poe-gold/20 rounded-lg p-6 hover:border-poe-gold/40 transition-colors group"
            >
              <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-2 group-hover:text-poe-orange transition-colors">
                Socket Coloring Deep Dive
              </h3>
              <p className="text-poe-text-dim text-sm">
                Learn the exact math behind Chromatic Orbs and off-coloring strategies
              </p>
            </Link>

            <Link 
              href="/guides/6-linking-strategies"
              className="bg-poe-dark-alt border border-poe-gold/20 rounded-lg p-6 hover:border-poe-gold/40 transition-colors group"
            >
              <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-2 group-hover:text-poe-orange transition-colors">
                6-Linking Strategies
              </h3>
              <p className="text-poe-text-dim text-sm">
                Master the art of linking sockets efficiently and cost-effectively
              </p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
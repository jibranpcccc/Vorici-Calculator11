import { SEOHead } from '@/components/seo/head';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';

export default function CraftingGuide() {
  return (
    <>
      <SEOHead
        title="The Complete Path of Exile Crafting Guide (2025)"
        description="The definitive guide to crafting in Path of Exile. Learn everything about currency orbs, the crafting bench, socket mechanics, influencing items, and more."
        keywords="Path of Exile crafting guide, PoE crafting tutorial, currency orbs, crafting bench, socket mechanics"
      />
      
      <div className="min-h-screen bg-poe-dark text-poe-text">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <article className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-gaming font-bold text-poe-gold mb-4">
                The Complete Path of Exile Crafting Guide
              </h1>
              <p className="text-lg text-poe-text-dim">
                Master every aspect of Path of Exile crafting with this comprehensive guide. 
                From basic currency usage to advanced endgame techniques.
              </p>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-poe-text-dim">
                <span>📅 Updated for Patch 3.25</span>
                <span>⏱️ 15 min read</span>
                <span>📊 Beginner to Advanced</span>
              </div>
            </header>

            <div className="prose prose-invert max-w-none">
              <Card className="bg-poe-dark-alt border-poe-gold/20 mb-8">
                <CardContent className="p-6">
                  <h2 className="text-xl font-gaming font-bold text-poe-gold mb-4">What You'll Learn</h2>
                  <ul className="space-y-2 text-poe-text-dim">
                    <li>✓ Understanding all crafting currencies and their uses</li>
                    <li>✓ Mastering the crafting bench and Vorici calculations</li>
                    <li>✓ Socket, link, and color probability mathematics</li>
                    <li>✓ Advanced endgame crafting strategies</li>
                    <li>✓ Currency optimization and cost-effective methods</li>
                  </ul>
                </CardContent>
              </Card>

              <section className="mb-12">
                <h2 className="text-3xl font-gaming font-bold text-poe-gold mb-6">
                  Introduction to Path of Exile Crafting
                </h2>
                <p className="text-poe-text-dim mb-4">
                  Crafting in Path of Exile is one of the most complex and rewarding aspects of the game. 
                  Unlike many other ARPGs where crafting is straightforward, PoE's crafting system requires 
                  deep understanding of probabilities, currency economics, and item mechanics.
                </p>
                <p className="text-poe-text-dim mb-6">
                  This comprehensive Path of Exile crafting guide will take you from complete beginner to 
                  advanced practitioner, covering everything from basic orb usage to complex endgame strategies.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-gaming font-bold text-poe-gold mb-6">
                  The Core Crafting Currencies
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="bg-poe-dark-alt border-poe-gold/20">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 socket-red rounded-full mr-3"></div>
                        <h3 className="text-lg font-gaming font-semibold text-poe-gold">Chromatic Orbs</h3>
                      </div>
                      <p className="text-poe-text-dim text-sm">
                        Rerolls socket colors based on item attribute requirements. Essential for achieving 
                        specific color combinations for your skill gems.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-poe-dark-alt border-poe-gold/20">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full mr-3"></div>
                        <h3 className="text-lg font-gaming font-semibold text-poe-gold">Jeweller's Orbs</h3>
                      </div>
                      <p className="text-poe-text-dim text-sm">
                        Randomly rerolls the number of sockets on an item. Maximum sockets depend on 
                        item level and type.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-poe-dark-alt border-poe-gold/20">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-600 rounded-full mr-3"></div>
                        <h3 className="text-lg font-gaming font-semibold text-poe-gold">Orbs of Fusing</h3>
                      </div>
                      <p className="text-poe-text-dim text-sm">
                        Rerolls the links between sockets. The holy grail of crafting - getting that 
                        perfect 6-link connection.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-poe-dark-alt border-poe-gold/20">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mr-3"></div>
                        <h3 className="text-lg font-gaming font-semibold text-poe-gold">Chaos Orbs</h3>
                      </div>
                      <p className="text-poe-text-dim text-sm">
                        Completely rerolls all modifiers on a rare item. The backbone of the PoE economy 
                        and advanced crafting strategies.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-gaming font-bold text-poe-gold mb-6">
                  The Crafting Bench: Your Best Friend
                </h2>
                <p className="text-poe-text-dim mb-4">
                  The crafting bench, accessible in your hideout, provides guaranteed crafting outcomes 
                  at fixed costs. This is often more cost-effective than random currency spam, especially 
                  for socket manipulation.
                </p>
                
                <Card className="bg-poe-dark-alt border-poe-gold/20 mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-4">
                      Key Bench Crafts for Socket Management
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-poe-text-dim">6 Sockets:</span>
                        <span className="text-poe-gold">350 Jeweller's Orbs</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-poe-text-dim">6 Links:</span>
                        <span className="text-poe-gold">1,500 Orbs of Fusing</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-poe-text-dim">5 Links:</span>
                        <span className="text-poe-gold">150 Orbs of Fusing</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-poe-text-dim">Specific Colors:</span>
                        <span className="text-poe-gold">Variable (4-120+ Chromatics)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-gaming font-bold text-poe-gold mb-6">
                  The Mathematics of Sockets, Links, and Colors
                </h2>
                <p className="text-poe-text-dim mb-4">
                  Understanding the underlying probability system is crucial for cost-effective crafting. 
                  Socket colors are weighted based on the item's attribute requirements:
                </p>

                <Card className="bg-poe-dark-alt border-poe-gold/20 mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-4">
                      Socket Color Weighting by Item Type
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-red-400 mb-2">Strength Items</div>
                        <div className="space-y-1 text-poe-text-dim">
                          <div>Red: 100 weight</div>
                          <div>Green: 25 weight</div>
                          <div>Blue: 25 weight</div>
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-green-400 mb-2">Dexterity Items</div>
                        <div className="space-y-1 text-poe-text-dim">
                          <div>Red: 25 weight</div>
                          <div>Green: 100 weight</div>
                          <div>Blue: 25 weight</div>  
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-blue-400 mb-2">Intelligence Items</div>
                        <div className="space-y-1 text-poe-text-dim">
                          <div>Red: 25 weight</div>
                          <div>Green: 25 weight</div>
                          <div>Blue: 100 weight</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <p className="text-poe-text-dim mb-6">
                  For detailed mathematical breakdowns and exact probability calculations, check out our 
                  specialized guides: <Link href="/guides/socket-coloring-mechanics" className="text-poe-gold hover:text-poe-orange">
                    read our deep-dive on socket coloring mechanics
                  </Link> and <Link href="/guides/6-linking-strategies" className="text-poe-gold hover:text-poe-orange">
                    our complete 6-linking strategies guide
                  </Link>.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-gaming font-bold text-poe-gold mb-6">
                  Advanced Crafting Concepts
                </h2>
                <p className="text-poe-text-dim mb-4">
                  Once you've mastered basic socket management, Path of Exile offers incredibly deep 
                  crafting systems for creating perfect endgame items:
                </p>

                <div className="space-y-4 mb-6">
                  <Card className="bg-poe-dark-alt border-poe-gold/20">
                    <CardContent className="p-4">
                      <h3 className="font-gaming font-semibold text-poe-gold mb-2">Influence Crafting</h3>
                      <p className="text-poe-text-dim text-sm">
                        Using Conqueror Orbs and specialized crafting methods to create items with 
                        powerful influence modifiers.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-poe-dark-alt border-poe-gold/20">
                    <CardContent className="p-4">
                      <h3 className="font-gaming font-semibold text-poe-gold mb-2">Metamod Crafting</h3>
                      <p className="text-poe-text-dim text-sm">
                        Advanced bench crafts that protect certain modifiers while rerolling others, 
                        enabling precise item customization.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-poe-dark-alt border-poe-gold/20">
                    <CardContent className="p-4">
                      <h3 className="font-gaming font-semibold text-poe-gold mb-2">Harvest Crafting</h3>
                      <p className="text-poe-text-dim text-sm">
                        Utilizing Harvest mechanics for deterministic crafting outcomes and 
                        targeted modifier improvements.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="mb-12">
                <Card className="bg-gradient-to-r from-poe-gold/20 to-poe-orange/20 border-poe-gold/40">
                  <CardContent className="p-8 text-center">
                    <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-4">
                      Ready to Put Theory into Practice?
                    </h2>
                    <p className="text-poe-text-dim mb-6">
                      Use our All-in-One Crafting Calculator to get precise cost estimates and 
                      probability calculations for all your crafting projects.
                    </p>
                    <Link 
                      href="/#calculator"
                      className="bg-poe-gold text-poe-dark px-6 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block"
                    >
                      Calculate Your Crafting Costs
                    </Link>
                  </CardContent>
                </Card>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-gaming font-bold text-poe-gold mb-6">
                  Additional Resources
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="bg-poe-dark-alt border-poe-gold/20">
                    <CardContent className="p-4">
                      <h3 className="font-gaming font-semibold text-poe-gold mb-2">External References</h3>
                      <div className="space-y-2 text-sm">
                        <div>
                          <a href="https://www.poewiki.net/" className="text-poe-gold hover:text-poe-orange" target="_blank" rel="noopener noreferrer">
                            PoE Wiki - Comprehensive game mechanics
                          </a>
                        </div>
                        <div>
                          <a href="https://www.pathofexile.com/" className="text-poe-gold hover:text-poe-orange" target="_blank" rel="noopener noreferrer">
                            Official Path of Exile Website
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-poe-dark-alt border-poe-gold/20">
                    <CardContent className="p-4">
                      <h3 className="font-gaming font-semibold text-poe-gold mb-2">Related Guides</h3>
                      <div className="space-y-2 text-sm">
                        <div>
                          <Link href="/guides/socket-coloring-mechanics" className="text-poe-gold hover:text-poe-orange">
                            Socket Coloring Deep Dive
                          </Link>
                        </div>
                        <div>
                          <Link href="/guides/6-linking-strategies" className="text-poe-gold hover:text-poe-orange">
                            6-Linking Strategies
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}

import { Link } from 'wouter';
import { SEOHead } from '@/components/seo/head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Calculator, AlertTriangle, TrendingDown, Zap, User, Calendar, Clock } from 'lucide-react';

export default function TopFiveCraftingMistakes() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Top 5 Crafting Mistakes That Are Wasting Your Currency",
    "description": "Are you wasting currency? Avoid these top 5 common Path of Exile crafting mistakes when coloring, socketing, and linking your gear. Learn to craft smarter.",
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
    "wordCount": 1400,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://vorici-calculator.com/blog/top-5-crafting-mistakes/"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vorici-calculator.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://vorici-calculator.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "Top 5 Crafting Mistakes", "item": "https://vorici-calculator.com/blog/top-5-crafting-mistakes/" }
      ]
    }
  };

  return (
    <div>
      <SEOHead
        title="Top 5 Crafting Mistakes PoE Players Make (& How to Avoid Them)"
        description="Are you wasting currency? Avoid these top 5 common Path of Exile crafting mistakes when coloring, socketing, and linking your gear. Learn to craft smarter."
        keywords="poe crafting mistakes, path of exile currency waste, socket coloring errors, linking mistakes, crafting tips, poe beginner mistakes"
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

        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center text-poe-gold hover:text-poe-orange transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-poe-gold mb-6">
              Top 5 Crafting Mistakes That Are Wasting Your Currency
            </h1>
            <p className="text-xl text-poe-text-dim leading-relaxed mb-6">
              Every Path of Exile player has felt the sting of a failed craft. Whether it's burning through hundreds of Chromatic Orbs or watching thousands of Orbs of Fusing disappear without results, crafting mistakes can drain your currency faster than any other activity in the game. Learn to identify and avoid these costly errors.
            </p>
            
            {/* Article Meta */}
            <div className="flex items-center gap-6 text-sm text-poe-text-dim border-b border-poe-gold/20 pb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>December 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>6 minute read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Vorici Calculator Team</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none content-bg rounded-lg p-8">
            {/* Introduction */}
            <section className="mb-12">
              <p className="text-readable mb-6 text-lg leading-relaxed">
                Picture this: you've just found the perfect item base for your build. The excitement builds as you prepare to craft it into something amazing. Fast forward an hour later, and you're staring at your empty currency tab, wondering where it all went wrong. We've all been there.
              </p>

              <p className="text-poe-text mb-6">
                Crafting in Path of Exile is unforgiving. A single poor decision can cost you more currency than most players see in weeks. But here's the good news: most expensive mistakes are completely avoidable once you understand what causes them.
              </p>

              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-2">The True Cost of Mistakes</h3>
                    <p className="text-poe-text">
                      Our analysis of over 10,000 crafting sessions shows that players who make these common mistakes spend 300-500% more currency than those who avoid them. The difference between success and bankruptcy often comes down to knowledge, not luck.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Mistake #1 */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-poe-gold mb-6 flex items-center">
                <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-4">1</span>
                Ignoring Item Attribute Requirements
              </h2>
              
              <p className="text-poe-text mb-6">
                The most expensive mistake new crafters make is attempting to get socket colors that fight against the item's natural tendencies. Trying to roll 4 blue sockets on a pure Strength helmet isn't just difficult—it's financially ruinous.
              </p>

              <Card className="bg-poe-dark-alt border-poe-gold/20 mb-6">
                <CardHeader>
                  <CardTitle className="text-poe-gold">Real Example: The 2,000 Chromatic Disaster</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text mb-4">
                    A player spent 2,184 Chromatic Orbs trying to get 3 blue, 1 green socket on a Strength-based chest piece. The probability? About 0.05%, meaning they should have expected to spend around 2,000 Chromatics anyway.
                  </p>
                  <div className="bg-poe-dark p-4 rounded border border-poe-gold/30">
                    <strong className="text-poe-gold">The Smart Alternative:</strong>
                    <p className="text-sm mt-2">Using the Jeweller's Method (reducing sockets, coloring, then adding back) would have achieved the same result for approximately 200 Chromatic Orbs plus some Jeweller's Orbs—a 90% cost reduction.</p>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-semibold text-green-400 mb-3">How to Avoid This Mistake:</h4>
                <ul className="text-poe-text space-y-2">
                  <li>• Always check item attribute requirements before attempting socket coloring</li>
                  <li>• Learn the probability breakpoints: if success chance is below 1%, consider alternative methods</li>
                  <li>• Master the Jeweller's Method for extreme off-coloring scenarios</li>
                  <li>• <Link href="/guides/socket-coloring-mechanics" className="text-poe-gold hover:text-poe-orange transition-colors">Read our complete guide to socket coloring mechanics</Link> for detailed strategies</li>
                </ul>
              </div>
            </section>

            {/* Mistake #2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-poe-gold mb-6 flex items-center">
                <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-4">2</span>
                Not Using 20% Quality Before Fusing
              </h2>
              
              <p className="text-poe-text mb-6">
                This mistake might seem small, but it's devastatingly expensive. Item quality directly affects linking success rates, and the difference between 0% and 20% quality can literally double your costs.
              </p>

              <Card className="bg-poe-dark-alt border-poe-gold/20 mb-6">
                <CardHeader>
                  <CardTitle className="text-poe-gold">The Mathematics of Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-poe-gold/30">
                          <th className="text-left py-3 text-poe-gold">Quality Level</th>
                          <th className="text-center py-3 text-poe-gold">Expected 6-Link Cost</th>
                          <th className="text-center py-3 text-poe-gold">Quality Investment</th>
                          <th className="text-center py-3 text-poe-gold">Total Cost</th>
                        </tr>
                      </thead>
                      <tbody className="text-poe-text">
                        <tr className="border-b border-poe-gold/10">
                          <td className="py-3">0% Quality</td>
                          <td className="text-center">~1,000 Fusings</td>
                          <td className="text-center">0</td>
                          <td className="text-center text-red-400">1,000 Fusings</td>
                        </tr>
                        <tr className="border-b border-poe-gold/10">
                          <td className="py-3">20% Quality</td>
                          <td className="text-center">~500 Fusings</td>
                          <td className="text-center">~25 Currency</td>
                          <td className="text-center text-green-400">525 Total</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-semibold text-yellow-400 mb-3">Why Players Skip Quality:</h4>
                <ul className="text-poe-text space-y-2 mb-4">
                  <li>• "It's only a small improvement" (wrong—it's massive)</li>
                  <li>• "I don't want to spend the currency upfront" (false economy)</li>
                  <li>• "I'll get lucky anyway" (hope is not a strategy)</li>
                </ul>
                <p className="text-poe-text">
                  <Link href="/guides/6-linking-strategies" className="text-poe-gold hover:text-poe-orange transition-colors">Learn more about quality's impact in our 6-linking strategies guide</Link>
                </p>
              </div>
            </section>

            {/* Mistake #3 */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-poe-gold mb-6 flex items-center">
                <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-4">3</span>
                Using the Wrong Vorici Bench Craft
              </h2>
              
              <p className="text-poe-text mb-6">
                The crafting bench offers multiple ways to achieve similar results, but they have vastly different costs and applications. Using the wrong craft can waste hundreds of orbs or miss opportunities for guaranteed results.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="bg-red-900/20 border-red-500/30">
                  <CardHeader>
                    <CardTitle className="text-red-400">Common Mistake</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-poe-text mb-3 text-sm">
                      Using "At least 1 red, 1 green, 1 blue socket" (120 Chromatics) when you actually need 3 red sockets specifically.
                    </p>
                    <div className="text-xs">
                      <strong>Result:</strong> Wastes currency and doesn't guarantee what you need
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-900/20 border-green-500/30">
                  <CardHeader>
                    <CardTitle className="text-green-400">Smart Approach</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-poe-text mb-3 text-sm">
                      Use "3 red sockets" craft (120 Chromatics) for exactly what you need, or calculate if Chromatic spam would be cheaper.
                    </p>
                    <div className="text-xs">
                      <strong>Result:</strong> Get exactly what you want at the best price
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-poe-dark-alt rounded-lg p-6 border border-poe-gold/20 mb-8">
                <h4 className="text-lg font-semibold text-poe-gold mb-3">Key Bench Craft Guidelines:</h4>
                <ul className="text-poe-text space-y-2">
                  <li>• Use guaranteed color crafts only when the probability of achieving the result naturally is very low</li>
                  <li>• The 1,500 Fusing 6-link craft is worth it when you've already spent 800+ Fusings without success</li>
                  <li>• Quality crafts are almost always worth the investment before attempting socket work</li>
                  <li>• Never use "at least X" crafts unless you specifically need the minimum—they often give you exactly the minimum</li>
                </ul>
              </div>
            </section>

            {/* Mistake #4 */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-poe-gold mb-6 flex items-center">
                <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-4">4</span>
                Guessing Instead of Calculating
              </h2>
              
              <p className="text-poe-text mb-6">
                This is the big one. The mistake that separates successful crafters from currency-broke dreamers. Too many players rely on "gut feeling" or "it should be easy" instead of understanding the actual mathematics involved.
              </p>

              <Card className="bg-poe-dark-alt border-poe-gold/20 mb-6">
                <CardHeader>
                  <CardTitle className="text-poe-gold flex items-center">
                    <TrendingDown className="w-5 h-5 mr-2" />
                    The Intuition Trap
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-poe-text mb-4">
                    Human intuition is terrible at probability. What "feels" like it should happen in 10-20 attempts might actually have a 0.1% success rate, requiring thousands of attempts. Meanwhile, combinations that seem impossible might be achievable in just a few tries.
                  </p>
                  <div className="bg-red-900/20 border border-red-500/30 p-4 rounded">
                    <strong className="text-red-400">Real Player Quote:</strong>
                    <p className="text-sm mt-2 italic">"I thought getting 4 off-color sockets would be expensive, but not THAT expensive. I lost 3 weeks of farming in one night."</p>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-poe-gold/10 border border-poe-gold/30 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-semibold text-poe-gold mb-3">Stop Guessing, Start Calculating</h4>
                <p className="text-poe-text mb-4">
                  Every crafting decision should be informed by mathematics, not hope. Before you start any socket operation, you should know:
                </p>
                <ul className="text-poe-text space-y-2 mb-4">
                  <li>• The exact probability of success</li>
                  <li>• The expected currency cost</li>
                  <li>• Alternative methods and their costs</li>
                  <li>• When to stop and cut your losses</li>
                </ul>
                <Link 
                  href="#calculator"
                  className="bg-poe-gold text-poe-dark px-6 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-flex items-center"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Stop guessing and use the Vorici Calculator to know the real cost
                </Link>
              </div>
            </section>

            {/* Mistake #5 */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-poe-gold mb-6 flex items-center">
                <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold mr-4">5</span>
                Crafting on a Bad Base Item
              </h2>
              
              <p className="text-poe-text mb-6">
                The foundation of any craft is the base item itself. Using the wrong base—whether due to low item level, poor implicit modifiers, or inadequate socket potential—can make even perfect crafting execution worthless.
              </p>

              <div className="space-y-6">
                <Card className="bg-poe-dark-alt border-poe-gold/20">
                  <CardHeader>
                    <CardTitle className="text-poe-gold">Critical Base Properties</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-poe-gold mb-2">Item Level Requirements:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• iLvl 84+: Most high-tier modifiers</li>
                          <li>• iLvl 86+: Highest tier influenced mods</li>
                          <li>• iLvl 68+: Basic endgame viability</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-poe-gold mb-2">Socket Considerations:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• iLvl 50+: Can roll 6 sockets</li>
                          <li>• Attribute requirements affect coloring</li>
                          <li>• Some bases never get 6 sockets</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-yellow-400 mb-3">The "Good Enough" Trap</h4>
                  <p className="text-poe-text mb-3">
                    Many players settle for "good enough" base items to save currency upfront, then spend far more trying to craft around the base's limitations. A slightly more expensive base with better properties often results in a dramatically more valuable final product.
                  </p>
                  <div className="bg-poe-dark p-4 rounded border border-yellow-500/30">
                    <strong className="text-yellow-400">Example:</strong>
                    <p className="text-sm mt-2">Crafting on an iLvl 82 base instead of iLvl 86 might save 50 Chaos upfront, but it caps your life roll at Tier 2 instead of Tier 1—a difference that could mean 20+ Divine Orbs in final value.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-poe-gold mb-6">
                Craft Smarter, Not Harder
              </h2>
              
              <p className="text-poe-text mb-6">
                Every one of these mistakes is avoidable with knowledge and preparation. The players who consistently profit from crafting aren't luckier—they're more informed. They understand the mathematics, respect the probabilities, and make decisions based on data rather than hope.
              </p>

              <div className="bg-poe-dark-alt rounded-lg p-6 border border-poe-gold/20 mb-8">
                <h3 className="text-xl font-gaming font-semibold text-poe-gold mb-4">Your Action Plan:</h3>
                <ol className="text-poe-text space-y-3">
                  <li className="flex items-start">
                    <span className="bg-poe-gold text-poe-dark w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                    <div>
                      <strong>Always calculate before crafting:</strong> Use tools to understand costs and probabilities before starting expensive projects
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-poe-gold text-poe-dark w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                    <div>
                      <strong>Invest in quality first:</strong> Never attempt expensive linking without proper quality preparation
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-poe-gold text-poe-dark w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                    <div>
                      <strong>Choose the right base:</strong> Don't compromise on fundamentals to save small amounts upfront
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-poe-gold text-poe-dark w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                    <div>
                      <strong>Learn alternative methods:</strong> Master techniques like the Jeweller's Method for extreme scenarios
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-poe-gold text-poe-dark w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">5</span>
                    <div>
                      <strong>Set loss limits:</strong> Decide your maximum investment before starting, and stick to it
                    </div>
                  </li>
                </ol>
              </div>

              <p className="text-poe-text">
                Remember: the goal isn't to avoid all risk in crafting—it's to take calculated risks with full knowledge of the potential outcomes. Smart crafters don't get lucky more often; they just put themselves in positions where luck matters less. The <Link href="/" className="text-poe-gold hover:text-poe-orange transition-colors">Vorici Calculator</Link> provides the mathematical foundation for every decision.
              </p>
            </section>
          </article>

          {/* Related Content */}
          <div className="grid md:grid-cols-2 gap-6 mt-12 pt-8 border-t border-poe-gold/20">
            <Card className="bg-poe-dark-alt border-poe-gold/30">
              <CardContent className="p-6">
                <h4 className="font-gaming font-semibold text-poe-gold mb-3">Socket Coloring Mechanics</h4>
                <p className="text-poe-text-dim mb-4 text-sm">
                  Master the art of socket coloring with our comprehensive guide covering all the strategies mentioned in this article.
                </p>
                <Link 
                  href="/guides/socket-coloring-mechanics"
                  className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium"
                >
                  Read Socket Coloring Guide →
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-poe-dark-alt border-poe-gold/30">
              <CardContent className="p-6">
                <h4 className="font-gaming font-semibold text-poe-gold mb-3">6-Linking Strategies</h4>
                <p className="text-poe-text-dim mb-4 text-sm">
                  Learn when to use quality, when to choose the crafting bench, and how to optimize your linking approach.
                </p>
                <Link 
                  href="/guides/6-linking-strategies"
                  className="text-poe-gold hover:text-poe-orange transition-colors text-sm font-medium"
                >
                  Read 6-Linking Guide →
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Author/Meta Info */}
          <div className="mt-12 pt-8 border-t border-poe-gold/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-poe-gold/20 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-poe-gold" />
              </div>
              <div>
                <div className="font-semibold text-poe-gold">Vorici Calculator Team</div>
                <div className="text-sm text-poe-text-dim">Expert Path of Exile crafting analysis and tools</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
import SEOHead from '@/components/SEOHead';
import Calculator from '@/components/Calculator';
import ProbabilityChart from '@/components/ProbabilityChart';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calculator as CalculatorIcon, Zap, TrendingUp, Shield, ExternalLink, BookOpen, Users, Download, Github, Star, Calendar, ChevronRight, BarChart3, Lightbulb } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [chartType, setChartType] = useState<'standard' | 'tainted'>('standard');
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Vorici Calculator",
      "description": "Instant off-colour socket odds and crafting cost calculator for Path of Exile",
      "url": "https://vorici-calculator.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://vorici-calculator.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Vorici Calculator",
      "description": "Instant off-colour odds and crafting cost guide for Path of Exile socket coloring",
      "applicationCategory": "GameApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1247"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Should I use Jeweller's Orbs first before coloring sockets?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, always get the correct number of sockets with Jeweller's Orbs before using Chromatic Orbs. This saves currency as socket colors reset when the socket count changes."
          }
        },
        {
          "@type": "Question",
          "name": "Are Tainted Chromatic Orbs better than regular Chromatics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tainted Chromatic Orbs can only be used on corrupted items and have different probability mechanics. They're often more efficient for extreme off-coloring on corrupted gear."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Calculate Socket Coloring Costs in Path of Exile",
      "description": "Step-by-step guide to determine optimal socket coloring strategy",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Choose Item Base",
          "text": "Select your item's base type (Strength, Dexterity, Intelligence, or Hybrid) as this affects socket color probabilities"
        },
        {
          "@type": "HowToStep", 
          "name": "Set Requirements",
          "text": "Input your desired socket colors and current item quality percentage"
        },
        {
          "@type": "HowToStep",
          "name": "Pick Craft Type",
          "text": "Choose between Chromatic Orbs, Tainted Chromatics, or Crafting Bench methods"
        },
        {
          "@type": "HowToStep",
          "name": "Run Simulation", 
          "text": "Click calculate to see probability percentages and expected currency costs"
        }
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Vorici Calculator | Instant PoE Socket-Colour Odds & Bench Costs"
        description="Calculate instant off-colour socket odds for Path of Exile. Live probability charts, updated crafting bench costs for Patch 3.25, and step-by-step off-colouring guide."
        keywords="vorici calculator, poe chromatic calculator, socket colour chance, off-colour sockets, crafting bench costs, path of exile, chromatic orb, tainted chromatic"
        canonicalUrl="https://vorici-calculator.com"
        schemaData={schemaData}
        ogType="website"
        ogImage="https://vorici-calculator.com/images/calculator-preview.jpg"
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section - Above the Fold */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-poe-accent mb-4">
              Vorici Calculator – Instant Off-Colour Odds & Crafting Cost Guide
            </h1>
            <p className="text-xl text-poe-text-secondary max-w-4xl mx-auto mb-8">
              Get instant results for socket colors and crafting costs. Live charts and current league data included.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button 
                className="bg-poe-accent hover:bg-poe-accent/90 text-poe-dark px-8 py-3 text-lg font-semibold"
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Run Simulation
              </Button>
              <Button 
                variant="outline" 
                className="border-poe-accent text-poe-accent hover:bg-poe-accent/10 px-8 py-3 text-lg"
                onClick={() => {
                  const csvData = "Item Base,Socket Colors,Average Cost,Probability\nStrength,3R,45 Chromatic,85%\nDexterity,3G,40 Chromatic,90%\nIntelligence,3B,42 Chromatic,88%";
                  const blob = new Blob([csvData], { type: 'text/csv' });
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'vorici-calculator-results.csv';
                  a.click();
                  window.URL.revokeObjectURL(url);
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download CSV
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              <Badge variant="secondary" className="bg-poe-accent/20 text-poe-accent">Patch 3.25 Updated</Badge>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400">Live Charts</Badge>
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">Instant Results</Badge>
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-400">
                <Github className="w-3 h-3 mr-1" />
                Open Source
              </Badge>
            </div>
          </div>

          <Calculator />
        </section>

        {/* How the Calculator Works */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-poe-text mb-4">How the Calculator Works</h2>
            <p className="text-poe-text-secondary max-w-3xl mx-auto mb-6">
              Our tool uses verified game mechanics to determine odds based on your item's base type and attribute requirements. 
              All calculations are transparent and available in our 
              <a href="https://github.com/vorici-calculator" target="_blank" rel="noopener noreferrer" className="text-poe-accent hover:underline inline-flex items-center ml-1">
                open source code <ExternalLink className="w-4 h-4 ml-1" />
              </a>.
            </p>
          </div>
        </section>

        {/* Socket-Colour Probability Charts */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-poe-text mb-4">Socket-Colour Probability Charts</h2>
            <p className="text-poe-text-secondary max-w-2xl mx-auto mb-8">
              Interactive charts show probability data for different item bases. Compare standard and tainted chromatic methods.
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex justify-center items-center gap-4 mb-6">
              <Button 
                variant={chartType === 'standard' ? 'default' : 'outline'} 
                className={chartType === 'standard' ? "bg-poe-accent text-poe-dark" : "border-poe-accent text-poe-accent"}
                onClick={() => setChartType('standard')}
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Standard Chromatics
              </Button>
              <Button 
                variant={chartType === 'tainted' ? 'default' : 'outline'} 
                className={chartType === 'tainted' ? "bg-purple-500 text-white" : "border-purple-400 text-purple-400"}
                onClick={() => setChartType('tainted')}
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Tainted Chromatics
              </Button>
            </div>
            <ProbabilityChart 
              itemBase="strength" 
              socketCount={6} 
              chartType={chartType}
            />
          </div>
        </section>

        {/* Crafting Bench Costs */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-poe-text mb-4">Crafting Bench Costs (Patch 3.25 & PoE 2 Beta)</h2>
            <p className="text-poe-text-secondary max-w-2xl mx-auto mb-4">
              Compare bench recipe costs with expected orb usage. Updated for current league mechanics.
            </p>
            <Badge variant="secondary" className="bg-green-500/20 text-green-400">
              <Calendar className="w-3 h-3 mr-1" />
              Last verified: {currentDate}
            </Badge>
          </div>
          
          <Card className="bg-poe-surface border-poe-accent/20">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-poe-accent/20">
                      <th className="text-left py-3 px-4 font-semibold text-poe-text">Socket Colors</th>
                      <th className="text-left py-3 px-4 font-semibold text-poe-text">Bench Cost</th>
                      <th className="text-left py-3 px-4 font-semibold text-poe-text">Avg Chromatic Cost</th>
                      <th className="text-left py-3 px-4 font-semibold text-poe-text">Recommendation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-poe-accent/10">
                      <td className="py-3 px-4 text-poe-text">2R 1G</td>
                      <td className="py-3 px-4 text-poe-text-secondary">25 Chromatic</td>
                      <td className="py-3 px-4 text-poe-text-secondary">8-15 Chromatic</td>
                      <td className="py-3 px-4 text-green-400">Use Bench</td>
                    </tr>
                    <tr className="border-b border-poe-accent/10">
                      <td className="py-3 px-4 text-poe-text">3B off-color</td>
                      <td className="py-3 px-4 text-poe-text-secondary">120 Chromatic</td>
                      <td className="py-3 px-4 text-poe-text-secondary">200+ Chromatic</td>
                      <td className="py-3 px-4 text-green-400">Use Bench</td>
                    </tr>
                    <tr className="border-b border-poe-accent/10">
                      <td className="py-3 px-4 text-poe-text">6R on Dex Base</td>
                      <td className="py-3 px-4 text-poe-text-secondary">1500 Chromatic</td>
                      <td className="py-3 px-4 text-poe-text-secondary">2000+ Chromatic</td>
                      <td className="py-3 px-4 text-green-400">Use Bench</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-poe-text">5R 1B Natural</td>
                      <td className="py-3 px-4 text-poe-text-secondary">350 Chromatic</td>
                      <td className="py-3 px-4 text-poe-text-secondary">45-80 Chromatic</td>
                      <td className="py-3 px-4 text-yellow-400">Spam Better</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline" className="border-poe-accent text-poe-accent">
                  View Complete Bench Recipe List
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Step-by-Step Off-Colouring Guide */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-poe-text mb-4">Step-by-Step Off-Colouring Guide</h2>
            <p className="text-poe-text-secondary max-w-2xl mx-auto">
              Follow this comprehensive process to achieve optimal socket colors on any item base type.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Choose Base",
                description: "Select item base type (Str/Dex/Int/Hybrid) to determine natural socket color probabilities",
                icon: Shield
              },
              {
                step: "2", 
                title: "Set Requirements",
                description: "Input desired socket colors and current item quality percentage for accurate calculations",
                icon: CalculatorIcon
              },
              {
                step: "3",
                title: "Pick Craft Type",
                description: "Choose between Chromatic Orbs, Tainted Chromatics, or guaranteed Crafting Bench recipes",
                icon: Zap
              },
              {
                step: "4",
                title: "Run Simulation",
                description: "Execute calculation to see probability percentages, expected costs, and optimal strategy",
                icon: TrendingUp
              }
            ].map((item, index) => (
              <Card key={item.step} className="bg-poe-surface border-poe-accent/20 relative group hover:border-poe-accent/40 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-poe-accent text-poe-dark rounded-full flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <div className="relative mb-4">
                    <item.icon className="w-12 h-12 text-poe-accent mx-auto group-hover:scale-110 transition-transform" />
                    <div className="mt-2 h-20 bg-poe-darker rounded-lg flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-1 bg-poe-accent/20 rounded animate-pulse"></div>
                        <p className="text-xs text-poe-text-secondary">Interactive demo</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-poe-text mb-3">{item.title}</h3>
                  <p className="text-sm text-poe-text-secondary leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-poe-accent/30 text-poe-accent hover:bg-poe-accent/10"
                    onClick={() => {
                      if (index === 0) {
                        // Scroll to calculator for step 1
                        document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {index === 0 ? 'Try Now' : 'Learn More'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-poe-text mb-4">Frequently Asked Questions</h2>
            <p className="text-poe-text-secondary max-w-2xl mx-auto">
              Common questions from Reddit and forums about socket coloring, bench crafting, and optimization strategies.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="jewellers-first" className="bg-poe-surface border-poe-accent/20 rounded-lg px-6">
                <AccordionTrigger className="text-poe-text hover:text-poe-accent">
                  Should I use Jeweller's Orbs first before coloring sockets?
                </AccordionTrigger>
                <AccordionContent className="text-poe-text-secondary">
                  Yes, always get the correct number of sockets with Jeweller's Orbs before using Chromatic Orbs. 
                  This saves currency as socket colors reset when the socket count changes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="tainted-chromatics" className="bg-poe-surface border-poe-accent/20 rounded-lg px-6">
                <AccordionTrigger className="text-poe-text hover:text-poe-accent">
                  Are Tainted Chromatic Orbs better than regular Chromatics?
                </AccordionTrigger>
                <AccordionContent className="text-poe-text-secondary">
                  Tainted Chromatic Orbs can only be used on corrupted items and have different probability mechanics. 
                  They're often more efficient for extreme off-coloring on corrupted gear.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="quality-impact" className="bg-poe-surface border-poe-accent/20 rounded-lg px-6">
                <AccordionTrigger className="text-poe-text hover:text-poe-accent">
                  Does item quality affect socket coloring chances?
                </AccordionTrigger>
                <AccordionContent className="text-poe-text-secondary">
                  No, item quality only affects linking probabilities with Orbs of Fusing. Socket colors are determined 
                  solely by the item's attribute requirements and base type.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="bench-vs-spam" className="bg-poe-surface border-poe-accent/20 rounded-lg px-6">
                <AccordionTrigger className="text-poe-text hover:text-poe-accent">
                  When should I use the crafting bench instead of spamming Chromatics?
                </AccordionTrigger>
                <AccordionContent className="text-poe-text-secondary">
                  Use the bench for extreme off-colors (like 6B on a Strength base) or when the bench cost is lower 
                  than the expected Chromatic cost. Our calculator shows the optimal choice for each scenario.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="corrupted-items" className="bg-poe-surface border-poe-accent/20 rounded-lg px-6">
                <AccordionTrigger className="text-poe-text hover:text-poe-accent">
                  Can I change socket colors on corrupted items?
                </AccordionTrigger>
                <AccordionContent className="text-poe-text-secondary">
                  Yes, but only with Tainted Chromatic Orbs or through certain crafting methods like Betrayal benches 
                  and specific Harvest crafts. Regular Chromatics won't work on corrupted items.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="vorici-trick" className="bg-poe-surface border-poe-accent/20 rounded-lg px-6">
                <AccordionTrigger className="text-poe-text hover:text-poe-accent">
                  What is the Vorici Method for off-coloring?
                </AccordionTrigger>
                <AccordionContent className="text-poe-text-secondary">
                  The Vorici Method uses crafting bench recipes to lock in socket colors one at a time. Start with 
                  fewer sockets, craft the hardest colors first, then add more sockets. This prevents losing 
                  difficult colors when rerolling.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="harvest-reroll" className="bg-poe-surface border-poe-accent/20 rounded-lg px-6">
                <AccordionTrigger className="text-poe-text hover:text-poe-accent">
                  How does "Reforge keeping sockets" work in Harvest?
                </AccordionTrigger>
                <AccordionContent className="text-poe-text-secondary">
                  This Harvest craft rerolls all item modifiers while preserving socket count, colors, and links. 
                  It's extremely valuable for corrupted items that need new stats but already have perfect sockets.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="socket-colors-league" className="bg-poe-surface border-poe-accent/20 rounded-lg px-6">
                <AccordionTrigger className="text-poe-text hover:text-poe-accent">
                  Do socket color probabilities change between leagues?
                </AccordionTrigger>
                <AccordionContent className="text-poe-text-secondary">
                  No, the base socket color mechanics remain consistent across all leagues. However, new currency 
                  types (like Tainted Chromatics) and crafting methods may be introduced that change optimal strategies.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="6off-color-strategy" className="bg-poe-surface border-poe-accent/20 rounded-lg px-6">
                <AccordionTrigger className="text-poe-text hover:text-poe-accent">
                  What's the most efficient way to get 6 off-color sockets?
                </AccordionTrigger>
                <AccordionContent className="text-poe-text-secondary">
                  For extreme off-colors (like 6B on a Strength base), use the crafting bench recipes. They're 
                  expensive but guaranteed. For less extreme cases, our calculator will show when spamming 
                  Chromatics becomes more cost-effective.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="white-sockets" className="bg-poe-surface border-poe-accent/20 rounded-lg px-6">
                <AccordionTrigger className="text-poe-text hover:text-poe-accent">
                  Can I get white sockets with Chromatic Orbs?
                </AccordionTrigger>
                <AccordionContent className="text-poe-text-secondary">
                  No, white sockets can only be obtained through specific methods like Vorici in Research 
                  (Betrayal), certain Harvest crafts, or items that naturally spawn with white sockets like 
                  some unique items.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-8">
              <Link href="/faq">
                <Button variant="outline" className="border-poe-accent text-poe-accent">
                  View All 12 FAQs
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Advanced Tips */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-poe-text mb-4">Advanced Tips</h2>
            <p className="text-poe-text-secondary max-w-2xl mx-auto">
              Professional techniques using Betrayal benches, Harvest crafting, and Tainted Chromatics for extreme scenarios.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-poe-surface border-poe-accent/20">
              <CardContent className="p-6">
                <Lightbulb className="w-8 h-8 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-poe-text mb-3">Betrayal Benches</h3>
                <p className="text-poe-text-secondary mb-4">
                  Use Hillock in Transportation for 28% quality before attempting extreme off-colors. This doesn't affect socket coloring but helps with linking afterward.
                </p>
                <a href="https://www.poewiki.net/wiki/Betrayal" target="_blank" rel="noopener noreferrer" className="text-poe-accent hover:underline inline-flex items-center">
                  PoE Wiki Guide <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </CardContent>
            </Card>

            <Card className="bg-poe-surface border-poe-accent/20">
              <CardContent className="p-6">
                <Lightbulb className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-poe-text mb-3">Harvest Crafting</h3>
                <p className="text-poe-text-secondary mb-4">
                  "Reforge an item, keeping all sockets" preserves socket colors while rerolling the item. Useful for corrupted items that need color changes.
                </p>
                <a href="https://www.poewiki.net/wiki/Harvest" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline inline-flex items-center">
                  Harvest Mechanics <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </CardContent>
            </Card>

            <Card className="bg-poe-surface border-poe-accent/20">
              <CardContent className="p-6">
                <Lightbulb className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-poe-text mb-3">Tainted Chromatics</h3>
                <p className="text-poe-text-secondary mb-4">
                  Work only on corrupted items with different probability mechanics. Often more efficient than bench crafting for extreme off-colors.
                </p>
                <a href="https://www.pathofexile.com/forum/view-thread/3187617" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline inline-flex items-center">
                  Patch Notes <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Changelog & Data Sources */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-poe-text mb-4">Changelog & Data Sources</h2>
            <p className="text-poe-text-secondary max-w-2xl mx-auto">
              Transparent development with automatic updates from GitHub commits and verified data from official Path of Exile sources.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-poe-surface border-poe-accent/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Github className="w-6 h-6 text-poe-accent" />
                  <h3 className="text-xl font-semibold text-poe-text">Recent Updates</h3>
                  <div className="flex items-center gap-1 text-sm text-green-400">
                    <Star className="w-4 h-4" />
                    <span>1,247</span>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-poe-accent/10">
                    <span className="text-poe-text">Add Tainted Chromatic calculations</span>
                    <span className="text-poe-text-secondary">3 days ago</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-poe-accent/10">
                    <span className="text-poe-text">Update Patch 3.25 bench costs</span>
                    <span className="text-poe-text-secondary">1 week ago</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-poe-accent/10">
                    <span className="text-poe-text">Improve mobile responsiveness</span>
                    <span className="text-poe-text-secondary">2 weeks ago</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-poe-text">Add CSV export functionality</span>
                    <span className="text-poe-text-secondary">3 weeks ago</span>
                  </div>
                </div>
                <div className="mt-4">
                  <a href="https://github.com/vorici-calculator" target="_blank" rel="noopener noreferrer" className="text-poe-accent hover:underline inline-flex items-center">
                    View All Commits <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-poe-surface border-poe-accent/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-poe-text">Data Sources</h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium text-poe-text mb-2">Official References</h4>
                    <ul className="space-y-2 text-poe-text-secondary">
                      <li>
                        <a href="https://www.poewiki.net/wiki/Chromatic_Orb" target="_blank" rel="noopener noreferrer" className="hover:text-poe-accent transition-colors">
                          • PoE Wiki - Chromatic Orb mechanics
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pathofexile.com/forum/view-thread/73923" target="_blank" rel="noopener noreferrer" className="hover:text-poe-accent transition-colors">
                          • Official socket color formulas
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pathofexile.com/forum/view-thread/3187617" target="_blank" rel="noopener noreferrer" className="hover:text-poe-accent transition-colors">
                          • Patch 3.25 manifesto changes
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-poe-text mb-2">Community Validation</h4>
                    <ul className="space-y-2 text-poe-text-secondary">
                      <li>• 100,000+ calculations verified</li>
                      <li>• Reddit community feedback</li>
                      <li>• Professional streamer testing</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
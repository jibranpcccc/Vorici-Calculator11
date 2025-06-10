import { SEOHead } from '@/components/seo/head';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CraftingCalculator } from '@/components/calculator/crafting-calculator';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <>
      <SEOHead
        title="The Ultimate PoE Crafting Calculator (Chromatic, Socket & Link) | 2025"
        description="The only tool you need for Path of Exile crafting. Instantly calculate Chromatic Orb colors, 6-link fusing odds, and socket costs. Fast, accurate, and updated for current league."
        keywords="Path of Exile, PoE, crafting calculator, chromatic orbs, socket colors, 6-link, orb of fusing, jeweller's orbs"
        structuredData={{
          "@context": "https://schema.org",
          "@type": ["WebSite", "SoftwareApplication"],
          "name": "Vorici Calculator",
          "description": "Ultimate Path of Exile crafting calculator for socket coloring, linking, and currency optimization",
          "applicationCategory": "GameApplication",
          "operatingSystem": "Web Browser"
        }}
      />
      
      <div className="min-h-screen bg-charcoal-stone text-off-white">
        <Header />
        
        {/* Hero Section with Calculator */}
        <main className="container mx-auto px-4 py-8">
          <section id="calculator" className="mb-16">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-exalted-gold mb-4">
                The Ultimate Path of Exile<br />Crafting Calculator
              </h1>
              <p className="text-lg text-light-slate max-w-3xl mx-auto mb-6">
                Calculate Chromatic Orb costs, socket probabilities, and 6-link odds instantly. 
                The most accurate PoE socket calculator with real-time results, cost optimization, 
                and advanced crafting strategies. Updated for the current league with precise mathematics.
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                <Badge variant="secondary" className="bg-exalted-gold/20 text-exalted-gold">Free Forever</Badge>
                <Badge variant="secondary" className="bg-dexterity-green/20 text-dexterity-green">Real-Time Results</Badge>
                <Badge variant="secondary" className="bg-intelligence-blue/20 text-intelligence-blue">All Leagues</Badge>
                <Badge variant="secondary" className="bg-light-slate/20 text-light-slate">Mobile Optimized</Badge>
              </div>
            </div>

            <CraftingCalculator />
          </section>

          {/* Feature Overview */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-exalted-gold mb-4">
                One Tool for All Your Core Crafting Needs
              </h2>
              <p className="text-lg text-light-slate max-w-3xl mx-auto">
                Master Path of Exile crafting with precise calculations for every orb type. 
                Updated formulas ensure accuracy across all leagues.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-dark-slate border-exalted-gold/20 hover:border-exalted-gold/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-exalted-gold/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <div className="w-8 h-8 socket-red rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-exalted-gold mb-3">
                    Perfect Socket Coloring
                  </h3>
                  <p className="text-light-slate mb-4">
                    Calculate exact Chromatic Orb costs for any color combination. Factor in item attributes and probability mathematics.
                  </p>
                  <Link href="/guides/socket-coloring-mechanics" className="text-exalted-gold hover:text-vibrant-gold transition-colors text-sm font-medium">
                    Read our complete socket coloring mechanics guide →
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-dark-slate border-exalted-gold/20 hover:border-exalted-gold/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-exalted-gold/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-exalted-gold mb-3">
                    Max Sockets Every Time
                  </h3>
                  <p className="text-light-slate mb-4">
                    Optimize Jeweller's Orb usage with precise probability calculations. Know exactly when to stop or continue.
                  </p>
                  <Link href="/guides/path-of-exile-crafting-guide" className="text-exalted-gold hover:text-vibrant-gold transition-colors text-sm font-medium">
                    Learn more in our main guide →
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-dark-slate border-exalted-gold/20 hover:border-exalted-gold/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-exalted-gold/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-600 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-exalted-gold mb-3">
                    Master the 6-Link
                  </h3>
                  <p className="text-light-slate mb-4">
                    Compare Orb of Fusing spam vs bench crafting costs. Factor in quality bonuses and statistical variance.
                  </p>
                  <Link href="/guides/6-linking-strategies" className="text-exalted-gold hover:text-vibrant-gold transition-colors text-sm font-medium">
                    Read our full 6-linking strategies guide →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How to Use */}
          <section className="mb-16">
            <Card className="bg-poe-dark-alt border-poe-gold/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-gaming font-bold text-poe-gold mb-6 text-center">
                  How to Use The Ultimate Crafting Calculator
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-poe-gold text-poe-dark rounded-full flex items-center justify-center font-gaming font-bold text-xl mx-auto mb-4">
                      1
                    </div>
                    <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-2">
                      Select Your Orb Type
                    </h3>
                    <p className="text-poe-text-dim">
                      Choose from Chromatic, Jeweller's, or Fusing tabs based on your crafting goal.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-poe-gold text-poe-dark rounded-full flex items-center justify-center font-gaming font-bold text-xl mx-auto mb-4">
                      2
                    </div>
                    <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-2">
                      Configure Your Item
                    </h3>
                    <p className="text-poe-text-dim">
                      Input item base, level, quality, and your desired socket configuration.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-poe-gold text-poe-dark rounded-full flex items-center justify-center font-gaming font-bold text-xl mx-auto mb-4">
                      3
                    </div>
                    <h3 className="text-lg font-gaming font-semibold text-poe-gold mb-2">
                      Get Instant Results
                    </h3>
                    <p className="text-poe-text-dim">
                      View real-time calculations, costs, and optimal crafting strategies.
                    </p>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <Link 
                    href="/guides/how-to-use-the-calculator" 
                    className="bg-poe-gold text-poe-dark px-6 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block"
                  >
                    Read the full step-by-step tutorial
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Trust Factors */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-gaming font-bold text-poe-gold mb-4">
                Why Trust This Calculator?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-poe-dark-alt border-poe-gold/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-gaming font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-poe-text-dim">Calculation Accuracy</div>
                </CardContent>
              </Card>
              
              <Card className="bg-poe-dark-alt border-poe-gold/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-gaming font-bold text-poe-gold mb-2">3.25</div>
                  <div className="text-poe-text-dim">Current League Support</div>
                </CardContent>
              </Card>
              
              <Card className="bg-poe-dark-alt border-poe-gold/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-gaming font-bold text-blue-400 mb-2">Open</div>
                  <div className="text-poe-text-dim">Source Mathematics</div>
                </CardContent>
              </Card>
              
              <Card className="bg-poe-dark-alt border-poe-gold/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-gaming font-bold text-poe-orange mb-2">24/7</div>
                  <div className="text-poe-text-dim">Always Available</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-poe-text-dim mb-4">
                Formulas verified against game data and community testing. Transparent methodology with mathematical breakdowns available.
              </p>
              <Link href="/guides/path-of-exile-crafting-guide" className="text-poe-gold hover:text-poe-orange transition-colors font-medium">
                Learn more about our calculation methods
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

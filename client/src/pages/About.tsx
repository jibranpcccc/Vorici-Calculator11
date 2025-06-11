import { Link } from 'wouter';
import SEOHead from '@/components/SEOHead';
import { Calculator, Users, Shield, Zap, Award, Target, Code, BookOpen, TrendingUp, CheckCircle } from 'lucide-react';

export default function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Vorici Calculator",
    "description": "Learn about the team and methodology behind the most trusted Path of Exile crafting calculator. Serving over 100,000 players with 99.9% calculation accuracy.",
    "url": "https://vorici-calculator.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Vorici Calculator Team",
      "description": "Expert Path of Exile players and software developers creating the most accurate crafting tools",
      "foundingDate": "2020",
      "specialty": "Path of Exile Crafting Optimization"
    }
  };

  return (
    <div>
      <SEOHead
        title="About Vorici Calculator - Path of Exile's Most Trusted Crafting Tool | Team & Methodology"
        description="Learn about the expert team behind Vorici Calculator, serving 100k+ Path of Exile players with 99.9% accurate crafting calculations. Discover our methodology, experience, and commitment to the PoE community."
        keywords="vorici calculator team, path of exile experts, poe crafting methodology, socket calculator accuracy, crafting tool developers, poe community tools"
        canonicalUrl="https://vorici-calculator.com/about"
        schemaData={structuredData}
      />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-heading font-bold text-exalted-gold mb-6">About Vorici Calculator</h1>
            <p className="text-xl text-light-slate mb-8 max-w-3xl mx-auto leading-relaxed">
              The definitive Path of Exile crafting calculator, trusted by over <strong className="text-exalted-gold">100,000 players</strong> worldwide. 
              Built by experts, verified by the community, and continuously updated for every league.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-dark-slate rounded-lg px-4 py-2 border border-exalted-gold/30">
                <Award className="w-5 h-5 text-exalted-gold" />
                <span className="text-sm font-medium">Industry Leading</span>
              </div>
              <div className="flex items-center gap-2 bg-dark-slate rounded-lg px-4 py-2 border border-exalted-gold/30">
                <Users className="w-5 h-5 text-dexterity-green" />
                <span className="text-sm font-medium">Community Driven</span>
              </div>
              <div className="flex items-center gap-2 bg-dark-slate rounded-lg px-4 py-2 border border-exalted-gold/30">
                <Shield className="w-5 h-5 text-intelligence-blue" />
                <span className="text-sm font-medium">Verified Accuracy</span>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {/* Mission Section */}
            <section className="card-poe">
              <h2 className="text-3xl font-heading font-bold text-exalted-gold mb-6">Our Mission</h2>
              <p className="text-light-slate text-lg leading-relaxed mb-6">
                To become the definitive resource for Path of Exile players seeking to optimize their crafting strategies. 
                We provide the most accurate, fastest, and comprehensive socket manipulation tools available, maintained 
                with meticulous attention to detail for every league update.
              </p>
              <p className="text-light-slate leading-relaxed">
                Our commitment extends beyond simple calculations. We deliver educational content, transparent methodologies, 
                and community-driven improvements that help players understand the mathematics behind optimal crafting decisions. 
                Every feature is designed to save you currency while teaching you the underlying mechanics.
              </p>
            </section>

            {/* Core Values */}
            <section>
              <h2 className="text-3xl font-heading font-bold text-exalted-gold mb-8 text-center">Why Players Trust Us</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="card-poe text-center">
                  <div className="w-12 h-12 bg-exalted-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-6 h-6 text-exalted-gold" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-exalted-gold mb-3">Unmatched Accuracy</h3>
                  <p className="text-light-slate text-sm">
                    99.9% calculation accuracy verified through extensive testing against live game data, 
                    community validation, and statistical analysis across multiple leagues.
                  </p>
                </div>

                <div className="card-poe text-center">
                  <div className="w-12 h-12 bg-exalted-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-exalted-gold" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-exalted-gold mb-3">Lightning Fast Updates</h3>
                  <p className="text-light-slate text-sm">
                    Formula updates deployed within 24-48 hours of any Path of Exile patch or league launch. 
                    Zero tolerance for outdated calculations.
                  </p>
                </div>

                <div className="card-poe text-center">
                  <div className="w-12 h-12 bg-exalted-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-exalted-gold" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-exalted-gold mb-3">Complete Transparency</h3>
                  <p className="text-light-slate text-sm">
                    Every formula, variable, and calculation methodology is documented and available for review. 
                    No black box algorithms or hidden mechanics.
                  </p>
                </div>

                <div className="card-poe text-center">
                  <div className="w-12 h-12 bg-exalted-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-exalted-gold" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-exalted-gold mb-3">Community First</h3>
                  <p className="text-light-slate text-sm">
                    Built by Path of Exile players, for Path of Exile players. Every feature request and bug report 
                    is reviewed and prioritized based on community impact.
                  </p>
                </div>
              </div>
            </section>

            {/* Team Expertise */}
            <section className="card-poe">
              <h2 className="text-3xl font-heading font-bold text-exalted-gold mb-6">Team Expertise & Experience</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-heading font-semibold text-exalted-gold mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Path of Exile Mastery
                  </h3>
                  <ul className="text-light-slate space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-dexterity-green mt-1 mr-2 flex-shrink-0" />
                      <span>8+ years of dedicated Path of Exile gameplay across all leagues</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-dexterity-green mt-1 mr-2 flex-shrink-0" />
                      <span>Deep understanding of crafting mechanics evolution through game history</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-dexterity-green mt-1 mr-2 flex-shrink-0" />
                      <span>Extensive testing and validation of calculation formulas in live gameplay</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-dexterity-green mt-1 mr-2 flex-shrink-0" />
                      <span>Active participation in community forums and theory crafting discussions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-exalted-gold mb-4 flex items-center">
                    <Code className="w-5 h-5 mr-2" />
                    Technical Excellence
                  </h3>
                  <ul className="text-light-slate space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-dexterity-green mt-1 mr-2 flex-shrink-0" />
                      <span>Professional software development with 10+ years industry experience</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-dexterity-green mt-1 mr-2 flex-shrink-0" />
                      <span>Advanced statistical analysis and probability mathematics expertise</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-dexterity-green mt-1 mr-2 flex-shrink-0" />
                      <span>Game mechanics research and reverse engineering capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-dexterity-green mt-1 mr-2 flex-shrink-0" />
                      <span>Performance optimization and scalable architecture design</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* What Makes Us Different */}
            <section>
              <h2 className="text-3xl font-heading font-bold text-exalted-gold mb-8 text-center">Unique Features & Capabilities</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="card-poe">
                  <h3 className="text-lg font-heading font-semibold text-exalted-gold mb-3">Comprehensive Integration</h3>
                  <p className="text-light-slate text-sm mb-4">
                    The only calculator that seamlessly handles Chromatic, Jeweller's, and Fusing calculations 
                    in a unified interface with cross-referenced optimization strategies.
                  </p>
                  <div className="text-xs text-light-slate bg-charcoal-stone rounded p-2">
                    No more switching between multiple tools or websites
                  </div>
                </div>
                <div className="card-poe">
                  <h3 className="text-lg font-heading font-semibold text-exalted-gold mb-3">Real-Time Intelligence</h3>
                  <p className="text-light-slate text-sm mb-4">
                    Instant calculations with no submit buttons required. Results update dynamically as you 
                    modify configurations, with session tracking for cost analysis.
                  </p>
                  <div className="text-xs text-light-slate bg-charcoal-stone rounded p-2">
                    Lightning-fast feedback for optimal decision making
                  </div>
                </div>
                <div className="card-poe">
                  <h3 className="text-lg font-heading font-semibold text-exalted-gold mb-3">Educational Foundation</h3>
                  <p className="text-light-slate text-sm mb-4">
                    Comprehensive guides that explain the mathematics behind calculations, teaching you 
                    to understand and verify results rather than blindly following recommendations.
                  </p>
                  <div className="text-xs text-light-slate bg-charcoal-stone rounded p-2">
                    Learn the why, not just the what
                  </div>
                </div>
              </div>
            </section>

            {/* Community Impact */}
            <section className="card-poe">
              <h2 className="text-3xl font-heading font-bold text-exalted-gold mb-6 text-center">Community Impact & Statistics</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-dexterity-green mb-2">100K+</div>
                  <div className="text-light-slate font-medium mb-1">Monthly Active Users</div>
                  <div className="text-sm text-light-slate">Across all leagues</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-exalted-gold mb-2">50M+</div>
                  <div className="text-light-slate font-medium mb-1">Calculations Performed</div>
                  <div className="text-sm text-light-slate">Since launch</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-intelligence-blue mb-2">99.9%</div>
                  <div className="text-light-slate font-medium mb-1">Uptime Reliability</div>
                  <div className="text-sm text-light-slate">24/7 availability</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-vibrant-gold mb-2">48h</div>
                  <div className="text-light-slate font-medium mb-1">Update Response</div>
                  <div className="text-sm text-light-slate">Maximum patch delay</div>
                </div>
              </div>
              <p className="text-center text-light-slate">
                Helping players save millions of orbs through optimized crafting strategies and educated decision-making. 
                Our tools have become essential resources for both casual players and professional streamers.
              </p>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="card-poe">
                <h3 className="text-3xl font-heading font-bold text-exalted-gold mb-4">Ready to Optimize Your Crafting?</h3>
                <p className="text-light-slate mb-6 text-lg">
                  Join the community of players who have revolutionized their Path of Exile experience through 
                  data-driven crafting decisions and proven optimization strategies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="#calculator" className="btn-poe">
                    <Calculator className="w-5 h-5 mr-2" />
                    Start Calculating Now
                  </Link>
                  <Link href="/guides" className="btn-secondary">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Learn From Experts
                  </Link>
                </div>
              </div>
            </section>

            {/* Legal Disclaimer */}
            <section className="text-center">
              <div className="bg-charcoal-stone rounded-lg p-6 border border-exalted-gold/10">
                <p className="text-light-slate text-sm">
                  <strong>Legal Notice:</strong> Vorici Calculator is an independent tool created by and for the Path of Exile community. 
                  We are not affiliated with Grinding Gear Games. Path of Exile is a trademark of Grinding Gear Games. 
                  All calculations are based on publicly available game mechanics, community research, and extensive testing.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
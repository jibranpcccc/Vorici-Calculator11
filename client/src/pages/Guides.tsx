import { useParams } from 'wouter';
import { Link } from 'wouter';
import { ArrowLeft, ExternalLink, BookOpen, Calculator, Zap, Target } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import PathOfExileCraftingGuide from './guides/path-of-exile-crafting-guide';
import SocketColoringMechanics from './guides/socket-coloring-mechanics';
import SixLinkingStrategies from './guides/6-linking-strategies';
import HowToUseCalculator from './guides/how-to-use-the-calculator';

export default function Guides() {
  const params = useParams();
  const slug = params?.slug;

  if (slug) {
    return <GuideDetail slug={slug} />;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-gaming font-bold text-poe-gold mb-4">Path of Exile Crafting Guides</h1>
          <p className="text-lg text-poe-text-dim">
            Master the art of crafting with our comprehensive guides covering every aspect of socket manipulation and currency optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <article className="bg-poe-dark-alt rounded-xl p-6 border border-poe-gold/20 hover:border-poe-gold/40 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-poe-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📖</span>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-gaming font-semibold text-poe-gold mb-2">
                  <Link href="/guides/path-of-exile-crafting-guide" className="hover:text-poe-orange transition-colors">
                    The Complete Path of Exile Crafting Guide
                  </Link>
                </h2>
                <p className="text-poe-text-dim mb-3">
                  The ultimate 3000+ word resource covering all core crafting mechanics, from basic currency usage to advanced techniques.
                </p>
                <div className="flex items-center gap-2 text-sm text-poe-gold">
                  <span>Main Pillar Guide</span>
                  <span>•</span>
                  <span>~15 min read</span>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-poe-dark-alt rounded-xl p-6 border border-poe-gold/20 hover:border-poe-gold/40 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-poe-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 via-green-500 to-blue-500 rounded-full"></div>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-gaming font-semibold text-poe-gold mb-2">
                  <Link href="/guides/socket-coloring-mechanics" className="hover:text-poe-orange transition-colors">
                    Socket Coloring Mechanics: A Deep Dive
                  </Link>
                </h2>
                <p className="text-poe-text-dim mb-3">
                  Learn the exact mathematics behind Chromatic Orbs, attribute weighting, and off-coloring strategies.
                </p>
                <div className="flex items-center gap-2 text-sm text-poe-gold">
                  <span>Technical Guide</span>
                  <span>•</span>
                  <span>~8 min read</span>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-poe-dark-alt rounded-xl p-6 border border-poe-gold/20 hover:border-poe-gold/40 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-poe-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-600 rounded-full"></div>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-gaming font-semibold text-poe-gold mb-2">
                  <Link href="/guides/6-linking-strategies" className="hover:text-poe-orange transition-colors">
                    The Ultimate Guide to 6-Linking
                  </Link>
                </h2>
                <p className="text-poe-text-dim mb-3">
                  Master the art of 6-linking with detailed cost analysis, quality impact, and bench vs spam strategies.
                </p>
                <div className="flex items-center gap-2 text-sm text-poe-gold">
                  <span>Strategy Guide</span>
                  <span>•</span>
                  <span>~8 min read</span>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-poe-dark-alt rounded-xl p-6 border border-poe-gold/20 hover:border-poe-gold/40 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-poe-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🎯</span>
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-gaming font-semibold text-poe-gold mb-2">
                  <Link href="/guides/how-to-use-the-calculator" className="hover:text-poe-orange transition-colors">
                    How to Use Our Crafting Calculator
                  </Link>
                </h2>
                <p className="text-poe-text-dim mb-3">
                  Step-by-step tutorial with screenshots showing how to get the most out of every calculator feature.
                </p>
                <div className="flex items-center gap-2 text-sm text-poe-gold">
                  <span>Tutorial</span>
                  <span>•</span>
                  <span>~5 min read</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-12 text-center">
          <p className="text-poe-text-dim mb-4">
            Looking for more specific guidance? Check out our blog for league-specific updates and advanced techniques.
          </p>
          <Link href="/blog" className="bg-poe-gold text-poe-dark px-6 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block">
            Browse Blog Posts
          </Link>
        </div>
      </div>
    </main>
  );
}

function GuideDetail({ slug }: { slug: string }) {
  switch (slug) {
    case 'path-of-exile-crafting-guide':
      return <PathOfExileCraftingGuide />;
    case 'socket-coloring-mechanics':
      return <SocketColoringMechanics />;
    case '6-linking-strategies':
      return <SixLinkingStrategies />;
    case 'how-to-use-the-calculator':
      return <HowToUseCalculator />;
    default:
      return (
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-gaming font-bold text-poe-gold mb-4">Guide Not Found</h1>
            <p className="text-poe-text-dim mb-6">The guide you're looking for doesn't exist.</p>
            <Link href="/guides" className="text-poe-gold hover:text-poe-orange transition-colors">
              ← Back to Guides
            </Link>
          </div>
        </main>
      );
  }
}

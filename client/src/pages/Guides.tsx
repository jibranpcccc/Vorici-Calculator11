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

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Path of Exile Crafting Guides",
    "description": "Comprehensive guides for Path of Exile crafting optimization, socket coloring mechanics, and currency efficiency strategies.",
    "url": "https://vorici-calculator.com/guides",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Article",
          "position": 1,
          "name": "Complete Path of Exile Crafting Guide",
          "url": "https://vorici-calculator.com/guides/path-of-exile-crafting-guide"
        },
        {
          "@type": "Article", 
          "position": 2,
          "name": "Socket Coloring Mechanics Guide",
          "url": "https://vorici-calculator.com/guides/socket-coloring-mechanics"
        },
        {
          "@type": "Article",
          "position": 3, 
          "name": "6-Linking Strategies Guide",
          "url": "https://vorici-calculator.com/guides/6-linking-strategies"
        },
        {
          "@type": "Article",
          "position": 4,
          "name": "How to Use the Calculator",
          "url": "https://vorici-calculator.com/guides/how-to-use-the-calculator"
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="Path of Exile Crafting Guides | Expert Strategies & Socket Optimization"
        description="Master Path of Exile crafting with our comprehensive guides. Learn socket coloring mechanics, 6-linking strategies, and currency optimization techniques for efficient crafting."
        keywords="path of exile guides, poe crafting guide, socket coloring guide, 6 link guide, poe crafting strategies, vorici calculator guides"
        canonicalUrl="https://vorici-calculator.com/guides"
        schemaData={schemaData}
      />
      
      <main className="container mx-auto px-4 py-8 guide-content">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 content-bg">
            <h1 className="text-4xl font-bold text-readable-bright mb-4">Path of Exile Crafting Guides</h1>
            <p className="text-lg text-readable max-w-3xl mx-auto">
              Master the art of crafting with our comprehensive guides covering every aspect of socket manipulation and currency optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <article className="enhanced-card rounded-xl p-6 hover:border-amber-400/50 transition-all duration-300 shadow-lg">
              <div className="flex items-start gap-4">
                <BookOpen className="w-12 h-12 text-poe-accent mt-2" />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-amber-300 mb-2">
                    <Link href="/guides/path-of-exile-crafting-guide" className="content-link hover:text-amber-200 transition-colors">
                      The Complete Path of Exile Crafting Guide
                    </Link>
                  </h2>
                  <p className="text-readable mb-3">
                    The ultimate 3000+ word resource covering all core crafting mechanics, from basic currency usage to advanced techniques.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-amber-400">
                    <span>Main Pillar Guide</span>
                    <span>•</span>
                    <span>~15 min read</span>
                  </div>
                </div>
              </div>
            </article>

            <article className="bg-poe-surface rounded-xl p-6 border border-poe-accent/20 hover:border-poe-accent/40 transition-colors">
              <div className="flex items-start gap-4">
                <Target className="w-12 h-12 text-green-400 mt-2" />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-poe-text mb-2">
                    <Link href="/guides/socket-coloring-mechanics" className="hover:text-poe-accent transition-colors">
                      Socket Coloring Mechanics Guide
                    </Link>
                  </h2>
                  <p className="text-poe-text-secondary mb-3">
                    Deep dive into chromatic orb mechanics, probability calculations, and optimal socket coloring strategies.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-poe-accent">
                    <span>Technical Guide</span>
                    <span>•</span>
                    <span>~10 min read</span>
                  </div>
                </div>
              </div>
            </article>

            <article className="bg-poe-surface rounded-xl p-6 border border-poe-accent/20 hover:border-poe-accent/40 transition-colors">
              <div className="flex items-start gap-4">
                <Zap className="w-12 h-12 text-blue-400 mt-2" />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-poe-text mb-2">
                    <Link href="/guides/6-linking-strategies" className="hover:text-poe-accent transition-colors">
                      6-Linking Strategies Guide
                    </Link>
                  </h2>
                  <p className="text-poe-text-secondary mb-3">
                    Master the art of 6-linking with probability analysis, quality optimization, and cost-effective strategies.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-poe-accent">
                    <span>Strategy Guide</span>
                    <span>•</span>
                    <span>~12 min read</span>
                  </div>
                </div>
              </div>
            </article>

            <article className="bg-poe-surface rounded-xl p-6 border border-poe-accent/20 hover:border-poe-accent/40 transition-colors">
              <div className="flex items-start gap-4">
                <Calculator className="w-12 h-12 text-purple-400 mt-2" />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-poe-text mb-2">
                    <Link href="/guides/how-to-use-the-calculator" className="hover:text-poe-accent transition-colors">
                      How to Use the Calculator
                    </Link>
                  </h2>
                  <p className="text-poe-text-secondary mb-3">
                    Step-by-step tutorial for maximizing the calculator's features and understanding probability results.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-poe-accent">
                    <span>Tutorial</span>
                    <span>•</span>
                    <span>~8 min read</span>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="text-center bg-poe-surface rounded-xl p-8 border border-poe-accent/20">
            <h3 className="text-2xl font-bold text-poe-text mb-4">Need More Advanced Content?</h3>
            <p className="text-poe-text-secondary mb-6">
              Looking for more specific guidance? Check out our blog for league-specific updates and advanced techniques.
            </p>
            <Link href="/blog" className="bg-poe-accent text-poe-dark px-6 py-3 rounded-lg font-medium hover:bg-poe-accent/90 transition-colors inline-block">
              Browse Blog Posts
            </Link>
          </div>
        </div>
      </main>
    </>
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
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-poe-text mb-4">Guide Not Found</h1>
            <p className="text-poe-text-secondary mb-8">The guide you're looking for doesn't exist.</p>
            <Link href="/guides" className="bg-poe-accent text-poe-dark px-6 py-3 rounded-lg hover:bg-poe-accent/90 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2 inline" />
              Back to Guides
            </Link>
          </div>
        </div>
      );
  }
}
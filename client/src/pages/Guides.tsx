import { useParams } from 'wouter';
import { Link } from 'wouter';
import { ArrowLeft, ExternalLink } from 'lucide-react';

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
  const guideContent = {
    'path-of-exile-crafting-guide': {
      title: 'The Complete Path of Exile Crafting Guide',
      description: 'The definitive guide to crafting in Path of Exile. Learn everything about currency orbs, the crafting bench, socket mechanics, and more.',
      content: 'This comprehensive guide will be populated with detailed crafting information...',
    },
    'socket-coloring-mechanics': {
      title: 'Socket Coloring Mechanics: A Deep Dive',
      description: 'Learn the exact math behind Chromatic Orbs and socket coloring in Path of Exile.',
      content: 'Deep dive into socket coloring mechanics will be added here...',
    },
    '6-linking-strategies': {
      title: 'The Ultimate Guide to 6-Linking in Path of Exile',
      description: 'Learn how to 6-link items efficiently in Path of Exile with our comprehensive strategy guide.',
      content: '6-linking strategies and analysis will be detailed here...',
    },
    'how-to-use-the-calculator': {
      title: 'How to Use Our PoE Crafting Calculator',
      description: 'A detailed, visual tutorial on how to use every feature of our All-in-One Path of Exile Crafting Calculator.',
      content: 'Step-by-step calculator tutorial will be provided here...',
    },
  };

  const guide = guideContent[slug as keyof typeof guideContent];

  if (!guide) {
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-gaming font-bold text-poe-gold mb-4">Guide Not Found</h1>
          <p className="text-poe-text-dim mb-6">The guide you're looking for is currently being written.</p>
          <Link href="/guides" className="text-poe-gold hover:text-poe-orange transition-colors">
            ← Back to Guides
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/guides" className="inline-flex items-center gap-2 text-poe-gold hover:text-poe-orange transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Guides
        </Link>

        <article className="prose prose-invert max-w-none">
          <header className="mb-8">
            <h1 className="text-4xl font-gaming font-bold text-poe-gold mb-4">{guide.title}</h1>
            <p className="text-lg text-poe-text-dim">{guide.description}</p>
          </header>

          <div className="bg-poe-dark-alt rounded-xl p-8 border border-poe-gold/20">
            <div className="text-center text-poe-text-dim">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-gaming text-poe-gold mb-2">Content Coming Soon</h3>
              <p className="mb-4">
                This {guide.title.toLowerCase()} is currently being written and will include:
              </p>
              <ul className="text-left max-w-lg mx-auto space-y-2">
                <li>• Detailed explanations with examples</li>
                <li>• Mathematical formulas and calculations</li>
                <li>• Visual diagrams and screenshots</li>
                <li>• Practical tips and strategies</li>
                <li>• Real-world crafting scenarios</li>
              </ul>
              <p className="mt-6">
                In the meantime, try our <Link href="/#calculator" className="text-poe-gold hover:text-poe-orange transition-colors">calculator tool</Link> to start optimizing your crafting costs.
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

import { useParams } from 'wouter';
import { Link } from 'wouter';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import TopCraftingMistakes from './blog/top-5-crafting-mistakes';

export default function Blog() {
  const params = useParams();
  const slug = params?.slug;

  if (slug) {
    return <BlogPost slug={slug} />;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-gaming font-bold text-poe-gold mb-4">The Vorici Calculator Blog</h1>
          <p className="text-lg text-poe-text-dim">
            The official blog for crafting strategies, league updates, patch analysis, and expert Path of Exile tips.
          </p>
        </div>

        <div className="space-y-8">
          <article className="bg-poe-dark-alt rounded-xl p-6 border border-poe-gold/20 hover:border-poe-gold/40 transition-colors">
            <div className="flex items-start gap-6">
              <div className="w-32 h-24 bg-gradient-to-br from-poe-dark to-poe-dark-alt rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">⚒️</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 text-sm text-poe-text-dim mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    December 15, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    5 min read
                  </div>
                </div>
                <h2 className="text-xl font-gaming font-semibold text-poe-gold mb-2">
                  <Link href="/blog/top-5-crafting-mistakes" className="hover:text-poe-orange transition-colors">
                    Top 5 Crafting Mistakes That Are Wasting Your Currency
                  </Link>
                </h2>
                <p className="text-poe-text-dim mb-3">
                  Are you wasting currency? Avoid these top 5 common Path of Exile crafting mistakes when coloring, socketing, and linking your gear. Learn to craft smarter.
                </p>
                <div className="flex items-center gap-2">
                  <span className="bg-poe-gold/20 text-poe-gold px-2 py-1 rounded text-xs font-medium">Crafting Tips</span>
                  <span className="bg-poe-orange/20 text-poe-orange px-2 py-1 rounded text-xs font-medium">Beginner Guide</span>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-poe-dark-alt rounded-xl p-6 border border-poe-gold/20 hover:border-poe-gold/40 transition-colors">
            <div className="flex items-start gap-6">
              <div className="w-32 h-24 bg-gradient-to-br from-poe-dark to-poe-dark-alt rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">🔗</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 text-sm text-poe-text-dim mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    December 12, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    8 min read
                  </div>
                </div>
                <h2 className="text-xl font-gaming font-semibold text-poe-gold mb-2">
                  <Link href="/blog/poe-3-25-crafting-changes" className="hover:text-poe-orange transition-colors">
                    PoE 3.25 Crafting Changes: What You Need to Know
                  </Link>
                </h2>
                <p className="text-poe-text-dim mb-3">
                  Complete breakdown of Settlers League crafting updates and how they affect your currency optimization strategies. Essential reading for the current league.
                </p>
                <div className="flex items-center gap-2">
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-medium">League Update</span>
                  <span className="bg-poe-gold/20 text-poe-gold px-2 py-1 rounded text-xs font-medium">Meta Changes</span>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-poe-dark-alt rounded-xl p-6 border border-poe-gold/20 hover:border-poe-gold/40 transition-colors">
            <div className="flex items-start gap-6">
              <div className="w-32 h-24 bg-gradient-to-br from-poe-dark to-poe-dark-alt rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">💎</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 text-sm text-poe-text-dim mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    December 10, 2024
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    12 min read
                  </div>
                </div>
                <h2 className="text-xl font-gaming font-semibold text-poe-gold mb-2">
                  <Link href="/blog/advanced-socket-strategies" className="hover:text-poe-orange transition-colors">
                    Advanced Socket Color Strategies for Endgame Items
                  </Link>
                </h2>
                <p className="text-poe-text-dim mb-3">
                  Master off-coloring techniques and bench crafting combinations for the most challenging socket requirements. Advanced techniques for experienced crafters.
                </p>
                <div className="flex items-center gap-2">
                  <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs font-medium">Advanced</span>
                  <span className="bg-poe-gold/20 text-poe-gold px-2 py-1 rounded text-xs font-medium">Endgame</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-12 text-center">
          <p className="text-poe-text-dim mb-4">
            Want to stay updated on the latest crafting strategies and league changes?
          </p>
          <div className="space-y-4">
            <Link href="/guides" className="bg-poe-gold text-poe-dark px-6 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block mr-4">
              Read Our Guides
            </Link>
            <Link href="/#calculator" className="border border-poe-gold text-poe-gold px-6 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/10 transition-colors inline-block">
              Try Calculator
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function BlogPost({ slug }: { slug: string }) {
  switch (slug) {
    case 'top-5-crafting-mistakes':
      return <TopCraftingMistakes />;
    default:
      return (
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-gaming font-bold text-poe-gold mb-4">Post Not Found</h1>
            <p className="text-poe-text-dim mb-6">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog" className="text-poe-gold hover:text-poe-orange transition-colors">
              ← Back to Blog
            </Link>
          </div>
        </main>
      );
  }
}

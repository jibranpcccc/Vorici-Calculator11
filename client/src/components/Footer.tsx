import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-poe-dark-alt border-t border-poe-gold/20 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-poe-gold rounded-full flex items-center justify-center">
                <span className="text-poe-dark font-gaming font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-gaming font-bold text-poe-gold">Vorici Calculator</span>
            </div>
            <p className="text-poe-text-dim text-sm">
              The ultimate Path of Exile crafting calculator. Precise, fast, and always up-to-date.
            </p>
          </div>
          
          <div>
            <h4 className="font-gaming font-semibold text-poe-gold mb-4">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#calculator" className="text-poe-text-dim hover:text-poe-gold transition-colors">Chromatic Calculator</a></li>
              <li><a href="/#calculator" className="text-poe-text-dim hover:text-poe-gold transition-colors">Socket Calculator</a></li>
              <li><a href="/#calculator" className="text-poe-text-dim hover:text-poe-gold transition-colors">Linking Calculator</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-gaming font-semibold text-poe-gold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guides" className="text-poe-text-dim hover:text-poe-gold transition-colors">Crafting Guides</Link></li>
              <li><Link href="/blog" className="text-poe-text-dim hover:text-poe-gold transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="text-poe-text-dim hover:text-poe-gold transition-colors">FAQ</Link></li>
              <li><Link href="/about" className="text-poe-text-dim hover:text-poe-gold transition-colors">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-gaming font-semibold text-poe-gold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="text-poe-text-dim hover:text-poe-gold transition-colors">Privacy Policy</Link></li>
              <li><a href="/terms" className="text-poe-text-dim hover:text-poe-gold transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-poe-gold/20 mt-8 pt-8 text-center">
          <p className="text-poe-text-dim text-sm">
            © 2024 Vorici Calculator. Not affiliated with Grinding Gear Games. Path of Exile is a trademark of Grinding Gear Games.
          </p>
        </div>
      </div>
    </footer>
  );
}

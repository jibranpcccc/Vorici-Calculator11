import { Link } from "wouter";
import { Home, ArrowLeft, Calculator } from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function NotFound() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Page Not Found - Vorici Calculator",
    "description": "The requested page could not be found. Return to the Path of Exile crafting calculator homepage.",
    "url": "https://vorici-calculator.com/404"
  };

  return (
    <>
      <SEOHead
        title="Page Not Found (404) - Vorici Calculator"
        description="The requested page could not be found. Return to the Path of Exile crafting calculator homepage."
        schemaData={schemaData}
      />
      
      <div className="min-h-screen bg-poe-dark flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-poe-accent/10 flex items-center justify-center">
              <Calculator className="w-12 h-12 text-poe-accent" />
            </div>
            <h1 className="text-6xl font-bold text-poe-accent mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-poe-text mb-4">Page Not Found</h2>
            <p className="text-poe-text-secondary mb-8">
              The page you're looking for doesn't exist or has been moved. Let's get you back to calculating crafting costs.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link href="/">
              <button className="w-full bg-poe-accent hover:bg-poe-accent/90 text-poe-dark font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                <Home className="w-5 h-5 mr-2" />
                Return to Calculator
              </button>
            </Link>
            
            <Link href="/guides">
              <button className="w-full bg-poe-surface hover:bg-poe-surface/80 text-poe-text font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Browse Guides
              </button>
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-poe-text-secondary">
            <p>Popular Pages:</p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <Link href="/guides/path-of-exile-crafting-guide">
                <span className="hover:text-poe-accent transition-colors">Crafting Guide</span>
              </Link>
              <Link href="/guides/socket-coloring-mechanics">
                <span className="hover:text-poe-accent transition-colors">Socket Coloring</span>
              </Link>
              <Link href="/guides/6-linking-strategies">
                <span className="hover:text-poe-accent transition-colors">6-Link Guide</span>
              </Link>
              <Link href="/faq">
                <span className="hover:text-poe-accent transition-colors">FAQ</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
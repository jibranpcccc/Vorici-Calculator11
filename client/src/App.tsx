import { Switch, Route } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/home";
import About from "@/pages/About";
import FAQ from "@/pages/FAQ";
import Blog from "@/pages/Blog";
import Guides from "@/pages/Guides";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import NotFound from "@/pages/NotFound";

// Blog pages
import BlogIndex from "@/pages/blog/index";
import TopCraftingMistakes from "@/pages/blog/top-5-crafting-mistakes";
import ChromaticOptimization from "@/pages/blog/chromatic-orb-optimization";
import LeagueCraftingChanges from "@/pages/blog/poe-league-crafting-changes";
import SettlersLeague from "@/pages/blog/poe-settlers-league-crafting-changes";
import AdvancedSocketStrategies from "@/pages/blog/advanced-socket-strategies";

// Guide pages
import GuidesIndex from "@/pages/guides/index";
import CraftingGuide from "@/pages/guides/crafting-guide";
import SocketColoringGuide from "@/pages/guides/socket-coloring-mechanics";
import SixLinkingStrategies from "@/pages/guides/6-linking-strategies";
import HowToUseCalculator from "@/pages/guides/how-to-use-the-calculator";
import PathOfExileCraftingGuide from "@/pages/guides/path-of-exile-crafting-guide";

// Tool pages
import SocketCalculator from "@/pages/tools/poe-socket-calculator";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-poe-dark text-poe-text">
        <Header />
        <main>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/faq" component={FAQ} />
            <Route path="/privacy" component={PrivacyPolicy} />
            <Route path="/terms" component={TermsOfService} />
            
            {/* Blog routes */}
            <Route path="/blog" component={BlogIndex} />
            <Route path="/blog/top-5-crafting-mistakes" component={TopCraftingMistakes} />
            <Route path="/blog/chromatic-orb-optimization" component={ChromaticOptimization} />
            <Route path="/blog/poe-league-crafting-changes" component={LeagueCraftingChanges} />
            <Route path="/blog/poe-settlers-league-crafting-changes" component={SettlersLeague} />
            <Route path="/blog/advanced-socket-strategies" component={AdvancedSocketStrategies} />
            
            {/* Guide routes */}
            <Route path="/guides" component={GuidesIndex} />
            <Route path="/guides/crafting-guide" component={CraftingGuide} />
            <Route path="/guides/socket-coloring-mechanics" component={SocketColoringGuide} />
            <Route path="/guides/6-linking-strategies" component={SixLinkingStrategies} />
            <Route path="/guides/how-to-use-the-calculator" component={HowToUseCalculator} />
            <Route path="/guides/path-of-exile-crafting-guide" component={PathOfExileCraftingGuide} />
            
            {/* Tool routes */}
            <Route path="/tools/poe-socket-calculator" component={SocketCalculator} />
            
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
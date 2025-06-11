import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAnalytics } from "@/hooks/use-analytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SEOValidationPanel } from "@/components/SEOValidator";
import { LinkValidationPanel } from "@/components/LinkValidator";
import { CanonicalURLManager, URLStructureValidator } from "@/components/CanonicalURLManager";
import { HeadingStructureFixer } from "@/components/HeadingValidator";
import { useImageValidation } from "@/components/ImageOptimizer";
import { OpenGraphOptimizer } from "@/components/OpenGraphOptimizer";
import { AccessibilityValidationPanel, SkipNavigation } from "@/components/AccessibilityOptimizer";
import { ContentQualityPanel } from "@/components/ContentQualityOptimizer";
import { PerformanceOptimizer, PerformancePanel } from "@/components/PerformanceOptimizer";
import Home from "@/pages/home";
import Guides from "@/pages/Guides";
import Blog from "@/pages/Blog";
import FAQ from "@/pages/FAQ";
import About from "@/pages/About";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import NotFound from "@/pages/NotFound";

function Router() {
  useAnalytics();
  useImageValidation();
  
  return (
    <div className="min-h-screen bg-poe-dark text-poe-text">
      <SkipNavigation />
      <CanonicalURLManager />
      <URLStructureValidator />
      <HeadingStructureFixer />
      <OpenGraphOptimizer />
      <PerformanceOptimizer />
      <Header />
      <Breadcrumbs />
      <main id="main-content">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/guides" component={Guides} />
          <Route path="/guides/:slug" component={Guides} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={Blog} />
          <Route path="/faq" component={FAQ} />
          <Route path="/about" component={About} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms" component={TermsOfService} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <SEOValidationPanel />
      <LinkValidationPanel />
      <AccessibilityValidationPanel />
      <ContentQualityPanel />
      <PerformancePanel />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

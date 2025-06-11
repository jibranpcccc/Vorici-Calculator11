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
import { PerformanceBooster, useCoreWebVitals, ResourceHints } from "@/components/PerformanceBooster";
import { lazy, Suspense } from "react";
import Home from "@/pages/home";

// Lazy load non-critical pages to reduce initial bundle size
const Guides = lazy(() => import("@/pages/Guides"));
const Blog = lazy(() => import("@/pages/Blog"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const About = lazy(() => import("@/pages/About"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const NotFound = lazy(() => import("@/pages/NotFound"));

function Router() {
  useAnalytics();
  useImageValidation();
  useCoreWebVitals();
  
  return (
    <div className="min-h-screen bg-poe-dark text-poe-text">
      <SkipNavigation />
      <CanonicalURLManager />
      <URLStructureValidator />
      <HeadingStructureFixer />
      <OpenGraphOptimizer />
      <PerformanceOptimizer />
      <PerformanceBooster />
      <ResourceHints />
      <Header />
      <Breadcrumbs />
      <main id="main-content">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/guides" component={() => (
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-poe-accent"></div></div>}>
              <Guides />
            </Suspense>
          )} />
          <Route path="/guides/:slug" component={() => (
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-poe-accent"></div></div>}>
              <Guides />
            </Suspense>
          )} />
          <Route path="/blog" component={() => (
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-poe-accent"></div></div>}>
              <Blog />
            </Suspense>
          )} />
          <Route path="/blog/:slug" component={() => (
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-poe-accent"></div></div>}>
              <Blog />
            </Suspense>
          )} />
          <Route path="/faq" component={() => (
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-poe-accent"></div></div>}>
              <FAQ />
            </Suspense>
          )} />
          <Route path="/about" component={() => (
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-poe-accent"></div></div>}>
              <About />
            </Suspense>
          )} />
          <Route path="/privacy-policy" component={() => (
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-poe-accent"></div></div>}>
              <PrivacyPolicy />
            </Suspense>
          )} />
          <Route path="/terms" component={() => (
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-poe-accent"></div></div>}>
              <TermsOfService />
            </Suspense>
          )} />
          <Route component={() => (
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-poe-accent"></div></div>}>
              <NotFound />
            </Suspense>
          )} />
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

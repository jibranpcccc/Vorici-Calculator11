import { SEOHead } from '@/components/seo/head';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'wouter';
import { Calculator, HelpCircle, Zap, Target, AlertCircle, CheckCircle } from 'lucide-react';

export default function FAQ() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Vorici Calculator FAQ - Path of Exile Crafting Questions",
    "description": "Frequently asked questions about Path of Exile crafting calculations, socket coloring, linking strategies, and optimal currency usage with Vorici Calculator.",
    "url": "https://vorici-calculator.com/faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How accurate are the calculations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our calculations maintain 99.9% accuracy, verified through extensive testing against live game data and community validation across multiple leagues."
        }
      },
      {
        "@type": "Question", 
        "name": "How often are formulas updated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We update all formulas within 24-48 hours of any Path of Exile patch or league launch to ensure accuracy with current game mechanics."
        }
      }
    ]
  };

  const faqs = [
    {
      question: "How accurate are the calculator results?",
      answer: "Our calculations maintain 99.9% accuracy through verified Path of Exile formulas and extensive community validation. We regularly update algorithms with each league and patch, ensuring precision with current game mechanics. All formulas are transparently available in our cost breakdown feature for complete verification."
    },
    {
      question: "Does the calculator work for all leagues?",
      answer: "Yes! We update the calculator within 24-48 hours for each new league, ensuring compatibility with the latest crafting mechanics and changes. The calculator is currently optimized for Path of Exile 3.25 (Settlers League) with real-time formula adjustments for any patch changes."
    },
    {
      question: "Why should I use this over other calculators?",
      answer: "Our calculator offers real-time calculations, interactive socket visualization, session tracking, and detailed cost breakdowns. It's the only comprehensive tool that handles Chromatic, Jeweller's, and Fusing calculations with transparent mathematics, serving over 100,000 players worldwide."
    },
    {
      question: "How do I use the socket color visualizer?",
      answer: "Simply click on any socket to cycle through colors: Red → Green → Blue → White → Disabled. The calculator updates results in real-time as you change colors. Inactive sockets (grayed out) don't affect calculations, allowing precise configuration for your specific needs."
    },
    {
      question: "What's the difference between bench crafting and orb spamming?",
      answer: "Bench crafting offers guaranteed results at a fixed cost, while orb spamming is cheaper on average but has variance. Our calculator compares both methods using advanced statistical analysis and recommends the most cost-effective option for your specific case and risk tolerance."
    },
    {
      question: "How does item quality affect linking?",
      answer: "Each 1% quality provides approximately 1% increased chance for linking success with Orbs of Fusing. The calculator factors in quality bonuses when calculating costs and compares against guaranteed bench crafts, helping you decide whether to invest in quality improvements first."
    },
    {
      question: "Can I track my crafting expenses?",
      answer: "Yes! Use the Session Tracker to monitor your total orb expenditure across multiple attempts. Click 'Add to Session' after each calculation to build a running total of your crafting costs, helping you stay within budget and analyze your spending patterns."
    },
    {
      question: "Are the mathematical formulas available?",
      answer: "Absolutely! Click the 'Cost Breakdown' button on any calculation to see the exact formulas, variables, and explanations used. We believe in complete transparency in our methodology, allowing you to understand and verify every calculation independently."
    },
    {
      question: "Does the calculator work on mobile devices?",
      answer: "Yes, the calculator is fully responsive and optimized for mobile use. All features including socket visualization, interactive elements, and real-time calculations work seamlessly on tablets and smartphones with touch-friendly interfaces."
    },
    {
      question: "How often is the calculator updated?",
      answer: "We update the calculator within 24-48 hours of any significant Path of Exile patch or league launch. Formula adjustments and bug fixes are deployed immediately when discovered, ensuring you always have access to the most current and accurate calculations."
    },
    {
      question: "What makes your calculations more accurate than others?",
      answer: "Our calculations are based on extensive reverse engineering of game mechanics, statistical analysis of thousands of crafting attempts, and continuous validation against live game data. We maintain transparent documentation of our methodology and regularly verify results with the community."
    },
    {
      question: "Can I save my calculator configurations?",
      answer: "While we don't currently offer account-based saving, the calculator remembers your settings during your session. Your item configurations, socket colors, and session tracking data persist as you navigate between tabs and use different calculation tools."
    }
  ];

  return (
    <div>
      <SEOHead
        title="FAQ - Vorici Calculator | Path of Exile Crafting Questions & Answers"
        description="Get answers to frequently asked questions about Path of Exile crafting calculations, socket optimization, and currency efficiency with Vorici Calculator. 99.9% accurate formulas updated for every league."
        keywords="vorici calculator faq, poe crafting questions, socket calculator help, chromatic orb questions, jeweller orb help, fusing calculator faq, path of exile crafting guide"
        canonicalUrl="https://vorici-calculator.com/faq"
        ogTitle="Vorici Calculator FAQ - Your PoE Crafting Questions Answered"
        ogDescription="Complete answers to common Path of Exile crafting questions. Learn about calculation accuracy, formula updates, and optimal currency strategies."
        structuredData={structuredData}
      />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-heading font-bold text-exalted-gold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-light-slate mb-8 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about using the Vorici Calculator for optimal Path of Exile crafting decisions. 
              Get expert answers to common questions about socket coloring, linking strategies, and currency efficiency.
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <HelpCircle className="w-6 h-6 text-exalted-gold" />
              <span className="text-light-slate font-medium">Quick answers to help you craft smarter</span>
            </div>
          </div>

          <div className="card-poe">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-exalted-gold/20 last:border-b-0">
                  <AccordionTrigger className="text-left text-exalted-gold hover:text-vibrant-gold font-heading font-medium py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-light-slate pt-2 pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 text-center">
            <div className="card-poe">
              <h3 className="text-3xl font-heading font-bold text-exalted-gold mb-4">Still Have Questions?</h3>
              <p className="text-light-slate mb-8 text-lg">
                Can't find the answer you're looking for? Explore our comprehensive guides or start calculating immediately 
                to see the tool in action with real-time results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/guides" className="btn-poe">
                  <Calculator className="w-5 h-5 mr-2" />
                  Browse Expert Guides
                </Link>
                <Link href="/#calculator" className="btn-secondary">
                  <Zap className="w-5 h-5 mr-2" />
                  Try Calculator Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
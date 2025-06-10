import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'wouter';

export default function FAQ() {
  const faqs = [
    {
      question: "How accurate are the calculator results?",
      answer: "Our calculations are based on verified Path of Exile formulas and community data. We maintain 99.9% accuracy by regularly updating our algorithms with each league and patch. All formulas are transparently available in our cost breakdown feature."
    },
    {
      question: "Does the calculator work for all leagues?",
      answer: "Yes! We update the calculator for each new league, ensuring compatibility with the latest crafting mechanics and changes. The calculator is currently optimized for Path of Exile 3.25 (Settlers League)."
    },
    {
      question: "Why should I use this over other calculators?",
      answer: "Our calculator offers real-time calculations, interactive socket visualization, session tracking, and detailed cost breakdowns. It's the only all-in-one tool that handles Chromatic, Jeweller's, and Fusing calculations with transparent mathematics."
    },
    {
      question: "How do I use the socket color visualizer?",
      answer: "Simply click on any socket to cycle through colors: Red → Green → Blue → White → Disabled. The calculator updates results in real-time as you change colors. Inactive sockets (grayed out) don't affect calculations."
    },
    {
      question: "What's the difference between bench crafting and orb spamming?",
      answer: "Bench crafting offers guaranteed results at a fixed cost, while orb spamming is cheaper on average but has variance. Our calculator compares both methods and recommends the most cost-effective option for your specific case."
    },
    {
      question: "How does item quality affect linking?",
      answer: "Each 1% quality provides approximately 1% increased chance for linking success. The calculator factors in quality bonuses when calculating Orb of Fusing costs and compares against guaranteed bench crafts."
    },
    {
      question: "Can I track my crafting expenses?",
      answer: "Yes! Use the Session Tracker to monitor your total orb expenditure across multiple attempts. Click 'Add to Session' after each calculation to build a running total of your crafting costs."
    },
    {
      question: "Are the mathematical formulas available?",
      answer: "Absolutely! Click the 'Cost Breakdown' button on any calculation to see the exact formulas, variables, and explanations used. We believe in complete transparency in our methodology."
    },
    {
      question: "Does the calculator work on mobile devices?",
      answer: "Yes, the calculator is fully responsive and optimized for mobile use. All features including socket visualization and interactive elements work seamlessly on tablets and smartphones."
    },
    {
      question: "How often is the calculator updated?",
      answer: "We update the calculator within 24-48 hours of any significant Path of Exile patch or league launch. Formula adjustments and bug fixes are deployed immediately when discovered."
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-gaming font-bold text-poe-gold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-poe-text-dim">
            Everything you need to know about using the Vorici Calculator for Path of Exile crafting optimization.
          </p>
        </div>

        <div className="bg-poe-dark-alt rounded-2xl p-8 border border-poe-gold/20">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-poe-gold/20">
                <AccordionTrigger className="text-left text-poe-gold hover:text-poe-orange font-gaming font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-poe-text-dim pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-poe-dark-alt rounded-xl p-6 border border-poe-gold/20">
            <h3 className="text-xl font-gaming font-semibold text-poe-gold mb-4">Still Have Questions?</h3>
            <p className="text-poe-text-dim mb-6">
              Can't find the answer you're looking for? Check out our comprehensive guides or try the calculator yourself.
            </p>
            <div className="space-y-4">
              <Link href="/guides" className="bg-poe-gold text-poe-dark px-6 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/90 transition-colors inline-block mr-4">
                Browse Guides
              </Link>
              <Link href="/#calculator" className="border border-poe-gold text-poe-gold px-6 py-3 rounded-lg font-gaming font-medium hover:bg-poe-gold/10 transition-colors inline-block">
                Try Calculator
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import { SEOHead } from '@/components/seo/head';

export default function PrivacyPolicy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Vorici Calculator",
    "description": "Privacy policy for Vorici Calculator explaining data collection, usage, and protection practices for Path of Exile crafting tool users.",
    "url": "https://vorici-calculator.com/privacy-policy"
  };

  return (
    <div>
      <SEOHead
        title="Privacy Policy | Vorici Calculator - Path of Exile Crafting Tool"
        description="Privacy policy for Vorici Calculator explaining data collection, usage, and protection practices for Path of Exile crafting tool users."
        canonicalUrl="https://vorici-calculator.com/privacy-policy"
        structuredData={structuredData}
      />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold text-exalted-gold mb-4">Privacy Policy</h1>
            <p className="text-lg text-light-slate">
              Your privacy is important to us. This policy outlines how we handle your information.
            </p>
          </div>

          <div className="bg-dark-slate rounded-2xl p-8 border border-exalted-gold/20 prose prose-invert max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-heading font-bold text-exalted-gold mb-4">Information We Collect</h2>
                <div className="text-light-slate space-y-4">
                  <p>
                    <strong>Calculator Usage:</strong> We do not store or transmit any of your calculator inputs or results. 
                    All calculations are performed locally in your browser.
                  </p>
                  <p>
                    <strong>Session Data:</strong> Your session tracking data (total orbs spent, calculation history) is 
                    stored locally in your browser and never sent to our servers.
                  </p>
                  <p>
                    <strong>Website Analytics:</strong> We may use analytics tools to understand how visitors use our site, 
                    including page views, session duration, and general usage patterns. This data is anonymized and aggregated.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-exalted-gold mb-4">How We Use Information</h2>
                <div className="text-light-slate space-y-4">
                  <p>
                    <strong>Service Improvement:</strong> Analytics data helps us understand which features are most useful 
                    and identify areas for improvement.
                  </p>
                  <p>
                    <strong>Technical Support:</strong> Error logs may be collected to diagnose and fix technical issues, 
                    but these contain no personal information.
                  </p>
                  <p>
                    <strong>Content Optimization:</strong> Usage patterns help us create better guides and documentation 
                    based on what users find most valuable.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-exalted-gold mb-4">Data Protection</h2>
                <div className="text-light-slate space-y-4">
                  <p>
                    <strong>Local Storage Only:</strong> All your crafting data, preferences, and session information 
                    remains on your device. We cannot access this information.
                  </p>
                  <p>
                    <strong>No Personal Data:</strong> We do not collect names, email addresses, IP addresses, 
                    or any personally identifiable information.
                  </p>
                  <p>
                    <strong>Secure Connection:</strong> All communication with our servers uses HTTPS encryption 
                    to protect data in transit.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-exalted-gold mb-4">Third-Party Services</h2>
                <div className="text-light-slate space-y-4">
                  <p>
                    <strong>Analytics Providers:</strong> We may use services like Google Analytics to understand 
                    site usage. These services have their own privacy policies.
                  </p>
                  <p>
                    <strong>CDN Services:</strong> Content delivery networks help serve our site faster. 
                    They may log basic request information.
                  </p>
                  <p>
                    <strong>No Data Sharing:</strong> We do not sell, rent, or share any user data with third parties 
                    for marketing or commercial purposes.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-exalted-gold mb-4">Your Rights</h2>
                <div className="text-light-slate space-y-4">
                  <p>
                    <strong>Control Your Data:</strong> Since all personal data is stored locally, you have complete 
                    control. Clear your browser data to remove all information.
                  </p>
                  <p>
                    <strong>Opt-Out Options:</strong> You can disable analytics tracking using browser extensions 
                    or "Do Not Track" settings.
                  </p>
                  <p>
                    <strong>Questions & Concerns:</strong> Contact us if you have any questions about this privacy policy 
                    or our data practices.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-exalted-gold mb-4">Contact Information</h2>
                <div className="text-light-slate space-y-4">
                  <p>
                    If you have questions about this Privacy Policy or our practices, please contact us through 
                    our community channels or feedback forms.
                  </p>
                  <p>
                    <strong>Updates:</strong> We may update this policy from time to time. Changes will be posted 
                    on this page with an updated effective date.
                  </p>
                  <p>
                    <strong>Effective Date:</strong> December 2024
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
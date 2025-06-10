export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-gaming font-bold text-poe-gold mb-4">Privacy Policy</h1>
          <p className="text-lg text-poe-text-dim">
            Your privacy is important to us. This policy outlines how we handle your information.
          </p>
        </div>

        <div className="bg-poe-dark-alt rounded-2xl p-8 border border-poe-gold/20 prose prose-invert max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-4">Information We Collect</h2>
              <div className="text-poe-text-dim space-y-4">
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
              <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-4">How We Use Information</h2>
              <div className="text-poe-text-dim space-y-4">
                <p>Any information we collect is used solely to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Improve the calculator's functionality and user experience</li>
                  <li>Understand which features are most valuable to users</li>
                  <li>Identify and fix technical issues</li>
                  <li>Create better guides and educational content</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-4">Data Storage and Security</h2>
              <div className="text-poe-text-dim space-y-4">
                <p>
                  <strong>Local Storage:</strong> All your calculator settings, session data, and preferences are 
                  stored locally in your browser using localStorage. This data never leaves your device.
                </p>
                <p>
                  <strong>No Personal Data:</strong> We do not collect, store, or process any personally identifiable 
                  information such as names, email addresses, or Path of Exile account details.
                </p>
                <p>
                  <strong>Secure Connection:</strong> Our website uses HTTPS encryption to ensure secure communication 
                  between your browser and our servers.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-4">Third-Party Services</h2>
              <div className="text-poe-text-dim space-y-4">
                <p>
                  We may use third-party services for website analytics and content delivery. These services may 
                  collect anonymized usage data according to their own privacy policies:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Content Delivery Networks (CDNs) for faster loading times</li>
                  <li>Analytics services for understanding user behavior (anonymized)</li>
                  <li>Hosting services for website availability and performance</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-4">Cookies and Tracking</h2>
              <div className="text-poe-text-dim space-y-4">
                <p>
                  <strong>Essential Cookies:</strong> We use minimal cookies necessary for the website to function properly, 
                  such as remembering your calculator tab preferences.
                </p>
                <p>
                  <strong>Analytics Cookies:</strong> We may use analytics cookies to understand how users interact with 
                  our site. You can disable these in your browser settings.
                </p>
                <p>
                  <strong>No Tracking:</strong> We do not use invasive tracking technologies or share data with 
                  advertising networks.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-4">Your Rights</h2>
              <div className="text-poe-text-dim space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Clear your local storage data at any time through your browser settings</li>
                  <li>Disable cookies through your browser preferences</li>
                  <li>Use the calculator without providing any personal information</li>
                  <li>Contact us with questions about this privacy policy</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-4">Changes to This Policy</h2>
              <div className="text-poe-text-dim space-y-4">
                <p>
                  We may update this privacy policy from time to time to reflect changes in our practices or 
                  applicable laws. Any changes will be posted on this page with an updated effective date.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-gaming font-bold text-poe-gold mb-4">Contact Information</h2>
              <div className="text-poe-text-dim space-y-4">
                <p>
                  If you have any questions about this privacy policy or our data practices, you can reach out 
                  to us through our community channels or by creating an issue on our project repository.
                </p>
                <p className="text-sm text-poe-text-dim">
                  <strong>Effective Date:</strong> December 2024
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

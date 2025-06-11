import SEOHead from '@/components/SEOHead';
import { Link } from 'wouter';

export default function TermsOfService() {
  return (
    <div>
      <SEOHead
        title="Terms of Service | Vorici Calculator"
        description="Terms of service and user agreement for the Vorici Calculator Path of Exile crafting tool."
        keywords="terms of service, user agreement, vorici calculator, path of exile tools"
        canonicalUrl="https://vorici-calculator.com/terms"
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-heading font-bold text-exalted-gold mb-6">Terms of Service</h1>
            <p className="text-xl text-light-slate mb-8 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using the Vorici Calculator service.
            </p>
            <div className="text-sm text-poe-text-dim">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-poe-gold mb-4">1. Acceptance of Terms</h2>
              <p className="text-poe-text-secondary leading-relaxed mb-4">
                By accessing and using the Vorici Calculator website ("Service"), you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-poe-gold mb-4">2. Use License</h2>
              <p className="text-poe-text-secondary leading-relaxed mb-4">
                Permission is granted to temporarily use the Vorici Calculator for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-poe-text-secondary mb-4 ml-4">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-poe-gold mb-4">3. Disclaimer</h2>
              <p className="text-poe-text-secondary leading-relaxed mb-4">
                The materials on Vorici Calculator's website are provided on an 'as is' basis. Vorici Calculator makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="text-poe-text-secondary leading-relaxed mb-4">
                Further, Vorici Calculator does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-poe-gold mb-4">4. Limitations</h2>
              <p className="text-poe-text-secondary leading-relaxed mb-4">
                In no event shall Vorici Calculator or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Vorici Calculator's website, even if Vorici Calculator or a Vorici Calculator authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-poe-gold mb-4">5. Accuracy of Materials</h2>
              <p className="text-poe-text-secondary leading-relaxed mb-4">
                The materials appearing on Vorici Calculator's website could include technical, typographical, or photographic errors. Vorici Calculator does not warrant that any of the materials on its website are accurate, complete, or current. Vorici Calculator may make changes to the materials contained on its website at any time without notice. However Vorici Calculator does not make any commitment to update the materials.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-poe-gold mb-4">6. Links</h2>
              <p className="text-poe-text-secondary leading-relaxed mb-4">
                Vorici Calculator has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Vorici Calculator of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-poe-gold mb-4">7. Modifications</h2>
              <p className="text-poe-text-secondary leading-relaxed mb-4">
                Vorici Calculator may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-poe-gold mb-4">8. Governing Law</h2>
              <p className="text-poe-text-secondary leading-relaxed mb-4">
                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-poe-gold mb-4">9. Path of Exile</h2>
              <p className="text-poe-text-secondary leading-relaxed mb-4">
                This website is a fan-made tool for Path of Exile and is not affiliated with or endorsed by Grinding Gear Games. Path of Exile is a trademark of Grinding Gear Games.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-poe-gold mb-4">Contact Information</h2>
              <p className="text-poe-text-secondary leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us through our <Link href="/about" className="text-poe-gold hover:underline">About page</Link>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
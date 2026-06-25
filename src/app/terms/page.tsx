import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions | Pink & Ochre',
  description: 'The terms and conditions for using the Pink & Ochre website.',
  alternates: {
    canonical: 'https://pinkandochre.com/terms',
  },
}

export default function TermsPage() {
  const lastUpdated = 'June 15, 2026'

  return (
    <>
      <section className="py-20 md:py-28 bg-ivory">
        <div className="section-container">
          <h1 className="heading-large mb-4">Terms and Conditions</h1>
          <p className="subtitle max-w-2xl">
            Please read these terms and conditions carefully before using our website
          </p>
          <p className="text-taupe text-sm mt-6">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream">
        <div className="section-container max-w-3xl">
          {/* Table of Contents */}
          <div className="bg-ivory p-8 rounded-sm border border-warm-stone mb-12">
            <h2 className="heading-xs mb-6">Table of Contents</h2>
            <ul className="space-y-2 text-taupe font-body text-sm">
              <li><a href="#interpretation" className="hover:text-gold transition">Interpretation and Definitions</a></li>
              <li><a href="#acknowledgment" className="hover:text-gold transition">Acknowledgment</a></li>
              <li><a href="#copyright" className="hover:text-gold transition">Copyright &amp; Intellectual Property</a></li>
              <li><a href="#links" className="hover:text-gold transition">Links to Other Websites</a></li>
              <li><a href="#termination" className="hover:text-gold transition">Termination</a></li>
              <li><a href="#limitation" className="hover:text-gold transition">Limitation of Liability</a></li>
              <li><a href="#disclaimer" className="hover:text-gold transition">'AS IS' and 'AS AVAILABLE' Disclaimer</a></li>
              <li><a href="#governing" className="hover:text-gold transition">Governing Law</a></li>
              <li><a href="#disputes" className="hover:text-gold transition">Disputes Resolution</a></li>
              <li><a href="#eu" className="hover:text-gold transition">For European Union (EU) Users</a></li>
              <li><a href="#severability" className="hover:text-gold transition">Severability and Waiver</a></li>
              <li><a href="#translation" className="hover:text-gold transition">Translation Interpretation</a></li>
              <li><a href="#changes" className="hover:text-gold transition">Changes to These Terms and Conditions</a></li>
              <li><a href="#contact" className="hover:text-gold transition">Contact Us</a></li>
            </ul>
          </div>

          <div className="space-y-12">
            {/* Introduction */}
            <div>
              <p className="text-taupe leading-relaxed font-body">
                Please read these Terms and Conditions carefully before using Our Service.
              </p>
            </div>

            {/* 1. Interpretation and Definitions */}
            <div id="interpretation">
              <h2 className="heading-small mb-6">Interpretation and Definitions</h2>
              <h3 className="font-bold text-charcoal mb-4">Interpretation</h3>
              <p className="text-taupe leading-relaxed mb-6 font-body">
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>

              <h3 className="font-bold text-charcoal mb-4">Definitions</h3>
              <div className="space-y-3">
                {[
                  { term: 'Affiliate', def: 'An entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors.' },
                  { term: 'Company', def: 'Refers to Pink & Ochre.' },
                  { term: 'Country', def: 'Refers to the location where the Company operates.' },
                  { term: 'Device', def: 'Any device that can access the Service such as a computer, a cellphone or a digital tablet.' },
                  { term: 'Service', def: 'Refers to the Website.' },
                  { term: 'Terms and Conditions', def: 'These Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.' },
                  { term: 'Third-party Social Media Service', def: 'Any services or content provided by a third-party that may be displayed, included or made available by the Service.' },
                  { term: 'Website', def: 'Pink & Ochre, accessible from our domain.' },
                  { term: 'You', def: 'The individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.' },
                ].map((item, idx) => (
                  <div key={idx} className="border-l-4 border-gold pl-4">
                    <p className="font-semibold text-charcoal mb-1">{item.term}</p>
                    <p className="text-taupe text-sm font-body">{item.def}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Acknowledgment */}
            <div id="acknowledgment">
              <h2 className="heading-small mb-6">Acknowledgment</h2>
              <p className="text-taupe leading-relaxed mb-4 font-body">
                These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
              </p>
              <p className="text-taupe leading-relaxed mb-4 font-body">
                Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
              </p>
              <p className="text-taupe leading-relaxed mb-4 font-body">
                By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
              </p>
              <p className="text-taupe leading-relaxed mb-4 font-body">
                You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
              </p>
              <p className="text-taupe leading-relaxed font-body">
                Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Please read Our Privacy Policy carefully before using Our Service.
              </p>
            </div>

            {/* Copyright & Intellectual Property */}
            <div id="copyright">
              <h2 className="heading-small mb-6">Copyright &amp; Intellectual Property</h2>
              <p className="text-taupe leading-relaxed mb-4 font-body">
                All content published on Pink &amp; Ochre — including but not limited to articles, blog posts, photographs, graphics, illustrations, logos, brand elements, and written copy — is the original work of Aayushi Parmar and is owned exclusively by Pink &amp; Ochre.
              </p>
              <p className="text-taupe leading-relaxed mb-6 font-body">
                All content is protected under applicable copyright law including the Indian Copyright Act, 1957 and international copyright treaties.
              </p>

              <h3 className="font-bold text-charcoal mb-4">What you may do</h3>
              <ul className="list-disc list-inside space-y-2 text-taupe font-body ml-4 mb-6">
                <li>Share links to Pink &amp; Ochre articles on social media or personal websites</li>
                <li>Quote up to 50 words from any article with clear attribution and a link back to the original post</li>
                <li>Pin images to Pinterest using the official share button on the website</li>
              </ul>

              <h3 className="font-bold text-charcoal mb-4">What you may not do</h3>
              <ul className="list-disc list-inside space-y-2 text-taupe font-body ml-4 mb-6">
                <li>Reproduce, republish, copy, or scrape any article or portion of an article without written permission from Pink &amp; Ochre</li>
                <li>Use Pink &amp; Ochre content in AI training datasets, content aggregators, or automated scraping tools</li>
                <li>Republish images from this site without written permission</li>
                <li>Claim ownership of or present Pink &amp; Ochre content as your own work</li>
              </ul>

              <h3 className="font-bold text-charcoal mb-4">AI &amp; Automated Scraping</h3>
              <p className="text-taupe leading-relaxed mb-6 font-body">
                Pink &amp; Ochre does not grant permission for its content to be used in AI training datasets, large language model training, or any automated scraping or indexing beyond standard search engine crawling. Use of this site's content for AI training without written consent is a violation of these Terms.
              </p>

              <h3 className="font-bold text-charcoal mb-4">DMCA &amp; Content Theft</h3>
              <p className="text-taupe leading-relaxed mb-6 font-body">
                If you believe your copyrighted work has been reproduced on Pink &amp; Ochre without permission, contact <a href="mailto:hello@pinkandochre.com" className="text-gold hover:text-charcoal transition">hello@pinkandochre.com</a>. If Pink &amp; Ochre content has been reproduced elsewhere without permission, we reserve the right to file a DMCA takedown notice.
              </p>

              <h3 className="font-bold text-charcoal mb-4">Contact for Permissions</h3>
              <p className="text-taupe leading-relaxed font-body">
                To request permission to reproduce or licence Pink &amp; Ochre content, email <a href="mailto:hello@pinkandochre.com" className="text-gold hover:text-charcoal transition">hello@pinkandochre.com</a>.
              </p>
            </div>

            {/* 3. Links to Other Websites */}
            <div id="links">
              <h2 className="heading-small mb-6">Links to Other Websites</h2>
              <p className="text-taupe leading-relaxed mb-4 font-body">
                Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
              </p>
              <p className="text-taupe leading-relaxed mb-4 font-body">
                The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
              </p>
              <p className="text-taupe leading-relaxed font-body">
                We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
              </p>
              <p className="text-taupe leading-relaxed font-body mt-4">
                <strong>Affiliate Links:</strong> Some content on Pink &amp; Ochre contains affiliate links, including links to Amazon products through the Amazon Associates programme (tag: pinkandochre-20). If you purchase through these links, Pink &amp; Ochre may earn a small commission at no additional cost to you. All recommendations are genuine and independently chosen.
              </p>
            </div>

            {/* 4. Termination */}
            <div id="termination">
              <h2 className="heading-small mb-6">Termination</h2>
              <p className="text-taupe leading-relaxed mb-4 font-body">
                We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
              </p>
              <p className="text-taupe leading-relaxed font-body">
                Upon termination, Your right to use the Service will cease immediately.
              </p>
            </div>

            {/* 5. Limitation of Liability */}
            <div id="limitation">
              <h2 className="heading-small mb-6">Limitation of Liability</h2>
              <p className="text-taupe leading-relaxed mb-4 font-body">
                Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
              </p>
              <p className="text-taupe leading-relaxed mb-4 font-body">
                To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service).
              </p>
              <p className="text-taupe leading-relaxed font-body">
                Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.
              </p>
            </div>

            {/* 6. Disclaimer */}
            <div id="disclaimer">
              <h2 className="heading-small mb-6">'AS IS' and 'AS AVAILABLE' Disclaimer</h2>
              <p className="text-taupe leading-relaxed mb-4 font-body">
                The Service is provided to You 'AS IS' and 'AS AVAILABLE' and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service.
              </p>
              <p className="text-taupe leading-relaxed mb-4 font-body">
                Without limiting the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free.
              </p>
              <p className="text-taupe leading-relaxed font-body">
                Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
              </p>
              <h3 className="font-bold text-charcoal mb-4 mt-8">Health &amp; Wellness Content Disclaimer</h3>
              <p className="text-taupe leading-relaxed font-body">
                Content published on Pink &amp; Ochre related to skincare, wellness, nutrition, fitness, and lifestyle is for informational and inspirational purposes only. It does not constitute medical, dermatological, nutritional, or professional advice of any kind. Always consult a qualified healthcare professional before making changes to your health, skincare, or wellness routine. Pink &amp; Ochre accepts no liability for any outcomes resulting from following content published on this website.
              </p>
            </div>

            {/* 7. Governing Law */}
            <div id="governing">
              <h2 className="heading-small mb-6">Governing Law</h2>
              <p className="text-taupe leading-relaxed font-body">
                The laws of India shall govern these Terms and Conditions and your use of the website, without regard to its conflict of law provisions.
              </p>
            </div>

            {/* 8. Disputes Resolution */}
            <div id="disputes">
              <h2 className="heading-small mb-6">Disputes Resolution</h2>
              <p className="text-taupe leading-relaxed font-body">
                If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
              </p>
            </div>

            {/* 9. For EU Users */}
            <div id="eu">
              <h2 className="heading-small mb-6">For European Union (EU) Users</h2>
              <p className="text-taupe leading-relaxed font-body">
                If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.
              </p>
            </div>

            {/* 11. Severability and Waiver */}
            <div id="severability">
              <h2 className="heading-small mb-6">Severability and Waiver</h2>
              <h3 className="font-bold text-charcoal mb-4">Severability</h3>
              <p className="text-taupe leading-relaxed mb-6 font-body">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
              </p>

              <h3 className="font-bold text-charcoal mb-4">Waiver</h3>
              <p className="text-taupe leading-relaxed font-body">
                Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
              </p>
            </div>

            {/* 12. Translation Interpretation */}
            <div id="translation">
              <h2 className="heading-small mb-6">Translation Interpretation</h2>
              <p className="text-taupe leading-relaxed font-body">
                These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.
              </p>
            </div>

            {/* 13. Changes to Terms */}
            <div id="changes">
              <h2 className="heading-small mb-6">Changes to These Terms and Conditions</h2>
              <p className="text-taupe leading-relaxed mb-4 font-body">
                We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
              </p>
              <p className="text-taupe leading-relaxed font-body">
                By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
              </p>
            </div>

            {/* 14. Contact Us */}
            <div id="contact">
              <h2 className="heading-small mb-6">Contact Us</h2>
              <p className="text-taupe leading-relaxed mb-6 font-body">
                If you have any questions about these Terms and Conditions, You can contact us:
              </p>
              <div className="bg-ivory p-6 rounded-sm border border-warm-stone">
                <p className="font-body text-charcoal mb-3">
                  <strong>By Email:</strong><br />
                  <a href="mailto:hello@pinkandochre.com" className="text-gold hover:text-charcoal transition">hello@pinkandochre.com</a>
                </p>
                <p className="font-body text-charcoal">
                  <strong>By Visiting:</strong><br />
                  <a href="/contact" className="text-gold hover:text-charcoal transition">Pink & Ochre Contact Page</a>
                </p>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="mt-16 pt-8 border-t border-warm-stone">
            <p className="text-sm text-taupe">
              <strong>Last Updated:</strong> {lastUpdated}
            </p>
            <p className="text-sm text-taupe mt-2">
              These terms and conditions supersede all previous agreements and understandings regarding your use of this website.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

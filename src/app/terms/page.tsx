import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import IndexedContent from "@/components/IndexedContent";
import Link from "next/link";

export default function TermsPage() {
    return (
        <>
            <Header />
            <IndexedContent
                title="Terms & Conditions"
                items={[
                    {
                        title: 'About these terms',
                        content: (
                            <div className="flex flex-col gap-y-2">
                                <p>These Terms & Conditions apply to your use of managerlab.net and to all services sold by MANAGERLAB OÜ (“ManagerLab”, “we”, “us”). By using this website or buying our services, you agree to these terms.</p>
                                <p>If you have a signed service agreement with us, that agreement takes precedence over these Terms & Conditions where the two differ.</p>
                            </div>
                        )
                    },
                    {
                        title: 'How to buy our services',
                        content: (
                            <div className="flex flex-col gap-y-2">
                                <p>You contact us through the form on our website. We review every inquiry individually and may decline any request.</p>
                                <p>If we accept, we agree the package with you in writing. We then send you an invoice or a Wise payment link.</p>
                                <p>Before work starts, you confirm in writing that you accept these Terms & Conditions and our Refund & Cancellation Policy.</p>
                            </div>
                        )
                    },
                    {
                        title: 'Services and pricing',
                        content: (
                            <div className="flex flex-col gap-y-2">
                                <p>We offer monthly service packages. Current packages, what each one includes, and prices are listed in the pricing section of our website. Custom packages may be quoted individually.</p>
                                <p>All prices are in US dollars (USD, $).</p>
                                <p>The price that applies to you is the one agreed in writing before your service starts, as shown on your invoice or payment link.</p>
                                <p>We may change our prices at any time. Price changes do not affect months you have already paid for. For existing clients, we give at least 30 days notice by email before a new price applies.</p>
                                <p>Prices exclude VAT. VAT is added where required by law, including for private clients in the EU and business clients in Estonia. Business clients in other EU countries with a valid VAT number are invoiced under the reverse charge mechanism.</p>
                                <p>Unless agreed otherwise in writing, advertising budgets (ad spend) are not included in package prices. Ad spend is paid by the client directly to the advertising platform.</p>
                            </div>
                        )
                    },
                    {
                        title: 'Payment',
                        content: (
                            <div className="flex flex-col gap-y-2">
                                <p>Services are billed monthly in advance. Payment is due before the service month starts.</p>
                                <p>You can pay by card (Visa, Mastercard) through a Wise payment link, or by bank transfer.</p>
                                <p>We do not charge your card automatically. Each month is paid through a new invoice or payment link.</p>
                                <p>If payment is late, we may pause work until it is received.</p>
                            </div>
                        )
                    },
                    {
                        title: 'Delivery of services',
                        content: (
                            <div className="flex flex-col gap-y-2">
                                <p>Our services are delivered digitally. No physical goods are shipped.</p>
                                <p>Work starts once payment is received and onboarding is complete. Onboarding means you have provided account access, brand assets, and your goals.</p>
                                <p>Each service period is one calendar month from the start date.</p>
                                <p>We deliver our work through shared workspaces, content calendars, scheduled posts, reports, and meetings, as included in your package.</p>
                                <p>Delays caused by the client, such as late approvals or missing assets or access, do not extend or reduce the service period.</p>
                            </div>
                        )
                    },
                    {
                        title: 'Client responsibilities',
                        content: (
                            <div className="flex flex-col gap-y-2">
                                <p>You agree to:</p>
                                <ul className="list-disc pl-6">
                                    <li>Provide access to the accounts and materials we need to deliver the service.</li>
                                    <li>Own, or have the rights to use, all content you supply to us.</li>
                                    <li>Follow the rules of the platforms we use for you, such as Instagram, TikTok, and Meta Ads.</li>
                                </ul>
                            </div>
                        )
                    },
                    {
                        title: 'Third-party platforms',
                        content: (
                            <p>We work on platforms we do not control. We are not responsible for platform changes, algorithm changes, outages, or account or ad restrictions imposed by third-party platforms.</p>
                        )
                    },
                    {
                        title: 'Ownership of deliverables',
                        content: (
                            <div className="flex flex-col gap-y-2">
                                <p>Once paid in full, you own the final content we create specifically for you.</p>
                                <p>ManagerLab keeps ownership of its methods, templates, frameworks, and know-how, including anything we created before working with you.</p>
                                <p>We may reference our work for you in our portfolio, unless you ask us not to.</p>
                            </div>
                        )
                    },
                    {
                        title: 'Payment security',
                        content: (
                            <div className="flex flex-col gap-y-2">
                                <p>Card payments are processed by Wise Europe SA and its payment processor.</p>
                                <p>You enter your card details on Wise’s secure payment page. MANAGERLAB OÜ never receives, sees, or stores your card details.</p>
                                <p>Wise and its processor comply with the Payment Card Industry Data Security Standard (PCI DSS).</p>
                            </div>
                        )
                    },
                    {
                        title: 'Export restrictions',
                        content: (
                            <div className="flex flex-col gap-y-2">
                                <p>Our services are digital. No export restrictions apply.</p>
                                <p>We do not provide services to persons or countries under EU or international sanctions.</p>
                            </div>
                        )
                    },
                    {
                        title: 'Cancellation and refunds',
                        content: (
                            <div className="flex flex-col gap-y-2">
                                <p>Our services run month to month. You can cancel with 14 days notice before your next service month.</p>
                                <p>Cancellations and refunds are governed by our Refund & Cancellation Policy.</p>
                            </div>
                        )
                    },
                    {
                        title: 'Acceptable use of the website',
                        content: (
                            <div className="flex flex-col gap-y-2">
                                <p>You agree not to:</p>
                                <ul className="list-disc pl-6">
                                    <li>Use the site for anything unlawful.</li>
                                    <li>Attempt to gain unauthorized access to the site, its server, or related systems.</li>
                                    <li>Submit false information or impersonate another person or business.</li>
                                    <li>Scrape, copy, or harvest content or data from the site by automated means.</li>
                                </ul>
                            </div>
                        )
                    },
                    {
                        title: 'Intellectual property',
                        content: (
                            <p>All content on this website is owned by MANAGERLAB OÜ or used with permission. This includes text, graphics, the ManagerLab name, logo, flask icon, and brand materials. You may not copy, reproduce, or reuse any of it without our written consent. Sharing links to our pages is always fine.</p>
                        )
                    },
                    {
                        title: 'No guarantees',
                        content: (
                            <div className="flex flex-col gap-y-2">
                                <p>Content on this website is general information about our services and approach. It is not personalized professional advice.</p>
                                <p>Marketing results depend on many factors outside anyone’s control. We do not guarantee specific outcomes, such as streams, followers, sales, or revenue.</p>
                            </div>
                        )
                    },
                    {
                        title: 'Third-party links',
                        content: (
                            <p>The website may link to external websites or platforms. We are not responsible for their content or privacy practices.</p>
                        )
                    },
                    {
                        title: 'Liability',
                        content: (
                            <div className="flex flex-col gap-y-2">
                                <p>We aim to keep the website available and accurate, but we provide it “as is” without warranties of any kind. To the extent permitted by law, MANAGERLAB OÜ is not liable for any indirect or consequential loss arising from your use of the website or our services.</p>
                                <p>Nothing in these terms limits liability that cannot be limited by law, including liability for intentional misconduct or gross negligence.</p>
                            </div>
                        )
                    },
                    {
                        title: 'Governing law',
                        content: (
                            <p>These Terms & Conditions are governed by the laws of the Republic of Estonia. Disputes are resolved by Harju County Court (Harju Maakohus), unless mandatory law gives you the right to bring a claim elsewhere.</p>
                        )
                    },
                    {
                        title: 'Changes',
                        content: (
                            <p>We may update these Terms & Conditions at any time. The current version is always available on this page.</p>
                        )
                    },
                    {
                        title: 'Contact',
                        content: (
                            <p>Questions about these Terms & Conditions: <Link href="mailto:hello@managerlab.net" className="underline">hello@managerlab.net</Link></p>
                        )
                    }
                ]}
            />
            <Footer />
        </>
    );
}
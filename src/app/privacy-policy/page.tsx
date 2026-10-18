import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import IndexedContent from "@/components/IndexedContent";
import Link from "next/link";

export default function PrivacyPolicyPage() {
    return (
        <>
            <Header />
            <IndexedContent
                title="Privacy Policy"
                items={[
                    {
                        title: 'Who we are',
                        content: (
                            <div className="flex flex-col gap-y-2">
                                <p>This website, managerlab.net, is operated by MANAGERLAB OÜ. We are the data controller for the personal data described in this policy.</p>
                                <p>This policy explains what we collect, why, and what rights you have under the EU General Data Protection Regulation (GDPR).</p>
                            </div>
                        )
                    },
                    {
                        title: 'What we collect',
                        content: (
                            <div className="flex flex-col gap-y-2">
                                <ul className="list-disc pl-6">
                                    <li><span className="font-bold">Contact form.</span> When you use our contact form, we collect your name, email address, the subject, and your message.</li>
                                    <li><span className="font-bold">Emails.</span> When you email us directly, we collect your email address and anything you choose to include.</li>
                                    <li><span className="font-bold">Client information.</span>  If you become a client, we also collect your billing details, the information needed to deliver our services, and the account access details you share with us.</li>
                                    <li><span className="font-bold">Technical data.</span>  Our server automatically records basic technical information when you visit, such as your IP address, browser type, and the pages requested. This is used for security and to keep the site running.</li>
                                </ul>
                                <p>We do not collect payment card details. Card payments are handled entirely by Wise <Link href="#who-we-share-it-with" className="underline">(see section 4)</Link>.</p>
                            </div>
                        )
                    },
                    {
                        title: 'Why we use it and our legal basis',
                        content: (
                            <div className="flex flex-col gap-y-2">
                                <ul className="list-disc pl-6">
                                    <li>Replying to your inquiry and reviewing whether we can work together: steps taken at your request before entering a contract <Link className="underline" target="_blank" href="https://www.privacy-regulation.eu/en/6.htm#:~:text=(b)%20processing%20is%20necessary%20for%20the%20performance%20of%20a%20contract%20to%20which%20the%20data%20subject%20is%20party%20or%20in%20order%20to%20take%20steps%20at%20the%20request%20of%20the%20data%20subject%20prior%20to%20entering%20into%20a%20contract%3B">(GDPR Art. 6(1)(b))</Link>.</li>
                                    <li>Delivering our services to clients: performance of a contract <Link className="underline" target="_blank" href="https://www.privacy-regulation.eu/en/6.htm#:~:text=(b)%20processing%20is%20necessary%20for%20the%20performance%20of%20a%20contract%20to%20which%20the%20data%20subject%20is%20party%20or%20in%20order%20to%20take%20steps%20at%20the%20request%20of%20the%20data%20subject%20prior%20to%20entering%20into%20a%20contract%3B">(GDPR Art. 6(1)(b))</Link>.</li>
                                    <li>Invoicing and keeping accounting records: legal obligation <Link className="underline" target="_blank" href="https://www.privacy-regulation.eu/en/6.htm#:~:text=(c)%20processing%20is%20necessary%20for%20compliance%20with%20a%20legal%20obligation%20to%20which%20the%20controller%20is%20subject%3B">(GDPR Art. 6(1)(c))</Link>.</li>
                                    <li>Replying to general emails: our legitimate interest in responding to people who contact us <Link className="underline" target="_blank" href="https://www.privacy-regulation.eu/en/6.htm#:~:text=(f)%20processing%20is,is%20a%20child.">(GDPR Art. 6(1)(f))</Link>.</li>
                                    <li>Website security and operation: our legitimate interest in keeping the site secure and functional <Link className="underline" target="_blank" href="https://www.privacy-regulation.eu/en/6.htm#:~:text=(f)%20processing%20is,is%20a%20child.">(GDPR Art. 6(1)(f))</Link>.</li>
                                </ul>
                                <p>We do not sell your data. We do not use it for automated decision-making or profiling. We do not add you to any mailing list without your explicit agreement.</p>
                            </div>
                        )
                    },
                    {
                        title: 'Who we share it with',
                        content: (
                            <div className="flex flex-col gap-y-2">
                                <p>We only share data with service providers we need to run the website and our business:</p>
                                <ul className="list-disc pl-6">
                                    <li><span className="font-bold">Hostinger:</span> website hosting. Our server is located in Germany (EU).</li>
                                    <li><span className="font-bold">Google:</span> email (Google Workspace) and file sharing with clients (Google Drive).</li>
                                    <li><span className="font-bold">Notion and Trello:</span> project workspaces for clients, where used.</li>
                                    <li><span className="font-bold">Wise:</span> invoicing and payments. Wise processes payment data under its own privacy policy.</li>
                                </ul>
                                <p>Some of these providers may process data outside the EU, for example in the United States. Where this happens, the transfer is protected by recognised safeguards, such as the EU-US Data Privacy Framework or Standard Contractual Clauses approved by the European Commission.</p>
                                <p>We may also disclose data where required by law.</p>
                            </div>
                        )
                    },
                    {
                        title: 'How long we keep it',
                        content: (
                            <ul className="list-disc pl-6">
                                <li>Inquiries that do not lead to a working relationship: up to 12 months after our last contact, then deleted.</li>
                                <li>Client project files and account access details: deleted 30 days after the last day of service, as described in our Refund & Cancellation Policy.</li>
                                <li>Invoices and accounting records: kept for as long as Estonian accounting law requires.</li>
                                <li>Server logs: up to 14 days, then automatically deleted.</li>
                            </ul>
                        )
                    },
                    {
                        title: 'Your rights',
                        content: (
                            <div className="flex flex-col gap-y-2">
                                <p>Under the GDPR, you have the right to:</p>
                                <ul className="list-disc pl-6">
                                    <li>Access the personal data we hold about you.</li>
                                    <li>Correct inaccurate data.</li>
                                    <li>Request deletion of your data.</li>
                                    <li>Restrict or object to how we process it.</li>
                                    <li>Receive your data in a portable format.</li>
                                </ul>
                                <p>To exercise any of these rights, email <Link href="mailto:hello@managerlab.net" className="underline">hello@managerlab.net</Link>. We respond within one month.</p>
                                <p>You also have the right to lodge a complaint with a supervisory authority. In Estonia, that is the Data Protection Inspectorate (Andmekaitse Inspektsioon, <Link href="https://www.aki.ee/en" className="underline">www.aki.ee</Link>). You can also contact the data protection authority in the EU country where you live.</p>
                            </div>
                        )
                    },
                    {
                        title: 'Cookies and tracking',
                        content: (
                            <p>This website does not use cookies, analytics, or any tracking tools.</p>
                        )
                    },
                    {
                        title: 'Security',
                        content: (
                            <p>We take reasonable technical and organizational measures to protect your data, including secure hosting and restricted access. No system is completely secure, but we treat your information with care.</p>
                        )
                    },
                    {
                        title: 'Age',
                        content: (
                            <p>This website and our services are intended for professionals and businesses. They are not directed at anyone under 18, and we do not knowingly collect their data.</p>
                        )
                    },
                    {
                        title: 'Changes',
                        content: (
                            <p>We may update this Privacy Policy when our practices change. The “Last updated” date at the top always reflects the current version.</p>
                        )
                    },
                    {
                        title: 'Contact',
                        content: (
                            <p>Questions about this policy or your data: <Link href="mailto:hello@managerlab.net" className="underline">hello@managerlab.net</Link></p>
                        )
                    }
                ]}
            />
            <Footer />
        </>
    );
}
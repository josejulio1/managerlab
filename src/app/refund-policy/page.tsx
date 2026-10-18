import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import IndexedContent from "@/components/IndexedContent";
import Link from "next/link";

export default function RefundPolicyPage() {
    return (
        <>
            <Header />
            <IndexedContent
                title="Refund Policy"
                items={[
                    {
                        title: 'Scope',
                        content: (
                            <p>This Refund & Cancellation Policy applies to all ManagerLab packages and custom services. It forms part of our <Link href="/terms" className="underline">Terms & Conditions</Link>.</p>
                        )
                    },
                    {
                        title: 'Returns',
                        content: (
                            <p>Our services are digital and delivered over time. No physical goods are shipped, so returns do not apply.</p>
                        )
                    },
                    {
                        title: 'Minimum commitment',
                        content: (
                            <p>There is no minimum commitment. Our services run month to month.</p>
                        )
                    },
                    {
                        title: 'How to cancel',
                        content: (
                            <div className="flex flex-col gap-y-2">
                                <p>To cancel, email <Link href="mailto:hello@managerlab.net" className="underline">hello@managerlab.net</Link>.</p>
                                <p>Please give at least 14 days notice before your next service month starts.</p>
                                <p>If you give less than 14 days notice, the next service month still applies and is billed. Your cancellation then takes effect at the end of that month.</p>
                                <p>We confirm every cancellation in writing.</p>
                            </div>
                        )
                    },
                    {
                        title: 'What happens after cancellation',
                        content: (
                            <div className="flex flex-col gap-y-2">
                                <p>Your service continues until the end of the period you have already paid for.</p>
                                <p>After your last day of service, you have 30 days to collect your files and remove our access:</p>
                                <ul className="list-disc pl-6">
                                    <li>We send you all project files as a downloadable ZIP file. You are responsible for saving them to your own storage.</li>
                                    <li>If we used a Notion or Trello workspace for you, we transfer its ownership to you. You accept the transfer and make your own copy.</li>
                                    <li>You remove ManagerLab’s access from your accounts and platforms. We send you a checklist with instructions.</li>
                                </ul>
                                <p>When the 30-day window closes, we log out of all sessions, make no further access attempts, and permanently delete any stored login details. Shared folders and workspaces are removed, and we no longer keep copies of your files, except records we must keep by law, such as invoices.</p>
                                <p>No further invoices or payment links are sent.</p>
                            </div>
                        )
                    },
                    {
                        title: 'Refunds',
                        content: (
                            <div className="flex flex-col gap-y-2">
                                <p>If you cancel after paying but before your service month starts, you receive a full refund.</p>
                                <p>Once a service month has started, it is not refundable. Your service continues until the end of that month.</p>
                                <p>Duplicate payments and billing errors are always refunded in full.</p>
                                <p>If ManagerLab ends the service early, we refund the unused part of your prepaid period.</p>
                                <p>Refunds go back to the original payment method. Card payments are refunded to the original card only.</p>
                                <p>Approved refunds are processed within 14 days. Your bank may take a few extra days to show the refund on your statement.</p>
                            </div>
                        )
                    },
                    {
                        title: 'Business clients and consumers',
                        content: (
                            <div className="flex flex-col gap-y-2">
                                <p>Our services are intended for business clients.</p>
                                <p>If you qualify as a consumer under EU law, your statutory rights apply, including the right of withdrawal. This policy does not limit those rights.</p>
                            </div>
                        )
                    },
                    {
                        title: 'Disputes',
                        content: (
                            <p>If something is wrong, contact us first. We will work with you to resolve it before you file a payment dispute with your bank.</p>
                        )
                    },
                    {
                        title: 'Contact',
                        content: (
                            <p>Questions about this policy: <Link href="mailto:hello@managerlab.net" className="underline">hello@managerlab.net</Link></p>
                        )
                    }
                ]}
            />
            <Footer />
        </>
    );
}
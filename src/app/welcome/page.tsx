import Footer from "@/components/footer/Footer";
import Link from "next/link";

export default function WelcomePage() {
    return (
        <>
            <section className="flex flex-col gap-y-16 text-white max-w-7xl mx-auto p-8 lg:mt-28">
                <section className="flex flex-col gap-y-12">
                    <h1 className="text-5xl font-bold text-center uppercase">Welcome to ManagerLab</h1>
                    <article className="flex flex-col gap-y-2">
                        <h2 className="text-2xl">Welcome Aboard!</h2>
                        <p className="text-[var(--color-surface)]">We're glad to have you here and excited to start this collaboration. You've made the investment and committed to growing your brand, now we're here to make that happen together. This is the beginning of a structured, results-focused partnership.</p>
                    </article>
                    <article className="flex flex-col gap-y-2">
                        <h2 className="text-2xl">What's in this onboarding kit:</h2>
                        <article className="flex flex-col gap-y-2 text-[var(--color-surface)]">
                            <p>In the sections below, you'll learn the essential systems we use to work together effectively:</p>
                            <ul className="list-disc pl-8">
                                <li>How we organize everything in Google Drive</li>
                                <li>How we manage tasks and projects in Trello</li>
                                <li>How we communicate day-to-day</li>
                            </ul>
                            <p>These systems aren't complicated, but they're critical. They keep us aligned, efficient, and accountable.</p>
                        </article>
                    </article>
                    <article className="flex flex-col gap-y-2">
                        <h2 className="text-2xl">How we work together:</h2>
                        <article className="flex flex-col gap-y-2 text-[var(--color-surface)]">
                            <p>Everything we do is structured around clarity and performance:</p>
                            <ul className="list-disc pl-8">
                                <li><span className="font-bold">Clear processes:</span> you always know what's happening and when</li>
                                <li><span className="font-bold">Shared systems:</span> Google Drive for assets, Trello for task management, structured communication channels</li>
                                <li><span className="font-bold">Monthly planning and reporting:</span> we plan work in advance, execute it, track it, and review results together</li>
                            </ul>
                        </article>
                    </article>
                    <article className="flex flex-col gap-y-2">
                        <h2 className="text-2xl">Your next steps:</h2>
                        <article className="flex flex-col gap-y-2 text-[var(--color-surface)]">
                            <ol className="list-decimal pl-8">
                                <li>Go through this entire onboarding kit</li>
                                <li>Complete any onboarding materials we've shared with you</li>
                                <li>Upload your brand assets to the Google Drive folder we've set up</li>
                            </ol>
                            <p>We'll handle the strategy, the setup, and the execution. You focus on running your business and staying in the loop with us.</p>
                            <p>If you have any questions at any point about the process, the tools, the strategy, anything, just reach out. We're here.</p>
                            <p>Let's build something great together.</p>
                        </article>
                    </article>
                </section>
                <hr className="text-transparent bg-[var(--main-color)] h-0.5" />
                <section className="flex flex-col gap-y-12">
                    <h1 className="text-4xl font-bold text-center">How we use Google Drive</h1>
                    <iframe className="self-center shadow-[0_0_30px_5px_var(--main-color)] w-full md:w-[560px]" height="315" src="https://www.youtube.com/embed/MK2nVLumCOI?si=jFmreZtc4uSUWq-t" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <article className="flex flex-col gap-y-2">
                        <h2 className="text-2xl">Your Drive folder is organized into:</h2>
                        <ul className="list-disc pl-8 text-[var(--color-surface)]">
                            <li><span className="font-bold">Documents:</span> Strategies, brand guides, PDFs, and informational files</li>
                            <li><span className="font-bold">Raw Material:</span> Where you upload all content for us to use (photos, videos, graphics). Keep it organized with folders and clear file names</li>
                            <li><span className="font-bold">Edited Content:</span> Where we upload finished work for your review (organized by year/month/post). You'll review and approve in Trello, not here</li>
                            <li><span className="font-bold">Music:</span> (for musicians only): Upload tracks (WAV/MP3), album artwork inside album folders, and lyrics in a "Lyrics" folder. Press photos go in Raw Material</li>
                        </ul>
                    </article>
                    <article className="flex flex-col gap-y-2">
                        <h2 className="text-2xl">The Golden Rule:</h2>
                        <article className="text-[var(--color-surface)]">
                            <p>We ALWAYS work with Drive links. Do not send raw material via WhatsApp or email. Upload to Drive first, then share the link or attach it to the relevant Trello card.</p>
                            <p>You have full edit access to create folders and upload freely. Just keep things organized and name files clearly so we both know what they are.</p>
                            <article className="mt-4">
                                <p><span className="font-bold">New to Google Drive?</span> We've attached general tutorial links below to help you with basics like creating folders and uploading files.</p>
                                <ul className="list-disc pl-8">
                                    <li><Link target="_blank" href="https://www.youtube.com/watch?v=EKjnjySLTvM" className="text-blue-400 underline">How to create a new folder</Link></li>
                                    <li><Link target="_blank" href="https://www.youtube.com/watch?v=eHnA9InXv2o" className="text-blue-400 underline">How to download files</Link></li>
                                    <li><Link target="_blank" href="https://www.youtube.com/watch?v=qaUwvNh46U0" className="text-blue-400 underline">How to share a drive file using a link</Link></li>
                                    <li><Link target="_blank" href="https://www.youtube.com/watch?v=zhMfyajOzS0" className="text-blue-400 underline">How to move files</Link></li>
                                    <li><Link target="_blank" href="https://www.youtube.com/playlist?list=PLU8ezI8GYqs7Y5d1cgZm2Obq7leVtLkT4" className="text-blue-400 underline">Want to learn more?</Link></li>
                                </ul>
                            </article>
                        </article>
                    </article>
                </section>
                <hr className="text-transparent bg-[var(--main-color)] h-0.5" />
                <section className="flex flex-col gap-y-12">
                    <h1 className="text-4xl font-bold text-center">How we use Trello</h1>
                    <iframe className="self-center shadow-[0_0_30px_5px_var(--main-color)] w-full md:w-[560px]" height="315" src="https://www.youtube.com/embed/tV8C2QpcD2A?si=RA2dNyjHZ1tcNYw7" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <article className="flex flex-col gap-y-2">
                        <h2 className="text-2xl">Quick Reference:</h2>
                        <article className="text-[var(--color-surface)]">
                            <p>Our Trello workspace is organized into lists that represent workflow stages:</p>
                            <ul className="list-disc list pl-8">
                                <li><span className="font-bold">Information</span> – Reference materials (strategies, tips, links)</li>
                                <li>
                                    <span className="font-bold">Ideas & Brainstorm</span> – Where you dump content ideas. Contains a template with 3 stages:
                                    <ul className="list-disc pl-8">
                                        <li><span className="font-bold">Stage 1: Concept/Planning</span> – Idea is planned in detail and must be approved before production</li>
                                        <li><span className="font-bold">Stage 2: Production</span> – We handle editing and content creation</li>
                                        <li><span className="font-bold">Stage 2: Final Review</span> – You review final content (Drive link + ready-to-publish captions)</li>
                                    </ul>
                                </li>
                                <li><span className="font-bold">Month Plan</span> - Monthly content ideas with target posting dates. Let us know about events or priorities to include</li>
                                <li><span className="font-bold">Resources Prepared</span> - Cards with all assets ready. Upload material to Drive's "Raw Material" folder and paste the link in the card</li>
                                <li><span className="font-bold">In Progress</span> - We're actively working on it</li>
                                <li><span className="font-bold">Review</span> - Final content ready for your feedback. Give actionable, specific revisions here and <span className="font-bold">always tag us in comments</span></li>
                                <li><span className="font-bold">Approved</span> - Move cards here once approved. We'll schedule and publish</li>
                                <li><span className="font-bold">Live</span> - Content is published</li>
                            </ul>
                            <article className="mt-4">
                                <p><span className="font-bold">Always tag us when you comment in Trello</span> so we're notified.</p>
                                <p><span className="font-bold">Never used Trello before?</span> We've attached basic tutorial links below to help you get familiar with the platform.</p>
                                <ul className="list-disc list pl-8">
                                    <li><Link target="_blank" href="https://www.youtube.com/watch?v=LKwMcTFdq80" className="text-blue-400 underline">How to create a card</Link></li>
                                    <li><Link target="_blank" href="https://www.youtube.com/watch?v=3yrXGpBIiSI" className="text-blue-400 underline">How to manage labels</Link></li>
                                    <li><Link target="_blank" href="https://www.youtube.com/watch?v=sKTHpKNFiy4" className="text-blue-400 underline">How to delete or archive a card</Link></li>
                                    <li><Link target="_blank" href="https://www.youtube.com/watch?v=e2NFMdQcjoo" className="text-blue-400 underline">How to add team members</Link></li>
                                    <li><Link target="_blank" href="https://www.youtube.com/playlist?list=PL4H_oPRK80z6lz9LsM0rW4_DSk0EUIEEB" className="text-blue-400 underline">Want to learn more?</Link></li>
                                </ul>
                            </article>
                        </article>
                    </article>
                </section>
                <hr className="text-transparent bg-[var(--main-color)] h-0.5" />
                <section className="flex flex-col gap-y-12">
                    <h1 className="text-4xl font-bold text-center">Our methods of communication</h1>
                    <section className="flex flex-col gap-y-8">
                        <article>
                            <h2 className="text-2xl">How we communicate</h2>
                            <p className="text-[var(--color-surface)]">We keep communication straightforward so nothing gets lost and everything stays efficient.</p>
                        </article>
                        <article className="flex flex-col gap-y-2 text-[var(--color-surface)]">
                            <h4 className="font-bold">📋 Trello – For all revisions and reviews</h4>
                            <p>All feedback on posts, designs, videos, or any deliverables goes directly in the Trello card as a comment. Not WhatsApp. Not email. <span className="font-bold">In the Trello card where we’re working on that task.</span></p>
                            <p className="font-bold">Make your revisions actionable and specific:</p>
                            <ul className="list-disc list pl-8">
                                <li>✅ "Change the headline to [this]"</li>
                                <li>✅ "Use the second photo instead of the first one"</li>
                                <li>✅ "Shorten the caption to two sentences"</li>
                            </ul>
                            <p>Avoid abstract feedback like "I don't love this" or "It doesn't feel right." We can't take action on that. Be clear, be specific, and we'll move fast.</p>
                        </article>
                        <article className="flex flex-col gap-y-2 text-[var(--color-surface)]">
                            <h4 className="font-bold">💬 WhatsApp or Google Chat – For urgent matters only</h4>
                            <p>For urgent matters or quick reminders, like if we're missing something or you need a fast response, use your preferred method (WhatsApp or Google Chat).</p>
                            <p>This is for time-sensitive things, not project feedback. Keep it quick and direct.</p>
                        </article>
                        <article className="flex flex-col gap-y-2 text-[var(--color-surface)]">
                            <h4 className="font-bold">📹 Google Meet – For scheduled meetings</h4>
                            <p>All our meetings (weekly or monthly) happen on Google Meet. These are always scheduled in advance, and you'll receive the meeting link automatically via email so you can add it to your calendar.</p>
                            <p>We use this time to align on strategy, review performance, plan next steps, or discuss anything that needs a real conversation.</p>
                        </article>
                        <article className="flex flex-col gap-y-2 text-[var(--color-surface)]">
                            <h4 className="font-bold">Final note:</h4>
                            <p>Feel comfortable reaching out whenever you need something. If you're unsure about a process, have a question, or just want to check in, we're here and happy to help.</p>
                            <p>You've now completed the onboarding kit. You know how we use Drive, how we manage work in Trello, and how we communicate.</p>
                            <p>Let's get to work. We're excited to see what we build together.</p>
                        </article>
                    </section>
                </section>
            </section>
            <Footer />
        </>
    );
}
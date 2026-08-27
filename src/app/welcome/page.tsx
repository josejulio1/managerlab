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
                        <p className="text-(--color-surface)">You&apos;ve made the investment. Now let&apos;s get to work.</p>
                        <p className="text-(--color-surface)">This is the start of a structured, results-focused partnership: no chaos, no guessing what&apos;s next. This kit covers everything: the systems we use, what we need from you, and what the first few weeks look like.</p>
                    </article>
                    <article className="flex flex-col gap-y-2">
                        <h2 className="text-2xl">What&apos;s in this onboarding kit:</h2>
                        <article className="flex flex-col gap-y-2 text-[var(--color-surface)]">
                            <ul className="list-disc pl-8">
                                <li>How we use Google Drive</li>
                                <li>How we use Notion</li>
                                <li>What we need from you: access & assets</li>
                                <li>How we communicate</li>
                                <li>Your onboarding timeline</li>
                            </ul>
                            <p>These systems aren&apos;t complicated, but they&apos;re critical. They keep us aligned, efficient, and accountable.</p>
                        </article>
                    </article>
                </section>
                <hr className="text-transparent bg-(--main-color) h-0.5" />
                <section className="flex flex-col gap-y-12">
                    <h1 className="text-4xl font-bold text-center">How we use Google Drive</h1>
                    <iframe className="self-center shadow-[0_0_30px_5px_var(--main-color)] w-full md:w-[560px]" height="315" src="https://www.youtube.com/embed/MK2nVLumCOI?si=jFmreZtc4uSUWq-t" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <article className="flex flex-col gap-y-2">
                        <h2 className="text-2xl">Your Drive folder is organized into:</h2>
                        <ul className="list-disc pl-8 text-(--color-surface)">
                            <li><span className="font-bold">Documents:</span> Strategies, brand guides, PDFs, and informational files</li>
                            <li><span className="font-bold">Raw Material:</span> Where you upload all content for us to use (photos, videos, graphics). Keep it organized with folders and clear file names</li>
                            <li><span className="font-bold">Edited Content:</span> Where we upload finished work for your review (organized by year/month/post). You&apos;ll review and approve in Trello, not here</li>
                            <li><span className="font-bold">Music:</span> Upload tracks (WAV/MP3), album artwork inside album folders, and lyrics in a &quot;Lyrics&quot; folder. Press photos go in Raw Material</li>
                        </ul>
                    </article>
                    <article className="flex flex-col gap-y-2">
                        <h2 className="text-2xl">The Golden Rule:</h2>
                        <article className="text-(--color-surface)">
                            <p>We ALWAYS work with Drive links. Do not send raw material via WhatsApp or email. Upload to Drive first, then share the link or attach it to the relevant Notion item.</p>
                            <p>You have full edit access to create folders and upload freely. Just keep things organized and name files clearly so we both know what they are.</p>
                            <article className="mt-4">
                                <p><span className="font-bold">New to Google Drive?</span> A few basics to get you started:</p>
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
                <hr className="text-transparent bg-(--main-color) h-0.5" />
                <section className="flex flex-col gap-y-12">
                    <h1 className="text-4xl font-bold text-center">How we use Notion</h1>
                    <iframe className="self-center shadow-[0_0_30px_5px_var(--main-color)] w-full md:w-[560px]" height="315" src="https://www.youtube.com/embed/vMewLtvAPys?si=benDBNX_gb0DM4TI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <article className="flex flex-col gap-y-2 text-(--color-surface)">
                        <p>Notion is where we run the day-to-day: think of it as one shared workspace instead of scattered emails and DMs.</p>
                        <p>Your Notion workspace is a single hub, and it includes:</p>
                        <ul className="list-disc list pl-8">
                            <li><span className="font-bold">A to-do list</span>: tracking open items and next steps</li>
                            <li><span className="font-bold">A social media numbers tracker</span>: updated monthly, showing the social media ups and downs on a monthly basis</li>
                            <li><span className="font-bold">A content calendar</span>: where every piece of content moves through production, start to finish</li>
                        </ul>
                    </article>
                    <article className="flex flex-col gap-y-2">
                        <h2 className="text-2xl">How content moves through the calendar</h2>
                        <article className="text-[var(--color-surface)]">
                            <p>This part stays the same whatever we&apos;re working on:</p>
                            <ol className="list-decimal list pl-8">
                                <li><span className="font-bold">Idea</span>: we&apos;re sketching it. If you have content ideas, drop them here yourself, as specific as possible. Add visual references if you can.</li>
                                <li><span className="font-bold">In Progress</span>: we&apos;re making it.</li>
                                <li><span className="font-bold">To Review</span>: your step. Open the item and look at it. Want a change? Say so in a comment. Happy with it? Hit <span className="font-bold">Approve</span>, no need to touch the status yourself.</li>
                                <li><span className="font-bold">Approved</span>: you&apos;re happy with it, we&apos;re queuing it up.</li>
                                <li><span className="font-bold">Scheduled</span>: queued, with a date.</li>
                                <li><span className="font-bold">Live</span>: out in the world.</li>
                            </ol>
                            <p className="text-center mt-4">Comment <span className="font-bold">on the item itself</span> rather than over email or WhatsApp, that way your feedback stays attached to the thing it's about, and nothing gets lost.</p>
                            <article className="mt-4">
                                <p>Nothing goes live without your approval. If something&apos;s urgent or doesn&apos;t fit the flow, just message us as usual. This workspace is here to make the routine stuff easy, not to add process.</p>
                                <p>Want to learn more? A few basics to get you started with Notion:</p>
                                <ul className="list-disc list pl-8">
                                    <li><Link target="_blank" href="https://www.youtube.com/watch?v=oTahLEX3NXo&list=PLzaYMdbJMZW0gYyfNhL0sHheU5WR2YKE1 " className="text-blue-400 underline">What is Notion?</Link></li>
                                    <li><Link target="_blank" href="https://youtube.com/playlist?list=PLzaYMdbJMZW0gYyfNhL0sHheU5WR2YKE1&si=nL6rwPcVMQhAjiA4" className="text-blue-400 underline">The basics playlist</Link></li>
                                </ul>
                            </article>
                        </article>
                    </article>
                </section>
                <hr className="text-transparent bg-(--main-color) h-0.5" />
                <section className="flex flex-col gap-y-12">
                    <h1 className="text-4xl font-bold text-center">What we need from you</h1>
                    <p className="text-(--color-surface)">Before we can get moving, we need access. Here&apos;s exactly what to grant, and where.</p>
                    <article>
                        <h2 className="text-2xl">Platform access:</h2>
                        <ul className="list-disc list pl-8 text-(--color-surface)">
                            <li><Link target="_blank" href="https://www.facebook.com/business/help/2169003770027706" className="text-blue-400 underline">Meta Business Suite: add ManagerLab as a partner</Link></li>
                            <li><Link target="_blank" href="https://www.facebook.com/business/help/195296697183682?id=829106167281625" className="text-blue-400 underline">Meta Ads Manager: add ManagerLab as an admin</Link></li>
                            <li><Link target="_blank" href="https://support.spotify.com/us/artists/article/inviting-team-members-to-spotify-for-artists" className="text-blue-400 underline">Spotify for Artists: add ManagerLab as a manager</Link></li>
                            <li><Link target="_blank" href="https://support.google.com/youtube/answer/9481328?hl=en&co=GENIE.Platform%3DAndroid" className="text-blue-400 underline">YouTube: add ManagerLab as a channel manager</Link></li>
                            <li><Link target="_blank" href="https://support.google.com/google-ads/answer/6372672?hl=en" className="text-blue-400 underline">Google Ads: add ManagerLab as a manager on the account</Link></li>
                            <li>Instagram, TikTok, and anything else login-based: we&apos;ll send you a private credentials document to fill in directly.</li>
                        </ul>
                    </article>
                    <article>
                        <h2 className="text-2xl">Brand assets:</h2>
                        <p className="text-(--color-surface)">Upload your brand guidelines, logos, press photos, and any existing content to the Google Drive folder provided to you privately. Following the guidelines stated above.</p>
                    </article>
                </section>
                <hr className="text-transparent bg-(--main-color) h-0.5" />
                <section className="flex flex-col gap-y-12">
                    <h1 className="text-4xl font-bold text-center">Our methods of communication</h1>
                    <p className="text-(--color-surface)">We keep communication straightforward so nothing gets lost and everything stays efficient.</p>
                    <section className="flex flex-col gap-y-8">
                        <article className="flex flex-col gap-y-2 text-(--color-surface)">
                            <h4 className="font-bold">📋 Notion: For all revisions and reviews</h4>
                            <p>All feedback on posts, designs, videos, or any deliverables goes directly on the Notion item as a comment. Not WhatsApp. Not email. On the item itself.</p>
                            <p>Make your revisions actionable and specific:</p>
                            <ul className="list-disc list pl-8">
                                <li>✅ &quot;Change the headline to [this]&quot;</li>
                                <li>✅ &quot;Use the second photo instead of the first one&quot;</li>
                                <li>✅ &quot;Shorten the caption to two sentences&quot;</li>
                            </ul>
                            <p>Avoid abstract feedback like &quot;I don&apos;t love this&quot; or &quot;It doesn&apos;t feel right.&quot; We can&apos;t take action on that. Be clear, be specific, and we&apos;ll move fast.</p>
                        </article>
                        <article className="flex flex-col gap-y-2 text-(--color-surface)">
                            <h4 className="font-bold">💬 WhatsApp or Google Chat – For urgent matters only</h4>
                            <p>For urgent matters or quick reminders, like if we&apos;re missing something or you need a fast response, use your preferred method (WhatsApp or Google Chat).</p>
                            <p>This is for time-sensitive things, not project feedback. Keep it quick and direct.</p>
                        </article>
                        <article className="flex flex-col gap-y-2 text-(--color-surface)">
                            <h4 className="font-bold">📹 Google Meet – For scheduled meetings</h4>
                            <p>All our meetings (weekly or monthly) happen on Google Meet. These are always scheduled in advance, and you&apos;ll receive the meeting link automatically via email so you can add it to your calendar.</p>
                            <p>We use this time to align on strategy, review performance, plan next steps, or discuss anything that needs a real conversation.</p>
                        </article>
                        <article className="flex flex-col gap-y-2 text-(--color-surface)">
                            <h4 className="font-bold">Final note:</h4>
                            <p>Feel comfortable reaching out whenever you need something. If you&apos;re unsure about a process, have a question, or just want to check in, we&apos;re here and happy to help.</p>
                        </article>
                    </section>
                </section>
                <hr className="text-transparent bg-(--main-color) h-0.5" />
                <section className="flex flex-col gap-y-12">
                    <h1 className="text-4xl font-bold text-center">Your onboarding timeline</h1>
                    <section className="flex flex-col gap-y-2 text-(--color-surface)">
                        <article>
                            <p>Here's how the first steps typically go:</p>
                            <ol className="list-decimal list pl-8 font-bold">
                                <li>Fill up initial questionnaire</li>
                                <li>Create Google Drive folders</li>
                                <li>Create initial audit document</li>
                                <li>Create initial strategy document</li>
                                <li>Create Notion workspace</li>
                                <li>Sign NDA</li>
                                <li>Access to social media accounts and get permissions</li>
                                <li>Have onboarding meeting</li>
                                <li>Get started</li>
                            </ol>
                        </article>
                        <p>We&apos;ll handle the strategy, the setup, and the execution. You focus on running your business and staying in the loop with us.</p>
                        <p>If you have any questions at any point about the process, the tools, the strategy, anything, just reach out. We're here.</p>
                        <p>Let's get to work.</p>
                    </section>
                </section>
            </section>
            <Footer />
        </>
    );
}
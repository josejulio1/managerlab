import Header from "@/components/Header";
import Team from "./components/Team";
import { prisma } from "@/lib/prisma";
import userSocialNetworkAdapter from "@/app/about/adapter/user-social-network.adapter";
import Footer from "@/components/footer/Footer";

export default async function AboutPage() {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            specialty: true,
            image: true,
            socialNetworks: {
                select: {
                    socialNetwork: {
                        select: {
                            id: true,
                            url: true,
                            icon: true
                        }
                    },
                    username: true
                }
            }
        }
    });

    return (
        <>
            <Header />
            <main className="max-w-7xl m-auto flex flex-col gap-12 px-4">
                <section className="flex flex-col gap-2">
                    <h2 className="text-white md:text-[64px]/18 max-md:text-[30px]/10 max-md:text-center font-medium">A growing team built for one thing: Supporting your business the right way</h2>
                    <p className="text-[var(--color-surface)] max-md:text-center">We&apos;re marketers, dealmakers, business oriented and creative minds who believe your brand and YOU deserve the success that is meant for you. Offering everything from social media management, branding, ads campaigns, management, and the (sometimes emotional) support you need to run your business 😛 We are all about building long term relationships, not just transactions.</p>
                </section>
                <hr className="text-white/15" />
                <Team usersSocialNetworks={users.map(user => userSocialNetworkAdapter(user))} />
            </main>
            <Footer />
        </>
    );
}
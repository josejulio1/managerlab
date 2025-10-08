import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import { prisma } from "@/lib/prisma";
import ListItem from "@/components/ListItem";
import PurpleLink from "@/components/PurpleLink";
import ProcessAccordion from "./components/ProcessAccordion";

export default async function ServiceDetailsPage() {
    const categories = await prisma.category.findMany({
        select: {
            id: true,
            name: true
        }
    });

    return (
        <>
            <Header />
            <main className="flex flex-col max-lg:gap-20 lg:gap-48 mt-12 p-4">
                <section className="max-w-7xl m-auto gap-12 max-lg:flex max-lg:flex-col lg:grid lg:grid-cols-[2fr_1fr]">
                    <article className="flex flex-col gap-4">
                        <h1 className="text-white font-semibold max-md:text-4xl/10 md:text-7xl/20">Marketing & Digital Presence</h1>
                        <p className="text-[var(--color-surface)]">We don&apos;t do one-size-fits-all. Every brand is unique, and so is our approach. We build strategies that make sense for your goals. Read more to find out how we do it 👇</p>
                    </article>
                    <ul className="flex flex-col gap-2 max-lg:hidden">
                        {
                            categories.map(({ id, name }) => (
                                <ListItem
                                    key={id}
                                    className="bg-white"
                                    text={name}
                                />         
                            ))
                        }
                    </ul>
                </section>
                <section className="max-w-3xl m-auto flex flex-col gap-32">
                    <article className="flex flex-col gap-4">
                        <h3 className="text-white font-medium max-md:text-2xl md:text-4xl">How Do We Build Your Strategy?</h3>
                        <p className="text-[var(--color-surface)]">Every brand has its own style, audience, and goals. That’s why we don’t believe in one-size-fits-all solutions. We take the time to research your market, plan content that makes sense for your business, and use the right mix of organic growth and paid campaigns to get you noticed.</p>
                        <p className="text-[var(--color-surface)]">Our focus is simple: making sure everything we do fits your vision and helps you grow in the long run.</p>
                    </article>
                    <article className="flex flex-col gap-4">
                        <h3 className="text-white font-medium max-md:text-2xl md:text-4xl">A clear process, built for success</h3>
                        <p className="text-[var(--color-surface)]">Great results start with a solid plan. Our onboarding process ensures we understand your brand inside out before we execute. Here’s how we make things happen:</p>
                        <ProcessAccordion />
                        <PurpleLink
                            className="self-center"
                            href="/services"
                            text="View all services"
                        />
                    </article>
                </section>
            </main>
            <Footer />
        </>
    );
}
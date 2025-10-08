import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import Services from "@/components/service/Services";
import { prisma } from "@/lib/prisma";

export default async function ServicesPage() {
    const categories = await prisma.category.findMany();

    return (
        <>
            <Header />
            <main className="flex flex-col gap-4 p-4">
                <section className="max-w-7xl m-auto flex flex-col gap-2">
                    <h2 className="text-white md:text-[64px]/18 max-md:text-[30px]/10 max-md:text-center font-medium">The boost and care your business needs</h2>
                    <p className="text-[var(--color-surface)] max-md:text-center">We build relationships and handle everything from social media to ad campaigns and marketing, so you can focus on your business. We will support you along the way in every aspect of marketing. We don’t see our collaborations as transactions, but as connections, networking, and building solid and transparent relationships. Let’s chat and figure out how we could help you best!</p>
                </section>
                <Services services={categories} />
            </main>
            <Footer />
        </>
    );
}
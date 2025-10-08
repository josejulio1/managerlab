import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import { redirect } from "next/navigation";

interface Props {
    params: Promise<{ slug: string }>
}

export default async function BlogPage({ params }: Props) {
    const { slug } = await params;
    const blog = await prisma.blog.findUnique({
        select: {
            title: true,
            shortDescription: true,
            description: true,
            image: true
        },
        where: {
            slug
        }
    });
    if (!blog) {
        redirect('/blogs');
    }

    return (
        <>
            <Header />
            <main className="max-w-7xl m-auto flex flex-col gap-8 mt-12 p-4">
                <section className="flex flex-col gap-1">
                    <h2 className="text-white text-5xl text-center font-medium">{blog.title}</h2>
                    <p className="text-[var(--color-surface)] text-center">{blog.shortDescription}</p>
                </section>
                <Image
                    className="!h-96 object-contain"
                    src={`/api/uploads/blogs/${blog.image}`}
                    alt={blog.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                />
                <p className="text-white" dangerouslySetInnerHTML={{ __html: blog.description }}></p>
            </main>
            <Footer />
        </>
    );
}
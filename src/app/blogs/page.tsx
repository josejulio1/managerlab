import Footer from "@/components/footer/Footer";
import Header from "@/components/Header";
import { prisma } from "@/lib/prisma";
import BlogItem from "./components/BlogItem";

export default async function BlogsPage() {
    const blogs = await prisma.blog.findMany({
        select: {
            id: true,
            title: true,
            shortDescription: true,
            slug: true,
            image: true
        }
    });

    return (
        <>
            <Header />
            <main className={`max-w-7xl m-auto p-4 flex justify-center items-center ${blogs.length === 0 ? 'h-[75dvh]' : ''}`}>
                {
                    blogs.length > 0
                        ? (
                            <ul className="lg:grid lg:grid-cols-2 xl:grid-cols-3">
                                {
                                    blogs.map(blog => (
                                        <BlogItem
                                            key={blog.id}
                                            blog={blog}
                                        />
                                    ))
                                }
                            </ul>
                        )
                        : <p className="text-white text-6xl font-medium text-center">No blogs found</p>
                }
            </main>
            <Footer />
        </>
    );
}
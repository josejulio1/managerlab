import { prisma } from "@/lib/prisma";
import CrudPanel from "../../components/crud-panel/CrudPanel";
import BlogCard from "./BlogCard";

export default async function Blogs() {
    const blogs = await prisma.blog.findMany({
        select: {
            id: true,
            title: true,
            shortDescription: true,
            description: true,
            image: true
        }
    });

    return (
        <CrudPanel
            newHref="/admin/blogs"
            items={blogs}
            render={blog => (
                <BlogCard
                    key={blog.id}
                    blog={blog}
                />
            )}
        />
    );
}
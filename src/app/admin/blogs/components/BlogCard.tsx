import Image from "next/image";
import { Blog } from "../../../../../generated/prisma";
import Card from "../../components/card/Card";
import { deleteBlog } from "../actions/action";

interface Props {
    blog: Pick<Blog, 'id' | 'title' | 'shortDescription' | 'image'>
}

export default function BlogCard({ blog }: Props) {
    return (
        <Card
            className="flex items-center max-lg:flex-col max-lg:gap-4 lg:gap-12"
            editHref="/admin/blogs"
            id={blog.id}
            deleteServerAction={deleteBlog}
        >
            <Image
                className="basis-40"
                src={`/api/uploads/blogs/${blog.image}`}
                alt={blog.title}
                width={150}
                height={0}
            />
            <section className="flex flex-col gap-1">
                <h4 className="text-white text-4xl font-medium max-lg:text-center">{blog.title}</h4>
                <p className="text-[var(--color-surface)] max-lg:text-center">{blog.shortDescription}</p>
            </section>
        </Card>
    );
}
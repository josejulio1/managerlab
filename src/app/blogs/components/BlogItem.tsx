import Image from "next/image";
import { Blog } from "../../../../generated/prisma";
import PurpleLink from "@/components/PurpleLink";

interface Props {
    blog: Pick<Blog, 'title' | 'shortDescription' | 'image' | 'slug'>
}

export default function BlogItem({ blog }: Props) {
    return (
        <li className="flex flex-col gap-4 border border-white/20 rounded-2xl p-4">
            <Image
                src={`/api/uploads/blogs/${blog.image}`}
                alt={blog.title}
                width={0}
                height={0}
                sizes="100vw"
            />
            <section className="flex flex-col gap-1">
                <h4 className="text-white text-4xl font-medium">{blog.title}</h4>
                <p className="text-[var(--color-surface)] text-sm">{blog.shortDescription}</p>
            </section>
            <PurpleLink
                text="Read blog"
                href={`/blogs/${blog.slug}`}
            />
        </li>
    );
}
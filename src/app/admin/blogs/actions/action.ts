'use server';

import { NewBlogForm, newBlogSchema } from "../schemas/new-blog.schema";
import { Blog, Prisma } from "../../../../../generated/prisma";
import { prisma } from "@/lib/prisma";
import path from "path";
import Envs from "@/config/Envs";
import { EditBlogForm, editBlogSchema } from "../schemas/edit-blog.schema";
import { revalidatePath } from "next/cache";
import slug from "slug";
import FileManager from "@/services/FileManager";
import ActionResponse from "../../interfaces/action";
import { StatusCodes } from "http-status-codes";

const PATH = '/admin/blogs';

export async function createBlog(data: NewBlogForm): Promise<ActionResponse> {
    const { success, error } = newBlogSchema.safeParse(data);
    if (!success) {
        return {
            message: error.message,
            status: StatusCodes.BAD_REQUEST
        }
    }

    const { title, shortDescription, description, image } = data;
    const blogExists = await prisma.blog.findUnique({
        select: {
            title: true
        },
        where: {
            title
        }
    });
    if (blogExists) {
        return {
            message: `The blog "${blogExists.title}" exists. Use other name`,
            status: StatusCodes.BAD_REQUEST
        }
    }
    
    const { file } = await FileManager.upload(Envs().IMAGES_BLOGS_FOLDER, image);
    await prisma.blog.create({
        data: {
            title,
            shortDescription,
            description,
            slug: slug(title),
            image: file
        }
    });
    
    revalidatePath(PATH);
    return {
        message: 'Blog created successfully',
        status: StatusCodes.CREATED
    }
}

export async function updateBlog(data: EditBlogForm): Promise<ActionResponse> {
    const { success, error } = editBlogSchema.safeParse(data);
    if (!success) {
        return {
            message: error.message,
            status: StatusCodes.BAD_REQUEST
        }
    }
    
    const { id, title, shortDescription, description, image } = data;
    const blogExists = await prisma.blog.findUnique({
        select: {
            title: true
        },
        where: {
            title,
            NOT: {
                id
            }
        }
    });
    if (blogExists) {
        return {
            message: `The blog "${blogExists.title}" exists. Use other name`,
            status: StatusCodes.BAD_REQUEST
        }
    }

    const blogImage = await prisma.blog.findUnique({
        select: {
            title: true,
            image: true
        },
        where: {
            id
        }
    });
    if (!blogImage) {
        return {
            message: 'Blog not found',
            status: StatusCodes.NOT_FOUND
        }
    }
    
    const blogData: Prisma.BlogUpdateInput = {
        title,
        shortDescription,
        description,
        slug: slug(title)
    }
    if (image) {
        const { IMAGES_BLOGS_FOLDER } = Envs();
        const isDeleted = await FileManager.delete(path.join(IMAGES_BLOGS_FOLDER, blogImage.image));
        if (!isDeleted) {
            return {
                message: 'The image could not be deleted. Contact the administrator',
                status: StatusCodes.INTERNAL_SERVER_ERROR
            }
        }
        const { file } = await FileManager.upload(IMAGES_BLOGS_FOLDER, image);
        blogData['image'] = file;
    }
    await prisma.blog.update({
        data: blogData,
        where: {
            id
        }
    });

    revalidatePath(PATH);
    return {
        message: 'Blog updated successfully',
        status: StatusCodes.OK
    }
}

export async function deleteBlog(id: Blog['id']): Promise<ActionResponse> {
    const blog = await prisma.blog.findUnique({
        select: {
            image: true
        },
        where: {
            id
        }
    });
    if (!blog) {
        return {
            message: 'Blog not found',
            status: StatusCodes.NOT_FOUND
        }
    }

    // Delete image
    const isDeleted = await FileManager.delete(path.join(Envs().IMAGES_BLOGS_FOLDER, blog.image))
    if (!isDeleted) {
        return {
            message: 'The image could not be deleted. Contact the administrator',
            status: StatusCodes.INTERNAL_SERVER_ERROR
        }
    }

    await prisma.blog.delete({
        where: {
            id
        }
    });

    revalidatePath(PATH);
    return {
        message: 'Blog deleted successfully',
        status: StatusCodes.OK
    }
}
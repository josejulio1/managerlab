'use server';

import { revalidatePath } from "next/cache";
import { Prisma, User } from "../../../../../generated/prisma";
import { prisma } from "@/lib/prisma";
import { NewUserForm, newUserSchema } from "../schemas/new-user.schema";
import Envs from "@/config/Envs";
import { EditUserForm, editUserSchema } from "../schemas/edit-user.schema";
import path from "path";
import ActionResponse from "../../interfaces/action";
import { StatusCodes } from "http-status-codes";
import FileManager from "@/services/FileManager";

const PATH = '/admin/users';

export async function createUser(data: NewUserForm): Promise<ActionResponse> {
    const { success, error } = newUserSchema.safeParse(data);
    if (!success) {
        return {
            message: error.message,
            status: StatusCodes.BAD_REQUEST
        }
    }

    const { name, specialty, image } = data;
    const { file } = await FileManager.upload(Envs().IMAGES_USERS_FOLDER, image);
    await prisma.user.create({
        data: {
            name,
            specialty,
            image: file
        }
    });

    revalidatePath(PATH);
    return {
        message: 'User created successfully',
        status: StatusCodes.CREATED
    }
}

export async function updateUser(data: EditUserForm): Promise<ActionResponse> {
    const { success, error } = editUserSchema.safeParse(data);
    if (!success) {
        return {
            message: error.message,
            status: StatusCodes.BAD_REQUEST
        }
    }

    const { id, name, specialty, image, socialNetworks } = data;
    const userImage = await prisma.user.findUnique({
        select: {
            image: true
        },
        where: {
            id
        }
    });
    if (!userImage) {
        return {
            message: 'User not found',
            status: StatusCodes.NOT_FOUND
        }
    }

    const userData: Prisma.UserUpdateInput = {
        name,
        specialty
    }
    if (image) {
        const { IMAGES_USERS_FOLDER } = Envs();
        const isDeleted = await FileManager.delete(path.join(IMAGES_USERS_FOLDER, userImage.image));
        if (!isDeleted) {
            return {
                message: 'The image could not be deleted. Contact the administrator',
                status: StatusCodes.INTERNAL_SERVER_ERROR
            }
        }
        const { file } = await FileManager.upload(IMAGES_USERS_FOLDER, image);
        userData['image'] = file;
    }
    await prisma.user.update({
        data: userData,
        where: {
            id
        }
    });
    await prisma.userSocialNetwork.deleteMany({
        where: {
            userId: id
        }
    });
    await prisma.userSocialNetwork.createMany({
        data: socialNetworks.filter(({ username }) => username).map(socialNetwork => ({
            socialNetworkId: socialNetwork.id,
            userId: id,
            username: socialNetwork.username!
        }))
    });

    revalidatePath(PATH);
    return {
        message: 'User updated successfully',
        status: StatusCodes.OK
    }
}

export async function deleteUser(id: User['id']): Promise<ActionResponse> {
    const user = await prisma.user.findUnique({
        where: {
            id
        }
    });
    if (!user) {
        return {
            message: 'User not found',
            status: StatusCodes.NOT_FOUND
        }
    }

    // Delete image
    const isDeleted = await FileManager.delete(path.join(Envs().IMAGES_USERS_FOLDER, user.image));
    if (!isDeleted) {
        return {
            message: 'The image could not be deleted. Contact the administrator',
            status: StatusCodes.INTERNAL_SERVER_ERROR
        }
    }

    await prisma.user.delete({
        where: {
            id
        }
    });

    revalidatePath(PATH);
    return {
        message: 'User deleted successfully',
        status: StatusCodes.OK
    }
}
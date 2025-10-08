'use server';

import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { LoginForm, loginSchema } from "../schemas/login.schema";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import JwtService from "@/services/JwtService";
import ActionResponse from "@/app/admin/interfaces/action";
import { StatusCodes } from "http-status-codes";

export async function login(data: LoginForm): Promise<ActionResponse> {
    const { success, error } = loginSchema.safeParse(data);
    if (!success) {
        return {
            message: error.message,
            status: StatusCodes.BAD_REQUEST
        }
    }

    const { email, password } = data;
    const authenticatedUser = await prisma.authenticatedUsers.findUnique({
        select: {
            id: true,
            password: true
        },
        where: {
            email
        }
    });
    if (!authenticatedUser) {
        return {
            message: 'Incorrect password',
            status: StatusCodes.BAD_REQUEST
        }
    }
    if (!await bcrypt.compare(password, authenticatedUser.password)) {
        return {
            message: 'Incorrect password',
            status: StatusCodes.BAD_REQUEST
        }
    }

    const cookieStore = await cookies();
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const token = await JwtService.encrypt({ id: authenticatedUser.id });
    cookieStore.set('session', token, {
        httpOnly: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/'
    });
    redirect('/admin/categories');
}
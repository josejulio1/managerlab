'use server';

import Envs from "@/config/Envs";
import { ContactForm, contactFormSchema } from "../schemas/contact-form.schema";
import TelegramBot from "node-telegram-bot-api";
import ActionResponse from "@/app/admin/interfaces/action";
import { StatusCodes } from "http-status-codes";

export async function sendTelegram(data: ContactForm): Promise<ActionResponse & { title: string, content: string }> {
    const { success, error } = contactFormSchema.safeParse(data);
    if (!success) {
        return {
            message: error.message,
            status: StatusCodes.BAD_REQUEST,
            title: '',
            content: ''
        }
    }

    const { name, email, subject, message } = data;
    const { TELEGRAM_TOKEN, TELEGRAM_CHAT_ID } = Envs();
    const bot = new TelegramBot(TELEGRAM_TOKEN);
    await bot.sendMessage(TELEGRAM_CHAT_ID, `You have received a message from "${name}" with email "${email}" with subject "${subject}".\n\nThe attached message is:\n${message}`);

    return {
        message: '',
        status: StatusCodes.OK,
        title: 'Your information was sent successfully',
        content: 'We will send you an email as soon as possible!'
    }
}
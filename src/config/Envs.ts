type EnvsType = {
    GOOGLE_ANALYTICS_KEY: string
    JWT_SECRET: string
    DATABASE_URL: string
    TELEGRAM_TOKEN: string
    TELEGRAM_CHAT_ID: string
    IMAGES_CUSTOMERS_FOLDER: string
    IMAGES_USERS_FOLDER: string
    IMAGES_BLOGS_FOLDER: string
}

const Envs = (): EnvsType => ({
    GOOGLE_ANALYTICS_KEY: process.env.GOOGLE_ANALYTICS_KEY!,
    JWT_SECRET: process.env.JWT_SECRET!,
    DATABASE_URL: process.env.DATABASE_URL!,
    TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN!,
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID!,
    IMAGES_CUSTOMERS_FOLDER: process.env.IMAGES_CUSTOMERS_FOLDER!,
    IMAGES_USERS_FOLDER: process.env.IMAGES_USERS_FOLDER!,
    IMAGES_BLOGS_FOLDER: process.env.IMAGES_BLOGS_FOLDER!
});

export default Envs;
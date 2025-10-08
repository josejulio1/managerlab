import path from "path";
import { defineConfig } from "@prisma/config";

process.loadEnvFile('.env.local');

export default defineConfig({
    schema: path.join('prisma', 'schema.prisma'),
    migrations: {
        path: path.join('prisma', 'migrations'),
        seed: 'tsx prisma/seed.ts'
    }
});
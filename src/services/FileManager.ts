import path from "path";
import fs from "fs/promises";
import { randomUUID } from "crypto";

export default class FileManager {
    private static UPLOADS_FOLDER = path.join(process.cwd(), 'uploads');

    public static async upload(folder: string, file: File): Promise<{ file: string }> {
        const filePath = `${randomUUID()}.${file.type.split('/')[1]}`;

        await fs.writeFile(
            path.join(this.UPLOADS_FOLDER, folder, filePath),
            await file.bytes()
        );

        return {
            file: filePath
        }
    }

    public static async delete(filePath: string): Promise<boolean> {
        try {
            await fs.unlink(
                path.join(this.UPLOADS_FOLDER, filePath)
            );
            return true;
        } catch {
            return false;
        }
    }
}
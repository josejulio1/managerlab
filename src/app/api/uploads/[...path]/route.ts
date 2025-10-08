import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const UPLOADS_DIR = path.join(process.cwd(), 'uploads');

export async function GET(
    _: NextRequest,
    res: { params: Promise<{ path: string[] }> }
) {
    const { path: paths } = await res.params;
    try {
        const filePath = path.join(UPLOADS_DIR, ...paths);
        const file = await fs.readFile(filePath);

        const ext = path.extname(filePath).toLowerCase();
        const mimeType =
            ext === '.jpg' || ext === '.jpeg'
                ? 'image/jpeg'
                : ext === '.png'
                    ? 'image/png'
                    : ext === '.gif'
                        ? 'image/gif'
                        : 'application/octet-stream';

        return new NextResponse(new Uint8Array(file), {
            status: 200,
            headers: {
                'Content-Type': mimeType,
                'Cache-Control': 'no-store'
            }
        });
    } catch {
        return new NextResponse('File not found', { status: 404 });
    }
}

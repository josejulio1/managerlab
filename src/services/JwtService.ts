import 'server-only';
import { JWTPayload, jwtVerify, SignJWT } from "jose";
import Envs from '@/config/Envs';

const secret = Envs().JWT_SECRET;
const encodedSecret = new TextEncoder().encode(secret);

export default class JwtService {
    public static encrypt(payload: { id: number }): Promise<string> {
        return new SignJWT(payload)
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('7d')
            .sign(encodedSecret);
    }

    public static async decrypt(session: string): Promise<JWTPayload | null> {
        try {
            const { payload } = await jwtVerify(session, encodedSecret, {
                algorithms: ['HS256']
            });
            return payload;
        } catch {
            return null;
        }
    }
}
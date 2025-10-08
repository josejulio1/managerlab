import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async headers() {
        return [
            {
                source: '/uploads/:path',
                headers: [
                    { key: 'Cache-Control', value: 'no-store' }
                ]
            }
        ];
    },
    experimental: {
        serverActions: {
            bodySizeLimit: '5mb'
        }
    }
};

export default nextConfig;

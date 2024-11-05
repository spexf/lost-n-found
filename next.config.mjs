/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        middleware: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
            },

        ]
    }
};

export default nextConfig;

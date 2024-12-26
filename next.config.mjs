/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
            },
            {
                protocol: 'http',
                hostname: 'localhost:9000',
            },
            {
                protocol: 'http',
                hostname: 'localhost'
            }

        ]
    }
};

export default nextConfig;

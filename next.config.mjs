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
                hostname: '192.168.100.53:9000',
            }

        ]
    }
};

export default nextConfig;

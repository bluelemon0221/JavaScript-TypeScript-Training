/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '**.unsplash.com'
            }
        ]
    }
};

module.exports = nextConfig

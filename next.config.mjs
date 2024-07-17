/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                hostname: "m.media-amazon.com",
            }, {
                hostname: "firebasestorage.googleapis.com",
            }
        ],
    },
};

export default nextConfig;

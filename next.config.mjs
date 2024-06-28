/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['gravatar.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '/a/**',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/u/**',
            },
        ],
    },
}

export default nextConfig
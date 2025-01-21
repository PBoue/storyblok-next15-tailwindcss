import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'a.storyblok.com',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'storyblok.imgix.net',
				port: '',
				pathname: '/**',
			},
		],
	},
}

export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				pathname:"/dnbdpnvz1/**"
			},
		],
	},
}

module.exports = nextConfig

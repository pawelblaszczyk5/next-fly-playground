/* eslint-disable unicorn/prefer-module -- next config*/

/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		dirs: ["."],
		ignoreDuringBuilds: true,
	},
	experimental: {
		serverActions: true,
		typedRoutes: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};

module.exports = nextConfig;

/* eslint-disable unicorn/prefer-module -- next config*/

/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		dirs: ["."],
	},
	experimental: {
		serverActions: true,
		typedRoutes: true,
	},
};

module.exports = nextConfig;

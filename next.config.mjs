/** @type {import('next').NextConfig} */
import MillionLint from "@million/lint";
const nextConfig = {
	images: {
		domains: [
			"placehold.co",
			"api.microlink.io",
			"th.bing.com",
			"briskteq.com",
			"www.gtu.ac.in",
			"i.scdn.co",
		],
	},
	swcMinify: true,
	future: {
		webpack5: true, // by default, if you customize webpack config, they switch back to version 4.
		// Looks like backward compatibility approach.
	},
	webpack(config) {
		config.resolve.fallback = {
			...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
			// by next.js will be dropped. Doesn't make much sense, but how it is
			fs: false, // the solution
		};
		return config;
	},
};

export default MillionLint.next({
	rsc: true,
})(nextConfig);

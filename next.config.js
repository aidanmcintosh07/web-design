/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "www.thebalancemoney.com",
			},
			{
				hostname: "www.lifewire.com",
			},
			{
				hostname: "education.medicaldialogues.in",
			},
		],
	},
};

module.exports = nextConfig;

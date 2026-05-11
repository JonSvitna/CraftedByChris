import nextVitals from "eslint-config-next/core-web-vitals.js";

const config = Array.isArray(nextVitals)
	? nextVitals
	: Array.isArray(nextVitals?.default)
		? nextVitals.default
		: [nextVitals];

export default config;

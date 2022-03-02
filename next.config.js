/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
};

const withTM = require("next-transpile-modules")(["date-fns"]); // pass the modules you would like to see transpiled
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([withTM], nextConfig);

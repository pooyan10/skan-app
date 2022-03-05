/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoicG9veWFuMTAiLCJhIjoiY2wwYjhwNnB0MDZ6ZTNqcTlvbDN0cng2ZSJ9.q1sY0OQfPjtpQ1u5chQ-8g",
  },
};

const withTM = require("next-transpile-modules")(["date-fns"]); // pass the modules you would like to see transpiled
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([withTM], nextConfig);

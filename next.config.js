/** @type {import('next').NextConfig} */
const webpack = require('webpack');
require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: ['babel-loader'],
      exclude: /node_modules/,
    });
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    return config;
  },
};

module.exports = nextConfig;

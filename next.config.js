/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public'
})

const nextConfig = {
  reactStrictMode: true,
  images:{
    unoptimized: true
  }
}

module.exports = withPWA(nextConfig);

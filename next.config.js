/** @type {import('next').NextConfig} */
// const nextConfig = {}

// const nextConfig = {
// trailingSlash: true,
// output: 'export',
// }
// module.exports = nextConfig
const nextConfig = {
  output: 'export',
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}

module.exports = nextConfig
module.exports = {
  images: {
      unoptimized: true
  }
}

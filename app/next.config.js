// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

/* eslint-disable */
module.exports = {
  // distDir: resolve(process.cwd(), '.next'),
  distDir: '../.next',
  useFileSystemPublicRoutes: false, // disabled as we are routing from 'server.js'

  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config

    // Important: return the modified config
    return config
  },
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config

    // Important: return the modified config
    return config
  }
}
/* eslint-enable */

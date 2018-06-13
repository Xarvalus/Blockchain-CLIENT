// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: 'app/', conf: require('./app/next.config') })
const handle = app.getRequestHandler()

// @TODO faked config for serving SSR with react-router route handling
app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    // @TODO NextJS recognizes "index" page only, which returns entire `app`
    // @TODO while SSR processes react-router mounts desired page and returns proper content
    app.render(req, res, '/', query)

    // @TODO handle 404 page and specific routes from react-router in client
    // if (pathname === '/') {
    //   app.render(req, res, '/', query)
    // } else {
    //   app.render(req, res, '/NotFoundPage', query)
    //   //handle(req, res, parsedUrl)
    // }

  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})

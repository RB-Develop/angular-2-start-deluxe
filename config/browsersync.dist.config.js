const conf = require('./gulp.config');

const url = require('url');
const proxy = require('proxy-middleware');
const proxyOptions = url.parse('http://localhost');
proxyOptions.route = '/api';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports = function () {
  return {
    server: {
      baseDir: [
        conf.paths.dist
      ],
      middleware: [proxy(proxyOptions)]
    },
    open: "external",
    online: true
  };
};

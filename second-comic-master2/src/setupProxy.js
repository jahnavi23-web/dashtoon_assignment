const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
      changeOrigin: true,
    })
  );
};

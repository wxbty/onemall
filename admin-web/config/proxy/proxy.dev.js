// 开发环境，的代理配置

module.exports = {
  '/admin-api/': {
    target: 'http://121.43.168.82:18083/',
    // target: 'http://180.167.213.26:18083/',
    changeOrigin: true,
    pathRewrite: {},
  },
  '/product-api/': {
    // target: 'http://180.167.213.26:18083/',
    target: 'http://114.55.38.162:18081/',
    changeOrigin: true,
    pathRewrite: {},
  },
  '/order-api/': {
    // target: 'http://180.167.213.26:18084/',
    target: 'http://114.55.38.162:18088/',
    changeOrigin: true,
    pathRewrite: {},
  },
  '/promotion-api/': {
    // target: 'http://180.167.213.26:18085/',
    target: 'http://114.55.38.162:18085/',
    changeOrigin: true,
    pathRewrite: {},
  },
  '/user-api/': {
    // target: 'http://180.167.213.26:18085/',
    target: 'http://114.55.38.162:18082/',
    changeOrigin: true,
    pathRewrite: {},
  },
  '/pay-api/': {
    // target: 'http://180.167.213.26:18085/',
    target: 'http://121.43.168.82:18084/',
    changeOrigin: true,
    pathRewrite: {},
  },
};

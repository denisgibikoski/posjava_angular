const proxy = [
    {
      context: '/posjava_rest',
      target: 'http://localhost:8084',
      pathRewrite: {'^/posjava_rest' : ''}
    }
  ];
  module.exports = proxy;
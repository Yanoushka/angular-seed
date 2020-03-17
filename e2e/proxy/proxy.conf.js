const PROXY_CONFIG = {
  '/pets': {
    target: true,
    changeOrigin: true,
    secure: false,
    router: function (req) {
      console.log(req.params)
      var target = 'http://localhost:4200/assets/mock';
      console.log (target);
      return target;
    },
  }
  
};

module.exports = PROXY_CONFIG;

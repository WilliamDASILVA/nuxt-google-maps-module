const { resolve } = require('path');

module.exports = {
  srcDir: __dirname,
  dev: false,
  render: {
    resourceHints: false,
  },
  modules: [
    [resolve(__dirname, './../../dist/module.js'), {
    }],
  ],
};

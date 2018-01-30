const { resolve } = require('path');

module.exports = function module(moduleOptions) {
  const defaults = {
    defer: true,
    async: true,
    body: true,
    key: null,
    libraries: [
      'places',
    ],
  };

  const options = {
    ...defaults,
    ...this.options.maps,
    ...moduleOptions,
  };

  const libraries = options.libraries.join(',');

  this.options.head.script.push({
    src: `//maps.googleapis.com/maps/api/js?key=${options.key}&libraries=${libraries}&callback=initMap`,
    defer: options.defer,
    async: options.async,
  });

  this.addPlugin({
    src: resolve(__dirname, './plugin.template.js'),
    ssr: false,
    options,
  });
};

// eslint-disable-next-line
module.exports.meta = require(resolve(__dirname, './../package.json'));

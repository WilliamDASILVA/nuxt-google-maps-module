'use strict';

var path = require('path');

module.exports = function module(moduleOptions) {
  var defaults = {
    defer: true,
    async: true,
    body: true,
    key: null,
    libraries: ['places']
  };
  var options = Object.assign({}, defaults, this.options.maps, moduleOptions);

  var libraries = options.libraries.join(',');

  if (!options.body) {
    this.options.head.script.push({
      src: '//maps.googleapis.com/maps/api/js?key=' + options.key + '&libraries=' + libraries,
      defer: options.defer,
      async: options.async
    });
  }

  process.env['google-maps-module'] = options;
  console.log('ENV', options);

  this.addPlugin({
    src: path.resolve(__dirname, './templates/plugin.js'),
    ssr: false,
    options: options
  });
};
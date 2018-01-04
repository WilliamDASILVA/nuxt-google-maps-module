'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (context, inject) {
  console.log('OPTIONS', process.env['google-maps-module']);
  var options = process.env['google-maps-module'];

  if (typeof window !== 'undefined' && typeof window.google !== 'undefined') {
    inject('google', window.google);
    context.app.google = window.google;

    if (options.body && options.libraries && typeof document !== 'undefined') {
      var libraries = options.libraries.join(',');

      if (libraries) {
        var scriptElement = document.createElement('scirpt');
        scriptElement.type = 'text/javascript';
        scriptElement.src = '//maps.googleapis.com/maps/api/js?key=' + options.key + '&libraries=' + libraries;
        scriptElement.defer = options.defer;
        scriptElement.async = options.async;

        document.body.appendChild(scriptElement);
      }
    }
  }
};
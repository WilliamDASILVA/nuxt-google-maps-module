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

  /**
   * Make sure the initMap function is created in the DOM
   * before we even think to initialize the Google Maps API
   */
  // eslint-disable-next-line
  this.options.head.__dangerouslyDisableSanitizers = ['script'];
  this.options.head.script.push({
    innerHTML: `window.initMap = () => {
      window.dispatchEvent(new Event('maps-module:loaded'));
      window.addEventListener('maps-module:initiated', () => {
        setTimeout(() => {
          window.dispatchEvent(new Event('maps-module:loaded'));
        });
      });
    }`,
    type: 'text/javascript',
  });

  /**
   * Import the Google Maps script with initMap callback.
   */
  this.options.head.script.push({
    src: `//maps.googleapis.com/maps/api/js?key=${options.key}&libraries=${libraries}&callback=initMap`,
    defer: options.defer,
    async: options.async,
  });

  /**
   * Inject the plugin to inject the Google object in the Vue instance
   */
  this.addPlugin({
    src: resolve(__dirname, './plugin.template.js'),
    options,
  });
};

// eslint-disable-next-line
module.exports.meta = require(resolve(__dirname, './../package.json'));

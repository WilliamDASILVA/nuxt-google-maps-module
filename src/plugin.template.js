import Vue from 'vue';

export default function (context, inject) {
  /**
   * Inject the Google object in the Nuxt instance, even if it's
   * not used server side.
   */
  context.app.google = {};
  inject('google', {});

  /**
   * Apply the new Google object to the previously created one in our
   * Vue app (client side only)
   * Do an event boomerang to make sure the Google maps API callback was
   * called and google injected in Vue.
   */
  if (process.client && typeof window !== 'undefined') {
    const event = new window.Event('maps-module:initiated');
    window.dispatchEvent(event);
    window.addEventListener('maps-module:loaded', () => {
      Vue.use(() => {
        if (!Vue.prototype.hasOwnProperty('$google')) {
          Object.defineProperty(Vue.prototype, '$google', {
            get () {
              return window.google;
            }
          })
        }
      });

      context.app.google = window.google;
    });
  }
}

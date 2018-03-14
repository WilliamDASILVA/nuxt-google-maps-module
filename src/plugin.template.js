import Vue from 'vue';

export default function (context) {
  /**
   * Inject Google object in our Vue app (client side only)
   * Do an event boomerang to make sure the Google maps API callback was
   * called and google injected in Vue.
   */
  if (typeof window !== 'undefined') {
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

export default function (context, inject) {
  <% if (options.key) { %>
    if (typeof window !== 'undefined' && typeof window.google !== 'undefined') {
      inject('google', window.google);
      context.app.google = window.google;

      if (options.body && typeof document !== 'undefined') {
        const libraries = options.libraries.join(',');
  
        const scriptElement = document.createElement('scirpt');
        scriptElement.type = 'text/javascript';
        scriptElement.src = `//maps.googleapis.com/maps/api/js?key=${options.key}&libraries=${libraries}`;
        scriptElement.defer = options.defer;
        scriptElement.async = options.async;
  
        document.body.appendChild(scriptElement);
      }
    }
  <% } %>
}

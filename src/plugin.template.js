export default function (context) {
  if (typeof window !== 'undefined' && typeof window.google !== 'undefined') {
    context.app.google = window.google;

    <% if (options.body && options.libraries && typeof document !== 'undefined') { %>

      <% if (options.libraries) { %>
        const scriptElement = document.createElement('scirpt');
        scriptElement.type = 'text/javascript';
        scriptElement.src = '//maps.googleapis.com/maps/api/js?key=<%= options.key %>&libraries='+<%= options.libraries %>;
        scriptElement.defer = <%= options.defer %>;
        scriptElement.async = <%= options.async %>;

        document.body.appendChild(scriptElement);
      <% } %>
    <% } %>
  }
}

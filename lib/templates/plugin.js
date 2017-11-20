export default function (context, inject) {
  <% if (options.key) { %>
    if (typeof window !== 'undefined' && typeof window.google !== 'undefined') {
      inject('google', window.google);
      context.app.google = window.google;
    }
  <% } %>
}

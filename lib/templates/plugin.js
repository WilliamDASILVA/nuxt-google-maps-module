// function appendToDOM(domElement, options) {
//   console.log('appending to dom', domElement, options);
//   const libraries = options.libraries.join(',');
  
//   const scriptElement = document.createElement('scirpt');
//   scriptElement.type = 'text/javascript';
//   scriptElement.src = `//maps.googleapis.com/maps/api/js?key=${options.key}&libraries=${libraries}`;
//   scriptElement.defer = options.defer;
//   scriptElement.async = options.async;

//   domElement.appendChild(scriptElement);
// }

export default function (context, inject) {
  <% if (options.key) { %>
    if (typeof window !== 'undefined' && typeof window.google !== 'undefined') {
      inject('google', window.google);
      context.app.google = window.google;

      console.log('OPTIONS', options);
      // if (options.body) {
      //   appendToDOM(document.body, options);
      // }
    }
  <% } %>
}

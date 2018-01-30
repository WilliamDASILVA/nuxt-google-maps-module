export default function (context) {
  if (process.client) {
    if (typeof window !== 'undefined') {
      window.initMap = () => {
        context.app.google = window.google;
      };
    }
  }
}

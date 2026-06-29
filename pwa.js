// Register the service worker so the app becomes installable (Add to Home Screen).
// Shared by every page so installation works no matter where the user lands.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

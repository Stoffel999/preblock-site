/**
 * PreBlock — Anonymous Page-View Tracker (DSGVO-safe)
 *
 * Fires exactly one POST /api/public/track/pageview to the Sphere on
 * page load. Uses sendBeacon so the request survives even if the user
 * navigates away immediately. No cookies, no localStorage, no cross-day
 * identification (server hashes the IP with a daily-rotating salt).
 *
 * Beacon target is api.preblock.io — the WireGuard tunnel to the
 * Sphere — so all visitor data collects in the Owner's local Mongo
 * where the admin dashboard actually reads from. Do NOT change this
 * to preblock.io — that would land the data in the wrong (Demo Pod)
 * database.
 *
 * Include on every static page you want tracked:
 *
 *   <script src="/assets/analytics.js" defer></script>
 */
(function () {
  try {
    var body = JSON.stringify({
      path: location.pathname + (location.search || ''),
      site: 'sales.preblock.io',
      referrer: document.referrer || null
    });
    var url = 'https://api.preblock.io/api/public/track/pageview';
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, new Blob([body], { type: 'application/json' }));
    } else {
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body,
        keepalive: true
      }).catch(function () {});
    }
  } catch (e) {
    // silent — tracker must never break the page
  }
})();

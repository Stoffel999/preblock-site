/* PreBlock — 7-Day Free Trial modal (self-contained)
   Wire it up: <button data-testid="open-trial-modal" onclick="PreBlockTrial.open()">Try 7 days free</button>
   Requires nothing else. Injects modal on demand. Uses fetch(). Silent-fail on network.
   API: POST https://preblock.io/api/public/trial/request
*/
(function () {
  var API_BASE = 'https://preblock.io';

  var css = ''
    + '.pb-trial-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.72); backdrop-filter: blur(6px); z-index: 9999; display: none; align-items: center; justify-content: center; padding: 20px; }'
    + '.pb-trial-backdrop[data-open="true"] { display: flex; }'
    + '.pb-trial-card { background: #0b0f14; border: 1px solid rgba(251, 146, 60, 0.35); border-radius: 14px; padding: 28px; max-width: 480px; width: 100%; box-shadow: 0 20px 60px rgba(0,0,0,0.5); }'
    + '.pb-trial-card h3 { margin: 0 0 6px; color: #fb923c; font-size: 22px; font-weight: 700; }'
    + '.pb-trial-card p.pb-lede { margin: 0 0 20px; color: rgba(255,255,255,0.72); font-size: 14px; line-height: 1.55; }'
    + '.pb-trial-card label { display: block; margin: 12px 0 6px; color: rgba(255,255,255,0.85); font-size: 13px; font-weight: 600; }'
    + '.pb-trial-card input[type="text"], .pb-trial-card input[type="email"] { width: 100%; padding: 10px 12px; background: #12181f; border: 1px solid rgba(255,255,255,0.15); color: #fff; border-radius: 8px; font-size: 14px; box-sizing: border-box; }'
    + '.pb-trial-card input[type="text"]:focus, .pb-trial-card input[type="email"]:focus { outline: none; border-color: #fb923c; }'
    + '.pb-trial-card .pb-check { display: flex; gap: 10px; margin: 10px 0; align-items: flex-start; color: rgba(255,255,255,0.72); font-size: 12px; line-height: 1.5; }'
    + '.pb-trial-card .pb-check input { margin-top: 3px; }'
    + '.pb-trial-card .pb-actions { margin-top: 22px; display: flex; gap: 10px; }'
    + '.pb-trial-card button.pb-primary { flex: 1; padding: 12px 16px; background: linear-gradient(135deg, #fb923c 0%, #f97316 100%); color: #0b0f14; border: none; border-radius: 8px; font-weight: 700; font-size: 14px; cursor: pointer; }'
    + '.pb-trial-card button.pb-primary:disabled { opacity: 0.5; cursor: not-allowed; }'
    + '.pb-trial-card button.pb-ghost { padding: 12px 16px; background: transparent; color: rgba(255,255,255,0.6); border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; font-weight: 500; font-size: 14px; cursor: pointer; }'
    + '.pb-trial-card .pb-error { margin-top: 12px; padding: 10px 12px; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); color: #fca5a5; border-radius: 6px; font-size: 13px; }'
    + '.pb-trial-card .pb-success { margin-top: 12px; padding: 14px; background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.35); color: #bbf7d0; border-radius: 8px; font-size: 13px; }'
    + '.pb-trial-card .pb-success code { display: block; padding: 8px 10px; background: #000; color: #fb923c; font-family: monospace; font-size: 12px; margin-top: 8px; border-radius: 4px; word-break: break-all; }';

  var html = ''
    + '<div class="pb-trial-backdrop" data-open="false" data-testid="trial-modal-backdrop" onclick="if(event.target===this) PreBlockTrial.close()">'
    + '  <div class="pb-trial-card" role="dialog" aria-modal="true">'
    + '    <h3>7-Day Free Trial</h3>'
    + '    <p class="pb-lede">Full Home-tier features (AI-scored contrarian templates, sub-100ms responses, 1 node). No credit card. No BTC address. Expires automatically after 7 days.</p>'
    + '    <div data-pb-form>'
    + '      <label for="pb-trial-email">Email</label>'
    + '      <input type="email" id="pb-trial-email" data-testid="trial-modal-email" required autocomplete="email" placeholder="you@example.com" />'
    + '      <label for="pb-trial-name">Name (optional)</label>'
    + '      <input type="text" id="pb-trial-name" data-testid="trial-modal-name" autocomplete="name" placeholder="John Miner" />'
    + '      <div class="pb-check">'
    + '        <input type="checkbox" id="pb-trial-terms" data-testid="trial-modal-terms" required />'
    + '        <label for="pb-trial-terms" style="font-weight: 400; margin: 0;">I accept the trial <a href="/agb.html" target="_blank" style="color:#fb923c">Terms of Service</a></label>'
    + '      </div>'
    + '      <div class="pb-check">'
    + '        <input type="checkbox" id="pb-trial-privacy" data-testid="trial-modal-privacy" required />'
    + '        <label for="pb-trial-privacy" style="font-weight: 400; margin: 0;">I accept the <a href="/datenschutz.html" target="_blank" style="color:#fb923c">Privacy Notice</a> (GDPR)</label>'
    + '      </div>'
    + '      <div class="pb-actions">'
    + '        <button type="button" class="pb-ghost" data-testid="trial-modal-cancel" onclick="PreBlockTrial.close()">Cancel</button>'
    + '        <button type="button" class="pb-primary" data-testid="trial-modal-submit" onclick="PreBlockTrial.submit()">Get Trial Key →</button>'
    + '      </div>'
    + '      <div class="pb-error" data-pb-error style="display:none;"></div>'
    + '    </div>'
    + '    <div data-pb-success style="display:none;"></div>'
    + '  </div>'
    + '</div>';

  var initialized = false;
  function init() {
    if (initialized) return;
    initialized = true;
    var style = document.createElement('style'); style.textContent = css; document.head.appendChild(style);
    var wrap = document.createElement('div'); wrap.innerHTML = html; document.body.appendChild(wrap.firstElementChild);
  }

  var api = {
    open: function () {
      init();
      var b = document.querySelector('.pb-trial-backdrop');
      if (b) b.setAttribute('data-open', 'true');
      var e = document.getElementById('pb-trial-email');
      if (e) setTimeout(function () { e.focus(); }, 60);
    },
    close: function () {
      var b = document.querySelector('.pb-trial-backdrop');
      if (b) b.setAttribute('data-open', 'false');
      // reset the form for next open
      var f = document.querySelector('[data-pb-form]');
      var s = document.querySelector('[data-pb-success]');
      var er = document.querySelector('[data-pb-error]');
      if (f) f.style.display = '';
      if (s) { s.style.display = 'none'; s.innerHTML = ''; }
      if (er) { er.style.display = 'none'; er.textContent = ''; }
      var em = document.getElementById('pb-trial-email'); if (em) em.value = '';
      var nm = document.getElementById('pb-trial-name');  if (nm) nm.value = '';
      var t1 = document.getElementById('pb-trial-terms');  if (t1) t1.checked = false;
      var t2 = document.getElementById('pb-trial-privacy'); if (t2) t2.checked = false;
      var btn = document.querySelector('.pb-primary'); if (btn) { btn.disabled = false; btn.textContent = 'Get Trial Key →'; }
    },
    submit: function () {
      var email = (document.getElementById('pb-trial-email') || {}).value || '';
      var name  = (document.getElementById('pb-trial-name')  || {}).value || '';
      var terms = (document.getElementById('pb-trial-terms')  || {}).checked;
      var priv  = (document.getElementById('pb-trial-privacy') || {}).checked;
      var errEl = document.querySelector('[data-pb-error]');
      var showError = function (msg) {
        if (!errEl) return;
        errEl.textContent = msg;
        errEl.style.display = '';
      };
      if (errEl) { errEl.textContent = ''; errEl.style.display = 'none'; }

      if (!email || email.indexOf('@') < 0) { showError('Please enter a valid email address.'); return; }
      if (!terms || !priv) { showError('Please accept both the terms and the privacy notice.'); return; }

      var btn = document.querySelector('.pb-primary');
      if (btn) { btn.disabled = true; btn.textContent = 'Requesting…'; }

      fetch(API_BASE + '/api/public/trial/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          name: name.trim() || undefined,
          consent_terms: true,
          consent_privacy: true,
          language: (document.documentElement.lang || 'en').startsWith('de') ? 'de' : 'en',
        }),
      }).then(function (r) { return r.json().then(function (d) { return { ok: r.ok, status: r.status, data: d }; }); })
        .then(function (res) {
          if (res.ok && res.data && res.data.ok) {
            var apiKey = res.data.api_key || '(sent by email)';
            var licId = res.data.license_id || '';
            var exp = res.data.trial_expires_at || '';
            var succ = document.querySelector('[data-pb-success]');
            var frm  = document.querySelector('[data-pb-form]');
            if (frm) frm.style.display = 'none';
            if (succ) {
              succ.style.display = '';
              succ.innerHTML = '<div class="pb-success">'
                + '<div style="font-weight:700; margin-bottom:6px; color:#4ade80;">Trial key issued.</div>'
                + '<div>Your key expires on <strong>' + (exp ? new Date(exp).toLocaleDateString() : 'in 7 days') + '</strong>.'
                + ' A copy has also been sent to your email.</div>'
                + '<code>' + apiKey + '</code>'
                + '<div style="margin-top:10px; opacity:0.8;">License ID: <code style="display:inline;padding:2px 6px;">' + licId + '</code></div>'
                + '<div style="margin-top:14px;"><button type="button" class="pb-ghost" onclick="PreBlockTrial.close()">Close</button></div>'
                + '</div>';
            }
          } else {
            var msg = (res.data && (res.data.detail || res.data.message)) || 'Request failed. Please try again.';
            showError(msg);
            if (btn) { btn.disabled = false; btn.textContent = 'Get Trial Key →'; }
          }
        })
        .catch(function () {
          showError('Network error — please check your connection and try again.');
          if (btn) { btn.disabled = false; btn.textContent = 'Get Trial Key →'; }
        });
    },
  };

  window.PreBlockTrial = api;
})();

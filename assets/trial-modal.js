/* PreBlock — 7-Day Free Trial modal (self-contained, DE/EU-compliant)
   Legal ceremony matches paid Starter buyer:
     - Name (required), Email, Company (optional), Country (required)
     - 5 mandatory consents: Terms, Privacy, NDA, Waive-Withdrawal, Sanctions
   Wire it up: <button onclick="PreBlockTrial.open()">Try 7 days free</button>
   API: POST https://preblock.io/api/public/trial/request
*/
(function () {
  var API_BASE = 'https://preblock.io';

  var css = ''
    + '.pb-trial-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.72); backdrop-filter: blur(6px); z-index: 9999; display: none; align-items: flex-start; justify-content: center; padding: 20px; overflow-y: auto; }'
    + '.pb-trial-backdrop[data-open="true"] { display: flex; }'
    + '.pb-trial-card { background: #0b0f14; border: 1px solid rgba(251, 146, 60, 0.35); border-radius: 14px; padding: 26px; max-width: 520px; width: 100%; margin: 24px 0; box-shadow: 0 20px 60px rgba(0,0,0,0.5); }'
    + '.pb-trial-card h3 { margin: 0 0 6px; color: #fb923c; font-size: 22px; font-weight: 700; }'
    + '.pb-trial-card p.pb-lede { margin: 0 0 16px; color: rgba(255,255,255,0.72); font-size: 13px; line-height: 1.55; }'
    + '.pb-trial-card .pb-lede em { color: #fb923c; font-style: normal; }'
    + '.pb-trial-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }'
    + '.pb-trial-card label.pb-field { display: block; color: rgba(255,255,255,0.85); font-size: 12px; font-weight: 600; margin-bottom: 4px; }'
    + '.pb-trial-card label.pb-field .req { color: #f87171; }'
    + '.pb-trial-card label.pb-field .opt { color: rgba(255,255,255,0.4); font-weight: 400; }'
    + '.pb-trial-card input[type="text"], .pb-trial-card input[type="email"] { width: 100%; padding: 9px 11px; background: #12181f; border: 1px solid rgba(255,255,255,0.15); color: #fff; border-radius: 7px; font-size: 13px; box-sizing: border-box; }'
    + '.pb-trial-card input[type="text"]:focus, .pb-trial-card input[type="email"]:focus { outline: none; border-color: #fb923c; }'
    + '.pb-trial-consents { margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.08); }'
    + '.pb-trial-consents .pb-legal-hint { color: rgba(255,255,255,0.4); font-size: 10px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }'
    + '.pb-trial-card .pb-check { display: flex; gap: 8px; margin: 6px 0; align-items: flex-start; color: rgba(255,255,255,0.7); font-size: 12px; line-height: 1.5; cursor: pointer; }'
    + '.pb-trial-card .pb-check input { margin-top: 3px; flex-shrink: 0; }'
    + '.pb-trial-card .pb-check a { color: #fb923c; }'
    + '.pb-trial-card .pb-actions { margin-top: 18px; display: flex; gap: 10px; }'
    + '.pb-trial-card button.pb-primary { flex: 1; padding: 11px 16px; background: linear-gradient(135deg, #fb923c 0%, #f97316 100%); color: #0b0f14; border: none; border-radius: 7px; font-weight: 700; font-size: 13px; cursor: pointer; }'
    + '.pb-trial-card button.pb-primary:disabled { opacity: 0.5; cursor: not-allowed; }'
    + '.pb-trial-card button.pb-ghost { padding: 11px 16px; background: transparent; color: rgba(255,255,255,0.6); border: 1px solid rgba(255,255,255,0.2); border-radius: 7px; font-weight: 500; font-size: 13px; cursor: pointer; }'
    + '.pb-trial-card .pb-error { margin-top: 12px; padding: 10px 12px; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); color: #fca5a5; border-radius: 6px; font-size: 12px; }'
    + '.pb-trial-card .pb-success { margin-top: 12px; padding: 14px; background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.35); color: #bbf7d0; border-radius: 8px; font-size: 13px; }'
    + '.pb-trial-card .pb-success code { display: block; padding: 8px 10px; background: #000; color: #fb923c; font-family: monospace; font-size: 11px; margin-top: 8px; border-radius: 4px; word-break: break-all; }';

  var fields = ''
    + '<div class="pb-trial-grid">'
    + '  <div><label class="pb-field" for="pb-t-email">Email <span class="req">*</span></label>'
    + '       <input type="email" id="pb-t-email" data-testid="trial-modal-email" required autocomplete="email" placeholder="you@example.com" /></div>'
    + '  <div><label class="pb-field" for="pb-t-name">Full name <span class="req">*</span></label>'
    + '       <input type="text" id="pb-t-name" data-testid="trial-modal-name" required autocomplete="name" placeholder="John Miner" /></div>'
    + '  <div><label class="pb-field" for="pb-t-company">Company <span class="opt">(optional)</span></label>'
    + '       <input type="text" id="pb-t-company" data-testid="trial-modal-company" autocomplete="organization" placeholder="Acme Mining GmbH" /></div>'
    + '  <div><label class="pb-field" for="pb-t-country">Country <span class="req">*</span></label>'
    + '       <input type="text" id="pb-t-country" data-testid="trial-modal-country" required autocomplete="country-name" placeholder="Germany / DE" /></div>'
    + '</div>';

  var consents = ''
    + '<div class="pb-trial-consents">'
    + '  <div class="pb-legal-hint">Required consents · § 305 BGB · GDPR Art. 7 · § 356(5) BGB · § 18 AWG</div>'
    + '  <label class="pb-check"><input type="checkbox" id="pb-t-c-terms"     data-testid="trial-modal-terms"     required>I accept the trial <a href="/agb.html" target="_blank">Terms of Service (AGB)</a>.</label>'
    + '  <label class="pb-check"><input type="checkbox" id="pb-t-c-privacy"   data-testid="trial-modal-privacy"   required>I accept the <a href="/datenschutz.html" target="_blank">Privacy Notice (GDPR)</a>.</label>'
    + '  <label class="pb-check"><input type="checkbox" id="pb-t-c-nda"       data-testid="trial-modal-nda"       required>I acknowledge the <a href="/nda.html" target="_blank">Mutual NDA</a> — AI-scored templates are proprietary IP.</label>'
    + '  <label class="pb-check"><input type="checkbox" id="pb-t-c-waive"     data-testid="trial-modal-waive"     required>I request immediate delivery of the digital trial service and waive my 14-day withdrawal right (§ 356(5) BGB).</label>'
    + '  <label class="pb-check"><input type="checkbox" id="pb-t-c-sanctions" data-testid="trial-modal-sanctions" required>I declare I am not resident in, nor acting for, any person or entity on EU/UN/OFAC sanctions lists (§ 18 AWG).</label>'
    + '</div>';

  var html = ''
    + '<div class="pb-trial-backdrop" data-open="false" data-testid="trial-modal-backdrop" onclick="if(event.target===this) PreBlockTrial.close()">'
    + '  <div class="pb-trial-card" role="dialog" aria-modal="true">'
    + '    <h3>7-Day Free Trial</h3>'
    + '    <p class="pb-lede">Full Home-tier features (AI-scored contrarian templates, sub-100ms responses, 1 node). No credit card. Expires automatically after 7 days. <em>Same legal consent set as a paid Starter buyer applies (EU/DE seller-protection requirement).</em></p>'
    + '    <div data-pb-form>' + fields + consents
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

  function val(id) { var el = document.getElementById(id); return el ? (el.value || '').trim() : ''; }
  function chk(id) { var el = document.getElementById(id); return !!(el && el.checked); }
  function resetForm() {
    ['pb-t-email','pb-t-name','pb-t-company','pb-t-country'].forEach(function (id) { var e = document.getElementById(id); if (e) e.value = ''; });
    ['pb-t-c-terms','pb-t-c-privacy','pb-t-c-nda','pb-t-c-waive','pb-t-c-sanctions'].forEach(function (id) { var e = document.getElementById(id); if (e) e.checked = false; });
    var f  = document.querySelector('[data-pb-form]');    if (f)  f.style.display = '';
    var s  = document.querySelector('[data-pb-success]'); if (s)  { s.style.display = 'none'; s.innerHTML = ''; }
    var er = document.querySelector('[data-pb-error]');   if (er) { er.style.display = 'none'; er.textContent = ''; }
    var btn = document.querySelector('.pb-primary'); if (btn) { btn.disabled = false; btn.textContent = 'Get Trial Key →'; }
  }

  var api = {
    open: function () {
      init();
      var b = document.querySelector('.pb-trial-backdrop'); if (b) b.setAttribute('data-open', 'true');
      var e = document.getElementById('pb-t-email'); if (e) setTimeout(function () { e.focus(); }, 60);
    },
    close: function () {
      var b = document.querySelector('.pb-trial-backdrop'); if (b) b.setAttribute('data-open', 'false');
      resetForm();
    },
    submit: function () {
      var email   = val('pb-t-email');
      var name    = val('pb-t-name');
      var company = val('pb-t-company');
      var country = val('pb-t-country');
      var cT = chk('pb-t-c-terms'), cP = chk('pb-t-c-privacy'), cN = chk('pb-t-c-nda'),
          cW = chk('pb-t-c-waive'), cS = chk('pb-t-c-sanctions');
      var errEl = document.querySelector('[data-pb-error]');
      var showError = function (m) { if (!errEl) return; errEl.textContent = m; errEl.style.display = ''; };
      if (errEl) { errEl.textContent = ''; errEl.style.display = 'none'; }

      if (!email || email.indexOf('@') < 0)      { showError('Please enter a valid email address.'); return; }
      if (!name || name.length < 2)              { showError('Please enter your full name.'); return; }
      if (!country || country.length < 2)        { showError('Please enter your country.'); return; }
      if (!(cT && cP && cN && cW && cS))         { showError('Please tick all five consent boxes — required for a legally valid trial issuance under EU/DE law.'); return; }

      var btn = document.querySelector('.pb-primary');
      if (btn) { btn.disabled = true; btn.textContent = 'Requesting…'; }

      fetch(API_BASE + '/api/public/trial/request', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email, name: name, company: company || undefined, country: country,
          consent_terms:                 true,
          consent_privacy:               true,
          consent_nda:                   true,
          consent_waive_withdrawal:      true,
          consent_sanctions_attestation: true,
          language: (document.documentElement.lang || 'en').startsWith('de') ? 'de' : 'en',
        }),
      }).then(function (r) { return r.json().then(function (d) { return { ok: r.ok, status: r.status, data: d }; }); })
        .then(function (res) {
          if (res.ok && res.data && res.data.ok) {
            var apiKey = res.data.api_key || '(sent by email)';
            var licId  = res.data.license_id || '';
            var exp    = res.data.trial_expires_at || '';
            var succ = document.querySelector('[data-pb-success]');
            var frm  = document.querySelector('[data-pb-form]');
            if (frm) frm.style.display = 'none';
            if (succ) {
              succ.style.display = '';
              succ.innerHTML = '<div class="pb-success">'
                + '<div style="font-weight:700; margin-bottom:6px; color:#4ade80;">Trial key issued.</div>'
                + '<div>Your key expires on <strong>' + (exp ? new Date(exp).toLocaleDateString() : 'in 7 days') + '</strong>. A copy has also been sent to your email.</div>'
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

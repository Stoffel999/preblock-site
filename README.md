# preblock-site

Marketing landing page for **[PreBlock](https://preblock.io)** — predictive mining platform for Bitcoin pools.

Single-file static site, deployed via **GitHub Pages**.

---

## 🚀 Deploy

### One-time setup

1. Push this repo to GitHub: `Stoffel999/preblock-site`
2. Settings → Pages → **Source: Deploy from a branch** → Branch: `main` / Folder: `/ (root)` → Save
3. Add custom domain: `preblock.io` (the `CNAME` file in this repo handles that automatically)
4. In your registrar (Porkbun / Namecheap) — set DNS:
   - **A record** `@` → `185.199.108.153`
   - **A record** `@` → `185.199.109.153`
   - **A record** `@` → `185.199.110.153`
   - **A record** `@` → `185.199.111.153`
   - **CNAME record** `www` → `stoffel999.github.io`
5. GitHub Pages → Enforce HTTPS ✅ (after cert provisioned, ~5–30 min)

### Updates

Just push to `main`. GitHub Pages auto-deploys.

---

## 🛠 Local preview

```bash
# Any static server
python3 -m http.server 8080
# → http://localhost:8080
```

Or just open `index.html` directly in a browser.

---

## 🧩 What's inside

`index.html` — single-file landing page:

- **Stack:** Pure HTML/CSS/JS, no build step, no frameworks
- **Fonts:** Space Grotesk + IBM Plex Sans + JetBrains Mono (Google Fonts CDN)
- **Icons:** [Lucide](https://lucide.dev) via UMD CDN
- **ROI Calculator:** Live BTC price (CoinGecko) + network hashrate (blockchain.info)

### Sections

1. **Header** — sticky, glass-morphism, nav + GitHub CTA
2. **Hero** — value prop + live stat card (87–100% hit-rate)
3. **Trust bar** — tech stack
4. **Features** — 8 modules from the product
5. **ROI Calculator** — interactive estimator, browser-side math
6. **Architecture** — ASCII diagram of the data flow
7. **License Models** — Model C / B / A cards
8. **Demo Access** — Public preview + Live Sphere (NDA-required)
9. **CTA** — sales inquiry via GitHub issue
10. **Footer** — links + brand

### Design tokens

```css
--bg:           #0a0a0c
--surface:      #1a1a1f
--accent:       #F7931A     /* Bitcoin orange */
--text:         #f5f5f7
--text-muted:   #a0a0a8
```

---

## 🔗 Links

- **Tool repo:** [github.com/Stoffel999/preblock-node](https://github.com/Stoffel999/preblock-node) *(private)*
- **Public preview (catcher):** [kangaroo-jobs.preview.emergentagent.com](https://kangaroo-jobs.preview.emergentagent.com)
- **Live Sphere (NDA):** `live.preblock.io` *(coming soon)*
- **Contact:** [@Stoffel999](https://github.com/Stoffel999)

---

## 📝 License

© 2026 Stoffel999. All rights reserved. PreBlock is a trademark in formation.

# preblock-site

Marketing landing page for **PreBlock** — predictive mining platform for Bitcoin pools.

Single-file static site, deployed via **GitHub Pages**, served at **`sales.preblock.io`**.

---

## 🌐 Domain Architecture

| Domain                  | Hosted on        | Purpose                                                     | Visibility       |
|-------------------------|------------------|-------------------------------------------------------------|------------------|
| **`preblock.io`**       | Emergent Cloud   | Public catcher with live-managed seed data                  | Public           |
| **`sales.preblock.io`** | GitHub Pages     | Marketing landing page, ROI calculator, license terms       | Public           |
| **`live.preblock.io`**  | VPS → Sphere     | Real Bitcoin mainnet demo, NDA + Basic-Auth required        | Hidden / invite  |

- `preblock.io` links discreetly to `sales.preblock.io` (for serious inquirers)
- `sales.preblock.io` links back to `preblock.io` (public preview) and offers a "Request live access" CTA
- `live.preblock.io` is **never publicly linked** — strictly NDA + invitation

---

## 🚀 Deploy

### One-time setup (this repo)

1. Push to GitHub: `Stoffel999/preblock-site`
2. **Settings → Pages** → Source: `Deploy from a branch` → Branch `main` / `/ (root)` → Save
3. **Custom domain** `sales.preblock.io` (CNAME file handles that)
4. Wait ~5–30 min after DNS, enable **Enforce HTTPS** ✅

### DNS at your registrar (Strato)

```
Type   Name    Value
─────────────────────────────────────────────────────
CNAME  sales   stoffel999.github.io.
```

GitHub Pages auto-provisions Let's Encrypt for `sales.preblock.io`.

### Updates

Push to `main`. GitHub Pages auto-deploys.

---

## 🛠 Local preview

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

Or open `index.html` directly in a browser.

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
7. **Pricing Tiers** — Community banner + 4 tier cards (Starter-Share, Starter-Fix, Pro, Enterprise)
8. **Demo Access** — Public preview (`preblock.io`) + Live Sphere (NDA-required)
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
- **Public preview (catcher):** [preblock.io](https://preblock.io)
- **Live Sphere (NDA, invite only):** `live.preblock.io`
- **Contact:** [@Stoffel999](https://github.com/Stoffel999)

---

## 📝 License

© 2026 Stoffel999. All rights reserved. PreBlock is a trademark in formation.

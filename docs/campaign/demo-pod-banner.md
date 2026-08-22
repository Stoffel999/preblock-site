# Demo Pod — Frozen-Data Banner

_Full-width callout that renders at the top of every public page on preblock.io while the sync from Sphere is paused. Amber warning tone. Dismissable per session (localStorage flag) but reappears on hard refresh._

---

## Headline copy (short — for the banner)

**Live data paused — full engine currently under stress-test preparation.**

## Sub-copy (one sentence)

The public metrics on this demo site are intentionally held at the last verified snapshot while we prepare the 200 PH live stress-test. Full data resumes after the campaign test window closes. Prospects requiring live NDA-gated numbers can request access at **live.preblock.io**.

## Two CTAs on the banner

- **Back the test →** `/crowdfund`
- **Request live access →** `mailto:sales@preblock.io`

## Design notes

- Border-color: amber-500/40
- Background: amber-500/10 with subtle grain
- Icon: pause circle from lucide-react
- Position: fixed top, above header, 40px tall on desktop, wraps on mobile
- Not dismissable on the /crowdfund page itself (keep the context always visible on the campaign hub)

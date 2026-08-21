# PreBlock

**A different approach to block-template construction for small and mid-tier Bitcoin miners.**
_Live-measured precision · sealed-block evidence · Stratum-V1 compatible._

---

## What PreBlock does

Large pools build their templates the same way everyone else does. **PreBlock uses a different method.** For small and mid-tier operators our method is the best available way to stay in the game at all — the point where classic fee-rate sorting no longer produces a competitive edge.

What exactly PreBlock does differently is our core IP and only disclosed under NDA. What is measurable and public are the results below.

## Benchmark numbers

Measured on **2026-08-21 at 09:30 CEST**, after the system had been running undisturbed for 16 hours.

- **Hit Rate: 82.17 %** over 129 audited blocks.
- **Template Precision: ~90 %** average across the same window.
- **Chain Confidence: ~97 %** — rolling stability signal from three independent inputs.

These are single-window benchmark values. The current live snapshot on **https://live.preblock.io** shows what the same metrics are producing right now, at the current chain tip. Live values move — that is normal for a rolling 24-hour window and does not indicate a change in the underlying method. The benchmark above is our documented reference point; the /proof page shows the live continuation.

**Why the /proof display is intentionally delayed:** The public /proof page reads pre-computed snapshots that the system produces once per hour in the background. The public endpoint never runs live aggregations against the hot-path collections that drive the mining stack. That is a deliberate design choice — the mining core takes priority over UI freshness. Displayed numbers may lag by up to one hour; nobody notices, and the mining engine keeps every millisecond of Mongo capacity it needs.

## Who benefits

- Small pool operators running between 100 TH/s and 20 PH/s across Bitaxen, LuckyMiner and Nerdminer fleets.
- Farm operators combining their own ASIC capacity with rented top-up hashpower.
- Marketplace resellers of MRR / NiceHash capacity looking for a technical differentiator beyond raw fee-rate sorting.

## Who PreBlock is NOT for

We do not compete with Foundry or Antpool on raw hashrate scale. A PreBlock customer with 20 PH/s will not find statistically more blocks than a Foundry customer of the same size. What our method gives small and mid-tier operators is the structural tool to participate in the game with materially less hashrate than the incumbents — nothing more, nothing less. Hashrate deficits cannot be closed by software; they can only be closed by more hashrate.

## Business model

PreBlock is a **software vendor, not a mining pool**. Customers keep their own hashrate, their own pool relationship and their own coinbase payouts. We never hold, receive or forward customer funds — no pool operation, no custody, no payment processing, no banking-license attack surface.

- **One-year subscription**, no auto-renewal, no rolling subscription trap. The license key expires after twelve months and the customer explicitly buys a new one if they want to continue.
- Optional consulting-setup for pool operators requiring on-premise installation.
- Whitelabel licensing for marketplace operators.
- Full buyout on request.

Prices on request — deliberately not public, so enterprise negotiations are not pre-empted.

## Contact

- **Email**: sales@preblock.io
- **LinkedIn Company**: https://www.linkedin.com/company/preblock/
- **LinkedIn Founder**: https://www.linkedin.com/in/joachim-richter-steidl-2a191a3a0/
- **X**: https://x.com/PreBlockHQ
- **Live dashboard**: https://live.preblock.io

---

_This document is a public handout. Method, internals and scoring math are covered by NDA._

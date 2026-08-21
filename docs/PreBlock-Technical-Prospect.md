# PreBlock — Integration Sheet

_Version 1.3 · February 2026 · Public handout · English only_

---

## What PreBlock is

PreBlock is a **software vendor**, not a mining pool. We ship block templates to licensed customers over an API.

Large pools build their templates the same way everyone else does. **PreBlock uses a different method.** For small and mid-tier operators our method is the best available way to stay in the game at all — the point where classic fee-rate sorting no longer produces a competitive edge. What exactly PreBlock does differently is our core IP and only disclosed under NDA. What is measurable and public are the numbers below.

Customers keep their own hashrate, their own pool relationship and their own coinbase payouts. **PreBlock never holds, receives or forwards customer funds.** No pool operation, no custody, no payment processing — no banking-license attack surface.

## Benchmark numbers

Measured on **2026-08-21 at 09:30 CEST**, after the system had been running undisturbed for 16 hours.

- **Hit Rate: 82.17 %** over 129 audited blocks.
- **Template Precision: ~90 %** average.
- **Chain Confidence: ~97 %** — rolling stability signal from three independent inputs.

These are single-window benchmark values. The current live snapshot on **https://live.preblock.io** shows what the same metrics produce at the current chain tip. Live values move — that is normal for a rolling 24-hour window and does not indicate a change in the underlying method. The benchmark above is our documented reference point; the /proof page shows the live continuation.

**Why the /proof display is intentionally delayed:** The public /proof endpoint reads pre-computed snapshots that the system produces once per hour in the background. It never runs live aggregations against the hot-path collections that drive the mining stack. This is a deliberate design choice — the mining core takes priority over UI freshness. Displayed numbers may lag by up to one hour; the mining engine keeps every millisecond of Mongo capacity it needs.

## What a customer buys

- **Time-boxed API access** to the PreBlock template stream for one calendar year.
- **License key** tied to the customer's setup, delivered by email after payment confirmation.
- **Detailed usage and installation manual** delivered with every license — step-by-step guide covering endpoint setup, Stratum-layer wiring and pool-software integration.
- **No physical goods, no funds custody, no ongoing subscription.** Access ends automatically after twelve months. Renewal is a fresh purchase — the customer explicitly decides again.

## How the customer connects

1. Customer purchases a one-year license (Stripe for Fiat, BTCPay for Crypto).
2. Customer receives the license key and a documented API endpoint.
3. Customer's Stratum layer authenticates against the PreBlock API using the key.
4. PreBlock ships templates back on request.
5. Standard Stratum V1 flow on the customer's side — no firmware changes, no custom protocol.

Every license ships with a **detailed usage and installation manual** that documents endpoint URLs, key handling, Stratum-layer wiring and the exact integration points against common pool-software stacks. Customers do not need to reverse-engineer anything to hook PreBlock into their existing setup.

## License model

- **One-year subscription only.** After twelve months the license key stops issuing tokens and the API refuses new sessions.
- **No auto-renewal, no rolling debit.** The customer explicitly re-buys if they want another year. This is deliberate — no rolling-subscription trap for the customer, and it keeps PreBlock legally clean as a pure software vendor.
- **No refund of the annual fee** after the license has been activated — clearly stated in the contract.
- **Whitelabel and buyout licenses** on request.

## Compatibility

- Mining Rig Rentals — supported in strict-compat mode.
- NiceHash — supported in strict-compat mode with fixed-difficulty override.
- Direct ASIC connect (Antminer, Whatsminer, Avalon, Bitaxe, LuckyMiner, Nerdminer) — supported.
- Firmware requirements: none.

## What we do not disclose

Our method — how PreBlock actually builds its templates — is proprietary and covered by NDA. External partners see the interfaces, the numbers on `/proof`, and the audit surface. The method itself is not part of this handout.

## Who PreBlock is for

- Small and mid-tier pool operators (100 TH/s to 20 PH/s).
- Farm operators combining owned ASIC capacity with rented top-up hashpower.
- Marketplace resellers of MRR / NiceHash capacity looking for a technical differentiator.

## Who PreBlock is not for

Anyone expecting more sealed blocks per PH/s than a Foundry customer of the same size. PreBlock does not violate `time = (difficulty · 2³²) / hashrate`. Our method gives small and mid-tier operators the structural tool to participate in the game with materially less hashrate than the incumbents — nothing more, nothing less. Hashrate deficits cannot be closed by software; they can only be closed by more hashrate.

## Contact

- Sales: sales@preblock.io
- LinkedIn (Company): https://www.linkedin.com/company/preblock/
- LinkedIn (Founder): https://www.linkedin.com/in/joachim-richter-steidl-2a191a3a0/
- X: https://x.com/PreBlockHQ
- Live proof: https://live.preblock.io

---

_This document is a public integration sheet. PreBlock is a software vendor selling one-year API licenses. It is neither a mining pool nor a payment service and does not custody customer funds. Method, internals and scoring math are covered by NDA._

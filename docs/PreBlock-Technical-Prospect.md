# PreBlock — Integration Sheet

_Version 1.2 · Februar 2026 · Public handout_

---

## What PreBlock is

PreBlock is a **software vendor**, not a mining pool. We ship block templates to licensed customers over an API.

Large pools build their templates the same way everyone else does. **PreBlock uses a different method.** For small and mid-tier operators our method is the optimum way to be part of the game at all — where classic fee-rate sorting structurally no longer suffices. What exactly PreBlock does differently is our core IP and only disclosed under NDA. What is measurable and public are the results (see below).

Customers keep their own hashrate, their own pool relationship and their own coinbase payouts. **PreBlock never holds, receives or forwards customer funds.** No pool operation, no custody, no payment processing — no banking-license attack surface.

## Signature numbers (24 h rolling, Feb 2026)

- **82.17 %** Hit Rate over 129 audited blocks.
- **≈ 90 %** average Template Precision on the same window.
- **≈ 97 %** Chain-Rhythm Confidence from three independent live signals.

Live read-only feed: `https://live.preblock.io/proof` (NDA basic-auth, credentials on request).

## What a customer buys

- **Time-boxed API access** to the PreBlock template stream for one calendar year.
- **License key** tied to the customer's setup, delivered by e-mail after payment confirmation.
- **Detailed usage and installation manual** delivered with every license — step-by-step guide covering endpoint setup, Stratum-layer wiring and pool-software integration.
- **No physical goods, no funds custody, no ongoing subscription.** Access ends automatically after twelve months. Renewal is a fresh purchase — the customer has to decide again.

## How the customer connects

1. Customer purchases a one-year license (Stripe for Fiat, BTCPay for Crypto).
2. Customer receives the license key + a documented API endpoint.
3. Customer's Stratum layer authenticates against the PreBlock API using the key.
4. PreBlock ships templates back on request.
5. Standard Stratum V1 flow on the customer's side — no firmware changes, no custom protocol.

Every license ships with a **detailed usage and installation manual** that documents endpoint URLs, key handling, Stratum-layer wiring and the exact integration points against common pool-software stacks. Customers do not need to reverse-engineer anything to hook PreBlock into their existing setup.

## License model

- **One-year subscription only.** After twelve months the license key stops issuing tokens and the API refuses new sessions.
- **No auto-renewal, no rolling debit.** The customer explicitly re-buys if they want another year.
- **No refund of the annual fee** after the license has been activated — clearly stated in the contract to avoid the „Dauerabo-Falle".
- **Whitelabel and buyout licenses** on request.

The reason for the one-year cap is deliberate: it keeps PreBlock legally clean as a pure software vendor and it removes any implicit long-term financial obligation on both sides.

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

- Anyone expecting more sealed blocks per PH/s than a Foundry customer of the same size. PreBlock does not violate `time = (difficulty · 2³²) / hashrate`. Our method gives small and mid-tier operators the structural tool to participate in the game with materially less hashrate than the incumbents — nothing more, nothing less. Hashrate deficits cannot be closed by software; they can only be closed by more hashrate.

## Contact

- Sales: sales@preblock.io
- LinkedIn (Company): https://www.linkedin.com/company/preblock/
- LinkedIn (Founder): https://www.linkedin.com/in/joachim-richter-steidl-2a191a3a0/
- X: https://x.com/PreBlockHQ
- Live proof (NDA): https://live.preblock.io/proof

---

_This document is a public integration sheet. PreBlock is a software vendor selling one-year API licenses. It is neither a mining pool nor a payment service and does not custody customer funds. Method, internals and scoring math are covered by NDA._

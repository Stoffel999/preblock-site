# PreBlock — Live Stress-Test Campaign

_Master copy · used verbatim on BTCPay Crowdfunding App and Geyser.fund._

---

## Headline

**Stress-testing PreBlock under 200 PH of real rental hashrate — Build in Public**

## Sub-headline

We are raising **0.09 BTC (~€9,000)** to run a 12-hour live stress-test with 200 PH of rented hashpower against our block-template engine. No VCs. No token pre-sale. Pure independent development.

## The story

PreBlock is a block-template layer for Bitcoin miners. Instead of sorting every block by fee-rate and packing it broadly the way large pools do, we produce templates that focus on a materially narrower slice of the block candidates for each expected block. When a customer hits a nonce, the sealed block contains — with high probability — the transactions that actually belong there for the next chain tip, instead of a generic fee-optimised set. The result is measurable (82.17 % Hit Rate, ~90 % Template Precision on our reference benchmark); the method behind it is our core IP and stays under NDA.

Our benchmark from 2026-08-21 09:30 CEST, measured after 16 hours undisturbed run, shows an **82.17 % Hit Rate over 129 audited blocks**, roughly **90 % Template Precision** and a **~97 % Chain-Rhythm Confidence** signal from three independent live inputs. Live values roll hourly on our public /proof feed.

What we have not done yet is push the engine under real rental-hashpower load. Simulated telemetry can only tell us so much. We need to point 200 PH of Mining Rig Rentals and Braiins Hosting traffic at our Stratum endpoint for a solid 12 hours, watch how the template dispatch, the slice matching and the Vardiff auto-adjustment hold up, and document the entire run.

## What the money buys

Every satoshi goes directly into two accounts that are already funded and ready to deploy:

- **~0.007 BTC** already pre-staked by the founder (0.006 BTC at Mining Rig Rentals, 0.001 BTC at Braiins Hosting) — deployment-ready on Day 1.
- **0.003 BTC** additional founder commitment landing Wednesday.
- **~0.08 BTC** funded by this campaign — MRR limit-orders and Braiins Hosting rental fees for the 200 PH × 12 h test window.

That gives us roughly **2.4 % probability of finding an actual block** during the window (200/600,000 network share × 72 blocks). A found block is a bonus, not a promise. The measurable output regardless of block-find is a full hour-by-hour case study of PreBlock under real rental traffic — Hit Rate, Template Precision and Chain-Rhythm Confidence with a documented chain-tip anchor at each snapshot.

## Two ways to back the test

**Track A — Cash (BTC or Fiat).** Direct BTCPay Server for Bitcoin, Stripe for card and SEPA. Non-custodial gateway, funds land straight in the operations account and get spent on rental invoices only. No middleman.

**Track B — Hashrate.** If you run a small pool or a home fleet and have spare cycles, point some of your rigs at our Stratum endpoint during the test window. Any worker name starting with `preblock` triggers the hotspot slice automatically. In exchange we credit you (or anonymously if you prefer) in the case study and hand you a free 12-month Basic Node license (worth €490) after the test wraps.

## Transparency

We will publish a live case study during and after the test at **preblock.io/case-study**. Every hour of the test window generates an automated snapshot of the /proof dashboard, tagged with the current chain-tip height, saved into the repository, and rolled up into a single timeline at the end. Nothing simulated, nothing edited. What you see is what the engine produced.

## Who we are

Independent Bitcoin infrastructure builders operating from Bremerhaven, Germany. Registered business entity (Impressum on the marketing site). Not a mining pool, not a payment service, no custodial holdings. PreBlock is sold as annual API licenses — no rolling subscription, no auto-renewal, the key expires after 12 months and the customer explicitly re-buys if they want another year. That is deliberate, it keeps us legally clean as a pure software vendor and it removes any subscription-trap for the customer.

## Timeline

- **Now → campaign live** — cash + hashrate pledges collected.
- **~1 week after 100 % funded** — 200 PH × 12 h test window announced 48 h in advance so hashrate donors can prepare.
- **Test day** — live stream of the /proof dashboard, hourly snapshots archived.
- **~72 h after test** — full public case study on preblock.io/case-study, plus a summary post on X, Reddit and Nostr.

## Contact

- Live dashboard (NDA, for prospects): **live.preblock.io**
- Public demo: **preblock.io**
- Email: **sales@preblock.io**
- Nostr: **[npub to be added]**
- X: **@PreBlockHQ**

_This is community-funded independent development. No VCs, no token pre-sale, no promises we cannot document on-chain._

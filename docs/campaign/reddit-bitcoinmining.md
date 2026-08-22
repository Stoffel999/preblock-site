# Reddit — r/BitcoinMining launch post

_Post title and body. Aim for weekday 08:00 US Pacific for peak activity._

---

## Title

**Building in Public: Stress-testing our block-template engine under 200 PH of rental hashpower — case study, no VCs, no token**

## Body

Hey miners,

I run PreBlock.io, an independent block-template engine for small and mid-tier operators (100 TH/s to 20 PH/s). I want to share what we are doing next week and ask for two kinds of help.

**What PreBlock does, in one paragraph.** Large pools build templates the same way everyone else does — sort by fee-rate, pack the block, ship. We use a different method that gives sub-scale operators a structural way to stay competitive where fee-rate sorting alone no longer produces an edge. What exactly we do differently is proprietary and stays under NDA. The numbers we produce are open — read them on our public /proof feed. Our documented benchmark from 2026-08-21 09:30 CEST after 16h undisturbed run: 82.17 % Hit Rate over 129 audited blocks, roughly 90 % Template Precision, ~97 % Chain-Rhythm Confidence.

**Why the stress test matters.** Everything so far ran against our own gear plus simulated dispatch load. Before we open the engine to paying customers we want a documented run under real rental hashpower — Mining Rig Rentals and Braiins Hosting — for a solid 12 hours at 200 PH. Cost is about 0.09 BTC (€9k). I have already pre-staked 0.006 BTC at MRR and 0.001 BTC at Braiins ready to deploy, plus 0.003 BTC landing this Wednesday. The rest we are trying to raise from the community.

**Two ways to help, if you feel like it.**

- **Cash pledges** via BTCPay Server (Bitcoin, non-custodial) or Stripe (fiat) at preblock.io/crowdfund.
- **Hashrate pledges** — if you have spare cycles during the test window, point some of your rigs at our Stratum endpoint with any worker name starting with `preblock`. That triggers the hotspot slice automatically. In return you get credit (or anonymous mention) in the case study plus a free 12-month Basic Node license (€490 value). Test window announced 48h in advance so you can plan.

**What you get regardless of whether we hit the goal.** A public hourly-snapshot case study of the entire 12h test window, each snapshot chain-tip anchored, published on preblock.io/case-study. Nothing edited, nothing smoothed. What the engine produced under load is what you will read.

**Block-find odds during the window.** 200/600,000 network share × 72 blocks = roughly 2.4 %. Bonus if it happens, not a promise. The case study is the deliverable.

**Legal positioning.** We are a registered German business (Impressum on the site). We are not a mining pool, not a payment service, we never hold customer funds. PreBlock is sold as annual API licenses — key expires after 12 months, no auto-renewal, customer re-buys if they want another year. Deliberate — keeps us out of banking-license territory and removes any subscription-trap.

Happy to answer technical questions in the thread. Method itself is under NDA but everything about interfaces, integration, hit-rate math and business model is fair game.

Live dashboard for prospects (NDA basic-auth): live.preblock.io
Public campaign and case-study hub: preblock.io/crowdfund

Thanks for reading.

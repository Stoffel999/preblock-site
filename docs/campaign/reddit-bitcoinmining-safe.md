# Reddit — r/BitcoinMining Variante (rules-safe)

> ⚠ **RETIRED seit 25.08.2026.** Der Sub hat den Owner nach dem Modmail
> permanent gemuted. Nicht mehr posten — auch nicht mit anderem Account.
> Datei bleibt als historische Referenz erhalten.

_Alternate zur reddit-bitcoinmining.md — entschärft für Rule 2B2 (No begging).
Cash-Aufforderung ist entfernt. Fokus liegt komplett auf dem technischen
Stress-Test und der Hashrate-Anfrage. Wer den Crowdfund unterstützen will
findet ihn über preblock.io ohnehin._

_Sprach-Directive (Owner, 2026-08-23): niemals "hotspot", "slice",
"grid", "block lifecycle stages", Modell-Provider oder Sphere-Interna
in öffentlichem Material. Immer "our method / process / ranking signal /
fee-arbitrage engine". Zahlen sind frei, Methodik nur unter NDA._

**Flair-Empfehlung:** Mining Pool
**Bild-Empfehlung:** ein `/proof`-Feed-Screenshot mit Hit-Rate,
Coverage und Precision-Factor auf einer auditierten Blockhöhe. Kein
Grid, keine Slice-Ansicht, keine Admin-UI. Nur die drei Zahlen.

---

## Title

**Looking for hashrate donors for a documented 200 PH × 12 h stress-test of an independent block-template engine — full case study published after**

## Body

Hey miners,

I run PreBlock, an independent block-template engine for small and mid-tier operators (100 TH/s to 20 PH/s). Not a pool. We produce templates, we do not seal blocks — sealing happens on whichever operator points hashrate at the endpoint. Next month we want to run a documented stress-test under real rental hashpower and I am looking for two things from this community: technical feedback and a handful of hashrate donors.

**What PreBlock does, one paragraph.** Large pools build templates the same way everyone else does — sort by fee-rate, pack the block, ship. We use a different method that gives sub-scale operators a structural way to stay competitive where fee-rate sorting alone no longer produces an edge. What exactly we do differently is proprietary and stays under NDA. The numbers we produce are open — read them on our public /proof feed. Documented benchmark across 100 consecutive audited real-mainnet blocks (Sphere Node 1, August 2026): **93 % Hit Rate**, average mempool coverage 5.83 %, **precision factor 15.96×** vs. a uniformly-random dispatcher, **binomial p-value < 10⁻¹⁵**. In plain english: statistically indistinguishable from certainty, not luck.

**How Hit Rate is measured, because "93 %" only means something if the audit method is public.** For every block that seals on mainnet we check whether our +1 template (built BEFORE that block existed) contained the tx that turned out to be the actual winner_tx of the sealed block. Winner_tx = highest fee-rate normal tx (non-coinbase). Match = pass, no match = miss. Every audited block is stored with its chain-tip height and the exact tx list we predicted. Anyone with a Bitcoin node can re-run the check. Precision factor is Hit Rate divided by Coverage — a factor of 1.0 means our list is random noise, our observed 15.96× means we are picking real signal, not lottery balls.

**What the test is.** 200 PH pointed at our Stratum endpoint for 12 solid hours through MRR and Braiins Hosting. Everything so far ran against our own gear plus simulated dispatch load. Before we open the engine to paying customers we want a documented run under real rental hashpower. Test window announced 48h in advance.

**Where you come in, if you feel like it.** If you have spare cycles during the test window, point some of your rigs at our Stratum endpoint with any worker name starting with `preblock`. Our template distribution recognises the prefix automatically and routes the fitted template your way. In return you get credit (or anonymous mention if preferred) in the case study plus a free 12-month Basic Node license (€490 value). No obligation, no lock-in, no data leaves your fleet.

**What everyone gets, whether they contribute hashrate or not.** A public hourly-snapshot case study of the entire 12h test window, each snapshot chain-tip anchored, published on preblock.io/case-study. Nothing edited, nothing smoothed. What the engine produced under load is what you will read. Block-find odds during the window are roughly 2.4 % (200 PH ÷ current network hashrate × 72 blocks). Bonus if it happens, not a promise.

**Business context in case someone asks.** German registered business (Impressum on the site), not a mining pool, not a payment service, no custodial holdings at any point. PreBlock is sold as annual API licenses — key expires after 12 months, no auto-renewal, customer explicitly re-buys if they want another year. Deliberate — keeps us clean as a pure software vendor and removes any subscription-trap for the customer.

Happy to answer technical questions on interfaces, integration, Hit-Rate math, precision-factor methodology and business model in the thread. The method itself stays under NDA.

Live dashboard for prospects (NDA basic-auth): live.preblock.io
Public /proof feed and hashrate-pledge form: preblock.io

Thanks for reading.

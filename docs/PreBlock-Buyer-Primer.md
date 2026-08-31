# PreBlock for Business Buyers

_A two-page primer for a commercial buyer (accountant, CFO, IT-admin)
who has never touched Bitcoin mining internals._

---

## What we sell in one sentence

PreBlock is **software** that a small or mid-tier Bitcoin miner
installs next to their existing pool connection to squeeze more value
out of every second of hashrate they already pay for. We are not a
mining pool, we do not hold customer funds, we do not resell
electricity, and we do not compete with the customer's ASICs.

## The problem PreBlock solves

Every ten minutes on average, the Bitcoin network selects one miner
worldwide to seal the next block. That miner collects (a) a fixed
"subsidy" reward (currently 3.125 BTC) plus (b) the transaction fees
of the transactions inside the block. Whether YOU are that miner is a
statistical function of your hashrate divided by the world hashrate.
A 10 PH/s rental in a 12-hour window has roughly 0.08 % probability
of sealing a block. So for anyone below ~100 PH, direct block-finding
is a losing lottery.

What PreBlock optimises is the **content** of the block: given that
you occasionally do seal a block, we make sure the transactions inside
it are the highest-value transactions the network was going to
prioritise anyway. This lifts the fee revenue per sealed block, and
in the current live measurement PreBlock's template precision is
around 90 % — 90 out of every 100 transactions we ship to a customer's
ASIC actually end up in the sealed block, versus the "everything sorted
by fee-rate" approach that most competing pools ship.

## Who benefits, who does not

The technology is designed for and only pays off for:

- Small pool operators running 100 TH/s to 20 PH/s fleets (Bitaxen,
  LuckyMiner, Nerdminer, hobby farms).
- Farm operators combining their own capacity with rented top-up
  hashpower from Mining Rig Rentals, NiceHash, Braiins Hosting.
- Marketplace resellers of hashpower who want a technical
  differentiator beyond selling raw fee-rate templates.

The technology does **not** help:

- Foundry, Antpool, ViaBTC, F2Pool. They already build custom
  templates and have hashrate at a scale where PreBlock's method
  produces no measurable delta.
- Anyone hoping to find more blocks than their hashrate share
  statistically allows. PreBlock cannot close a hashrate deficit. It
  can only make the blocks you DO find worth more.

## The commercial model

- Software license (annual, non-recurring). €4,900 to €38,000 per
  year depending on the tier and the miner's committed hashrate.
- Optional consulting-setup for on-prem installation (fixed price).
- White-label licensing for marketplace operators (per-agreement).
- Full source-code buyout on request (from €380,000 net).

No custody, no payment processing, no auto-renewal. The license key
expires after twelve months and the customer explicitly re-buys if
they want another year. This design keeps us a pure software vendor
(§ 611 BGB) and removes the "subscription trap" concern for the
buyer's finance department.

## Advantages (what the buyer takes home)

- **Measurable KPI**: Hit-Rate and Template-Precision are reported per
  block on a live dashboard, verifiable against on-chain reality via
  any block explorer. Not a marketing number — a per-block audit.
- **No pool switch required**: the customer keeps their existing pool
  agreement. PreBlock sits BETWEEN the customer's Stratum endpoint
  and their fleet, transparent to the pool.
- **No custody**: block rewards flow directly to the customer's own
  coinbase address. We never touch coin. Reduces the buyer's
  compliance perimeter (no KYT/KYC obligations toward us).
- **Deterministic cost**: a fixed annual license fee. No revenue
  share on subsidy blocks (Fix tier), or fee-only share (Share tier).
- **Runs on-prem or cloud**: three-node setup, one head node with
  8-16 GB RAM plus two GPU workers. Total infra bill under
  €2,000/month at retail cloud prices, materially less on-prem.

## Disadvantages / honest constraints

- **Requires stable pool connection** on the customer side. If the
  customer's upstream pool drops, PreBlock cannot substitute for it —
  we do not accept nonces, we only re-slice templates.
- **Hashrate below 100 TH/s (single Bitaxe)**: the statistical noise
  in Hit-Rate measurements is high enough that the customer will not
  see a stable delta inside a 30-day trial. Trial windows should be
  90 days or more for hobby-scale customers.
- **Not compatible with pools that force their own Stratum template**
  (e.g. Foundry-Pool for institutional customers). Only compatible
  with pools that let the miner's Stratum-V1/V2 stack build the
  template locally (OCEAN, Braiins Public, small pools, self-hosted
  solo).
- **Latency-sensitive**: the customer's Stratum endpoint should be
  under 40 ms round-trip to the PreBlock head node. Cross-continent
  latency erodes the time-to-work advantage.
- **Depends on Bitcoin Core RPC** on the customer's side. Full node
  required, pruned nodes not supported.

## The IT-admin perspective (deployment)

- Three Linux servers (head + two GPU workers). Owner-preferred base:
  Debian 12 on the head, RHEL/Rocky 9 on the AI-worker.
- Systemd-managed services (`preblock-backend`,
  `preblock-stratum`, `preblock-mempool-streamer`,
  `preblock-block-auditor`, `preblock-state-manager`).
- MongoDB 6+ for persistence, Redis 7+ for hot-path pub/sub.
- No inbound firewall changes beyond the customer's existing Stratum
  port (3333/4334/8888 depending on pool). PreBlock does not open
  the head node to the internet.
- Optional WireGuard tunnel for owner-side administration (documented,
  optional).

## The accountant perspective (money)

- Software license = booking category "Software / IT-Betriebsmittel".
  Depreciable over 3 years per AfA-Tabelle "Software" (§ 7 EStG).
- No consumption or per-block fees. Predictable P&L.
- German seller (Bremerhaven, § 5 TMG-compliant Impressum on the
  marketing site). VAT depends on customer domicile: 19 % DE-B2C,
  0 % EU-B2B under reverse-charge (§ 13b UStG), 0 % export outside
  EU under § 6 UStG. Handled automatically in the invoice generator.
- Payment options: SEPA transfer, Bitcoin (BTCPay Server, non-custodial),
  Stripe card / SEPA for smaller tiers.

## What the buyer commits to

- One year of software use.
- Attribution in an anonymised case study is optional (default off).
- Compliance with the standard EULA — no reverse-engineering, no
  redistribution, no operation as a mining pool for third parties
  without a white-label agreement.

## What the buyer does NOT commit to

- No hashrate lock-in.
- No coinbase-address change.
- No revenue share to PreBlock on the Fix tier.
- No auto-renewal — the key simply expires and stops working.

## Reference material

- Live dashboard (NDA-gated): https://live.preblock.io
- Public /proof feed: https://preblock.io/proof
- Crowdfund campaign (public): https://preblock.io/crowdfund
- Sales inbox: sales@preblock.io
- Company LinkedIn: https://www.linkedin.com/company/preblock/

---

_This document is a public handout for commercial evaluation.
Method, internals and scoring math are covered by NDA and only
disclosed after both parties have signed the mutual NDA available
on the sales.preblock.io/nda page._

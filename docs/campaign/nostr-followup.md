# Nostr — Follow-Up Note (2026-08-23+)

_24-48 hours after the initial `nostr-launch.md` note. Refreshes the
public numbers to the current Sphere audit window (100 consecutive
real mainnet blocks, August 2026) and cross-references the Reddit
discussion opened at r/BitcoinMining on 2026-08-23._

_Sprach-Directive (Owner): niemals "hotspot", "slice", "grid",
Modell-Provider oder Sphere-Interna. Immer "our method / process /
ranking signal". Zahlen frei, Methodik NDA. UI und Post-Text auf
Englisch, restlicher Marketing-Kontext auf Deutsch._

**When to publish:** 24-48h after the initial launch note, ideally
between 19:00 and 22:00 UTC when Bitcoin Nostr traffic peaks.
**Image:** attach the same `proof-bars.png` used on Reddit if the
client supports images. Otherwise plain text is fine.

---

## Note body (paste-ready)

```
PreBlock Update from Sphere Node 1, August audit window closed.

100 consecutive real mainnet blocks:
93% Hit Rate · 15.96x precision vs. random · p-value < 10⁻¹⁵

Reddit discussion open at r/BitcoinMining — link in profile.
Case study for block 963719 coming this week.

#bitcoin #mining #buildinpublic ⚡
```

---

## Optional replies for common Nostr questions

**"How is Hit Rate measured?"**
```
For every sealed mainnet block we check whether our +1 template
(built BEFORE that block existed) contained the tx that turned out
to be the actual winner_tx (highest-fee non-coinbase). Match = pass.
Every audited block stored with chain-tip height + predicted tx
list. Anyone with a Bitcoin node can re-run.
```

**"Why not just sort by fee-rate like everyone else?"**
```
Fee-rate sorting has been the industry default for a decade. It
captures the median-fee case fine but misses the specific txs whose
composition (dormancy, RBF signal, historical prior) makes them
sealing-critical. Our process factors those in. Method under NDA;
numbers open for re-audit.
```

**"What about the 7% you miss?"**
```
Late-arrival txs in the final seconds before block seal, private
mempool injections from top pools, and RBF replacements after our
template snapshot. Structural not fixable to 100%. 93% is the
observed ceiling for open-mempool signal on mainnet.
```

---

## Combined contest note (paste-ready)

_Marries the audit numbers with the Emergent x Kevin O'Leary Builder
Fest contest link in a single Nostr note. Post between 19:00 and
22:00 UTC for peak Bitcoin-Nostr traffic._

```
PreBlock update from Sphere Node 1 — August audit window closed.

100 consecutive real mainnet blocks:
93% Hit Rate · 15.96x precision vs. random · p-value < 10⁻¹⁵

Reddit thread live at r/BitcoinMining, case study for block 963719
drops this week.

Also: PreBlock is entered in the Emergent x Kevin O'Leary Builder Fest.
If open-mempool proofs on real Bitcoin blocks are your thing, a vote
would mean a lot:
https://app.emergent.sh/showcase/builderfest-kevin/43317bff-f6ff-4eef-96a0-aa26a8ca2d57?ref=joac364242&utm_source=share

Built in public, audited on chain, numbers open for re-audit.

#bitcoin #mining #buildinpublic ⚡
```

### Shorter variant (character-tight clients)

```
PreBlock, Sphere Node 1 — 100 mainnet blocks audited.
93% Hit Rate · 15.96x vs. random · p < 10⁻¹⁵.

Reddit thread open at r/BitcoinMining · case study #963719 this week.

Also in the Emergent x Kevin O'Leary Builder Fest — vote link:
https://app.emergent.sh/showcase/builderfest-kevin/43317bff-f6ff-4eef-96a0-aa26a8ca2d57?ref=joac364242&utm_source=share

#bitcoin #mining #buildinpublic ⚡
```

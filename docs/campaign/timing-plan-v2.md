# PreBlock Crowdfund — Content-Plan v2 (Rework 2026-08-25)

Kampagnen-Fenster ursprünglich: **22.08.2026 → 19.09.2026** (28 Tage).
Bereits gelaufen (Woche 1): Nostr-Launch, X-Launch, Nostr-Follow-up.
Reddit r/BitcoinMining ist **endgültig raus** (permanent mute durch die Mods
am 25.08. um 12:11 CEST nach dem Modmail — dieser Sub ist verloren, nicht
mehr in den Plan aufnehmen).

Neue Zahlen die durchgängig gelten (Basis: nightly Audit vom 24.08.,
100 aufeinanderfolgende Mainnet-Blöcke):

- **93 Prozent Hit-Rate**
- **5.83 Prozent** durchschnittliche Mempool-Coverage
- **Precision-Faktor 15.96×** gegenüber einem uniform-random Dispatcher
- **Binomial p-value kleiner als 10 hoch minus 15** (statistisch nicht zufällig)

Alle alten Post-Entwürfe mit 82.17 Prozent Hit-Rate sind veraltet und dürfen
so nicht mehr rausgehen. Die schon veröffentlichten Nostr / X Launch-Posts
bleiben stehen weil sie historisch sind und die Zahlen zum Zeitpunkt korrekt
waren. Alle neuen Posts bekommen die aktuellen Zahlen.

---

## PreBlock Delivery Promise (Kunden-Formulierung, ab 26.08.2026)

Diese Formulierung ist die offizielle Kunden-Zusage und wird ab sofort
1:1 in Sales-Gesprächen, Pitchdecks und in jeder Case Study verwendet:

> **PreBlock stellt sicher, dass die von uns bevorzugten Winner-Transaktionen
> innerhalb von 4 Minuten fertig berechnet, in das Block-Template integriert
> und an alle angeschlossenen Miner ausgeliefert werden. Innerhalb der
> verbleibenden 4 bis 6 Minuten eines Bitcoin-Block-Intervalls erweitern
> wir das Template opportunistisch um weitere Kandidaten-Transaktionen,
> sofern die verfügbare GPU-Kapazität dies erlaubt, ohne die 4-Minuten-
> Garantie für den Kern zu gefährden.**

Die Formulierung tritt an die Stelle jeder Erwähnung von "Hotspot", "Slice",
"Grid" oder "Radius" in Kunden-Kommunikation. Intern (Repo, Ticket-Sprache,
Dev-Docs) bleiben die technischen Begriffe unverändert.

Der Kern-Vorteil den diese Zusage transportiert ist:

- **Zeit-Garantie:** 4 Minuten für den Kern, unabhängig von Netzwerk-Last
  oder Mempool-Größe. Damit sind wir schneller als ein Standard-Pool der
  seine Templates im Schnitt alle 4 bis 6 Minuten rotiert.
- **Opportunistische Erweiterung:** Was an GPU-Kapazität nach dem Kern
  übrig ist, wird in Best-Effort-Manier für breitere Kandidaten-Suche
  eingesetzt. Kein Kompromiss zu Lasten der Garantie.
- **Skalierbar:** Kunden mit mehr GPU-Ressourcen bekommen automatisch
  größere Kern- und Erweiterungs-Regionen, ohne dass ein neuer Vertrag
  oder Konfigurations-Ping-Pong nötig wird.

Die technische Umsetzung heißt intern **Phase D Staged Slice Compute
Budget** und wird nach dem UI-Umbau als nächster Sprint gebaut. Bis dahin
darf die Zusage in Marketing-Materialien mit dem Disclaimer "in Aktivierung
für Q4 2026" verwendet werden.

---

## Ton-Regeln pro Kanal (unverändert)

- **Nostr**: kurz, ehrlich, technisch. 400 bis 800 Zeichen. Hashtags sparsam.
  Immer mindestens ein Screenshot oder Link.
- **X (@PreBlockHQ)**: erklärend, threadfähig. Threads erlaubt und
  erwünscht wenn eine Message länger als 280 Zeichen wird.
- **Bitcointalk (Announcements + Mining)**: langform, faktenbasiert,
  Impressum und Kontaktdaten sichtbar. Für ältere Bitcoiner unterhalb 40
  bis 60 Jahre die zweite Heimat neben Nostr.
- **Delving Bitcoin**: technisch-first, kein Marketing-Ton. Nur ein Beitrag
  während der gesamten Kampagne, dafür mit Diskussions-Follow-up erwarten.
- **Reddit (r/BitcoinBeginners, r/MiningRigs, r/CryptoTechnology,
  r/BitcoinDiscussion, r/BitcoinDE)**: langform, faktenbasiert.
  Sub-spezifisch adaptieren, nicht blind cross-posten.
- **LinkedIn**: B2B-Ton, echte Firmen-Ansprache, sparsam mit
  Hashtags, Fokus auf Operator-Case (ray_york als Anker sobald bestätigt).
- **Hacker News**: nur bei echtem Meilenstein (erster gesealter Block
  mit dokumentierter Winner-tx Vorhersage), maximal einmal pro
  4-6 Wochen.

---

## Woche 1 (rückblickend, 22.08. bis 28.08.)

Erledigt, keine Aktion mehr nötig:

- **P01 · Nostr Launch** — gepostet 22.08. abends.
- **P02 · X Launch Thread** — noch offen falls nicht gepostet. Wenn nicht
  gepostet: `x-launch.md` mit den 82.17 Prozent Zahlen ist überholt.
  Verwende stattdessen die aktualisierte Version unten (P02b) oder skip
  ganz, weil Woche 1 fast durch ist.
- **P03a · Reddit r/BitcoinMining** — **null and void**, permanent muted.
- **P03b · Nostr Follow-up** — gepostet 24.08. um 21:38 CEST mit dem
  Kombi-Post (93 Prozent + Builder Fest Link).

### P02b · X · Launch Thread aktualisiert (7 Tweets, falls du noch posten willst)

```
1/7
We are running a live stress-test on PreBlock.io.

200 PH of rented hashpower pointed at our block-template engine
for 12 solid hours. Cost: 0.09 BTC (~€9k). Founder pre-staked
0.007 BTC at MRR + Braiins Hosting.

Build in public. No VCs. No token. 🧵

2/7
PreBlock builds templates differently. Not better sorted, not
more fees — more precise on WHAT the next block actually
contains. Public numbers, NDA method.

Category: block-template layer for 100 TH/s to 20 PH/s miners.

3/7
Nightly benchmark over 100 consecutive audited mainnet blocks:

- 93 % Hit Rate
- 5.83 % avg mempool coverage
- Precision factor 15.96× vs uniform-random dispatcher
- Binomial p-value < 10⁻¹⁵

Not luck. Signal.

4/7
"Hit Rate" is a specific measurement. For every block that seals
on mainnet we check whether our +1 template (built BEFORE the
block existed) contained the winner_tx (highest fee-rate normal
tx of the sealed block). Match = pass, no match = miss.

Every audit is chain-tip anchored. Anyone with a Bitcoin node
can replay the check.

5/7
Simulated telemetry only tells you so much. We need real rental
hashpower hitting our Stratum endpoint to see how dispatch,
slice matching and Vardiff auto-adjust hold up under load.

That is what the 0.09 BTC pays for.

6/7
Two ways to back the test.

Cash → BTCPay for BTC, Stripe for fiat. Non-custodial.
Hashrate → point rigs at our Stratum with a `preblock*` worker
name. Credit + free 12-month Basic Node license (€490 value).

7/7
Live dashboard (NDA basic-auth): live.preblock.io
Public campaign: https://crowdfunding.preblock.io/

Every satoshi and every gigahash accounted for on-chain and
in-repo.

#BuildInPublic #Bitcoin #Mining
```

---

## Woche 2 (heute laufend, 25.08. bis 04.09.)

Ziel: Vertrauensaufbau über Substanz, plus die neuen Kanäle bespielen die
wir noch nicht angerührt haben.

### Gruppe A · Bitcointalk Announcement (26.08. oder 27.08., früh morgens CEST)

Bitcointalk Threads altern gut, du profitierst monatelang von Backlinks
und der Diskussion. Post im **Marketplace → Services** Board plus einen
kürzeren Thread in **Mining → Pools**.

#### P04 · Bitcointalk Marketplace/Services — vollständiger OP-Text

```
Subject:
  [ANN] PreBlock — independent block-template engine, community-funded
  200 PH×12h stress test

Body:

Hi Bitcointalk,

I'm running PreBlock, an independent block-template engine for small
and mid-tier miners (100 TH/s to 20 PH/s). Not a pool — we produce
templates, sealing is done by whichever operator points hashrate at
our Stratum endpoint. Deliberately kept as a pure software vendor
(annual license, no custodial holdings, German-registered business
with a proper Impressum).

Why this thread: we're crowdfunding a documented 200 PH × 12 h stress
test on real rental hashpower via MRR + Braiins Hosting. Target
0.09 BTC (~€9k), founder pre-staked 0.007 BTC. The full case study
publishes on preblock.io/case-study after the run — every hourly
snapshot chain-tip anchored so anyone can re-verify against their
own Bitcoin node.

Numbers so far (nightly audit, 100 consecutive mainnet blocks):

  Hit Rate         93 %
  Coverage         5.83 %
  Precision factor 15.96× vs uniform-random dispatcher
  Binomial p-value < 10^-15

"Hit Rate" definition: for every sealed block, does our +1 template
(built BEFORE that block existed) contain the winner_tx of the
sealed block (highest fee-rate non-coinbase tx)? Match = pass,
no match = miss. Method used to build the template is proprietary
and stays under NDA. The audit method itself is fully public — that's
the only honest way to sell a template engine.

Two things I'd like from the Bitcointalk community:

1) Technical feedback on the audit methodology and the precision-
   factor formula.
2) Hashrate donors: if you have spare cycles during the test window
   (announced 48 h in advance), point some rigs at our Stratum with
   any worker name starting with "preblock" and you get credit
   (or anonymous mention if preferred) in the case study plus a
   free 12-month Basic Node license (€490 value). No lock-in, no
   fleet data leaves your infra.

Live proof feed:   https://preblock.io/proof
Crowdfund:         https://crowdfunding.preblock.io/
Live dashboard:    live.preblock.io (NDA basic-auth for prospects)
Impressum:         https://preblock.io/impressum

Happy to answer questions on interfaces, Hit-Rate math, precision-
factor methodology and business model. The template-building method
itself stays under NDA.

Thanks.
— Stoffel (PreBlock)
```

#### P05 · Bitcointalk Mining/Pools — Kurzverweis (posten 24 h nach P04)

```
Subject:
  Cross-post: PreBlock template-engine stress test — 200 PH × 12 h

Body:

Full write-up in the Services board (link below). Short version for
the miners here:

We build block templates differently — sub-scale miners get a
structural edge on WHAT is in the next block, not on the marketing
side. Nightly audit shows 93 % Hit Rate over 100 consecutive
mainnet blocks with a 15.96× precision factor vs uniform-random
dispatch and p<10⁻¹⁵.

Not a pool. Not a token. German-registered business. Software vendor
only, annual license.

If you have spare rental cycles for the 12 h window (announced 48 h
in advance) point rigs at our Stratum with a "preblock*" worker
name → free 12-month Basic Node license (€490 value) + case-study
credit.

Full thread: [BITCOINTALK_ANN_LINK]
Proof feed:  https://preblock.io/proof
Crowdfund:   https://crowdfunding.preblock.io/
```

### Gruppe B · Delving Bitcoin (28.08., einmalig)

Delving Bitcoin ist der aktuelle Sammelplatz für Bitcoin-Core-Devs und
Mining-Protokoll-Diskussionen. Ein einziger, tief-technischer Beitrag
in der Kategorie **Mining** ist genau die richtige Positionierung.

#### P06 · Delving Bitcoin — Technischer Thread

```
Title:
  Auditing a block-template engine at Hit-Rate 0.93 · precision
  factor 15.96× — methodology writeup and RFC

Body:

I've been running an independent block-template engine (PreBlock)
against Bitcoin mainnet for a few months and want to open the
audit methodology to review before we run a documented 200 PH × 12 h
stress test in September.

The claim, up front: our +1 template contains the winner_tx of the
subsequently sealed block 93 % of the time over 100 consecutive
audited blocks (2026-08-24), with mempool coverage averaging
5.83 % — a precision factor of 15.96× vs a uniform-random dispatcher.
Binomial p-value under this null model comes out at less than
10^-15.

Definitions we work with:

  chain_tip_h                   height at prediction time (we log this per snapshot)
  our_template(chain_tip_h)     the exact tx list our engine emitted at height h
  sealed_block(h+1)             the actual next block that sealed on mainnet
  winner_tx(h+1)                highest-fee-rate normal tx of sealed_block(h+1),
                                excluding coinbase
  hit                           1 if winner_tx(h+1) in our_template(chain_tip_h) else 0
  coverage(h)                   |our_template| / |mempool(h)|
  precision_factor              hit_rate / avg_coverage

Every audited (chain_tip_h, our_template, winner_tx) triple is
persisted with the sealed-block hash so anyone with a Bitcoin node
can replay the check against archived mempool snapshots.

Open questions I'd love this crowd to poke at:

(1) Is "highest-fee-rate normal tx" the right winner_tx definition,
    or should I be looking at highest absolute fee, first-seen order,
    or something else that better represents "the tx a miner would
    have wanted to include the most"?

(2) Precision factor as hit_rate / avg_coverage assumes independence
    between hit and coverage across blocks. In practice both correlate
    with mempool congestion. Anyone with a better estimator handy?

(3) At what block count does the community consider a Hit-Rate claim
    "prove-able" vs still statistical noise? Our 100-block audit gives
    p<10^-15 under a uniform-random null but I'd rather over-audit.

Method used to select the tx (before ranking by fee-rate) is
proprietary and stays under NDA — the audit itself is fully public
and reproducible. Public feed at https://preblock.io/proof.

Case study of the September stress test publishes on
https://preblock.io/case-study straight after the 12 h run.

Happy to hand over CSVs of individual (chain_tip_h, winner_tx,
template_json_hash) rows if anyone wants to spot-check.
```

### Gruppe C · Reddit alternative Subs (Do 28.08. bzw. Fr 29.08. Nachmittag CEST)

Reihenfolge: erst r/BitcoinBeginners (mild, hoher Reach), dann r/MiningRigs
(klein aber Ziel-Community), dann optional r/CryptoTechnology (B2B ohne
den ADHS-Vibe von r/CryptoCurrency). Post-Copy leicht adaptieren, nicht
blind cross-posten.

#### P07 · r/BitcoinBeginners — Fokus auf Verständlichkeit der Math

```
Title:
  Beginner-friendly explainer: how you can verify a mining pool's
  "predicted block content" claim against your own Bitcoin node

Body:

Bit of a longer post. I run PreBlock, an independent block-template
engine for small miners. This is not a promo thread — it's a
walkthrough of a claim I keep having to explain to first-time
prospects, and the r/BitcoinBeginners audience is exactly who
benefits from actually understanding it.

Claim: our +1 template predicts the winner_tx (highest fee-rate
non-coinbase tx) of the subsequently sealed block 93 % of the time.

If you're new to Bitcoin mining you might wonder "how is that even
verifiable, is it not just marketing?"

Here's how you check it yourself.

Step 1: pick a mainnet block, any recent height h+1.

Step 2: pull the sealed block from your node with:
    bitcoin-cli getblock <blockhash> 2
  Find the tx with the highest fee-rate (fee / vsize) — that is
  winner_tx.

Step 3: check our public /proof feed at https://preblock.io/proof
  for the template we emitted at height h (BEFORE h+1 sealed).
  Match against your winner_tx from step 2. Match or no match.

Do that for 100 blocks in a row and count the matches. If we're
lying you'll see it in your own node's output.

Nightly audit gives us 93 out of 100 matches, average template
coverage 5.83 %, precision factor 15.96× (= hit_rate / coverage)
vs a uniform-random tx picker. Under a random null the probability
of hitting 93/100 by chance is less than 10^-15.

Method used to BUILD the template is proprietary. The audit method
itself is public because otherwise the number would be worthless.

We're crowdfunding a documented 200 PH × 12 h stress test in
September at https://crowdfunding.preblock.io/. Every hourly
snapshot during the run is chain-tip anchored so anyone can
replay the check against their own node afterwards.

If you're learning Bitcoin from a mining angle and want to see
what real audit-first proof looks like this might be interesting
to bookmark.
```

#### P08 · r/MiningRigs — Fokus auf Hashrate-Ökonomie

```
Title:
  Hashrate donors wanted for a 200 PH × 12 h documented stress-test
  of an independent block-template engine — 12-month license in
  return, no lock-in

Body:

Small ask, hopefully in the spirit of the sub.

I run PreBlock — independent block-template engine for solo home
farms and mid-tier operators (100 TH/s to 20 PH/s), not a mining
pool. We produce templates, whoever points hashpower at our
Stratum endpoint seals blocks with their own coinbase.

In September we want to run a documented 12 h stress test with
200 PH of real rental hashpower going through MRR and Braiins
Hosting. The full run gets published as an hourly case study on
preblock.io/case-study, each snapshot chain-tip anchored.

Nightly audit numbers (100 consecutive mainnet blocks):
- 93 % Hit Rate
- 5.83 % avg mempool coverage
- 15.96× precision factor vs uniform-random dispatcher

If any of you have spare cycles during the test window (announced
48 h in advance) I'd love to invite you as a hashrate donor.
Point some rigs at our Stratum endpoint with any worker name
starting with `preblock` — our slice-builder recognises the prefix
and routes the fitted template to your rig. In return you get:

- Case study credit (or anonymous mention if preferred)
- Free 12-month Basic Node license (€490 face value)
- No lock-in, no fleet data leaves your infra
- Direct email line to me for questions

Crowdfund + hashrate pledge form: https://crowdfunding.preblock.io/
Public proof feed:                https://preblock.io/proof

Happy to answer technical questions in the thread.
```

### Gruppe D · LinkedIn (nur wenn ray_york bestätigt hat, sonst Woche 3)

Der LinkedIn-Post ist unser B2B-Anker. Warten bis ein externer Operator
öffentlich als Backer genannt werden darf, dann kommt der Beitrag mit
dieser Nennung als sozialer Beweis. Trigger-Bedingung: ray_york antwortet
auf die DM mit einem "OK to feature me" oder ähnlich.

#### P09 · LinkedIn (bei Trigger)

Ich schreibe den vollständigen Text erst wenn ray_york bestätigt hat —
ohne konkreten Case-Anker klingt LinkedIn wie Selbstwerbung, was auf der
Plattform nicht funktioniert.

---

## Woche 3 (05.09. bis 11.09.)

Ziel: Progress-Signal und die Community die Woche 2 abonniert hat mit
Zahlen füttern.

### Gruppe E · Progress-Salve auf Nostr und X (Fr 05.09. Nachmittag)

#### P10 · Nostr · Progress

```
Two weeks into the PreBlock rental crowdfund.

Current: <X %> of 0.09 BTC. <Y> individual backers so far, all
via Nostr zaps, BTCPay or Stripe. No VCs, no token pre-sale, no
custodial holding at any point.

Nightly audit stays north of 93 % Hit Rate over the last 100
mainnet blocks. Precision factor 15.96×. Method stays NDA, numbers
stay open.

Case study clock starts the day we hit target — 12h test window,
full hourly breakdown at preblock.io/case-study.

https://crowdfunding.preblock.io/

Zaps welcome ⚡
```

#### P11 · X · Progress-Tweet mit Screenshot

```
14 days into the PreBlock rental crowdfund.

<X %> of 0.09 BTC target. <Y> individual backers. Nightly audit
still north of 93 % Hit Rate.

No VCs. No token pre-sale. No custodial holding — BTCPay + Stripe
both go straight to the rental invoices.

Progress bar live: https://crowdfunding.preblock.io/
```

### Gruppe F · Case-Study-Teaser (Di 09.09. oder Mi 10.09.)

#### P12 · Nostr · Case-Study-Vorschau

```
Test plan for when we hit target (currently <X %>):

Day 0: crowdfund closes, book MRR + Braiins allocation for the
earliest available 12 h window (typically 48 to 72 h ahead).

Day +2 to +3: 12 h test window runs. All 200 PH point at our
Stratum. /proof dashboard captures automated snapshots every
hour, each tagged with chain-tip height.

Day +5 to +6: full case study publishes on
https://preblock.io/case-study. Hourly Hit Rate, Template
Precision, Chain-Rhythm Confidence, plus a summary of any block
finds (~2.4 % probability across the window).

Nothing simulated. Nothing edited. What the engine produced is
what you will read.
```

---

## Woche 4 (12.09. bis 19.09.) — Final Push

Ziel: Countdown-Rhythmus ohne Panik-Ton. Wenn schon 100 Prozent
erreicht wird der Push in Case-Study-Vorbereitung umgewidmet.

### Gruppe G · T-7 (Fr 12.09.)

#### P13 · Nostr + X gleichzeitig · sehr kurz

```
T-7 on the PreBlock rental crowdfund.

Current: <X %> of 0.09 BTC.

If we close in the next week the test window is booked for the
weekend of <Datum>. Case study publishes the following Wednesday.

https://crowdfunding.preblock.io/
```

### Gruppe H · T-3 Reminder (Di 16.09.)

#### P14 · Nostr + X · Reminder

```
T-3 on the rental crowdfund. <X %> of 0.09 BTC, <Y> backers.

If you meant to zap and forgot: this is the reminder.

https://crowdfunding.preblock.io/
```

### Gruppe I · FAQ / Closing Q&A (Mi 17.09.)

#### P15 · Nostr · FAQ-Post

```
Four weeks running this in public. Four questions I got most often:

1. "Why not run the test on your own gear?"
   Because 20 PH self-owned will never scale to real customer
   traffic patterns. The point is stress-test under REAL rental
   flow, not our own.

2. "What if a block-find during the window actually happens?"
   100 % of the block reward goes into the operations account
   and buys the next test window. Backers get named in the case
   study either way.

3. "Can I still pledge hashrate after the crowdfund closes?"
   Yes, the test-window slot list stays open until 48 h before
   start. Reply here or to sales@preblock.io.

4. "What comes after the case study?"
   First paying customer already lined up (external operator
   pledged ~1 PH/s pre-onboarding). Second and third in discovery.
   If the case-study numbers hold up under load, the pipeline
   handles itself.

Zaps welcome. Case study ships end of September.

https://crowdfunding.preblock.io/
```

### Gruppe J · Kampagne schließt (Fr 19.09.)

#### P16 · Nostr + X · Closing

```
Rental crowdfund closes today. Final: <Final %> of 0.09 BTC target,
<N> individual backers over 28 days.

Test window confirmed for <Datum>. Case study publishes
<Datum + 5>.

To everyone who zapped, streamed, or pointed a worker at us:
thank you. Every sat is traceable in the BTCPay ledger. Case
study will name every backer who allowed public mention.

https://preblock.io/case-study
```

---

## Hacker News (Trigger-Bedingung, kein festes Datum)

Post erst nach dem 12 h Run, wenn wir mindestens eine der drei
Bedingungen erfüllen:

- Ein gesealter Block während des Runs mit vorher publizierter
  Winner-tx-Vorhersage die live matched.
- Vollständige Case-Study öffentlich mit hourly Zahlen.
- Ein bekannter externer Operator öffentlich als Backer, mit Zitat.

#### P17 · Hacker News (Show HN / Ask HN)

```
Title:
  Show HN: PreBlock — block-template engine that predicts the
  winner tx of the next mainnet block at 93 % over 100 audited blocks

Body:
  Independent, non-pool template engine for Bitcoin miners. We
  publish the tx list we predict for h+1 before h+1 seals, then
  every audited block gets compared against the sealed block's
  actual winner_tx (highest fee-rate normal tx). Nightly audit:
  93/100 pass, 5.83 % avg coverage, precision factor 15.96× vs
  uniform-random dispatcher, binomial p-value <10^-15.

  Method used to build the template is proprietary. Audit is fully
  public and re-runnable against any Bitcoin node.

  Just closed a community-funded 200 PH × 12 h stress test on real
  rental hashpower — [case-study link] has the hour-by-hour
  breakdown.

  Happy to answer technical questions on Hit-Rate math, precision-
  factor methodology, or the coinbase-split business model.

  Live proof feed: https://preblock.io/proof
  Case study:      https://preblock.io/case-study
```

---

## Zusammenfassung — Was liegt wann an

```
Woche 1 (durch)     Nostr Launch ✅ · X Launch (evtl. skip) · Nostr Follow-up ✅
                    Reddit r/BitcoinMining — permanent muted, endgültig raus

Woche 2 (jetzt)     Di 26.08.  Bitcointalk ANN (P04)
                    Mi 27.08.  Bitcointalk Mining crosspost (P05)
                    Do 28.08.  Delving Bitcoin technical writeup (P06)
                    Fr 29.08.  r/BitcoinBeginners (P07)
                    Sa 30.08.  r/MiningRigs (P08)
                    LinkedIn (P09) — nur bei ray_york Bestätigung

Woche 3             Fr 05.09.  Nostr + X Progress-Salve (P10 + P11)
                    Mi 10.09.  Nostr Case-Study-Teaser (P12)

Woche 4             Fr 12.09.  T-7 Countdown (P13)
                    Di 16.09.  T-3 Reminder (P14)
                    Mi 17.09.  FAQ (P15)
                    Fr 19.09.  Closing (P16)

Nach Case Study     HackerNews (P17) — trigger-basiert
```

---

## Merkzettel

- Alle Uhrzeiten CEST. Peak-Slots: Nostr und X 16:00 bis 21:00 CEST,
  Reddit 17:00 bis 19:00 CEST, Bitcointalk 07:00 bis 09:00 CEST
  (US-Ostküste-Frühstück).
- Platzhalter `<X %>`, `<Y backers>` und Datumsangaben immer vor
  Posting-Zeit aktualisieren aus BTCPay Dashboard.
- Reddit-Subs adaptieren, nicht cross-posten. Auto-Filter erkennen
  Duplikate.
- Nichts hinzufügen was nicht auditierbar ist. Ehrlicher Rückstand
  verkauft besser als geschönte Zahlen — das ist die einzige harte
  Regel bei Build-in-Public.
- Reddit r/BitcoinMining ist gesperrt und für die gesamte Kampagne
  raus. Nicht wieder aufmachen, auch nicht mit einem anderen Account.

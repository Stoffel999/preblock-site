# PreBlock Crowdfund — 4-Wochen Timing- und Content-Plan

Kampagnen-Fenster: **22.08.2026 → 19.09.2026** (28 Tage).
Ziel: 0.09 BTC (~9.000 €) für 200 PH × 12 h Rental-Stress-Test.

Struktur des Dokuments: Posts sind durchnummeriert von **P01** bis **P17**. Posts
die zur selben Kernbotschaft gehören aber auf unterschiedlichen Kanälen laufen
sind in derselben **Gruppe** zusammengefasst (Gruppe 1, Gruppe 2, ...). Cross-
Post-Regel: nicht simultan raushauen, sondern gestaffelt über 24 bis 48 Stunden
damit jeder Kanal seine eigene Konversation entwickelt.

Kanal-Ton-Regeln:
- **Nostr**: kurz, ehrlich, technisch, Zaps welcome. 400 bis 800 Zeichen. Hashtags
  sparsam. Immer mindestens ein Screenshot oder Link.
- **X (@PreBlockHQ)**: erklärend, threadfähig, weniger Insider-Jargon. Threads
  sind erlaubt und erwünscht wenn eine Message länger als 280 Zeichen ist.
- **Reddit (r/BitcoinMining, r/Bitcoin)**: langform, faktenbasiert, ohne Marketing-
  Slang. Nur 2 Posts über die gesamte Kampagne — Reddit reagiert allergisch auf
  Repeat-Promotion.

Legende: ✅ = fertig geschrieben und liegt bereits als eigene Datei vor.
📝 = Copy steht inline in diesem Dokument, ready to paste.

---

## Woche 1 — Awareness (22.08. bis 28.08.)

### Gruppe 1: Launch-Salve (22.08.2026, heute)

- **P01 · Nostr · Launch** ✅
  Vollständiger Text in `nostr-launch.md`. Bereits veröffentlicht am 22.08.2026
  über den PreBlock npub, Attachment /proof Dashboard Screenshot.

- **P02 · X · Launch-Thread (7 Tweets)** ✅
  Vollständiger Thread in `x-launch.md`. Als 7-Tweet Thread von @PreBlockHQ
  posten, Tweet 1 mit /proof Dashboard Screenshot als Attachment. Empfohlener
  Zeitpunkt: 16:00 bis 18:00 CEST (US-Ostküste-Frühstück, EU-Feierabend).

### Gruppe 2: Reddit-Anker (24.08. oder 25.08.2026, 2 bis 3 Tage später)

- **P03 · Reddit r/BitcoinMining** ✅ **(rules-safe Variante empfohlen)**
  Zwei Fassungen liegen vor. Die Original-Version in `reddit-bitcoinmining.md`
  enthält eine Cash-Zeile mit Verweis auf preblock.io/crowdfund und triggert
  potenziell Rule 2B2 "No begging" bei den r/BitcoinMining Mods. Die
  entschärfte Version in `reddit-bitcoinmining-safe.md` ist explizit für
  r/BitcoinMining zugeschnitten (Fokus auf Hashrate-Anfrage plus technische
  Diskussion, Cash-Aufforderung entfernt), Original bleibt für r/Bitcoin und
  weniger strenge Subs verfügbar. Empfehlung: die safe-Variante nehmen wenn
  du in r/BitcoinMining postest.

  Empfohlener Zeitpunkt: Montag oder Dienstag 08:00 US Pacific (17:00 CEST)
  für Peak-Aktivität. Auf Kommentare aktiv antworten in den 24 h danach.

### Gruppe 3: "Erste Zaps eingegangen" (26.08. bis 28.08.2026)

- **P04 · Nostr · kurz** 📝
  ```
  First zaps landed on the crowdfund npub — genuinely surprised how fast the
  Nostr community moves compared to fiat rails. Every sat is earmarked for
  MRR / Braiins rental invoices, on-chain traceable.

  Current stack: 0.007 BTC founder pre-stake + <insert current crowdfund BTC>
  from backers. Rental target still 0.09 BTC total. Case study clock starts
  the day we hit it.

  Thank you ⚡ Zaps still welcome ⚡

  preblock.io/crowdfund
  ```

- **P05 · X · Update-Tweet** 📝
  ```
  48h into the PreBlock crowdfund and we crossed <X%> without a single VC pitch
  or token pre-sale.

  This is why Nostr + BTCPay + Stripe together beat "closed private round"
  every time for infra tooling.

  Full stack: preblock.io/crowdfund
  ```

---

## Woche 2 — Proof (29.08. bis 04.09.)

Ziel: Vertrauen durch technische Substanz. Aus "wir bauen was" wird
"wir haben Zahlen die ihr selber verifizieren könnt".

### Gruppe 4: Technischer Deep-Dive (30.08. oder 31.08.)

- **P06 · Nostr · lang** 📝
  ```
  Quick technical note on how we measure Hit Rate — because "82.17 % over 129
  blocks" only means something if the audit method is public.

  For every block that seals on mainnet we check whether our +1 template (built
  before that block existed) contained the tx that turned out to be the actual
  winner_tx of the sealed block. Winner = highest fee-rate normal tx of the
  block, ignoring coinbase. Match = pass, no match = miss.

  Every audited block is stored with its chain-tip height and the exact tx list
  we predicted. Anyone with a Bitcoin node can re-run the check against our
  timestamped snapshots. The 82.17 % is 106 passes out of 129 audited blocks.

  The NDA part is HOW we pick those tx. The audit-and-numbers part is open by
  design because that is the only honest way to sell a template engine.

  preblock.io/proof
  ```

- **P07 · X · Thread (5 Tweets)** 📝
  ```
  1/5
  "82.17 % Hit Rate" is a number we throw around a lot. Here is exactly what
  it measures and how you can re-verify it against a Bitcoin node yourself.

  2/5
  For every block we call it correctly OR incorrectly against a rule that
  never changes: did our +1 template (built BEFORE the block existed) contain
  the tx that ended up as the winner_tx of the sealed block?

  3/5
  Winner_tx = highest fee-rate normal tx (non-coinbase) in the sealed block.
  Simple, mechanical, no room for creative interpretation.

  4/5
  Every audited block gets stored with (a) chain-tip height at prediction
  time, (b) full tx list of the template, (c) the winner_tx that actually
  appeared. Anyone can replay the check.

  5/5
  106 passes out of 129 audited blocks = 82.17 %. Method is NDA. Audit is not.

  preblock.io/proof
  ```

### Gruppe 5: Fundraising Progress (03.09. oder 04.09.)

- **P08 · Nostr · kurz mit Screenshot** 📝
  ```
  Two weeks into the campaign, we are at <X %> of 0.09 BTC target.

  <X_backers> individual backers so far, from Nostr, X and one r/BitcoinMining
  regular who moved 50k sats after the AMA-style thread.

  What we spend the money on the day it hits target:
  → 0.008 BTC MRR limit-orders for 200 PH allocation
  → 0.001 BTC Braiins Hosting fixed rental window
  → founder pre-stake tops us up to 200 PH × 12 h

  Case-study clock starts the moment we buy the first block of hashpower.
  ```

- **P09 · X · Progress-Tweet mit Screenshot** 📝
  ```
  14 days into the PreBlock rental crowdfund.

  <X %> of 0.09 BTC target. <Y> individual backers so far. No VCs. No token
  pre-sale. No custodial holding — BTCPay + Stripe both go straight to the
  rental invoices.

  Progress bar live: preblock.io/crowdfund
  ```

---

## Woche 3 — Progress (05.09. bis 11.09.)

Ziel: soziale Bestätigung. Testimonials, namentliche Backer-Danksagungen,
zweiter Reddit-Post falls Substanz da ist.

### Gruppe 6: Backer-Shoutout und Testimonial-Sammlung (06.09. bis 08.09.)

- **P10 · Nostr · kurz** 📝
  ```
  Backer shoutout: three names that let me mention them publicly →
  @<npub1>, @<npub2>, @<npub3>.

  Also two anonymous BTC pledges that arrived at 03:42 CET on Tuesday and
  06:11 CET Wednesday. I do not know who you are, but the on-chain trail is
  in the BTCPay ledger and every sat is going into MRR the day we hit target.

  Zaps welcome ⚡
  ```

- **P11 · X · Backer-Tweet** 📝
  ```
  Small crowdfunds have this beautiful property that you can actually thank
  people by name.

  Shoutout to <@handle1>, <@handle2>, <@handle3> for backing the PreBlock
  rental test in week 2. And to the two anonymous BTC pledges that came in
  Tue and Wed — on-chain trail is in our BTCPay ledger.

  <X %> to target. preblock.io/crowdfund
  ```

### Gruppe 7: Case-Study-Teaser (09.09. oder 10.09.)

- **P12 · Nostr · lang** 📝
  ```
  Test plan for when we hit target (currently <X %>):

  Day 0: crowdfund closes, book MRR + Braiins allocation for the earliest
  free 12h window (typically 48 to 72h ahead).

  Day +2 to +3: 12h test window runs. All 200 PH point at our Stratum
  endpoint. /proof dashboard captures an automated snapshot every hour,
  each tagged with chain-tip height, saved into the repository.

  Day +5 to +6: full case study published on preblock.io/case-study. Hour-
  by-hour Hit Rate, Template Precision, Chain-Rhythm Confidence, plus a
  summary of any block finds (roughly 2.4 % probability across the window).

  Nothing simulated. Nothing edited. What the engine produced is what
  you will read.
  ```

### Gruppe 8: Zweiter Reddit-Post (nur wenn > 50 % funded, 10.09.)

- **P13 · Reddit r/Bitcoin · Progress-Post** 📝
  ```
  Title:
    Independent Bitcoin block-template engine — halfway through a
    community-funded stress-test crowdfund, here is the current state

  Body:
    Two weeks ago I posted in r/BitcoinMining about running a 200 PH ×
    12 h rental stress-test on PreBlock, our block-template engine for
    small and mid-tier miners. Update on where we stand.

    Current fundraising: <X %> of 0.09 BTC target, <Y> individual
    backers, no VCs, no token pre-sale, no custodial holding at any
    point in the flow.

    What backers get regardless of whether we hit target: nothing.
    This is not a token pre-sale. What backers get if we hit target:
    a fully documented hour-by-hour case study of the engine under
    real rental hashpower on preblock.io/case-study, each snapshot
    chain-tip anchored so any Bitcoin node can verify.

    Two open questions the community keeps asking, quick answers here:

    Q: Are you a mining pool? A: No. We produce block templates, we do
    not seal blocks. Sealing is done by whichever operator points
    hashrate at our Stratum endpoint. Legally we are a pure software
    vendor, not a payment operator.

    Q: Why not just raise from a VC and skip this hassle? A: Because
    an infra tool for miners has to prove itself openly in the miner
    community before it earns customers. Nobody wants a template
    engine that got funded in a boardroom and never touched a real
    Stratum socket.

    Live dashboard (NDA basic-auth for prospects): live.preblock.io
    Public campaign: preblock.io/crowdfund
  ```

---

## Woche 4 — Final Push (12.09. bis 19.09.)

Ziel: Countdown-Rhythmus, Verknappungs-Signal ohne Panik-Ton.
Wenn schon 100 % erreicht in Woche 3: Woche 4 wird zur Case-Study-
Vorbereitung, keine Push-Posts mehr.

### Gruppe 9: T-7 Countdown-Start (12.09.)

- **P14 · Nostr + X gleichzeitig · sehr kurz** 📝
  ```
  T-7 on the PreBlock rental crowdfund.

  Current: <X %> of 0.09 BTC.

  If we close in the next week the test window is booked for the
  weekend of <Datum>. Case study publishes the following Wednesday.

  preblock.io/crowdfund
  ```

### Gruppe 10: T-3 Reminder (16.09.)

- **P15 · Nostr + X · Reminder** 📝
  ```
  T-3 on the rental crowdfund. <X %> of 0.09 BTC, <Y> backers.

  If you meant to zap and forgot: this is the reminder.

  preblock.io/crowdfund
  ```

### Gruppe 11: FAQ / Closing Q&A (17.09. oder 18.09.)

- **P16 · Nostr · FAQ-Post** 📝
  ```
  Four weeks of running this in public, here are the four questions I got
  most often:

  1. "Why not run the test on your own gear?" Because 20 PH self-owned
     will never scale to what customers throw at us. The point is stress-
     test under REAL rental traffic patterns, not our own.

  2. "What if the block-find during the window actually happens?" 100 %
     of the block reward goes back into the operations account and buys
     the next test window. Backers get named in the case study either way.

  3. "Can I still pledge hashrate after the crowdfund closes?" Yes, the
     test-window slot list stays open until 48h before start. Reply here
     or to sales@preblock.io.

  4. "What comes after the case study?" First paying customer already
     lined up. Second and third are in discovery. If the case study
     numbers hold up under load, the pipeline handles itself.

  Zaps welcome. Case study ships end of September.

  preblock.io/crowdfund
  ```

### Gruppe 12: Kampagne schließt (19.09.)

- **P17 · Nostr + X · Closing** 📝
  ```
  Rental crowdfund closes today. Final: <Final %> of 0.09 BTC target,
  <N> individual backers over 28 days.

  Test window confirmed for <Datum>. Case study publishes <Datum + 5>.

  To everyone who zapped, streamed, or pointed a worker at us: thank
  you. Every sat is traceable in the BTCPay ledger. Case study will
  name every backer who allowed public mention.

  preblock.io/case-study
  ```

---

## Merkzettel für den Owner

- **Timing Zeitzone**: alle Uhrzeiten CEST. Für US-Peak-Aktivität die "guten"
  Slots sind Nostr / X 16:00 bis 21:00 CEST, Reddit 17:00 bis 19:00 CEST
  (= 08:00 bis 10:00 US Pacific).

- **Screenshot-Reservoir**: für alle Posts brauchst du entweder /proof
  Dashboard, /crowdfund Progressbar oder ein MRR-Order-Screenshot als
  Attachment. Halte einen Ordner "campaign-shots" auf dem Windows-Desktop.

- **Platzhalter ausfüllen**: alle `<X %>` und `<Y backers>` einfach in
  BTCPay Dashboard bzw. auf `pay.preblock.io/apps/QrgVaEgRTVzTmtqyzRZnqL1n9rd/crowdfund`
  ablesen und ersetzen bevor du auf Publish drückst.

- **Nichts hinzufügen was nicht wahr ist**: die einzige Regel bei einem
  Build-in-Public-Crowdfund. Ehrlicher Rückstand ("nur 34 % nach 3 Wochen,
  ich verlängere das Fenster um 14 Tage") verkauft besser als geschönte
  Zahlen.

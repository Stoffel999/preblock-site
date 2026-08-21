# PreBlock

**Predictive block-template scoring for small and mid-tier Bitcoin pools.**
_Multi-node inference · live-measured template precision · sealed-block evidence._

---

## Was ist PreBlock?

PreBlock ist eine Mining-Software-Stack die kleinen und mittleren Bitcoin-Pool-Betreibern einen **statistischen Vorteil bei der Transaktions-Auswahl** verschafft. Statt wie große Pools rein nach Fee-Rate zu bündeln, prognostiziert unser System welche Transaktionen mit höchster Wahrscheinlichkeit in den nächsten gesealten Block eingehen werden — der "Winner-TX-Hotspot". Diese Vorhersage nutzen wir um pro angeschlossenem Miner ein maßgeschneidertes Template zu bauen, so dass die verfügbare Hashrate auf den wahrscheinlichsten Suchraum konzentriert wird.

## Signature-Kennzahlen (Stand Februar 2026)

- **82.17 Prozent Winner-TX-Hit-Rate** über 129 auditierte Blöcke (24h-Fenster). In 106 von 129 gesealten Blöcken war der Fee-schwerste TX Teil unseres dispatched Slice.
- **Template-Precision im Durchschnitt 90 Prozent Plus** über dieselben 129 Blöcke. Von den ausgelieferten Transaktionen landet der Großteil im tatsächlich gesealten Block.
- **97 Prozent Chain-Rhythm-Confidence** aus drei unabhängigen Signalen (TX-Survival-Rate, Template-Consistency, Cluster-Reaction-Time).

Aktuelle Live-Werte: **https://live.preblock.io/proof** (NDA-Login `PreBlock` / [Passwort auf Anfrage]).

## Architektur

- **Node 1** — Head Node: FastAPI, React, nativer Stratum-V1-Server, MongoDB.
- **Node 2** — AI Node: Tesla T10 GPU, publisht `scores:winner_prob` alle 15 Sekunden.
- **Node 3** — Heuristik Node: P106 GPU, historische Cluster-Prior-Berechnung.
- **DB-First Tuning**: alle operativen Variablen live in MongoDB, keine Deploys für Config-Änderungen.
- **Kompatibel** mit Standard-Stratum-V1-Mietrigs (Mining Rig Rentals, NiceHash) über einen strict-compat-Mode.

## Wer profitiert?

- Small Pool Operators die 100 TH/s bis 20 PH/s an Bitaxen und Nerdminern managen und heute zu klein sind um bei Foundry oder Antpool statistisch ins Gewicht zu fallen.
- Farm-Betreiber die eigene ASIC-Kapazität mit gemieteter Zusatzleistung kombinieren wollen ohne den Overhead einer eigenen Pool-Software.
- Marktplatz-Vermittler die MRR- oder NiceHash-Kapazität an ihre Endkunden verkaufen und ein technisches Alleinstellungsmerkmal jenseits reiner Fee-Rate-Sortierung brauchen.

## Was wir NICHT sind

Wir konkurrieren nicht mit Foundry oder Antpool auf reiner Hashrate-Skala. Ein PreBlock-Kunde mit 20 PH/s findet statistisch nicht mehr Blöcke als ein Foundry-Kunde mit 20 PH/s. Was der PreBlock-Kunde bekommt, ist die **erhöhte Wahrscheinlichkeit dass der gefundene Block seine wertvollsten vorhergesagten TXs enthält** und dass die Sekunde nach Block-Tip nicht durch Template-Rebuild-Latenz verschwendet wird. Das ist der Unterschied zwischen "wir wollen so viel Fees wie möglich einsammeln" und "wir wollen den richtigen Block präzise treffen".

## Business Model

- Software-as-a-Service mit monatlicher Fixed-Fee pro angeschlossener Session.
- Optional Consulting-Setup für Pool-Betreiber die die On-Premise-Installation wollen.
- Whitelabel-Lizenzierung für Marktplatz-Betreiber.

Preise auf Anfrage — bewusst nicht öffentlich um Enterprise-Verhandlungen nicht zu präjudizieren.

## Kontakt

- **E-Mail**: sales@preblock.io
- **LinkedIn Company**: https://www.linkedin.com/company/preblock/
- **LinkedIn Founder**: https://www.linkedin.com/in/joachim-richter-steidl-2a191a3a0/
- **X**: https://x.com/PreBlockHQ
- **Live-Dashboard (NDA)**: https://live.preblock.io/proof

---

_Dieses Dokument ist ein one-pager Snapshot. Zum PDF-Konvertieren: `pandoc PreBlock-One-Pager.md -o PreBlock-One-Pager.pdf --pdf-engine=xelatex` oder alternativ im Browser über `Datei → Drucken → Als PDF speichern`._

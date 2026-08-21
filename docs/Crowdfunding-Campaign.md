# PreBlock.io — Crowdfunding-Kampagne

_Quelle: extern generierte Vorlagen für Social-Posts, BTCPay- und Stripe-Beschreibungen sowie Landingpage-Snippet, abgelegt zur internen Verwendung._

---

## Ziel

2.500 EUR sammeln, um PreBlock.io an einen echten Rental-Mining-Cluster anzubinden und die Plattform unter Live-Netzwerklast (Telemetrie, Block-Daten, Hashing-Metriken) zu stress-testen. Kein VC, keine Token-Presale. Reine, community-finanzierte Entwicklungsarbeit.

---

## 1. Social-Media-Vorlagen

### 1.1 X (Twitter) — Build in Public

> 🛠️ We are building PreBlock.io in public!
>
> Our crypto tool is ready for the ultimate stress test. To connect it to a real-world environment, we are spinning up a 2,500€ rental miner connection.
>
> No VC fund, no token pre-sale. Just pure development.
>
> Want to support open infrastructure testing? You can now back our tech setup directly on our site via Crypto (powered by @BtcPayServer). Every single satoshi/wei goes straight into the miner rental.
>
> 👉 Check our progress: [PreBlock.io]
>
> #BuildInPublic #CryptoDev #Web3 #Mining

Tipp: Screenshot oder GIF des Dashboards / Codes anhängen.

### 1.2 Reddit (r/de_crypto oder r/CryptoCurrency)

> **Headline:** Connecting our dev project PreBlock.io to a real-world rental miner – Building in Public & need your technical feedback
>
> Hey everyone,
>
> I am the founder of PreBlock.io. We have spent the last few months developing a tool designed to [1 Satz einfügen: was das Tool macht, z. B. Mempools analysieren / Mining-Erträge optimieren].
>
> We are now at a stage where simulated data isn't enough. We need to test our tool under real network load. To do this, we need to rent a physical mining cluster (approx. €2,500 budget) to pipe live block data and hashing telemetry directly into our software.
>
> Since we are registered as a proper business entity but want to remain fully independent of VCs or sketchy token launches, we decided to fund this hardware lease via crowdfunding directly on our page.
>
> **What's in it for you?**
>
> We are fully committed to "Building in Public". We will share all benchmark results, uptime data, and technical hurdles right here and on our platform.
>
> If you want to support indie crypto infrastructure or just check out the dashboard, feel free to visit PreBlock.io. We integrated a non-custodial gateway for direct support.
>
> Would love to hear your thoughts on our architecture!

---

## 2. Zahlungsschienen

BTCPay Server (Krypto) und Stripe (Fiat) sind beim Betreiber bereits produktiv eingerichtet. Für die Kampagne wird jeweils ein neues, dediziertes Produkt/App angelegt.

### 2.1 BTCPay Server — Crowdfunding-App

Nutzung der eingebauten Crowdfunding-App (`Apps → Create a new app → Crowdfunding`):
- Ziel: 2500 EUR
- Custom Amount aktivieren (Unterstützer wählen den Betrag)
- Live-Fortschrittsbalken automatisch aktiv
- Beschreibungstext (Markdown):

```markdown
### 🛠️ Support the PreBlock.io Stress-Test

We are building **PreBlock.io** completely independently — without venture capital or sketchy token pre-sales. To take our platform to the next level, simulated data is no longer enough. We need to test our tool under real-world network load.

#### The Goal
We are raising **€2,500** to fund a physical rental-mining cluster. This will allow us to pipe live block data, telemetry, and hashing metrics directly into the PreBlock infrastructure.

#### Why back us?
* **Build in Public:** We will share all benchmark results, performance logs, and infrastructure hurdles openly with the community.
* **Pure Dev Work:** Every single satoshi goes 100% into the mining hardware lease and network infrastructure.

*This support is processed via PreBlock.io (registered business). Choose your own amount and help us stress-test independent crypto infrastructure.*
```

### 2.2 Stripe — Pay-What-You-Want-Produkt

- Produktname: `PreBlock.io Infrastructure Support`
- Preismodell: `Customer chooses price` (Pay-What-You-Want)
- Beschreibung:

> PreBlock.io Infrastructure Support (Pay-What-You-Want)
>
> Support the real-world stress test of PreBlock.io. We are raising €2,500 to connect our analytical platform to a live rental-mining cluster to test data processing under heavy network load.
>
> No VCs, no token sales — just community-funded development. You are supporting a registered business entity (PreBlock.io).
>
> Note for your records: This transaction is a corporate infrastructure contribution/subsidy without physical rewards. An automated invoice will be provided via email.

---

## 3. Landingpage-Snippet (Einbindung auf PreBlock.io)

Kompakter Block, direkt über oder neben den Zahlungs-Buttons platzieren:

> **Stress-Testing PreBlock.io with Live Hashing Power**
>
> We have spent months developing PreBlock.io. Now it's time to move from simulated environments to the real world. We are raising €2,500 to fund a live rental-miner lease and pipe real-time telemetry into our tool.
>
> No corporate overlords, no hidden tokens. Just pure, independent development.
>
> Choose your preferred way to support our infrastructure test:
>
> [ Button: Support with Crypto via BTCPay ] → BTCPay-App-Link
> [ Button: Support with Credit Card / Fiat via Stripe ] → Stripe Payment Link

---

## 4. Buchhaltungshinweis

Da rechtlich eine finanzielle Unterstützung ohne direkte Gegenleistung an eine Firma erfolgt, wird der Vorgang in der Buchhaltung als „Sonstige steuerfreie/steuerbare Erträge“ oder „Zuschüsse“ gebucht (Abstimmung mit Steuerberater: echter nicht steuerbarer Zuschuss vs. steuerpflichtige Betriebseinnahme). Auf klassische Rechnung mit Umsatzsteuer wird verzichtet — Stripe liefert eine automatische Bestätigungsmail, BTCPay ebenfalls.

---

## 5. Umsetzungs-Checkliste

1. BTCPay Crowdfunding-App anlegen (Ziel 2500 EUR, Custom Amount, obiger Beschreibungstext).
2. Stripe Pay-What-You-Want-Produkt anlegen (obiger Beschreibungstext, Payment Link kopieren).
3. Landingpage-Block auf preblock.io einbauen (Sektion `#crowdfund` oder eigene Unterseite `/crowdfund`).
4. Live-Fortschrittsbalken der BTCPay-App einbetten (oder statisch verlinken).
5. Social-Posts (X, Reddit) zeitversetzt schedulen.
6. Nach Zielerreichung: Rental-Miner-Auswahl (MRR / NiceHash) und Benchmark-Log öffentlich dokumentieren.

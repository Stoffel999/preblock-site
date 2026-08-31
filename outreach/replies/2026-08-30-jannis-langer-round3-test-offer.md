# Jannis Langer — Reply Round 3 / Test-Kooperation Angebot (Draft, noch NICHT gesendet)

Follow-up nach Runde 2. Wechsel vom Argumentations-Modus in einen
konkreten Test-Vorschlag: Jannis ist der Bitaxe-Made-in-Germany-
Hersteller, seine „wenige Sats"-Kritik kommt aus der Home-Miner-Optik.
Antwort ist ihn aus dieser Optik rauszuholen indem seine eigene
Hardware in ein Setup gestellt wird wo der Fee-Delta sichtbar wird.

## Wichtige Korrekturen gegenüber dem Erstwurf

- Nicht Wireguard-Tunnel sondern API-basiert. Raspi ist ein
  ausgehender API-Client, kein VPN-Peer. Das ist das echte
  Kommerz-Produkt.
- 10 bis 100 Miner pro Typ, NICHT 1-2. Statistische Belastbarkeit.
- Das Raspi-Setup ist bei uns intern noch NICHT gefahren (nur
  geplant, siehe `/app/docs/RASPI_TEST_RIG.md`). Interner Test
  läuft übernächste Woche über die Zweit-Fritzbox (Kabel).

## Text zum Versand (Owner-Version — final v2 nach AxeOS-Referenz)

Hey Jannis,

kurze Rückfrage bevor ich weiter tippe: du bist doch die Bitaxe-Made-in-Germany-Ecke, oder? Falls ja hätte ich einen konkreten Vorschlag statt noch mehr Argumente.

Unser Tool ist fertig und läuft. Wir haben grade einen 13-Stunden-Rig-Test mit einem 10-PH-Rig über Marktplatz-Miete hinter uns, sauber angenommen, null Rejects, alles auf unserer eigenen Engine. Was mich für euren Formfaktor interessiert sind nicht die grundsätzlichen „funktioniert das überhaupt"-Fragen, die haben wir durch — sondern die Feinparameter. Eine Bitaxe hat ein völlig anderes Share-Profil als ein 10-PH-Rack, andere Vardiff-Kurve, andere Timing-Toleranzen. Genau diese Kalibrierung würde ich in einem gemeinsamen Test einfahren, so dass am Ende ein sauberes Bitaxe-optimiertes Setup steht.

Der Ablauf: bei euch im Netz steht ein Raspi an dem eure Bitaxes und Quadaxes hängen wie sonst auch. Auf dem Raspi läuft unser Stratum, der zieht seine Templates live per API von unserer Engine. Keine Fremdverbindung in euer Netz, der Raspi macht nur ausgehende API-Calls über sein normales Internet — genau das Modell mit dem wir auch spätere Kommerzkunden bedienen. Und weil euer Publikum an die AxeOS-Optik gewohnt ist, kommt der Raspi bei uns mit einem lokalen Kiosk-Display im ähnlichen Stil: Monitor und Tastatur dran, Bildschirm zeigt links eure Worker-Liste in Bitaxe-Farben, rechts unsere Template-Live-Zahlen, beide Logos oben nebeneinander, keine Marke schluckt die andere. Der Kunde sieht auf einen Blick was läuft und wer mitmacht.

Zur Sample-Größe: pro Miner-Typ zehn bis fünfzig Stück wären belastbar, hundert wenn ihr es könnt großartig. Unter zehn ist statistisch nichts. Zeitraum zwei bis vier Wochen genügt für die Fee-Auslese-Kurve, ein Block-Fund ist bei der aggregierten Hashrate nicht das Ziel — sauberer Parameter-Fit für euren Formfaktor ist das Ziel.

Sag mir wenn die Richtung passt, dann melde ich mich mit Terminvorschlag und Adresse für den Raspi.

Viele Grüße
Joe

## Positionierungs-Regeln fuer diese und alle folgenden Runden

- Nicht „wir bauen gerade" — „unser Tool ist fertig und laeuft".
- Nicht „Testphase" — „Feinjustierung fuer den Formfaktor".
- Nicht „wir wuerden gerne mal ausprobieren" — „gemeinsamer
  Kalibrierungslauf mit definierten Zielen".
- Nicht „Wireguard-Tunnel" — „ausgehender API-Client, gleiches
  Modell wie fuer Kommerzkunden".
- Blockfund-Erwartungen aktiv managen: Bitaxe-Fleet hat statistisch
  keinen Block-Fund in 4 Wochen, das gehoert vorweggenommen damit
  es kein „habt ihr keinen Block gefunden"-Argument im Nachhinein
  wird.

## Timing-Empfehlung

JETZT senden, nicht warten. Die Message holt sein grundsätzliches
Ja/Nein zur Richtung ein, keine Zahlen. Er hat zwei Wochen Zeit zu
antworten, wir testen parallel intern. In jedem Ausgang (Ja / Nein /
kein Signal) sind wir weniger gestresst als wenn wir erst zwei Wochen
warten und dann eine ganz neue Kaltansprache starten müssten.

## Bitaxe-VK-Argument (Follow-up nach seinem Ja)

Bitaxe hat gegenüber Bitmain/MicroBT zwei USPs: Made-in-Germany +
Open-Source-Ethos. Ein Predictive-Stratum-Companion als API-Bundle
wäre der dritte USP den kein Bitmain-Reseller nachliefern kann. Und
er passt ideologisch: mehr Template-Diversität pro Node = weniger
zentralisierte Template-Kurve = passt zu „peaceful decentralization"
das er in seinem LinkedIn-Bio stehen hat.

NICHT in die aktuelle Message reinlegen. Zwei Gründe. Erstens
verwässert es die klare Test-Einladung. Zweitens ist es der perfekte
Gesprächs-Öffner für Runde 4 sobald er auf den Test einsteigt.

## Follow-up-Regel

- Sein Ja zur Richtung → interner API-Raspi-Test übernächste Woche
  finalisieren, danach konkreten Vorschlag schicken (Termin, Miner-
  Anzahl, Raspi-Versand).
- Sein Nein → dank für die klare Ansage, Tür bleibt offen, kein
  Nachhaken.
- Kein Signal in 7-10 Tagen → sanfter Nachschub mit dem Bitaxe-VK-
  Argument als neuen Grund („mir ist noch was aufgefallen…").

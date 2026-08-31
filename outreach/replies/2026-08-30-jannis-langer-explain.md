# LinkedIn — Antwort auf Jannis Langer (2026-08-30 Sonntag)

_Jannis hat auf die v1-DM geantwortet: "So richtig verstehe ich noch
nicht was preblock genau macht und vor allem was das bringt. Richtig
schlau werde ich aus der Page nicht."_

## Diagnose

Die Landing-Page auf preblock.io ist zu tech-schwer fuer jemanden der
Hardware baut aber kein Software-Backend. Jannis braucht drei ehrliche
Saetze ohne Jargon: was das Ding tut, was er als Bitaxe-Hersteller davon
haette, warum das nicht sofort seine Zielgruppe angreift sondern
ergaenzt. Kein Link, kein PDF-Anhang — Text pur.

## Antwort-Entwurf

> Hi Jannis,
>
> Danke fuer die ehrliche Rueckmeldung, das hilft mir die Seite besser
> zu machen. Kurz in einfach:
>
> Ein Bitcoin-Miner rechnet an einem "Template" — einer vorbereiteten
> Liste von Transaktionen die er in den naechsten Block packen wuerde,
> falls er einen Hash findet. Die Wahl WELCHE Transaktionen drin sind
> entscheidet wieviel Fee-Belohnung der Miner bekommt wenn er den Block
> tatsaechlich sealt. Grosse Pools wie Foundry bauen diese Liste selbst
> und optimieren sie hart. Kleine Miner nehmen was der Standard-Node
> vorschlaegt und lassen dabei Geld liegen.
>
> PreBlock ist die Optimierungs-Schicht zwischen Bitcoin-Node und
> Miner. Sie waehlt fuer den naechsten Block die Transaktionen aus die
> mit hoher Wahrscheinlichkeit wirklich in den kommenden Block gehoeren
> — bezogen auf Live-Mempool und Pool-Verhalten. Wenn ein PreBlock-
> Kunde einen Block sealt, bekommt er im Schnitt ~90 Prozent der
> "richtigen" Transaktionen drin statt der ~60 Prozent die
> Default-Templates liefern.
>
> Fuer euch als Bitaxe-Hersteller ist das Interessante: eure Kunden
> mieten oder besitzen kleine Fleets in denen ein gefundener Block
> selten aber sehr wertvoll ist. PreBlock ist der Add-on-Layer der aus
> "wenn wir mal treffen dann richtig" macht. Ich wuerde dir gerne mal
> per Video einen 10-Minuten-Live-Run zeigen — dann siehst du was auf
> unserem Dashboard passiert wenn ein Testnet-Block reinkommt. Sagt
> dir das mehr als jede Landing-Page.
>
> Beste Gruesse
> Joachim

## Warum das gut ist

- Kein einziges Fachwort ohne sofortige Erklaerung.
- Klarer Vorteils-Absatz mit konkreter Zahl (90% vs 60%).
- Gezielte Bruecke zu SEINEM Geschaeft ("eure Kunden mit kleinen Fleets").
- Live-Video-Angebot statt weiteres Lese-Material.

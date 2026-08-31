# Jannis Langer — Reply Round 2 (versendet 2026-08-30)

Runde 2 nach Jannis' Rückfrage:
- „richtige transaktionen" nicht klar definiert
- default vs optimiertes template = wenige sats
- DATUM reicht wenn man selber template-hoheit will
- klingt am bedarf vorbei entwickelt

## Antwort (Owner-Version, verschickt)

Hey Jannis, danke für die klare Rückmeldung — das treffen an den
Punkten macht mir die Argumentation ehrlich gesagt schärfer.

Zu dem „richtige Transaktionen": das war meine unsaubere Formulierung.
Was ich sagen wollte: Transaktionen die zum aktuellen Mempool und zum
jeweiligen Rig passen. Und da liegt der eigentliche Unterschied zu
DATUM. DATUM gibt dir ein Template, du kannst es konfigurieren, alles
gut. Nur wenn du zehn Rigs hängen hast laufen die zehn eben auf
demselben Template. Bei uns bekommt jeder Rig-Slot einen eigenen
Slice, jeweils zusammengestellt aus dem was der Mempool gerade hergibt
und angepasst wenn sich was dreht. Also nicht „optimiertes vs default
Template" sondern zehn diversifizierte vs eins.

Die „wenigen Sats" musst du im ruhigen Mempool tatsächlich so sehen,
da hast du recht. Spannend wird's in den Peak-Fenstern — Runes-Schübe,
Ordinals-Wellen, überlastete Zeiten. Da liegen zwischen einem
generischen Top-Fee-Cut und einem der die Welle mitnimmt keine zwei
Sats mehr sondern grob tausende sat/vB auf den Grenz-TXs. Und genau
da machen mittlere Pools ihre Marge. Das ist der Bedarf um den es mir
geht, im Daueralltag hast du komplett recht.

Zum Komplexitäts-Punkt: du hast bei uns keinen Pool-Switch, keine
Custody, kein Revenue Share. Du bleibst wo du bist, wir liefern nur
die Templates dazu. Das Risiko was du meinst gibt's strukturell so
nicht bei uns.

Wenn du magst zeig ich dir mal ein Live-Fenster mit Zahlen statt
Behauptungen — dafür haben wir ein Community-Tier, kostet dich nix.

Viele Grüße
Joe

## Follow-up-Regel

Wenn er auf Community-Tier eingeht → Live-Fenster mit einem konkreten
Fee-Peak-Auszug vorbereiten (keine Betriebsgeheimnisse, siehe Standing
Orders §001). Custody/Risiko-Ebene → Node-Setup-Gespräch. Kein Signal
→ in 7-10 Tagen sanfter Follow-up an einem konkreten Chain-Ereignis
festmachen (Runes-Welle, Fee-Spike).

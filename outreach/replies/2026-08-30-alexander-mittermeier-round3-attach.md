# Alexander Mittermeier — Case-Study Zusendung (2026-08-30 Vormittag)

Alexander hat am 2026-08-30 08:57 auf die Runde-2-Antwort geschrieben:

> Hallo Joachim, ja gerne zusenden, mich würde es interessieren.
> Die größte Herausforderung für Bitcoin ist m.M. in den nächsten
> Jahren die Migration zu Quantum Secure Wallets und Transaktionen.
> Ich hoffe sehr, dass die Bitcoin-Community das hinbekommt.
> VG nach Bremen, Alexander

## Antwort mit Anhang (versandfertig, per LinkedIn-DM oder Mail)

Hallo Alexander,

danke für die schnelle Antwort und die klare Themen-Positionierung. Der Q-Day-Winkel ist ein Punkt an dem ich selbst viel drüber nachgedacht habe und ich habe ihn im Anhang direkt mit aufgegriffen — ehrlich mit der Grenze was PreBlock kann und was nicht, aber mit einer konkreten Sicht warum unser Design genau in einer Migrations-Phase seinen Vorteil ausspielt.

Das Papier ist das Case-Study-Kurzformat aus dem 13-Stunden-Stresstest den ich letzte Woche mit einem 10-PH-Rig gefahren habe. 9,10 PH effektiv, null rejected shares, saubere Zahlen. Der Q-Day-Abschnitt sitzt hinten, davor die klassischen Test-Zahlen.

Wenn du Rückfragen hast oder etwas nachlegen soll (Rental-ID, Live-Zugriff, Vertiefung an einer Stelle), sag Bescheid.

Beste Grüße
Joachim Richter-Steidl (Bremerhaven, nicht Bremen — leicht zu verwechseln, wir liegen 60 Kilometer voneinander weg)

📎 `2026-08-30-preblock-case-study-alexander-mittermeier.pdf`

## Was mitgeht

Der Attachment-Text liegt aktuell als Markdown in
`/app/docs/case-study/2026-08-30-preblock-case-study-alexander-
mittermeier.md`. Für den Versand muss er zu einem sauberen PDF
gerendert werden. Zwei Wege:

- pandoc mit einem schlanken LaTeX-Template (empfohlen):
  ```bash
  cd /app/docs/case-study && \
  pandoc 2026-08-30-preblock-case-study-alexander-mittermeier.md \
    -o pdf/2026-08-30-preblock-case-study-alexander-mittermeier.pdf \
    --pdf-engine=xelatex \
    -V geometry:margin=2.5cm \
    -V mainfont="Space Grotesk" \
    -V monofont="JetBrains Mono" \
    -V colorlinks=true \
    -V linkcolor=teal
  ```
- Alternativ VS Code Markdown-PDF-Extension, wenn pandoc auf dem
  Owner-Rechner nicht sofort verfügbar ist. Ergebnis-PDF ist
  praktisch identisch.

Ziel-PDF landet automatisch im vorgesehenen `docs/case-study/pdf/`
Ablage-Ordner damit alle Case-Study-PDFs an einer Stelle liegen.

Der Bremerhaven-vs-Bremen-Selbst-Scherz am Ende ist bewusst — er
zeigt Details-Aufmerksamkeit ohne belehrend zu sein und macht den
Absender menschlich statt korporativ.

## Follow-up-Regel

- Antwort mit inhaltlicher Rückfrage zum Q-Day-Teil → aktiv
  vertiefen. Alexander schreibt zwar den Newsletter aber ist selbst
  investor-interessiert. Ein technisches Gespräch auf Augenhöhe
  ist möglich.
- Antwort „danke, schau ich mir an" → warten. Nach ein bis zwei
  Wochen mit dem Bitaxe-Fleet-Test-Ergebnis nachlegen als
  Follow-up.
- Keine Antwort binnen 14 Tagen → nicht nachhaken. Er hat das
  Papier, die Watchlist ist die Kategorie in der er uns geparkt
  hat. Warten bis er einen Slot hat.

# Fokus Kind Familienberatung — Website

Redesign der Website [fokuskind-familienberatung.ch](https://fokuskind-familienberatung.ch)
(Estelle Federer, Familienberatung bei ADHS, Bern).

Statische Website ohne Build-Schritt, ohne Framework, ohne Tracking. Die Dateien
lassen sich unverändert auf jeden Webspace kopieren.

---

## Inhalt

| Datei | Seite |
| --- | --- |
| `index.html` | Startseite |
| `beratungsangebot.html` | Beratungsangebot |
| `ablauf-und-kosten.html` | Ablauf & Kosten |
| `ueber-mich.html` | Über mich |
| `kontakt.html` | Kontakt |
| `impressum.html` | Impressum |
| `datenschutz.html` | Datenschutzerklärung |
| `404.html` | Fehlerseite |

```
assets/
  css/styles.css     Gesamtes Design-System (Farben, Typografie, Raster)
  js/site.js         Mobile Navigation, Kopfzeile, Jahreszahl — sonst nichts
  fonts/             Fraunces und Karla als woff2, lokal ausgeliefert
  img/               Logo, Signet, Porträt, Titelbild, Favicon, OG-Bild
robots.txt, sitemap.xml
```

## Lokal ansehen

```bash
python3 -m http.server 8000
# http://localhost:8000
```

Ein Doppelklick auf `index.html` funktioniert ebenfalls; die lokalen Schriften
werden von manchen Browsern über `file://` aber nicht geladen.

## Veröffentlichen

Den gesamten Ordnerinhalt in das Web-Verzeichnis des Hosters kopieren
(z. B. per FTP nach `/web` bei Infomaniak). Es ist keine Datenbank, kein PHP
und kein Build-Prozess nötig.

Alternativ eignet sich jedes Static Hosting (GitHub Pages, Netlify,
Cloudflare Pages) — Repository verbinden, kein Build-Befehl, Publish-Verzeichnis
ist das Wurzelverzeichnis.

## Gestaltung

- **Schrift** — Fraunces (Auszeichnung) und Karla (Lesetext), beide unter der
  SIL Open Font License 1.1, lokal eingebunden. Es besteht keine Verbindung zu
  Google Fonts oder einem anderen CDN.
- **Farbe** — eine Leitfarbe (Petrol `#16333b`), ein Akzent (Ton `#a65a34`),
  warm gestimmte Neutrale (`#fbf8f3`, `#f2ebe0`). Alle Text-Hintergrund-Paare
  erreichen mindestens WCAG AA.
- **Signet** — die Kinder-Linienzeichnung aus dem bestehenden Logo, freigestellt
  und als eigenständiges Bildzeichen (`assets/img/signet.svg`) verwendet.
- **Raster** — Abstände und Schriftgrössen stammen durchgehend aus den
  CSS-Variablen am Anfang von `styles.css`. Wer Abstände oder Farben ändern
  will, ändert sie dort einmal.

## Barrierefreiheit und Datenschutz

- Sprunglink zum Inhalt, sichtbare Fokusringe, `aria-current` in der Navigation
- Bedienbar per Tastatur, Navigation mit `Esc` schliessbar
- `prefers-reduced-motion` wird beachtet, Druckstylesheet vorhanden
- Keine Cookies, kein Analytics, keine eingebettete Karte, keine externen
  Requests — die Seite lädt ausschliesslich eigene Dateien

## Offene Punkte

In `impressum.html` und `datenschutz.html` sind die Stellen, die nur Estelle
Federer selbst ausfüllen kann, im Fliesstext hervorgehoben (sandfarben
hinterlegt, Klasse `todo`):

- Telefonnummer, UID/MWST-Nummer, allfällige Berufsbezeichnung
- Bildnachweise für Porträtfotografie und Titelbild
- Name und Sitz des Hosting-Anbieters sowie Aufbewahrungsdauer der Logfiles

Nach dem Ausfüllen jeweils das `<span class="todo">…</span>` entfernen.

## Inhalte

Alle Texte stammen aus der bestehenden Website und wurden für das Redesign
lediglich neu gegliedert und typografisch gesetzt — inhaltlich wurde nichts
hinzuerfunden.

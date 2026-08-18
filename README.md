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
  js/site.js         Mobile Navigation, Kopfzeile, Karte, Jahreszahl — sonst nichts
  fonts/             Fraunces und Karla als woff2, lokal ausgeliefert
  img/               Logo, Signet, Porträt, Titelbild, Karte, Favicon, OG-Bild
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
- **Farbe** — direkt aus dem Logo abgeleitet: Markenblau `#233dff` als einziger
  Akzent, Logoschwarz `#16181f` als Leitfarbe, kühl gestimmte Neutrale
  (`#fcfcfe`, `#eff1f8`) dazwischen. Alle Text-Hintergrund-Paare erreichen
  mindestens WCAG AA.
- **Logo** — eröffnet die Startseite gross über der Hauptüberschrift und führt
  Kopf- und Fussbereich (`logo.svg`, für dunklen Grund einfarbig als
  `logo-invers.svg`). Beide Dateien sind auf die Palettenwerte eingefärbt,
  damit Logo und Seite exakt denselben Blauton zeigen.
- **Aufzählungen** — durchgehend runde Punkte im Markenblau, keine
  Nummerierungen. Ein Zeichen für alle Listen: Themenfelder, Beratungsablauf
  und Merkmalslisten.
- **Signet** — die Kinder-Linienzeichnung aus dem Logo, freigestellt und als
  eigenständiges Bildzeichen (`assets/img/signet.svg`) für die Wasserzeichen
  in Seitenköpfen und Kontaktband verwendet.
- **Raster** — Abstände und Schriftgrössen stammen durchgehend aus den
  CSS-Variablen am Anfang von `styles.css`. Wer Abstände oder Farben ändern
  will, ändert sie dort einmal.

## Barrierefreiheit und Datenschutz

- Sprunglink zum Inhalt, sichtbare Fokusringe, `aria-current` in der Navigation
- Bedienbar per Tastatur, Navigation mit `Esc` schliessbar
- `prefers-reduced-motion` wird beachtet, Druckstylesheet vorhanden
- Keine Cookies, kein Analytics, keine externen Requests beim Seitenaufruf —
  die Seite lädt zunächst ausschliesslich eigene Dateien
- Die Karte auf der Kontaktseite ist eine Zwei-Klick-Lösung: sichtbar ist ein
  lokal gespeicherter Kartenausschnitt (OpenStreetMap, ODbL); Google Maps wird
  erst nach ausdrücklichem Klick nachgeladen. Daneben stehen Direktlinks für
  Google Maps, Apple Karten und OpenStreetMap zur Wahl der Karten-App.

## Rechtstexte

Impressum und Datenschutzerklärung sind vollständig; es sind keine Angaben
mehr offen.

- **Telefonnummer** — wird bewusst nicht veröffentlicht. Das Impressum weist
  darauf hin, dass die Kontaktaufnahme per E-Mail erfolgt. Rechtlich genügen
  Name, Adresse und eine E-Mail-Adresse (UWG Art. 3 Abs. 1 lit. s).
- **UID-/MWST-Nummer** — entfällt. Die Praxis ist nicht im Handelsregister
  eingetragen; eine Nummer müsste nur bei Eintrag oder Mehrwertsteuerpflicht
  angegeben werden.
- **Bildnachweise** — entfallen, die Fotografien stammen aus eigener Hand.
  Nachgewiesen sind allein die Kartendaten (OpenStreetMap, ODbL).
- **Hosting** — Infomaniak Network AG, Les Acacias (Genf). Infomaniak nennt
  keine konkrete Aufbewahrungsdauer für Webserver-Logs; die
  Datenschutzerklärung formuliert sie deshalb zweckgebunden.

Sollte künftig doch eine Stelle offenbleiben, lässt sie sich mit
`<span class="todo">…</span>` sichtbar markieren — die Klasse ist im
Stylesheet weiterhin vorhanden.

## Inhalte

Alle Texte stammen aus der bestehenden Website und wurden für das Redesign
lediglich neu gegliedert und typografisch gesetzt — inhaltlich wurde nichts
hinzuerfunden.

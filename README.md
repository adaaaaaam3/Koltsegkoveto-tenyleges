# Költségkövető

Telepíthető (PWA) költségkövető alkalmazás forintban: kategóriák szerinti fánkdiagram, 6 hónapos trendvonal, gyors tételfelvitel. Offline is működik, az adatok a készülék böngészőjében tárolódnak.

## Telepítés GitHub Pages-szel
1. Töltsd fel a mappa **teljes tartalmát** egy új GitHub repo gyökerébe.
2. Settings → Pages → Branch: `main`, mappa: `/ (root)` → Save.
3. Nyisd meg a `https://felhasznalonev.github.io/repo-neve/` címet telefonon.
   - **Android (Chrome):** menü (⋮) → *Alkalmazás telepítése*
   - **iPhone (Safari):** Megosztás → *Hozzáadás a kezdőképernyőhöz*

## Fájlok
- `index.html` – az alkalmazás
- `manifest.webmanifest` – az alkalmazás leírása (név, ikonok, színek)
- `sw.js` – offline működés; kód módosításakor emeld a `CACHE` verzióját
- `icon-*.png`, `apple-touch-icon.png` – ikonok

A PWA csak HTTPS-en (pl. GitHub Pages) vagy `localhost`-on települ.

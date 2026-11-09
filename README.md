# MSU International Partners Directory

An English directory built around the MSU International Agreements master list dated August 13, 2026. Includes all 60 institutions in the list's order, including the unnumbered Isesaki City Government entry.

## Data conventions

- Institution names, nature of program and agreement dates follow the master list.
- Partnership status is `Not specified` unless explicitly supplied. Program status is separate and reflects the supplied nature-of-program wording where available. No agreement or partnership status is inferred from an expiration date.
- Seven existing complete descriptions are retained verbatim. Other descriptions are blank, including the previously incomplete fragment.
- Location metadata is approximate city, region or country positioning, not verified campus coordinates.
- Personal contact details and the source document are not published.

## Hosting

Static HTML/CSS/JavaScript on GitHub Pages, published from the root of branch `msu-international-partners` in `robbiechen380/test`. Public URL: https://robbiechen380.github.io/test/

## Features

Institution, city, country and program filtering; search; map interactions; institution details; larger-text setting; pagination; CSV export. Missing descriptions remain empty in the directory, details and export.

## Libraries

D3 v7 and topojson-client v3 (ISC); world-atlas / Natural Earth geometry (public domain). University marks belong to Missouri State University.

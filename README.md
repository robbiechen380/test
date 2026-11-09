# MSU International Partners Report — improved interface

An independent, all-English usability improvement of the supplied Data Studio report. Preserves the original school branding, names, descriptions, filter categories and source order. Improvements focus on readable text, responsive layout, working map interactions and clear detail views.

Static HTML/CSS/JavaScript: no build step, application login or API keys. Hosted on GitHub Pages from the root of the main branch. All assets use relative paths for project-site compatibility.

## Sources

- Public Data Studio report `3ef144cb-b8d2-40d1-bb05-85eca55e01fb`, snapshot retrieved November 9, 2026: 88 named institutions, plus one excluded blank row.
- Owner-supplied **MSU International Agreements Master List.pdf**, labeled updated August 13, 2026: 59 numbered records plus an unnumbered Isesaki City Government entry = 60 institutions. Only country, institutional name, program and expiration fields are included. The PDF, personal contact information and email addresses are not published.

The sources remain separate. Do not replace an original-report program label with a master-list program label: they sometimes differ.

## Comparison

49 exact names + 8 documented name variants = 57 matched records. Three master-list institutions were not found in the original report snapshot: ESCA, Japanese International School (JIS), and University of Economics Ho Chi Minh City (UEH). UTE is linked to the original Ho Chi Minh City University of Technology and Education record with name-change evidence. The site exposes the full comparison and CSV export.

This checks inclusion in the source report. It does not certify current agreement validity. The invalid supplied date `3/56/2030` is preserved and flagged.

## Map and libraries

D3 v7 and topojson-client v3 (ISC); world-atlas / Natural Earth geometry (public domain). Location enrichment uses approximate city, region or country coordinates; no point is a verified campus location. School marks belong to Missouri State University; this is an independent recreation.

## Check

`node --check app.js`. Serve the repository root through a static server for use; opening index.html directly under file:// will prevent JSON loading.

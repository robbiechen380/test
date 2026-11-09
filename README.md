# MSU Global Agreements

A public, English overview of Missouri State University's global partnership network. The layout places filters on the left, a country-level map in the center, summary statistics on the right, and a concise institution list below.

## Public data

The current published data file `assets/agreements.json` contains only each institution's ID, name, country and broad agreement categories. There are 60 institutions, 25 countries / regions and four agreement categories. Default list order follows the supplied institution list.

The current application does not publish program details, descriptions, status fields, expiration dates, contacts or institutional location coordinates. The map uses public world geometry to place country-level markers. CSV downloads contain only country, institution and agreement type. Institution popups use the same public fields.

Statistics describe institutions, countries / regions and agreement categories. They do not assert numbers of active or pending agreements. An institution may have more than one agreement category.

This restriction applies to the current website and source tree. Earlier Git commits retain earlier versions; repository history has not been rewritten.

## Hosting

Static HTML/CSS/JavaScript on GitHub Pages, branch `msu-international-partners` in `robbiechen380/test`.

Website: https://robbiechen380.github.io/test/
Embed preview: https://robbiechen380.github.io/test/embed-demo.html

## Embedding

```html
<iframe src="https://robbiechen380.github.io/test/?embed=1"
  title="MSU Global Agreements" width="100%" height="480"
  style="border:0;" allow="fullscreen" allowfullscreen></iframe>
```

Compact windows use a filter drawer and a readable list layout. Overview, Map and List modes share filters. Full-screen and new-tab views preserve the selection. The preview page offers presets and a copyable embed snippet.

## Libraries

D3 v7 and topojson-client v3 (ISC); world-atlas / Natural Earth geometry (public domain). School marks belong to Missouri State University.

# MSU Global Agreements · Interactive Atlas

A map-first public explorer of Missouri State University's partnership network, inspired by the country-based exploration of the Illinois International Agreements Map. It uses Missouri State branding and the supplied institution list.

## Experience

- Full-window vector map with drag, wheel / pinch zoom, country selection and smooth geographic focus.
- Interactive globe projection with drag rotation, hemisphere clipping and zoom; map/globe switching retains the selection.
- Screen-space clusters show institution totals and expand on selection. Individual partner locations remain country-level.
- Selected-country overview with public agreement categories and institution previews. A subtle line illustrates the MSU connection.
- Floating search and country/type filters, day/night themes, readable text setting, full screen and new-tab fallback.
- Institution directory with search, sorting, pagination, public profiles and CSV download.
- Responsive embedded layout: filter drawer, country bottom sheet and dedicated directory panel.

The SVG map and globe use D3 and bundled world geometry. No map API key, external tile provider or account login is required. The map does not imply campus-level location accuracy or display travel routes.

## Public data

`assets/agreements.json` is unchanged: 60 institutions across 25 countries / regions and four agreement categories. Records contain only ID, institution name, country and broad agreement types. Default directory order follows the supplied list. One institution may appear under multiple categories.

No program details, descriptions, status fields, expiration dates, contact details or partner location coordinates are added to this version. Country map positions are calculated from public world geometry. CSV exports and profiles use the same limited fields. Statistics do not assert how many agreements are active or pending.

This applies to the current website and source tree. Earlier Git commits retain earlier versions; repository history has not been rewritten.

## Hosting and embedding

Static HTML/CSS/JavaScript on GitHub Pages, branch `msu-international-partners` in `robbiechen380/test`.

Website: https://robbiechen380.github.io/test/?v=atlas-5
Embed preview: https://robbiechen380.github.io/test/embed-demo.html?v=atlas-5

```html
<iframe src="https://robbiechen380.github.io/test/?embed=1&v=atlas-5"
  title="MSU Global Agreements" width="100%" height="480"
  style="border:0;" allow="fullscreen" allowfullscreen></iframe>
```

Embedded maps use Ctrl/Command + scroll for wheel zoom to reduce accidental scrolling interference; on-screen zoom buttons and touch gestures are also available. The globe can be dragged to rotate. The full-screen button needs the parent page to permit full screen; Open full view provides a new-tab alternative. Filters, projection, directory state, sort and page are encoded in the full-view link.

## Verification

`node --check app.js`
`node --check atlas-core.js`
`node tests/atlas-core.test.cjs`

Core tests cover public-data shape and totals, filtering, MOU search, clustering count conservation, shortest-path globe angles and safe CSV. Development DOM simulations cover map/globe gestures, finite projection paths, country focus, directory interactions, responsive states and full-screen preservation. A real-browser visual and touch QA pass is still required; the session does not expose the supported browser-control tool.

## Libraries and assets

D3 v7 and topojson-client v3 (ISC); world-atlas / Natural Earth geometry (public domain). DM Sans is self-hosted under the SIL Open Font License; see FONT-LICENSE.txt. University marks belong to Missouri State University.

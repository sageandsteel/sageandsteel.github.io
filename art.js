/* Sage & Steel illustrations. Shared by the site, the pin template and the share card.
   Each product is drawn on a 120 x 120 box and colored by its category (--c main, --cd deep, --cs soft). */
(function () {
  "use strict";

  const PAPER = "#FFFDF9", INK = "#26302B";

  const ART = {
    protein:
      '<rect class="a-d" x="35" y="14" width="50" height="15" rx="6"/>' +
      '<rect class="a-d" x="33" y="25" width="54" height="7" rx="3.5"/>' +
      '<path class="a-p" d="M31 31h58l-3.5 71a7 7 0 0 1-7 6.5H41.5a7 7 0 0 1-7-6.5z"/>' +
      '<path class="a-c" d="M32.1 52h55.8l-1.7 34H33.8z"/>' +
      '<path class="a-p" d="M60 57c9.5 3.5 11.5 13.5 5.2 21.6-9-1.8-11.6-11.6-5.2-21.6z"/>' +
      '<path class="a-ln" d="M62.6 77c-1.6-5-1.6-9.4 0-14.4" stroke="var(--cd)" stroke-width="1.6"/>' +
      '<rect class="a-hl" x="37" y="35" width="4" height="64" rx="2"/>' +
      '<rect class="a-s" x="47" y="93" width="26" height="4" rx="2"/>',

    creatine:
      '<rect class="a-d" x="22" y="34" width="62" height="13" rx="5.5"/>' +
      '<rect class="a-p" x="24" y="45" width="58" height="60" rx="10"/>' +
      '<rect class="a-c" x="24" y="60" width="58" height="27"/>' +
      '<path class="a-p" d="M53 64.5l2.9 6 6 2.9-6 2.9-2.9 6-2.9-6-6-2.9 6-2.9z"/>' +
      '<rect class="a-hl" x="29" y="50" width="4" height="50" rx="2"/>' +
      '<rect class="a-s" x="40" y="94" width="26" height="4" rx="2"/>' +
      '<path class="a-d" d="M86 86h22v3.5a11 11 0 0 1-22 0z"/>' +
      '<path class="a-p" d="M88 86c3-4.6 15-4.6 18 0z"/>' +
      '<rect class="a-d" x="105" y="80" width="12" height="4.5" rx="2.25" transform="rotate(-24 105 82)"/>',

    bars:
      '<g transform="rotate(13 60 74)">' +
        '<path class="a-d" d="M22 62h76l5 3-5 3 5 3-5 3 5 3-5 3 5 3-5 3H22l-5-3 5-3-5-3 5-3-5-3 5-3-5-3 5-3z"/>' +
        '<rect class="a-s" x="44" y="68" width="32" height="12" rx="3"/>' +
      '</g>' +
      '<g transform="rotate(-11 60 50)">' +
        '<path class="a-c" d="M20 36h80l5 3.25-5 3.25 5 3.25-5 3.25 5 3.25-5 3.25 5 3.25-5 3.25H20l-5-3.25 5-3.25-5-3.25 5-3.25-5-3.25 5-3.25-5-3.25 5-3.25z"/>' +
        '<rect class="a-p" x="40" y="42" width="40" height="14" rx="3.5"/>' +
        '<rect class="a-c" x="46" y="47" width="20" height="4" rx="2" opacity=".7"/>' +
        '<rect class="a-hl" x="22" y="38.5" width="76" height="2.6" rx="1.3"/>' +
      '</g>',

    bottle:
      '<rect class="a-c" x="39" y="36" width="42" height="73" rx="14"/>' +
      '<rect class="a-s" x="39" y="59" width="42" height="11"/>' +
      '<path class="a-d" d="M41 39c0-12 8-17.5 19-17.5S79 27 79 39z"/>' +
      '<rect class="a-d" x="54" y="11" width="12" height="12" rx="4"/>' +
      '<path class="a-ln" d="M74 27.5c11.5-2.2 16 5.8 13.2 12.6-1.8 4.4-6.7 4.6-9.2 3.2" stroke="var(--cd)" stroke-width="4"/>' +
      '<rect class="a-hl" x="45" y="44" width="5" height="57" rx="2.5"/>',

    lmnt:
      '<g transform="rotate(-21 60 106)"><rect class="a-s" x="51" y="22" width="18" height="84" rx="4"/></g>' +
      '<g transform="rotate(21 60 106)"><rect class="a-d" x="51" y="22" width="18" height="84" rx="4"/></g>' +
      '<rect class="a-c" x="50" y="18" width="20" height="88" rx="4"/>' +
      '<path class="a-ln" d="M50.5 28.5h19" stroke="' + PAPER + '" stroke-width="1.6" stroke-dasharray="2.4 2.4"/>' +
      '<path class="a-p" d="M60 45c5.2 7 7.2 10.6 7.2 13.6a7.2 7.2 0 0 1-14.4 0c0-3 2-6.6 7.2-13.6z"/>' +
      '<rect class="a-p" x="54" y="77" width="12" height="3" rx="1.5" opacity=".75"/>' +
      '<rect class="a-p" x="56" y="83" width="8" height="3" rx="1.5" opacity=".55"/>',

    dumbbells:
      '<g transform="translate(8 34)">' +
        '<rect class="a-g" x="34" y="44" width="40" height="8" rx="4"/>' +
        '<path class="a-d" d="M16 35l11-6.5 11 6.5v26l-11 6.5-11-6.5z"/>' +
        '<path class="a-d" d="M70 35l11-6.5 11 6.5v26l-11 6.5-11-6.5z"/>' +
      '</g>' +
      '<rect class="a-g" x="34" y="44" width="40" height="8" rx="4"/>' +
      '<path class="a-c" d="M16 35l11-6.5 11 6.5v26l-11 6.5-11-6.5z"/>' +
      '<path class="a-c" d="M70 35l11-6.5 11 6.5v26l-11 6.5-11-6.5z"/>' +
      '<path class="a-hl" d="M16 35l11-6.5v39L16 61z" opacity=".32"/>' +
      '<path class="a-hl" d="M70 35l11-6.5v39L70 61z" opacity=".32"/>',

    bands:
      '<ellipse class="a-ln" cx="60" cy="82" rx="38" ry="15" stroke="var(--cs)" stroke-width="11"/>' +
      '<ellipse class="a-ln" cx="60" cy="63" rx="38" ry="15" stroke="var(--cd)" stroke-width="11"/>' +
      '<ellipse class="a-ln" cx="60" cy="44" rx="38" ry="15" stroke="var(--c)" stroke-width="11"/>' +
      '<ellipse class="a-ln" cx="60" cy="44" rx="38" ry="15" stroke="' + PAPER + '" stroke-width="1.2" stroke-dasharray="3 4" opacity=".75"/>' +
      '<ellipse class="a-ln" cx="60" cy="63" rx="38" ry="15" stroke="' + PAPER + '" stroke-width="1.2" stroke-dasharray="3 4" opacity=".45"/>',

    bangles:
      '<circle class="a-ln" cx="46" cy="68" r="25" stroke="var(--cd)" stroke-width="11"/>' +
      '<circle class="a-ln" cx="46" cy="68" r="25" stroke="' + PAPER + '" stroke-width="1.4" stroke-dasharray="1.6 9.4" opacity=".55"/>' +
      '<circle class="a-ln" cx="74" cy="52" r="25" stroke="var(--c)" stroke-width="11"/>' +
      '<circle class="a-ln" cx="74" cy="52" r="25" stroke="' + PAPER + '" stroke-width="1.4" stroke-dasharray="1.6 9.4" opacity=".6"/>' +
      '<rect class="a-g" x="93" y="46" width="8" height="12" rx="2.5"/>' +
      '<rect class="a-g" x="16" y="62" width="8" height="12" rx="2.5"/>',

    pad:
      '<rect class="a-g" x="3" y="57" width="114" height="7" rx="3.5"/>' +
      '<rect class="a-c" x="17" y="43" width="86" height="35" rx="17.5"/>' +
      '<rect class="a-d" x="35" y="43" width="7" height="35"/>' +
      '<rect class="a-d" x="78" y="43" width="7" height="35"/>' +
      '<path class="a-ln" d="M46 60.5h28" stroke="var(--cd)" stroke-width="2" stroke-dasharray="3.5 3.5"/>' +
      '<rect class="a-hl" x="24" y="47.5" width="72" height="4" rx="2"/>',

    mat:
      '<g transform="rotate(-8 60 60)">' +
        '<path class="a-c" d="M15 41H100V79H15a9 19 0 0 1 0-38z"/>' +
        '<rect class="a-hl" x="19" y="46" width="77" height="4" rx="2"/>' +
        '<rect class="a-k" x="33" y="40" width="5" height="40" rx="2" opacity=".85"/>' +
        '<rect class="a-k" x="70" y="40" width="5" height="40" rx="2" opacity=".85"/>' +
        '<path class="a-ln" d="M35.5 40c4.6-19 32.4-19 37 0" stroke="' + INK + '" stroke-width="3" opacity=".85"/>' +
        '<ellipse class="a-d" cx="100" cy="60" rx="9.5" ry="19"/>' +
        '<path class="a-ln" d="M100 61.5c-1.6 0-2.2-2-1.2-3.2 1.6-1.8 4.4-.4 4.6 2.2.3 3.6-3.4 5.8-6.4 4.4-4-1.8-4.2-8-1-11 4-3.8 10.4-1.2 11.2 4.4" stroke="var(--cs)" stroke-width="1.6"/>' +
      '</g>',

    roller:
      '<g transform="rotate(-6 60 60)">' +
        '<path class="a-c" d="M16 38H100V84H16a10 23 0 0 1 0-46z"/>' +
        '<path class="a-ln" d="M30 38v46M45 38v46M60 38v46M75 38v46M90 38v46" stroke="var(--cd)" stroke-width="2.4" opacity=".5"/>' +
        '<path class="a-ln" d="M9 53.5H100M9 68.5H100" stroke="var(--cd)" stroke-width="2.4" opacity=".5"/>' +
        '<rect class="a-hl" x="18" y="42" width="78" height="4" rx="2"/>' +
        '<ellipse class="a-d" cx="100" cy="61" rx="10" ry="23"/>' +
        '<ellipse class="a-p" cx="100" cy="61" rx="4.6" ry="11"/>' +
      '</g>',

    gun:
      '<path class="a-st" d="M53 56h24l-4.4 44a6.5 6.5 0 0 1-6.5 6h-2.2a6.5 6.5 0 0 1-6.5-6z"/>' +
      '<rect class="a-d" x="56" y="74" width="18" height="17" rx="3.5"/>' +
      '<rect class="a-st" x="18" y="31" width="74" height="30" rx="15"/>' +
      '<rect class="a-st" x="90" y="40" width="10" height="12" rx="2"/>' +
      '<circle class="a-c" cx="106" cy="46" r="10.5"/>' +
      '<circle class="a-hl" cx="103" cy="42.5" r="3"/>' +
      '<circle class="a-d" cx="25" cy="46" r="8.5"/>' +
      '<circle class="a-p" cx="25" cy="46" r="3.6"/>' +
      '<rect class="a-hl" x="36" y="35.5" width="46" height="4" rx="2"/>'
  };

  /* Category palette: main, deep, soft. Keep in step with the tokens in index.html. */
  const CAT = {
    fuel:     ["#D98B6A", "#B4694B", "#F6E0D4"],
    hydrate:  ["#8FB3C9", "#5D879F", "#DDEAF1"],
    strength: ["#94A88A", "#5F7457", "#E2E9DA"],
    restore:  ["#B5A3D1", "#8A74AE", "#ECE5F5"]
  };
  const ITEM_CAT = {
    protein: "fuel", creatine: "fuel", bars: "fuel",
    bottle: "hydrate", lmnt: "hydrate",
    dumbbells: "strength", bands: "strength", bangles: "strength", pad: "strength",
    mat: "restore", roller: "restore", gun: "restore"
  };
  const vars = cat => { const c = CAT[cat] || CAT.strength; return `--c:${c[0]};--cd:${c[1]};--cs:${c[2]}`; };

  /* Shared fills so the drawings render the same on every page. */
  const ART_CSS =
    ".a-c{fill:var(--c)}.a-d{fill:var(--cd)}.a-s{fill:var(--cs)}.a-p{fill:" + PAPER + "}.a-k{fill:" + INK + "}" +
    ".a-g{fill:#BFC6C1}.a-st{fill:#8E9792}.a-hl{fill:#fff;opacity:.5}.a-ln{fill:none;stroke-linecap:round;stroke-linejoin:round}";

  function art(id, cls) {
    return `<svg class="art${cls ? " " + cls : ""}" viewBox="0 0 120 120" style="${vars(ITEM_CAT[id])}" aria-hidden="true" focusable="false">${ART[id] || ""}</svg>`;
  }

  /* The tote: [id, x, y, size, rotation, sways]. Back items peek out of the bag; front items hang off it or sit beside it. */
  const TOTE_BACK = [
    ["mat", 92, 112, 170, -66],
    ["roller", 262, 140, 136, 30],
    ["bottle", 176, 110, 148, 4],
    ["protein", 236, 168, 114, 8]
  ];
  const TOTE_FRONT = [
    ["bangles", 102, 218, 86, 0, true],
    ["bands", 90, 418, 94, 0],
    ["bars", 262, 412, 106, 6],
    ["dumbbells", 0, 384, 120, 0],
    ["gun", 334, 372, 124, -8]
  ];

  function toteItem([id, x, y, size, rot, sway], live, names) {
    const inner = `<g transform="translate(${x} ${y}) scale(${(size / 120).toFixed(3)})"><g class="tt-in${sway ? " tt-sway" : ""}"><g transform="rotate(${rot || 0} 60 60)" style="${vars(ITEM_CAT[id])}">${ART[id]}</g>${live ? '<rect class="tt-hit" width="120" height="120"/>' : ""}</g></g>`;
    if (!live) return `<g>${inner}</g>`;
    const name = (names && names[id]) || id;
    return `<g class="tt-item" data-add="${id}" tabindex="0" role="button" aria-label="Add ${name} to your bag">${inner}</g>`;
  }

  const sparkle = (x, y, r, fill) =>
    `<path d="M${x} ${y - r}C${x + r * 0.18} ${y - r * 0.18} ${x + r * 0.18} ${y - r * 0.18} ${x + r} ${y}C${x + r * 0.18} ${y + r * 0.18} ${x + r * 0.18} ${y + r * 0.18} ${x} ${y + r}C${x - r * 0.18} ${y + r * 0.18} ${x - r * 0.18} ${y + r * 0.18} ${x - r} ${y}C${x - r * 0.18} ${y - r * 0.18} ${x - r * 0.18} ${y - r * 0.18} ${x} ${y - r}Z" fill="${fill}"/>`;

  function tote(opts) {
    const o = opts || {}, live = !!o.interactive, names = o.names || {};
    const back = TOTE_BACK.map(it => toteItem(it, live, names)).join("");
    const front = TOTE_FRONT.map(it => toteItem(it, live, names)).join("");
    return `<svg class="tote" viewBox="0 0 460 500" ${live ? 'role="group" aria-label="Open gym tote. Tap anything to add it to your bag."' : 'aria-hidden="true"'} focusable="false">
<style>${ART_CSS}</style>
<path d="M60 476V240a170 170 0 0 1 340 0v236z" fill="#E2E9DA"/>
<circle cx="372" cy="118" r="46" fill="#F6E0D4"/>
${sparkle(92, 150, 11, "#D98B6A")}${sparkle(404, 252, 8, "#94A88A")}${sparkle(58, 316, 6, "#B5A3D1")}${sparkle(330, 74, 6, "#94A88A")}
<ellipse cx="230" cy="482" rx="200" ry="11" fill="${INK}" opacity=".08"/>
<path d="M180 264C180 152 280 152 280 264" fill="none" stroke="#4C6046" stroke-width="10" stroke-linecap="round"/>
<path d="M112 254H348L346.6 266H113.4Z" fill="#D8C7AC"/>
<g class="tt-back">${back}</g>
<g class="tt-bag">
<path d="M112 254H348L364 452Q366 476 342 476H118Q94 476 96 452Z" fill="#EFE5D5"/>
<path d="M112 254H348L350.4 284H109.6Z" fill="#E5D8C3"/>
<path d="M107.6 296H352.4" stroke="#CDBDA4" stroke-width="1.6" stroke-dasharray="5 5" fill="none"/>
<path d="M326 254h22l16 198q2 24-22 24h-6z" fill="#E5D8C3" opacity=".55"/>
<g transform="translate(230 344)" fill="#5F7457"><path d="M0 14C-1-2 6-12 18-15 17-3 10 9 0 14Z"/><path d="M0 14C-2 4-8-3-17-4-16 5-9 12 0 14Z" opacity=".75"/><path d="M0 14V26" stroke="#5F7457" stroke-width="2" stroke-linecap="round"/></g>
<text x="230" y="404" text-anchor="middle" font-family="Fraunces, Georgia, serif" font-size="31" font-style="italic" fill="${INK}" opacity=".88">Sage &amp; Steel</text>
<text x="230" y="428" text-anchor="middle" font-family="'DM Sans', Arial, sans-serif" font-size="10.5" letter-spacing="3.2" fill="${INK}" opacity=".55">STRENGTH FOR THE SOFT LIFE</text>
</g>
<rect x="141" y="254" width="19" height="26" rx="3" fill="#5F7457"/><rect x="300" y="254" width="19" height="26" rx="3" fill="#5F7457"/>
<path d="M150.5 268C150.5 120 309.5 120 309.5 268" fill="none" stroke="#5F7457" stroke-width="13" stroke-linecap="round"/>
<g class="tt-front">${front}</g>
</svg>`;
  }

  window.SS = { ART, CAT, ITEM_CAT, ART_CSS, vars, art, tote, sparkle };
})();

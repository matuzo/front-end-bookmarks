---
title: Math functions
short_desc: "Allow numeric CSS values to be written as mathematical expressions."
tags:
  - css
  - values
  - entry
permalink: css/properties/{{ title | slug }}/index.html
definition:
  text: "The math functions allow numeric CSS values to be written as mathematical expressions."
  cite:
    text: "11. Mathematical Expressions"
    url: https://drafts.csswg.org/css-values-4/#funcdef-clamp
links: "mathcss"
date: 2020-05-07
---

<h2 class="h3"><span>Code sample</span></h2>

```css
.type {
  /* Force the font-size to stay between 12px and 100px */
  font-size: clamp(12px, 10 * (1vw + 1vh) / 2, 100px);
}
```

---
title: clamp()
title_clean: clamp
short_desc: "Takes three calculations—a minimum value, a central value, and a maximum value"
tags:
  - css
  - values
  - entry
permalink: css/properties/{{ title_clean }}/index.html
definition:
  text: "The clamp() function takes three calculations—a minimum value, a central value, and a maximum value."
  cite:
    text: "11.2. Comparison Functions: min(), max(), and clamp()"
    url: https://drafts.csswg.org/css-values-4/#comp-func
links: "clamp"
date: 2020-05-16
---

<h2 class="h3"><span>Code sample</span></h2>

```css
.type {
  /* Force the font-size to stay between 12px and 100px */
  font-size: clamp(12px, 10 * (1vw + 1vh) / 2, 100px);
}
```

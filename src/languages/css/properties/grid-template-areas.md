---
title: grid-template-areas
short_desc: "Specifies named grid areas."
tags:
  - css
  - properties
  - entry
permalink: css/properties/{{ title | slug }}/index.html
definition:
  text: "This property specifies named grid areas, which are not associated with any particular grid item, but can be referenced from the grid-placement properties."
  cite:
    text: "7.3. Named Areas: the grid-template-areas property"
    url: https://www.w3.org/TR/css-masking-1/#the-clip-path
links: "grid-template-areas"
---

<h2 class="h3"><span>Code sample</span></h2>

```css
.grid {
  display: grid;
  grid-template-areas: "head head"
                       "nav  main"
                       "foot ...."
}
```

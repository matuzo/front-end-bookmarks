---
title: "scroll-behavior"
short_desc: "Specifies the scrolling behavior for a scrolling box."
tags:
  - css
  - properties
  - entry
permalink: css/properties/{{ title | slug }}/index.html
definition:
  text: "Specifies the scrolling behavior for a scrolling box, when scrolling happens due to navigation, CSSOM scrolling APIs, or scroll snapping operations not initiated by the user."
  cite:
    text: "13.1. Smooth Scrolling: The scroll-behavior Property"
    url: https://drafts.csswg.org/cssom-view/#propdef-scroll-behavior
links: "scroll-behavior"
date: 2021-01-14
---

<h2 class="h3"><span>Code sample</span></h2>

```css
/* Animate scrolling only if users don’t prefer reduced motion */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
```

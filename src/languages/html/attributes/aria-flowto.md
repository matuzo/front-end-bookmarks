---
title: aria-flowto
short_desc: Allows assistive technology to override the general default of reading in document source order.trigger. "
tags:
  - html
  - attributes
  - entry
permalink: html/attributes/{{ title | slug }}/index.html
definition:
  text: "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order."
  cite:
    text: "aria-flowto (property)"
    url: https://www.w3.org/TR/wai-aria/#aria-flowto
links: "ariaflowto"
date: 2020-04-18
sm_img: images/sm/aria-flowto.jpg
---

<h2 class="h3"><span>Code sample</span></h2>

```html
<div style="display: flex;">
    <a href="/" style="order: 3;" id="i1">One</a>
    <br>
    <a href="/" style="order: 2;" id="i2" aria-flowto="i1">Two</a>
    <br>
    <a href="/" style="order: 1;" id="i3" aria-flowto="i2">Three</a>
</div>
```
